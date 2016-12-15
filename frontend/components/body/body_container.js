import { connect } from 'react-redux';
import Body from './body';
import { requestLocation } from '../../actions/filter_actions';

const mapDispatchToProps = dispatch => ({
  requestLocation: location => dispatch(requestLocation(location))
});

export default connect(
  null,
  mapDispatchToProps
)(Body);
