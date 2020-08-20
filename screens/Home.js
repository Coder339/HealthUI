import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { ScrollView } from 'react-native'

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Tab1') {
              iconName = focused
              ? 'home'
              : 'home';
            } else if (route.name === 'Tab2') {
              iconName = focused
              ? 'alert'
              : 'alert';
            } else if (route.name === 'Tab3') {
              iconName = focused
              ? 'account-circle'
              : 'account-circle';
            } else if (route.name === 'Tab4') {
                iconName = focused
                ? 'account-circle'
                : 'account-circle';
            }

            return <Icons name={iconName} size={size=30} color={color} />;
              },
            })}
            tabBarOptions={{
              keyboardHidesTabBar: true,
              style: {
                position: 'absolute',
              },
            activeTintColor: '#1C72BD',
            inactiveTintColor: 'gray',
            }}
          >
          <Tab.Screen name="Tab1" component={Tab1} />
          <Tab.Screen name="Tab2" component={Tab2} />
          <Tab.Screen name="Tab3" component={Tab3} />
          <Tab.Screen name="Tab4" component={Tab4} />
        </Tab.Navigator>
    );
  }
