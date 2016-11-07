import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SpotsMiddleware from './spots_middleware';
import BookingsMiddleware from './bookings_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotsMiddleware,
  BookingsMiddleware
);

export default RootMiddleware;
