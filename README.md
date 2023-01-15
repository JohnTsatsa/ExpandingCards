							# Expanding Cards

	Description of project:  		The project contains 5 images with a header as caption in it
			  	                The page starts with the fisrt image expanded and visible its caption 
			   	                The others pictures are smaller
			   	                When you press on an image gets expanded and the other get smaller
				                 Also the caption is visual only to the expanded one
				                 When the window gets small,hide the two last pictures
				                 All the transitions performed smoothly

	Techniques that used:			In HTML 
				                you only need to make 5 divs that has a background image and the caption/header
			                	All five divs wrap them in one div

				                In CSS 
				                flex the main div
				                fix the backround image(size & position)
				                fix the "activated" image and the "not activated" 
				
				                Usefull: - flex:"number";
					                 - @media(max-width:600px){
					                    changes on the class
					                    }
					                  - pseudo selector
					                  -.class:nth-of-type(3)


				                In JavaScript 
				                use a "for each" method for every image 
				                when an image gets pressed make every image "not activated"
				                make "activated" the image that pressed
					
				                Usefull: -  x.addEventListener('click', function() {
					                                 ____commands_______
					                          })
 							  -  x.classList.add('name of class')
					                  -  x.classList.remove('name of class')
				
			
				
	 
