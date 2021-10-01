import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as Screens from './screens';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen
          name="DeliveryDetails"
          component={Screens.DeliveryDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
