import React from 'react'
import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native'
import { Ionicons,MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import GradientButton from 'react-native-gradient-buttons';
import Colors from '../../constants/colors';
import Card from '../../utils/Card';

export default function Tab1({navigation}) {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:'#fff'}}>
            <View style={{
                  flex:1.3,
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:'#CFE9E8',
                  width:'100%',
                  borderBottomLeftRadius:30,
                  borderBottomRightRadius:30}}>
                <View style={{
                      flex:1,
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      marginBottom:60,
                      width:'80%'}}>
                    <View>
                        <Ionicons name='md-menu' size={25} color={Colors.color_blue}/>
                    </View>
                    <View>
                        <Image 
                        source={require('../../src/images/elon.jpg')} 
                        style={{ width: 50, height: 50,borderRadius:50 }}
                        />
                    </View>
                    <View style={{
                          position:'absolute',
                          right:-2,
                          top:70,
                          borderRadius:50,
                          backgroundColor:'green',
                          height:12,
                          width:12}}></View>
                </View>
                <View style={{flex:0.5,position:'absolute',top:100,left:60}}>
                    <Text style={{
                          color:Colors.color_blue,
                          fontSize:25}}>Good Evening {'\n'}Alexis
                    </Text>
                    <Text style={{
                          color:Colors.light_green}}>Your target for today is to keep positive mindset {'\n'}
                          and smile to everyone you meet 
                    </Text>
                </View>
                <View style={{flex:0.5,flexDirection:'row',alignItems:'center',}}>
                    <GradientButton 
                            text='More Details'
                            textStyle={{ fontSize: 15 }}
                            // gradientBegin="#7BE495"
                            // gradientEnd="#56C596"
                            // gradientDirection="diagonal"
                            height={30}
                            width={100}
                            radius={25}
                            impact
                            impactStyle='Light'
                            onPressAction={() => navigation.toggleDrawer()}
                        />
                    <GradientButton 
                            text='View Your Profile'
                            textStyle={{ fontSize: 15 }}
                            // gradientBegin="#7BE495"
                            // gradientEnd="#56C596"
                            // gradientDirection="diagonal"
                            height={30}
                            width={130}
                            radius={25}
                            impact
                            impactStyle='Light'
                            onPressAction={() => navigation.toggleDrawer()}
                        />
                </View>
            </View>
            <View style={{flex:1,justifyContent:'center',width:'100%'}}>
                <Text style={{
                      color:Colors.color_blue,
                      position:'absolute',
                      top:10,
                      left:10}}>what are you doing today?
                </Text>
                <View style={{
                      flexDirection:'row',
                      marginTop:10,
                      width:'100%'}}>
                    <View style={{position:'absolute',left:20,top:10}}>
                        <Icons name='brain' size={35} color={Colors.color_blue}/>
                    </View>
                    <View style={{marginLeft:90}}>
                        <Text style={styles.text}>Doctor</Text>
                        <Text style={{
                              color:Colors.color_blue,
                              fontSize:20}}>Brain Checkout
                        </Text>
                        <Text style={styles.text}>Have an appointment today?</Text>
                    </View>
                    <View style={{position:'absolute',right:20}}>
                        <GradientButton 
                                text='View'
                                textStyle={{ fontSize: 15 }}
                                gradientBegin="#F75010"
                                gradientEnd="#F75010"
                                // gradientDirection="diagonal"
                                height={25}
                                width={60}
                                radius={25}
                                impact
                                impactStyle='Light'
                                onPressAction={() => navigation.toggleDrawer()}
                        />
                    </View>
                </View>
                <View style={{
                      borderWidth:0.3,
                      width:'85%',
                      alignItems:'center',
                      borderColor:'#95C4C2',
                      marginVertical:5,
                      marginLeft:25}}>
                </View>
                <View style={{
                      flexDirection:'row',
                      width:'100%',}}>
                    <View style={{
                          position:'absolute',
                          left:25,
                          top:10}}>
                        <Ionicons name='md-flask' size={35} color={Colors.color_blue}/>
                    </View>
                    <View style={{marginLeft:90}}>
                        <Text style={styles.text}>Pharmacy</Text>
                        <Text style={{
                              color:Colors.color_blue,
                              fontSize:20}}>Purchase Prescription
                        </Text>
                        <Text style={styles.text}>Don't forget to bring list with you</Text>
                    </View>
                    <View style={{
                          position:'absolute',
                          right:20}}>
                        <GradientButton 
                                text='View'
                                textStyle={{ fontSize: 15 }}
                                gradientBegin="#47CACC"
                                gradientEnd="#47CACC"
                                // gradientDirection="diagonal"
                                height={25}
                                width={60}
                                radius={25}
                                impact
                                impactStyle='Light'
                                onPressAction={() => navigation.toggleDrawer()}
                        />
                    </View>
                </View>
                <View style={{
                      borderWidth:0.3,
                      width:'85%',
                      marginVertical:5,
                      borderColor:'#95C4C2',
                      alignItems:'center',
                      marginLeft:25}}>
                </View>
            </View>
            <View style={{
                        width:'100%',
                        position:'absolute',
                        left:28,
                        bottom:'30%',}}>
                    <Text style={{
                        color:Colors.color_blue,
                        }}>visit a specialist
                    </Text>
            </View>
            <View style={{flex:1,}}>
                <View style={{position:'absolute',right:-130,top:30}}>
                    <Card style={{width:280,height:65}}>
                        <View style={{position:'absolute',left:5,top:5}}>
                            <Image 
                                source={require('../../src/images/musk.jpeg')} 
                                style={{ width: 55, height: 55,borderRadius:10 }}
                            />
                        </View>
                        <View style={{marginLeft:50,position:'relative',bottom:10}}>
                            <Text style={styles.text}>Doctor</Text>
                            <Text style={{
                                    color:Colors.color_blue,
                                    fontSize:15}}>Brain Checkout
                            </Text>
                            <Text style={styles.text}>* * * * *</Text>
                        </View>
                        <View style={{position:'absolute',right:10,top:10}}>
                            <TouchableOpacity style={{
                                              justifyContent:'center',
                                              alignItems:'center',
                                              borderWidth:0.3,
                                              borderColor:'gray',
                                              width:50,
                                              height:20,
                                              borderRadius:50}}>
                                <Text style={{color:'gray'}}>Book</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#CFE9E8',
    }
})

