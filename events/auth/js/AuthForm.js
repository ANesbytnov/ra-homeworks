'use strict';

const AuthForm = props => {

	function changePass(e) {
		e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9_]/ig, '');
	}

	function changeEmail(e) {
		e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9@\.,_-]/ig, '');
	}

	let form;

	function submitForm(e) {
		e.preventDefault();

		if (props.onAuth && typeof(props.onAuth) === 'function') {
			props.onAuth({
				name: form.querySelector('input[type="text"]').value,
				email: form.querySelector('input[type="email"]').value,
				password: form.querySelector('input[type="password"]').value
			});
		}
	}

	return (
		<form ref={element => form = element} onSubmit={submitForm} className="ModalForm" action="/404/auth/" method="POST">
		  <div className="Input">
		    <input 
		    	required 
		    	type="text" 
		    	placeholder="Имя" />
		    <label></label>
		  </div>
		  <div className="Input">
		    <input 
		    	type="email" 
		    	onChange={changeEmail} 
		    	placeholder="Электронная почта" />
		    <label></label>
		  </div>
		  <div className="Input">
		    <input 
		    	required 
		    	type="password" 
		    	onChange={changePass} 
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
