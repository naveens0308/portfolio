import React from 'react';
import '../css/education.css';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering (AIML)',
    institution: 'Kalasalingam Academy of Research and Education, Srivilliputhur, Tamil Nadu',
    details: 'CGPA: 9.67',
    date: 'Expected 2026',
    position: 'left',
    logo: '/images/education/klu1.jpg',
  },
  {
    id: 2,
    degree: 'Higher Secondary Education',
    institution: 'Chinmaya Vidyalaya (CBSE), Nagapattinam',
    details: 'Marks: 83.2%',
    date: 'Jun 2022',
    position: 'right',
    logo: '/images/education/clg.jpg',
  },
  {
    id: 3,
    degree: 'Secondary Education',
    institution: 'Chinmaya Vidyalaya (CBSE), Nagapattinam',
    details: 'Marks: 89.4%',
    date: 'june 2020',
    position: 'left',
    logo: '/images/education/clg.jpg',
  },
];

const Education = () => (
  <div className="education-container">
    <h2 className="education-title">Education</h2>
    <div className="timeline">
      {educationData.map((edu) => (
        <div key={edu.id} className={`timeline-item ${edu.position}`}>
          <div className="education-card">
            <img src={edu.logo} alt={`${edu.degree} Logo`} className="education-logo" />
            <h3>{edu.degree}</h3>
            <h4 className="institution">{edu.institution}</h4>
            <p>{edu.details}</p>
            <span className="timeline-date">{edu.date}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
