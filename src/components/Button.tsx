import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import * as Res from '../res';

type ButtonProps = {
  label: string;
  labelTestId?: string;
  handlePress?: () => void;
  marginTop?: number;
  backgroundColor?: string;
};

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : Res.Constants.Colors.Grey,
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

  const handlePress = () => {
    if (props.handlePress !== undefined) {
      props.handlePress();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, styles.elevation]}
      onPress={handlePress}>
      <Text testID={props.labelTestId}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
