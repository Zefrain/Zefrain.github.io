import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Profile',
    description: (
      <>
      1. 7+ years of software development experience <br />
      2. Self-motivated <br />
      3. Network Programmer <br />
      4. kernel style, emacser, vimer <br />
      </>
    ),
  },
  {
    title: 'Background',
    description: (
      <>
      
      </>
    ),
  },
  {
    title: 'Thanks',
    description: (
      <>
        Thanks to my friend MichelleGuan for helping me build thie website 
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md" style={{textAlign: 'left'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
