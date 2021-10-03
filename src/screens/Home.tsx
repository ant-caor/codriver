import * as React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';
import * as Components from '../components';
import * as Utils from '../utils';

import {useRecoilState, useRecoilValue} from 'recoil';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

type HomeProps = {
  stackProps?: NativeStackScreenProps<any>;
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    marginTop: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  seeDeliveredContainer: {
    marginBottom: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  },
});

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [, setDeliveries] = useRecoilState(State.Atoms.deliveriesState);
  const [, setSelectedDeliveryId] = useRecoilState(
    State.Atoms.selectedDeliveryIdState,
  );
  const activeDelivery = useRecoilValue<State.Models.Delivery | null>(
    State.Selectors.activeDeliveryState,
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
        console.log(`[Home screen] Error getting deliveries: ${err}`),
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

  const getHeader = (): React.ReactElement | undefined => {
    if (activeDelivery !== null) {
      return (
        <Components.Delivery
          delivery={activeDelivery}
          handleTouchOnDelivery={() => handleTouchOnDelivery(activeDelivery.id)}
        />
      );
    }
    return undefined;
  };

  const seeDelivered = () => {
    props?.stackProps?.navigation?.navigate('DeliveredDeliveries');
  };

  return (
    <Components.Screen showBackButton={false} stackProps={props?.stackProps}>
      <View style={styles.seeDeliveredContainer}>
        <Components.Button
          label={'See delivered deliveries'}
          handlePress={seeDelivered}
        />
      </View>
      <Components.Section
        title={'Deliveries'}
        titleTestId={Res.Constants.TestIds.Home.DeliveriesSectionTitle}>
        {isLoading && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator />
          </View>
        )}
        {!isLoading && (
          <Components.List
            header={getHeader()}
            data={
              unactiveDeliveries
                ? Utils.getUndeliveredDeliveries(
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

export default Home;
