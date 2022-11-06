import { useNavigate } from 'react-router-dom'
import TitlePage from '../TitlePage'

const FormHeader = ({ title, subtitle }) => {
  const navigate = useNavigate()

  return (
    <>
      <TitlePage title={title} subtitle={subtitle} />

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </>
  )
}

export default FormHeader
