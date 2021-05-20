import Me from './components/me';

function Home() {
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
        Have a new project or just say hi?<br/>
        Get in touch -&gt;
        <form id="submit-form" action="">
              <input type="text" id="fname" name="name" placeholder="Name"/>
              <input type="text" id="lname" name="email" placeholder="Email"/>
              <textarea id="subject" name="message" placeholder="Message" ></textarea>
              <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
}

export default Home;