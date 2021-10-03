import * as React from 'react';
import {VirtualizedList, ListRenderItem, StyleSheet} from 'react-native';

import * as Res from '../res';

interface ListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  header?: React.ReactElement;
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingHorizontal: 12,
  },
  listContent: {
    width: '100%',
    paddingVertical: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
});

const List = <T extends object>(props: ListProps<T>) => {
  const getItemCount = (data: T[]) => {
    return data?.length ? data?.length : 0;
  };

  const getItem = (data: T[], index: number) => {
    return data[index];
  };

  return (
    <VirtualizedList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={props.data}
      renderItem={props.renderItem}
      ListHeaderComponent={props.header}
      getItemCount={getItemCount}
      getItem={getItem}
      initialNumToRender={10}
    />
  );
};

export default List;
