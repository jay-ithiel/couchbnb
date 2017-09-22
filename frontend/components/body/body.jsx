import React from 'react';
import { withRouter } from 'react-router';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.cityLinksUl = this.cityLinksUl.bind(this);
  }

  goToCity(location) {
    return () => {
      this.props.requestLocation(location);
      this.props.router.push('/search');
    };
  }

  cityLinksUl() {
    let ul = [
      <li
        key={Math.random()}
        onClick={this.goToCity('Los+Angeles')}
        className='city-link city-los-angeles'>
        <div className='city-link-cover'>
          <span className='city-name'>LOS ANGELES</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('San+Francisco')}
        className='city-link city-san-fran'>
        <div className='city-link-cover'>
          <span className='city-name'>SAN FRANCISCO</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('New+York')}
        className='city-link city-new-york'>
        <div className='city-link-cover'>
          <span className='city-name'>NEW YORK</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('Seattle')}
        className='city-link city-seattle'>
        <div className='city-link-cover'>
          <span className='city-name'>SEATTLE</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('Seoul')}
        className='city-link city-seoul'>
        <div className='city-link-cover'>
          <span className='city-name'>SEOUL</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('Las+Vegas')}
        className='city-link city-vegas'>
        <div className='city-link-cover'>
          <span className='city-name'>LAS VEGAS</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('London')}
        className='city-link city-london'>
        <div className='city-link-cover'>
          <span className='city-name'>LONDON</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('Dubai')}
        className='city-link city-dubai'>
        <div className='city-link-cover'>
          <span className='city-name'>DUBAI</span>
        </div>
      </li>,
      <li
        key={Math.random()}
        onClick={this.goToCity('Amsterdam')}
        className='city-link city-amsterdam'>
        <div className='city-link-cover'>
          <span className='city-name'>AMSTERDAM</span>
        </div>
      </li>
    ];
    return ul;
  }

  render() {
    return (
      <div className="body">
        <ul className='city-links'>
          {this.cityLinksUl()}
        </ul>
      </div>
    );
  }
}

export default withRouter(Body);
