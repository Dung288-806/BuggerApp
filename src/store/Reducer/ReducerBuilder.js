import * as ActionType from "../Actions/ActionType";

const INGREDIENT_PRICE = {
  meat: 0.5,
  bacon: 1,
  salad: 0.5,
  cheese: 1,
};

const initialState = {
  ingredients: {},
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD: {
      const newIngredient = { ...state.ingredients };
      const newCount = state.ingredients[action.typeIng] + 1;
      newIngredient[action.typeIng] = newCount;
      const priceOfType = INGREDIENT_PRICE[action.typeIng];
      const newTotalPrice = state.totalPrice + priceOfType;

      return {
        ...state,
        ingredients: newIngredient,
        totalPrice: newTotalPrice,
      };
    }
    case ActionType.REMOVE: {
      const updateIngredient = { ...state.ingredients };
      const countNew = state.ingredients[action.typeIng] - 1;
      updateIngredient[action.typeIng] = countNew;
      const priceOfType = INGREDIENT_PRICE[action.typeIng];
      const newTotalPrice = state.totalPrice - priceOfType;
      return {
        ...state,
        ingredients: updateIngredient,
        totalPrice: newTotalPrice,
      };
    }
    case ActionType.INITIAL: {
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4
      };
    }
    default:
      return state;
  }
};
export default reducer;
