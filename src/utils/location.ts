import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import {requestAndroidLocationPermission} from '.';

type Location = {
  latitude: number;
  longitude: number;
};

const getDeviceLocation = (): Promise<Location> => {
  const options = {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000};
  return new Promise(resolve => {
    if (Platform.OS === 'android') {
      requestAndroidLocationPermission()?.then(status => {
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              resolve({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
              });
            },
            error => {
              console.log(error.code, error.message);
            },
            options,
          );
        }
      });
    } else if (Platform.OS === 'ios') {
      // Geolocation.requestAuthorization() works only in ios.
      Geolocation.requestAuthorization('whenInUse').then(result => {
        if (result === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              resolve({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
              });
            },
            error => {
              console.log(error.code, error.message);
            },
            options,
          );
        }
      });
    }
  });
};

const locationIsValid = (location: Location | undefined): boolean => {
  return (
    location?.latitude !== undefined &&
    location?.latitude !== null &&
    location?.longitude !== undefined &&
    location?.longitude !== null
  );
};

const formatDriverLocation = (location: Location | undefined): string => {
  if (locationIsValid(location)) {
    return `Driver location: (${location?.latitude},${location?.longitude}).`;
  } else {
    return 'Driver location unknown.';
  }
};

export {getDeviceLocation, locationIsValid, formatDriverLocation};