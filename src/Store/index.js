import {createStore} from 'redux';
import {reducers} from './comibe_reducer';

const store = createStore(reducers);

export default store;