import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store/store';

import BudgetEntryScreen from './screens/BudgetEntryScreen';
import BudgetEntryListingScreen from './screens/BudgetEntryListingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BudgetEntry">
          <Stack.Screen
            name="BudgetEntry"
            component={BudgetEntryScreen}
            options={{ title: 'Budget Entry' }}
          />
          <Stack.Screen
            name="BudgetEntryListing"
            component={BudgetEntryListingScreen}
            options={{ title: 'Budget Entry Listing' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
