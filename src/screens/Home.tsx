import * as React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';
import * as Components from '../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Res.Constants.Dimensions.SCREEN_PADDING,
  },
  deliveryTitle: {
    fontSize: Res.Constants.Dimensions.ITEM_TITLE_FONT_SIZE,
  },
  list: {
    width: '100%',
  },
  listContent: {
    width: '100%',
    paddingVertical: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
});

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation();
  const [deliveries, setDeliveries] = React.useState<State.Models.Delivery[]>();

  React.useEffect(() => {
    API.Calls.getDeliveries().then(async response => {
      response.json().then((json: State.Models.Delivery[]) => {
        setDeliveries(json);
      });
    });
  }, []);

  const handleTouchOnDelivery = () => {
    navigation.navigate('DeliveryDetails');
  };

  const renderDelivery = (
    delivery: State.Models.Delivery,
  ): React.ReactElement => {
    return (
      <Components.Item key={delivery.id} handlePress={handleTouchOnDelivery}>
        <Text key={delivery.id} style={styles.deliveryTitle}>
          Delivery #{delivery.id}
        </Text>
      </Components.Item>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Components.Section
        title={'Deliveries'}
        titleTestId={Res.Constants.TestIds.Home.DeliveriesSectionTitle}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={deliveries}
          renderItem={({item}) => renderDelivery(item)}
        />
      </Components.Section>
    </SafeAreaView>
  );
};

export default Home;
