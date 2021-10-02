import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Res from '../res';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Res.Constants.Dimensions.SCREEN_PADDING,
  },
  section: {
    marginBottom: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
  sectionTitle: {
    fontSize: Res.Constants.Dimensions.TITLE_FONT_SIZE,
    fontWeight: 'bold',
  },
});

const Home: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text
          testID={Res.Constants.TestIds.Home.DeliveriesSectionTitle}
          style={styles.sectionTitle}>
          Deliveries
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
