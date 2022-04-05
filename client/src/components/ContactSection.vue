<template>
  <div class="main-container" id="contact">
      <ScreenHeading title="Contact Me" subHeading="Keep In Touch" />
    <div class="parent-container">
      <div class="col">
          <h2 className="title">
            <v-typical class="blink"
            :steps="['Send Your Message Here 📧', 1000]"
            :loop="Infinity"
            :wrapper="'h3'"></v-typical>
          </h2>
        <a href="https://www.linkedin.com/in/keshav-kumar-thakur-1751011b6">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/keshav8_thakur/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/Keshav-Thakur8">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="contact-form">
          <div class="space"></div>
          <form >
                <label htmlFor='name'>Name</label>
                <input type='text' v-model="name" />

                <label htmlFor='email'>Email</label>
                <input type='email' v-model="email"/>

                <label htmlFor='message'>Message</label>
                <textarea type='text' v-model="message"/>

                <div class="send-btn">
                    <button type="button" v-on:click="submitForm()">
                        <i className='fa fa-paper-plane'/>
                    </button>

                </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VTypical from 'vue-typical'
import ScreenHeading from '../utilities/ScreenHeading/ScreenHeading'
export default {
  name: "ContactSection",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async submitForm() {
      const result = await axios.post("/api/contact", {
        name: this.name,
        email: this.email,
        message: this.message
      });
      if(this.name.length === 0 || this.email.length === 0 || this.message.length === 0) {
        alert(result.data.msg);
      }
      //success
      if(result.status == 200) {
        alert(result.data.msg);

        //reset the form
        this.name = '',
        this.email = '',
        this.message = ''
      }
      //failure
      else if(result.status == 400) {
        alert(result.data.msg);
      } 
    }
  },
  components: {
      VTypical,
      ScreenHeading,
  },
};
</script>

<style scoped>
.main-container{
    padding-top: 55px;
    min-height: 100vh;
}

.parent-container{
  margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    background-color: #1f2235;
    max-width: 1100px;
    padding: 10px;
    display: flex;
    border-radius: 12px; 
}

.parent-container h2{
    color: white;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;
}

.contact-form{
    width: 400px;
    margin: 0 auto;
}

.contact-form .space{
    width: 100%;
    margin-bottom: 20px;
}

.parent-container form{
    width: auto;
    display: flex;
    color: #111;
    padding: 15px;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 12px;
}

form label{
    width: auto;
    margin-bottom: 5px;
    color: #111;
    letter-spacing: 0.2rem;
}

form input, textarea{
    border: 2px solid rgba(0,0,0,0);
    outline: none;
    background-color: rgba(230,230,230,0.6);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 22px;
    border-radius: 10px;
    transition: 0.3s;
}

textarea:focus{
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: white;
}

input:focus{
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: white;
}

form button{
    background-color: #1f2235;
    color: white;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 5px;
    outline: none;
    width: 160px;
    border: 2px solid darkorange;
    font-size: 18px;
    border-radius: 19px;  
}
.img-back{
    flex: 1;
    align-self: center;
    margin-right: 20px;
}

form{
    flex: 0.9;
}
form button:hover{
    background-color: #1f2235;
    transition: all ease 1s;
    border: 2px solid #1f2235;
}
button .load{
    width: 100%;
}
button .load img{
    width: 60px;
    color: green;
}

.col i{
    padding: 7px;
    color: white;
}

.col i:hover{
    transform: scale(1.5);
}

.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
