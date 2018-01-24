'use strict';

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://neto-api.herokuapp.com/etsy', function(err, data) {
	if (err !== null) {
		console.log('Something went wrong: ' + err);
	} else {
		ReactDOM.render(
		  <Listing items={data} />,
		  document.getElementById('root')
		);
	}
});


function ListItem({item}) {
	const title = item.title.length > 50 ? item.title.substr(0, 50) + '...' : item.title;

	let classLevel = 'item-quantity ';
	if (item.quantity > 0) {
		if (item.quantity <= 10) {
			classLevel += 'level-low';
		} else if (item.quantity <= 20) {
			classLevel += 'level-medium';
		} else {
			classLevel += 'level-high';
		}		
	}

	let price = '';
	if (item.currency_code  === 'USD') {
		price = `$${item.price}`;
	} else if (item.currency_code  === 'EUR') {
		price = `€${item.price}`;
	} else {
		price = `${item.price} ${item.currency_code }`;
	}

	return (
		<div className="item-list">
		  <div className="item">
		    <div className="item-image">
		      <a href={item.url}>
		        <img src={item.MainImage.url_570xN} />
		      </a>
		    </div>
		    <div className="item-details">
		      <p className="item-title">{title}</p>
		      <p className="item-price">{price}</p>
		      <p className={classLevel}>{item.quantity} left</p>
		    </div>
		  </div>
		</div>
	);
}

function Listing({items}) {
	const result = items.map((item) => <ListItem key={item.listing_id} item={item} />);
	return (<div>{result}</div>);
}