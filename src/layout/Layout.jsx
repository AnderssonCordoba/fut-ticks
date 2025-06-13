import React from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import useAppStore from '../store/useAppStore';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Layout.css';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchData } = useAppStore();

  if (!searchData) {
    navigate('/');
    return null;
  }

  const { equipoA, equipoB } = searchData;
  const isActive = (path) => location.pathname.includes(path);
    return (
    <Container fluid className="layout-container p-0">
        {/* Encabezado y Nav sticky */}
        <div className="layout-header-sticky bg-white shadow-sm">
        <Container className="py-3">
            <Row className="align-items-center justify-content-between mb-2">
            <Col xs="auto">
                <Button variant="outline-dark" onClick={() => navigate('/')}>
                <i className="bi bi-arrow-left" />
                </Button>
            </Col>
            <Col className="text-center">
                <div className="header-vs d-flex align-items-center justify-content-center">
                <img src={equipoA.escudo} alt="Equipo A" className="team-icon" />
                <span className="mx-2 fw-bold">vs</span>
                <img src={equipoB.escudo} alt="Equipo B" className="team-icon" />
                </div>
            </Col>
            <Col xs="auto" />
            </Row>

            {/* Menú de navegación */}
            <Nav justify variant="tabs" className="mb-0">
            <Nav.Item>
                <Nav.Link as={Link} to="/stats" active={isActive('/stats')}>
                Estadísticas
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/encuentros" active={isActive('/encuentros')}>
                Encuentros
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </Container>
        </div>

        {/* Vista interna con padding-top para evitar solapado */}
        <Container className="pt-1 mt-2">
            <Outlet />
        </Container>
    </Container>
    );

};

export default Layout;
