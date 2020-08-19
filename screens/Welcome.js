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
            
            
            <View style={{flex:1,marginTop:100}}>
                <DoctorSvg/>
            </View>
            <View 
                style={{flex:1,
                        flexDirection:'row',
                        marginTop:200}}
                >
                <GradientButton
                    style={{ }}
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
                      bottom:60,
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
