import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import * as Res from '../res';

type SectionProps = {
  title: string;
  titleTestId?: string;
  children?: React.ReactNode;
};

const Section: React.FunctionComponent<SectionProps> = (
  props: SectionProps,
) => {
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
  });

  return (
    <View style={styles.section}>
      <Text testID={props.titleTestId} style={styles.sectionTitle}>
        {props.title}
      </Text>
      {props.children}
    </View>
  );
};

export default Section;
