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
                    initialVelocityY={1000}
                    gracvity={50}
                />

                {/*<Card style={{ width: '18rem' }}>*/}
                {/*  <Card.Body>*/}
                {/*    <Card.Title><h1> YOU WON!!!!</h1></Card.Title>*/}
                {/*    <Card.Text>*/}
                {/*      Some quick example text to build on the card title and make up the bulk of*/}
                {/*      the card's content.*/}
                {/*    </Card.Text>*/}
                {/*  </Card.Body>*/}
                {/*</Card>*/}
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
                        <h1 className={'winningMessage'}> Ganaste!!!</h1>

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
