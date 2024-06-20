// import React from 'react';
// import { View, Text, FlatList } from 'react-native';

// export default function BudgetEntryListingScreen({ entries }) {
//   return (
//     <View>
//       <Text>Title: Budget entry listing</Text>
//       <FlatList
//         data={entries}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View>
//             <Text>Name: {item.itemName}</Text>
//             <Text>Planned Amount: {item.plannedAmount}</Text>
//             <Text>Actual Amount: {item.actualAmount}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function BudgetEntryListingScreen({ entries }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry Listing</Text>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.label}>Name: {item.itemName}</Text>
            <Text style={styles.label}>Planned Amount: {item.plannedAmount}</Text>
            <Text style={styles.label}>Actual Amount: {item.actualAmount}</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 4,
  },
});
