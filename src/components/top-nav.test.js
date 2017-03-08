import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {NEW_GAME, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should dispatch newGame when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        // Just check type, because payload is random
        expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
    });

    it('Should dispatch toggleInfoModal when info is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    });
});
