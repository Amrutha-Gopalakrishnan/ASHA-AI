import React from 'react'



const Home = () => {
   

  return (
    <div>
      
      <section id='home'>
      <h1 className="fw-bold text-center">Welcome to ASHA AI</h1>
          <p className="lead text-center">Your AI-powered career assistant for women</p>
    <div className="container mt-1 d-flex justify-content-center align-items-center" style={{ minHeight: "30vh" }}>
      <div className="card text-center p-2 shadow" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          
          <p className="card-text fs-5">
            Asha AI is an intelligent chatbot designed to enhance user engagement on the JobsForHer Foundation platform.
            It provides seamless access to job listings, mentorship programs, community events, and career resources
            tailored for women...
          </p>
        </div>
      </div>
    </div>
  

      </section>
      <br></br>

      <section>
        <p className='fs-4 fw-bold text-center'>Success Stories</p>
        
        <div className="container pt-3">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {/* First Card */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/images/360_F_499463959_C7iVlJ7AwO1nYAoqv3mMakdZWoREvog5.jpg"
            className="card-img-top"
            alt="First"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          <div className="card-body">
            <p className='card-text text-center fs-4 fw-bold'>Priya Sharma</p>
            <p className="card-text">
            When I first started looking for jobs, I felt lost. I didn’t know where to begin, what skills to highlight, or how to stand out. That’s when I found ASHA AI. The chatbot guided me through resume building, suggested courses to improve my skills, and even fetched job listings tailored to my profile. Within weeks, I landed an interview for a position I never thought I was qualified for! ASHA AI made the job search process feel less overwhelming and more structured. It felt like having a personal career coach available 24/7. I can’t thank ASHA AI enough for being my virtual mentor!
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/images/Screenshot 2025-04-03 094228.png"
            className="card-img-top"
            alt="First"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          <div className="card-body">
            <p className='card-text text-center fs-4 fw-bold'>Neha Kapoor</p>
            <p className="card-text">
            When I moved to a new city, finding a job and building a professional network seemed impossible. That’s when I found ASHA AI. It was like having a personal mentor 24/7! I used the chatbot to explore job opportunities, attend virtual networking events, and even join a women’s leadership program. The support I received was beyond my expectations, and today, I’m thriving in my new role as an HR professional. ASHA AI isn’t just a website—it’s a movement that uplifts women’s careers!
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/images/pexels-photo-2381069.jpeg"
            className="card-img-top"
            alt="Second"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          <div className="card-body">
            <p className='card-text fs-4 fw-bold  text-center'>Aisha</p>
            <p className="card-text">
            I was always passionate about software development, but coming from a non-tech background, I felt lost. ASHA AI became my virtual career coach. The AI chatbot answered all my queries about coding bootcamps, free courses, and scholarships for women in tech. It even recommended companies that support diversity hiring! Today, I’m working as a junior software engineer, and I owe a huge part of my success to ASHA AI. It’s truly an empowering platform!
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
    <br></br>
  
      </section>

      
    </div>
  )
}

export default Home
