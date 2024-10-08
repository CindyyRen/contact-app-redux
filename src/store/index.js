import contactReducer from '../reducers/contactReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({ contacts: contactReducer });
const store = createStore(rootReducer);
export default store;
// import { createStore, combineReducers } from 'redux';
// import contactReducer from '../reducers/contactReducer';

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const store = createStore(rootReducer);

// export default store;
