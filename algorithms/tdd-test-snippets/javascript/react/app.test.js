
import APP from './app';
import { shallow } from 'enzyme';

describe('it should render <App /> component', () = {
	let component = shallow(< App/>);
	expect(component).toHaveLength(1);
})

describe('it should render props', () = {
	let component = shallow(< App name ="app" />);
	expect(component).toHaveLength(1);
	
	console.log(component.instance());

	expect(component.instance().props).toBe('app');
})