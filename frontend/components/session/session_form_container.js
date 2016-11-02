import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || []
});

const mapDispatchToProps = (dispatch, routerProps) => {
  let formType;
  const processForm = (user) => {
    if (routerProps.type === true) {
      login(user);
      formType = 'login';
    } else {
      signup(user);
      formType= 'signup';
    }
  };

  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
