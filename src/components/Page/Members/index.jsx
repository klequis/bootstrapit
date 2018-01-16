// Members
import React from 'react';
import classNames from 'classnames'
import styles from './style.css';
import Member from './Member'
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'
import Card from '../../elements/Card'
import Identicon from '../../elements/Identicon'
import iLaura from './images/img-150px/laura.jpg';
import iMichael from './images/img-150px/michael.jpg';
import iNathan from './images/img-150px/nathan.jpg';
import iKevin from './images/img-150px/kevin.jpg';

const Members = () => {
  const getPicture = (hash) => {
    return <Identicon hash={'7a8a0c654b89f157524be1b68adf9dbecc4f1db0'} />
  }
  const cardStyle = classNames({
    card: true,
    [styles.headShot]: true,
    [styles.imgSize]: true
  })
  const rowStyle = classNames({
    row: true,
    [styles.centerRow]: true
  })
  const cardTextStyle = classNames({
    'card-text': true,
    [styles.cardText]: true
  })
  const cardTitleStyle = classNames({
    'card-title': true,
    [styles.cardTitle]: true
  })
  const colStyle = classNames({
    col: true,
    [styles.colMod]: true,
  })
  return (<SectionWrapper id='members'>
    <Section title='Mentors'>
      <div className={rowStyle}>
        <Member
          src={iLaura}
          title='Laura'
          subTitle='Web Developer'
        />
        <div className={colStyle}>
          <div className={cardStyle}>
            <Identicon hash={'7a8a0c654b89f157524be1b68adf9dbecc4f1db0'} />
            <div className="card-body">
              <h5 className={cardTitleStyle}>Karl</h5>
              <p className={cardTextStyle}>Organizer Developer Teacher</p>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={cardStyle}>
            <img className="card-img-top" src={iLaura} alt="member"/>
            <div className="card-body">
              <h5 className={cardTitleStyle}>Laura</h5>
              <p className={cardTextStyle}>Co-organizer Web Developer</p>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={cardStyle}>
            <img className="card-img-top" src={iMichael} alt="member"/>
            <div className="card-body">
              <h5 className={cardTitleStyle}>Michael</h5>
              <p className={cardTextStyle}>Sr Web Developer</p>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={cardStyle}>
            <img className="card-img-top" src={iNathan} alt="member"/>
            <div className="card-body">
              <h5 className={cardTitleStyle}>En Zyme</h5>
              <p className={cardTextStyle}>Python & Data Science</p>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={cardStyle}>
            <img className="card-img-top" src={iKevin} alt="member"/>
            <div className="card-body">
              <h5 className={cardTitleStyle}>Kevin</h5>
              <p className={cardTextStyle}>Web Developer</p>
            </div>
          </div>
        </div>
        <div className={colStyle}>
          <div className={cardStyle}>
            <Identicon hash={'7a8a0c654b89f157524be1b68adf9dbecc4f1db0'} />
            <div className="card-body">
              <h5 className={cardTitleStyle}>Jim</h5>
              <p className={cardTextStyle}>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </SectionWrapper>)
}
export default Members
