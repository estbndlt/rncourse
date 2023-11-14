import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountChangedHandler = () => {};

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInputStyle}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          style={styles.rowInputStyle}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          // autoCapitalize: 'sentences', // this is default already
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInputStyle: {
    flex: 1,
  },
});
