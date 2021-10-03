import * as React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';
import * as Components from '../components';
import * as Utils from '../utils';

import {useRecoilState, useRecoilValue} from 'recoil';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

type DeliveredDeliveriesPros = {
  stackProps?: NativeStackScreenProps<any>;
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    marginTop: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const DeliveredDeliveries: React.FunctionComponent<DeliveredDeliveriesPros> = (
  props: DeliveredDeliveriesPros,
) => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [, setDeliveries] = useRecoilState(State.Atoms.deliveriesState);
  const [, setSelectedDeliveryId] = useRecoilState(
    State.Atoms.selectedDeliveryIdState,
  );
  const unactiveDeliveries = useRecoilValue<State.Models.Delivery[] | null>(
    State.Selectors.unactiveDeliveriesState,
  );
  const [deliveredDeliveries] = useRecoilState(
    State.Atoms.deliveredDeliveriesState,
  );

  React.useEffect(() => {
    setLoading(true);
    API.Calls.getDeliveries()
      .then(deliveries => {
        setDeliveries(deliveries);
        setLoading(false);
      })
      .catch(err =>
        console.log(
          `[DeliveredDeliveries screen] Error getting deliveries: ${err}`,
        ),
      );
  }, [setDeliveries]);

  const handleTouchOnDelivery = (id: string) => {
    setSelectedDeliveryId(id);
    props?.stackProps?.navigation?.navigate('DeliveryDetails', {id});
  };

  const renderDelivery = (
    delivery: State.Models.Delivery,
  ): React.ReactElement => {
    return (
      <Components.Delivery
        key={delivery.id}
        delivery={delivery}
        handleTouchOnDelivery={() => handleTouchOnDelivery(delivery.id)}
      />
    );
  };

  return (
    <Components.Screen showBackButton={true} stackProps={props?.stackProps}>
      <Components.Section
        title={'Delivered deliveries'}
        titleTestId={Res.Constants.TestIds.DeliveredDeliveries.Title}>
        {isLoading && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator />
          </View>
        )}
        {!isLoading && (
          <Components.List
            data={
              unactiveDeliveries
                ? Utils.getDeliveredDeliveries(
                    unactiveDeliveries,
                    deliveredDeliveries,
                  )
                : []
            }
            renderItem={({item}) => renderDelivery(item)}
          />
        )}
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveredDeliveries;
