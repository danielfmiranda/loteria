import React, {Component} from 'react';
import '../Css/IntroPage.css';
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";

class IntroPage extends Component {
    render() {
        return (

            <div className={'introPageContainer'}>
                <motion.div className={'callingCardContainer'}
                            animate={{y: 20}}
                            initial={{y: -130}}
                            transition={{duration: .7}}


                >
                    <div className={'introPageHeadingContainer'}>
                        <div className={'titleCardsContainer'}>
                            <div className={"lCard titleCard"}>
                                <h1 className={'introPageTitle'}> L </h1>
                            </div>
                            <div className={"oCard titleCard"}>
                                <h1 className={'introPageTitle'}> O </h1>
                            </div>
                            <div className={"tCard titleCard"}>
                                <h1 className={'introPageTitle'}> T </h1>
                            </div>
                            <div className={"eCard titleCard"}>
                                <h1 className={'introPageTitle'}> E </h1>
                            </div>
                            <div className={"rCard titleCard"}>
                                <h1 className={'introPageTitle'}> R </h1>
                            </div>
                            <div className={"iCard titleCard"}>
                                <h1 className={'introPageTitle'}> I </h1>
                            </div>
                            <div className={"aCard titleCard"}>
                                <h1 className={'introPageTitle'}> A </h1>
                            </div>
                            <div className={"exclamationCard titleCard"}>
                                <h1 className={'introPageTitle'}> ! </h1>
                            </div>
                        </div>

                    </div>
                </motion.div>
                <motion.div
                    animate={{scale: .9}}
                    initial={{scale: 0}}
                    transition={{duration: .5}}


                >

                    <div className={'introPageContentContainer'}>
                        <h3> Loteria is a mexican game of chance, similar to bingo. </h3>
                        <br/>
                        <h5> Mark the cards being called by tapping on them. Once your card is full, click the button at the bottom to call loteria! </h5>
                        <Button
                            className={'startGameButton'}
                            onClick={this.props.clickIntroButton}
                        ><h1> Start Game! </h1></Button>
                    </div>
                </motion.div>
            </div>
        );
    }
}

IntroPage.propTypes = {};

export default IntroPage;
