import React from 'react';

class BlogFooter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="footer">
        <a href="https://www.facebook.com" className="fa fa-facebook" ></a>
        <a href="https://www.twitter.com" className="fa fa-twitter"  ></a>
        <a href="https://www.google.com" className="fa fa-google"  ></a>
        <a href="https://www.linkedin.com" className="fa fa-linkedin"  ></a>
        <a href="https://www.youtube.com" className="fa fa-youtube" ></a>
  
        </div>
        )
    }
}

export default BlogFooter;
