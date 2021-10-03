import {PermissionsAndroid, PermissionStatus} from 'react-native';

const requestAndroidLocationPermission =
  (): Promise<PermissionStatus> | null => {
    try {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permission to access device location',
          message:
            'Codriver needs your permission to update delivery information.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
      return null;
    }
  };

export {requestAndroidLocationPermission};
