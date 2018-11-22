export interface User {
	email: string;
	password: string;
}

export interface Reservaciones {
	id:string;
	reservacion:{
		nombre: string;
		no_personas: string;
		status: string;
		fecha: string;
		hora: string;
	}
}

export interface UserParsing {
	nombre: string;
	email: string;
	token: string;
	status: number;
	info_fiscal: {
		nombre_fiscal: string;
		rfc: string;
		direccion: string;
		estado: string;
		municipio: string;
		cp: string;
	},
	plan: {
		fecha_inicio: string;
		fecha_fin: string;
		tipo_plan: string;
	}
}

export interface UserGoogle {
	email:string;
	family_name:string;
	gender:string;
	give_name:string;
	id:string;
	link:string;
	locale:string
	name:string;
	picture:string;
	verified_email:boolean;
}

export interface UserFacebook {
	email:string;
	first_name:string;
	granted_scopes:[];
	id:string;
	last_name:string;
	middle_name:string;
	name:string;
	picture: {
		data: {
			height:number;
			is_silhouette:boolean;
			url:string;
			width:number;
		}
	}
}

export interface MyHopData {
	horaApertura: string;
  horaCierre: string;
  inicioHora: string;
  inicioTermino: string;
	sercio: {
		lunesServicio: boolean;
	  martesServicio: boolean;
	  miercolesServicio: boolean;
	  juevesServicio: boolean;
	  viernesServicio: boolean;
	  sabadoServicio: boolean;
	  domingoServicio: boolean;
	}
	reservacion: {
		lunesReservacion: boolean;
	  martesReservacion: boolean;
	  miercolesReservacion: boolean;
	  juevesReservacion: boolean;
	  viernesReservacion: boolean;
	  sabadoReservacion: boolean;
	  domingoReservacion: boolean;
	}
}

export interface HopZone {

}

export interface Estados {
	id: number;
	name: string;
}

export interface Municipios {
	inegi_id: number;
	id: number;
	state_id: number;
	name: string;
}
// export interface DocumentChangeAction {
//   //'added' | 'modified' | 'removed';
//   type: DocumentChangeType;
//   payload: DocumentChange;
// }
//
// export interface DocumentChange {
//   type: DocumentChangeType;
//   doc: DocumentSnapshot;
//   oldIndex: number;
//   newIndex: number;
// }
//
// export interface DocumentSnapshot {
//   exists: boolean;
//   ref: DocumentReference;
//   id: string;
//   metadata: SnapshotMetadata;
//   data(): DocumentData;
//   get(fieldPath: string): any;
// }
