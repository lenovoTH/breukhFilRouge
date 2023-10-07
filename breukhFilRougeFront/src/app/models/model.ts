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

