import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
    marginTop: '20px', // Moves the text slightly down
    lineHeight: '1.8', // Increases line spacing
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  profileImage: {
    width: '500px', // Increased size
    height: '500px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  aboutHeader: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
  },
};

function About({ header }) {
  const aboutContent = `
  I am *Naveen S, an AI & ML specialist focused on building intelligent systems with real-world impact.*  
  With expertise in **machine learning, embedded AI, and ARM platforms**, I transform complex challenges into innovative solutions.  
  I believe technology should not just evolve—it should empower, which drives my work in creating efficient, accessible AI systems that make a difference.  
  Through **research, leadership, and innovation**, I turn ambitious ideas into practical applications that push the boundaries of what's possible.
  `;

  return (
    <>
      <h1
        style={styles.aboutHeader}
        onMouseEnter={(e) => { e.target.style.color = 'red'; }}
        onMouseLeave={(e) => { e.target.style.color = 'white'; }}
      >
        {header}
      </h1>
      <div className="section-content-container">
        <Container>
          <Fade>
            <Row>
              <Col style={styles.introTextContainer}>
                <ReactMarkdown>{aboutContent}</ReactMarkdown>
              </Col>
              <Col style={styles.introImageContainer}>
                <img src="/images/about/mine.jpg" alt="profile" style={styles.profileImage} />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
