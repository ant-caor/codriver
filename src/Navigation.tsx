import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import * as Screens from './screens';
import * as Res from './res';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={Res.Constants.Routes.Home}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={Res.Constants.Routes.Home}>
            {props => (
              <Screens.Home
                stackProps={{
                  navigation: props.navigation,
                  route: props.route,
                }}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name={Res.Constants.Routes.DeliveryDetails}>
            {props => (
              <Screens.DeliveryDetails
                stackProps={{
                  navigation: props.navigation,
                  route: props.route,
                }}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
