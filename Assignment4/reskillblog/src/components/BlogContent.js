import './Blog.css';
import './Register'
import Register from './Register';

function BlogContent(){
 return (
<div className="row">
  <div className ="leftcolumn">
    <div className="card" >
      <h2>What is Reskilling?</h2>
      
      <div className="fakeimg" ></div>
        <p>Unlike upskilling, which focuses on adding to an existing skill set within a role (for instance, due to new technology), reskilling refers to <i><u>the process of learning new skills needed to do an entirely different job.</u></i> 
        </p>
        <p>Reskilling has become a buzzword among governments and nonprofits as a way to help left-behind workers find new careers. But it’s also an essential strategy for organizations to meet their staffing needs and succeed in a changing world. For individual employees, reskilling can present opportunities to change roles in their current organization or at a new company. 
         Examples of reskilling can cover anything from retail store workers retraining as customer support specialists, to warehouse workers becoming robot technicians, to accountants becoming data scientists.
        </p>
        <p>Organization like Yubi launched new reskilling for women returnee. <a href ="https://www.go-yubi.com/careers/back2epic/">Checkout of the website for it </a></p>
    
    </div>
    <div className="card">
      <h2>Why Reskilling?</h2>
      
      <p>Skill development has always been important, but COVID-19 has increased the stakes. It dramatically expedited the process of digitization. The pandemic left no choice for companies that were previously reluctant to switch from legacy systems to new cloud-based platforms. </p>
  
      <p><i></i><u>Embracing digital transformation and the integration of new technology into business practices is now every leader’s responsibility, regardless of job function or industry.</u><i></i></p>
        
      <p>   This digital transformation led to a sharp rise in the development of new systems and software, reducing the shelf-life of current technical skills and creating a demand for new skill sets.</p>
        
      <p>   Digital transformation has increased the demand for digital skills such as AI and machine learning, as they drive productivity, automate processes, and perform complex computational tasks quickly. Organizations must invest in their workforce reskilling to adapt to these changing conditions. Otherwise, they stand to lose market position and fade to their competition.</p>
        
    </div>
    <div className="card" >
        <h2>Benefits of reskilling</h2>
       
        <p> Meeting future demand of technology with current world projects.</p>           
        <p> Job security as we have right skill in place we can be confident about the job we are in.</p>
        <p>Also I came across interesting and benifical fact on reskilling on the site below. 
        Find the link for the same. <a href="https://www.gktoday.in/topic/reskilling-revolution-initiative/#:~:text=investing%20in%20skills%3F-,What%20is%20Reskilling%20Revolution%20initiative%3F,realizing%20the%20gains%20of%20skilling.">
        <b><i>Reskilling Revolution initiative</i></b></a></p>
            
    </div>
  </div>
  <div  className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      
      <p>Hi I being a career returnee and now enrolled for Yubi's Back2Epic program with reskilling, happy to share the essence of reskilling </p>
    </div>
    <div className="card">
      <h3>Why waiting Register </h3>
      <p>
        Incase you are looking for reskilling on new skills, please click the link below <br/>
        <a href="login.html"><b>Register</b></a>
        {/* <Register></Register> */}
       </p>
      
      
    
  </div>
</div>
</div>
 )
}

export default BlogContent;