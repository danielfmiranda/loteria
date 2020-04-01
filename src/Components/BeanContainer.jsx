import React, {Component} from 'react';
import PropTypes from 'prop-types';
import beanImage from '../Images/bean.png'
import '../Css/Bean.css'

class MyComponent extends Component {
    render() {
        return (
            <div className={'beanContainer'}>
                <img  className='beanImage' src={beanImage}/>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
