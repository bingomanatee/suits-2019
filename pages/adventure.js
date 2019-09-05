import PageHead from "../views/PageHead";
import PageTitle from '../views/PageTitle';
import List from '../views/List';

function Home() {
  return <div>
    <PageHead/>
    <PageTitle active="adventure"/>
    <main>
      <article>
        <h1>Adventures </h1>
        <p>
          The construction and execution of an adventure is beyond the scope of these rules.
          Check <a href="https://unpossiblejourneys.com/how-to-play/your-first-game/" target="rpg">Here</a> for
          a starter guide on Tabletop RPGs.
        </p>

        <ol>
          <li>One person becomes the Storyteller who designs the environment
            and guides the player to design <a href="/characters">characters</a> for it.</li>
          <li>The Storyteller describes the initial setting and context.</li>
          <li>Players tell the story telling what their characters (individually or collectively) do.</li>
          <li>The Storyteller uses <a href="/contests">contests</a>, cards or common sense
            to determine the outcome and describes the results
            and any new setting or revelations that derive from the players' actions. </li>
          <li>Repeat until the story is resolved, or all the players are dead.</li>
        </ol>
      </article>
    </main>
  </div>
}

export default Home
