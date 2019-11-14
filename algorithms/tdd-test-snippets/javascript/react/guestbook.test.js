
import { renderComponent, expect } from '..test_helper';
import GuestbookList from '../../src/components/guestbook_list';

describe('', () => {
	let component;

	beforeEach(() => {
		const props = { comments: ['Great app', 'Yeah this is the best app']}

		component = renderComponent(GuestbookList, null, props)
	});

	it('Shows a list of items for each component', () => {
		expect(component.find('li').length).to.equal(2);
	});

	it('Shows all coments provided', () => {
		expect(component).to.contain('Great app');
		expect(component).to.contain('Yeah this is the best app');
	});

});