import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import './styles.css'

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img className="img" src={logo} alt="Aqui uma logo"></img>
                </header>

                <main>
                    <h1>Sua Plataforma de integração</h1>
                    <p>Ajudamos trabalhadores a encontrarem capacitações e vagas.</p>

                    <Link to="/create-company">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre sua empresa</strong>
                    </Link>
                </main>
                
            </div>
        </div>
    )
}

export default Home;