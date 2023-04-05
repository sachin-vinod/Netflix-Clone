import React, { useState } from 'react';
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {firebaseAuth} from "../utils/firebase-config";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [formValues,setFormVlaues] = useState({
        email:"",
        password:""
    });
    const nevigate = useNavigate();

    const handleLogIn = async () => {
        try{
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth,email,password);   // signInWithEmailAndPassword it is an API call
        } catch(err){
            console.log(err);
        }
    }

    onAuthStateChanged(firebaseAuth, (currUser)=>{
        if(currUser){
            nevigate("/");
        }
    });

    return ( 
        <Container >
            <BackgroundImage/>
            <div className="content">
                <Header/>
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container flex column">
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={formValues.email}
                                //below line will get fired when input in the field changed so tripple dot used to spread the object or we can say object destructuring and e.target.name=="email" and in object we are placing email: as new input and which is e.target.value where e.target is called as input element
                                onChange={(e)=>setFormVlaues({
                                    ...formValues,
                                    [e.target.name]:e.target.value,
                                })}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                value={formValues.password}
                                //below line will get fired when input in the field changed so tripple dot used to spread the object or we can say object destructuring and e.target.name=="email" and in object we are placing email: as new input and which is e.target.value where e.target is called as input element
                                onChange={(e)=>setFormVlaues({
                                    ...formValues,
                                    [e.target.name]:e.target.value,
                                })}
                            />
                            <button onClick={handleLogIn}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        hight: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
        .form-container{
            gap: 2rem;
            height: 85vh;
            .form{
                padding: 2rem;
                background-color: #000000b0;
                width:25vw;
                gap: 2rem;
                color: white;
            }
            .container{
                gap: 2rem;
                input{
                    padding: 0.5rem 1rem;
                    widht: 15rem;
                }
                button{
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    cursor: pointer;
                    color: white;
                    border-radius: 0.2rem;
                    font-weight: bolder;
                    font-size: 1.05rem;
                }
            }
        }
    }
`;

export default Login;