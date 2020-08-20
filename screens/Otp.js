import React,{useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    Keyboard } from 'react-native'

import GradientButton from 'react-native-gradient-buttons';
import Colors from '../constants/colors';
import { MaterialCommunityIcons as Icon,Ionicons } from '@expo/vector-icons';

export default function Otp({navigation}){

    
    const [num1,setnum1] = useState('')
    const [num2,setnum2] = useState('')
    const [num3,setnum3] = useState('')
    const [num4,setnum4] = useState('')
    
    const num1Handler = (text) => {
        setnum1(text)
    }
    
    const num2Handler = (text) => {
        setnum2(text)
    }

    const num3Handler = (text) => {
        setnum3(text)
    }

    const num4Handler = (text) => {
        setnum4(text)
    }
     


        return (
          <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={styles.screen}>
                <View style={{flex:1,marginTop:60,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:50,color:'#56C596'}}>++</Text>
                    <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:Colors.color_blue}}>Verify your number with {"\n"}     codes sent to you</Text>
                    </View>
                </View>
                <View style={{flex:1,
                              flexDirection:'row',
                              alignItems:'center',
                              marginTop:40}}>  
                        <View>
                            <TextInput 
                                textAlign={'center'}
                                keyboardType='numeric'
                                style={styles.input1} 
                                onChangeText={num1Handler}
                                value={num1}
                            />
                        </View>
                        <View>
                            <TextInput 
                                textAlign={'center'}
                                keyboardType='numeric'
                                style={styles.input1} 
                                onChangeText={num2Handler}
                                value={num2}
                            />
                        </View>
                        <View>
                            <TextInput
                                textAlign={'center'}
                                keyboardType='numeric' 
                                style={styles.input1} 
                                onChangeText={num3Handler}
                                value={num3}
                            />
                        </View>
                        <View>
                            <TextInput 
                                textAlign={'center'}
                                keyboardType='numeric'
                                style={styles.input1} 
                                onChangeText={num4Handler}
                                value={num4}
                            />
                        </View>
                        
                </View>
                <View style={styles.button}>
                    <GradientButton 
                        text='Continue'
                        textStyle={{ fontSize: 20 }}
                        gradientBegin="#7BE495"
                        gradientEnd="#56C596"
                        gradientDirection="diagonal"
                        height={60}
                        width={300}
                        radius={25}
                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.toggleDrawer()}
                    />
                </View>
                <View style={{
                            flexDirection:'row',
                            marginTop:40,
                            justifyContent:'center',
                            alignItems:'center'}}>
                    <Text style={{fontSize:20,color:'#B2FBF7'}}>I didn't receive the code. </Text>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Text style={{fontSize:20,color:Colors.color_blue}}>Resend</Text>
                    </TouchableOpacity>
                </View>
             
            </View>      
          </ScrollView>
        
        )
    }

const styles=StyleSheet.create({
    screen:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#fff'
    },
    input1: {
        // borderColor: '',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        width: 60,
        height:60,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        fontSize:16,
        color:'#68B2A0'
    },
    button:{
        // position:'absolute',
        // bottom:50,
        marginTop:50,
        width:220,
        justifyContent:'center',
        alignItems:'center',
        
    },
    container:{
        flex:1,
        justifyContent:'center'
    }
})



