import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    imgSrc: require('@site/static/img/erin.png').default,
    link: '/erin-ui-portfolio2/about-me', // Update this with the desired path
    size: '150px',
    description: 'Get to know me!',
  },
  {
    title: 'Projects',
    imgSrc: require('@site/static/img/craftyLogo.png').default,
    link: '/erin-ui-portfolio2/projects', // Navigate to this link for Projects
    size: '200px',
    description: 'See what I’ve been working on!',
  },
  {
    title: 'Blog',
    imgSrc: require('@site/static/img/typing.png').default,
    link: '/erin-ui-portfolio2/blog', // Update this with the desired path
    size: '150px',
    description: 'Read some of my thoughts!',
  },
];


function Feature({ imgSrc, title, description, link, size }) {
  return (
    <a
      href={link} // Navigate to the link when the card is clicked
      style={{
        textDecoration: 'none', // Remove underline for the clickable card
        color: 'inherit', // Inherit text color to keep it consistent
        display: 'block', // Make the entire card clickable
      }}
    >
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          margin: '16px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Space content evenly
          alignItems: 'center',
          width: '300px',
          height: '350px', // Ensure consistent height for all cards
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={imgSrc}
            alt={title}
            style={{
              maxWidth: size || '100%',
              height: 'auto',
              borderRadius: '4px',
            }}
          />
        </div>
        <div style={{ marginTop: '12px' }}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{ display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Ensures even distribution
          alignItems: 'center',
          gap: '16px', // Consistent spacing between cards
          maxWidth: '1000px', // Constrain the container width for better centering
          width: '100%',
        }}
      >
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
