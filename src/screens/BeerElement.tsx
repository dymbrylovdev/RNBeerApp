import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {IBeer} from '../redux/reducers/beerList/types';
import {RootState} from '../redux/store';

const BeerElement: React.FC = () => {
  const beerItem = useSelector((state: RootState) => state.beerItem.beer);

  const beerInfo = (beerItem: IBeer) => {
    return (
      <>
        <View style={styles.topContainer}>
          <Image
            style={styles.iconBeer}
            source={{
              uri: beerItem.image_url,
            }}
          />
          <View>
            <Text style={styles.nameBeer}>{beerItem.name} </Text>
            <Text style={styles.nameBeer}>{beerItem.abv}% </Text>
            <Text style={styles.taglineText}>{beerItem.tagline}</Text>
          </View>
        </View>
        <View  style={styles.bottomContainer}>
          <Text style={styles.textTitle}>Food peiring:</Text>
          {beerItem.food_pairing.map((itemFood, index) => {
              return <Text style={styles.textList} key={index}>- {itemFood}</Text>
          })}
          <Text style={styles.textTitle}>Description:</Text>
          <Text style={styles.textDescription}>{beerItem.description} </Text>
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {beerItem ? beerInfo(beerItem) : <Text style={styles.textTitle}>Выбирите элемент</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  topContainer: {
    flex: 1,
    maxWidth: 250,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom:20,
  },
  bottomContainer: {
    maxWidth:"100%",
  },
  iconBeer: {
    height: 200,
    width: 100,
    resizeMode: 'contain',
    marginRight:20
  },
  nameBeer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 10,
    color: '#000',
  },
  taglineText: {
    fontSize: 20,
  },
  textTitle: {
    fontSize: 20,
    marginBottom:10,
    marginTop:20
  },
  textList: {
    fontSize: 17,
    marginLeft:20,
    lineHeight:22,
  },
  textDescription: {
    fontSize: 17,
    lineHeight:22,
  }
});

export default BeerElement;
