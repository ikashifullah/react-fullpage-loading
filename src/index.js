import React from 'react';
import loadingImg from './img/loading.gif';

let styles = {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'rgba(255, 255, 255, 0.8)',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '2147483647',
    opacity: '1',
}

export default class FullPageLoading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
            newStyle: null
		}
	}

	componentDidMount() {
		this.setState({ newStyle: styles});
        const timer =  this.props.timer ? this.props.timer : 2000;
        setTimeout(() => {
            this.setState({
                newStyle: Object.assign(
                    {}, 
                    this.state.newStyle,
                    { ['display']: 'none' }
                  )
            })
        }, timer);

	}

    render () {
        const { newStyle} = this.state;
        return (
        	<div style={newStyle}>
            	<img src={loadingImg} />
            </div>
        )
    }
}