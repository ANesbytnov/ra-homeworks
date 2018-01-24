'use strict';

function MessageHistory({list}) {
	const messages = list.map(function(item) {
		let NeedComp = null;
		switch (item.type) {
			case 'message': 
				NeedComp = Message;
				break;
			case 'response':
				NeedComp = Response;
				break;
			case 'typing':
				NeedComp = Typing;
				break;
		}
		return <NeedComp from={item.from} message={item} />;
	});

	return (<ul>{messages}</ul>);
}