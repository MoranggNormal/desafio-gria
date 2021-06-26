import sendSucessImg from '../assets/images/info.png'
import Button from '../components/Button'

import '../styles/modal.scss'

const Modal = ({closeModal}) => {
  return (
    <div className="modal">
    <img src={sendSucessImg} alt="Cadastro realizado com sucesso." />

      <small>Cadastro realizado com sucesso!</small>

      <p>O link de confirmação foi enviado para o e-mail ******ail@email.com</p>

      <Button
      type="button"
      onClick={() => closeModal}
      >Fechar</Button>
    </div>
  )
}

export default Modal
