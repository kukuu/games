
import React from 'react';
import App from './app';
import { mount, shallow } from 'enzyme';


describe('<App />', () => { 

	it('it renders 1 <App /> component', () = {
		let component = shallow(< App/>);
		expect(component).toHaveLength(1);
	});

	it('it renders props correctly', () = {
		let component = shallow(< App name ="app" />);
		//console.log(component.props());
		//console.log(component.instance());

		expect(component.instance().props.name).toBe('app');
	});

	it('It updates the counter on button  click', () => {
		let component = mount(<App />);
		//console.log(component);
		const button = component.find('button');
		//console.log(button);
		//console.log(button.props());//shows onclick as props
		button.simulate('click'); //1
		button.simulate('click');//2
		button.simulate('click');//3
		//console.log(component.state());
		
		//button.props().onclick();//Replace simulatefor single click.
		//expect(component.state().counter).toEqual(1);

		expect(component.state().counter).toEqual(3);

	});
});

