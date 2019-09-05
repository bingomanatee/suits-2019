import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import List from '../../views/List';
import {Spade} from "../../views/suits";

function Covert() {
  return <div>
    <PageHead/>
    <PageTitle active="characters"/>
    <main>
      <article>
        <h1>Training: Covert <Spade /></h1>
        <p>Skill in infiltration, illegal activities or crime enforcement.</p>
        <h2>Specialties</h2>
        <ul>
          <li><b>Detective</b>; skilled at analyzing crime, interrogation and knowledge of criminals and the underworld</li>
          <li><b>Burglar</b>; Skilled at B & E, robbing, fencing goods and hiding/evasion</li>
          <li><b>Spy</b> good at impersonation, research and gambling.</li>
          <li><b>Assassin</b>: good at tracking, ambush and killing with traps and poison.</li>
        </ul>
      </article>
    </main>
  </div>
}

export default Covert
