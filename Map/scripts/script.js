onload = init;
var mymap;
function init() {
	//Setar para aparecer na posição do usuário
	mymap = L.map('mapid').setView([51.505, -0.09], 13);
	
	navigator.geolocation.getCurrentPosition(showPosition);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //criar seu token no mapbox
    accessToken: 'pk.eyJ1Ijoidm9ubmVlZHRvYmVoZXJlY3V6c2Nob29sIiwiYSI6ImNqd2tqaDh5NTBsZGE0OXA2aHRpYWd0MncifQ.8pEwPefYgU0yqYGuixHfmw'
	}).addTo(mymap);
	//Add Button Listener
	var b = document.getElementById('btn_add');
	b.addEventListener("click",buttonListener);
}

function buttonListener(){
	var lat = document.getElementById("lat").value;
	var long = document.getElementById("long").value;
	var desc= document.getElementById("desc").value;
	var m = L.marker([lat, long]).addTo(mymap);
	m.bindPopup(desc);
}

//atualiza a posição
function showPosition(pos) {
	var lat = pos.coords.latitude;
	var long = pos.coords.longitude;
	mymap.setView([lat, long], 13);
	console.log(lat,long)
}

//Função para adicionar marcador


//Challenge: Mostrar a foto do lugar no balão. Dica: desc pode ser um HTML
//Challenge: Auto preencher lat e long ao clicar em algum lugar do mapa