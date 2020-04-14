import React, { useState } from 'react';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import './styles.css';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            let name = response.data.name;
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login tente novamente.');
        }
    }

    
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit"> Entrar</button>

                    <Link className="back-link" to='/register'>
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="be the hero" />
        </div>
    )
}