import { Serie } from './Serie.js'
import { dataSeries } from './data.js'

window.onload = function() {
    console.log("hola")
}
const seriesBody: HTMLElement = document.getElementById('Series')!; // Nodo tbody que tiene el id="Series"
const seriesAvarage: HTMLElement = document.getElementById('avarage')!;
const seriesImg: HTMLElement = document.getElementById('imgURL')!;

 renderCoursesInTable(dataSeries);

 seriesAvarage.innerHTML = `El promedio de temporadas es: ${avarageSeasons(dataSeries)}`;

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td> <a href="" id= "${s.imagenURL}">${s.nombre}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
    seriesBody.appendChild(trElement);
  });
}

function avarageSeasons(dataSeries: Serie[]) {
    let avarage: number = 0;
    dataSeries.forEach((s) => avarage = avarage + s.temporadas);
    return avarage/dataSeries.length;
}

function clickImage(url: string, descripcion: string, pagina: string){
    seriesImg.innerHTML = `<img class="card-img-top" src="${url}" alt="">
        <div class="card-body">
        <p class="card-text">${descripcion}</p>
        <a href="${pagina}">${pagina}</a>`;
}