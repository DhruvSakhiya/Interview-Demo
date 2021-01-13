import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createStackNavigator} from '@react-navigation/stack'
import bottomNavigation from '../Bottom/index'

const drawer = createDrawerNavigator();
const stack = createStackNavigator();

const index = () => {
        return (
            <drawer.Navigator>
              <drawer.Screen name="Dialpad" options={{drawerLabel:'Dial Pad'}} component={bottomNavigation} />
              <drawer.Screen name="Register" options={{drawerLabel:'Register'}} component={dummyStack} />
            </drawer.Navigator>
          );
}

export const dummyStack = () =>{
return(
    <View>
        <Text>Dummy Content</Text>
    </View>
)
}

export default index
