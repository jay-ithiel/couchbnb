import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import UserInfoItem from './user_info_item';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoItem);
