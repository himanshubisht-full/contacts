export type TStatus = 'ACTIVE' | 'INACTIVE'

export interface IContact {
  id: number
  firstname: string
  lastname: string
  status: TStatus
}

export interface CountryData {
  country: string
  cases: number
  deaths: number
  recovered: number
  countryInfo: {
    _id: number
    lat: number
    long: number
  }
}
