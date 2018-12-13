export interface Roles {
    admin?: boolean;
    gerente?: boolean;
    mesero?: boolean;
    hostess?: boolean;
    cadenero?: boolean;
}

export interface Fiscal {
    nombre_fiscal?: string;
    rfc?: string;
    direccion?: string;
    estado?: string;
    municipio?: string;
    cp?: string;
}

export interface User {
	nombre?: string;
	email?: string;
	token?: string;
	status?: number;
	info_fiscal?: Fiscal,
	plan?: {
		fecha_inicio?: string;
		fecha_fin?: string;
		tipo_plan?: string;
	}
    roles?: Roles;
}

export interface UserGoogle {
	email?:string;
	family_name?:string;
	gender?:string;
	give_name?:string;
	id?:string;
	link?:string;
	locale?:string
	name?:string;
	picture?:string;
	verified_email?:boolean;
}

export interface UserFacebook {
	email?:string;
	first_name?:string;
	granted_scopes?:[];
	id?:string;
	last_name?:string;
	middle_name?:string;
	name?:string;
	picture?: {
		data?: {
			height?:number;
			is_silhouette?:boolean;
			url?:string;
			width?:number;
		}
	}
}
