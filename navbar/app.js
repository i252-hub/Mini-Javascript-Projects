
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


menu = document.querySelector('.nav-toggle');
link = document.querySelector('.links')
menu.addEventListener('click', function(){
    link.classList.toggle('show-links');
})