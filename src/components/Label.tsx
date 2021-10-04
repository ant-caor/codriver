import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import * as Res from '../res';

type LabelProps = {
  text: string;
  textTestId?: string;
  backgroundColor?: string;
};

const Label: React.FunctionComponent<LabelProps> = (props: LabelProps) => {
  const styles = StyleSheet.create({
    activeLabel: {
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : Res.Constants.Colors.Green,
      width: Res.Constants.Dimensions.LABEL_WIDTH,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      paddingVertical: Res.Constants.Dimensions.LABEL_VERTICAL_PADDING,
      marginTop: Res.Constants.Dimensions.LABEL_MARGIN_TOP,
      borderRadius: Res.Constants.Dimensions.BUTTON_RADIUS,
    },
  });

  return (
    <View style={styles.activeLabel}>
      <Text testID={props.textTestId}>{props.text}</Text>
    </View>
  );
};

export default Label;
