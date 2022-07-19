import { combineReducers } from "redux";
import errorsReducer from "./errors/errors_reducer";
import entitiesReducer from "./entities/entities_reducer";
import sessionReducer from "./session/session_reducer";
import textareaReducer from "./textarea_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  textarea: textareaReducer
})

export default rootReducer