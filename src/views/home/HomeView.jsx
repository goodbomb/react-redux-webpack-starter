import React from 'react';
import cssModules from 'react-css-modules';
import styles from './home-view.css';

const HomeView = function() {
    return (
        <div>
            I'm home!
        </div>
    );
};

export default cssModules(HomeView, styles);
