import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Header from './Header';
import styles from '../app.scss';

const Layout = function(props) {
    return (
        <div>
            <Header />

            {props.children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.object
};

export default cssModules(Layout, styles);
