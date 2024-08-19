// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  

//previous btn
//next btn
//random btn

const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
const random = document.querySelector('.random-btn');
//
const img = document.querySelector('.img-container img');
const author = document.querySelector('#author');
const job = document.querySelector("#job");
const info = document.querySelector("#info");
let currIndex = 0;

// Function to update the review display
function updateReview() {
    const review = reviews[currIndex];
    img.src = review.img; // Update image source
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
 }
 
 // Event listeners
 next.addEventListener("click", () => {
    currIndex++;
    if (currIndex > reviews.length - 1) {
        currIndex = 0;
    }
    updateReview();
 });

 prev.addEventListener("click", () => {
    currIndex--;
    if (currIndex < 0) {
        currIndex = reviews.length - 1;
    }
    updateReview();
 });

 let lastIndex = -1; 

random.addEventListener("click", () => {
    let newIndex;

    
    do {
        newIndex = Math.floor(Math.random() * reviews.length);
        console.log('Generated Index:', newIndex); 
    } while (newIndex === lastIndex);
    
  
    
    lastIndex = newIndex; 
    currIndex = newIndex;
    
    updateReview();
});
 updateReview();