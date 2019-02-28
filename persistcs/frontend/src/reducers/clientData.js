import {
  GET_CLIENTDATA,
  DELETE_CLIENTDATA,
  ADD_LEAD
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
  }
}
