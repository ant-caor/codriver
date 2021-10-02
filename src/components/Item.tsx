import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Res from '../res';

type ItemProps = {
  children?: React.ReactNode;
  handlePress?: () => void;
};

const styles = StyleSheet.create({
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
});

const Item: React.FunctionComponent<ItemProps> = (props: ItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, styles.elevation]}
      onPress={props.handlePress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Item;
