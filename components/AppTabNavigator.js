import * as React from 'react'
import IssuesScreen from '../Screens/IssuesScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import RequestScreen from '../Screens/RequestScreen'
import {Icon} from 'react-native-elements'
import {Image} from 'react-native'
import AddSuggestion from '../Screens/AddSuggestionScreen'

export const TabNavigator=createBottomTabNavigator({
    IssuesScreen:{
        screen:IssuesScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/earth.jpg')} style={{width:20,height:20}}/>,
            tabBarLabel:"Ongoing Issues"
        }
    },
    RequestScreen:{
        screen:RequestScreen,
        navigationOptions:{
            tabBarLabel:'RequestScreen',
            tabBarIcon:<Image source={require('../assets/pen and paper.png')} style={{width:20,height:20}}/>
        }
    }
    
    // RequestScreen:{
    //     screen:RequestScreen,
    //     navigationOptions:{
    //         tabBarIcon:<Image source={require('../assets/pen and paper.png')} style={{width:20,height:20}}/>,
    //         tabBarLabel:"Request"
    //     }
    // }
})