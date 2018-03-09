import React from 'react';
import ProfileSetup from '../../components/ProfileSetup';
import headerImage from '../../resources/to-adopt-title-icon.svg';
import OwnerProfileBuilder from "../../components/OwnerProfileBuilder";
import LookingFor from '../../components/LookingFor'

const pages = [
  {
    header: 'Hey future\npet owner',
    Component: OwnerProfileBuilder,
  },
  {
    header: 'What You’re\nlooking for?',
    Component: LookingFor,
  },
];

export default () => (
  <ProfileSetup
    pages={pages}
    headerImage={headerImage}
    onComplete={() => alert('complete')}
  />
)
