import { createStore } from 'redux';
import cartReducer from '../REducer/CartReducer';


export const store = createStore(cartReducer);
