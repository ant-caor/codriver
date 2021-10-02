import * as React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import * as Res from '../res';

interface ListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  listContent: {
    width: '100%',
    paddingVertical: Res.Constants.Dimensions.LIST_VERTICAL_PADDING,
  },
});

const List = <T extends object>(props: ListProps<T>) => {
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={props.data}
      renderItem={props.renderItem}
    />
  );
};

export default List;
