# worm-selector
the basic stand-alone functionality of selecting a worm

## Demo
Clone the repository and open index.html in a browser. 

## Explanation
The image selector has grey buttons at either end to sroll the images left and right. The image selector responds to touch enabled devices by swiping the images. The number of images displayed is proportional to the window size and is set when the page loads.

Click 'toggle' to show/hide the selector.

## Dependencies
Uses Cauldrath's fork of Swipe: (https://github.com/Cauldrath/Swipe). Cauldrath's fork is used because it allows for multiple images to be displayed in the swipe instance. The master branch of Swipe  (https://github.com/bradbirdsall/Swipe)requires CSS to provide this functionality and appears to be difficult to achieve. 