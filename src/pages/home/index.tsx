import "./styles.css";
import Logo from "../../utils/logo";
import Vector from "../../utils/vector";
import ChatImage from "../../utils/chat_image";

import { topicsData } from "../../data/topics";

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
                    <div className="section3__rectangle"></div>
                </div>
                <div className="section3__rightside">
                    {topicsData.map((item, id) => {
                        // console.log(item);

                        return (
                            <div className="section3__topic_item" key={id}>
                                <img
                                    // src={`../../assets/${item.topicImage}.jpg`}
                                    src={item.topicImage}
                                    className="section3__topic_item_img"
                                />
                                <div className="section3__topic_description">
                                    {item.topicName}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="section4">
                <div className="section4__head">
                    <div className="section4__heading">
                        Let’s start experiencing the new internet{" "}
                        <code>today.</code>
                    </div>
                    <Button
                        text="Get started for free"
                        color={buttonColorEnum.blue}
                        onclick={(e) => {
                            window.location.href = "/chat";
                        }}
                        classname="section4__button"
                    />
                </div>
            </div>
            <footer>
                <div className="mainpage__footer_part1">
                    <div className="mainpage__footer_contact_us">
                        <h3>
                            We would love to hear from you. Let’s work —
                            together with Reload
                        </h3>
                        <Button
                            text="Contact us!"
                            color={buttonColorEnum.black}
                            onclick={(e) => {
                                window.location.href = "/chat";
                            }}
                            classname="mainpage__footer_button"
                        />
                    </div>
                    <div className="mainpage__footer_information">
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
                            <div>Junior Graphic Design</div>
                            <div>Videography</div>
                            <div>Photography</div>
                        </div>
                        <div>
                            <h3>Cape town</h3>
                            <div>
                                14 Upper pepper street CBD, 8001 Cape Town
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainpage__footer_part2">
                    <div className="mainpage__footer_part2_logo_container">
                        <Logo classname="mainpage__footer_part2_logo" />
                    </div>
                    <div className="mainpage__footer_part2_social_media">
                        <div>DRIBBLE</div>
                        <div>INSTAGRAM</div>
                        <div>LINKEDIN</div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
