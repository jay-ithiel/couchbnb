import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SpotsReducer from './spots_reducer';
import BookingsReducer from './bookings_reducer';
import FilterReducer from './filter_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotsReducer,
  bookings: BookingsReducer,
  filters: FilterReducer,
  reviews: ReviewsReducer,
});

export default RootReducer;
