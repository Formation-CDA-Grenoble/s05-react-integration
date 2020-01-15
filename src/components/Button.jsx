import React from 'react';

import '../styles/Button.css';

export default (props) =>
  <button className="Button">
    <a href="#">
      {props.children}
    </a>
  </button>
;
