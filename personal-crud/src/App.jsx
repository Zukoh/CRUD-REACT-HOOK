import React,{useState} from 'react';
import AddUserCard from './components/AddUserCard';
import GrillaCards from './components/GrillaCards'
import EditUserCard from './components/EditUserCard'
import { v4 as uuidv4 } from 'uuid'





function App() {
  const arrayUsers = [
    {id:uuidv4(),titulo:'Redux',descripcion:'Aprender Redux !! Mirar videos y aplicar lo aprendido'},
    {id:uuidv4(),titulo:'React Routes', descripcion:'Aprender rutas para tener todo mas ordenado !'},
    {id:uuidv4(),titulo:'MaterialUI', descripcion:'Para mejorar el estilado..'},
    {id:uuidv4(),titulo:'Bootstrap4', descripcion:'Aprender un poco mas de Bootstrap !'}
  ]
  
  // Genero el estado para setear al array
  
  const [array,setArray] = useState(arrayUsers)
  
  const AddUser = user => {
    user.id=uuidv4()
    setArray([
      ...array,
      user
    ])
  }

  const DeleteUser = id => {
    const filtrado = array.filter( array => array.id !== id)
    setArray(filtrado)
  }


  const [edit,setEdit] = useState(true)

  const [actual, setActual] = useState({
    id:null,titulo:'',descripcion:''
  })

  const Editar = user =>{
    setEdit(false)
    setActual({
      id:user.id, titulo:user.titulo, descripcion:user.descripcion
    })
  }

  const update = (id, updateUser) => {
    setEdit(true)
    setArray(array.map(user => (user.id===id ? updateUser : user) ))
  }

  return (
    <div className="wrap2">
   
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        <svg className="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
            Anotador
        </a>
      </nav>
    </div>
    <div className="container-fluid d-flex">
      <div className="col-4 ">
        {
            edit?(
              <AddUserCard AddUser={AddUser}/>
            ) : (
              <EditUserCard actual={actual} update={update}/>
                )
        }
            </div>
            <div className="col-8  d-flex flex-wrap colder">
            <GrillaCards array={array} DeleteUser={DeleteUser} Editar={Editar}/> 
            </div>
            </div>
            </div>
           
            
               
            
  );
}

export default App;
