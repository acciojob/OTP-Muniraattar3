//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach(input, index)=>{
	inputs.addEventListner('input',()=>{
		if(input.value !==''){
			if(index<inputs.lenght-1){
				inputs[index+1].focus();
			}
		}
	});
	input.addEventListner('keydon',(e)=>{
		if(e.key==='Backspace'&& index>0 && input.value===''){
			inputs[index-1].focus();
		}
	});
});
inputs[0].focus();