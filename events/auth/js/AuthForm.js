'use strict';

const AuthForm = props => {

	function changePass(e) {
		e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9_]/ig, '');
	}

	function changeEmail(e) {
		e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9@\.,_-]/ig, '');
	}

	let nameField, emailField, passField;

	function submitForm(e) {
		e.preventDefault();

		if (props.onAuth && typeof(props.onAuth) === 'function') {
			props.onAuth({
				name: nameField.value,
				email: emailField.value,
				pass: passField.value
			});
		}
	}

	return (
		<form onSubmit={submitForm} className="ModalForm" action="/404/auth/" method="POST">
		  <div className="Input">
		    <input 
		    	ref={element => nameField = element}		    	
		    	required 
		    	type="text" 
		    	placeholder="Имя" />
		    <label></label>
		  </div>
		  <div className="Input">
		    <input 
		    	ref={element => emailField = element}
		    	type="email" 
		    	onChange={changeEmail} 
		    	placeholder="Электронная почта" />
		    <label></label>
		  </div>
		  <div className="Input">
		    <input 
		    	ref={element => passField = element}
		    	required 
		    	onChange={changePass} 
		    	type="password" 
		    	placeholder="Пароль" />
		    <label></label>
		  </div>
		  <button type="submit">
		    <span>Войти</span>
		    <i className="fa fa-fw fa-chevron-right"></i>
		  </button>
		</form>
	);  	
}
