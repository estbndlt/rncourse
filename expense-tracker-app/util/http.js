import axios from 'axios';

export const storeExpense = (expenseData) => {
  axios.post(
    'https://react-native-course-111bf-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
};
