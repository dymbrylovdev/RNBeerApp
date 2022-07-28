import React from 'react';
import {useDispatch} from 'react-redux';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {setBeerItem} from '../redux/reducers/currentBeer/currentBeerSlice';
import {RootState} from '../redux/store';
import {IBeer} from '../redux/reducers/beerList/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../screens/navigation/RootStackPrams';

type BeerItemProps = {
  beerElem: IBeer;
};

type beerItemScreenProp = StackNavigationProp<RootStackParamList, 'BeerInfo'>;

const BeerItem: React.FC<BeerItemProps> = ({beerElem}) => {
  const navigation = useNavigation<beerItemScreenProp>();
  const beerItem = useSelector((state: RootState) => state.beerItem.beer);
  const dispatch = useDispatch();

  const handleOnPressOut = () => {
    dispatch(setBeerItem(beerElem));
    navigation.navigate('BeerInfo');
  };

  return (
    <View style={styles.container} key={beerElem.id}>
      <Pressable
        onPress={handleOnPressOut}
        style={({pressed}) => [
          {
            backgroundColor:
              pressed || beerElem.id === beerItem?.id
                ? 'rgb(210, 230, 255)'
                : 'white',
          },
          styles.wrapperCustom,
        ]}>
        <View style={styles.wrapImg}>
          <Image
            style={styles.iconBeer}
            source={{
              uri: beerElem.image_url,
            }}
          />
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>
            {beerElem.name} {beerElem.abv}%
          </Text>
          <Text>{beerElem.food_pairing}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginLeft: 20,
    marginRight: 20,
  },
  textWrap: {
    height: '100%',
    width: '100%',
    maxWidth: 200,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '900',
    marginBottom: 10,
  },
  iconBeer: {
    height: '100%',
    resizeMode: 'contain',
  },
  wrapImg: {
    width: 90,
    height: '100%',
  },
  wrapperCustom: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
export default BeerItem;
