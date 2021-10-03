import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilState, useRecoilValue} from 'recoil';
import {Text, View, StyleSheet, Platform, Linking} from 'react-native';
import openMap from 'react-native-open-maps';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';
import * as State from '../state';
import * as Utils from '../utils';

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

  const handleMarkAsUndelivered = () => {};

  const handleMarkAsDelivered = () => {};

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
    } else {
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
