
export class Serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    pagina: string;
    imagenURL: string;

    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, pagina: string, imagenURL: string){
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.pagina = pagina;
        this.imagenURL = imagenURL;
    }
}