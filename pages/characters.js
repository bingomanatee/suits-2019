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
    'qd': {speed: 1, cost: 2},
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
    return <span>{name}<br/><Suit/></span>
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
        {status.body ? <span>B <N>{status.body}</N>,</span> : ''}
        {status.speed ? <span>S <N>{status.speed}</N>,</span> : ''}
        {status.mind ? <span>M <N>{status.mind}</N>,</span> : ''}
        {status.will ? <span>W <N>{status.will}</N>,</span> : ''}
        <div class="sum"><b>{status.cost} cds</b></div>
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

                <h2>Development</h2>
                <p>Development is a combination of education, social advantage, wealth and unique abilities.</p>
                <p>Most of it is the former: the set of skills and training you have achieved and/or been given.</p>
                <p>To determine your character's abilities, draw six cards, one at a time,
                    and take the abilities they resolve to. Cards that modify your basic abilities
                    have a different "cost"; if you draw a Jack, for instance (-1) you get to two extra cards.
                </p>

                <table className="chart compact">
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
                        <th>King(2 cards)</th>
                        <td>Great (+2) Strength<br/> Low (-1) Other<sup>*</sup></td>
                        <td>Great (+2) Speed<br/> Low (-1) Other<sup>*</sup></td>
                        <td>Great (+2) Mind<br/> Low (-1) Other<sup>*</sup></td>
                        <td>Great (+2) Will<br/> Low (-1) Other<sup>*</sup></td>
                    </tr>
                    </tbody>
                </table>

                <h3>Maximum quality cards</h3>
                <ul>
                    <li>
                        You can only have two modified Qualities.
                    </li>

                    <li>
                        You cannot have two face cards of the same suit.
                    </li>

                    <li>
                        You can redraw a second Jack <i>if you want</i>.
                    </li>

                    <li>
                        If you draw a face card of the same suit, discard one of them(your choice). discard and redraw
                        your third or subsequent face cards.
                    </li>
                    <li>
                        <sup>*</sup> If you draw a King, the next card is treated as if it were a Jack.
                    </li>
                </ul>

                <table className="chart">
                    <thead>
                    <tr>
                        <td>First Card</td>
                        {variations.map(v => <td key={v}><Describe card={v}/></td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {variations.map(v => <tr>
                        <th><Describe card={v}></Describe></th>
                        {variations.map(v2 => <td><Resolve first={v} second={v2}></Resolve></td>)}
                    </tr>)}
                    </tbody>
                </table>

                <h3>Ability and Training</h3>
                <p>Your numeric rank in an area <i>you have training in</i>
                    is the sum of the base quality and your general training and specialty in it. A note on
                    vocabulary:
                    an area of training -- aka "College" or "field" -- is a broad set of skills around related
                    tasks.
                    Each contain Specializations that are smaller focused areas within a training school. These are
                    called
                    "Skills" in these rules, which is inexact; they are a small cluster of skills. There is no way
                    in
                    Suits
                    to train and focus on a truly singular skill like "Physics" - you can train in "Science" which
                    includes it
                    but that is as fine grained as these rules get.
                </p>
                <ul>
                    <li>If you take a general training you have +1 in all the skills it includes.</li>
                    <li>
                        <a name="specialist"/>If you <b>Specialize</b> you are +2 in <i>one</i> skill but no better
                        at
                        other skills
                        in an area of training than anyone else.

                        When you draw the specialist card you can choose any area of training
                        of the same suit to apply it to. Optionally you can be a trained specialist; this takes two
                        cards,
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
                    focus on general training or convince anyone to train them across the board in a variety of
                    skills.)
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
