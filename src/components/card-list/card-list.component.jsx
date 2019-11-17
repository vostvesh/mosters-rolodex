import React from 'react';
import './card-list.style.scss';

import Card from '../card/card.component';

export const CardList = (props) => (
  <div className="grid-list">
    {
      props.monsters.map(
        monster => <Card monster={monster} key={monster.id} />
      )
    }
  </div>
);
