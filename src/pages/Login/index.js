/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Api from '../../Api';

import {AreaLogin} from './styled'
import {BtnDefaultIcons} from '../../components/Styled';
import {BtnDefault} from '../../components/Styled';
import FacebookIcon from '@material-ui/icons/Facebook'; //tem que instalar a biblioteca: npm install @material-ui/icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();
        
        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }
    return (
        <BrowserRouter>
           <Switch>
               <Route exat path="/registrar">
                   <AreaLogin>
                   <h1 className="organize">
                       <Link to="/"><ArrowBackIosIcon /></Link>
                       Crie sua conta
                    </h1>

                   <p>Crie sua conta, é grátis!</p>

                   <form>
                        <div className="form--imput">
                            <label>Nome</label>
                            <input type="text" />
                        </div>
                        <div className="form--imput">
                            <label>E-mail</label>
                            <input type="email" />
                        </div>

                            

                        <div className="form--imput">
                            <label>Senha</label>
                            <input type="password" />
                        </div>

                        <BtnDefault>Comece Agora!</BtnDefault>

                        <div className="footerLogin">
                            Já tem uma conta?
                            <Link to="/">Fazer Login</Link>
                        </div>
                    </form>
                   </AreaLogin>

               </Route>

               <Route exat path="*">
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>

                        <BtnDefaultIcons>
                            <FacebookIcon />
                            <div className="center">Fazer login com Facebook</div>
                        </BtnDefaultIcons>

                        <BtnDefaultIcons onClick={actionLoginGoogle}>
                            <FacebookIcon />
                            <div className="center">Fazer login com Google</div>
                        </BtnDefaultIcons>

                        <p>OU</p>

                        <form>
                            <div className="form--imput">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Entrar</BtnDefault>

                            <div className="footerLogin">
                                Não tem uma conta?
                                <Link to="/registrar">Registre-se</Link>
                            </div>
                        </form>


                    </AreaLogin>

               </Route>

           </Switch>
           
        </BrowserRouter>
        
    );
}