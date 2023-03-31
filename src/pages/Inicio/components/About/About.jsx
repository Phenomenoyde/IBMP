import { Heading, Stack } from '../../../../components';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2rem"
          basis="40%"
        >
          <Stack.Item vertical>
            <Heading>Sobre Nosotros</Heading>
          </Stack.Item>

          <p style={{  "text-align": "justify",  "text-justify": "inter-word"}}>
            Somos un emprendimiento iniciado en el año 2020 como alternativa culinaria
            en Turmero, Edo. Aragua que nació de la profunda necesidad de generar opciones
            y productividad en medio de la pandemia mundial. Con esfuerzo y un increible
            equipo y liderazgo nos convertimos en la principal fuente de ventas de comida
            Tex-Mex en Turmero con miras a expandir el corazón Tex-Mex incluso a más lugares.
          </p>
        </Stack.Item>
        
        <section className="about-right-column">
          <section id="about-image">
            <div id="about-chef-image">
              <img
                src="http://jordanbr.pythonanywhere.com/static/restaurant/img/head_chef.jpg"
                alt="chef"
              />
            </div>
          </section>
        </section>
        
      </Stack>
    </section>
  );
};
