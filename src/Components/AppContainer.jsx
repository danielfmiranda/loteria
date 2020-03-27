import React, {Component} from 'react';
import GameContainer from "./GameContainer";
import IntroPage from "./IntroPage";
import '../Css/AppContainer.css'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introButtonClicked: false,
            possibleCards: [
                {
                    name: "El Emoji",
                    className: "a"
                },
                {
                    name: "La Campana",
                    className: "s"
                }, {
                    name: "La Garza",
                    className: "d"
                }
                , {
                    name: "La Estrella",
                    className: "f"
                },
                                {
                    name: "El Arbol",
                    className: "g"
                },
                {
                    name: "El Buscador",
                    className: "h"
                }, {
                    name: "El Pajaro",
                    className: "j"
                }
                ,
                 {
                    name: "La Sandia",
                    className: "k"
                }
                ,
                {
                    name: "El Musico",
                    className: "l"
                }
                ,
            ],
            usersCards: []


        };

    }

    componentDidMount() {
        this.getUsersCards();
    }

    getUsersCards = () => {
        for (let i = 0; i < 8; i++) {
            let randomNumber = Math.floor(Math.random() * 9);
            this.state.usersCards.push(this.state.possibleCards[randomNumber])
        }


    };

    clickIntroButton = () => {
        console.log('Click')
        this.setState({
            introButtonClicked: true
        })
    };


    render() {
        return (
            <div className={'appContainer'}>

                {this.state.introButtonClicked === false ? (

                    <IntroPage
                        clickIntroButton={this.clickIntroButton}
                    />

                ) : (

                    <GameContainer
                    usersCards={this.state.usersCards}
                    />
                )}

            </div>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;
