import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import  AuthReducer from './reducer_auth';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer,
  auth: AuthReducer
});

export default rootReducer;
