import React, {Component} from "react";
import "../Css/GameContainer.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import BeanContainer from "./BeanContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DealersCardContainer from "./DealersCardContainer";

class GameContainer extends Component {
    componentDidMount() {
    }


    render() {
        return (
            <div className={"gameContainer"}>
                <div className={"callingCardContainer"}>
                    <DealersCardContainer/>
                </div>

                <div className={"userCardContainer"}>
                    <Container className={"userContentContainer"}>
                        <Row className={"userContentRow"}>
                            <Col className={"userContentColumn"} xs={1}></Col>
                            <Col className={"userContentColumn"} xs={10}>
                                <div className={"userCard"}>
                                    <Row className={"cardRow"}>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[0].className}`
                                            }
                                            cardName={`${this.props.usersCards[0].name}`}
                                            xs={3}
                                            onClick={() => this.props.cardClick(0)}
                                            columnNumber={0}
                                        >
                                            <BeanContainer
                                                columnNumber={0}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}
                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[1].className}`
                                            }
                                            cardName={`${this.props.usersCards[1].name}`}
                                            xs={3}
                                            onClick={() => this.props.cardClick(1)}

                                            columnNumber={1}

                                        >
                                            <BeanContainer
                                                columnNumber={1}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[2].className}`
                                            }
                                            cardName={`${this.props.usersCards[2].name}`}
                                            xs={3}
                                            onClick={() => this.props.cardClick(2)}

                                            columnNumber={2}

                                        >
                                            <BeanContainer
                                                columnNumber={2}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[3].className}`
                                            }
                                            cardName={`${this.props.usersCards[3].name}`}
                                            xs={3}
                                            onClick={() => this.props.cardClick(3)}

                                            columnNumber={3}

                                        >
                                            <BeanContainer
                                                columnNumber={3}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                    </Row>
                                    <Row className={"cardRow 5"}>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[4].className}`
                                            }
                                            cardName={`${this.props.usersCards[4].name}`}
                                            xs={3}
                                            columnNumber={4}
                                            onClick={() => this.props.cardClick(4)}
                                        >
                                            <BeanContainer
                                                columnNumber={4}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[5].className}`
                                            }
                                            cardName={`${this.props.usersCards[5].name}`}
                                            xs={3}
                                            columnNumber={5}
                                            onClick={() => this.props.cardClick(5)}
                                        >
                                            <BeanContainer
                                                columnNumber={5}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[6].className}`
                                            }
                                            cardName={`${this.props.usersCards[6].name}`}
                                            xs={3}
                                            columnNumber={6}
                                            onClick={() => this.props.cardClick(6)}
                                        >
                                            <BeanContainer
                                                columnNumber={6}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[7].className}`
                                            }
                                            cardName={`${this.props.usersCards[7].name}`}
                                            xs={3}
                                            columnNumber={7}
                                            onClick={() => this.props.cardClick(7)}
                                        >
                                            <BeanContainer
                                                columnNumber={7}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                    </Row>
                                    <Row className={"cardRow"}>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[8].className}`
                                            }
                                            cardName={`${this.props.usersCards[8].name}`}
                                            xs={3}
                                            columnNumber={8}
                                            onClick={() => this.props.cardClick(8)}
                                        >
                                            <BeanContainer
                                                columnNumber={8}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={
                                                `cell ` + `${this.props.usersCards[9].className}`
                                            }
                                            cardName={`${this.props.usersCards[9].name}`}
                                            xs={3}
                                            columnNumber={9}
                                            onClick={() => this.props.cardClick(9)}
                                        >
                                            <BeanContainer
                                                columnNumber={9}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={`cell ` + `${this.props.usersCards[10].className}`}
                                            cardName={`${this.props.usersCards[10].name}`}
                                            xs={3}
                                            columnNumber={10}
                                            onClick={() => this.props.cardClick(10)}
                                        >
                                            <BeanContainer
                                                columnNumber={10}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={`cell ` + `${this.props.usersCards[11].className}`}
                                            cardName={`${this.props.usersCards[11].name}`}
                                            xs={3}
                                            columnNumber={11}
                                            onClick={() => this.props.cardClick(11)}
                                        >
                                            <BeanContainer
                                                columnNumber={11}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                    </Row>
                                    <Row className={"cardRow"}>
                                        <Col
                                            className={`cell ` + `${this.props.usersCards[12].className}`}
                                            cardName={`${this.props.usersCards[12].name}`}
                                            xs={3}
                                            columnNumber={12}
                                            onClick={() => this.props.cardClick(12)}
                                        >
                                            <BeanContainer
                                                columnNumber={12}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={`cell ` + `${this.props.usersCards[13].className}`}
                                            cardName={`${this.props.usersCards[13].name}`}
                                            xs={3}
                                            columnNumber={13}
                                            onClick={() => this.props.cardClick(13)}
                                        >
                                            <BeanContainer
                                                columnNumber={13}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                        <Col
                                            className={`cell ` + `${this.props.usersCards[14].className}`}
                                            cardName={`${this.props.usersCards[14].name}`}
                                            xs={3}
                                            columnNumber={14}
                                            onClick={() => this.props.cardClick(14)}
                                        >
                                            <BeanContainer
                                                columnNumber={14}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}


                                            />
                                        </Col>
                                        <Col
                                            className={`cell ` + `${this.props.usersCards[15].className}`}
                                            cardName={`${this.props.usersCards[15].name}`}
                                            xs={3}
                                            columnNumber={15}
                                            onClick={() => this.props.cardClick(15)}
                                        >
                                            <BeanContainer
                                                columnNumber={15}
                                                userCardColumnsSelected={this.props.userCardColumnsSelected}

                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className={"userContentColumn"} xs={1}/>
                        </Row>
                    </Container>
                </div>
                <div className={"loteriaButtonContainer"}>
                    <Button className={"loteriaButton"}>
                        <h2> LOTERIA! </h2>
                    </Button>
                </div>
            </div>
        );
    }
}

GameContainer.propTypes = {};

export default GameContainer;
