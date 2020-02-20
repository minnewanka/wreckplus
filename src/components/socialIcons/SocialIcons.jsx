import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const SocialIcons = () => {
  return (
    <div>
      {[
        { name: 'facebook', url: 'https://www.facebook.com/wreckplus/' },
        { name: 'twitter', url: 'https://twitter.com/wreck_plus' },
        {
          name: 'spotify',
          url: 'https://open.spotify.com/artist/67O5W0HYQmZhcFq24Pew9q',
        },
      ].map(social => (
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
