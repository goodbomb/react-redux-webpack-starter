import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';

describe('Header', function() {
    it('should be selectable by class "header"', function() {
        expect(shallow(<Header />).is('.header')).toBe(true);
    });

    it('should mount in a full DOM', function() {
        expect(mount(<Header />).length).toBe(1);
    });

    it('should render to static HTML', function() {
        expect(render(<Header />).text()).toEqual('Header content');
    });
});
