import React, {Component} from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import Card from 'react-bootstrap/Card'
import Confetti from 'react-confetti';
import '../Css/WinningScreen.css';

import Button from 'react-bootstrap/Button'
import {motion} from "framer-motion";


class WinningScreen extends Component {

    render() {

        return (
            <div>
                <Confetti
                    width={this.props.windowWidth}
                    height={this.props.windowHeight}
                    initialVelocityX={1}
                    initialVelocityY={1500}
                />

                <div className={'winMessageContainer'}>
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
                    <motion.div
                        animate={{scale: .9}}
                        initial={{scale: 0}}
                        transition={{duration: .5}}


                    >
                        <h1 className={'winningMessage'}> You Won!!!</h1>

                        <Button onClick={() => window.location.reload(false)} className={'replayButton'}
                                variant="primary"
                                size="md">
                            Replay </Button>
                    </motion.div>
                </div>


            </div>
        );
    }
}

WinningScreen.propTypes = {};

export default WinningScreen;
