'use strict';

function MessageHistory({list}) {
	const messages = list.map((item) => {
		let NeedComp;
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
			default:
				return null;
		}
		return <NeedComp from={item.from} message={item} />;
	});

	return (<ul>{messages}</ul>);
}