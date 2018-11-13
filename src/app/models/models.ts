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
	name:string;
	email:string;
	rfc:string;
	token:string;
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
