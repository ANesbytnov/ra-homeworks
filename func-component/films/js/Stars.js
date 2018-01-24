'use strict';

function Stars({count}) {
	if (typeof count !== 'number' || count < 1 || count > 5) {
		return null;
	}
  	
	const myStars = [];
	for (let i = 0; i < count; i++) {
		myStars.push(<li><Star key={i} /></li>);
	}

  	return <ul className="card-body-stars u-clearfix">{myStars}</ul>;
}
