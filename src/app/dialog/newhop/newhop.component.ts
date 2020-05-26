import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { } from '../../models/models';

import { AngularFirestore  } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';

import { MunicipiosService } from '../../services/municipios.service';
import { Estados, Municipios } from '../../models/models';
import { Fiscal } from '../../models/user';

@Component({
  selector: 'app-newhop',
  templateUrl: './newhop.component.html',
  styleUrls: []
})

export class NewhopComponent implements OnInit {
	rfc:string;
	estados:Estados;
	municipios:Municipios[];
	uid: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
				public dialogRef: MatDialogRef<NewhopComponent>,
				private _fireStore: AngularFirestore,
				private auth: AuthService,
				private lugares: MunicipiosService,
				private dialogs: MatSnackBar) {
		this.lugares.getMunicipios();
		this.lugares.getEstados().subscribe((data:Estados) => {this.estados = data;});
	}

	ngOnInit() { }

    newHop(data: Fiscal) {
		if(data.nombre_fiscal === ""){
			this.createMessageAlert('No ingresaste tu referencia Fiscal.');
		} else if (data.rfc === "") {
			this.createMessageAlert('Llena tu RFC');
		} else if (data.estado === "") {
			this.createMessageAlert('No seleccionaste tu estado.');
		} else if (data.municipio === "") {
			this.createMessageAlert('No seleccionaste tu municipio');
		} else if (data.cp === "") {
			this.createMessageAlert('Agrega tu Codigo Postal');
		} else if (data.rfc.length < 13) {
			this.createMessageAlert('Tu RFC esta incompleto');
		} else if (data.cp.length < 5) {
			this.createMessageAlert('Tu CP esta incompleto');
		} else {
			this.auth.getUID().subscribe(d => {
				if(d.uid != null)
					this.saveUser(d.uid, data);
			})
			this.dialogRef.close();
        }
    }

    saveUser(id:string, fiscal:Fiscal) {
        this._fireStore.collection('users').doc(id).update({status: 1, fiscal })
          .then(status => console.log(status))
          .catch(error => console.log(error));
    }

	cargarMunicipios(d) {
		this.municipios = this.lugares.getMunicipiosPorEstado(d);
	}

	createMessageAlert(dialog) {
		this.dialogs.open(dialog, 'Aceptar' ,{ duration: 2000 });
	}
}
