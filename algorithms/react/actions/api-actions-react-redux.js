const function loadColour(){
	return((despatch) =>{
		return axios.get('endpoint').then((response) => {
			despatch(changeColour("#" + response.data.newcolour))
		})
	})
}


const function changeColour(colour){

	return {
		type: CHANGE_COLOUR,
		colour: colour
	}
}