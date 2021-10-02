import * as React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

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
    width: '100%',
  },
  sectionTitle: {
    fontSize: Res.Constants.Dimensions.TITLE_FONT_SIZE,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: Res.Constants.Dimensions.ITEM_RADIUS,
    padding: Res.Constants.Dimensions.ITEM_PADDING,
    marginBottom: Res.Constants.Dimensions.ITEM_BOTTOM_MARGIN,
    marginHorizontal: Res.Constants.Dimensions.ITEM_HOTIZONTAL_MARGIN,
  },
  elevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: Res.Constants.Dimensions.SHADOW_OFFSET_WIDTH,
      height: Res.Constants.Dimensions.SHADOW_OFFSET_HEIGHT,
    },
    shadowOpacity: Res.Constants.Dimensions.SHADOW_OPACITY,
    shadowRadius: Res.Constants.Dimensions.SHADOW_RADIUS,
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
      <TouchableOpacity
        style={[styles.card, styles.elevation]}
        onPress={handleTouchOnDelivery}>
        <Text key={delivery.id} style={styles.deliveryTitle}>
          Delivery #{delivery.id}
        </Text>
      </TouchableOpacity>
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
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={deliveries}
          renderItem={({item}) => renderDelivery(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
