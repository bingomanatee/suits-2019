import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import List from '../../views/List';
import {Spade} from '../../views/suits';

function Home() {
  return <div>
    <PageHead/>
    <PageTitle active="characters"/>
    <main>
      <article>
        <h1>Training: Violence <Spade /></h1>
        <p>Ability with weapons, hand to hand combat and unarmed combat, to hurt, kill and bully
        people, animals and gifted plants.</p>
        <h2>Specialties</h2>
        <ul>
          <li><b>Ranged</b> including guns and bows, and throwing</li>
          <li><b>Weapons</b> - handheld knives axes etc</li>
          <li><b>Unarmed</b> - boxing, martial arts and wrestling.</li>
        </ul>
      </article>
    </main>
  </div>
}

export default Home
