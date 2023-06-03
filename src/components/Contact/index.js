import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import styles from "./Contact.module.css"
import axios from 'axios'

const Contact = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    mailSent: false,
    error: null,
  })

  const updateInput = (e) => {
    let field = e.target.name;
    let val = e.target.value;
    setState({ ...state, [field]: val });
        setState({ ...state, [field]: val });
  }
  const API_PATH = '/send';
  const handleFormSubmit = (e) => {
      e.preventDefault();
      axios({
          method: "POST",
          url:API_PATH,
          data: {
            name: state.name,
            email: state.email,
            message: state.message,
          }
      }).then((response)=>{
          if (response.data.msg === 'success'){
              alert("Email sent!");
              // this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Oops, something went wrong. You can manually send an email to contact@raymondmagic.com")
          }
      }).catch(error => {
          alert(`Oops, something went wrong. You can manually send an email to contact@raymondmagic.com`)
      })
        // setState({ ...state, mailSent: result.data.sent });
        // setState({ ...state, error: error.message })
        setState({ ...state,
          name: "",
          email: "",
          message: ""
        })
  }

  return (
    <div className={styles.Contact}>
      <section className={styles.first}>
        <h1>Contact</h1>
        <p>Have a question? Requests? I’d love to hear from you. Send me a note by filling out the following form. I will get back to you as soon as possible.</p>
      </section>
      <section className={styles.form}>
        <form onSubmit={handleFormSubmit}>
          <p>Name</p>
          <input
            type='text'
            name='name'
            onChange={updateInput}
            value={state.name}
          />
        <p>Email</p>
          <input
            type='text'
            name='email'
            onChange={updateInput}
            value={state.email}
          />
        <p>Message</p>
          <textarea
            id="subject"
            type='text'
            name="message"
            onChange={updateInput}
            value={state.message}
          >
          </textarea>
        <button type="submit">Send</button>
        </form>

      </section>
    </div>
  )
}

export default Contact
