import React, { useEffect, useState } from "react";
import CaracterAPI from "../../services/api";
import './ConteudoStyle.css';

export function Conteudo(){
    const [response, setResponse] = useState([]);
    const [btn, setBtn] = useState(true);
    var conteudo = [];

    useEffect(()=>{
        CaracterAPI.get('')
        .then((response)=>{
            setResponse(response.data.results);
        })
        .catch((erro)=>{
            console.log('Ocorreu um Erro!');
        })
    }, [btn]);

    conteudo = response.slice(0, 10);

    return(
        <section className='container-conteudo'>
            <div className='title'>
                <h1>PERFIS CADASTRADOS 📋</h1>
                <button onClick={()=>{ btn? setBtn(false) : setBtn(true)}}>Gerar novos perfis</button>
            </div>
            <div className='container-perfis'>
                {conteudo.map(resp => {
                    return  <div className='perfis'>
                                <img src={resp.picture.medium} alt='Perfil' />
                                <p>{resp.name.first} {resp.name.last} </p>
                                <p>from {resp.location.state}, {resp.location.country} </p>
                            </div>
                    })
                }
            </div>
        </section>
    )
};

