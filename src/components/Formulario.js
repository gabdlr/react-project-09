import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ( {guardarBusquedaLetra} ) => {

    //States
    const [ busqueda, guardarBusqueda ] = useState({
        artista: "",
        cancion: ""
    });

    const [ error, guardarError ] = useState(false);

    //Extraemos los valores de busqueda
    const { artista, cancion } = busqueda;

    //Actualizamos el state
    const actualizarState = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Consultar las APIs
    const buscarInformacion = e => {
        e.preventDefault();

        //Validacion
        if(artista.trim() === "" || cancion.trim === ""){
            guardarError(true);
            return;
        } 
        guardarError(false);

        //Pasar al componente principal 
        guardarBusquedaLetra(busqueda);

    }

    return ( 
    <div className="bg-info ">
        <div className="container">
            <div className="row">
               
                <form
                className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                onSubmit={buscarInformacion}
                >
                    <fieldset>
                        <legend className="text-center">Buscador letra canciones</legend>           
                        <div className="row">
                        <div className="col-12 d-flex justify-content-center mb-2">
                            { error ? 
                            <p className="alert alert-danger text-center p-2 w-75">Todos los campos son obligatorios.</p>:
                            null
                            }
                        </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Artista</label>
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    name="artista" 
                                    placeholder="Nombre del artista"
                                    onChange={actualizarState} 
                                    value={artista}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Canción</label>
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    name="cancion" 
                                    placeholder="Nombre de la canción"
                                    onChange={actualizarState}
                                    value={cancion} 
                                    />
                                </div>
                            </div>
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-primary float-right">
                            Buscar
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    );
}

Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
export default Formulario;