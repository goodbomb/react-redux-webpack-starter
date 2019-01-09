import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Content, Header, Footer } from './';

const StyledLayout = styled.div`
    min-height: 100%;
    position: relative;
`;

const Layout = function(props) {
    return (
        <StyledLayout className="layout">
            <Header />
            <Content children={props.children} />
            <Footer />
        </StyledLayout>
    );
};

Layout.propTypes = {
    children: PropTypes.object
};


export default Layout;
