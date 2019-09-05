import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import {Diam} from '../../views/suits'

function Academic() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Training: Academic<Diam/></h1>
                <p>largely intellectual skills, requiring a breadth of understanding and research.</p>
                <h2>Specialties</h2>
                <ul>
                    <li><b>Scientist</b> - Knowledge of fundamental forces; an amalgam of biology, chemistry,
                        mathematics and physics.
                    </li>
                    <li><b>Education</b> - Ability to operate in a formal college; knowledge
                        of campus bureaucracy, imformation systems and staff.
                    </li>
                    <li><b>Mathematics/Computing</b> - knowledge of information encryption,
                        code, advanced mathematics and statistics. Good for trend analysis.
                    </li>
                    <li><b>Literature</b> - a skilled writer, knowledgeable reader and interpreter
                        of written material and other media.</li>
                    <li><b>Historian</b>: knowledge of the history and culture of many peoples.</li>
                    <li><b>Occult</b>: "X files stuff:" specialized in "forbidden"/secret knowledge
                    </li>
                    <li><b>Law/Government</b> - knowledge of (and permission to advocate in) the laws,
                      court system and enforcement bureaucracy</li>
                    <li><b>Finance</b> - knowledge of corporate structure, practices and
                    restrictions, institutions and accounting</li>
                </ul>
            </article>
        </main>
    </div>
}

export default Academic
