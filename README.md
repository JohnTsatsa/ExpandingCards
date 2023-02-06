# Expanding Cards
### Demo https://johntsatsa.github.io/ExpandingCards/
## Description of project
The project contains 5 images with a header as caption in it.  
The page starts with the first image expanded and makes visible its caption.The others pictures are smaller.  
When you press on an image gets expanded and the other get smaller.The caption is visual only to the expanded one.  
When the window gets small,hide the two last pictures.  
All the transitions performing smoothly.  	

## Guidance
### HTML 
Make 5 divs that has a background image and the caption/header.  
All five divs wrap them in one div
### CSS 
Flex the main div  
Fix the backround image(size & position)  
Fix the "activated" image and the "not activated" 
### JavaScript 
Use a "for each" method for every image.  
When an image gets pressed make every image "not activated".  
Make "activated" the image that pressed			
				
## Techniques that used
### CSS
```flex:"number";```  
  
  
```@media(max-width:600px){changes on the class}```  
perform changes when the screen gets smaller than 600px  
  
  
```.class:nth-of-type(3)```    
pseudo selector 
					
### Javascript 
```x.addEventListener('click', function() {____commands_______ })```   
```x.classList.add('name of class')```    
```x.classList.remove('name of class')```
