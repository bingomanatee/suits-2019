import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import {Heart} from '../../views/suits'

function Academic() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Training: Creative <Heart/></h1>
                <p>A range of skills in the creative/entertainment realm.</p>
                <h2>Specialties</h2>
                <ul>
                    <li><b>Artisan</b>: Making and appraising items of value - jewelry, sculpture musical instruments
                        and currency</li>
                    <li><b>Graphic Arts/Printing</b>: Paintings, books, typesetting, and caligraphy; including forging</li>
                    <li><b>Music</b> - singing and playing a musical instrument, composition and songwriting.</li>
                    <li><b>Sculpture/Jeweller</b> - A huge array of 3d construction, carving, and ornamentation;
                        for game purposes includes Jewelry and costuming.</li>
                    <li><b>Entertainer</b> - includes acting, comedy, musicianship and dancing.</li>
                    <li><b>Theater/Media</b> - talent in production and performance of long works of fiction including
                        staging, imitation and projection for large audiences.</li>
                </ul>
            </article>
        </main>
    </div>
}

export default Academic
