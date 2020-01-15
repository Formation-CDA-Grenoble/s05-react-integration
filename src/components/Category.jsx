import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';
import { Button } from '.';

import '../styles/Category.css';

export default (props) =>
  <div className="Category" style={ {backgroundImage: `url(${props.picture})`} }>
    <h2 className="Category-name">{props.name}</h2>
    <Button>
      Découvrir <FontAwesomeIcon icon={faOldRepublic} />
    </Button>
  </div>
;
