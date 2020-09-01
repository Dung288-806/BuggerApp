import * as ActionType from "../Actions/ActionType";

export const addIngredient = (typeIng) => {
  return {
    type: ActionType.ADD,
    typeIng,
  };
};
export const removeIngredient = (typeIng) => {
  return {
    type: ActionType.REMOVE,
    typeIng,
  };
};

export const setInitialIngredient = (ingredients) => {
         return {
           type: ActionType.INITIAL,
           ingredients,
         };
       };

export const initialIngredient = () => {
  return dispatch => {
    // fetching ingredient fom server
            const ingredients = {
              meat: 0,
              bacon: 0,
              salad: 0,
              cheese: 0,
            };

          dispatch(setInitialIngredient(ingredients));
    
  };
};
