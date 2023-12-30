import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import Button from './button';
import '../styles/login.css'


function LoginForm() {

    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Username.length < 6) {
            setMessage('Username must be atleast 6 character long')
        } 

        else if (password.length < 8) {
            setMessage('password must be atleast 8 character long')
        }
        
        else {
            setMessage('Successful')
            setTimeout(() => {
                setMessage('')
            }, 2000);

            setUsername('')
            setPassword('')

            setTimeout(() => {

                navigate('/')
            }, 1000);
        }x  

    }





    return (
        < >
            <div className='FormGeneral'>
                <form onSubmit={handleSubmit}>
                    {message && <div className='success messsage'>{message}</div>}

                    <div className='username'>
                        <label>Username </label> <br />
                        <input type="text"
                            value={Username}
                            onChange={(e) => setUsername(e.target.value)}
                            id='usernameinputbox'
                        />
                    </div>

                    <div className='password'>
                        <label>Password</label> <br />
                        <input required
                            type={visible ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id='passwordinputbox'
                        />
                        <div className='eyeicon' onClick={() => setVisible(!visible)}>
                            {

                                visible ? <FaRegEye /> : <FaRegEyeSlash />
                            }
                        </div>
                    </div>


                    <div className='checkbox'>
                        <div>
                            <input type="checkbox" name="Rememeber Me" id="" />
                            <span>Rememeber Me</span> <span></span>
                        </div>
                        <div>Forgot password?</div>
                    </div>

                    <Button
                        text={'Login'} myBg={'black'} textcolor={'white'} myborder={'none'} myborderradius={'5px'} mypadding={'8px 120px'} mymargin={'15px 0px 40px'}
                        type={'submit'}
                    />
                </form>
            </div>
        </>
    )
}

export default LoginForm