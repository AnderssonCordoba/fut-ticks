import React from "react";
import './EncuentrosTable.css';
import { Table, Col } from 'react-bootstrap';

const statsKeys = [
  "goles",
  "disparoAGol",
  "tirosEsquina",
  "tarjetasAmarillas",
  "tirosRealizados",
  "tarjetasRojas",
  "faltas",
  "salvadas",
];

const EncuentrosTable = ({ miEquipo, adversario }) => {
  return (
    <div className="encuentros">

        <div className="encuentro-card">
        <Col className="text-center w-100">
            <div className="d-flex justify-content-center align-items-center">
            <img src={miEquipo.escudo} alt="Equipo A" />
            <span className="encuentro-card-nombres">{miEquipo.nombre}</span>
            <span className="mx-2 fw-bold">vs</span>
            <span className="encuentro-card-nombres">{adversario.nombre}</span>
            <img src={adversario.escudo} alt="Equipo B" />
            </div>

            <Table responsive bordered hover size="sm" className="mt-3 text-center align-middle">
            <thead className="table-light">
                <tr>
                <th className="text-start">Estadística</th>
                <th>{miEquipo.nombre}</th>
                <th>{adversario.nombre}</th>
                </tr>
            </thead>
            <tbody>
                {statsKeys.map((key) => (
                <tr key={key}>
                    <td className="text-start text-capitalize fw-medium">{key}</td>
                    <td>{miEquipo[key]}</td>
                    <td>{adversario[key]}</td>
                </tr>
                ))}
            </tbody>
            </Table>
        </Col>
        </div>
    </div>
  );
};

export default EncuentrosTable;
