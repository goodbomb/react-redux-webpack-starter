import React from 'react';
import cssModules from 'react-css-modules';
import styles from './error-view.scss';

const ErrorView = function() {
    return (
        <div>
            Uh oh! Something went wrong!
        </div>
    );
};

export default cssModules(ErrorView, styles);
