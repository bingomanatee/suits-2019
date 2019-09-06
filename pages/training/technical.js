import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import {Diam} from '../../views/suits'

function Technical() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Training: Technical<Diam/></h1>
                <p>Mechanical skills; in pre-technical society, substitute <a href="/training/craft">Craft</a>.</p>
                <h2>Specialties</h2>
                <ul>
                    <li><b>Engineer</b> - Knowledge of applied physics for design of bridges, buildings,
                        etc.
                    </li>
                    <li><b>Machinist</b> - Skilled with mechanical devices like watches, cars
                        and planes; able to repair, invent or improve devices
                    </li>
                    <li><b>Electrician</b> - knowledge of electrical systems, basic electronics; can
                        make or repair robots, security systems, computers.
                    </li>
                    <li><b>Programmer</b> - Able to write code, hack networks and design automated systems.</li>
                    <li><b>Architect</b> - able to design buildings, complex integrated systems, manage technical
                    teams.</li>
                </ul>
            </article>
        </main>
    </div>
}

export default Technical
