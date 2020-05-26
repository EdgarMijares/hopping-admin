import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Municipios } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

	private uriEstados:string = '/api/estados.json';
	private uriMunicipios:string = '/api/municipios.json';

	private municipios:Municipios[];

  constructor( private http:HttpClient ) { }
	
	getEstados(){
		return this.http.get(this.uriEstados);
	}

	getMunicipios() {
		return this.http.get(this.uriMunicipios).subscribe((municipios:Municipios[]) => this.municipios = municipios);
	}

	getMunicipiosPorEstado(id_estado: number) {
		let lista = new Array();
		for (let i = 0; i < this.municipios.length; i++) {
			if(this.municipios[i].state_id === id_estado){
				lista.push(this.municipios[i]);
			}
		}
		return lista;
	}

}
