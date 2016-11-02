import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || []
});

const mapDispatchToProps = (dispatch, routerProps) => {
  let formTypeVal = routerProps.location.pathname === '/login' ? "Log in" : "Sign Up";
  let processFormVal = formTypeVal === "Log in" ? login : signup;

  return {
    formType: formTypeVal,
    processForm: (user) => dispatch(processFormVal(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
