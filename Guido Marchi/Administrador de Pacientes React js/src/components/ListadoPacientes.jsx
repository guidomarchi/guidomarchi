import Pacientes from "./Pacientes";
import {useEffect} from 'react'
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">Aministra tus <span className="text-indigo-600 font-bold ">Pacientes y Citas</span></p>

                    { pacientes.map( (paciente) => (
                        <Pacientes key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">Comenza a agregar pacientes <span className="text-indigo-600 font-bold ">y apareceran aca</span></p>
                </>
            )}

           

            
        </div>
        
    )
}

export default ListadoPacientes;