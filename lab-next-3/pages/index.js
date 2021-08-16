import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function SubmitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqbody = { email: enteredEmail, text: enteredFeedback };
    fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(reqbody),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={SubmitFormHandler}>
        <div>
          <label> Your Email Address</label>
          <input type="email" id='email' ref={emailInputRef} />
        </div>
        <div>
          <label> Your Feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Sned Feedback</button>
      </form>
    </div>
  )
}

export default HomePage;