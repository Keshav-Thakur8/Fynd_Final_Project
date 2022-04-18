<template>
  <div class="main-container" id="contact">
      <ScreenHeading title="Contact Me" subHeading="Keep In Touch" />
    <div class="central-form">
      <div class="col">
          <h2 class="title">
            <v-typical class="blink"
            :steps="['Send Your Message Here 📧', 1000]"
            :loop="Infinity"
            :wrapper="'h3'"></v-typical>
          </h2>
        <a href="https://www.linkedin.com/in/keshav-kumar-thakur-1751011b6" target="_blank">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/keshav8_thakur/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/Keshav-Thakur8" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="back-form">
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
                        <i class='fa fa-paper-plane' />
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
      /* Connecting with backend */
      const result = await axios.post(`/contact`, {
        name: this.name,
        email: this.email,
        message: this.message
      });
      if(this.name.length === 0 || this.email.length === 0 || this.message.length === 0) {
        alert(result.data.msg);
      }
      if(result.status == 200) {
        alert(result.data.msg);
        
        /* Resets the Form */
        this.name = '',
        this.email = '',
        this.message = ''
      } 
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

.central-form{
    max-width: 1100px;
    padding: 10px;
    display: flex;
    border-radius: 12px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
}

.central-form h2{
    color: white;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;
}

.back-form{
    width: 400px;
    margin: 0 auto;
}

.back-form .space{
    width: 100%;
    margin-bottom: 20px;
}

.central-form form{
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
  cursor: pointer;
    margin-top: 15px;
    padding: 5px;
    outline: none;
    width: 160px;
    border: 2px solid linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
    font-size: 18px;
    border-radius: 19px;
    background: linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
    color: white;
    align-items: center;
    justify-content: center;
}

form button:hover{
    color: darkorange;
    transition: all ease 1s;
}

form{
    flex: 0.9;
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
