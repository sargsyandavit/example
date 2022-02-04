export const ADD_DATA_IN_STORE = 'profiel/add-data-in-stoe';

export default function addUsDatasStore (data){
    return {
        type: ADD_DATA_IN_STORE,
        data,
    }
};