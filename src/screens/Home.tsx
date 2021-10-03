import * as React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';
import * as Components from '../components';
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

  React.useEffect(() => {
    setLoading(true);
    API.Calls.getDeliveries().then(async response => {
      response.json().then((json: State.Models.Delivery[]) => {
        setDeliveries(json);
        setLoading(false);
      });
    });
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

  return (
    <Components.Screen showBackButton={false} stackProps={props?.stackProps}>
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
            data={unactiveDeliveries ? unactiveDeliveries : []}
            renderItem={({item}) => renderDelivery(item)}
          />
        )}
      </Components.Section>
    </Components.Screen>
  );
};

export default Home;
