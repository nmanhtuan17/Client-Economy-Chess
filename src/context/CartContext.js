import React, {createContext, useReducer, useEffect, useContext} from "react";
import {AuthContext} from "./AuthContext";

const CartContext = createContext();


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity + 1}
            : item
        );
        return {...state, items: updatedItems};
      } else {
        return {
          ...state,
          items: [...state.items, {...action.payload, quantity: 1}],
        };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {...item, quantity: action.payload.quantity}
            : item
        ),
      };
    case "SET_CART_ITEMS":
      return {...state, items: action.payload};
    case "CLEAR_CART":
      return {...state, items: []};
    default:
      return state;
  }
};

const CartProvider = ({children}) => {
  const {user} = useContext(AuthContext);
  const initialCartState = {
    items: localStorage.getItem(`cart_${user?.data?.id}`)
      ? JSON.parse(localStorage.getItem(`cart_${user?.data?.id}`))
      : null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    if (user && user.data && user.data.id) {
      const cartItems = JSON.parse(
        localStorage.getItem(`cart_${user.data.id}`)
      );
      dispatch({type: "SET_CART_ITEMS", payload: cartItems});
    }
  }, [user]);

  useEffect(() => {
    if (user && user.data && user.data.id) {
      localStorage.setItem(`cart_${user.data.id}`, JSON.stringify(state.items));
    }
  }, [state.items, user]);

  const addToCart = (item) => dispatch({type: "ADD_TO_CART", payload: item});
  const removeFromCart = (id) =>
    dispatch({type: "REMOVE_FROM_CART", payload: id});
  const updateQuantity = (id, quantity) =>
    dispatch({type: "UPDATE_QUANTITY", payload: {id, quantity}});
  const clearCart = () => dispatch({type: "CLEAR_CART"});

  return (
    <CartContext.Provider
      value={{state, addToCart, removeFromCart, updateQuantity, clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
