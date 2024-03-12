import { useNavigate } from "react-router-dom"

function NuevoCliente() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl mb-2 text-blue-900">Nuevo Cliente</h1>
      <hr />
      <p className="mt-3">Llena todos los campos para registrar nuevo cliente</p>

      <div className="flex justify-end">
        <button className='bg-blue-800 text-white py-1 font-bold uppercase p-5 ' onClick={()=>navigate('/')}>
        <i className="fa-solid fa-arrow-left mr-2"></i> 
         Volver
        </button>
      </div>

      {/* FORMULARIO */}
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        <p>Formulario</p>
      </div>
    </>
  )
}

export default NuevoCliente
