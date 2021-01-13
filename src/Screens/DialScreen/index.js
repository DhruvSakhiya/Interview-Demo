import React,{useState} from 'react'
import { FlatList, StyleSheet, Text, View,TextInput, Image,TouchableOpacity } from 'react-native'
import { H, W } from '../../utils/Globalstyle'
import DialLogItem from './DialLogItem'

const DialScreen = () => {

    const [dialedNumber, setDialedNumber] = useState('');
    const [DummyData, setDummyData] = useState([
        {number:'+91 169874052',calls:14,date:'11 Jan 2021 12.34PM',callTime:'58 sec'},
        {number:'+91 698746321',calls:12,date:'11 Jan 2021 12.38PM',callTime:'12 sec'},
        {number:'+91 237894104',calls:2,date:'11 Jan 2021 12.40PM',callTime:'05 sec'},
        {number:'+91 237894104',calls:2,date:'11 Jan 2021 12.40PM',callTime:'05 sec'},
        {number:'+91 237894104',calls:2,date:'11 Jan 2021 12.40PM',callTime:'05 sec'}

    ])

    const onNumberPress = (number) =>{
        setDialedNumber(dialedNumber.concat(number));
    }

    const clearInput = () =>{
        setDialedNumber('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.dailLogContainer}>
                <FlatList
                    data={DummyData}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=><DialLogItem item={item}/>}
                />
            </View>
            <View style={styles.dialerContainer}>
            <View style={styles.inputContainer}>
            <View style={{width:'90%',justifyContent:'center',alignItems:'center'}}>
                <Text>{dialedNumber}</Text>
            </View>
                <TouchableOpacity onPress={()=>clearInput()} style={styles.inputLogoContainer}>
                <Image resizeMode='center' style={styles.clearLogo} height='10%' source={require('../../Assets/dialpad_clear.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.padRow}>
            <View style={styles.padItemContainer}>
            <TouchableOpacity onPress={()=>onNumberPress(1)} style={styles.pad}><Image resizeMode='center'  source={require('../../Assets/1_210.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(2)} style={styles.pad}><Image  source={require('../../Assets/2-212.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(3)} style={styles.pad}><Image  source={require('../../Assets/3-212.png')}/></TouchableOpacity>
            </View>
            </View>
            <View style={[styles.padRow,{marginTop:'5%'}]}>
            <View style={styles.padItemContainer}>
            <TouchableOpacity onPress={()=>onNumberPress(4)} style={styles.pad}><Image  source={require('../../Assets/4-212.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(5)} style={styles.pad}><Image  source={require('../../Assets/5-212.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(6)} style={styles.pad}><Image  source={require('../../Assets/6-212.png')}/></TouchableOpacity>
            </View>
            </View>
            <View style={[styles.padRow,{marginTop:'5%'}]}>
            <View style={styles.padItemContainer}>
            <TouchableOpacity onPress={()=>onNumberPress(7)} style={styles.pad}><Image  source={require('../../Assets/7-212.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(8)} style={styles.pad}><Image  source={require('../../Assets/8-212.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(9)} style={styles.pad}><Image  source={require('../../Assets/9-212.png')}/></TouchableOpacity>
            </View>
            </View>
            <View style={[styles.padRow,{marginTop:'5%'}]}>
            <View style={styles.padItemContainer}>
            <TouchableOpacity onPress={()=>onNumberPress('*')} style={styles.pad}><Image resizeMode='center'  source={require('../../Assets/star-210.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress(0)} style={styles.pad}><Image  source={require('../../Assets/0-212.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>onNumberPress('#')} style={styles.pad}><Image resizeMode='center'  source={require('../../Assets/hash-210.png')}/></TouchableOpacity>
            </View>
            </View>
            <View style={{marginTop:'5%'}}>
                <View style={styles.footerRow}>
                <TouchableOpacity style={styles.footerItem}>
                <Image resizeMode='center' source={require('../../Assets/fav_icon-3.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                <Image resizeMode='center' source={require('../../Assets/newdatacall.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerItem,{marginLeft:'2.5%'}]}>
                <Image resizeMode='center' source={require('../../Assets/newvoiceenable.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                <Image resizeMode='center' source={require('../../Assets/fav_icon.png')}/>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
    )
}

export default DialScreen

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    dailLogContainer:{
        width:'100%',
        height:'25%',
        backgroundColor:'white'
    },
    dialerContainer:{
        marginTop:H(10),
        height:'75%',
        backgroundColor:'white'
    },
    inputContainer:{
        width: '100%',
        flexDirection:'row',
        height:H(50),
        borderWidth:1
    },
    inputLogoContainer:{
        height:'100%',
        width:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    clearLogo:{
            height:'100%',
            justifyContent:'center',
            alignItems:'center',
    },
    padRow:{
        width:'85%',
        marginLeft:'10%',
        marginTop:'2%'
    },
    padItemContainer:{
        flexDirection:'row',
        marginRight:'5%',
        justifyContent:'space-between'
    },
    pad:{
        borderWidth:0.3,
        elevation:8,
        borderRadius:100,
        height:H(80),
        width:W(80),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    footerRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footerItem:{
        height:'40%',
        width:'25%',
        alignItems:'center',
        justifyContent:'center'
    }
})
