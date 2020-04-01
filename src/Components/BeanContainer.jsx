import React, {Component} from 'react';
import PropTypes from 'prop-types';
import beanImage from '../Images/bean.png'
import '../Css/Bean.css'

class MyComponent extends Component {
    render() {
        return (
            <div className={'beanContainer'}>

                {this.props.userCardColumnsSelected[this.props.columnNumber].selected === true ? (
                    <img className='beanImage' src={beanImage}/>

                ) : (

                    null

                )}

            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
