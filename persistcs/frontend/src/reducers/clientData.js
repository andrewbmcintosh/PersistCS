import {
  GET_CLIENTDATA,
  DELETE_CLIENTDATA,
  ADD_CLIENTDATA
} from "../actions/types.js";

const initialState = {
  clientData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTDATA:
      return {
        ...state,
        clientData: action.payload
      };
    case DELETE_CLIENTDATA:
      return {
        ...state,
        clientData: state.clientData.filter(
          clientData => clientData.id !== action.payload
        )
      };
    case ADD_CLIENTDATA:
      return {
        ...state,
        clientData: [...state.clientData, action.payload]
      };
    default:
      return state;
  }
}
