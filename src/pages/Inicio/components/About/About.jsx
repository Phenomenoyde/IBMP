import { Heading, Stack } from '../../../../components';
import ticon from '../../../../assets/catrina.jpg';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="1rem"
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
            <div id="about-dish-image">
              <img
                src={ticon}
                alt="dish"
              />
            </div>
          </section>
        </section>
        
      </Stack>
    </section>
  );
};
