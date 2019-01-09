import React from 'react';
import styled from 'styled-components';
import { palette } from 'theme';

const StyledHeader = styled.section`
    align-items: center;
    background-color: ${palette.primaryColor};
    display: flex;
    height: 100px;
    justify-content: center;
`;

const Header = function() {
    return (
        <StyledHeader className="header">
            Header content
        </StyledHeader>
    );
};

export default Header;
