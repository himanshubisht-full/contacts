import Cases from 'components/Cases'
import Countries from 'components/Countries'

const ChartsAndMaps = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-center">
        <div className='h-1/2 w-1/2'>
          <Cases />
        </div>
      </div>
      <div>
        <Countries />
      </div>
    </div>
  )
}

export default ChartsAndMaps
