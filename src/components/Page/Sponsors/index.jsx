// Sponsors
import React from 'react';
import iZelda from './images/zelda.sponsor.jpeg'
import iBRIIA from './images/briia-logo.01.png'
import Sponsor from './Sponsor';
import styles from './style.css';
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'

const Sponsors = () => {

    const arrSponsors = [
      {
        id: 100,
        picture: iZelda,
        name: 'Zelda Kohn',
        tagLine: 'For all your real estate needs in the Tri-valley!',
      },
      {
        id: 200,
        picture: iBRIIA,
        name: 'BRIIA',
        tagLine: 'Bishop Ranch Intelligence Innovation Accelerator',
        // maxWidth: 10,
      }
    ]

    const sponsors = arrSponsors.map((s) => (
      <Sponsor
        key={s.id}
        picture={s.picture}
        name={s.name}
        tagLine={s.tagLine}
        width={s.maxWidth}
        height={s.maxHeight}
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