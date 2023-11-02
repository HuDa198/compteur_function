import React,{ useState} from 'react';
import Valeur from './valeur.jsx';
import './compteur.css';


export default function Compteur(){
    const [compteur,setCompteur]=useState(0);
    const [pasI,setPasI]=useState(1);
    const [pasD,setPasD]=useState(1);

        return <div id='container'>
                    <Valeur c={compteur}/>
                    <div className='btns'>
                        <button onClick={()=>setCompteur(c=>c+pasI)}>Incrementer</button>
                        <button onClick={()=>setCompteur(c=>c-pasD)}>Decrementer</button>
                        <button onClick={()=>(setCompteur(0),setPasD(1),setPasI(1))} disabled={compteur===0}>Initialiser</button>
                    </div>

                    <fieldset className='btns' >
                        <legend>Pas d'incrementation</legend>
                        <button onClick={()=>setPasI(1)} disabled={pasI===1}>1</button>
                        <button onClick={()=>setPasI(2)} disabled={pasI===2}>2</button>
                        <button onClick={()=>setPasI(3)} disabled={pasI===3}>3</button>
                        <button onClick={()=>setPasI(4)} disabled={pasI===4}>4</button>
                    </fieldset> 

                    <fieldset className='btns'>
                        <legend>Pas decrementation</legend>
                        <button onClick={()=>setPasD(1)} disabled={pasD===1}>1</button>
                        <button onClick={()=>setPasD(2)} disabled={pasD===2}>2</button>
                        <button onClick={()=>setPasD(3)} disabled={pasD===3}>3</button>
                        <button onClick={()=>setPasD(4)} disabled={pasD===4}>4</button>
                    </fieldset> 


                </div>
    }
