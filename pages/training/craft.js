import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import List from '../../views/List';
import {Club} from '../../views/suits'

function Craft() {
  return <div>
    <PageHead/>
    <PageTitle active="characters"/>
    <main>
      <article>
        <h1>Training: Craftsmanship<Club /></h1>
        <p>These skills include a host of handcrafting, artistry and utility. In some circumstances
        an untrained person might craft something out of necessity, but training is required to
        make anything sturdy, valuable and attractive. Although the Craftsman card is a club,
        these skills are all based on Speed.</p>
        <h2>Specialties</h2>
        <ul>
          <li><b>Woodworker</b>: Making and repairing furniture, musical instruments, and a range of items from
          wood and other natural resources.</li>
          <li><b>Metalworker</b>: Blacksmithing, weapon making and refining.</li>
          <li><b>Artisan</b>: Making and appraising items of value - jewelry, sculpture musical instruments
            and currency</li>
          <li><b>Graphics/Printing</b>: Paintings, books, typesetting, and caligraphy; including forging</li>
          <li><b>Cloth/Leatherworker</b>: Crafting clothing and light armor, and other simple items</li>
          <li><b>Cook</b> - ability to prepare, preserve and serve quality food, detect "bad" food
          and discriminate quality wine from the other kind. Might know a few simple remedys.</li>
        </ul>
      </article>
    </main>
  </div>
}

export default Craft
