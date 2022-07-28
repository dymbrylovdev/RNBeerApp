import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import {getBeers} from '../redux/reducers/beerList/AsyncActions/actionBeer';
import {IBeer} from '../redux/reducers/beerList/types';
import BeerItem from './BeerItem';

const Content: React.FC = () => {
  const beers: IBeer[] = useSelector((state: RootState) => state.beer.beers);
  const isLoad = useSelector((state: RootState) => state.beer.loading);
  const page = useSelector((state: RootState) => state.filter.page);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBeers({page}));
  }, []);

  const renderItem: ListRenderItem<IBeer> = ({item}) => <BeerItem beerElem={item}/>
  const renderKey = (item: IBeer, index: number) => String(item.id);

  const Activity = () => {
    return (
      <View style={styles.loader}>
        {!isLoad ? <ActivityIndicator /> : null}
      </View>
    );
  };
  
  const handleLoadMore = () => {
    dispatch(getBeers({page}));
  };

  return (
    <FlatList
      data={beers}
      renderItem={renderItem}
      keyExtractor={renderKey}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0}
      ListFooterComponent={Activity}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 44,
    padding: 10,
    fontSize: 18,
  },
  loader: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Content;
