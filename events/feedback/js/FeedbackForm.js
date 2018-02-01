'use strict';

const FeedbackForm = props => {

  const salutationValues = [
		{
			val: 'Мистер',
			id: 'salutation-mr'
		},
		{
			val: 'Мисис',
			id: 'salutation-mrs'
		},
		{
			val: 'Мис',
			id: 'salutation-ms'
		},
	],
  	subjectValues = ['У меня проблема', 'У меня важный вопрос'],
	snacksValues = [
		{
			val: 'пицца',
			text: 'Пиццу',
			id: 'snacks-pizza'
		},
		{
			val: 'пирог',
			text: 'Пирог',
			id: 'snacks-cake'
		}
	];  	

	let form;

	function save2JSON(e) {
		e.preventDefault();

		const salutationField = form.querySelector('input[type=radio]:checked'),
			nameField = form.querySelector('#name'),
			emailField = form.querySelector('#email'),
			messageField = form.querySelector('#message'),
			snacksField = form.querySelectorAll('input[type=checkbox]:checked'),
			subjectField = form.querySelector('#subject');

		const result = {
		  salutation: salutationField.value,
		  name: nameField.value,
		  subject: subjectField.value,
		  message: messageField.value,
		  email: emailField.value,
		  snacks: Array.from(snacksField).map(cb => cb.value)
		};

		props.onSubmit(JSON.stringify(result));
	}

  	return (
	  	<form ref={element => form = element} className="content__form contact-form" onSubmit={save2JSON}>
		  <div className="testing">
		    <p>Чем мы можем помочь?</p>
		  </div>
		  <div className="contact-form__input-group">
	  			<input 
	  				defaultChecked={salutationValues[0].val === props.data.salutation} 
	  				className="contact-form__input contact-form__input--radio" 
	  				id={salutationValues[0].id} 
	  				name="salutation" 
	  				type="radio" 
	  				value={salutationValues[0].val}/>
	    		<label className="contact-form__label contact-form__label--radio" htmlFor={salutationValues[0].id}>{salutationValues[0].val}</label>
	  			<input 
	  				defaultChecked={salutationValues[1].val === props.data.salutation} 
	  				className="contact-form__input contact-form__input--radio" 
	  				id={salutationValues[1].id} 
	  				name="salutation" 
	  				type="radio" 
	  				value={salutationValues[1].val}/>
	    		<label className="contact-form__label contact-form__label--radio" htmlFor={salutationValues[1].id}>{salutationValues[1].val}</label>
	  			<input 
	  				defaultChecked={salutationValues[2].val === props.data.salutation} 
	  				className="contact-form__input contact-form__input--radio" 
	  				id={salutationValues[2].id} 
	  				name="salutation" 
	  				type="radio" 
	  				value={salutationValues[2].val}/>
	    		<label className="contact-form__label contact-form__label--radio" htmlFor={salutationValues[2].id}>{salutationValues[2].val}</label>
		  </div>
		  <div className="contact-form__input-group">
		    <label className="contact-form__label" htmlFor="name">Имя</label>
		    <input 
				className="contact-form__input contact-form__input--text" 
				id="name" 
				name="name" 
				type="text" 
				defaultValue={props.data.name}/>
		  </div>
		  <div className="contact-form__input-group">
		    <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
		    <input 
		    	className="contact-form__input contact-form__input--email" 
		    	id="email" 
		    	name="email" 
		    	type="email" 
		    	defaultValue={props.data.email}/>
		  </div>
		  <div className="contact-form__input-group">
		    <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
		    <select className="contact-form__input contact-form__input--select" id="subject" name="subject">
		      {subjectValues.map((val) => <option selected={val === props.data.subject} value={val}>{val}</option>)}
		    </select>
		  </div>
		  <div className="contact-form__input-group">
		    <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
		    <textarea 
		    	className="contact-form__input contact-form__input--textarea" 
		    	id="message" 
		    	name="message" 
		    	rows="6" 
		    	cols="65">{props.data.message}</textarea>
		  </div>
		  <div className="contact-form__input-group">
		    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
			    <input 
			    	defaultChecked={props.data.snacks.includes(snacksValues[0].val)} 
			    	className="contact-form__input contact-form__input--checkbox" 
			    	id={snacksValues[0].id} 
			    	name="snacks" 
			    	type="checkbox" 
			    	value={snacksValues[0].val}/>
			    <label className="contact-form__label contact-form__label--checkbox" htmlFor={snacksValues[0].id}>{snacksValues[0].text}</label>
			    <input 
			    	defaultChecked={props.data.snacks.includes(snacksValues[1].val)} 
			    	className="contact-form__input contact-form__input--checkbox" 
			    	id={snacksValues[1].id} 
			    	name="snacks" 
			    	type="checkbox" 
			    	value={snacksValues[1].val}/>
			    <label className="contact-form__label contact-form__label--checkbox" htmlFor={snacksValues[1].id}>{snacksValues[1].text}</label>
		  </div>
		  <button className="contact-form__button" type="submit">Отправить сообщение!</button>
		  <output id="result" />
		</form>
	);
};
