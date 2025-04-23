// Enums
// export enum CashFlowType {
//   INCOME = "INCOME",
//   EXPENSE = "EXPENSE"
// }

// export enum BudgetType {
//   REVENUE = "REVENUE",
//   PERSONNEL = "PERSONNEL"
// }

// Types
export type CashFlowType = 'INCOME' | 'EXPENSE';
export type BudgetType = 'REVENUE' | 'PERSONNEL' | 'EXPENSE';
export type ArticleType = 'SERVICE' | 'PRODUCT';

// Interfaces
export interface BudgetEntry {
  title: string;
  januaryValue: number;
  februaryValue: number;
  marchValue: number;
  aprilValue: number;
  mayValue: number;
  juneValue: number;
  julyValue: number;
  augustValue: number;
  septemberValue: number;
  octoberValue: number;
  novemberValue: number;
  decemberValue: number;
  unitPrice?: number;
  productionPrice?: number;
  cashFlowType: CashFlowType;
}

export interface ForecastBudget {
  budgetType: BudgetType;
  entries: BudgetEntry[];
}

export interface SalesMarginRate {
  rate: number;
  title: string;
}

export interface ForecastArticle {
  title: string;
  articleType: ArticleType;
  unitPrice: number;
  productionPrice: number;
  januaryValue: number;
  februaryValue: number;
  marchValue: number;
  aprilValue: number;
  mayValue: number;
  juneValue: number;
  julyValue: number;
  augustValue: number;
  septemberValue: number;
  octoberValue: number;
  novemberValue: number;
  decemberValue: number;
}

export interface FinancialResume {
  netIncome: number;
  operatingIncome: number;
  shareholdersEquity: number;
}

export interface FinancialForecast {
  expenses: number;
  revenues: number;
  articlesSum: number;
}

export interface Forecast {
  id: string;
  startYear: number;
  salesRevenues: number;
  currentForecast: boolean;
  financialResume: FinancialResume;
  forecastBudgets: ForecastBudget[];
  salesMarginRates: SalesMarginRate[];
  forecastArticles: ForecastArticle[];
  financialForecast: FinancialForecast;
}

export interface MonthlyFinancialData {
  mois: string;
  recettes: number;
  depenses: number;
}

// Global wrapper (ex: API response)
export interface ForecastData {
  forecasts: Forecast[];
}
