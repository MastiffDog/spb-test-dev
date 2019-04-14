import {
    ORDERS_START_LOADING,
    ORDERS_LOADING_SUCCESFUL,
    ORDERS_LOADING_FAILED,
    GET_ORDER
} from '../constants';

import { Initial_State } from '../constants/first_state';

export default function (state = Initial_State, action) {
    switch (action.type) {

        case ORDERS_START_LOADING:
            return {...state, ordersLoading: true, ordersLoadedSuccessful: false};

        case ORDERS_LOADING_SUCCESFUL:
            const OrdersLoaded = action.payload;
            console.log('OrdersLoaded:',OrdersLoaded);
            return {...state, ordersLoading: false, orders: OrdersLoaded, ordersLoadedSuccessful: true};

        case ORDERS_LOADING_FAILED:
            return {...state, ordersLoading: false, ordersLoadingError: action.error, orders: []};

        case GET_ORDER:
            let orderNumber = action.payload;
            let selectedOrder = state.orders.filter((item)=>{
                return item.id === orderNumber;
            });
            let neededOrder = selectedOrder[0];
            let productOrder = neededOrder.Products.map((item)=>{
                let sum =item.Price*item.Qty;
                return {"id": item.id, "Price": item.Price, "Qty": item.Qty, "sum": sum};
            });
            let totalSum = 0;
                for (let i=0; i<productOrder.length; i++) {
                    totalSum = totalSum + productOrder[i].sum;
                }
            return {...state, product: true, currentOrder: neededOrder, selectedProductList: productOrder, total: totalSum}

        default:
            return state;
    }
}

