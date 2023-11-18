import {
View,
Text,
TextInput,
ScrollView,
Image,
Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { Row } from "react-native-easy-grid";
import { Search, Heart } from "lucide-react-native";
import { _facebook, _google } from "../../context/links/_ImagesURL";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useSelector } from "react-redux";
SplashScreen.preventAutoHideAsync();
import { router } from "expo-router";

import { _Myfavorites_Hooks } from "../../Hooks/_MyfavoritesHook";
const _Text = ({ _className, children }) => {
return (
<Text className={_className} style={{ fontFamily: "Raleway-Regular" }}>
{children}
</Text>
);
};

export default function index() {
const [_Buttonsearch_state, _SetButtonsearch_state] = useState(false);
const [_inputVal, _SetinputVal] = useState("");
const [fontsLoaded, fontError] = useFonts({
"Raleway-Regular": require("../../assets/Raleway-Regular.ttf"),
});
const onLayoutRootView = useCallback(async () => {
if (fontsLoaded || fontError) {
await SplashScreen.hideAsync();
}
}, [fontsLoaded, fontError]);

if (!fontsLoaded && !fontError) {
return null;
}

const _rerurnData = () => {
return [1,2,3]
};


return (
<SafeAreaView onLayout={onLayoutRootView}>
<ScrollView showsVerticalScrollIndicator={false}>
<View className="mt-1 mb-5 ml-7">
<_Text _className="text-[#312651] tracking-[1px] text-3xl">
Find your perfect job
</_Text>
</View>
<View className="flex flex-row">
<Row className="ml-6" size={80}>
<TextInput
className="w-full bg-[#E6E4E6] h-[60px] rounded-xl px-3 py-3 text-base"
placeholder="What are you looking for?"
placeholderTextColor={"#83829A"}
onChangeText={(text) => {
_SetinputVal(text);
}}
/>
</Row>

<Row
size={20}
className="mx-4 bg-[#FF7754] rounded-2xl flex flex-row justify-center items-center"
>
<Pressable
onPress={() => {
console.log(_inputVal);
_SetButtonsearch_state(!_Buttonsearch_state);
}}
>
<Search size={33} strokeWidth={1.5} color="#E6E4E6" />
</Pressable>
</Row>
</View>

<View className="flex flex-row mx-2 my-6">
<Row
size={30}
className="mx-1 border h-[38px] border-[#83829A] rounded-xl flex justify-center items-center  "
>
<_Text _className="text-[#83829A] text-base ">Product</_Text>
</Row>

<Row
size={30}
className="mx-1  border h-[38px] border-[#83829A] rounded-xl flex justify-center items-center  "
>
<_Text _className="text-[#83829A] text-base ">Design</_Text>
</Row>

<Row
size={30}
className="mx-1 border h-[38px] border-[#83829A] rounded-xl flex justify-center items-center  "
>
<_Text _className="text-[#83829A] text-base ">Development</_Text>
</Row>
</View>

<View className="flex flex-row justify-between px-5 ml-2">
<View>
<Text className="text-xl text-[#312651]">Popular Job</Text>
</View>
<View>
<Text className="text-lg mt-[1px] text-[#83829A]">Show all</Text>
</View>
</View>

<Popular_Jobs />
<View className="flex flex-row justify-between px-5 mt-6 ml-2">
<View>
<Text className="text-xl text-[#312651]">Nearby Jobs</Text>
</View>
<View>
<Text className="text-lg mt-[1px] text-[#83829A]">Show all</Text>
</View>
</View>

<_Jobs />
</ScrollView>
</SafeAreaView>
);
}

const _Jobs = () => {
const _data = useSelector((state) => {
return state._jobs;
});
return (
<ScrollView className="mx-5 mt-5" horizontal={false}>
{_data._all_jobs.map((item) => {
return (
<Pressable
key={item._company.toLowerCase()}
className="bg-slate-200 w-full h-[120px] rounded-xl mb-8"
onPress={() => {
router.push(`/jobs_details/${item._company.toLowerCase()}`);
}}
>
<View className="flex flex-row justify-between mx-6 mt-6">
<View
className={`bg-white w-[65px] h-[65px] rounded-xl flex flex-row justify-center items-center`}
>
<Image source={{ uri: item._image }} width={45} height={45} />
</View>

<View
className={`flex flex-col justify-center items-center ml-5`}
>
<_Text _className="text-lg tracking-[2px] text-black">
{item._company}
</_Text>
<_Text _className="text-base text-[#83829A]">Full Time</_Text>
</View>

<View
className={`flex flex-col justify-center items-center ml-5`}
>
<_Text _className="text-lg tracking-[2px] text-black">
{item._s}
</_Text>
</View>
</View>
</Pressable>
);
})}

{/* <FlatList data={_data._all_jobs} 
renderItem={({item}) => (

)}
horizontal={false} showsHorizontalScrollIndicator={false}/> */}
</ScrollView>
);
};

const Popular_Jobs = () => {
const _data = useSelector((state) => {
return state._jobs;
});
const { _change_Myfavorites } = _Myfavorites_Hooks();
return (
<ScrollView
horizontal
className="mt-5 ml-5"
showsHorizontalScrollIndicator={false}
>
{_data._popular_jobs.map((item) => {
return (
<Pressable
key={item._company.toLowerCase()}
onPress={() => {
router.push(`/jobs_details/${item._company.toLowerCase()}`);
}}
className={`${
item._isF ? "bg-[#444262]" : "bg-slate-200"
}  w-[300px] h-[250px] rounded-xl mr-8`}
>
<View className="flex flex-row justify-between mx-6 mt-7">
<View
className={`bg-white w-[65px] h-[65px] rounded-xl flex flex-row justify-center items-center`}
>
<Image source={{ uri: item._image }} width={45} height={45} />
</View>

<Pressable
className="mt-4 mr-3 text-white"
onPress={(e) => {
_change_Myfavorites({
_type: "_change_Myfavorites",
_id: item._company,
});
}}
>
<Heart
color={`${item._isF ? "red" : "black"}`}
size={35}
strokeWidth={1.5}
/>
</Pressable>
</View>
{/* __v0 */}

<View className="mx-6 mt-3">
<_Text
_className={`text-xl tracking-[2px] ${
item._isF ? "text-[#E6E4E6]" : "text-[#83829A]"
} `}
>
{item._company}
</_Text>
<_Text
_className={`mt-3 text-lg ${
item._isF ? "text-white" : "text-black"
} `}
>
{item._position}
</_Text>
<_Text
_className={`mt-3 text-lg ${
item._isF ? "text-white" : "text-black"
} `}
>
{item._s} - {item._p}
</_Text>
</View>
{/* __v1 */}
</Pressable>
);
})}
{/* <FlatList data={_data._popular_jobs} 
renderItem={({item}) => (

)}
horizontal={true} showsHorizontalScrollIndicator={false}/> */}
</ScrollView>
);
};

//style={{ fontFamily: 'Raleway-Regular'}}
