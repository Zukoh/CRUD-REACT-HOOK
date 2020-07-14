import React,{Fragment} from 'react';


const GrillaCards = (props) => {
    return ( 
        <Fragment>
            {
                props.array.length > 0 ? 
                props.array.map( array => (
                    
                    <div key={array.id} className="card  mb-3 mt-3 mx-auto w-100 h-100 tarjeta">
                       <div className="card-header bg-dark text-white">Nota</div>
                       <div className="card-body text-primary">
                           <h5 className="card-title">{array.titulo}</h5>
                           <p className="card-text"> {array.descripcion}</p>
                       </div>
                       <div className="botones">
                       <button className="btn btn-outline-info mb-3 mt-3 mx-auto" onClick={() => {props.Editar(array)}}>Editar</button>
                       <button className="btn btn-outline-danger mb-3 mt-3 mx-auto" onClick={() => {props.DeleteUser(array.id)}}>Delete</button>
                       </div>
                   </div>
              
                )) : (
                    
                    <p className="nonotas">No hay notas, agrega una !!.. </p>
                   
                )

                
            }
            
        </Fragment>
     )
}
 
export default GrillaCards;

