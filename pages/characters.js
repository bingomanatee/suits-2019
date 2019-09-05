import PageHead from "../views/PageHead";
import PageTitle from '../views/PageTitle';
import List from '../views/List';
import {Diam, Heart, Spade, Club} from '../views/suits';

function Home() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Characters </h1>
                <p>
                    Characters are (by default) humans with relatively realistic abilities. They are described in
                    basic qualities, training and gear.
                </p>

                <h2>Qualities</h2>
                <p>
                    Qualities reflect the general innate personal physical and mental abilities.
                    Every character has two <i>skill</i> abilities and two <i>power</i> abilities.

                    Your qualities are assigned a numeric rating; by default it is 3; depending on the cards you
                    draw it can be Awful(1), Poor(2), High(4), or Great(5).
                </p>
                <List>
                    <List.Item>
                        <List.ItemHead>Speed <br/>(Physical skill) <Spade/>
                        </List.ItemHead>
                        <p>
                            This is an amalgam of reflexes, dexterity, agility and athletic expertise.
                            Most fighting abilities are based on this, and in short term contests, the more speed you
                            have,
                            the more often you can act.
                        </p>
                    </List.Item>
                    <List.Item>
                        <List.ItemHead>Body <br/>(Physical power) <Club/>
                        </List.ItemHead>
                        <p>Your health, stamina, strength, toughness and physical attractiveness. It determines how much
                            equipment you can carry and how much damage you can withstand.</p>
                    </List.Item>

                    <List.Item>
                        <List.ItemHead>Mind <br/>(Mental skill) <Diam/></List.ItemHead>
                        <p>An amalgam of senses, education, training, memory and abstract thinking. Higher mental
                            ability. High mind makes you more observant, harder to ambush and easier to train.
                        </p>
                    </List.Item>
                    <List.Item>
                        <List.ItemHead>Will <br/>(Mental power) <Heart/></List.ItemHead>

                        <p>Your social skill, charisma, empathy and personal power. In a magical/supernatural world
                            its the basis for supernatural abilities. High will helps you influence and lead people and
                            in general more likable.</p>
                    </List.Item>
                </List>

                <h2>Development</h2>
                <p>Development is a combination of education, social advantage, wealth and unique abilities.</p>
                <p>Most of it is the former: the set of skills and training you have achieved and/or been given.</p>
                <p>To determine your character's abilities, draw five cards, one at a time,
                    and take the abilities they resolve to. Note some cards have a different "count";
                    if you draw a Jack, for instance (-1) you get to draw an extra card.
                </p>

                <h3>Contradictory cards</h3>
                <p>Some cards cancel each other out. You can only have one face card of any given suit;
                    you can choose which one to discard, but you can only use one of them. </p>

                <table className="chart">
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th><Spade/></th>
                        <th><Club/></th>
                        <th><Diam/></th>
                        <th><Heart/></th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th>Ace</th>
                        <td><a href="#specialist">Specialist (speed)</a></td>
                        <td><a href="#specialist">Specialist (body)</a></td>
                        <td><a href="#specialist">Specialist (mind)</a></td>
                        <td><a href="#specialist">Specialist (will)</a></td>
                    </tr>

                    <tr>
                        <th>2-4</th>
                        <td><a href="/training/medical">Medical</a></td>
                        <td><a href="/training/construction">Construction</a></td>
                        <td><a href="/training/academic">Academic</a></td>
                        <td><a href="/training/cultural">Cultural</a></td>
                    </tr>
                    <tr>
                        <th>8-10</th>
                        <td><a href="/training/covert">Covert</a></td>
                        <td><a href="/training/travel">Travel</a></td>
                        <td><a href="/training/merchant">Merchant</a></td>
                        <td><a href="/training/spiritual">Spiritual</a></td>
                    </tr>
                    <tr>
                        <th>Jack (-1 card)</th>
                        <td>Low (-1) Strength</td>
                        <td>Low (-1) Speed</td>
                        <td>Low (-1) Mind</td>
                        <td>Low (-1) Will</td>
                    </tr>
                    <tr>
                        <th>Queen(2 cards)</th>
                        <td>High (+1) Strength</td>
                        <td>High (+1) Speed</td>
                        <td>High (+1) Mind</td>
                        <td>High (+1) Will</td>
                    </tr>
                    <tr>
                        <th>King(3 cards)</th>
                        <td>Great (+2) Strength</td>
                        <td>Great (+2) Speed</td>
                        <td>Great (+2) Mind</td>
                        <td>Great (+2) Will</td>
                    </tr>
                    </tbody>
                </table>


                <h3>Ability and Training</h3>
                <p>Your numeric rank in an area <i>you have training in</i>
                    is the sum of the base quality and your general training and specialty in it. A note on vocabulary:
                an area of training -- aka "College" or "field" -- is a broad set of skills around related tasks.
                Each contain Specializations that are smaller focused areas within a training school. These are called
                    "Skills" in these rules, which is inexact; they are a small cluster of skills. There is no way in Suits
                    to train and focus on a truly singular skill like "Physics" - you can train in "Science" which includes it
                    but that is as fine grained as these rules get.
                </p>
                <ul>
                    <li>If you take a general training you have +1 in all the skills it includes.</li>
                    <li>
                        <a name="specialist"/>If you <b>Specialize</b> you are +2 in <i>one</i> skill but no better at other skills
                        in an area of training than anyone else.

                        When you draw the specialist card you can choose any area of training
                        of the same suit to apply it to. Optionally you can be a trained specialist; this takes two cards,
                        giving you +1 in all skill areas in the training and +3 in one skill.
                    </li>
                </ul>
                <p> You can act in areas you don't have training, at a -1 penalty. However,
                    in <i>contests</i> with someone who is trained you will operate at a -2 penalty.
                    For example, a high intelligence character (mind 4) might try to heal someone
                    with emergency medicine in a pinch (at rank 3) but if they try to play chess
                    without training, their rank is 2 against anyone with any training at all.
                </p>
                <p>
                    You cannot specialize more than once in an area within a given training, or take more than
                    one general training in the same area. You <i>can</i>
                    take both general and specialist training in the same area, being +1 overall, and +3 in your
                    specialty.
                </p>
                <p>
                    A below average character is limited in their ability. any training card is <i>automatically</i>
                    a specialization, and give them only +1 in a single skill. (they don't have the ability to
                    focus on general training or convince anyone to train them across the board in a variety of skills.)
                </p>
                <table class="chart">
                    <thead>
                    <tr>
                        <td><span>Base Quality</span></td>
                        <th><span>Untrained <br/>(contest)</span></th>
                        <th><span>Untrained</span></th>
                        <th><span>Trained</span></th>
                        <th><span>Specialist</span></th>
                        <th><span>Trained <br/>Specialist</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Awful(1)</th>
                        <td>-1</td>
                        <td>0</td>
                        <td>n/a</td>
                        <td>2</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <th>Poor (2)</th>
                        <td>0</td>
                        <td>1</td>
                        <td>n/a</td>
                        <td>3</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <th>Average (3)</th>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <th>Good (4)</th>
                        <td>2</td>
                        <td>3</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <th>Great (5)</th>
                        <td>3</td>
                        <td>4</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    </tbody>
                </table>
                <h3>(optional) "Focused" training</h3>
                <p>Many of these training areas have skills and knowledge so broad that
                    its unrealistic to assume broad knowledge across the entire field. To balance
                    play, assume that characters have a "Focus" of two skills (that they perform at +1)
                    and general aptitude at the rest (which they perform at +0.
                    Still better than untrained attempts... but not much.)</p>
                <h3>General Knowledge</h3>
                <p>Training indicates ability to perform unusual or difficult acts; its not to say
                    characters don't have basic competency outside these areas. A modern character
                    will be able to drive, read, and use the internet competently. A pre-modern one
                    will be able to ride a horse, manage short trips outdoors and cook a meal.
                    As a general rule, a characters' skill in actions that most people
                    should be able to attempt can be performed at your basic Quality (+0) level.
                </p>
            </article>
        </main>
    </div>
}

export default Home
