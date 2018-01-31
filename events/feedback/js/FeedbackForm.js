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

	let nameField, emailField, messageField, form;

	function save2JSON(e) {
		e.preventDefault();
		
		const salutationField = form.querySelector('input[type=radio]:checked'),
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
	  	<div ref={element => form = element}>
		  	<form class="content__form contact-form" onSubmit={save2JSON}>
			  <div class="testing">
			    <p>Чем мы можем помочь?</p>
			  </div>
			  <div class="contact-form__input-group">
			  	{salutationValues.map((obj) => {
			  		return (
				  		<span>
				  			<input defaultChecked={obj.val === props.data.salutation} class="contact-form__input contact-form__input--radio" id={obj.id} name="salutation" type="radio" value={obj.val}/>
				    		<label class="contact-form__label contact-form__label--radio" htmlFor={obj.id}>{obj.val}</label>
				  		</span>
				  	);
			  	})}
			  </div>
			  <div class="contact-form__input-group">
			    <label class="contact-form__label" htmlFor="name">Имя</label>
			    <input 
			    	ref={element => nameField = element}
					class="contact-form__input contact-form__input--text" 
					id="name" 
					name="name" 
					type="text" 
					value={props.data.name}/>
			  </div>
			  <div class="contact-form__input-group">
			    <label class="contact-form__label" htmlFor="email">Адрес электронной почты</label>
			    <input 
			    	ref={element => emailField = element}
			    	class="contact-form__input contact-form__input--email" 
			    	id="email" 
			    	name="email" 
			    	type="email" 
			    	value={props.data.email}/>
			  </div>
			  <div class="contact-form__input-group">
			    <label class="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
			    <select class="contact-form__input contact-form__input--select" id="subject" name="subject">
			      {subjectValues.map((val) => <option selected={val === props.data.subject}>{val}</option>)}
			    </select>
			  </div>
			  <div class="contact-form__input-group">
			    <label class="contact-form__label" htmlFor="message">Ваше сообщение</label>
			    <textarea 
			    	ref={element => messageField = element}
			    	class="contact-form__input contact-form__input--textarea" 
			    	id="message" 
			    	name="message" 
			    	rows="6" 
			    	cols="65">{props.data.message}</textarea>
			  </div>
			  <div class="contact-form__input-group">
			    <p class="contact-form__label--checkbox-group">Хочу получить:</p>
			  	{snacksValues.map((obj) => {
			  		return (
				  		<span>
						    <input defaultChecked={props.data.snacks.includes(obj.val)} class="contact-form__input contact-form__input--checkbox" id={obj.id} name="snacks" type="checkbox" value={obj.val}/>
						    <label class="contact-form__label contact-form__label--checkbox" htmlFor={obj.id}>{obj.text}</label>
				  		</span>
				  	);
			  	})}
			  </div>
			  <button class="contact-form__button" type="submit">Отправить сообщение!</button>
			  <output id="result" />
			</form>
		</div>
	);
};
