import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Modal from '../components/Modal'
import GriaLogo from '../assets/images/logo.png'
import LeftArrow from '../assets/images/left-arrow.svg'
import Foto from '../assets/images/cadastro.png'
import sendSucessImg from '../assets/images/info.png'

import '../styles/SignUp.scss'

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [validateCpf, setValidateCpf] = useState(false);
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const [modal, setModal] = useState(false);

  function cpfIsValid(cpf){
    if(cpf.length < 11){
       return setValidateCpf(false)

    }
    setValidateCpf(true)

  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    if(!re.test(email)){
       setEmail(false)
       return
    }
    setEmail(true)
  }

  function verifyPass(){
    if(pass !== confirmPass){
      setValidPass(false)
      return
    }
    setValidPass(true)
  }

  function handleSubmit(e){
    e.preventDefault();
    setModal(true)
  }

  return (
    <>
    <span className="prev-page">
        <img src={LeftArrow} alt="Retornar à última página" />
        <h5>Retornar</h5>
    </span>

  {modal &&

    <div className="modal">
    <img src={sendSucessImg} alt="Cadastro realizado com sucesso." />

      <small>Cadastro realizado com sucesso!</small>

      <p>O link de confirmação foi enviado para o e-mail ******ail@email.com</p>

      <Button
      type="button"
      onClick={() => setModal(false)}
      >Fechar</Button>
    </div>

  }




    <div className="is-desktop">

    <img src={Foto} alt="Cadastre-se na Gria" />

    </div>


    <div className="bg-form">

      <div>
        <div>
          <h1>Cadastrar Candidato</h1>
          <h4>Cadastre-se e encontre a oportunidade que deseja.</h4>
        </div>
        <span>
          <img src={GriaLogo} alt="Imagem promocional Gria" />
        </span>
      </div>

      <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="CPF"
        onChange={e => setCpf(e.target.value)}
        onBlur={() => cpfIsValid(cpf)}
        className={validateCpf ? "is-valid" : "is-invalid"}
      />
      <Input
        type="email"
        placeholder="E-mail"
        id="email"
        onChange={e => setEmail(e.target.value)}
        onBlur={() => validateEmail(email)}
        className={email ? "is-valid" : "is-invalid"}
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={e => setPass(e.target.value)}
        className={!validPass && "is-invalid"}
      />
      <Input
        type="password"
        placeholder="Confirmar senha"
        onChange={e => setConfirmPass(e.target.value)}
        onBlur={verifyPass}
        className={!validPass && "is-invalid"}
      />

      <Button
      type="submit"
      disabled={(!email || !validateCpf || !validPass) && "false"}
      >CADASTRAR</Button>

      <Button
      type="button"
      className="no-bg">JÁ POSSUI CADASTRO? FAÇA SEU LOGIN AQUI</Button>

      </form>

     </div>

     </>
  )
}

export default SignUp
