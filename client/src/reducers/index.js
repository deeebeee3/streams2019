import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //rename on the fly
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
