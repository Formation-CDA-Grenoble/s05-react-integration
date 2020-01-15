import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import NavButton from './NavButton';
import { buttonData } from '../data';

const generateButtons = data =>
  data.map(item =>
    <li key={item}>
      <NavButton>
        {item}
      </NavButton>
    </li>
  )
;

export default () =>
  <nav>
    <FontAwesomeIcon icon={faReact} />
    <ul>
      {generateButtons(buttonData)}
    </ul>
  </nav>
;
