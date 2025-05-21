import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);

  // Manually define social links
  const socialLinks = [
    { network: 'linkedin', href: 'https://www.linkedin.com/in/naveen-s-a70854268/' },
    { network: 'github', href: 'https://github.com/naveeen0308' },
    { network: 'email', href: 'mailto:99220040949@klu.ac.in' },
  ];

  return (
    <div className="social">
      {socialLinks.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme?.socialIconBgColor || '#333'}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </div>
  );
}

export default Social;
