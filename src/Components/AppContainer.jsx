import React, {Component} from 'react';
import GameContainer from "./GameContainer";
import IntroPage from "./IntroPage";
import '../Css/AppContainer.css'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introButtonClicked: true,
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
            userCardColumnsSelected:[
                {
                   columnNumber:0,
                   selected:false
                },
                 {
                   columnNumber:1,
                   selected:false
                },
                 {
                   columnNumber:2,
                   selected:false
                },
                 {
                   columnNumber:3,
                   selected:false
                },
                 {
                   columnNumber:4,
                   selected:false
                },
                 {
                   columnNumber:5,
                   selected:false
                },
                 {
                   columnNumber:6,
                   selected:false
                },
                 {
                   columnNumber:7,
                   selected:false
                },
                 {
                   columnNumber:8,
                   selected:false
                },
                 {
                   columnNumber:9,
                   selected:false
                },
                 {
                   columnNumber:10,
                   selected:false
                },
                 {
                   columnNumber:11,
                   selected:false
                },
                {
                   columnNumber:12,
                   selected:false
                },
                                {
                   columnNumber:13,
                   selected:false
                },
                                {
                   columnNumber:14,
                   selected:false
                },
                                {
                   columnNumber:15,
                   selected:false
                },

            ]


        };

    }

    componentWillMount() {
        this.getUsersCards();
    }

    getUsersCards = () => {
        for (let i = 0; i < 16; i++) {
            let randomNumber = Math.floor(Math.random() * this.state.possibleCards.length);
            this.state.usersCards.push(this.state.possibleCards[randomNumber])
        }


    };

    clickIntroButton = () => {
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
                    userCardColumnsSelected={this.state.userCardColumnsSelected}

                    />
                )}

            </div>
        );
    }
}

AppContainer.propTypes = {};

export default AppContainer;
