const btnGenerateCharacter = document.getElementById('btn-generate-character');

btnGenerateCharacter.addEventListener('click',getCharacter)

function createCards(character) {
    const section = document.getElementById('cards-organization')
    const containerCard = document.createElement('div')
    

    const imgCharacter = document.createElement('img')
    const hr = document.createElement('hr')
    const nameCharacter = document.createElement('h2')
    const quoteCharacter = document.createElement('p')

    containerCard.classList.add('container-card')
    imgCharacter.classList.add('img-character')
    nameCharacter.classList.add('name-character')
    quoteCharacter.classList.add('quote-character')

    imgCharacter.src = character.url
    imgCharacter.alt = character.id

    nameCharacter.textContent = character.id

    quoteCharacter.textContent = character.width

    section.appendChild(containerCard)
    containerCard.appendChild(imgCharacter)
    containerCard.appendChild(hr)
    containerCard.appendChild(nameCharacter)
    containerCard.appendChild(quoteCharacter)
}

function getCharacter() {
    const requestMethod = {method:'GET'}
    const URL ='https://api.thecatapi.com/v1/images/search'

    fetch(URL,requestMethod)
    .then(response => response.json())
    .then(data => createCards(data[0]))
    .catch(err => console.error(err))
}