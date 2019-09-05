import PageHead from "../../views/PageHead";
import PageTitle from '../../views/PageTitle';
import {Diam} from '../../views/suits'

function Merchant() {
    return <div>
        <PageHead/>
        <PageTitle active="characters"/>
        <main>
            <article>
                <h1>Training: Merchant <Diam/></h1>
                <p>Knowledge of trade, finance and business.</p>
                <h2>Specialties</h2>
                <ul>
                    <li><b>Trader</b> - ability to buy and sell goods and people for profit.
                        knowledge of prices, appraising, negotiating and market trends.
                    </li>
                    <li><b>Accountant/Bureaucrat</b> - knowledge of bookkeeping, bureaucracy,
                    regulations and documentation. includes forging and recognition of forgery or
                    illegal documentation and practices. Includes "business math" and practical
                    logistics calculations.</li>
                    <li><b>Manager</b> - skilled in team dynamics; ability to motivate, direct and encourage
                        a group of people. Includes negotiation and successful discipline.</li>
                    <li><b>Finance</b> - knowledge of corporate structure, practices and
                        restrictions, institutions and accounting</li>
                </ul>
            </article>
        </main>
    </div>
}

export default Merchant
