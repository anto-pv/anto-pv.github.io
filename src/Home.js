import React,{ useState } from 'react';
import hand from './images/contactimg.svg';
import youtube from './images/social/youtube.svg';
import linkedin from './images/social/linkedin.svg';
import github from './images/social/github.svg';
import instagram from './images/social/instagram.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const submit = async(e) => {
    e.preventDefault();
    if(name === "" ||email === ""||message === ""){
      console.log("empty");
      toast.info('Fields are empty');
    }
    else{
      setLoader(true)
      console.log(name, message,email);
      await fetch('https://formsubmit.co/ajax/antopv833@gmail.com', {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
    })
    .then((response) => {
      if(response.status === 200){
          toast.info("Sent! I will reply soon...")
          setLoader(false);
          return response.json(); 
      }else if(response.status === 408){
        toast.info("Something Went Wrong..Could you try once again.");
          setLoader(false);
      }
    })
  };
  };

  return (
    <div id = "home">
      <div id ="about" className = "about">
        <div><p>
        I am <b>Anto P V</b>.
        Currently in 3<sup>rd</sup> year Computer Science Undergraduate at <b>Mar Athanasius College of Engineering, kothamangalam</b>.<br/>
        I am Programmer, Web Developer with creative,analytical, dynamic, curious, strict in my purposes, with the
        ability to work in a team, with service, persistent,
        committed to the ability to adapt well to different environments
        and situations. High sense of responsibility, interpersonal relationships, sense of leadership and willingness
        to acquire new skills.
        </p></div>
      </div>
      <div id="contact" className="contact">
        <p><img src={hand} alt="hand"/>
        Have a new project or just say hi?</p>
        Get in touch &#8594;
        <form id="submit-form" className="formsubmit">
          <input type="hidden" name="_subject" value="New submission on profile!"/>
          <input type="text" className="fname" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} required/>
          <input className="fname" type="email" value={email}  placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
          <textarea className="tname" value={message} placeholder="Message" required onChange={(e)=>setMessage(e.target.value)}/>
          <button type="submit" onClick={submit} value="Submit" style={{background: loader ?  "rgb(51, 255, 102)": "#ffffff"}}> Submit</button>
        </form>
      </div>
      <div className="social">
         <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/anto-pv"><img src={linkedin} alt="linkedin"/></a>
         <a target='_blank' rel="noreferrer" href="https://github.com/anto-pv"><img src={github} alt="linkedin"/></a>
         <a target='_blank' rel="noreferrer" href="https://www.instagram.com/anto_p_v"><img src={instagram} alt="linkedin"/></a>
         <a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UC_9r3s3zO9lHgtKAvBX-5Aw"><img src={youtube} alt="linkedin"/></a>
      </div>
    </div>
  );
}

export default Home;