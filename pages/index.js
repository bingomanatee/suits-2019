import PageHead from "../views/PageHead";
import PageTitle from '../views/PageTitle';
import List from '../views/List';

function Home() {
  return <div>
    <PageHead/>
    <PageTitle active="home"/>
    <main>
      <article>
        <h1>SUITS: a quick playing card based RPG </h1>
        <p>
          SUITS is a "D & D" style RPG . Players generate <a href="/characters">Characters</a>
          and act out an <a href="/adventure">adventure</a> under the direction of a storyteller ("ref"). It uses
          a conventional deck of playing cards to create characters and resolve <a href="/contests">Contests</a>
          (two, ideally)
        </p>

        <p>
          SUITS is not a "Magic" style contest; winning and defeat are subjective and players are not
          (by default) pitted against each other.
        </p>

        <p>
          SUITS is an open ended system; it doesn't have a default setting or world view, and can be used
          for whatever setting (supers, fantasy, SF) piques your interest.
        </p>
        <p>
          It is also not designed to accurately simulate the detailed mechanics of life; rather the fluid and
          simplistic world of fast paced action adventures.
        </p>
      </article>
    </main>
  </div>
}

export default Home
