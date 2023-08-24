import "./styles.css";
import Logo from "../../utils/logo";
import Vector from "../../utils/vector";
import ChatImage from "../../utils/chat_image";

import { topicsData } from "../../data/topics";

import { Link } from "react-router-dom";

import Button, { buttonColorEnum } from "../../components/homePageButton";
import { useEffect, useMemo, useRef, useState } from "react";

function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting)
            ),
        []
    );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

function Home() {
    const [yOffset, setYOffset] = useState<number>(0);
    const [perspective, setPerspective] = useState<number>(0);

    const scrollableContentRef = useRef(null);
    const scrollableContent = useRef<HTMLDivElement>(null);

    const isInVP = useIsInViewport(scrollableContentRef);

    const scrollHandler = () => {
        setYOffset(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, { passive: true });
        setYOffset(window.scrollY);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    useEffect(() => {
        console.log(isInVP);
        if (isInVP) {
        }

        let perspective: number;
        if (yOffset > 660) {
            perspective = 0;
        } else if (yOffset < 300) {
            return;
        } else {
            perspective = Math.floor((640 - yOffset) / 4) + 5;
        }

        setPerspective(perspective);
    }, [yOffset]);

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
            <div className="section2" id="section2" onScroll={scrollHandler}>
                <div className="section2__heading">Start chatting with AI.</div>
                <div className="section2__description">
                    Chat about any topic with ChatGPT in any time. It can be
                    your friend, tutor or therapist.
                </div>
                <Link to="/chat" className="section2__link">
                    Let's Start Chat
                    <Vector classname="section2__link_vector" />
                </Link>
                <ChatImage
                    classname="section2__chat_img"
                    perspective={perspective}
                />
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
                <div
                    className="section3__rightside"
                    tabIndex={-1}
                    ref={scrollableContent}
                >
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
            <div className="section4" ref={scrollableContentRef}>
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
                                window.alert("Contact us!");
                            }}
                            classname="mainpage__footer_button"
                        />
                    </div>
                    <div className="mainpage__footer_information">
                        <div>
                            <div className="mainpage__footer_information_title">
                                Business requires
                            </div>
                            <div className="mainpage__footer_information_text">
                                hello@colstic.com
                            </div>
                            <div className="mainpage__footer_information_text">
                                +27 123 456 789
                            </div>
                        </div>
                        <div>
                            <div className="mainpage__footer_information_title">
                                London
                            </div>
                            <div className="mainpage__footer_information_text">
                                133A Rye lane London SE15 4BQ UK
                            </div>
                        </div>
                        <div>
                            <div className="mainpage__footer_information_title">
                                Open positions
                            </div>
                            <div className="mainpage__footer_information_text">
                                Junior Graphic Design
                            </div>
                            <div className="mainpage__footer_information_text">
                                Videography
                            </div>
                            <div className="mainpage__footer_information_text">
                                Photography
                            </div>
                        </div>
                        <div>
                            <div className="mainpage__footer_information_title">
                                Cape town
                            </div>
                            <div className="mainpage__footer_information_text">
                                14 Upper pepper street CBD, 8001 Cape
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
