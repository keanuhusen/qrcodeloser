'use client';
// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

function Survey() {
  // const [state, handleSubmit] = useForm("xzzbzlny");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  const handleSubmit = () => {
    alert('fake form fill... gotcha again!');
  }
  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <label htmlFor="">Where did you scan this QR code?</label>
        <br />
        <select name="" id="">
          <option value="">Atlanta</option>
          <option value="">Birmingham</option>
          <option value="">Chicago</option>
          <option value="">Dallas/Fort Worth</option>
          <option value="">Houston</option>
          <option value="">Los Angeles</option>
          <option value="">Nashville</option>
          <option value="">New York</option>
          <option value="">Orlando</option>
          <option value="">Phoenix</option>
          <option value="">San Diego</option>
          <option value="">San Francisco/San Jose</option>
          <option value="">Seattle</option>
        </select>
        <br />
        <input type="submit" value="Submit" className="px-4 py-2 text-white bg-[#E94B3C]"/>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form> */}
    </>
  );
}

export default Survey;