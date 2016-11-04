import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.linksContainer = this.linksContainer.bind(this);
    this.about = this.about.bind(this);
    this.gettingStarted = this.gettingStarted.bind(this);
    this.sitemap = this.sitemap.bind(this);
    this.safety = this.safety.bind(this);
    this.community = this.community.bind(this);
    this.support = this.support.bind(this);
    this.terms = this.terms.bind(this);
    this.privacy = this.privacy.bind(this);
  }

  linksContainer() {
    return (
      <div className="links-container">
        { this.about() }
        { this.gettingStarted() }
        { this.sitemap() }
        { this.safety() }
        { this.community() }
        { this.support() }
        { this.terms() }
        { this.privacy() }
      </div>
    );
  }

  about() {
    return (
      <div className="footer-link">
        ABOUT
      </div>
    );
  }

  gettingStarted() {
    return (
      <div className="footer-link">
        GETTING STARTED
      </div>
    );
  }

  sitemap() {
    return (
      <div className="footer-link">
        SITEMAP
      </div>
    );
  }

  safety() {
    return (
      <div className="footer-link">
        SAFETY
      </div>
    );
  }

  community() {
    return (
      <div className="footer-link">
        COMMUNITY
      </div>
    );
  }

  support() {
    return (
      <div className="footer-link">
        SUPPORT
      </div>
    );
  }

  terms() {
    return (
      <div className="footer-link">
        TERMS
      </div>
    );
  }

  privacy() {
    return (
      <div className="footer-link">
        PRIVACY
      </div>
    );
  }

  render() {
    return (
      <div className="footer">
        { this.linksContainer() }
      </div>
    );
  }
}

export default Footer;
