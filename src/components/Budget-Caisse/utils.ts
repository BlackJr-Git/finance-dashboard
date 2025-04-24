// Utility functions
function calculateYearlyTotal(entry: any): number {
    return (
      entry.januaryValue +
      entry.februaryValue +
      entry.marchValue +
      entry.aprilValue +
      entry.mayValue +
      entry.juneValue +
      entry.julyValue +
      entry.augustValue +
      entry.septemberValue +
      entry.octoberValue +
      entry.novemberValue +
      entry.decemberValue
    );
  }
  
  function calculateProfitMargin(forecast: any): string {
    const margin =
      (forecast.financialResume.netIncome / forecast.salesRevenues) * 100;
    return margin.toFixed(1);
  }
  
  function calculateRoE(forecast: any): string {
    const roe =
      (forecast.financialResume.netIncome /
        forecast.financialResume.shareholdersEquity) *
      100;
    return roe.toFixed(1);
  }
  
  function calculateExpenseRatio(forecast: any): string {
    const ratio =
      (forecast.financialForecast.expenses / forecast.salesRevenues) * 100;
    return ratio.toFixed(1);
  }
  