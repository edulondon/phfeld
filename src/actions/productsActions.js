import {
    PRODUCTS_CREATE_FAIL,
    PRODUCTS_CREATE_REQUEST,
    PRODUCTS_CREATE_SUCCESS,
    PRODUCTS_DELETE_FAIL,
    PRODUCTS_DELETE_REQUEST,
    PRODUCTS_DELETE_SUCCESS,
    PRODUCTS_LIST_FAIL,
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_UPDATE_FAIL,
    PRODUCTS_UPDATE_REQUEST,
    PRODUCTS_UPDATE_SUCCESS,
  } from "../constants/productContants";
  import axios from "axios";
  
  export const listProducts = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCTS_LIST_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // console.log(userInfo.token, userInfo.name, userInfo.email);
      const { data } = await axios.get(`/api/products`);
      console.log(data);
      dispatch({
        type: PRODUCTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCTS_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  export const createNoteAction = (title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: PRODUCTS_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/products/create`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: PRODUCTS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCTS_CREATE_FAIL,
        payload: message,
      });
    }
  };
  
  export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCTS_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/products/${id}`, config);
  
      dispatch({
        type: PRODUCTS_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCTS_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateNoteAction = (id, title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: PRODUCTS_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/products/${id}`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: PRODUCTS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCTS_UPDATE_FAIL,
        payload: message,
      });
    }
  };
  