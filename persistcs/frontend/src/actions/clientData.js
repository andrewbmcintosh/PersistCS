import axios from "axios";

import { GET_CLIENTDATA, DELETE_CLIENTDATA, ADD_LEAD } from "./types";

// GET CLIENTDATA
export const getClientData = () => (dispatch, getState) => {
  axios
    .get("/api/restaurant/")
    .then(res => {
      dispatch({
        type: GET_CLIENTDATA,
        payload: res.data
      });
    })
    .catch(err => console.log(error));
};
