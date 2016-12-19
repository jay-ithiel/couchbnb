import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || []
});

const mapDispatchToProps = (dispatch, routerProps) => {
  let formType;
  const processForm = (user, propsLoginForm) => {
    if (propsLoginForm === true) {
      formType = 'login';
      return login(user);
    } else {
      formType = 'signup';
      return signup(user);
    }
  };

  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    processForm: (user, propsLoginForm) => (
      dispatch(processForm(user, propsLoginForm))
    ),
    guestLogin: () => dispatch(login({
      user: {
        email: "guest@gmail.com",
        password: "password"
      }
    }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
