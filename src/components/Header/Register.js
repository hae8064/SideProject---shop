import React, {useState} from 'react';
import "../../App.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onpasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            return alert("비밀번호가 일치하지 않습니다 !")
        }
    }
    return (
        <div className='loginRegister'>
            <div>
                <input type="text" name='name' placeholder='이름' vlaue = {name} onChange={onNameHandler} className="loginRegister_input"/>
            </div>
            <div>
                <input type="email" name='email' placeholder='이메일' vlaue = {email} onChange={onEmailHandler} className="loginRegister_input"/>
            </div>
            <div>
                <input type="password" name='password' placeholder='비밀번호' vlaue = {password} onChange={onpasswordHandler} className="loginRegister_input"/>
            </div>
            <div>
                <input type="password" name='confirmPassword' placeholder='비밀번호 확인' vlaue = {confirmPassword} onChange={onConfirmPasswordHandler} className="loginRegister_input"/>
            </div>
            <div>
                <button type='submit' onSubmit={onSubmit} className="loginRegister_button">회원가입</button>
            </div>
        </div>
    );
}

export default Register;