import React from 'react'
import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {dummyStack} from '../Drawer'
import { H } from '../../utils/Globalstyle';
import DialScreen from '../../Screens/DialScreen';

const BottomTabNavigation = createBottomTabNavigator();
const bottomTabs = () => {
    return (
        <BottomTabNavigation.Navigator screenOptions={{tabBarLabel:''}} initialRouteName='dialScreen'>
        <BottomTabNavigation.Screen name='contactScreen' component={dummyStack} options={{
            tabBarIcon:()=>
            <Image height='100%' style={{marginTop:H(10)}} resizeMode='center' source={require('../../Assets/dialpad_contacts.png')}/>
            }}/>
        <BottomTabNavigation.Screen name='callerScreen' component={dummyStack} options={{
            tabBarIcon:()=>
            <Image height='100%' style={{marginTop:H(10)}} resizeMode='center' source={require('../../Assets/dialpad_calls.png')}/>
            }}/>
        <BottomTabNavigation.Screen name='dialScreen' component={DialScreen} options={{
            tabBarIcon:({color,focused,size})=>{
                let imagePath
                if(focused)
                {
                    imagePath=require('../../Assets/dialpad_sel_keypad.png')
                }
                else{
                    imagePath=require('../../Assets/dialpad_keypad.png')
                }
                return(
            <Image height='100%' style={{marginTop:H(15)}} resizeMode='center' source={imagePath}/>
                )}}}/>
        <BottomTabNavigation.Screen name='messageScreen' component={dummyStack} options={{tabBarIcon:()=><Image height='100%' style={{marginTop:H(10)}} resizeMode='center' source={require('../../Assets/dialpad_inbox.png')}/>}}/>
        <BottomTabNavigation.Screen name='settingScreen' component={dummyStack} options={{tabBarIcon:()=><Image height='100%' style={{marginTop:H(10)}} resizeMode='center' source={require('../../Assets/dialpad_setings.png')}/>}}/>
        </BottomTabNavigation.Navigator>
    )
}

export default bottomTabs
