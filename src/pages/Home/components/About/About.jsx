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
            <Heading>LITTLE LEMON</Heading>
            <p>Chicago</p>
          </Stack.Item>

          <p>
            About us
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
