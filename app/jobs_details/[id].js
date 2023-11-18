

import { View, Text, Pressable,Image,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import {useGlobalSearchParams} from "expo-router"
import {useSelector,useDispatch} from "react-redux"
import {MapPin} from "lucide-react-native"

import classNames from 'classnames'
const _txt=[
"• Bachelor's degree or equivalent practical experience.",
"• 7 years of technical product management experience such as creating strategic product roadmaps and working with cross-functional teams.",
"• Experience driving product vision, go-to- market strategy, and design discussions.",
"• Experience developing Internet products and technologies."


] 


const _Text=({_className,children})=>{
return(
<Text className={_className} style={{ fontFamily: 'Raleway-Regular'}}>{children}</Text>
)
}


export default function index() {
const {id}=useGlobalSearchParams()
const {_detail_slice}=useSelector((state) => {return state._jobs});
const _dispatch=useDispatch()


useEffect(()=>{
_dispatch({type:"_find_the_detail",_id:id})
},[])



return (
<View>
{_detail_slice.map((item) => {
return(
<View className="mt-[-20px]"  key={item._company}>
<ScrollView>
<View className="flex flex-col items-center">

<View className="w-[130px] h-[130px] bg-[#E6E4E6] flex justify-center rounded-3xl">
<Image  className="w-[130px] h-[130px]" source={{uri:item._image}}/>
</View>

<View>
<_Text _className="mt-5 text-center mx-1 text-3xl text-[#312651] tracking-[5px]">{item._position}</_Text>

<_Text _className="mx-1 mt-5 text-xl text-center">
<_Text _className="text-[#312651]">{item._company} / </_Text>
<_Text _className="text-gray-500"><MapPin className='text-gray-500' size={25} strokeWidth={1} />{item._p}</_Text>

</_Text>

</View>



</View>
<_Card_Info/>
</ScrollView>
</View> 
)
})


}
</View>


)
}


const _Card_Info=()=>{
const [_Description_key,_SetDescription_key]=useState(true)
const [_Companykey,_SetCompany_key]=useState(false)
const [_Reviews_key,_SetReviews_key]=useState(false)

const Description=()=>{
return(



<View className="flex flex-col items-center py-6 mx-5 my-10 bg-white rounded-lg ">
{_txt.map((item)=>{
return(
<_Text _className="my-5 text-lg text-[#83829A] text-center px-5" key={item}>DD{item}</_Text>
)
})}


</View>

)
}
const Company=()=>{
return(



<View className="flex flex-col items-center py-6 mx-5 my-10 bg-white rounded-lg ">
{_txt.map((item)=>{
return(
<_Text _className="my-5 text-lg text-[#83829A] text-center px-5" key={item}>CC{item}</_Text>
)
})}


</View>

)
}
const Reviews=()=>{
return(



<View className="flex flex-col items-center py-6 mx-5 my-10 bg-white rounded-lg ">
{_txt.map((item)=>{
return(
<_Text _className="my-5 text-lg text-[#83829A] text-center px-5" key={item}>RR{item}</_Text>
)
})}


</View>

)
}
const _Viewclass_v0=classNames({
"bg-[#312651]":_Description_key,
})
const _Viewclass_v1=classNames({
"bg-[#312651]":_Companykey,
})
const _Viewclass_v2=classNames({
"bg-[#312651]":_Reviews_key,
})
const _cardSwitch=(_type)=>{
if(_type==0){
    _SetCompany_key(false)
    _SetReviews_key(false)
    _SetDescription_key(true)
}else if(_type==1){
    _SetDescription_key(false)
    _SetReviews_key(false)
    _SetCompany_key(true)
}else if (_type==2){
_SetDescription_key(false)
_SetCompany_key(false)
_SetReviews_key(true)
}else{
    _SetCompany_key(false)
    _SetReviews_key(false)
    _SetDescription_key(true)
}

}

return(
<>

<View className="flex flex-row justify-center mx-5 mt-5">

<Pressable onPress={(e)=>{_cardSwitch(0)}}  className={`${_Viewclass_v0}  mx-1 border h-[38px] border-[#83829A] rounded-xl flex justify-center items-center basis-2/6`}>
<_Text _className={`${_Viewclass_v0 ? 'text-[#E6E4E6]': "text-[#444262]"}`}>Description</_Text>
</Pressable>

<Pressable onPress={(e)=>{_cardSwitch(1)}}  className={`${_Viewclass_v1}  mx-1 border h-[38px] border-[#83829A] rounded-xl flex justify-center items-center basis-2/6`}>
<_Text _className={`${_Viewclass_v1 ? 'text-[#E6E4E6]': "text-[#444262]"}`}>Company</_Text>
</Pressable>

<Pressable onPress={(e)=>{_cardSwitch(2)}}  className={`${_Viewclass_v2}  mx-1 border h-[38px] border-[#83829A] rounded-xl flex justify-center items-center basis-2/6`}>
<_Text _className={`${_Viewclass_v2 ? 'text-[#E6E4E6]': "text-[#444262]"}`}>Reviews</_Text>
</Pressable>



</View>

{
_Companykey==true ? (<Company/>)  : _Reviews_key==true ? (<Reviews/>) : (<Description/>) 
}

</>


)


}