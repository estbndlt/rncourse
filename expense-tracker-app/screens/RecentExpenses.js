import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../ui/LoadingOverlay';
import ErrorOverlay from '../ui/ErrorOverlay';

const RecentExpense = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);

      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        console.log(error);
        setError('Could not fetch expenses!');
      }

      setIsFetching(false);
    };

    getExpenses();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 Days'}
      fallbackText={'No expenses registered in the last 7 days.'}
    />
  );
};

export default RecentExpense;
