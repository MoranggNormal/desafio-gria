import Input from '../components/Input'
import Button from '../components/Button'
import GriaLogo from '../assets/images/logo.png'

import '../styles/SignUp.scss'

const SignUp = () => {
  return (
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

      <form>
      <Input
        type="text"
        placeholder="CPF"
      />
      <Input
        type="text"
        placeholder="E-mail"
      />
      <Input
        type="password"
        placeholder="Senha"
      />
      <Input
        type="password"
        placeholder="Confirmar senha"
      />

      <Button
      type="submit">CADASTRAR</Button>

      <Button
      type="button"
      className="no-bg">JÁ POSSUI CADASTRO? FAÇA SEU LOGIN AQUI</Button>

      </form>

     </div>
  )
}

export default SignUp
