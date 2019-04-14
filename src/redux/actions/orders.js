import {
  ORDERS_START_LOADING,
  ORDERS_LOADING_FAILED,
  ORDERS_LOADING_SUCCESFUL,
  GET_ORDER
} from '../constants';

import axios from "axios";


const actions = {

    getOrders() {
        return (dispatch, getStore) => {
            dispatch({
                type: ORDERS_START_LOADING
            });
            axios
                .get('https://my-json-server.typicode.com/MastiffDog/orders/Orders')
                .then(response => {
                    dispatch({
                        type: ORDERS_LOADING_SUCCESFUL,
                        payload: response.data
                    })
                })
                .catch(reason => {
                    dispatch({
                        type: ORDERS_LOADING_FAILED,
                        error: reason.message
                    })
                })
        }
    },

    getOrder(orderNumber) {
       return {
           type: GET_ORDER,
           payload: orderNumber
       }
    }
}

export default actions;
