import './Form.css'

const Form = () => {
  return (
    <div className='form__home'>
        <form class="login-form">
            <div class="textbox">
                <input type="text" placeholder="Nome" />
            </div>
            <div class="textbox">
                <input type="email" placeholder="E-mail" />
            </div>
            <button type="submit">Inscrever</button>
        </form>
    </div>
  )
}

export default Form