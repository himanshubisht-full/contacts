import { Line } from 'react-chartjs-2'
import { useQuery } from 'react-query'

const Cases = () => {
  const { data, isLoading } = useQuery('casesWithDate', async () => {
    const res = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    )
    return await res.json()
  })

  const chartData = {
    labels: Object.keys(data?.cases || {}),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data?.cases || {}),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Deaths',
        data: Object.values(data?.deaths || {}),
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
      },
      {
        label: 'Recovered',
        data: Object.values(data?.recovered || {}),
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
      },
    ],
  }

  if (isLoading) {
    return <p>loading...</p>
  }

  return <Line data={chartData} />
}

export default Cases
