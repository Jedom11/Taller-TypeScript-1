import { dataSeries } from './data.js';
window.onload = function () {
    console.log("hola");
};
var seriesBody = document.getElementById('Series'); // Nodo tbody que tiene el id="Series"
var seriesAvarage = document.getElementById('avarage');
var seriesImg = document.getElementById('imgURL');
renderCoursesInTable(dataSeries);
seriesAvarage.innerHTML = "El promedio de temporadas es: ".concat(avarageSeasons(dataSeries));
function renderCoursesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td> <a href=\"\" id= \"").concat(s.imagenURL, "\">").concat(s.nombre, "</td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
        seriesBody.appendChild(trElement);
    });
}
function avarageSeasons(dataSeries) {
    var avarage = 0;
    dataSeries.forEach(function (s) { return avarage = avarage + s.temporadas; });
    return avarage / dataSeries.length;
}
function clickImage(url, descripcion, pagina) {
    seriesImg.innerHTML = "<img class=\"card-img-top\" src=\"".concat(url, "\" alt=\"\">\n        <div class=\"card-body\">\n        <p class=\"card-text\">").concat(descripcion, "</p>\n        <a href=\"").concat(pagina, "\">").concat(pagina, "</a>");
}
