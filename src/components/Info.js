import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ info }) => {
    if (Object.keys(info).length === 0) return null;
    const { strArtistThumb, strGenre, strBiographyES } = info;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="artista" className="img-fluid" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía</h2>
                <p className="card-text">{strBiographyES}</p>
            </div>
        </div>
     );
}

Info.propTypes = {
    info: PropTypes.object.isRequired
}

export default Info;