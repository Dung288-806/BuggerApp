import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css'

const burger = (props) => {
    let transformIngredient = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, id) => {
          return <BurgerIngredient key={id + igKey} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformIngredient.length === 0) {
        transformIngredient = <p>Pls add something ingredient</p>
    }
      return (
        <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformIngredient}
          <BurgerIngredient type="bread-bottom" />
        </div>
      );
}

export default burger