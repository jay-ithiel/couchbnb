import { connect } from 'react-redux';
import SpotForm from './spot_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.currentUser ? true : null
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
