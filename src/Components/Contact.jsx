import React from 'react'

function Contact() {
  const handleSubmit = ()=>{
    
  }
  return (
    <div>
      <h1>Contact</h1>
      <p>Atlas 1031 Exchange has proudly served clients seeking I.R.C § 1031 counsel as Qualified Intermediaries with precision and excellence for over 18 years. We often personally meet with clients, and speak at educational events on “Tax Deferred Exchanges.”</p>
      <h3><b>Email:</b>info@atlas1031.com</h3>
      <h3>Naples Office</h3>
      <p>1908 Timarron Way, Naples, FL 34109</p>
      <div>
        <h2>Contact us by filling this Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name :
            <input type="text" id='fname' />
          </label>
          <br />
          <label>
            Last Name :
            <input type="text" id='lname' />
          </label>
          <br />
          <label>
            Ph No. :
            <input type="number" id='phone' />
          </label>
          <br />
          <label>
            Email :
            <input type="text" id='Email' />
          </label>
          <input type="submit" />

        </form>
      </div>
    </div>
  )
}

export default Contact
