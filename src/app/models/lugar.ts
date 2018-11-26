export interface Lugar {
    nombre:string;
    descripcion:string;
    direccion:string;
    geopoint: {
        latitud:number;
        longitud:number;
    } ,
    myhop: {
        dias_de_servicio: {
            lunes:boolean;
            martes:boolean;
            miercoles:boolean;
            jueves:boolean;
            viernes:boolean;
            sabado:boolean;
            domingo:boolean;
        } 

    }
}
