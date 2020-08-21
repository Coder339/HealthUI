import React from 'react'
import { 
    View, 
    Text, 
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight } from 'react-native'
import Colors from '../constants/colors';
import DoctorSvg from "../utils/Svgs/DoctorSvg"
import GradientButton from 'react-native-gradient-buttons';

export default function Welcome({navigation}) {
    // const {navigation} = props.navigation;
    
    return (
        <View style={{flex:1,alignItems:'center',backgroundColor: "#fff"}}>
            
            <View style={{position:'absolute',top:40}}>
                <Text style={{
                      marginLeft:70,
                      fontSize:50,
                      color:'#56C596'}}>++
                </Text>
                <Text style={{
                      marginLeft:20,
                      fontSize:25,
                      color:Colors.color_blue}}>This is Health UI {'\n'}     Welcome!
                </Text>
                <Text style={{
                      marginLeft:20,
                      color:Colors.light_green}}>A health vertical UI kit made {'\n'}         with love for you
                </Text>
            </View>
            <View style={{flex:1,marginTop:150}}>
                <DoctorSvg/>
            </View>
            <View 
                style={{flex:1,
                        flexDirection:'row',
                        marginTop:200}}
                >
                <GradientButton
                    style={{}}
                    text='GET STARTED'
                    textStyle={{ fontSize: 20 }}
                    gradientBegin="#7BE495"
                    gradientEnd="#56C596"
                    gradientDirection="diagonal"
                    height={60}
                    width={300}
                    radius={25}
                    impact
                    impactStyle='Light'
                    onPressAction={() => navigation.toggleDrawer()}/>
            </View>
            <View style={{
                      flex:1,
                      position:'absolute',
                      bottom:50,
                      flexDirection:'row',
                      alignItems:'center'}}>
                <Text>Already have an Account?/</Text>
                <Text style={{color:Colors.color_blue,fontSize:22}}>SignIn</Text>

            </View>
             
        </View>
    )
}

const styles=StyleSheet.create({
    button:{
        flex:1,
        width:200,
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    fullWidthButton: {
        // backgroundColor: 'blue',
        height:42,
        width:400,
        opacity:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:200
      },
})
