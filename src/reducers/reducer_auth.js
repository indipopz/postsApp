import { REGISTER_USER, LOGIN_USER } from '../actions/index';
const INITIAL_STATE = {userId: null, token: null, expiresIn: null };

function getDate(timeInSeconds){
    return new Date(((Math.round(new Date().getTime())/1000) + timeInSeconds)*1000)
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case REGISTER_USER:
            if(!action.payload.data){
                return state;
            }
            
            return {userId: null, token: action.payload.data.idToken, expiresIn: getDate(action.payload.data.expiresIn) };
        
        case LOGIN_USER:
            if(!action.payload.data){
                return state;
            }
            console.log(action.payload.data);
            
            return {userId: action.payload.data.localId,  token: action.payload.data.idToken, expiresIn: getDate(action.payload.data.expiresIn) };
        
        default:
            return state;
    }
}