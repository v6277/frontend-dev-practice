var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

var randomNumber = Math.floor(Math.random() * 4);

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail))
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

/* 
** Use thumbnail array as the argument to get information about the thumbnails.
** Make a randomNumber variable that randomly sets it to a number between 0 and 4.
** Use the randomNumber to change the data-image-url of a random thumbnail to an image of tacocat.
*/
function setRandomOtterThumbnailDetailImage(thumbnailArray, randomNumber) {
  'use strict';
  thumbnailArray[randomNumber].setAttribute('data-image-url', 'https://cdn.shopify.com/s/files/1/0032/7882/products/tacocat_art.png?v=1447870796');
}


/*
** Reset the otter image and set a new hiding spot for the tacocat.
** Only works once. To make it work more than once, do not set the 
** random number as a global var and make a loop going through
** the array once, changing each attribute to the image it's supposed 
** to represent, then set a new random number to call setRandomOtterThumbnailDetailImage
** Reason for this is the challenge says "create a function", therefore I tried to avoid
** creating other fuctions and keep the code simple
**
** To use the method, use the browser's console. Method was tested in Firefox 77.
*/
function resetRandomOtterThumbnailDetailImage(thumbnailArray) {
  'use strict';
  var thumbnailImage = thumbnailArray[randomNumber].getAttribute('href');
  thumbnailArray[randomNumber].setAttribute('data-image-url', thumbnailImage);

  // Set a new random number.
  var newRandomNumber = Math.floor(Math.random() * 4);
  setRandomOtterThumbnailDetailImage(thumbnailArray, newRandomNumber);
}

/*
** Initiate code function
*/
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  setRandomOtterThumbnailDetailImage(thumbnails, randomNumber);
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();