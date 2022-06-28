import { useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Button from '../../Components/button.jsx'
import { signInGoogle } from "./authentication.js"

function Login() {
  const navigate = useNavigate()
  const logOn = async (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        navigate("/feed");
        console.log("entrou")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <header className='headerLogin'>
        <h1 className='welcome'>Bem-vindos</h1>
      </header>
      <main className='mainLogin'>
        <label className='labelLogin'>Faça seu login com o Google: </label>
        <Button onClick={logOn}> <FcGoogle />Google</Button>
      </main>
    </>

  )

}
export default Login