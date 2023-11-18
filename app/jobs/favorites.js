

import { View, Text,ScrollView,Pressable,Image } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux"
import { _Myfavorites_Hooks } from '../../Hooks/_MyfavoritesHook'
import {Trash,Frown} from "lucide-react-native"
import {router} from "expo-router"
import {Row} from "react-native-easy-grid"
const _Text=({_className,children})=>{
return(
<Text className={_className} style={{ fontFamily: 'Raleway-Regular'}}>{children}</Text>
)
}
export default function favorites() {
const {_popular_jobs}=useSelector((state)=>{return state._jobs} )
const {_change_Myfavorites}=_Myfavorites_Hooks();

return (
<ScrollView showsHorizontalScrollIndicator={false}>
<View className="flex flex-col mt-8">
<View className="mt-5 mb-10"><_Text _className="text-[#312651] tracking-[1px] text-3xl text-center">Your Favorite Jobs</_Text></View>

{
(!_popular_jobs.filter((x)=>{return x._isF==true}).length) ? (
<View className="flex flex-col items-center justify-center mt-24">
<_Text _className="text-xl text-gray-600">You have no favorite jobs</_Text>
<Frown className='mt-6' color={"#444262" } size={40} strokeWidth={1.5} />
</View>
) : (

_popular_jobs.filter((x)=>{return x._isF==true}).map((item)=>{
return(

<Pressable  key={item._company.toLowerCase()}
onPress={()=>{router.push(`/jobs_details/${item._company.toLowerCase()}`)} } 
className="flex flex-row">

<View className={`bg-slate-300 basis-3/4   h-[250px] rounded-tr-2xl rounded-br-2xl my-5`}>


<View className="flex flex-row justify-between mx-6 mt-7">
<View className={`bg-white w-[65px] h-[65px] rounded-xl flex flex-row justify-center items-center`}>
<Image source={{uri:item._image}} width={45} height={45}/>
</View>



</View>


<View className="mx-6 mt-3">
<_Text _className={`text-xl tracking-[2px] text-[#83829A] `}>{item._company}</_Text>
<_Text _className={`mt-3 text-lg text-black `} >{item._position}</_Text>
<_Text _className={`mt-3 text-lg text-black `}>{item._s} - {item._p}</_Text> 
</View>


</View>





<View className="flex items-center justify-center mx-2 basis-1/4">
<Pressable className="mt-4 mr-3 w-[60px] h-[60px] bg-[#83829A] flex items-center justify-center rounded-full " onPress={(e)=>{_change_Myfavorites({_type:"_change_Myfavorites",_id:item._company})}}>
<Trash color={"#444262" } size={40} strokeWidth={1}/>
</Pressable>
</View>



</Pressable>


)
})  
)

}


</View>
</ScrollView>
)
}