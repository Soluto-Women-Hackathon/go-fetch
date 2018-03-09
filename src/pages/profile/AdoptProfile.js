import React from 'react';
import ProfileSetup from '../../components/ProfileSetup';
import headerImage from '../../resources/to-adopt-title-icon.svg';
import OwnerProfileBuilder from "../../components/OwnerProfileBuilder";

const pages = [
  {
    header: 'Hey future\npet owner',
    Component: () => 'yeahhh',
  },
  {
    header: 'What You’re\nlooking for?',
    Component: () => 'yoooo',
  },
];

export default () => (
  <ProfileSetup
    pages={pages}
    headerImage={headerImage}
    OwnerProfileBuilder={OwnerProfileBuilder}
    onComplete={() => alert('complete')}
  />
)
