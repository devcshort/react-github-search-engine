import React from 'react';
// import heart shaped react icon
import Love from 'react-icons/lib/fa/heart-o';
// import stylesheet
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h3>Made with <Love /> using <a href="https://www.material-ui.com/" target="_blank" rel="noopener noreferrer">Material UI</a>, <a href="https://gorangajic.github.io/react-icons/" target="_blank" rel="noopener noreferrer">React Icons</a> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></h3>

      <h3 className="footer">Source code available on <a href="https://github.com/devcshort/react-github-search-engine" target="_blank" rel="noopener noreferrer">Github</a></h3>
    </div>
  )
}

export default Footer;