import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import https from "https";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/shared/authOptions";

const agent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === "development" ? false : true,
});

const getSessionBasedOnContext = async () => {
  if (typeof window === "undefined") {
    // Contexte serveur
    return await getServerSession(authOptions);
  } else {
    // Contexte client
    return await getSession();
  }
};

const handleTokenRefresh = async (refreshToken: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_KEYCLOAK_TOKEN_URL}`,
      new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
        client_secret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      })
    );

    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresAt: Date.now() + response.data.expires_in * 1000,
    };
  } catch (error) {
    console.error("Échec du rafraîchissement du token :", error);
    throw error;
  }
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  httpsAgent: agent,
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSessionBasedOnContext();
  // console.log("Token--------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",session?.accessToken)
  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const session = await getSessionBasedOnContext();
      if (!session?.refreshToken) {
        //   redirect(generateKeycloakLoginUrl());
        return;
      }

      try {
        const newTokens = await handleTokenRefresh(session.refreshToken);
        await signIn("keycloak", {
          accessToken: newTokens.accessToken,
          refreshToken: newTokens.refreshToken,
          redirect: false,
          callbackUrl: window.location.href,
        });

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
        }

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Erreur de rafraîchissement :", refreshError);
        redirect("/auth/logout");
      }
    }

    return Promise.reject(error);
  }
);

export const api = (cookies?: any) => {
  return axiosInstance;
};

export default api;