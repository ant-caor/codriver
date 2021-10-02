import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import * as Screens from './screens';
import * as Res from './res';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Res.Constants.Routes.Home}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={Res.Constants.Routes.Home}
            component={Screens.Home}
          />
          <Stack.Screen
            name={Res.Constants.Routes.DeliveryDetails}
            component={Screens.DeliveryDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
