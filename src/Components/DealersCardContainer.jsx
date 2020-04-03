import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/DealersCardContainer.css'

class DealersCardContainer extends Component {
    render() {
        return (
            <div className={'dealersCardContainer'}>
                <div className={'cardContainer'}>
                    <h5> Hi </h5>
                </div>
                <div className={'cardNameContainer'}>
                                        <h1> Card Name Baybee </h1>
                </div>
            </div>
        );
    }
}

DealersCardContainer.propTypes = {};

export default DealersCardContainer;
