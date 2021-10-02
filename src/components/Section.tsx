import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import * as Res from '../res';

type SectionProps = {
  title: string;
  titleTestId?: string;
  children?: React.ReactNode;
};

const styles = StyleSheet.create({
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
  freeSpace: {
    height: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
});

const Section: React.FunctionComponent<SectionProps> = (
  props: SectionProps,
) => {
  return (
    <View style={styles.section}>
      <View style={styles.freeSpace}>
        <Text testID={props.titleTestId} style={styles.sectionTitle}>
          {props.title}
        </Text>
      </View>
      {props.children}
    </View>
  );
};

export default Section;
