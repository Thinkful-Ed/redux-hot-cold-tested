import React from 'react';
import {shallow} from 'enzyme';

import {InfoModal} from './info-modal';
import {toggleInfoModal} from '../actions';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Dispatches toggleInfoModal when the close button is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={dispatch} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    });
});
