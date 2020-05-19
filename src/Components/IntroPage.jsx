import React, {Component} from "react";
import "../Css/IntroPage.css";
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";

class IntroPage extends Component {
    render() {
        return (
            <div className={"introPageContainer"}>
                <motion.div
                    className={"callingCardContainer"}
                    animate={{y: 20}}
                    initial={{y: -130}}
                    transition={{duration: 0.7}}
                >
                    <div className={"introPageHeadingContainer"}>
                        <div className={"titleCardsContainer"}>
                            <div className={"lCard titleCard"}>
                                <h1 className={"introPageTitle"}> L </h1>
                            </div>
                            <div className={"oCard titleCard"}>
                                <h1 className={"introPageTitle"}> O </h1>
                            </div>
                            <div className={"tCard titleCard"}>
                                <h1 className={"introPageTitle"}> T </h1>
                            </div>
                            <div className={"eCard titleCard"}>
                                <h1 className={"introPageTitle"}> E </h1>
                            </div>
                            <div className={"rCard titleCard"}>
                                <h1 className={"introPageTitle"}> R </h1>
                            </div>
                            <div className={"iCard titleCard"}>
                                <h1 className={"introPageTitle"}> I </h1>
                            </div>
                            <div className={"aCard titleCard"}>
                                <h1 className={"introPageTitle"}> A </h1>
                            </div>
                            <div className={"exclamationCard titleCard"}>
                                <h1 className={"introPageTitle"}> ! </h1>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{scale: 0.9}}
                    initial={{scale: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className={"introPageContentContainer"}>
                        <h3> Loteria is a mexican game similar to bingo. </h3>
                        <br/>
                        <h5>
                            {" "}
                            <b>1.)</b> Click the start button, and a new card will be called every 5 seconds.
                            {""}
                        </h5>
                        <h5>
                            {" "}
                            <b>2.)</b> If the game calls one of your cards, tap the image to mark it with a bean.{" "}
                        </h5>
                        <h5>
                            {" "}
                            <b>3.)</b> Once every image on your card is marked, tap the blue button to claim
                            "¡LOTERIA!"{" "}
                        </h5>

                        <h5>
                            {" "}
                            <b>4.)</b> If you need remaining cards, the board will glow red.{" "}
                        </h5>

                          <h5>
                            {" "}
                            <b>5.)</b> Click the button below to start y diviertete! (Have fun!){" "}
                        </h5>


                        <Button
                            className={"startGameButton"}
                            onClick={this.props.clickIntroButton}
                        >
                            <h1> Start Game! </h1>
                        </Button>
                    </div>
                </motion.div>
            </div>
        );
    }
}

IntroPage.propTypes = {};

export default IntroPage;
