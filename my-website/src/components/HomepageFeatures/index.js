import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Profile',
    description: (
      <>
      1. 7+ years of software development experience <br/>
      2. self-driven learner <br/>
      3. network programmer <br/>
      5. kernel style, emacser, vimer <br/>
      </>
    ),
  },
  {
    title: 'Characteristic',
    description: (
      <>
        1. willing to learn new skills <br/>
        2. have a can-do altitude on all technical chanllenges. <br/>
        3. excel in cooperating with business and other team members <br/>
      </>
    ),
  },
  {
    title: 'Acknowledgments',
    description: (
      <>
        Thanks to my friend MichelleGuan for helping me build this website. <br/>
        Thanks to Facebook for this wonderful frame.
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
