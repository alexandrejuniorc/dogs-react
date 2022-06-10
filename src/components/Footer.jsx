import React from 'react';
import '../scss/Footer.scss';
import { ReactComponent as Dogs } from '../assets/dogs-footer.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};
