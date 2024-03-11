const dialogelement = document.getElementById("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submit');


showButton.addEventListener('click',() => {
    dialogelement.showModal();
});

closeButton.addEventListener('click',() =>{
    dialogelement.close();
});


submitButton.addEventListener('click', addBookToLibrary)

const library = [
    {Title:'Sky is the Limit',Author:'Akash',pages:120},
    {Title:'Sky is the Limit',Author:'Akash',pages:120},
    {Title:'Sky is the Limit',Author:'Akash',pages:120},
]



function renderContainer(libraryArray)
{
    const container = document.querySelector(".container");
    container.innerHTML = '';

    libraryArray.forEach(element => {
        
        const card =  document.createElement('div');
        card.className = 'card';


        const title = document.createElement('h2');
        title.textContent = `${element.Title}`;

        const author = document.createElement('p');
        author.textContent = `${element.Author}`;


        const pages = document.createElement('p');
        pages.textContent = `${element.pages}`;

        const readButton = document.createElement('button');
        readButton.className = 'card-button';
        readButton.textContent = 'Read'

        const removeButton = document.createElement('button');
        removeButton.className = 'card-button';
        removeButton.textContent = 'Remove'





        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages)
        card.appendChild(readButton);
        card.appendChild(removeButton);

        container.appendChild(card);

    }); 
   
}


renderContainer(library)

function book(Title,Author,Pages)
{
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
}


function addBookToLibrary()
{
    const inputTitle = document.getElementById('Title-input')
    const inputAuthor = document.getElementById('Author-input');
    const inputPages = document.getElementById('Pages-input')
    


    const newBook = new book(inputTitle.value,inputAuthor.value,inputPages.value)

    library.push({...newBook});
    renderContainer(library)
}







