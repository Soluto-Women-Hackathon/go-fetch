import React from 'react';
import ProfileSetup from '../../components/ProfileSetup';

const pages = [
  {
    header: 'Hey future pet owner',
    Component: () => 'yeahhh',
  },
  {
    header: 'What You’re looking for?',
    Component: () => 'yoooo',
  },
];

export default () => (
  <ProfileSetup
    pages={pages}
    onComplete={() => alert('complete')}
  />
)
