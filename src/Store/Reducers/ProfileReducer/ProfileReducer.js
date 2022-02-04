import { ADD_DATA_IN_STORE } from "../../Actions/ProfileAction/AddProfileDatas";

const  inishalState = {
    userDatas: []
}

export default function ProfileReducer (state = inishalState, action){
    switch(action.type){
        case ADD_DATA_IN_STORE:
            return {
                ...state,
                userDatas: action.data
                
            }
        default:
            return state;
    }
}