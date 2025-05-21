import React from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';

const styles = {
  sectionContentContainer: {
    textAlign: 'center',
    padding: '40px 0',
  },
  skillsHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#ddd', // Light gray for better contrast
    marginBottom: '20px',
  },
  skillCategory: {
    marginBottom: '30px',
  },
  skillTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
    color: '#ccc', // Light gray for contrast
  },
  skillItem: {
    display: 'inline-block',
    textAlign: 'center',
    margin: '15px',
    fontWeight: 'bold',
    color: 'white', // Default skill text color set to white
    transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
    cursor: 'pointer',
  },
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
    transition: 'transform 0.3s ease-in-out',
  },
};

const mySkills = {
  intro: 'I specialize in AI, ML, and embedded systems, along with web technologies.',
  skills: [
    {
      title: 'Programming Languages',
      items: [
        { title: 'C++', icon: '/images/skills/c-plus-plus.svg' },
        { title: 'Python', icon: '/images/skills/python.png' },
        { title: 'Java', icon: '/images/skills/java.png' },
        { title: 'SQL', icon: '/images/skills/mysql.png' },
      ],
    },
    {
      title: 'Web Technologies',
      items: [
        { title: 'HTML', icon: '/images/skills/html.png' },
        { title: 'CSS', icon: '/images/skills/css.png' },
        { title: 'Bootstrap', icon: '/images/skills/bootstrap.jpeg' },
      ],
    },
    {
      title: 'AI & ML Tools',
      items: [
        { title: 'PyTorch', icon: '/images/skills/pytorch.jpeg' },
        { title: 'ROS2', icon: '/images/skills/ros2.jpeg' },
        { title: 'TIDL', icon: '/images/skills/tidl.jpeg' },
      ],
    },
    {
      title: 'Version Control & Cloud',
      items: [
        { title: 'Git & GitHub', icon: '/images/skills/git.png' },
        { title: 'GCP', icon: '/images/skills/GCP.webp' },
      ],
    },
  ],
};

function Skills() {
  const handleMouseEnterHeading = (e) => {
    e.target.style.color = 'red';
  };

  const handleMouseLeaveHeading = (e) => {
    e.target.style.color = 'white';
  };

  const handleMouseEnterTitle = (e) => {
    e.target.style.color = '#007bff';
  };

  const handleMouseLeaveTitle = (e) => {
    e.target.style.color = '#ccc';
  };

  const handleMouseEnterSkill = (e) => {
    e.currentTarget.style.color = '#007bff';
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeaveSkill = (e) => {
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <>
      <Fade>
        <div style={styles.sectionContentContainer}>
          <Container>
            <h2
              style={styles.skillsHeading}
              onMouseEnter={handleMouseEnterHeading}
              onMouseLeave={handleMouseLeaveHeading}
            >
              Skills
            </h2>
            <h4 style={styles.introTextContainer}>
              <ReactMarkdown>{mySkills.intro}</ReactMarkdown>
            </h4>
            {mySkills.skills.map((category) => (
              <div key={category.title} style={styles.skillCategory}>
                <h3
                  style={styles.skillTitle}
                  onMouseEnter={handleMouseEnterTitle}
                  onMouseLeave={handleMouseLeaveTitle}
                >
                  {category.title}
                </h3>
                {category.items.map((skill) => (
                  <div
                    key={skill.title}
                    style={styles.skillItem}
                    onMouseEnter={handleMouseEnterSkill}
                    onMouseLeave={handleMouseLeaveSkill}
                  >
                    <img style={styles.iconStyle} src={skill.icon} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            ))}
          </Container>
        </div>
      </Fade>
    </>
  );
}

export default Skills;
