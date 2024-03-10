const card = document.getElementsByClassName(".card");

const library = [
    {name:'Gaming',author:'Akash',pages:120},
    {name:'Gaming',author:'Akash',pages:120},
    {name:'Gaming',author:'Akash',pages:120}
]



library.forEach(element => {
    let div =  document.createElement('div');
    let name =  document.createElement('h1')
    let author =  document.createElement('p');
    let pages = document.createElement('p')

    name.textContent =  element.name;
    author.textContent = element.author;
    pages.textContent = element.pages

    div.append(name);
    div.append(author);
    div.append(pages);

    div.append(card)


});