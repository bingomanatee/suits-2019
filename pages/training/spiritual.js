import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import {Heart} from '../../views/suits'

function Academic() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Training: Spiritual <Heart/></h1>
                <p>Skilled in supernatural ability. The nature and efficiency of this college
                varies widely; in certain settings this card is nonsensical; assume <a href="/training/academic">
                        Academic</a> or <a href="/training/craft">Craftsman</a>{' '}
                instead of spiritual training where it is more sensible for the setting.
                </p>
                <h2>Specialties</h2>
                <ul>
                    <li><b>Monk</b> - ability with meditation, pain resistance and superhuman endurance.
                        </li>
                    <li><b>Priest</b> - skilled at leading group ceremony, preaching and counseling.
                    </li>
                    <li><b>Warlock</b> - knowledge of and power over beings from other planes.
                </li>
                    <li><b>Exorcist</b> - a hunter of supernatural beings and people.</li>
                    <li><b>Wizard</b> - knoweldge of ritual, potions and enchanter of goods.
                    </li>
                </ul>
            </article>
        </main>
    </div>
}

export default Academic
