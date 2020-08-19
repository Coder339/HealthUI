import * as React from 'react';
import { createDrawerNavigator,drawerIcon } from '@react-navigation/drawer';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

import CustomDrawerContent from '../utils/CustomDrawer';
import Congrats from '../screens/Congrats';
import Otp from '../screens/Otp';
import Welcome from '../screens/Welcome';
import Notification from '../screens/Notification';
import Home from '../screens/Home';
import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator 
        drawerContentOptions={{           // not working
          activeTintColor: '#fff',
          inactiveTintColor:'#fff',
          activeBackgroundColor:'orange'  
        }}
       drawerStyle={{
          backgroundColor: '#17baa1',
          width: 240,
        }}
       
       drawerPosition = 'left'
       drawerType='back' 
       initialRouteName="Welcome" 
       drawerContent={props => <CustomDrawerContent {...props} /> } 
       >
          <Drawer.Screen 
            name="Welcome screen" 
            component={Welcome} 
            options={{ drawerIcon: ({focused,size}) => (<Ionicons 
                                                         name='md-person' 
                                                         size={size}
                                                         color='#fff'/>) }} 
          />
          <Drawer.Screen 
            name="Login screen" 
            component={Login} 
            options={{ drawerIcon: ({focused,size}) => (<MaterialCommunityIcons 
                                                         name='login' 
                                                         size={size}
                                                         color='#fff'/>) }} 
          />
          <Drawer.Screen 
            name="Home screen" 
            component={Home}
            options={{ drawerIcon: ({focused,size}) => (<Ionicons 
                                                          name='md-home' 
                                                          size={size}
                                                          color='#fff'/>) }}  
          />  
          <Drawer.Screen 
            name="Notification screen" 
            component={Notification} 
            options={{ drawerIcon: ({focused,size}) => (<Ionicons 
                                                        name='md-notifications' 
                                                        size={size}
                                                        color='#fff'/>) }} 
          />
          <Drawer.Screen 
            name="Otp screen" 
            component={Otp} 
            options={{ drawerIcon: ({focused,size}) => (<MaterialCommunityIcons 
                                                          name='adjust' 
                                                          color='#fff'
                                                          size={size}
                                                          color='#fff'/>) }} 
          />
          <Drawer.Screen 
            name="Congrats screen" 
            component={Congrats} 
            options={{ drawerIcon: ({focused,size}) => (<MaterialCommunityIcons 
                                                          name='waves' 
                                                          color='#fff'
                                                          size={size}
                                                          color='#fff'/>) }} 
          />
    </Drawer.Navigator>
  );
}
