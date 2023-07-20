//reducers
import { LOGIN } from "../../actions/users";

const initialState = {
  user: [{
    email: null,
    password: null,
    isLogin: false
  }]
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.data
      }
    default:
      return state;
  }
}

export default user;