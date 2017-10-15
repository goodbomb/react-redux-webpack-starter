import React from 'react';
import styled from 'styled-components';
import { palette } from 'theme';

export const Header = styled.div`
    align-items: center;
    background-color: ${palette.primaryColor};
    display: flex;
    height: 100px;
    justify-content: center;
`;

const HeaderComponent = function() {
    return (
        <Header className="header">
            Header content
        </Header>
    );
};

export default HeaderComponent;
