
// -----    calls the class panel that includes all the images -------//
const panels = document.querySelectorAll('.panel')


/*  For each image 
	when an imge gets clicked
	go to the function that deletes the class "active" from every image
	add active to the image that pressed  */
panels.forEach(function(panel){  
	
	panel.addEventListener('click',function(){
		removeActive()  
	panel.classList.add('active')  
	 
	})
})

//    function that removes the class from every image    //
function removeActive(){
panels.forEach(function(panel){
	panel.classList.remove('active')
})
}