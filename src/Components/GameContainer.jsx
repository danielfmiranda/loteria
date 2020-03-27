import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/GameContainer.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import cardImage from '../Images/La_Garza.png'

class GameContainer extends Component {

componentDidMount() {
    console.log('PROPS');
    console.log(this.props.usersCards)
}

    render() {


        return (
            <div className={'gameContainer'}>
                <div className={'callingCardContainer'}>

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


                <div className={'userCardContainer'}>
                    <Container className={'userContentContainer'}>
                        <Row className={'userContentRow'}>
                            <Col className={'userContentColumn'} xs={1}>


                            </Col>
                            <Col className={'userContentColumn'} xs={10}>
                                <div className={'userCard'}>
                                    <Row className={'cardRow'}>


                                        <Col
                                            className={`cell ` + `${this.props.usersCards[0].className}`}
                                            cardName={`${this.props.usersCards[0].name}`}
                                            xs={3}>


                                        </Col>
              <Col
                                            className={`cell ` + `${this.props.usersCards[1].className}`}
                                            cardName={`${this.props.usersCards[1].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[2].className}`}
                                            cardName={`${this.props.usersCards[2].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[3].className}`}
                                            cardName={`${this.props.usersCards[3].name}`}
                                            xs={3}>


                                        </Col>
                                    </Row>
                                    <Row className={'cardRow 5'}>
                           <Col
                                            className={`cell ` + `${this.props.usersCards[4].className}`}
                                            cardName={`${this.props.usersCards[4].name}`}
                                            xs={3}>


                                        </Col>
              <Col
                                            className={`cell ` + `${this.props.usersCards[5].className}`}
                                            cardName={`${this.props.usersCards[5].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[6].className}`}
                                            cardName={`${this.props.usersCards[6].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[7].className}`}
                                            cardName={`${this.props.usersCards[7].name}`}
                                            xs={3}>


                                        </Col>
                                    </Row>
                                    <Row className={'cardRow'}>
                           <Col
                                            className={`cell ` + `${this.props.usersCards[0].className}`}
                                            cardName={`${this.props.usersCards[0].name}`}
                                            xs={3}>


                                        </Col>
              <Col
                                            className={`cell ` + `${this.props.usersCards[1].className}`}
                                            cardName={`${this.props.usersCards[1].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[2].className}`}
                                            cardName={`${this.props.usersCards[2].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[3].className}`}
                                            cardName={`${this.props.usersCards[3].name}`}
                                            xs={3}>


                                        </Col>
                                    </Row>
                                    <Row className={'cardRow'}>
                                                     <Col
                                            className={`cell ` + `${this.props.usersCards[7].className}`}
                                            cardName={`${this.props.usersCards[7].name}`}
                                            xs={3}>


                                        </Col>
              <Col
                                            className={`cell ` + `${this.props.usersCards[6].className}`}
                                            cardName={`${this.props.usersCards[6].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[5].className}`}
                                            cardName={`${this.props.usersCards[5].name}`}
                                            xs={3}>


                                        </Col>              <Col
                                            className={`cell ` + `${this.props.usersCards[4].className}`}
                                            cardName={`${this.props.usersCards[4].name}`}
                                            xs={3}>


                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col className={'userContentColumn'} xs={1}></Col>
                        </Row>
                    </Container>


                </div>
                <div className={'loteriaButtonContainer'}>
                    <Button className={'loteriaButton'}><h2> LOTERIA! </h2></Button>
                </div>
            </div>
        );
    }
}

GameContainer.propTypes = {};

export default GameContainer;
