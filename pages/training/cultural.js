import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import {Heart} from '../../views/suits'

function Academic() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Training: Cultural <Heart/></h1>
                <p>Social cultivation; interpersonal skills for specialized purposes/audiences.</p>
                <h2>Specialties</h2>
                <ul>
                    <li><b>Nobility</b> - ability to act to appease and perform as a member of the
                        upper class; includes manners, networking and the physical trappings of wealth.</li>
                    <li><b>Con Artist</b> - a professional liar. Includes pressuring, empathy and flattery.
                    </li>
                    <li><b>Entertainer</b> - includes acting, comedy, musicianship and dancing.
                </li>
                    <li><b>Manager</b> - skilled in team dynamics; ability to motivate, direct and encourage
                        a group of people. Includes negotiation and successful discipline.</li>
                    <li><b>Counselor</b> - Ability to predict, analyze and in some cases repair (or at least
                        successfully interact with) those with damaged mental/social processes.
                    </li>
                </ul>
            </article>
        </main>
    </div>
}

export default Academic
