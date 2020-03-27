import React, {Component} from 'react';
import '../Css/IntroPage.css';
import Button from "react-bootstrap/Button";

class IntroPage extends Component {
    render() {
        return (
            <div className={'introPageContainer'}>
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
                <div className={'introPageContentContainer'}>
                    <h1> Tap the button to start</h1>
                <Button
                    className={'startGameButton'}
                    onClick={this.props.clickIntroButton}
                > <h1> Start Game! </h1></Button>
                </div>
            </div>
        );
    }
}

IntroPage.propTypes = {};

export default IntroPage;
