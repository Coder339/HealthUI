import React from 'react'
import { StyleSheet, Text, View,Image,Button } from 'react-native'
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import GradientButton from 'react-native-gradient-buttons';
import Colors from '../../constants/colors';

export default function Tab1({navigation}) {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
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
                        <Ionicons name='md-menu' size={25}/>
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
                      width:'100%'}}>
                    <View style={{position:'absolute',left:10,top:10}}>
                        <Ionicons name='md-menu' size={25}/>
                    </View>
                    <View style={{marginLeft:90}}>
                        <Text>Doctor</Text>
                        <Text style={{
                              color:Colors.color_blue,
                              fontSize:20}}>Brain Checkout
                        </Text>
                        <Text>Have an appointment today?</Text>
                    </View>
                    <View style={{position:'absolute',right:20}}>
                        <GradientButton 
                                text='View'
                                textStyle={{ fontSize: 15 }}
                                gradientBegin="orange"
                                gradientEnd="orange"
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
                <View style={{borderWidth:0.3,width:'80%',alignItems:'center'}}></View>
                <View style={{
                      flexDirection:'row',
                      width:'100%',}}>
                    <View style={{
                          position:'absolute',
                          left:10,
                          top:10}}>
                        <Ionicons name='md-menu' size={25}/>
                    </View>
                    <View style={{marginLeft:90}}>
                        <Text>Pharmacy</Text>
                        <Text style={{
                              color:Colors.color_blue,
                              fontSize:20}}>Purchase Prescription
                        </Text>
                        <Text>Don't forget to bring list with you</Text>
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
                <View style={{borderWidth:0.3,width:'80%',alignItems:'center'}}></View>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text>third</Text>
            </View>
            <View style={{position:'absolute',bottom:40}}>
                <GradientButton 
                        text='+'
                        textStyle={{ fontSize: 30 }}
                        gradientBegin="#47CACC"
                        gradientEnd="#47CACC"
                        // gradientDirection="diagonal"
                        height={45}
                        width={45}
                        radius={50}
                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.toggleDrawer()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

