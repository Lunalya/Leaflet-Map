

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Narbonne&units=metric&lang=fr&appid=b8c7e4d942816deac3460f5324c1f365';

fetch(url).then((response =>
  response.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
    document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
    document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
  })
));


var mymap = L.map('mapid').setView([43.18411,3.00502], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVuYWx5YSIsImEiOiJja2prNjN5YjkxcTg2MnhvN2N3ZmVvODFxIn0.T_OmfuT-U-u5rtApms4Fdw'
}).addTo(mymap);



var tattoo = L.icon({
    iconUrl: 'Assets/Img/Icons/tattoo.png',
    iconSize: [50, 50],
    iconAnchor: [10, 40],
    popupAnchor: [10, -25],
});
var marker = L.marker([43.18031343498011, 3.0086079755172705], {icon: tattoo}).addTo(mymap);
marker.bindPopup("<img src=Assets/Img/wam.png>" + "Shop privé de tatouage WAM").openPopup();



var piercing = L.icon({
    iconUrl: 'Assets/Img/Icons/piercing.png',
    iconSize: [30, 30],
    iconAnchor: [10, 40],
    popupAnchor: [6, -35],
});
var marker = L.marker([43.18250910938708, 3.0025977366914933], {icon: piercing}).addTo(mymap);
marker.bindPopup("<img src=Assets/Img/simply.jpeg>" + "Simply Tattoo.").openPopup();



var beer = L.icon({
    iconUrl: 'Assets/Img/Icons/beer.png',
    iconSize: [50, 50],
    iconAnchor: [10, 40],
    popupAnchor: [13, -30],
});
var marker = L.marker([43.18263121111855, 3.0030886422673473], {icon: beer}).addTo(mymap);
marker.bindPopup("<img src=Assets/Img/antre.jpg>" + "L'échoppe de l'antre.").openPopup();



var film = L.icon({
    iconUrl: 'Assets/Img/Icons/film.png',
    iconSize: [50, 50],
    iconAnchor: [10, 40],
    popupAnchor: [13, -25],
});
var marker = L.marker([43.16471527198497, 2.9872659910762387], {icon: film}).addTo(mymap);
marker.bindPopup("<img src=Assets/Img/cgr.jpg>" + "Cinéma CGR.").openPopup();




var sushi = L.icon({
    iconUrl: 'Assets/Img/Icons/sushi.png',
    iconSize: [50, 50],
    iconAnchor: [10, 40],
    popupAnchor: [10, -25],
});
var marker = L.marker([43.18103884564566, 3.005408833563267], {icon: sushi}).addTo(mymap);
marker.bindPopup("<img src=Assets/Img/yoli.jpg>" + "Restaurant YOLI de sushi à volonté.").openPopup();
