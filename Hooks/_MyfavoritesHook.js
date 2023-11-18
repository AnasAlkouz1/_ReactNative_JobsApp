



import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
export function _Myfavorites_Hooks() {
const _dispatch=useDispatch(); 
const _change_Myfavorites=({_type,_id})=>{
_dispatch({type:_type,_id:_id})
}
return {_change_Myfavorites}

}