import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useQuery } from 'react-query'
import { CountryData } from 'types'
import 'leaflet/dist/leaflet.css'

const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries')
  const data = await response.json()
  return data
}

const Countries = () => {
  const { data, isLoading, isError } = useQuery<CountryData[], Error>(
    'countryData',
    fetchCountryData
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error occurred while fetching data</p>
  }

  const customIcon = new Icon({
    iconUrl: require('images/location-pin.png'),
    iconSize: [20, 20],
  })

  return (
    <div className="h-96 w-9/12 flex mx-auto mt-10">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[20, 77]}
        zoom={3}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data?.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Countries
