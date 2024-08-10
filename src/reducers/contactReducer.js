import { ADD_CONTACT, DELETE_CONTACT } from '../actions/contactActions';


const initialState=[];

const contactReducer=(state=initialState,action)=>{
  switch(action.type){
    case ADD_CONTACT :return [...state,action.payload];
    case DELETE_CONTACT:return state.filter(item=>item.id!==action.payload);
    default: return state;
  }

}

export default contactReducer;
// const initialState = [];

// const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// export default contactReducer;