

import { View, Text,BackHandler,Pressable } from 'react-native'
import React,{useEffect} from 'react'
import {Tabs,router,useNavigation,Link} from "expo-router"
/*
Typeface DM Sans Ul Colors #444262 #83829A Tools Sketch

#FF7754

#312651

#E6E4E6
*/
import {Home,Heart} from "lucide-react-native"
import __stores from '../../context/main'
import { Provider } from 'react-redux'







export default function _layout() {



// // Navigation
// const navigation = useNavigation();

// // Effect
// useEffect(() => { 
// navigation.addListener("beforeRemove", (e) => {
// e.preventDefault();
// console.log(e.data.action);
// // Do your stuff here
// navigation.dispatch(e.data.action);
// router.push("/jobs");
// });
// }, []);



return (
<>
<Provider store={__stores}>
<Tabs  screenOptions={{
tabBarShowLabel:false,headerShown:true,tabBarLabelPosition:"beside-icon",
headerStyle:{  backgroundColor: '#FF7754'},
headerTitle:()=><></>
}}>
<Tabs.Screen  name='index' options={{
title:"Home",
tabBarIcon: ({ 
color,
focused,
size,
}) => <Home size={35} color={`${focused ? '#FF7754' : '#312651'}`} />,


}} />

<Tabs.Screen  name='favorites' options={{
title:"My Favorites",
href:"/jobs/favorites",
tabBarIcon: ({ 
color,
focused,
}) => <Heart size={35} color={`${focused ? '#FF7754' : '#312651'}`}/>,
}}

/>


</Tabs>



</Provider>
</>
)
}