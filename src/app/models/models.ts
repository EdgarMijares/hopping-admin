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

export interface MyHopData {
  horaApertura: string;
  horaCierre: string;
  inicioHora: string;
  inicioTermino: string;
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;
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
