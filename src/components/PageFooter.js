import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <div id="footer">
      <p>
Contact no. - 9730644527 <br/>
NG tourism properties, Flat no. 205, Utkarsha-Umang Apartment, Ajni Square, wardha road, Nagpur - 440015
</p>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="copyright">
        <li>&copy; <a href="mailto:nikhilgautam@gmail.com">Nikhil Gautam.</a> All rights reserved. 2020</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Developer: <a href="mailto:contact@kapilkamble.com">Kapil Kamble</a>
        </li>
      </ul>
    </div>
  );
}
