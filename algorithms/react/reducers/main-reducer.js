let defaultColour = {
	colour: red
}

const mainReducer = (state = defaultColour, action) => {

	if(action.type === 'CHANGE_COLOUR'){
		
		return {
			...state,
			colour: action.colour

		}
	} else {
		...state
	}
	
}

export default mainReducer;