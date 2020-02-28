import { REGISTER_USER } from '../actions/index';
const INITIAL_STATE = { token: null, expiresIn: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case REGISTER_USER:
            if(!action.payload.data){
                return state;
            }
            
            return { token: action.payload.data.idToken, expiresIn: new Date(((Math.round(new Date().getTime())/1000) + action.payload.data.expiresIn)*1000) };
        
        default:
            return state;
    }
}