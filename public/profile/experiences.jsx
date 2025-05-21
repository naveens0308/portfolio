import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    background: '#121212',
    color: 'white',
    padding: '50px 0',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '40px',
    color: '#fff',
  },
  timeline: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  timelineLine:{
      content: '""',
      position: 'absolute',
      width: '6px',
      backgroundColor: '#1e90ff',
      top: 0,
      bottom: 0,
      left: '50%',
      marginLeft: '-3px',
    },
  timelineItem: {
    padding: '10px 40px',
    position: 'relative',
    width: '50%',
    boxSizing: 'border-box',
  },
  left: {
    left: 0,
  },
  right: {
    left: '50%',
  },
  card: {
    padding: '20px',
    backgroundColor: '#1e1e1e',
    borderRadius: '6px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  companyLogo: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  companyName: {
    color: '#1e90ff',
    fontSize: '1.5em',
    marginBottom: '8px',
  },
  position: {
    color: '#f0f0f0',
    fontSize: '1.1em',
    marginBottom: '8px',
  },
  details: {
    color: '#ddd',
    fontSize: '0.9em',
    marginBottom: '12px',
  },
  date: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: '0.9em',
  }
};

const experienceData = [
  {
    id: 1,
    title: 'MulticoreWare.Inc',
    position: 'Research Student',
    details: 'Working on Machine Learning and Computer Vision projects',
    date: '06/2023 – Present',
    isLeft: true,
    logo: '/images/experience/multicore.png'
  },
  {
    id: 2,
    title: 'Software Engineer',
    position: 'XYZ Ltd',
    details: 'Developed full-stack applications and improved system performance',
    date: '01/2023 – 05/2023',
    isLeft: false,
    logo: '/images/experience/xyz.png'
  },
  {
    id: 3,
    title: 'App Developer',
    position: 'ABC Pvt Ltd',
    details: 'Created mobile applications for Android and iOS platforms',
    date: '09/2022 – 12/2022',
    isLeft: true,
    logo: '/images/experience/abc.png'
  }
];

const Experience = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Experience</h2>
      <div style={styles.timeline}>
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            style={{
              ...styles.timelineItem,
              ...(exp.isLeft ? styles.left : styles.right)
            }}
          >
            <div style={styles.card}>
              <img
                src={exp.logo}
                alt={`${exp.title} Logo`}
                style={styles.companyLogo}
              />
              <h3 style={styles.companyName}>{exp.title}</h3>
              <h4 style={styles.position}>{exp.position}</h4>
              <p style={styles.details}>{exp.details}</p>
              <span style={styles.date}>{exp.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;