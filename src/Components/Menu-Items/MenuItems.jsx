
import React from "react";
import { useState } from "react";
import MenuItem from "../Card/MenuItem";
import foodList from "../Food/FoodList";
export const MenuItems = () => {
    return (
        <div style={{minHeight : '77vh'}}>
           <MenuItem food={foodList}/>
        </div>
    );
}


export const Veg = () => {
        let vegFood = foodList.filter(function (e){
            return e.itemType === 'veg';
        });
    return (
        <div style={{minHeight : '77vh'}}>
              <MenuItem food={vegFood}/>
        </div>
    );
}

export const NonVeg = () => {
    let nonVegFood = foodList.filter(function (e){
        return e.itemType === 'non-veg';
    });
    return (
        <div style={{minHeight : '77vh'}}>
          <MenuItem food={nonVegFood}/>
        </div>
    );
}

export const Sweets = () => {
    let sweets = foodList.filter(function (e){
        return e.itemType === 'sweets';
    });
    return (
        <div style={{minHeight : '77vh'}}>
          <MenuItem food={sweets}/>
        </div>
    );
}

export const Drinks = () => {
    let softDrink = foodList.filter(function (e){
        return e.itemType === 'cold-drinks';
    });
    return (
        <div style={{minHeight : '77vh'}}>
          <MenuItem food={softDrink}/>
        </div>
    );
}



