// Sponsors
import React from 'react';
import iZelda from './images/zelda.sponsor.jpeg'
import iBRIIA from './images/briia-logo.01.png'
// import Sponsor from './Sponsor';
import Card from '../../elements/Card'
import styles from './style.css';
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'

const Sponsors = () => {

    const arrSponsors = [
      {
        id: 100,
        src: iZelda,
        title: 'Zelda Kohn',
        subTitle: 'For all your real estate needs in the Tri-valley!',
        width: 150,
      },
      {
        id: 200,
        src: iBRIIA,
        title: 'BRIIA',
        subTitle: 'Bishop Ranch Intelligence Innovation Accelerator',
        height: 200,
        // maxWidth: 10,
      }
    ]

    const sponsors = arrSponsors.map((s) => (
      <Card
        key={s.id}
        src={s.src}
        title={s.title}
        subTitle={s.subTitle}
        size={{ width: s.width }}
      />
    ))
    return (
      <SectionWrapper id='sponsors' grayBackground>
        <Section title='Our Sponsors'>
          <div className={styles.sponsors}>
            {sponsors}
          </div>
        </Section>
      </SectionWrapper>
    )
}
export default Sponsors;
