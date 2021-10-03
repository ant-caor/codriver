import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import {requestAndroidLocationPermission} from '.';

type Location = {
  latitude: number;
  longitude: number;
};

/**
 * getDeviceLocation. A method to get the current device location if we have permission.
 * @returns a promise with the current device location.
 */
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

/**
 * A method to check if a location is valid.
 * @param location: an object containing a latitude and a longitude.
 * @returns Wether if the location is valid (true) or not (false).
 */
const locationIsValid = (location: Location | undefined): boolean => {
  return (
    location?.latitude !== undefined &&
    location?.latitude !== null &&
    location?.longitude !== undefined &&
    location?.longitude !== null
  );
};

/**
 * A method to format the driver location if it is valid.
 * @param location The driver location. Containing a latitude and a longitude.
 * @returns a string with the formatted driver location.
 */
const formatDriverLocation = (location: Location | undefined): string => {
  if (locationIsValid(location)) {
    return `Driver location: (${location?.latitude},${location?.longitude}).`;
  } else {
    return 'Driver location unknown.';
  }
};

export {getDeviceLocation, locationIsValid, formatDriverLocation};
