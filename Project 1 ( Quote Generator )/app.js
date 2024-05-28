let btn = document.querySelector('#new-btn'); 

let quote = document.querySelector('.quote');   

let person = document.querySelector('.person');


// here we have created a aarray of objects for storing the quotes ...


let quotes = [

    {
        quote:`"To be, or not to be, that is the question."`,
        person:`William Shakespeare`
    },
    {
        quote:`"The only thing we have to fear is fear itself."`,
        person:` Franklin D. Roosevelt `
    },
    {
        quote:`"I think, therefore I am."`,
        person:`René Descartes`
    },
    {
        quote:`"To love and be loved is to feel the sun from both side"`,
        person:`David Viscott`

        
    },
    {
        quote:`"That's one small step for man, one giant leap for mankind"`,
        person:`Neil Armstrong`
    },
    {
        quote:`"Life is what happens when youre busy making other plans"`,
        person:` John Lennon`
    },{
        quote:`"Be yourself everyone else is already taken."`,
        person:`Oscar Wilde` 
    },
    
];

// adding event listner on button 

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person;

});

// changing the quotes and person name as per random


