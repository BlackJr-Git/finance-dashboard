/*
  Warnings:

  - You are about to drop the `Finance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Finance";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Forecast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startYear" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Forecast_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForecastBudget" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "budgetType" TEXT NOT NULL,
    "forecastId" TEXT NOT NULL,
    CONSTRAINT "ForecastBudget_forecastId_fkey" FOREIGN KEY ("forecastId") REFERENCES "Forecast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BudgetTypeEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "budgetType" TEXT NOT NULL,
    "cashFlowType" TEXT NOT NULL,
    "januaryValue" REAL NOT NULL DEFAULT 0,
    "februaryValue" REAL NOT NULL DEFAULT 0,
    "marchValue" REAL NOT NULL DEFAULT 0,
    "aprilValue" REAL NOT NULL DEFAULT 0,
    "mayValue" REAL NOT NULL DEFAULT 0,
    "juneValue" REAL NOT NULL DEFAULT 0,
    "julyValue" REAL NOT NULL DEFAULT 0,
    "augustValue" REAL NOT NULL DEFAULT 0,
    "septemberValue" REAL NOT NULL DEFAULT 0,
    "octoberValue" REAL NOT NULL DEFAULT 0,
    "novemberValue" REAL NOT NULL DEFAULT 0,
    "decemberValue" REAL NOT NULL DEFAULT 0,
    "unitPrice" REAL NOT NULL DEFAULT 0,
    "productionPrice" REAL NOT NULL DEFAULT 0,
    "articleType" TEXT,
    "budgetId" TEXT NOT NULL,
    CONSTRAINT "BudgetTypeEntry_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "ForecastBudget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ForecastArticle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "articleType" TEXT NOT NULL,
    "unitPrice" REAL NOT NULL,
    "productionPrice" REAL NOT NULL,
    "januaryValue" REAL NOT NULL DEFAULT 0,
    "februaryValue" REAL NOT NULL DEFAULT 0,
    "marchValue" REAL NOT NULL DEFAULT 0,
    "aprilValue" REAL NOT NULL DEFAULT 0,
    "mayValue" REAL NOT NULL DEFAULT 0,
    "juneValue" REAL NOT NULL DEFAULT 0,
    "julyValue" REAL NOT NULL DEFAULT 0,
    "augustValue" REAL NOT NULL DEFAULT 0,
    "septemberValue" REAL NOT NULL DEFAULT 0,
    "octoberValue" REAL NOT NULL DEFAULT 0,
    "novemberValue" REAL NOT NULL DEFAULT 0,
    "decemberValue" REAL NOT NULL DEFAULT 0,
    "forecastId" TEXT NOT NULL,
    CONSTRAINT "ForecastArticle_forecastId_fkey" FOREIGN KEY ("forecastId") REFERENCES "Forecast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
