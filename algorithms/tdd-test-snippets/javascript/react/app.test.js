import APP from './app';
import { mount, shallow } from 'enzyme';

describe('it should render <App /> component', () = {
	let component = shallow(< App/>);
	expect(component).toHaveLength(1);
});

describe('it should render props', () = {
	let component = shallow(< App name ="app" />);
	expect(component).toHaveLength(1);
	console.log(component.props());
	console.log(component.instance());

	expect(component.instance().props).toBe('app');
});

describe('It updates the button on click', () => {
	let component = mount(<App />);
	//console.log(component);
	const button = component.find('button');
	//console.log(button);
	//console.log(button.props());//shows onclick as props
	button.simulate('click'); //1
	button.simulate('click');//2
	//console.log(component.state());

	expect(component.state().counter).toEqual(2);

});