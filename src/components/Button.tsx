import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import * as Res from '../res';

type ButtonProps = {
  label: string;
  handlePress: () => void;
  marginTop?: number;
};

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Res.Constants.Colors.Grey,
      paddingHorizontal: Res.Constants.Dimensions.BUTTON_HORIZONTAL_PADDING,
      paddingVertical: Res.Constants.Dimensions.BUTTON_VERTICAL_PADDING,
      borderRadius: Res.Constants.Dimensions.BUTTON_RADIUS,
      marginTop: props.marginTop,
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
  });

  return (
    <TouchableOpacity
      style={[styles.button, styles.elevation]}
      onPress={props.handlePress}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
