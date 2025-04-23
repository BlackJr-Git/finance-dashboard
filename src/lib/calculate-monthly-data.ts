import { Forecast, MonthlyFinancialData } from "@/types";

/**
 * Calcule les données financières mensuelles (recettes et dépenses) à partir d'un forecast
 * @param forecast Le forecast à analyser
 * @returns Un tableau de données financières mensuelles
 */
export function calculateMonthlyData(forecast: Forecast): MonthlyFinancialData[] {
  // Tableau des noms des mois en français
  const monthNames = [
    "janvier", "février", "mars", "avril", "mai", "juin", 
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];
  
  // Initialiser le tableau de données mensuelles
  const monthlyData: MonthlyFinancialData[] = monthNames.map(mois => ({
    mois,
    recettes: 0,
    depenses: 0
  }));

  // Parcourir tous les budgets du forecast
  forecast.forecastBudgets.forEach(budget => {
    // Parcourir chaque entrée du budget
    budget.entries.forEach(entry => {
      // Déterminer si c'est une recette ou une dépense
      const isIncome = entry.cashFlowType === 'INCOME';
      
      // Ajouter les valeurs mensuelles aux données correspondantes
      monthlyData[0].recettes += isIncome ? entry.januaryValue : 0;
      monthlyData[0].depenses += !isIncome ? entry.januaryValue : 0;
      
      monthlyData[1].recettes += isIncome ? entry.februaryValue : 0;
      monthlyData[1].depenses += !isIncome ? entry.februaryValue : 0;
      
      monthlyData[2].recettes += isIncome ? entry.marchValue : 0;
      monthlyData[2].depenses += !isIncome ? entry.marchValue : 0;
      
      monthlyData[3].recettes += isIncome ? entry.aprilValue : 0;
      monthlyData[3].depenses += !isIncome ? entry.aprilValue : 0;
      
      monthlyData[4].recettes += isIncome ? entry.mayValue : 0;
      monthlyData[4].depenses += !isIncome ? entry.mayValue : 0;
      
      monthlyData[5].recettes += isIncome ? entry.juneValue : 0;
      monthlyData[5].depenses += !isIncome ? entry.juneValue : 0;
      
      monthlyData[6].recettes += isIncome ? entry.julyValue : 0;
      monthlyData[6].depenses += !isIncome ? entry.julyValue : 0;
      
      monthlyData[7].recettes += isIncome ? entry.augustValue : 0;
      monthlyData[7].depenses += !isIncome ? entry.augustValue : 0;
      
      monthlyData[8].recettes += isIncome ? entry.septemberValue : 0;
      monthlyData[8].depenses += !isIncome ? entry.septemberValue : 0;
      
      monthlyData[9].recettes += isIncome ? entry.octoberValue : 0;
      monthlyData[9].depenses += !isIncome ? entry.octoberValue : 0;
      
      monthlyData[10].recettes += isIncome ? entry.novemberValue : 0;
      monthlyData[10].depenses += !isIncome ? entry.novemberValue : 0;
      
      monthlyData[11].recettes += isIncome ? entry.decemberValue : 0;
      monthlyData[11].depenses += !isIncome ? entry.decemberValue : 0;
    });
  });

  return monthlyData;
}

/**
 * Version plus optimisée qui utilise un tableau pour éviter la répétition de code
 * @param forecast Le forecast à analyser
 * @returns Un tableau de données financières mensuelles
 */
export function calculateMonthlyDataOptimized(forecast: Forecast): MonthlyFinancialData[] {
  // Tableau des noms des mois en français
  const monthNames = [
    "janvier", "février", "mars", "avril", "mai", "juin", 
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];
  
  // Clés des mois dans l'objet entry
  const monthKeys = [
    "januaryValue", "februaryValue", "marchValue", "aprilValue", 
    "mayValue", "juneValue", "julyValue", "augustValue", 
    "septemberValue", "octoberValue", "novemberValue", "decemberValue"
  ];
  
  // Initialiser le tableau de données mensuelles
  const monthlyData: MonthlyFinancialData[] = monthNames.map(mois => ({
    mois,
    recettes: 0,
    depenses: 0
  }));

  // Parcourir tous les budgets du forecast
  forecast.forecastBudgets.forEach(budget => {
    // Parcourir chaque entrée du budget
    budget.entries.forEach(entry => {
      // Déterminer si c'est une recette ou une dépense
      const isIncome = entry.cashFlowType === 'INCOME';
      
      // Ajouter les valeurs mensuelles aux données correspondantes
      monthKeys.forEach((key, index) => {
        const value = entry[key as keyof typeof entry] as number;
        if (isIncome) {
          monthlyData[index].recettes += value;
        } else {
          monthlyData[index].depenses += value;
        }
      });
    });
  });

  return monthlyData;
}
