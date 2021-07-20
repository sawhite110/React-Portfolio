import { Image, Header, Segment, Grid } from "semantic-ui-react";

export default function About() {
  return (
    <div>
      <section class="row" id="about-me">
        <div class="col-md-8">
          <Segment inverted textAlign="center">
            <Header as="h1" centered>
              About Me
            </Header>
          </Segment>

          {/* My portfolio picture. */}

          <Header color="black" textAlign="center">
            <Image src="stevenson.jpg" alt="Stevenson Pic" />
          </Header>

          {/* Information about the web developer. */}
          <Segment basic>
            <p>
              I am a Full-Stack Web Developer with experience in building
              dynamic, user friendly, and functional web applications.
              Throughout my coding journey, I have been working full time and
              continuously learning and building the necessary skills to obtain
              my certificate in the Full Stack Coding program from the
              University of North Carolina at Chapel Hill Coding Bootcamp.
              During this process I gained skills in HTML, CSS, JavaScript,
              Node.js, React.js, SQL, & MongoDB, while also using the command
              line and GitHub. Being organized, a great communicator, and calm
              under pressure, allow me to complete work and assignments in a
              timely manner. I’m also passionate about solving problems and
              creating innovative mobile and web applications to increase the
              user experience.
            </p>
            <p>
              Recently awarded an extra vacation day and bonus raise for going
              above and beyond my job duties to ensure Customer satisfaction,
              while assisting management in new customer business, and awarded a
              20 year plaque and recognized for years of service. Also awarded a
              plaque and recognized by the company and customer for the first
              and only 100% score for inventory management during customer
              audit. I’ve also been awarded and recognized for going above and
              beyond to ensure the safety of others within the company. Within
              my leadership role, I created the process in place to minimize
              company liability by disposing of damaged customer products. I
              strive to learn my environment and look for ways to improve
              multiple aspects and processes. I look forward to working in a
              fast-paced Agile team environment, where I can leverage my skills
              and keen attention to detail to build better applications and
              enhance the user experience on the web.
            </p>
          </Segment>
          <Segment style={{ padding: "0em" }} vertical>
            <Header as="h2" textAlign="center">
              Technical Skills | Languages | Applications | Tools
            </Header>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row>
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <ul style={{ margin: "1em" }}>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Management</li>
                    <li>Networking</li>
                    <li>HTML, CSS, & JavaScript(ES6)</li>
                    <li>MongoDB & MySQL</li>
                  </ul>
                </Grid.Column>
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <ul style={{ margin: "1em" }}>
                    <li>Boodstrap, Materialize CSS, & Senantic UI CSS</li>
                    <li>Model View Controler (MVC)</li>
                    <li>Object Oriented Programming (OOP)</li>
                    <li>Node.js, Express.js, & React.js</li>
                    <li>Third-Party & Server-Side API's</li>
                    <li>Dependency Injection</li>
                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      </section>
    </div>
  );
}
