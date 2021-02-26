import { ADD_MEMBER } from "../actions/dragonListActions";

const initialState = {
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
};

export const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, { name: action.payload, dragonStatus: false }]
      };
    default:
      return state;
  }
}