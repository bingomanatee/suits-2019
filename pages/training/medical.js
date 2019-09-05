import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import List from '../../views/List';

function Medical() {
  return <div>
    <PageHead/>
    <PageTitle active="characters"/>
    <main>
      <article>
        <h1>Training: Medical</h1>
        <p>Ability to heal people; includes nursing, surgery, diagnosis and herbalism.
        Node, although the card to acquire Medical training is a club, medical skills are
        based on the <i>Mind</i> quality.</p>
        <h2>Specialties</h2>
        <ul>
          <li><b>Medic</b>; emergency medicine, battlefield medicine</li>
          <li><b>Doctor</b>; ability with long term and preventative medicine, diagnosis, etc</li>
          <li><b>Herbalist/Pharmacist</b> knowledge of medicines,
            poisons (natural and manmade) and ability boosting medicine.</li>
        </ul>
      </article>
    </main>
  </div>
}

export default Medical
