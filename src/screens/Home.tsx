import * as React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';
import * as Components from '../components';
import {useRecoilState, useRecoilValue} from 'recoil';

type HomeProps = {
  stackProps?: NativeStackScreenProps<any>;
};

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const [deliveries, setDeliveries] = useRecoilState(
    State.Atoms.deliveriesState,
  );
  const [, setSelectedDeliveryId] = useRecoilState(
    State.Atoms.selectedDeliveryIdState,
  );
  const activeDelivery = useRecoilValue<State.Models.Delivery | null>(
    State.Selectors.activeDeliveryState,
  );

  React.useEffect(() => {
    API.Calls.getDeliveries().then(async response => {
      response.json().then((json: State.Models.Delivery[]) => {
        setDeliveries(json);
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

  return (
    <Components.Screen showBackButton={false} stackProps={props?.stackProps}>
      {activeDelivery !== null && (
        <Components.Section
          title={'Active delivery'}
          titleTestId={Res.Constants.TestIds.Home.ActiveDeliverySectionTitle}>
          <Components.Delivery delivery={activeDelivery} />
        </Components.Section>
      )}
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
