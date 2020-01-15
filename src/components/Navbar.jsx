import React from 'react';
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
    <img />
    <ul>
      {generateButtons(buttonData)}
    </ul>
  </nav>
;
