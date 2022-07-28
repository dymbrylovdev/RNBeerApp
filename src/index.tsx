import * as React from 'react';
import {NavigationContainer, } from '@react-navigation/native';
import {createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import BeerElement from './screens/BeerElement';
import {Image, StyleSheet, } from 'react-native';
import { RootStackParamList } from './screens/navigation/RootStackPrams';

const Tab = createBottomTabNavigator<RootStackParamList>();

const Main: React.FC = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarOptions: {showIcon: true},
          tabBarIcon: ({focused, color, size}) => {
            let iconName: any = '';
            let style: any = null;

            if (route.name === 'Beers') {
              iconName = require('./assets/images/beer.png');
              style = focused? styles.active : null;
            } else if (route.name === 'BeerInfo') {
              iconName = require('./assets/images/info.png');
              style = focused? styles.active : null;
            }

            return <Image style={{...styles.icon,...style}} source={iconName} />;
          },
          tabBarStyle: {
            height: 80,
          },
          tabBarLabel:''
        })}>
        <Tab.Screen name="Beers" component={Home} />
        <Tab.Screen name="BeerInfo" component={BeerElement} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    zIndex: -100,
  },
  active: {
    transform:[
      {scale: 1.1}
    ]
  },
  wrapImg: {
    alignItems: 'center',
  },
});

export default Main;
