
import React from 'react';
import Redux from 'redux';
import { expect } from '..test_helper';
import { addUser } from '../../src/actions';

describe('actions', () => {
	describe('', () => {
		it('has correct type', () => {
			const action = addUser();
			expect(action.type).to.equal(ADD_USER);
		});

		it('has correct payload', () => {
			const action = addUser('May');
			expect(action.payload).to.equal('May');
		});
	});
});