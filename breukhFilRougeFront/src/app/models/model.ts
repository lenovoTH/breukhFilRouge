import { Time } from "@angular/common"

export interface AllProduct<T> {
    data: T
}

// export interface Classes {
//     data: T
// }

// export interface dataclass {
//     data: ClassO[]
// }

export interface ClassOu {
    id: number
    classe_ouverte_id: ClasseOuverteId
}

export interface ClasseOuverteId {
    id: number
    libelle: string
}

export interface Idlibelle {
    id: number
    libelle: string
}

// export interface Prof {
//     data: Proff[]
// }

export interface Prof {
    id: number
    prenom: string
    nom: string
}

export interface Salle {
    id: number
    libelle: string
    numero: number
}

export interface Session {
    id: number
    cour: number
    salle: number
    h_debut: Time
    h_fin: Time
    date: Date
    duree: Time
}

