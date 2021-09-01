import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import AddAbsence from '../screens/addAbsence';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Acceuil' />
            }
        }
    },
};


// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default HomeStack;