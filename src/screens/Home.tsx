import * as React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';
import * as Components from '../components';

const Home: React.FunctionComponent<NativeStackScreenProps<any>> = (
  props: NativeStackScreenProps<any>,
) => {
  const [deliveries, setDeliveries] = React.useState<State.Models.Delivery[]>();

  React.useEffect(() => {
    API.Calls.getDeliveries().then(async response => {
      response.json().then((json: State.Models.Delivery[]) => {
        setDeliveries(json);
      });
    });
  }, []);

  const handleTouchOnDelivery = (id: string) => {
    props.navigation.navigate('DeliveryDetails', {id});
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
    <Components.Screen navigation={props.navigation} route={props.route}>
      <Components.Section
        title={'Deliveries'}
        titleTestId={Res.Constants.TestIds.Home.DeliveriesSectionTitle}>
        <Components.List
          data={deliveries ? deliveries : []}
          renderItem={({item}) => renderDelivery(item)}
        />
      </Components.Section>
    </Components.Screen>
  );
};

export default Home;
