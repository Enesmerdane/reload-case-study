import styles from "./styles.module.css";
import Logo from "../../utils/logo";

import Button from "../../components/homePageButton";

function Home() {
    return (
        <>
            <header>
                <Logo classname={styles.main_page__logo} />
            </header>
            <div className={styles.section1}>
                <div className={styles.section1__heading}>
                    <code>AI</code> Chatbot
                </div>
                <div className={styles.section1__description}>
                    We’ve trained a model called ChatGPT which interacts in a
                    conversational way.
                </div>
                <Button text="Continue" />
            </div>
            <div className="section2">
                <h1>Start chatting with AI.</h1>
                <div>
                    Chat about any topic with ChatGPT in any time. It can be
                    your friend, tutor or therapist.
                </div>
                <button>Let's Start Chat ---{`>`}</button>
                <div>img</div>
            </div>
            <div className="section3">
                <div>
                    <h1>Chat with unique characters</h1>
                    <div>
                        You can chat many different characters for a few set of
                        topics and interests.
                    </div>
                    <button>Let’s start chat</button>
                    <div>Rectangle</div>
                </div>
                <div>images and texts</div>
            </div>
            <div className="section4">
                <h1>Let’s start experiencing the new internet today.</h1>
                <button>Get started for free</button>
            </div>
            <footer>
                <div>
                    <div>
                        <h3>
                            We would love to hear from you. Let’s work —
                            together with Reload
                        </h3>
                        <button>Contact us</button>
                    </div>
                    <div>
                        <h3>Business requires</h3>
                        <div>hello@colstic.com</div>
                        <div>+27 123 456 789</div>
                    </div>
                    <div>
                        <h3>London</h3>
                        <div>133A Rye lane London SE15 4BQ UK</div>
                    </div>
                    <div>
                        <h3>Open positions</h3>
                        <ul>
                            <li>Junior Graphic Design</li>
                            <li>Videography</li>
                            <li>Photography</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Cape town</h3>
                        <div>14 Upper pepper street CBD, 8001 Cape Town</div>
                    </div>
                </div>
                <div>
                    <div>reload.case</div>
                    <div>
                        <ul>
                            <li>DRIBBLE</li>
                            <li>INSTAGRAM</li>
                            <li>LINKEDIN</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
