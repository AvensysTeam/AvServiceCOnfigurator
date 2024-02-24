export interface IFSC {
    value1: string | number
    confirm1: boolean
    value2: string | number
    confirm2: boolean
    value3: string | number
    confirm3: boolean
    confirm: boolean
}

export interface ICAP {
    value1: string | number
    confirm1: boolean
    value2: string | number
    confirm2: boolean
    value3: string | number
    confirm3: boolean
    confirm: boolean
}

export interface ICAF {
    value1: string | number
    confirm1: boolean
    value2: string | number
    confirm2: boolean
    value3: string | number
    confirm3: boolean
    confirm: boolean
}

export interface IRH {
    threshold: string
    boost: string
}

export interface ICO2 {
    threshold: string
    boost: string
}

export interface IVOC {
    threshold: string
    boost: string
}

export interface IOtherSettings {
    filter_alaram: string
    t_change: string
    fki_frequency: string
}

export interface IRoom {
    number: number
    unitname: string
    status: string
    FSC: IFSC
    CAP: ICAP
    CAF: ICAF
    RH: IRH
    CO2: ICO2
    VOC: IVOC
    temperature: string
    other_settings: IOtherSettings
}