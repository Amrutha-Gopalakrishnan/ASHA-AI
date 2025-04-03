import React from 'react'

const Jobs = () => {
  return (
    <div>

        <section>
        
        <div className="container mt-5">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {/* First Card */}
        <div className="card" style={{ width: "20rem" }}>
          <img
            src="/jobs/google.jpg.png"
            className="card-img-top img-fluid"
            alt="First"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          
          <div className="card-body">
          <a href='https://www.google.com/about/careers/applications/' className='fw-bold fs-3 text-decoration-none d-flex justify-content-center align-items-center text-primary'>Google</a>

          
            <p className="card-text fs-4 fw-bold text-center mt-1">Hiring</p>
          
            <p className='card-text fs-5 fw-bold'>Role:</p>
            <ol>
                <li>Software Engineer</li>
                <li>Data Scientist</li>
                <li>Product Manager</li>
            </ol>
           
           <p className='card-text fs-5 fw-bold'>Domains:</p>
           <ol>
           <li>Cybersecurity</li>
           <li>Cloud Computing</li>
           <li>Artificial Intelligence</li>
           </ol>
        
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="/jobs/amazon.jpg"
            className="card-img-top img-fluid"
            alt="First"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          
          <div className="card-body">
            <a href='https://www.amazon.jobs/en/' className='fw-bold fs-3 text-decoration-none d-flex justify-content-center align-items-center text-primary'>Amazon</a>
           
            <p className="card-text fs-4 fw-bold text-center mt-1">Hiring</p>
            
            <p className='card-text fs-5 fw-bold'>Role:</p>
            <ol>
                <li>Cloud Engineer</li>
                <li>DevOps Engineer</li>
                <li>Marketing Specialist</li>
            </ol>
           
           <p className='card-text fs-5 fw-bold'>Domains:</p>
           <ol>
           <li>Automation</li>
           <li>Cloud Computing</li>
           <li>AI & Machine Learning</li>
           </ol>
          
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img
            src="/jobs/new.jpeg"
            className="card-img-top img-fluid"
            alt="First"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          
          <div className="card-body">
            <a href='https://careers.microsoft.com/v2/global/en/home.html' className='fw-bold fs-3 text-decoration-none d-flex justify-content-center align-items-center text-primary'>Microsoft</a>
           
            <p className="card-text fs-4 fw-bold text-center mt-1">Hiring</p>

            <p className='card-text fs-5 fw-bold'>Role:</p>
            <ol>
                <li>Software Engineer</li>
                <li>AI Devolper</li>
                <li>Cybersecurity Analyst</li>
            </ol>
           
           <p className='card-text fs-5 fw-bold'>Domains:</p>
           <ol>
           <li>Enterprise Software</li>
           <li>Cloud Computing</li>
           <li>AI & Machine Learning</li>
           </ol>
          </div>
        </div>

        
      </div>
      
    </div>
      </section>

      
    </div>
  )
}

export default Jobs
