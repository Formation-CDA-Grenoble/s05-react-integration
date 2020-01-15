import React from 'react';
import { NavButton, Navbar, Button } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';


export default () =>
  <div>
    <Navbar />
    <Button>
      Découvrir <FontAwesomeIcon icon={faOldRepublic} />
    </Button>
  </div>
;
