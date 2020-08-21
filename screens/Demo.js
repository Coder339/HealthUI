import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GradientButton from 'react-native-gradient-buttons';

export default function Demo({navigation}) {
    return (
        <View style={{}}>
            <GradientButton 
                        text='+'
                        textStyle={{ fontSize: 30 }}
                        gradientBegin="#7BE495"
                        gradientEnd="#329D9C"
                        gradientDirection="diagonal"
                        height={45}
                        width={45}
                        radius={50}
                        impact
                        impactStyle='Light'
                        
                />
        </View>
    )
}

const styles = StyleSheet.create({})
