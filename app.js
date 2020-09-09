const baseUrl = 'https://rickandmortyapi.com/api/';
const characterList = document.getElementById('characters-list');

const GetCharactersList = async url =>{

    const reponse = await fetch(`${baseUrl}${url}`);
    const data = await reponse.json();
    const {results} = data;

    const infoArr = results.map(element => {
        const {image, url} = element;
        return {characterImg: image, characterUrl: url};
    });

    await infoArr.forEach(element => {
        const imgElement = document.createElement('img');
        imgElement.src = element.characterImg;
        imgElement.onclick = ()=> {
            localStorage.setItem('characterUrl', element.characterUrl);
            window.location.href = 'C:\Users\usuario\Documents\hipermedia\app03\character.htm';
        };
        characterList.appendChild(imgElement);
    });
}

GetCharactersList('character');