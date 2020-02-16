import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('<App />', () => {
    it('renders 1 <App /> component', () => {
        const component = shallow( <App name ="app" />);
        expect(component).toHaveLength(1);
    });

    it('renders props correctly', ()=> {
        const component = shallow(<App name="app" />);
        expect(component.instance().props.name).toBe("app");
    });

    it("updates the counter on button click", () => {
        const component = mount(<App />);
        const button = component.find('buttto');

        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        expect(component.state().counter).toEqual(4);
    });
});