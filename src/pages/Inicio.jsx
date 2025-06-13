import React, { useState } from 'react'; 
import { Form, InputGroup, Button, Alert } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import useAppStore from '../store/useAppStore';
import EncuentroCard from '../components/EncuentroCard'; 
import { buscarEncuentroPorURL } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const Inicio = () => {
  const { cargando, setCargando, resentsSearchData, setSearchData } = useAppStore();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    setError('');
    const url = inputValue.trim();

    const existente = resentsSearchData.find(item => item.linkMatch === url);
    if (existente) {
      setSearchData(existente);
      navigate('/stats');
      return;
    }

    setCargando(true)
    try {
      const data = await buscarEncuentroPorURL(url);
      const resultado = {
        linkMatch: url,
        matchId: url.split('/').pop(),
        equipoA: data.equipoA[0].miEquipo,
        equipoB: data.equipoB[0].miEquipo,
        data,
      };

      setSearchData(resultado);
      setInputValue('');
      navigate('/stats');
    } catch (err) {
      setError(err.message);
    }finally {
    setCargando(false);
  } 
  };

  const handleCardClick = (item) => {
    setSearchData(item);
    navigate('/stats');
  };
 

  return (
    <div className="container py-4" style={{ maxWidth: 400 }}>
      {/* Buscador */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="buscar..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
          <Search />
        </Button>
      </InputGroup>
        {cargando && (
          <div
            className="d-flex flex-column justify-content-center align-items-center mb-3"
            style={{ minHeight: 80 }}
          >
            <Spinner animation="border" role="status" variant="primary" />
            <small className="mt-2 text-primary">Buscando...</small>
            <small className="mt-2 text-primary">Puede tardar un par de  minutos</small>
          </div>

        )}
      {/* Error */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Título de búsquedas recientes */}
      <h6 className="mb-3">Búsquedas recientes:</h6>

      {/* Listado o mensaje */}
      {resentsSearchData.length === 0 ? (
        <div className="text-muted text-center">
          Realiza la primera consulta ingresando el enlace del encuentro que quieres analizar.
        </div>
      ) : (
        resentsSearchData.map((item, idx) => (
          <div key={idx} onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
            <EncuentroCard equipoA={item.equipoA} equipoB={item.equipoB} />
          </div>
        ))
      )}
    </div>
  );
};

export default Inicio;
