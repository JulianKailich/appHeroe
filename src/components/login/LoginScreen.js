
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

import './login.css';



export const LoginScreen = () => {


  const {dispatch} = useContext(AuthContext)
  
  

  const navigate = useNavigate (); 

  const handleLogin = () => {

     const action = {

       type: types.login,
       payload: {
           name: 'Julian'
        }
       }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        navigate(lastPath, {

              replace: true
              
        });
   
  };



    return (
      <div className="container mt-5">
  
              <h1 className="text-center">Login Screen</h1>
              <hr />

              <div className="text-center mt-5">

                <h3>Hey! Thanks for coming. Enjoy some heroes.</h3>
                <p className="plogin">Developed by Julián Kailich.</p>
                <button className="btn btn-primary text-center mt-5" onClick={ handleLogin }>Login</button>

              </div>
      </div>
    )
  };