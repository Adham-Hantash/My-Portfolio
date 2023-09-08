const toggle = document.getElementById('toggleDark');
const paragraph = document.getElementById('paragraph');
const gitHub = document.getElementById('gitHub');
const h1Element = document.querySelector("h1");
const nav = document.getElementById('nav')
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon')
    if(this.classList.toggle('brightness')){
        body.style.background = '#fdf8f7';
        body.style.color = 'rgb(33, 33, 33)';


        gitHub.classList.add('black-text');
        gitHub.classList.remove("white-text"); 

        paragraph.classList.remove("whiteless-text");
        paragraph.classList.add("black-text"); 

        h1Element.classList.remove("white-text");
        h1Element.classList.add("purple-text");


  // Select all h2 and h3 elements and change their color
  const h2Elements = document.querySelectorAll('h2');
  const h3Elements = document.querySelectorAll('h3');

  h2Elements.forEach(function (element) {
    element.classList.remove("white-text");
    element.classList.add("purple-text");
  });

  h3Elements.forEach(function (element) {
    element.classList.remove("white-text");
    element.classList.add("purple-text");
  });

        body.style.transition = '1s'
    }else{
        
        body.style.background = 'rgb(33, 33, 33)';
        body.style.color = 'rgb(33, 33, 33)';

        paragraph.classList.add("whiteless-text"); 
        paragraph.classList.remove("black-text");
        
        gitHub.classList.add('white-text');
        gitHub.classList.remove("black-text"); 

        h1Element.classList.add("white-text");
        h1Element.classList.remove("purple-text");


// Select all h2 and h3 elements and change their color
const h2Elements = document.querySelectorAll('h2');
const h3Elements = document.querySelectorAll('h3');

h2Elements.forEach(function (element) {
  element.classList.add("white-text");
  element.classList.remove("purple-text");
});

h3Elements.forEach(function (element) {
  element.classList.add("white-text");
  element.classList.remove("purple-text");
});
        body.style.transition = '1s'
    }
})