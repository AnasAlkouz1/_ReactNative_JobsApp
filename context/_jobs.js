import _all from "./links/_ImagesURL"


let _state = {
_popular_jobs:[
{_company:"Spotify",_position:"Senior Designer",_s:"$16k",_p:"Damaskus, Syrien",_image:_all._spotify,_color:"bg-green",_isF:false},
{_company:"FaceBook",_position:"Lead Product Manager",_s:"$8k",_p:"Tokyo, Japan",_image:_all._facebook,_color:"bg-blue",_isF:false},
{_company:"Google",_position:"Ul/UX Designer",_s:"$23k",_p:"Berlin, Germany",_image:_all._google,_color:"bg-orange",_isF:false},


{_company:"Adobe",_position:"Adobe Designer",_s:"$12k",_p:"San Jose, California",_image:_all._Adobe,_color:"bg-blue",_isF:false},
{_company:"Soundcloud",_position:"Ul Designer",_s:"$9k",_p:"Stockholm, Swedish",_image:_all._Soundcloud,_color:"bg-orange",_isF:false},
{_company:"Zalando",_position:"UX Designer",_s:"$4k",_p:"Berlin, Germany",_image:_all._Zalando,_color:"bg-orange",_isF:false},

],
_all_jobs:[
{_company:"Apple",_position:"Manager",_s:"$40k",_p:"Hamburg, Germany",_image:_all._apple},
{_company:"Amazon",_position:"Senior Formal Verification Engineer",_s:"$32k",_p:"München, Germany",_image:_all._amazon},
{_company:"Twitter",_position:"Software Engineer",_s:"$43k",_p:"San Francisco, California",_image:_all._twitter},
{_company:"Tiktok",_position:"Sales System Project Manager",_s:"$13k",_p:"Berlin, Germany",_image:_all._tiktok},
{_company:"Netflix",_position:"Web Designer",_s:"$71k",_p:"Helsinki, Finland",_image:_all._netflix},
{_company:"Slack",_position:"Project Manager",_s:"$98k",_p:"Stockholm, Swedish",_image:_all._slack},
{_company:"PayPal",_position:"React Developer",_s:"$65k",_p:"San Jose, California",_image:_all._payPal},


],
_detail_slice:[],
}

let _JobsStore = (state=_state, action) => { 
switch (action.type) {
case "_change_Myfavorites":
let _newitems=state._popular_jobs.map((x)=>{
if(x._company==action._id){
if(x._isF==true){
x._isF=false;
return x;
}else{
x._isF=true;
return x;
}
}else {
return x;   
}
})

return {..._state,..._state._popular_jobs=_newitems}



case "_find_the_detail":
let _detail_slice=_state._popular_jobs.find((x)=>{return x._company.toLowerCase()==action._id.toLowerCase()}) || _state._all_jobs.find((x)=>{return x._company.toLowerCase()==action._id.toLowerCase()})
return {..._state,..._state._detail_slice=[_detail_slice]}

case "_getMyfavorites":
return {..._state,..._state._MyFavorites=_state._popular_jobs.filter((x)=>{return x._isF==true})}






default:return state
}
}

export default _JobsStore;
