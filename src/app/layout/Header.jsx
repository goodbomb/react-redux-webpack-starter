import React from 'react';
import cssModules from 'react-css-modules';
import styles from '../app.scss';

const Header = function() {
    return (
        <div>
            <div styleName="header">I'm a header!</div>
        </div>
    );
};

export default cssModules(Header, styles);
