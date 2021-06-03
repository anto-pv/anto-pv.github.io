import React,{ useState } from 'react';
import Me from './components/me';
import hand from './images/contactimg.svg';
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
      await fetch('https://formsubmit.co/ajax/antopv833@gmail.com', {
        method: 'post',
        body: {
          name: name,
          email: email,
          message: message
        },
        headers:{
          "Content-Type": "application/json"
        }
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
      .catch(error => console.log(error));
  };
  };

  return (
    <div id = "home">
      <Me/>
      <div className = "about">
        <div><p>
        I am Anto P V.
        Currently in 3<sup>rd</sup> year Computer Science Undergraduate at <b>Mar Athanasius College of Engineering, kothamangalam</b>.<br/>
        I am Programmer, Web Developer with creative,analytical, dynamic, curious, strict in my purposes, with the
        ability to work in a team, with very good service, persistent,
        committed to the ability to adapt well to different environments
        and situations. High sense of responsibility, excellent
        interpersonal relationships, sense of leadership and willingness
        to acquire new skills.
        </p></div>
      </div>
      <div id="contact">
        <p><img src={hand} alt="hand"/>
        Have a new project or just say hi?</p>
        Get in touch -&gt;
        <form id="submit-form">
          <input type="hidden" name="_subject" value="New submission on profile!"/>
          <input type="text" className="fname" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} required/>
          <input className="fname" type="email" value={email}  placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
          <textarea id="msg" className="fname" value={message} placeholder="Message" required onChange={(e)=>setMessage(e.target.value)}/>
          <button type="submit" onClick={submit} value="Submit" style={{background: loader ?  "rgb(51, 255, 102)": "#ffffff"}}> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;