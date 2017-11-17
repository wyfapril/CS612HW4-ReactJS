import React, {Component} from 'react';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';

class Main extends Component {
	constructor(props) {
    	super(props);
    	this.setWrapperRef = this.setWrapperRef.bind(this);      
        this.handleClickOutside = this.handleClickOutside.bind(this);
	};

	componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            alert('You clicked outside of me!');
        }
    }

	render() {
		return (
			<div className="main" ref={this.setWrapperRef}>
			{this.props.children}
				<Blog1 />
				<Blog2 />
				<Blog3 />
			</div>
		)
	}
}

export default Main;