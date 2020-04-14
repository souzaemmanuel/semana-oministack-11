import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [value, setValue] = useState('');
   const ongId = localStorage.getItem('ongId');
   const history = useHistory();

   async function createIncident(e) {
      e.preventDefault();

      const data = {
         title,
         description,
         value
      };

      try {
         await api.post('incidents', data, {
            headers: {
               Authorization: ongId
            }
         });

         history.push('/profile');

      } catch (error) {
         alert('Erro ao cadastrar um caso, tente novamente.')
      }
   }

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logo} alt="be the hero" />
               <h1>Cadastrar novo caso</h1>
               <p>
                  Descreva o caso detalhadamente para encontra um herói para resolver isso.
               </p>

               <Link className="back-link" to='/profile'>
                  <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                      Voltar para home
                  </Link>
            </section>
            <form onSubmit={createIncident}>
               <input value={title} onChange={e => { setTitle(e.target.value) }} placeholder="Título do caso" />
               <textarea value={description} onChange={e => { setDescription(e.target.value) }} placeholder="Descrição" />
               <input value={value} onChange={e => { setValue(e.target.value) }} placeholder="Valor em reais" />

               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}