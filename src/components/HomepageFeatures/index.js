import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dedicated DICOM Viewer',
    Svg: require('@site/static/img/viewer.svg').default,
    description: (
      <>
        A specialized viewer designed for efficient display and analysis of DICOM medical images.

      </>
    ),
  },
  {
    title: 'Smart and Safe Patient Management',
    Svg: require('@site/static/img/emr.svg').default,
    description: (
      <>
        An intelligent system ensuring secure and streamlined management of patient data for enhanced care and safety.
      </>
    ),
  },
  {
    title: 'Secure Backup powered by AWS storage',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A robust backup solution leveraging AWS storage for secure, scalable, and reliable data protection.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
