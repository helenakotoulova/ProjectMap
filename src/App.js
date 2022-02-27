import ProjectList from "./projects/ProjectList";
import Layout from "./ui/Layout";

function App() {
  return (
    <Layout>
      <section id="aboutMe">
        <h2>O mně</h2>
        <div className="underline"></div>
        <div className='textPart'>
          <p>
          V současné době studuji obor Fluidní inženýrství na Fakultě strojního
          inženýrství VUT a tomuto oboru se aktuálně věnuji i pracovně na plný
          úvazek ve společnosti Litostroj Engineering na pozici R&D
          Engineer.
        </p>
        <p>
          Už ve škole mě bavilo programování, a proto jsem se rozhodla začít se
          vzdělávat v IT. Zalíbil se mi frontend, zejména to, že je okamžitě
          vidět výsledek, což mi ve strojírenství chybí. Taky mě baví přemýšlet
          o tom, jak udělat webovou aplikaci uživatelsky atraktivní a příjemnou.
          Mám základy HTML, CSS (Grid a Flexbox), JavaScriptu a Reactu. Při
          práci jsem také aktivně používala Git a GitHub a seznámila jsem se i s
          nástroji jako je Bootstrap či TypeScript.
        </p>
        <p>
          Mám se toho pořád dost co učit, ale <b>frontend mě baví</b> a
          chci se v něm dále rozvíjet!
        </p>
        </div>
        
      </section>
      <section id="projects">
        <ProjectList />
      </section>
    </Layout>
  );
}

export default App;
