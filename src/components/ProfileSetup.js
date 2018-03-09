import React, { Component } from 'react';
import './ProfileSetup.css';

const Header = ({img, text}) => (
  <div className="profile-setup-header">
    <img src={img} />
    <div>{text}</div>
  </div>
);

const NextButton = ({text, onClick}) => (
  <button className="profile-setup-next" onClick={onClick}>{text}</button>
);

class ProfileSetup extends Component {
  state = {
    page: 0,
  };

  render() {
    const {pages, headerImage, onComplete} = this.props;
    const {page} = this.state;
    const isLastPage = (pages.length === 0 || page === pages.length - 1);
    const onClick = () => {
      if (isLastPage) {
        onComplete();
      } else {
        this.setState({page: page + 1});
      }
    };

    const { header, Component} = pages[page] || {};

    return (
      <div className="profile-setup">
        <Header text={header} img={headerImage}/>
        <div className="profile-setup-page" data-page={page} data-pages-length={pages.length}>
          { Component && <Component {...this.props} /> }
        </div>
        <NextButton text={isLastPage ? 'Complete' : 'Next'} onClick={onClick}/>
      </div>
    );
  }
}

export default ProfileSetup;
