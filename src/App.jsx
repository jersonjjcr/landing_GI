import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! (Simulado)');
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header / Navegación */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <h2>GIIT</h2>
            <span>Grupo de Investigación en Innovación y Tecnología</span>
          </div>
          <nav className="nav-menu">
            <ul>
              <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
              <li><a href="#sobre-nosotros" onClick={() => scrollToSection('sobre-nosotros')}>Sobre Nosotros</a></li>
              <li><a href="#lineas-investigacion" onClick={() => scrollToSection('lineas-investigacion')}>Líneas de Investigación</a></li>
              <li><a href="#proyectos" onClick={() => scrollToSection('proyectos')}>Proyectos</a></li>
              <li><a href="#publicaciones" onClick={() => scrollToSection('publicaciones')}>Publicaciones</a></li>
              <li><a href="#integrantes" onClick={() => scrollToSection('integrantes')}>Integrantes</a></li>
              <li><a href="#contacto" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sección Inicio */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">GIIT - Grupo de Investigación en Innovación y Tecnología</h1>
          <p className="hero-subtitle">Investigamos hoy las tecnologías del mañana</p>
          <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64sf7ys7h8xsrw9h7s7.png" alt="GIIT Research - Grupo de Investigación" className="hero-image" />
          <button className="cta-button" onClick={() => scrollToSection('sobre-nosotros')}>
            Conoce más sobre nosotros
          </button>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section id="sobre-nosotros" className="about-section">
        <div className="container">
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="about-item">
                <h3>Nuestra Historia</h3>
                <p>
                  El Grupo de Investigación en Innovación y Tecnología (GIIT) fue fundado en 2018 con el objetivo de 
                  promover la investigación aplicada en tecnologías emergentes. Desde entonces, hemos trabajado 
                  incansablemente en proyectos que impactan positivamente en la sociedad.
                </p>
              </div>
              <div className="about-item">
                <h3>Misión</h3>
                <p>
                  Desarrollar investigación de alta calidad en el campo de la innovación tecnológica, 
                  formando recursos humanos especializados y contribuyendo al desarrollo científico y tecnológico 
                  del país mediante soluciones innovadoras.
                </p>
              </div>
              <div className="about-item">
                <h3>Visión</h3>
                <p>
                  Ser reconocidos como un grupo de investigación líder en innovación y tecnología, 
                  caracterizado por la excelencia académica, el impacto social de nuestras investigaciones 
                  y la formación integral de investigadores.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64tfcabrdz5e5zh3c8t.png" alt="Equipo GIIT - Investigación Académica" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Líneas de Investigación */}
      <section id="lineas-investigacion" className="research-section">
        <div className="container">
          <h2 className="section-title">Líneas de Investigación</h2>
          <div className="research-grid">
            <div className="research-card">
              <div className="card-icon">🤖</div>
              <h3>Inteligencia Artificial</h3>
              <p>Desarrollo de algoritmos de machine learning y deep learning para solucionar problemas complejos en diversos dominios.</p>
            </div>
            <div className="research-card">
              <div className="card-icon">🌐</div>
              <h3>Internet de las Cosas</h3>
              <p>Investigación en dispositivos conectados, redes de sensores y sistemas embebidos para ciudades inteligentes.</p>
            </div>
            <div className="research-card">
              <div className="card-icon">🔒</div>
              <h3>Ciberseguridad</h3>
              <p>Análisis de vulnerabilidades, desarrollo de protocolos seguros y sistemas de detección de intrusiones.</p>
            </div>
            <div className="research-card">
              <div className="card-icon">📱</div>
              <h3>Desarrollo de Software</h3>
              <p>Metodologías ágiles, arquitecturas de software y desarrollo de aplicaciones móviles y web innovadoras.</p>
            </div>
            <div className="research-card">
              <div className="card-icon">📊</div>
              <h3>Big Data y Analytics</h3>
              <p>Procesamiento de grandes volúmenes de datos y desarrollo de modelos predictivos para la toma de decisiones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="projects-section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64sf7ys7h8xsrw9h7s7.png" alt="Proyecto Smart City" />
              <div className="project-content">
                <h3>Smart City Platform</h3>
                <span className="project-status en-curso">En curso</span>
                <p>Desarrollo de una plataforma integral para la gestión inteligente de recursos urbanos utilizando IoT y análisis de datos en tiempo real.</p>
              </div>
            </div>
            <div className="project-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64tfcabrdz5e5zh3c8t.png" alt="Proyecto AI Healthcare" />
              <div className="project-content">
                <h3>AI Healthcare Assistant</h3>
                <span className="project-status finalizado">Finalizado</span>
                <p>Sistema de inteligencia artificial para asistir en el diagnóstico médico mediante análisis de imágenes y procesamiento de lenguaje natural.</p>
              </div>
            </div>
            <div className="project-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64sf7ys7h8xsrw9h7s7.png" alt="Proyecto Blockchain" />
              <div className="project-content">
                <h3>Blockchain Security Framework</h3>
                <span className="project-status en-curso">En curso</span>
                <p>Framework de seguridad basado en blockchain para garantizar la integridad y trazabilidad de datos en sistemas distribuidos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Publicaciones */}
      <section id="publicaciones" className="publications-section">
        <div className="container">
          <h2 className="section-title">Publicaciones</h2>
          <div className="publications-table">
            <div className="table-header">
              <div className="col-title">Título</div>
              <div className="col-year">Año</div>
              <div className="col-authors">Autores</div>
              <div className="col-link">Enlace</div>
            </div>
            <div className="table-row">
              <div className="col-title">Machine Learning Approaches for Smart City Applications</div>
              <div className="col-year">2024</div>
              <div className="col-authors">García, M., López, A., Martínez, J.</div>
              <div className="col-link"><a href="#" className="pub-link">Ver artículo</a></div>
            </div>
            <div className="table-row">
              <div className="col-title">IoT Security: Challenges and Solutions in Modern Networks</div>
              <div className="col-year">2023</div>
              <div className="col-authors">Rodríguez, C., Fernández, L.</div>
              <div className="col-link"><a href="#" className="pub-link">Ver artículo</a></div>
            </div>
            <div className="table-row">
              <div className="col-title">Blockchain Technology for Data Integrity in Healthcare Systems</div>
              <div className="col-year">2023</div>
              <div className="col-authors">Sánchez, P., González, R., Torres, M.</div>
              <div className="col-link"><a href="#" className="pub-link">Ver artículo</a></div>
            </div>
            <div className="table-row">
              <div className="col-title">Big Data Analytics for Predictive Maintenance in Industry 4.0</div>
              <div className="col-year">2022</div>
              <div className="col-authors">Herrera, D., Castro, N.</div>
              <div className="col-link"><a href="#" className="pub-link">Ver artículo</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Integrantes */}
      <section id="integrantes" className="members-section">
        <div className="container">
          <h2 className="section-title">Integrantes</h2>
          <div className="members-grid">
            <div className="member-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64sf7ys7h8xsrw9h7s7.png" alt="María García" />
              <h3>Dr. María García</h3>
              <span className="member-role coordinador">Coordinadora</span>
              <p className="member-interest">Inteligencia Artificial, Machine Learning</p>
              <a href="#" className="member-profile">Ver perfil</a>
            </div>
            <div className="member-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64tfcabrdz5e5zh3c8t.png" alt="Antonio López" />
              <h3>Dr. Antonio López</h3>
              <span className="member-role investigador">Investigador Senior</span>
              <p className="member-interest">IoT, Sistemas Embebidos</p>
              <a href="#" className="member-profile">Ver perfil</a>
            </div>
            <div className="member-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64sf7ys7h8xsrw9h7s7.png" alt="José Martínez" />
              <h3>MSc. José Martínez</h3>
              <span className="member-role investigador">Investigador</span>
              <p className="member-interest">Ciberseguridad, Blockchain</p>
              <a href="#" className="member-profile">Ver perfil</a>
            </div>
            <div className="member-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64tfcabrdz5e5zh3c8t.png" alt="Carmen Rodríguez" />
              <h3>Dr. Carmen Rodríguez</h3>
              <span className="member-role investigador">Investigadora</span>
              <p className="member-interest">Big Data, Analytics</p>
              <a href="#" className="member-profile">Ver perfil</a>
            </div>
            <div className="member-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64sf7ys7h8xsrw9h7s7.png" alt="Luis Fernández" />
              <h3>Luis Fernández</h3>
              <span className="member-role estudiante">Estudiante de Maestría</span>
              <p className="member-interest">Desarrollo de Software, AI</p>
              <a href="#" className="member-profile">Ver perfil</a>
            </div>
            <div className="member-card">
              <img src="/20251022_1551_Grupos de Investigación Académica_simple_compose_01k86ty64tfcabrdz5e5zh3c8t.png" alt="Patricia Sánchez" />
              <h3>Patricia Sánchez</h3>
              <span className="member-role estudiante">Estudiante de Doctorado</span>
              <p className="member-interest">IoT, Smart Cities</p>
              <a href="#" className="member-profile">Ver perfil</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="correo"
                    placeholder="Tu correo electrónico"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="mensaje"
                    rows="5"
                    placeholder="Tu mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar mensaje</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Información de contacto</h3>
              <div className="contact-item">
                <strong>📧 Correo institucional:</strong>
                <p>giit@universidad.edu.co</p>
              </div>
              <div className="contact-item">
                <strong>📞 Teléfono:</strong>
                <p>+57 (1) 123-4567</p>
              </div>
              <div className="contact-item">
                <strong>📍 Dirección:</strong>
                <p>Universidad Nacional<br />
                   Edificio de Ingeniería, Oficina 301<br />
                   Bogotá, Colombia</p>
              </div>
              <div className="contact-item">
                <strong>⏰ Horarios de atención:</strong>
                <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 GIIT - Grupo de Investigación en Innovación y Tecnología. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;