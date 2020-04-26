import React, {Component} from 'react';
import GameContainer from "./GameContainer";
import IntroPage from "./IntroPage";
import '../Css/AppContainer.css'
import WinningScreen from "./WinningScreen";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introButtonClicked: false,
            possibleCards: [
                {
                    name: "El Ajolote",
                    className: "ajolote"
                },
                {
                    name: "El Alacran",
                    className: "alacran"
                }, {
                    name: "El Arbol",
                    className: "arbol"
                }
                , {
                    name: "El Arpa",
                    className: "arpa"
                },
                {
                    name: "El Bandolon",
                    className: "bandolon"
                },
                {
                    name: "El Barril",
                    className: "barril"
                }, {
                    name: "El Buscador",
                    className: "buscador"
                }
                ,
                {
                    name: "El Cantarito",
                    className: "cantarito"
                }
                ,
                {
                    name: "El Catrin",
                    className: "catrin"
                },
                {
                    name: "El Cazo",
                    className: "cazo"
                },
                {
                    name: "El Corazon",
                    className: "corazon"
                },
                {
                    name: "El Cotorro",
                    className: "cotorro"
                },

                {
                    name: "El Elote",
                    className: "elote"
                },

                {
                    name: "El Emoji",
                    className: "emoji"
                },

                {
                    name: "El Gallo",
                    className: "gallo"
                },

                {
                    name: "El Gorro",
                    className: "gorro"
                },
                {
                    name: "El Guacamole",
                    className: "guacamole"
                },
                {
                    name: "El Melon",
                    className: "melon"
                },
                {
                    name: "El Mundo",
                    className: "mundo"
                },
                {
                    name: "El Musico",
                    className: "musico"
                },

                {
                    name: "El Nopal",
                    className: "nopal"
                },

                {
                    name: "El Pajaro",
                    className: "pajaro"
                },
                {
                    name: "El Parajuas",
                    className: "parajuas"
                },
                {
                    name: "El Pescado",
                    className: "pescado"
                },
                {
                    name: "El Pino",
                    className: "pino"
                },

                {
                    name: "El Sol",
                    className: "sol"
                },

                {
                    name: "El Tambor",
                    className: "tambor"
                },

                {
                    name: "El Venado",
                    className: "venado"
                },

                {
                    name: "El Violoncello",
                    className: "violoncello"
                },

                {
                    name: "El Xolo",
                    className: "xolo"
                },

                {
                    name: "La Arana",
                    className: "arana"
                },
                {
                    name: "La Bandera",
                    className: "bandera"
                },
                {
                    name: "La Bota",
                    className: "bota"
                },
                {
                    name: "La Botella",
                    className: "botella"
                },

                {
                    name: "La Calavera",
                    className: "calavera"
                },

                {
                    name: "La Camaron",
                    className: "camaron"
                },

                {
                    name: "La Campana",
                    className: "campana"
                },
                {
                    name: "La Chalupa",
                    className: "chalupa"
                },
                {
                    name: "La Concha",
                    className: "concha"
                },

                {
                    name: "La Corona",
                    className: "corona"
                },

                {
                    name: "La Campana",
                    className: "campana"
                },

                {
                    name: "La Chalupa",
                    className: "chalupa"
                },

                {
                    name: "La Concha",
                    className: "concha"
                },

                {
                    name: "La Corona",
                    className: "corona"
                },

                {
                    name: "La Dama",
                    className: "dama"
                },

                {
                    name: "La Escalera",
                    className: "escalera"
                },
                {
                    name: "La Estrella",
                    className: "estrella"
                },
                {
                    name: "La Garza",
                    className: "garza"
                },
                {
                    name: "La Luna",
                    className: "luna"
                },
                {
                    name: "La Maceta",
                    className: "maceta"
                },
                {
                    name: "La Mano",
                    className: "mano"
                },
                {
                    name: "La Palma",
                    className: "palma"
                },
                {
                    name: "La Pera",
                    className: "pera"
                },
                {
                    name: "La Rana",
                    className: "rosa"
                },
                {
                    name: "La Sandia",
                    className: "sandia"
                },

                {
                    name: "La Sirena",
                    className: "sirena"
                },

                {
                    name: "Las Jaras",
                    className: "jaras"
                }


            ],
            usersCards: [],
            userCardColumnsSelected: [
                {
                    columnNumber: 0,
                    selected: false
                },
                {
                    columnNumber: 1,
                    selected: false
                },
                {
                    columnNumber: 2,
                    selected: false
                },
                {
                    columnNumber: 3,
                    selected: false
                },
                {
                    columnNumber: 4,
                    selected: false
                },
                {
                    columnNumber: 5,
                    selected: false
                },
                {
                    columnNumber: 6,
                    selected: false
                },
                {
                    columnNumber: 7,
                    selected: false
                },
                {
                    columnNumber: 8,
                    selected: false
                },
                {
                    columnNumber: 9,
                    selected: false
                },
                {
                    columnNumber: 10,
                    selected: false
                },
                {
                    columnNumber: 11,
                    selected: false
                },
                {
                    columnNumber: 12,
                    selected: false
                },
                {
                    columnNumber: 13,
                    selected: false
                },
                {
                    columnNumber: 14,
                    selected: false
                },
                {
                    columnNumber: 15,
                    selected: false
                },

            ],
            cardsCalled: new Set(),
            currentCalledCard: {
                name: 4,
                className: "countDownCard",

            },
            nums: new Set(),
            numsToCall: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],

            cardCalledNumber: 0,
            ranNums: [],
            playerCardsDoMatch: false,
            playerDidNotWinMessage: false,
            playerHasWonMessage: false

        };

    }

    componentWillMount() {
        this.getUsersCards();

        this.shuffleNumbers();
    }

    cardClick = (cardName, columnNumber) => {

        if (this.state.userCardColumnsSelected[columnNumber].selected === true) {
            const newItems = [...this.state.userCardColumnsSelected];
            newItems[columnNumber].selected = false;
            this.setState({userCardColumnsSelected: newItems});

        } else {

            const newItems = [...this.state.userCardColumnsSelected];
            newItems[columnNumber].selected = true;
            newItems[columnNumber].name = cardName;
            this.setState({userCardColumnsSelected: newItems});
        }


    };


    getUsersCards = () => {
        for (let i = 0; i < 16;) {
            let randomNumber = Math.floor(Math.random() * this.state.possibleCards.length);
            let userAlreadyHaveCardBool = this.state.usersCards.some(item => this.state.possibleCards[randomNumber].name === item.name);
            if (userAlreadyHaveCardBool === false) {
                this.state.usersCards.push(this.state.possibleCards[randomNumber]);
                i++;
            } else {

            }

        }


    };

    clickIntroButton = () => {
        this.setState({
            introButtonClicked: true
        });
        this.countdown();

    };


    shuffleNumbers = () => {
        var nums = this.state.numsToCall
        let ranNums = []
        let i = nums.length
        let j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
        }

        this.setState({
            ranNums: ranNums
        })


    };


    getRandomNum = () => {

        if (this.state.nums.size !== 56) {
            let numberInShuffledArray = this.state.ranNums[this.state.cardCalledNumber]
            if (numberInShuffledArray === []) {

            } else {



                this.state.cardsCalled.add(this.state.possibleCards[numberInShuffledArray]);
                //
                this.state.nums.add(numberInShuffledArray);
                //
                //
                this.setState({
                    currentCalledCard: this.state.possibleCards[numberInShuffledArray],
                    cardCalledNumber: this.state.cardCalledNumber + 1

                })
            }
        }


        setTimeout(this.getRandomNum, 4000);


    }

    countdown = () => {

        if (this.state.currentCalledCard.name === 1) {
this.getRandomNum();
        }
        else {

            this.setState({
                currentCalledCard: {
                    name: this.state.currentCalledCard.name - 1,
                    className: "countDownCard",

                },


            })
        setTimeout(this.countdown, 1500);

        }
    };

    turnOffPlayerHasNotWonOverLay = () => {
        this.setState({
            playerDidNotWinMessage: false
        })
    }



    checkIfPlayerWon = () => {
        let array2 = this.state.usersCards;
        let result = {};
        this.state.cardsCalled.forEach(function (item) {
            result[item.name] = array2.filter(t => t.name == item.name).length;
        })
        let countOfMatchingCards = Object.values(result).reduce((a, b) => a + b, 0)
        if (countOfMatchingCards === 16) {
            this.setState({
                playerHasWonMessage: true
            });

        } else {
            this.setState({
                playerDidNotWinMessage: true
            });
            setTimeout(this.turnOffPlayerHasNotWonOverLay, 1000);

        }

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
                        userCardColumnsSelected={this.state.userCardColumnsSelected}
                        cardClick={this.cardClick}
                        currentCalledCard={this.state.currentCalledCard}
                        checkIfPlayerWon={this.checkIfPlayerWon}
                        playerDidNotWinMessage={this.state.playerDidNotWinMessage}
                        playerHasWonMessage={this.state.playerHasWonMessage}
                    />
                )}

            </div>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;
