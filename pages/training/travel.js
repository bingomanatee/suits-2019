import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import List from '../../views/List';
import {Club} from "../../views/suits";

function Transport() {
  return <div>
    <PageHead/>
    <PageTitle active="characters"/>
    <main>
      <article>
        <h1>Training: Travel <Club /></h1>
        <p>An amalgam of transport, vehicular and navigation skills.</p>
        <h2>Specialties</h2>
        <ul>
          <li><b>Driver/Rider</b> - ability to operate vehicles (or ride horses), fast, well,
          and aggressively</li>
          <li><b>Sailor</b> - ability to operate watergoing vessels, including basic maintenance</li>
          <li><b>Pilot</b> ability to fly airplanes/spaceships/blimps.</li>
          <li><b>Ranger</b> - ability to navigate and travel by foot, over difficult terrains,
          and manage teams of transport animals</li>
          <li><b>Animal Handler</b> - skilled at animal psychology, identification, veterinary,
          and hunting. Includes harvesting/preserving meat and usful parts.</li>
        </ul>
      </article>
    </main>
  </div>
}

export default Transport
