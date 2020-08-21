import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { ScrollView,Alert } from 'react-native'

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
import Demo from './Demo';

const Tab = createBottomTabNavigator();

export default function Home() {
    const ScreenComponent = () => {
      return null
    }
    return (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Tab1') {
              iconName = focused
              ? 'md-home'
              : 'md-home';
            } else if (route.name === 'Tab2') {
              iconName = focused
              ? 'ios-search'
              : 'ios-search';
            } else if (route.name === 'Tab3') {
              iconName = focused
              ? 'ios-heart'
              : 'ios-heart';
            } else if (route.name === 'Tab4') {
                iconName = focused
                ? 'md-contact'
                : 'md-contact';
            }

            return <Ionicons name={iconName} size={size=30} color={color} />;
              },
            })}
            tabBarOptions={{
              keyboardHidesTabBar: true,
              showLabel: false,
              style: {
                position: 'absolute',
              },
            activeTintColor: '#1C72BD',
            inactiveTintColor: '#D7F7F5',
            }}
          >
          <Tab.Screen name="Tab1" component={Tab1} />
          <Tab.Screen name="Tab2" component={Tab2} />
          <Tab.Screen name="Button" component={ScreenComponent} options={{
                                                            tabBarButton: () => (<Demo />),
                                                          }} />
          <Tab.Screen name="Tab3" component={Tab3} />
          <Tab.Screen name="Tab4" component={Tab4} />
        </Tab.Navigator>
    );
  }
