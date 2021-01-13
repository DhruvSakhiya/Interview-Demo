import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigation from './Drawer'


const index = () => {
    const stackScreens = createStackNavigator();
    return (
        <NavigationContainer>
            <stackScreens.Navigator>
                <stackScreens.Screen name='Dialpad' options={{title:'Dial',headerTitleAlign:'center'}} component={DrawerNavigation}/>
            </stackScreens.Navigator>
        </NavigationContainer>
    )
}

export default index
