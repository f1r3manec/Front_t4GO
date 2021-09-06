import {
  GET_USERS,
  DELETE_USER,
  ADD_NEW_USER,
  SELECT_USER,
  CANCEL_EDIT,
  UPDATE_USER,
} from "../types";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case SELECT_USER:
      return {
        ...state,
        selectedUser: state.users.filter((user) => user.id === action.payload),
      };
    case CANCEL_EDIT:
      return {
        ...state,
        selectedUser: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        selectedUser: null,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export default reducer;
