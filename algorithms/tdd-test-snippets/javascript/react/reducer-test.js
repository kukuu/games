describe('Comments Reducer', () => {
	
	it('it handles actions with unknown tyoe', () => {
		expect(commentReducer(undefined, {})).to.equal([]);
	});

	it('', () => {
		const action = {type: ADD_USER, payload: 'May'};
		expect(commentReducer([], action)).to.equal(['May'])
	});
});