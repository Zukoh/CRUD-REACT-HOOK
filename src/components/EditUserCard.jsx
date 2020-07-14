import React,{useState, Fragment} from 'react'
import {useForm} from 'react-hook-form'




// -->   <h5 className="card-title">Primary card title</h5> <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

const EditUserCard = (props) => {
   

    const {register,errors,handleSubmit, setValue} = useForm ({
        defaultValues:props.actual
    });
    
    setValue ('titulo' , props.actual.titulo)
    setValue ('descripcion' , props.actual.descripcion)

    const onSubmit = (data, e) => {
        data.id=props.actual.id
        props.update(props.actual.id,data)
        e.target.reset()
    }
    
    return ( 
            <Fragment>
                   <div className="card  mb-3 mt-3 mx-auto tarjeta">
                        <div className="card-header bg-dark text-white">Editar Carta</div>
                        <div className="card-body text-primary">
                         <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">Titulo</label>
                            <input type="text" name="titulo" placeholder= "Ingrese un titulo.." ref=
                            {register({
                                required:{value:true, message:'Campo obligatorio'}})}/>
                            <label className="labeldesc">Descripcion</label>
                            <textarea rows="7" cols="32" placeholder="Escribir nota.."name="descripcion" ref=
                            {register({
                                required:{value:true, message:'Campo obligatorio'}})}/>
                            <button className="btn btn-dark boton=">Editar Nueva Carta</button>
                        </form>  
                        </div>
                    </div>
            </Fragment>
     );
}
 
export default EditUserCard;