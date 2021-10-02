import * as React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Res from '../res';
import * as State from '../state';
import * as API from '../api';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Res.Constants.Dimensions.SCREEN_PADDING,
  },
  section: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
  sectionTitle: {
    fontSize: Res.Constants.Dimensions.TITLE_FONT_SIZE,
    fontWeight: 'bold',
  },
  delivery: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const Home: React.FunctionComponent = () => {
  const [deliveries, setDeliveries] = React.useState<State.Models.Delivery[]>();

  React.useEffect(() => {
    API.Calls.getDeliveries().then(async response => {
      response.json().then((json: State.Models.Delivery[]) => {
        setDeliveries(json);
      });
    });
  }, []);

  const renderDelivery = (
    delivery: State.Models.Delivery,
  ): React.ReactElement => {
    return (
      <View style={styles.delivery}>
        <Text key={delivery.id} style={styles.sectionTitle}>
          {delivery.id}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text
          testID={Res.Constants.TestIds.Home.DeliveriesSectionTitle}
          style={styles.sectionTitle}>
          Deliveries
        </Text>
        <FlatList
          data={deliveries}
          renderItem={({item}) => renderDelivery(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
