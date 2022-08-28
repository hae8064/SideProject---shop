import React, {useState} from 'react';
import "../../App.css";
import Header from './Header';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
        <Header />
            <div className='loginRegister'>
                <form>
                    <div>
                        <input type="email" name="email" placeholder='이메일' value={email} onChange={onEmailHandler} className="loginRegister_input"/>
                    </div>
                    <div>
                        <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginRegister_input"/>
                    </div>
                    <div>
                        <button type='submit' onSubmit={onSubmit} className="loginRegister_button">로그인</button>
                    </div> 

                </form>
            </div>
        </>
    )
}

export default Login;