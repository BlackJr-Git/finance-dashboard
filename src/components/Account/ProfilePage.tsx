"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { User, Lock, CreditCard, Users, Edit, Trash } from "lucide-react";

interface ProfileSidebarItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
  onClick: () => void;
}

const ProfileSidebarItem: React.FC<ProfileSidebarItemProps> = ({
  icon,
  title,
  description,
  active = false,
  onClick
}) => {
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer hover:bg-muted transition-colors ${
        active ? "bg-muted" : ""
      }`}
      onClick={onClick}
    >
      <div className="mt-0.5 text-muted-foreground">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface ProfileInfoField {
  label: string;
  value: string;
  editable: boolean;
  type: "text" | "tel" | "email" | "select" | "number";
}

export const ProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("account");
  const [profileCompletion, setProfileCompletion] = useState<number>(56);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [profileFields, setProfileFields] = useState<ProfileInfoField[]>([
    { label: "Nom complet", value: "Junior Ngoy", editable: false, type: "text" },
    {
      label: "Email",
      value: "junior.ngoy@gmail.com",
      editable: false,
      type: "email"
    },
    { label: "Téléphone", value: "+243 01876206538", editable: false, type: "tel" }
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          setProfileImage(event.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  const handleUpdateProfile = () => {
    // Handle profile update logic here
    console.log("Profile updated:", profileFields);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 shrink-0">
        <Card>
          <CardContent className="p-4">
            {/* Profile Completion */}
            <div className="mb-6 bg-orange-100 dark:bg-orange-950/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-orange-900 dark:text-orange-400">
                  Complete profile
                </h3>
                <span className="text-sm font-medium text-orange-900 dark:text-orange-400">
                  {profileCompletion}%
                </span>
              </div>
              <Progress
                value={profileCompletion}
                className="h-2 bg-orange-200 dark:bg-orange-900/20"
              />
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full bg-white dark:bg-orange-900/10 dark:text-orange-400 dark:border-orange-900/20 dark:hover:bg-orange-900/20"
                onClick={() => {}}
              >
                Verify Identity
              </Button>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <ProfileSidebarItem
                icon={<User size={20} />}
                title="Account Information"
                description="Change your Account Information"
                active={activeSection === "account"}
                onClick={() => setActiveSection("account")}
              />
              <ProfileSidebarItem
                icon={<Lock size={20} />}
                title="Password"
                description="Change your Password"
                active={activeSection === "password"}
                onClick={() => setActiveSection("password")}
              />
              {/* <ProfileSidebarItem 
                icon={<CreditCard size={20} />}
                title="Payment Methods"
                description="Add Your Card / Wallet"
                active={activeSection === "payment"}
                onClick={() => setActiveSection("payment")}
              /> */}
              {/* <ProfileSidebarItem 
                icon={<Users size={20} />}
                title="Invite Your Friends"
                description="Get $3 For Each Invitation!"
                active={activeSection === "invite"}
                onClick={() => setActiveSection("invite")}
              /> */}
            </nav>
          </CardContent>
        </Card>
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Personal Informations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 border-4 border-background">
                  <AvatarImage
                    src={profileImage || "/placeholder-avatar.png"}
                    alt="Profile"
                  />
                  <AvatarFallback>MX</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-lg">Monir UX Designer</h3>
                  <div className="flex gap-2 mt-2">
                    <Button variant="default" size="sm" asChild>
                      <label>
                        Upload New Picture
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDeleteImage}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid grid-cols-1 gap-6">
                {profileFields.map((field, index) => (
                  <div key={index} className="relative">
                    {field.editable && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        <Edit size={16} />
                      </Button>
                    )}
                    {field.type === "select" ? (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {field.label}
                        </p>
                        <Select defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={`Select ${field.label}`}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {field.label}
                        </p>
                        <Input
                          type={field.type}
                          value={field.value}
                          onChange={(e) => {
                            const newFields = [...profileFields];
                            newFields[index].value = e.target.value;
                            setProfileFields(newFields);
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Address Fields */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Adresse Complete
                  </p>
                  <Input
                    type="text"
                    placeholder="Rue, numéro, code postal..."
                    onChange={(e) => {
                      // Handle address change
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pays</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="belgium">Belgique</SelectItem>
                      <SelectItem value="switzerland">Suisse</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ville</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une ville" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Paris</SelectItem>
                      <SelectItem value="lyon">Lyon</SelectItem>
                      <SelectItem value="marseille">Marseille</SelectItem>
                      <SelectItem value="bordeaux">Bordeaux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Province</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ile-de-france">
                        Île-de-France
                      </SelectItem>
                      <SelectItem value="rhone-alpes">Rhône-Alpes</SelectItem>
                      <SelectItem value="paca">PACA</SelectItem>
                      <SelectItem value="aquitaine">Aquitaine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Update Button */}
              <div className="flex justify-end">
                <Button
                  className="w-64 align-self-end"
                  onClick={handleUpdateProfile}
                >
                  Mettre à jour
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
