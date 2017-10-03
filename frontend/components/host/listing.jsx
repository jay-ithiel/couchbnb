import React from 'react';
import { withRouter } from 'react-router';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.goToManageSpot = this.goToManageSpot.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  handlePreview(id) {
    return () => this.props.router.push(`spots/${id}`);
  }

  handleDelete(spot) {
    return () => this.props.deleteSpot(spot.id);
  }

  handleEdit(spot) {
    return () => {
      this.setState({ isNewSpot: false, editSpotTarget: spot });
      this.toggleSpotForm();
    };
  }

  goToManageSpot(spot) {
    return () => this.props.router.push(`/manage/${spot.id}`);
  }

  render() {
    const spot = this.props.spot;

    return (
      <div className='listing' key={ spot.id }>
        <img className="listing-image" src={spot.spot_pic_url}/>

        <div className='listing-info'>
          <li className='listing-title'>
            Title: { spot.title }

            <div className="manage-bookings-button" onClick={this.goToManageSpot(spot)}>
              Manage Bookings
            </div>
          </li>

          <li>Price Per Night: ${ spot.price_per_night }</li>
          <li>City: { spot.city }</li>
          <li>Country: { spot.country }</li>
          <li>Room Type: { spot.room_type}</li>

          <div className="listing-info-buttons">
            <button
              className="listing-info-button"
              onClick={ this.handleEdit(spot) }>Edit
            </button>

            <button
              className="listing-info-button"
              onClick={ this.handleDelete(spot) }>Delete
            </button>

            <button
              className="preview-button"
              onClick={ this.handlePreview(spot.id) }>Preview
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Listing);
