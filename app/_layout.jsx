

import {Stack} from "expo-router"
import __stores from './../context/main'
import { Provider } from 'react-redux'

export default function _layout(){
return(
    <Provider store={__stores}>
<Stack screenOptions={{headerShown:false}}>
<Stack.Screen name="index" options={{title:null,
headerStyle:{  backgroundColor: '#e5e7eb'},
}}/>
</Stack>
</Provider>
)
}