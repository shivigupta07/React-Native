// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// export default function BudgetEntryScreen({ onSave, onShowItems }) {
//   const [itemName, setItemName] = useState('');
//   const [plannedAmount, setPlannedAmount] = useState('');
//   const [actualAmount, setActualAmount] = useState('');

//   const saveBudgetEntry = () => {
//     if (!itemName || !plannedAmount || !actualAmount) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     const entry = {
//       itemName,
//       plannedAmount: parseFloat(plannedAmount),
//       actualAmount: parseFloat(actualAmount),
//     };

//     onSave(entry);

//     // Clear input fields
//     setItemName('');
//     setPlannedAmount('');
//     setActualAmount('');
//   };

//   return (
//     <View>
//       <Text>Title: Budget entry</Text>
//       <Text>Name of the item:</Text>
//       <TextInput
//         placeholder="Enter item name"
//         value={itemName}
//         onChangeText={(text) => setItemName(text)}
//       />
//       <Text>Planned amount:</Text>
//       <TextInput
//         placeholder="Enter planned amount"
//         value={plannedAmount}
//         onChangeText={(text) => setPlannedAmount(text)}
//         keyboardType="numeric"
//       />
//       <Text>Actual amount:</Text>
//       <TextInput
//         placeholder="Enter actual amount"
//         value={actualAmount}
//         onChangeText={(text) => setActualAmount(text)}
//         keyboardType="numeric"
//       />
//       <Button title="Save" onPress={saveBudgetEntry} />
//       <Button title="Show Items" onPress={onShowItems} />
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <Text style={styles.label}>Planned amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter planned amount"
        value={plannedAmount}
        onChangeText={(text) => setPlannedAmount(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Actual amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter actual amount"
        value={actualAmount}
        onChangeText={(text) => setActualAmount(text)}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={saveBudgetEntry} />
      <Button title="Show Items" onPress={onShowItems} />
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginTop: 4,
  },
});
