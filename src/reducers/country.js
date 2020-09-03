import { GET_COUNTRYS, NO_COUNTRYS, SET_COUNTRY } from "../actions/types";

const initialState = {
  countrys: [],
  loading: true,
  selectedCountry: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTRYS:
      return {
        ...state,
        countrys: payload,
        loading: false,
      };
    case NO_COUNTRYS:
      return {
        ...state,
        countrys: [],
      };
    case SET_COUNTRY:
      return [...state, payload];
    default:
      return state;
  }
}
