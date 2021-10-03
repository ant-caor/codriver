import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilState, useRecoilValue} from 'recoil';
import {Text, View, StyleSheet} from 'react-native';
import openMap from 'react-native-open-maps';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';
import * as State from '../state';
import * as Utils from '../utils';
import * as API from '../api';

type DeliveryDetailsProps = {
  stackProps?: NativeStackScreenProps<any>;
};

const styles = StyleSheet.create({
  actionsContainer: {
    marginTop: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  driverInformation: {
    marginBottom: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
});

const DeliveryDetails: React.FunctionComponent<DeliveryDetailsProps> = (
  props: DeliveryDetailsProps,
) => {
  const selectedDelivery = useRecoilValue<State.Models.Delivery | null>(
    State.Selectors.selectedDeliveryState,
  );
  const [activeDeliveryId, setActiveDeliveryId] = useRecoilState(
    State.Atoms.activeDeliveryIdState,
  );
  const [userLocation, setUserLocation] =
    React.useState<{latitude: number; longitude: number}>();

  React.useEffect(() => {
    Utils.getDeviceLocation().then(location => {
      setUserLocation(location);
    });
  }, []);

  const handleMakeActive = () => {
    if (selectedDelivery !== null) {
      if (activeDeliveryId === '') {
        setActiveDeliveryId(selectedDelivery.id);
        if (props?.stackProps !== undefined) {
          props?.stackProps?.navigation?.goBack();
        }
      }
    }
  };

  const finishDelivery = (status: API.Calls.Status) => {
    if (Utils.locationIsValid(userLocation) && userLocation) {
      console.log('Finishing delivery with status: ' + status);
      API.Calls.finishDelivery({
        deliveryId: activeDeliveryId,
        status: status,
        latitude: userLocation?.latitude,
        longitude: userLocation?.longitude,
      })
        .then(response => {
          response.json().then(json => {
            console.log('Result: ' + JSON.stringify(json, null, 2));
          });
        })
        .catch(error => {
          console.log('Error: ' + JSON.stringify(error, null, 2));
        });
    }
  };

  const handleMarkAsUndelivered = () => {
    finishDelivery(API.Calls.Status.UNDELIVERED);
  };

  const handleMarkAsDelivered = () => {
    finishDelivery(API.Calls.Status.DELIVERED);
  };

  const handleOpenInMaps = () => {
    if (
      selectedDelivery?.longitude !== undefined &&
      selectedDelivery?.latitude !== undefined
    ) {
      openMap({
        longitude: Number(selectedDelivery?.longitude),
        latitude: Number(selectedDelivery?.latitude),
        zoom: 11,
      });
    }
  };

  const getActions = () => {
    if (selectedDelivery?.id !== activeDeliveryId) {
      if (activeDeliveryId === '') {
        return (
          <Components.Button
            label={'Make active'}
            handlePress={handleMakeActive}
            marginTop={Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS}
            backgroundColor={Res.Constants.Colors.Grey}
          />
        );
      }
    } else if (Utils.locationIsValid(userLocation)) {
      return (
        <View style={styles.actionsContainer}>
          <Text>Mark as:</Text>
          <View style={styles.actionsRow}>
            <Components.Button
              label={'Undelivered'}
              handlePress={handleMarkAsUndelivered}
              marginTop={Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS}
            />
            <Components.Button
              label={'Delivered'}
              backgroundColor={Res.Constants.Colors.Green}
              handlePress={handleMarkAsDelivered}
              marginTop={Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <Components.Screen stackProps={props.stackProps} showBackButton={true}>
      <Text style={styles.driverInformation}>
        {Utils.formatDriverLocation(userLocation)}
      </Text>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        {selectedDelivery !== null && (
          <>
            <Text testID={Res.Constants.TestIds.DeliveryDetails.DeliveryId}>
              {Utils.formatDeliveryId(selectedDelivery)}
            </Text>
            <Text
              testID={Res.Constants.TestIds.DeliveryDetails.DeliveryCustomer}>
              {Utils.formatDeliveryCustomer(selectedDelivery)}
            </Text>
            <Text
              testID={Res.Constants.TestIds.DeliveryDetails.DeliveryAddress}>
              {Utils.formatDeliveryAddress(selectedDelivery)}
            </Text>
          </>
        )}
        <Components.Button
          label={'Open in maps'}
          handlePress={handleOpenInMaps}
          marginTop={Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS}
        />
        {getActions()}
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
