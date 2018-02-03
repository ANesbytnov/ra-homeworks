'use strict';

const PROJECTS_ALL = 'All';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: PROJECTS_ALL
		};
	}

	render() {
	  return (
		  <div>
		    <Toolbar
		      filters={this.props.filters}
		      selected={this.state.selected}
		      onSelectFilter={(filter) => {
		      	console.log(filter);
		      	this.setState({
					selected: filter
				});
		      }} />
		    <Portfolio projects={
		    	this.state.selected === PROJECTS_ALL
		    	? this.props.projects 
		    	: this.props.projects.filter((project) => project.category === this.state.selected)
		    } />
		  </div>
	  );
	}

}