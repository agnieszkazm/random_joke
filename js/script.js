var url = 'https://api.icndb.com/jokes/random',
    button = document.getElementById('get-joke'),
    paragraph = document.getElementById('joke');



function getJoke() {
    var xhr = new XMLHttpRequest(); //nowa instancja
    xhr.open('GET', url); //zapytanie do serwera, pobieranie danyc z serwera
    xhr.addEventListener('load', function() { //nasluchiwanie na odpowiedz z serwera
        var response = JSON.parse(xhr.response); //?JSON tłumaczy....
        paragraph.innerHTML = response.value.joke; //zapisanie odpowiedzi z serwera ze zmiennej response w paragrafie id joke
    });
    xhr.send();
}
window.onload = getJoke();

button.addEventListener('click', function() {
    getJoke();
});
