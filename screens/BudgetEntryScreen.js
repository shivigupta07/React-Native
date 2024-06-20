import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, Button as PaperButton } from 'react-native-paper';

export default function BudgetEntryScreen({ onSave, onShowItems }) {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const saveBudgetEntry = () => {
    if (!itemName || !plannedAmount || !actualAmount) {
      alert('Please fill in all fields.');
      return;
    }

    const entry = {
      itemName,
      plannedAmount: parseFloat(plannedAmount),
      actualAmount: parseFloat(actualAmount),
    };

    // Save entry to localStorage
    const existingEntries = JSON.parse(localStorage.getItem('budgetEntries') || '[]');
    const updatedEntries = [...existingEntries, entry];
    localStorage.setItem('budgetEntries', JSON.stringify(updatedEntries));

    onSave(entry);

    // Clear input fields
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry</Text>
      <Text style={styles.label}>Name of the item:</Text>
      <PaperTextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <Text style={styles.label}>Planned amount:</Text>
      <PaperTextInput
        style={styles.input}
        placeholder="Enter planned amount"
        value={plannedAmount}
        onChangeText={(text) => setPlannedAmount(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Actual amount:</Text>
      <PaperTextInput
        style={styles.input}
        placeholder="Enter actual amount"
        value={actualAmount}
        onChangeText={(text) => setActualAmount(text)}
        keyboardType="numeric"
      />
      <PaperButton mode="contained" style={styles.button} onPress={saveBudgetEntry}>
        Save
      </PaperButton>
      <PaperButton mode="outlined" style={styles.button} onPress={onShowItems}>
        Show Items
      </PaperButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
  },
});
