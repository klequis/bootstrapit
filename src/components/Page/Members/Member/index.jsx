// Member
import React from 'react';
import styles from './style.css';
import classNames from 'classnames'
import Identicon from '../../../elements/Identicon'

import { log } from '../../../../lib/ke-utils'

const Member = ({ id, src, title, subTitle }) => {
  // col
  const colClass = classNames({
    col: true,
    [styles.colMod]: true,
  })
  // card
  const cardClass = classNames({
    card: true,
    [styles.headShot]: true,
    // [styles.imgSize]: true,
  })
  // img
  const getPicture = () => {
    if (src === '') {
      return <Identicon hash={'7a8a0c654b89f157524be1b68adf9dbecc4f1db0'} />
    } else {
      return <img className="card-img-top" src={src} alt='member' />
    }
  }
  // title
  const cardTitleClass = classNames({
    'card-title': true,
    [styles.cardTitle]: true
  })
  // subTitle
  const cardSubTitleClass = classNames({
    'card-text': true,
    [styles.cardText]: true
  })

  return (
    <div className={colClass}>
      <div className={cardClass}>
        <img className="card-img-top" src={src} alt="member"/>
        <div className="card-body">
          <h5 className={cardTitleClass}>{title}</h5>
          <p className={cardSubTitleClass}>{subTitle}</p>
        </div>
      </div>
    </div>
  )
};

export default Member;
