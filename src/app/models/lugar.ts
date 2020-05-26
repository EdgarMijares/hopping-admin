export interface Lugar {
    nombre:string;
    descripcion:string;
    direccion:string;
    geopoint: {
        latitud:number;
        longitud:number;
    } ,
    detalles: {
        nombre_lugar:string;
        numero_contacto:string;
        descripcion_lugar:string;
    } ,
    myhop: {
        dias_de_servicio: {
            apertura:string;
            cierre:string;
            lunes:boolean;
            martes:boolean;
            miercoles:boolean;
            jueves:boolean;
            viernes:boolean;
            sabado:boolean;
            domingo:boolean;
        } ,
        dias_de_reservacion: {
            apertura:string;
            cierre:string;
            lunes:boolean;
            martes:boolean;
            miercoles:boolean;
            jueves:boolean;
            viernes:boolean;
            sabado:boolean;
            domingo:boolean;
        }
    } ,
    reservaciones: {
        id:string;
    	reservacion:{
    		nombre: string;
    		no_personas: string;
    		status: string;
    		fecha: string;
    		hora: string;
    	}
    } ,
    promociones: {
        lunes_promo: string;
        martes_promo: string;
        miercoles_promo: string;
        jueves_promo: string;
        viernes_promo: string;
        sabado_promo: string;
        domingo_promo: string;
    } ,
    galeria: [] ,
    feed: [] ,
    opciones: {
    }
}
