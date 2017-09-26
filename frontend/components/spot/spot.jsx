import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// Components
import Layout from '../layout/layout';
import SpotInfo from './spot_info';
import BookingForm from '../booking/booking_form';

// Actions
import { requestSpots } from '../../actions/spot_actions';

class Spot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spot_id: this.props.routeParams.spot_id,
      spot: null,
    };
  }

  componentDidMount() {
    this.props.requestSpots();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ spot: nextProps.spots[this.state.spot_id] });
  }

  render() {
    const spot = this.state.spot;

    return !spot ? <div></div> : (
      <Layout>
        <div className="spot">
          <div className='spot-head'>
            <img className='head-img' src={spot.spot_pic_url}/>
          </div>

          <div className="spot-info-container">
            <div className='margin-left'></div>
            <SpotInfo spot={spot}/>
            <BookingForm spot={spot}/>
            <div className='margin-right'></div>
          </div>

          <div className="spot-body">
            <div className='margin-left'></div>
            <div className="detail-info">
              <h2>About this listing</h2>
              <p>
                { spot.description }
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="spot-body-placeholder"></div>
            <div className='margin-right'></div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  spots: state.spots.index
});

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Spot);
