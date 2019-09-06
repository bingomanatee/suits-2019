import PageHead from "../views/PageHead";
import PageTitle from '../views/PageTitle';
import List from '../views/List';

function Contests() {
    return <div>
        <PageHead/>
        <PageTitle active="contests"/>
        <main>
            <article>
                <h1>Contests and Tests </h1>
                <p>the bulk of the game (or at least the game rules) will be a series of tests and contests of
                    the characters' abilities.</p>
                <h2>Tests</h2>
                <p>A test is the most basic use of abilities. The predicate is you are not working <i>against</i>
                    a sentient entity that can react and counter your efforts (that is a contest.)
                    To perform a test, draw a card; if you draw equal to or under your rating in that area you succeed.
                </p>
                <ul>
                    <li>
                        <b>Aces</b> have the value of 1.
                    </li>
                    <li>
                        <b>Black face cards (Jack Queen, King)</b> are almost always automatic victory; their numerical
                        values are
                        -1, -3, and -5 respectively. Meaning even someone with a skill rating of 0 can succeed by
                        drawing
                        a black face card.
                    </li>
                    <li>
                        <b className="red">Red face cards (Jack Queen, King)</b> are almost always failures; their
                        numerical values are
                        12, 14, 16 respectively. this means even highly skilled attempts sometimes fail.
                    </li>
                </ul>
                <h3>Tasks</h3>
                <p>Some activities are more about <i>when</i> than <i>if</i>. Mundane tasks, if they fail, take longer
                    or use more material, but unless you draw a red suit, are eventually achieved. In physical contests,
                   a major failure decreases your Saving Check Power by 1, and a major success decreases your <i>opponent's</i>
                    {' '} Saving Check Power by 1.
                </p>
                <h3>Major Success</h3>
                <p>If the average person draws a Black Face card or lower.
                    Chances of major successes become rarer due to poor skill, as shown on the chart.</p>
                <h4>Major Failures</h4>
                <p>The average person has a major failure on a red Jack or higher.
                    Chances of major failures increase and decrease for people of better or worse skills,
                    but a Black King is always calamity.</p>
                <p>Note - major success and failure chances don't vary due to minor (+/-2) modifiers.
                    They have to do more with your overall skill than with local circumstances.</p>
                <table className="chart">
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Major Success</th>
                        <th>Major Failure</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Awful(1)</th>
                            <td>Black King</td>
                            <td>9+</td>
                        </tr>
                        <tr>
                            <th>Poor (2)</th>
                            <td>Black Queen</td>
                            <td>10+</td>
                        </tr>
                        <tr>
                            <th>Average (3)</th>
                            <td>Black Jack</td>
                            <td>Red Jack</td>
                        </tr>
                        <tr>
                            <th>Good (4)</th>
                            <td>...Black Ace</td>
                            <td>Red Queen+</td>
                        </tr>
                        <tr>
                            <th>Great (5)</th>
                            <td>...2</td>
                            <td>Red King</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Modifiers</h3>
                <p>Not all tasks are created equal. A <i>very simple</i> task gives you +2 to your ranking;
                    a <i>very difficult</i> task might accrue a -2 penalty; so even the best trained expert (rating 8)
                    can fail on a very difficult task (8 - 2 = 6).</p>
                <p>Extremely simple/difficult tasks have special circumstances: for an <i>extremely simple task</i>,
                    draw two cards
                    and choose the most beneficial result. For an <i>extremely difficult task</i> draw two cards and
                    take the most
                    detrimental one; or put another way, you have to succeed twice on a difficult task.</p>
                <h2>Contests</h2>
                <p>If two people are competing the rules are a bit more involved. Both people draw a card, as with task
                    rules above.
                    If they both succeed, the contestant with the highest card wins. In a tie the contestant with the
                    highest skill,
                    than the highest base Quality, wins. In a perfect tie, redraw.</p>
                <h3>Powered Contests</h3>
                <p>High consequence Contests - fights - are longer affairs. In these contests power matters as well as
                    skill.
                </p>
                <ul>
                    <li> In mental contests the power Quality is <b>Will</b>.
                    </li>
                    <li> In physical contests it is <b>Body</b>.</li>
                </ul>
                <p>Powered contests are done in series of rounds. Each contestant in descending order of speed acts
                    (attacks)
                    another participant.</p>
                <p>If the actor is victorious the targets' power is reduced by 1. If the target fails (overdraws),
                    their power is reduced by 2. When a participants' power is zero or below, they lose and are
                    incapacitated.
                </p>
                <h3>Defensive Skill In Powered Contests</h3>
                <p>In a power contest, your defensive skill rating is at worst, (Quality +0).
                    For example: Bob, a healthy athlete (Body: good - 4) is engaged in a wrestling with Jane, a skilled
                    wrestler
                    (Body 5, skill +3, total 8). When Bob attacks Jane, his lack of skill gives him an effective rating
                    of 2, vs
                    Jane's 8. However when <i>Jane attacks Bob,</i> he gets to use his unmodified Body of 4 vs. Jane's
                    skill of 8.
                    This reflects the fact that you are often likely to be forced into contests you have no training for
                    and deserve
                    a slightly better defense than your lack of training merits.
                </p>
                <h3>Post Contest "Damage Check"</h3>
                <p>In a fight, people get injured and sometimes killed. At the end of every contest draw a card for
                    every
                    contestant who was completely defeated. Depending on the circumstances, some of the more extreme
                    results might be unrealistic.
                    Also, competent medical care (a task) adds +2 to your effective Quality (or +1 if your base quality
                    is Good or better.)
                </p>
                <ul>
                    <li>If the result is below their Power they are only <i>Injured/Fatigued.</i> their overall activity
                        is -1 for a day,
                        then they get over it and are fully functional. (note - even partially defeated contestants are
                        considered Injured)
                    </li>
                    <li>
                        If it is above their Power they are <i>Wounded/Exhausted.</i> They are compromised; unless in
                        mortal danger
                        they are useless, other than moving slowly and talking. A Wounded/Exhausted character can still
                        fight
                        if necessary to save their life at -2 to their ability. Their overall power is halved, or -2
                        whichever is worse -- minimum 1.
                    </li>
                    <li>
                        If the result is over twice their Power they are <i>Dying/Unconscious</i>. Without care
                        they may be
                        rendered <i>Dead/Comatose</i> - which also happens if they suffer further trauma. They will have
                        to draw
                        under their power each day to <i>stabilize</i>; at which point a second success renders
                        them <i>wounded</i>.
                        Two failures in a row, unfortunately, is lethal. Immediate (successful) medical attention
                        can reduce a Dying person to <i>Wounded</i> status.
                    </li>
                    <li>
                        If the result is three times their Body, they are done in -- dead, or mentally destroyed.
                    </li>
                </ul>
                <p>The below table shows the result by card and quality. Note in all cases,
                    a red face card means you are just injured/fatigued.</p>

                <table className="chart">
                    <thead>
                    <tr>
                        <td><span>Power</span></td>
                        <th><span>Injured<br/>/Fatigued</span></th>
                        <th><span>Wounded<br/>/Exhausted</span></th>
                        <th><span>Dying<br/>/Unconscious</span></th>
                        <th><span>Dead<br/>/Comatose</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Awful(1)</th>
                        <td className="c">...A</td>
                        <td className="c">2</td>
                        <td className="c">3</td>
                        <td className="c">4+</td>
                    </tr>
                    <tr>
                        <th>Poor (2)</th>
                        <td className="c">..2</td>
                        <td className="c">3-4</td>
                        <td className="c">5-6</td>
                        <td className="c">7+</td>
                    </tr>
                    <tr>
                        <th>Average (3)</th>
                        <td className="c">...3</td>
                        <td className="c">4-6</td>
                        <td className="c">7-9</td>
                        <td className="c">10+</td>
                    </tr>
                    <tr>
                        <th>Good (4)</th>
                        <td className="c">..4</td>
                        <td className="c">5-8</td>
                        <td className="c">9..Black Jack</td>
                        <td className="c">Black Queen+</td>
                    </tr>
                    <tr>
                        <th>Great (5)</th>
                        <td className="c">...5</td>
                        <td className="c">6-10</td>
                        <td className="c">Black Jack, Black Queen</td>
                        <td className="c">Black King</td>
                    </tr>
                    <tr>
                        <th>Awesome (6)</th>
                        <td className="c">...6</td>
                        <td className="c">7..Black Jack</td>
                        <td className="c">Black Queen</td>
                        <td className="c">Black King</td>
                    </tr>
                    </tbody>
                </table>
                <p>This table is oriented towards physical attacks; mental
                    constests are generally less harmful having little if any
                    blowback for the losers.</p>
                <h3>Damage Check modifiers</h3>
                <p>A range of circumstances can modify your Quality when it comes to a Damage Check.</p>
                <ul>
                    <li>Previous injuries lower your Power by 1</li>
                    <li>Wounds <i>halve</i> your power, round down.</li>
                    <li>Losing to someone <i>more powerful</i> lowers your Power by 1.</li>
                    <li>Losing to someone <i>less powerful</i> increases your Power by 1.</li>
                    <li>Weapons and armor may modify your effective power by +/-2</li>
                </ul>

            </article>
        </main>
    </div>
}

export default Contests
