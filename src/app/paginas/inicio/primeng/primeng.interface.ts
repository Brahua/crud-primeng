export interface IUsuario {
    nombre?: string;
    apellidos?: string;
    dni?: number;
    profesion?: string;
    hijos?: IHijos[];
}

export interface IHijos {
    nombre?: string;
    apellidos?: string;
    edad?: number;
}

