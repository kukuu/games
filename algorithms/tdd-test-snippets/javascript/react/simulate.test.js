
import { simulate, expect } from '..test_helper';

describe('entering some text', () => {

	beforeEach(() => {
		component.find('textarea').simulate('change', 'Great app');
	});

	it('shows text in the textarea', () => {
		expect(component.find('textarea')).to.have.value('Great app');
	});

	it('when submitted clears value', () => {
		component.simulate('submit');
		expect(component.find('textarea')).to.have.value('');
	});
});