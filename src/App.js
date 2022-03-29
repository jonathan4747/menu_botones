import './App.css';
import {useState} from 'react';
import Pestañas from './componentes/Pestañas/Pestañas';
function App() {

  const MenuTodos = [{
    nombre:'El contenido de la tabla 1',
    id: 1
  },
  {
    nombre:'El contenido de la tabla 2',
    id:2
  },
  {
    nombre: 'El contenido de la tabla 3',
    id:3
  }]
  const [ver , setVer]=useState('')
  const [todos,setTodos]=useState(MenuTodos)

  const VizualisaTodo= (idTodo)=>{
    let NuevoTodo = [...todos]
    for (let i = 0; i<NuevoTodo.length;i++){
      if (NuevoTodo[i].id==idTodo){
          setVer(NuevoTodo[i]);         
      }
    }
  }
  return (
    <div className='pagina'>
      {
         <Pestañas todos={todos} VizualisaTodo={VizualisaTodo} ver={ver} />
       
      }    
    </div>
  );
}

export default App;
