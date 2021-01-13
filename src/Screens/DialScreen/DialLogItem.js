import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { H } from '../../utils/Globalstyle'

const DialLogItem = ({item}) => {
    return (
        <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
        <Image  height='100%' style={styles.icon} source={require('../../Assets/fav_icon.png')} />
        </View>
        <View style={{width:'75%'}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'bold'}}>{item.number} 
        <Text> {`(${item.calls})`}</Text></Text>
        </View>
        <View style={styles.callerDetail}>
            <Text style={{fontWeight:'bold'}}>{item.callTime}</Text>
        <Text>{item.date}</Text>
        </View>
        </View>
        </View>
    )
}

export default DialLogItem

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        margin:10,
        borderBottomWidth:1,
        height:H(60),
        marginBottom:H(10)
    },
    iconContainer:{
        height:'100%',
        width:'20%',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    icon:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    callerDetail:{
        flexDirection:'row',
        marginTop:H(10),
        marginLeft:H(10),
        marginRight:H(10),
        justifyContent:'space-between'
    }
})
