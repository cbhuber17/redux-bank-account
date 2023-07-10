import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Can only have one reducer in the store
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
