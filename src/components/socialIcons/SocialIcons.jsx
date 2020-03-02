import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import socialNetworks from '../../ressources/socialNetworks.json';

const SocialIcons = () => {
  return (
    <div id="socialIcons">
      {socialNetworks.map(social => (
        <a
          key={social.name}
          className="nostyle social-icon"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', social.name]} size="lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
