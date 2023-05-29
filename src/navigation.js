import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather, AntDesign} from '@expo/vector-icons'

import HomeScreen from './screens/Home/index.js'
import SearchScreen from './screens/Search/index.js'
// import RequireScreen from './screens/Require/index.js'
import ProfileScreen from './screens/Profile/index.js'

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib:AntDesign,
        name:'home'
    },
    Search: {
        lib:Feather,
        name:'search'
    },
    /*Require: {
        lib:Foundation,
        name:'clipboard-notes'
    },*/
    Profile: {
        lib:AntDesign,
        name:'profile'
    },
}

export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions={({ route, navigation}) => ({     
                tabBarIcon: ({color, size}) => {

                    const { lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                style:{
                    backgroundColor: '#bfbfe0',
                },
                activeTintColor:'#1d1d82',
                inactiveTintColor:'#6969fa'
            }}
           
        >

            <Tab.Screen name="Home" component={HomeScreen} options={{title:'Início'}} />
            <Tab.Screen name="Search" component={SearchScreen} options={{title:'Busca'}} />
            {/* <Tab.Screen name="Require" component={RequireScreen} options={{title:'Histórico'}} />*/}
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil'}} /> 

        </Tab.Navigator>
    )
}