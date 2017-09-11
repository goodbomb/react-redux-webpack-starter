import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

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

export default Layout;
