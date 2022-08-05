async function getQuotes() {
    const quote = document.querySelector('.quote'),
        author = document.querySelector('.author'),
        quoteButton = document.querySelector('.change-quote');

    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();


    localStorage.setItem('i', 0);

    let i = localStorage.getItem('i');

    quote.textContent = data[i].quote;
    author.textContent = data[i].author;

    quoteButton.addEventListener('click', () => {
        i = Math.floor(Math.random() * (100 - 0 + 1)) + 0;;
        quote.textContent = data[i].quote;
        author.textContent = data[i].author;
        localStorage.setItem('i', i);
    })

}

export { getQuotes }