async function getQuotes(language) {
    const quote = document.querySelector('.quote'),
        author = document.querySelector('.author'),
        quoteButton = document.querySelector('.change-quote');

    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();


    if (localStorage.getItem('i') === null) {
        localStorage.setItem('i', 0);
    }

    let i = localStorage.getItem('i');
    
    quote.textContent = data[0][language][i].quote;
    author.textContent = data[0][language][i].author;

    quoteButton.addEventListener('click', () => {
        i = Math.floor(Math.random() * (data[0][language].length - 0 + 1)) + 0;

        quote.textContent = data[0][language][i].quote;
        author.textContent = data[0][language][i].author;
        localStorage.setItem('i', i);
    })

}

export { getQuotes }