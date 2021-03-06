import PageHead from "../views/PageHead";
import PageTitle from '../views/PageTitle';
import List from '../views/List';
import {Diam, Heart, Spade, Club} from '../views/suits';

const values = {
    'jc': {body: -1, cost: -1},
    'js': {speed: -1, cost: -1},
    'jd': {mind: -1, cost: -1},
    'jh': {will: -1, cost: -1},
    'qc': {body: 1, cost: 2},
    'qs': {speed: 1, cost: 2},
    'qd': {mind: 1, cost: 2},
    'qh': {will: 1, cost: 2},
    'kc': {body: 2, cost: 3},
    'ks': {speed: 2, cost: 3},
    'kd': {speed: 2, cost: 3},
    'kh': {will: 2, cost: 3},
}
const suitMap = {
    d: Diam,
    s: Spade,
    h: Heart,
    c: Club
}
const nameMap = {
    j: 'Jack',
    q: 'Queen',
    k: 'King',
}

function mutate(o1, o2) {
    Object.keys(o2).forEach((key) => {
        if (key in o1) {
            o1[key] += o2[key];
        } else {
            o1[key] = o2[key]
        }
    })
}

function N({children}) {
    const value = parseInt(children);
    if (value > 0) {
        return '+' + value;
    }
    return value;
}

const Describe = ({card}) => {
    const Suit = suitMap[card[1]];
    const name = nameMap[card[0]];
    return <span>{name}<Suit/></span>
}

function Redraw() {
    return <b>redraw 1</b>
}

function Resolve({first, second}) {
    if (first[1] === second[1]) {
        return <Redraw></Redraw>
    }

    const status = {
        body: 0, mind: 0, speed: 0, will: 0, cost: 0
    };

    mutate(status, values[first]);
    mutate(status, values[second]);

    if (status.cost > 4) {
        return <Redraw/>;
    }

    console.log('first: ', first, values[first], 'second', second, values[second], 'status:', status);
    return <div class="calc">
        {status.body ? <span>B <N>{status.body}</N>{' '}</span> : ''}
        {status.speed ? <span>S <N>{status.speed}</N>{' '}</span> : ''}
        {status.mind ? <span>M <N>{status.mind}</N>{' '}</span> : ''}
        {status.will ? <span>W <N>{status.will}</N>{' '}</span> : ''}
        <span class="sum"><b>({status.cost})</b></span>
    </div>
}

function Home() {
    const variations = ('csdh'.split('')).reduce((l, suit) => {
        return [...l, 'j' + suit, 'q' + suit, 'k' + suit]
    }, []).filter(a => a);
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
                            Most fighting abilities are based on this, and in short term contests, the more speed
                            you
                            have,
                            the more often you can act.
                        </p>
                    </List.Item>
                    <List.Item>
                        <List.ItemHead>Body <br/>(Physical power) <Club/>
                        </List.ItemHead>
                        <p>Your health, stamina, strength, toughness and physical attractiveness. It determines how
                            much
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
                            its the basis for supernatural abilities. High will helps you influence and lead people
                            and
                            in general more likable.</p>
                    </List.Item>
                </List>

                <h2>Designing a Character</h2>
                <p>Character design is a combination of education, social advantage, wealth and unique abilities.</p>
                <p>Most of it is the former: the set of skills and training you have achieved and/or been given.</p>
                <p>
                    You have 25 "card points"; draw cards and subtract/add the cards' cost from your point total
                    until you have one or less points remaining. If you draw a card you cannot afford, take a card
                    of a lesser value. For instance if you have 4 points left, and you draw a Jack of Spades,
                    choose any spade Training card.
                </p>

                <table className="chart">
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Cost</th>
                        <th><Spade/></th>
                        <th><Club/></th>
                        <th><Diam/></th>
                        <th><Heart/></th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th>Ace</th>
                        <td>-4</td>
                        <td>Low (-1) Strength</td>
                        <td>Low (-1) Speed</td>
                        <td>Low (-1) Mind</td>
                        <td>Low (-1) Will</td>
                    </tr>
                    <tr>
                        <th>2-4</th>
                        <td>1, 2, 3, or 6</td>
                        <td><a href="/training/medical">Medical</a></td>
                        <td><a href="/training/construction">Construction</a></td>
                        <td><a href="/training/academic">Academic</a></td>
                        <td><a href="/training/cultural">Cultural</a></td>
                    </tr>
                    <tr>
                        <th>5-7</th>
                        <td>1, 2, 3, or 6</td>
                        <td><a href="/training/violence">Violence</a></td>
                        <td><a href="/training/craft">Craft</a></td>
                        <td><a href="/training/technical">Technical</a></td>
                        <td><a href="/training/creative">Creative</a></td>
                    </tr>
                    <tr>
                        <th>8-10</th>
                        <td>1, 2, 3, or 6</td>
                        <td><a href="/training/covert">Covert</a></td>
                        <td><a href="/training/travel">Travel</a></td>
                        <td><a href="/training/merchant">Merchant</a></td>
                        <td><a href="/training/spiritual">Spiritual</a></td>
                    </tr>
                    <tr>
                        <th>Jack, Queen</th>
                        <td>5</td>
                        <td>High (+1) Strength</td>
                        <td>High (+1) Speed</td>
                        <td>High (+1) Mind</td>
                        <td>High (+1) Will</td>
                    </tr>
                    <tr>
                        <th>King</th>
                        <td>12</td>
                        <td>Great (+2) Strength</td>
                        <td>Great (+2) Speed</td>
                        <td>Great (+2) Mind</td>
                        <td>Great (+2) Will</td>
                    </tr>
                    </tbody>
                </table>

                <h3>Maximum Quality cards</h3>
                <p>
                    Improving a quality is a significant benefit having across-the-board payoffs. Because of this
                    there are restrictions as to how you can improve Qualities due to card draws.
                </p>
                <ul>
                    <li>
                        You cannot have two face cards of the same suit.
                        If you draw a face card of the same suit, trade one of them for training within the same suit.
                    </li>
                    <li>
                        You can have a maximum of two boosted Qualities.
                    </li>
                    <li>
                        You can have a maximum of one King.
                    </li>
                </ul>

                <h3>Ability and Training</h3>
                <p>Your numeric rank in an area <i>you have training in</i>
                    is the sum of the base quality and your general training and specialty in it. That number
                    is used in <a href="/contests">Contests and Tasks</a> to determine your effectiveness.
                    As a good index, an average person is rank 5 in the area of their specialty, succeeding 50%
                    of the time. A high quality trained specialist is rank 8, and succeeds 73% of the time.
                </p>
                <h4>A note on terminology</h4>
                <p>
                    An area of <b>training</b> -- aka "College" or "field" -- is a broad set of skills around related
                    tasks. Each contain Specializations that are smaller focused areas within a training school.
                    These are called "Skills" in these rules, which is inexact; they are a small cluster of skills.
                    There is no way in Suits to train and focus on a truly singular skill like "Physics" -
                    you can train in "Science" which includes it but that is as fine grained as these rules get.
                </p>
                <ul>
                    <li>If you take a general training you have +1 in all the skills it includes. This costs 3 points.
                    </li>
                    <li>
                        Optionally you can choose to <a name="specialist"/><b>Specialize</b>; you are +2
                        in <i>one</i> skill but no better
                        at other skills in an area of training than anyone else. Specialization costs 2 points.
                    </li>
                    <li>Or, you can take +1 in one skill for 1 point - <b>"Minor Specialization"</b>.</li>
                    <li>
                        Optionally for 6 points you can be a trained specialist,
                        giving you +1 in all skill areas in the training and +3 in one skill.
                    </li>
                    <li>
                        Or for 5 points you can be a trained Minor Specialist,
                        giving you +1 in all skill areas in the training and +2 in one skill.
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
                    <sup>**</sup> A below average character is limited in their ability.
                    Any training card is <i>automatically</i>a specialization,
                    and give them only +1 in a single skill.  I.e, if you have a below average
                    base Quality, Minor Specialization and Training are not options for you, and specialized
                    training has less of an impact.
                </p>
                <table class="chart">
                    <thead>
                    <tr>
                        <td><span>Base Quality</span></td>
                        <th><span>Untrained <br/>(contest)</span></th>
                        <th><span>Untrained</span></th>
                        <th><span>Trained/out of focus</span></th>
                        <th><span>Trained</span></th>
                        <th><span>Specialist</span></th>
                        <th><span>Trained Specialist</span></th>
                    </tr>
                    <tr>
                        <td><span>&nbsp;</span></td>
                        <th><span>&nbsp;</span></th>
                        <th><span>&nbsp;</span></th>
                        <th><span>&nbsp;</span></th>
                        <th><span>Minor Specialist</span></th>
                        <th><span>Trained Minor Specialist</span></th>
                        <th><span>&nbsp;</span></th>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <th>-2</th>
                        <th>-1</th>
                        <th>0</th>
                        <th>+1</th>
                        <th>+2</th>
                        <th>+3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Awful(1)</th>
                        <td className="c">-1</td>
                        <td className="c">0</td>
                        <td className="c">n/a</td>
                        <td className="c">n/a</td>
                        <td className="c">2<sup>**</sup></td>
                        <td className="c">n/a</td>
                    </tr>
                    <tr>
                        <th>Poor (2)</th>
                        <td className="c">0</td>
                        <td className="c">1</td>
                        <td className="c">n/a</td>
                        <td className="c">n/a</td>
                        <td className="c">3<sup>**</sup></td>
                        <td className="c">n/a</td>
                    </tr>
                    <tr>
                        <th>Average (3)</th>
                        <td className="c">1</td>
                        <td className="c">2</td>
                        <td className="c">3</td>
                        <td className="c">4</td>
                        <td className="c">5</td>
                        <td className="c">6</td>
                    </tr>
                    <tr>
                        <th>Good (4)</th>
                        <td className="c">2</td>
                        <td className="c">3</td>
                        <td className="c">4</td>
                        <td className="c">5</td>
                        <td className="c">6</td>
                        <td className="c">7</td>
                    </tr>
                    <tr>
                        <th>Great (5)</th>
                        <td className="c">3</td>
                        <td className="c">4</td>
                        <td className="c">5</td>
                        <td className="c">6</td>
                        <td className="c">7</td>
                        <td className="c">8</td>
                    </tr>
                    </tbody>
                </table>
                <h3>(optional) "Focused" training</h3>
                <p>
                    Many of these training areas have skills and knowledge so broad that
                    its unrealistic to assume broad knowledge across the entire field.
                    To balance play, assume that characters have a "Focus" of two skills
                    (that they perform at +1)
                    and general aptitude at the rest (which they perform at +0.)
                    Still better than untrained attempts... but not much.)
                </p>
                <p>
                    If "Focus" is in use, a "trained specialist" gets +3 in one Skill, +1 in another,
                    and is +0 in the rest of the training area.
                </p>
                <h3>General Knowledge</h3>
                <p>
                    Training indicates ability to perform unusual or difficult acts; its not to say
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
