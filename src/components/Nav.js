import React, {Component} from 'react';

class Nav extends Component {
	constructor() {
    	super();
    	this.state = {
    		showBlog1: true,
    		showBlog2: true,
    		showBlog3: true,
    		showAll: true
    	};
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.showBlog1(this.state.showBlog1);
	}

	render() {
		return (
			<div className="nav">
				<ul><a>Blog 1: Inheritance</a></ul>
				<ul><a>Blog 2: Timpani</a></ul>
				<ul><a>Blog 3: Swedish</a></ul>
				<ul><a>Welcome</a></ul>
			</div>
		)
	}
}

export default Nav;