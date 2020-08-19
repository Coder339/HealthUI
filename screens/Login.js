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

export default function Login({navigation}) {

    
    const [username, setusername] = useState('')
    const [password,setPassword] = useState('')
    const [iconName,seticonName] = useState('eye-off')
    const [secureEntry,setsecureEntry] = useState(true)
    
    const usernameHandler = (text) => {
        setusername(text)
    }
    
    
    const passwordHandler = (text) => {
        setPassword(text)
    }
     
    const IconHandler = () =>{
        if (secureEntry){
            seticonName('eye')
        }else{
            seticonName('eye-off')
        }

        setsecureEntry(!secureEntry)
    }


        return (
          <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={styles.screen}>
                <View style={{flex:1,marginTop:60,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:50,color:'#56C596'}}>++</Text>
                    <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:Colors.color_blue}}>Login</Text>
                        <Text style={{fontSize:20,color:Colors.light_green}}>Enter your login details to {"\n"}    access your account</Text>
                    </View>
                </View>
                
                <View style={{flex:1,alignItems:'center',marginTop:80}}>  
                        <View>
                            <TextInput 
                                style={styles.input1} 
                                placeholder='  abc@example.com'
                                onChangeText={usernameHandler}
                                value={username}
                            />
                        </View>
                        <View style={{marginTop:10}}>
                            <View 
                                style={styles.input2}
                                >
                                <TextInput 
                                    secureTextEntry={secureEntry}
                                    placeholder='  Enter Your Password...'
                                    onChangeText={passwordHandler}
                                    value={password}
                                />
                                <TouchableOpacity 
                                    style={{marginRight:15}}
                                    onPress={()=>IconHandler()}>
                                    <Icon 
                                    name={iconName} size={20} color='#CFDAED'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
                <View style={styles.button}>
                    <GradientButton 
                        text='LOG IN'
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
        width: 285,
        height:75,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        fontSize:16,
        color:'#68B2A0'
    },
    input2:{shadowColor: 'black',
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 5,
            width:285,
            height:75,
            backgroundColor:'#fff',
            flexDirection:'row',
            alignItems:'center',
            borderRadius: 15,
            justifyContent:'space-between'
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