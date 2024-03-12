const dialogelement = document.getElementById("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submit');
const inputToggle =  document.getElementById('Toggle-input');


showButton.addEventListener('click',() => {
    dialogelement.showModal();
});

closeButton.addEventListener('click',() =>{
    dialogelement.close();
});


submitButton.addEventListener('click', addBookToLibrary)

const library = [
    {Title:'Sky is the Limit',Author:'Akash',Pages:120,Read: true},
    {Title:'Sky is the Limit',Author:'Akash',Pages:120,Read: false},
    {Title:'Sky is the Limit',Author:'Akash',Pages:120,Read: true}
]

function book(Title,Author,Pages,Read)
{
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;

}

// book.prototype.toggleStatus = function()
// {
//     this.Read =!this.Read;
// }



function renderContainer(libraryArray)
{
    const container = document.querySelector(".container");
    container.innerHTML = '';
    let i = 0;

    libraryArray.forEach(element => {
        
        const card =  document.createElement('div');
        card.setAttribute('data-number',i)
        card.className = 'card';


        const title = document.createElement('h2');
        title.textContent = `${element.Title}`;

        const author = document.createElement('p');
        author.textContent = `${element.Author}`;

        const pages = document.createElement('p');
        pages.textContent =  String(element.Pages)

        const readButton = document.createElement('button');
        readButton.className = `read-button ${element.Read ? 'read': 'not-read'}`;

        readButton.textContent = element.Read ? 'Read' : 'Not Read';

        const removeButton = document.createElement('button');
        removeButton.className = 'card-button';
        removeButton.textContent = 'Remove'


        readButton.addEventListener('click', () => {
            element.Read =!element.Read
            // element.toggleStatus();
           if (element.Read) {
            readButton.classList.add('read');
            readButton.classList.remove('not-read');
            readButton.textContent = "Read";
        } else {
            readButton.classList.add('not-read');
            readButton.classList.remove('read');
            readButton.textContent = "Not Read";
    
        }
            
        });

        removeButton.addEventListener('click',() => {
            library.splice(card.dataset.number,1);
            card.remove();
            renderContainer(library)
        });



        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages)
        card.appendChild(readButton);
        card.appendChild(removeButton);

        container.appendChild(card);
        i++;

    }); 
   
}


renderContainer(library)


function addBookToLibrary(event) {
    event.preventDefault();
    const inputTitle = document.getElementById('Title-input').value;
    const inputAuthor = document.getElementById('Author-input').value;
    const inputPages = document.getElementById('Pages-input').value;
    const form = document.getElementById('form'); 

    if(inputTitle.trim() !== "" && inputAuthor.trim() !== "" && inputPages.trim() !== "") {
        const newBook = new book(inputTitle, inputAuthor, inputPages, inputToggle.checked);
        library.push(newBook);
        form.reset();
        renderContainer(library);
        dialogelement.close();
    }
}





