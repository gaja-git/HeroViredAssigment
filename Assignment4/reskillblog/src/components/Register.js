function Register(){
    return(
        <div>
            <h1>Register for Reskill</h1>
            <form>
            <label className="inputcss">UserName: <input type="text"/></label><br></br>
                <label className="inputcss">Lastname: <input type="text"/></label><br></br>
                <label className="inputcss">Email   :<input type="email"/></label><br></br>
                <label className="inputcss">Address :<textarea></textarea>
                </label><br></br>
                <input type="submit" value="Click "/>
               
                 <a href="ReskillBlog.html" >Return to Reskilling</a> 
            </form>          
            
        </div>
    )
}

export default Register;