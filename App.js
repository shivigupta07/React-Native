import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetEntryScreen from './screens/BudgetEntryScreen';
import BudgetEntryListingScreen from './screens/BudgetEntryListingScreen';

const Stack = createStackNavigator();

export default function App() {
  const [budgetEntries, setBudgetEntries] = useState([]);

  const saveEntry = (entry) => {
    setBudgetEntries([...budgetEntries, entry]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BudgetEntry">
        <Stack.Screen
          name="BudgetEntry"
          options={{ title: 'Budget Entry' }}
        >
          {(props) => (
            <BudgetEntryScreen
              {...props}
              onSave={saveEntry}
              onShowItems={() => props.navigation.navigate('BudgetEntryListing')}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="BudgetEntryListing"
          options={{ title: 'Budget Entry Listing' }}
        >
          {(props) => <BudgetEntryListingScreen {...props} entries={budgetEntries} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
