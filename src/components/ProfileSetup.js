import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { mapProps } from 'recompose';
import './ProfileSetup.css';

const Header = ({img, text}) => (
  <div className="profile-setup-header">
    <img src={img} />
    <div className="profile-setup-header-text">{text.split('\n').map((t, i) => <div key={i}>{t}</div>)}</div>
  </div>
);

const NextButton = ({text, onClick}) => (
  <button className="profile-setup-next" onClick={onClick}>{text}</button>
);

const mapProfileProps = mapProps(({ pages, onComplete, match: { params }, history, ...props }) => {
  const page = +(params.page);
  const isLastPage = (pages.length === 0 || page === pages.length - 1);
  const onClick = () => {
    if (isLastPage) {
      onComplete();
    } else {
      history.push('./' + (page + 1));
    }
  };
  const { header, Component} = pages[page] || {};

  return {
    page,
    pages,
    header,
    button: isLastPage ? 'Finish' : 'Next',
    Component,
    onClick,
    ...props,
  };
});

const ProfileSetup = mapProfileProps(({header, button, headerImage, page, pages, onClick, Component}) => (
  <div className="profile-setup">
    <Header text={header} img={headerImage}/>
    <div className="profile-setup-page-wrapper" data-page={page} data-pages-length={pages.length}>
      <NextButton text={button} onClick={onClick}/>
      <div className="profile-setup-page">
        { Component && <Component /> }
      </div>
    </div>
  </div>
));

export default (props) => (
  <Switch>
    <Route exact path="/adopt" render={() => <Redirect to="/adopt/0" />}/>
    <Route path="/adopt/:page" render={(r) => <ProfileSetup {...r} {...props} />}/>
  </Switch>
);