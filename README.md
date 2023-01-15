							
							Expanding Cards
							

# Description of project:  		
- The project contains 5 images with a header as caption in it.
- The page starts with the first image expanded and makes visible its caption.The others pictures are smaller.
- When you press on an image gets expanded and the other get smaller.
- The caption is visual only to the expanded one.
- When the window gets small,hide the two last pictures.
- All the transitions performing smoothly.

# Techniques that used:	
# HTML 
- Make 5 divs that has a background image and the caption/header
- All five divs wrap them in one div

# CSS 
- flex the main div
- fix the backround image(size & position)
- fix the "activated" image and the "not activated" 
				
# Usefull Commands 
- flex:"number";
- @media(max-width:600px){
   changes on the class
   }
- pseudo selector ==> .class:nth-of-type(3)


# JavaScript 
- use a "for each" method for every image 
- when an image gets pressed make every image "not activated"
- make "activated" the image that pressed
					
# Usefull Commands 
-  x.addEventListener('click', function() {
	 ____commands_______
    })
-  x.classList.add('name of class')
-  x.classList.remove('name of class')
