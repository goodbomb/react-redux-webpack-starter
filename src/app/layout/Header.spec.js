import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {
    default as HeaderComponent,
    Header } from './HeaderComponent';

describe('HeaderComponent', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<HeaderComponent />).contains(<Header className="header">Header content</Header>)).toBe(true);
    });

    it('should be selectable by class "header"', function() {
        expect(shallow(<HeaderComponent />).is('.header')).toBe(true);
    });

    it('should mount in a full DOM', function() {
        expect(mount(<HeaderComponent />).length).toBe(1);
    });

    it('should render to static HTML', function() {
        expect(render(<HeaderComponent />).text()).toEqual('Header content');
    });
});
