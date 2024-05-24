import './Login.css'
import React, { useState } from 'react';
import logo from './img/face.png'
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };

        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token);

                    // Rediriger vers le tableau de bord
                    navigate('/anime');
            } else {
                setError('Erreur: JWT non reçu');
            }
        } else {
            // Gérer les erreurs d'authentification
            setError('Erreur lors de l\'authentification');
            console.log(response.ok);
            console.log(response);
        }
    };




    return(
    <div className='login_div'>
        <div style={{width: 1473, height: 768, left: 0, top: 0, position: 'absolute', background: 'white'}} />
        <div style={{width: 544, height: 702, left: 465, top: 50, position: 'absolute', background: '#333333', borderRadius: 45}} />
        <div style={{width: 573, left: 450, top: 123, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Connectez-vous à votre compte</div>
        <div style={{width: 467, height: 470, left: 503, top: 259, position: 'absolute', background: 'rgba(0, 0, 0, 0.56)', borderRadius: 45}} />
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Pseudo' className='pseudo_input pa' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type='password' placeholder='Mot de passe' className='pseudo_input password_input' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type='submit' value='Se connecter' className='button_style'/>
        </form>
        <div style={{width: 130, height: 130, left: 672, top: 194, position: 'absolute', background: '#FFEA00', borderRadius: 95}} />
        <img style={{width: 130, height: 130, left: 672, top: 194, position: 'absolute'}} src={logo} />
    </div>
    )
}

export default Login;