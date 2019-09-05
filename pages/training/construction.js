import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import List from '../../views/List';
import {Club} from '../../views/suits';

function Construction() {
  return <div>
    <PageHead/>
    <PageTitle active="characters"/>
    <main>
      <article>
        <h1>Training: Construction/Mechanics <Club /></h1>
        <p>Able to make and fix buildings, vehicles, etc. Although these skills involve a lot of
        qualities (dexterity, design etc., they are body skills because sheer stamina often determines
        your ability to realize a design. (plus, there aren't that many good Body skills.)</p>

        <h2>Specialties</h2>
        <ul>
          <li><b>Carpenter/Bricklaying</b>: Buildings, bridges and other large scale fixed structure</li>
          <li><b>Vehicles/Shipwright</b>: Making travelling items, such as cars, boats, and planes.</li>
          <li><b>Mechanic</b>: Vehicles, siege equipment, robots and other large mechanical devices</li>
          <li><b>Mining/Lumberjack</b>: safe extraction of resources from caves or trees;
            sapping and demolitions</li>
        </ul>
      </article>
    </main>
  </div>
}

export default Construction
