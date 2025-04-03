import React from 'react'

const Contact = () => {
     
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "93f08afe-079b-4a20-b6be-2726b81e72b9");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      
        return (
          <div>
             <section id='contact' >
             <h1 className="text-center fw-bold mt-4 pt-4">Contact Us</h1>
        
             <div className=" d-flex justify-content-center align-items-center mt-2 pt-2 ">
      <div className="card shadow p-4" style={{ width: "800px" }}>
       
        <div className='container'>
            <p className='fs-5 pt-3 text-center'>✨ASHA AI didn’t just find you jobs; it empowered you with knowledge and confidence to achieve your dreams.✨</p>
            </div>
        <form className="form-control border-0" onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Your Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Your Email</label>
            <input type="email" name="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Your Message</label>
            <textarea name="message" className="form-control" rows="4" required></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary px-4 py-2" type="submit">
              Submit Form
            </button>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </div>
     

           
      </section>
      <br></br>
      <br></br>
          </div>
        );
      }
  

export default Contact 
