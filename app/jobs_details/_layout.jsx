


import {Stack,router} from "expo-router"
import { View,Pressable,StatusBar,Share,ScrollView } from 'react-native'
import {ArrowLeft,Share2} from "lucide-react-native"

import {useGlobalSearchParams} from "expo-router"


export default function layout(){
return(
<>
<StatusBar barStyle={"dark-content"}  />
<Stack  screenOptions={{
headerShown:true,
header:props=><_headerTitle data={props}/>,
}}
/>

</>
)
}
const _headerTitle=()=>{
const {id}=useGlobalSearchParams()
const onShare = async () => {
try {
const result = await Share.share({
message:`www.e.com/jobs/${id}`,
url:`www.e.com/jobs/${id}` 
});
} catch (error) {
console.log(error) 
}
};

return(
<>
<View className={`px-10 pt-9 mb-8  h-[150px] flex flex-row justify-between items-center`}>
<Pressable 
className="bg-[#E6E4E6] w-[50px] h-[50px] rounded-lg flex justify-center items-center"
onPress={()=>{router.back()}}
>
<ArrowLeft size={32} color="#000000" strokeWidth={1} />
</Pressable>

<Pressable 

className="bg-[#E6E4E6] w-[50px] h-[50px] rounded-lg flex justify-center items-center"
onPress={onShare}
>
<Share2 size={32} color="#000000" strokeWidth={1} />
</Pressable>
</View>
</>
)


}
