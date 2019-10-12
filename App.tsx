import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PatientsScreen from './screens/PatientsScreen';
import PatientScreen from './screens/PatientScreen';

const AppNavigator = createStackNavigator({
  Patients: { screen: PatientsScreen },
  Patient: { screen: PatientScreen }
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default createAppContainer(AppNavigator);