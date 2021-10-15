import { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {

  //definir el state
  const [ busquedaLetra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState("");
  const [ info, guardarInfo ] = useState({});

  //Funcion para scrollear la vista (especialmente util en el celu)
  const contenedorResultado = document.getElementById('resultado');
  function scrollearVista() {
        contenedorResultado.classList.add('mt-5');
        setTimeout(() => {
          contenedorResultado.scrollIntoView({behavior: "smooth"});
        }, 1100)
  }
  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;
    //Realizar las consultas a las APIs
    const consultarAPILetra = async () => {
      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [ letra, informacion ] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);
    }
    consultarAPILetra();  
    scrollearVista();

    /* eslint-disable-next-line */
  }, [busquedaLetra])
  
  
  return (
      <Fragment>
        <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
        />
        <div id="resultado" className="container">
          <div className="row">
            <div className="col-md-6">
              <Info
               info={info} 
              />
            </div>
            <div className="col-md-6">
              {letra !== "" ? 
              <Cancion
                letra={letra}
              />
              : null}
            </div>
          </div>
        </div>      
        </Fragment>
        
  );
  
}

export default App;
