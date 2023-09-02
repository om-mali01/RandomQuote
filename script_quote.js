const apiUrl = 'https://api.quotable.io/random';

document.getElementById('quoteBtn').addEventListener('click', () => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            display(data);
        })
        .catch((error) => {
            console.error('Fetching Error',error);
            alert('Error! Please try again later..');
        });
});

function display(quoteData) {
    const quoteTextElement = document.getElementById('quoteText');
    quoteTextElement.textContent = `"${quoteData.content}" - ${quoteData.author}`;
}