import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function BudgetEntryListingScreen() {
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('budgetEntries') || '[]');
    setEntries(storedEntries);
  }, []);

  const handleDeleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    // Update localStorage as needed
    localStorage.setItem('budgetEntries', JSON.stringify(updatedEntries));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry Listing</Text>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.entryContainer}>
            <View style={styles.entryInfo}>
              <Text style={styles.label}>Name: {item.itemName}</Text>
              <Text style={styles.label}>Planned Amount: {item.plannedAmount}</Text>
              <Text style={styles.label}>Actual Amount: {item.actualAmount}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteEntry(index)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  entryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  entryInfo: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
