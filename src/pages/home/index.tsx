import "./styles.css";
import Logo from "../../utils/logo";
import Vector from "../../utils/vector";
import ChatImage from "../../utils/chat_image";

import { Link } from "react-router-dom";

import Button, { buttonColorEnum } from "../../components/homePageButton";

function Home() {
    return (
        <>
            <div className="section1">
                <Logo classname="main_page__logo" />
                <div className="section1__heading">
                    <code>AI</code> Chatbot
                </div>
                <div className="section1__description">
                    We’ve trained a model called ChatGPT which interacts in a
                    conversational way.
                </div>
                <Button
                    text="Continue"
                    color={buttonColorEnum.white}
                    onclick={(e) => {
                        window.location.href = "#section2";
                    }}
                    classname="section1__button"
                />
            </div>
            <div className="section2" id="section2">
                <div className="section2__heading">Start chatting with AI.</div>
                <div className="section2__description">
                    Chat about any topic with ChatGPT in any time. It can be
                    your friend, tutor or therapist.
                </div>
                <Link to="/chat" className="section2__link">
                    Let's Start Chat
                    <Vector classname="section2__link_vector" />
                </Link>
                <ChatImage classname="section2__chat_img" />
            </div>
            <div className="section3">
                <div className="section3__leftside">
                    <div className="section3__leftside_heading">
                        Chat with unique characters
                    </div>
                    <div className="section3__leftside_description">
                        You can chat many different characters for a few set of
                        topics and interests.
                    </div>
                    <Button
                        text="Let’s start chat"
                        color={buttonColorEnum.blue}
                        onclick={(e) => {
                            window.location.href = "/chat";
                        }}
                        classname="section3__button"
                    />
                    <div>Rectangle</div>
                </div>
                <div className="section3__rightside">images and texts</div>
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
