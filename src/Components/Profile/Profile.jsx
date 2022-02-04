import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import profileService from "../../Services/Services";
import addUsDatasStore from "../../Store/Actions/ProfileAction/AddProfileDatas";


const Profile = () => {
    const dispach = useDispatch();
const state = useSelector((state) => ({
    profileStore: state.profileStore,
}));

console.log(state.userDatas)
const getDatas = async () => {
    try{
      const usdata = await profileService.getUserDtas();
      dispach(addUsDatasStore(usdata.data))
      console.log(usdata.data)
    }catch(e){
        console.log('this is error', e)
    }
}
console.log(state, 'hhhsss')
useEffect(() => {
 getDatas()
}, []);



    return(
     <div>
         {state.profileStore.userDatas.map(itm => 
         <div>
           <p>{itm.name}</p>
         </div>)}
     </div>
    );
};

export default Profile;