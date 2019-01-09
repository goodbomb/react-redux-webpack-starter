import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.section`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
    padding-bottom: 100px;
`;

const Content = function(props) {
    return (
        <StyledContent className="main-content-area">
            {props.children}
        </StyledContent>
    );
};

Content.propTypes = {
    children: PropTypes.object
};

export default Content;
