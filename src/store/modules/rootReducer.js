import { combineReducers } from 'redux';

import message from './message/reducer';
import number from './number/reducer';

export default combineReducers({ message, number });
