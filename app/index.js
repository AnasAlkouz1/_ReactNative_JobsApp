import {
Text,
View,
Image,

Pressable,
StatusBar
} from "react-native";


import React,{useCallback} from 'react'
import {Col,Grid,Row} from "react-native-easy-grid"
import {ArrowRight} from "lucide-react-native"
import {router} from "expo-router"

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


const _Text=({_className,children})=>{
return(
<Text className={_className} style={{ fontFamily: 'Raleway-Regular'}}>{children}</Text>
)
}
export default function Page() {
const [fontsLoaded, fontError] = useFonts({
'Raleway-Regular': require('./../assets/Raleway-Regular.ttf'),
});
const onLayoutRootView = useCallback(async () => {
if (fontsLoaded || fontError) {
await SplashScreen.hideAsync();
}
}, [fontsLoaded, fontError]);

if (!fontsLoaded && !fontError) {
return null;
}


return (
<>
<StatusBar barStyle={"default"} animated={true}/>
<_FirstScreen/>
</>
);
}


const _FirstScreen=()=>{


return(
<Grid className="bg-gray-200">

<Row size={2} className="flex flex-row justify-center mt-[100px]">
<View> 
<Image className={`object-contain w-[300px] h-[300px]`}  source={require("../assets/_Images/__Job/Coder.png")}/>
</View>
</Row>


<Row size={2}>
<View className="flex flex-col w-full bg-gray-100 shadow shadow-gray-300 justify-evenly rounded-t-3xl">
<View className="ml-4">
<_Text _className="mb-2 text-xl text-slate-600">Find a perfect job match Finding</_Text>
<_Text _className="text-lg mr-2">Finding your dream job is now much easier and faster like never before</_Text>


</View>



<Pressable 
className="bg-orange-400 h-[60px] rounded-2xl mx-4 flex flex-row justify-center items-center"
onPress={()=>{router.push("/jobs")}}
>
<_Text _className="text-base text-orange-800">
Let's Get Started
</_Text>
<ArrowRight className="mt-[2px] ml-2 text-base text-orange-700" />
</Pressable>




</View>
</Row>


</Grid>
)
}