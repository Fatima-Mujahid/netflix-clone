import React, { useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  useEffect(() => {
    document.addEventListener('scroll', (e)=> {
      (document.getElementsByClassName('nav')[0]).classList.toggle('nav--scrolled', window.scrollY > 120);
    });
  }, []);

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__image"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Smile"
      />
    </div>
  );
}
