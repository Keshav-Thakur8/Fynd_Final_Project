<template>
  <div class="main-container" id="project">
    <ScreenHeading title="Projects" />
    <div class="parent-container">
      <div class="project-card">
        <div class="turn-card">
          <div class="turn-card-inner">
            <div class="turn-card-front">
              <h2>Contact List</h2>
            </div>
            <div class="turn-card-back">
              <p>
                Styling using- HTML, CSS, JS used Node.js, MongoDB framework and
                EJS view engine.In this list you can add or delete your contact
                and also store contacts in the database.
              </p>
              <div class="links">
                <button type="button">
                  <a href="https://github.com/Keshav-Thakur8/Contact-List" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </button>
                <button type="button">
                  <a href="" target="_blank">
                    <i class="fa fa-link"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="turn-card">
          <div class="turn-card-inner">
            <div class="turn-card-front">
              <h2>Weather Application</h2>
            </div>
            <div class="turn-card-back">
              <p>
                Simple React Application which tells the current weather of your
                city.This app uses Weather API to fetch the current weather of
                the city.
              </p>
              <div class="links">
                <button type="button">
                  <a href="https://github.com/Keshav-Thakur8/city-weather-app" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </button>
                <button type="button">
                  <a href="https://keshav-thakur8.github.io/city-weather-app/" target="_blank">
                    <i class="fa fa-link"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="turn-card">
          <div class="turn-card-inner">
            <div class="turn-card-front">
              <h2>Portfolio Website</h2>
            </div>
            <div class="turn-card-back">
              <p>
                Created Portfolio website using VueJs and NodeJs. This project
                is hosted on the Cloud Platform Heroku.
              </p>
              <div class="links">
                <button type="button">
                  <a href="https://github.com/Keshav-Thakur8/Fynd_Final_Project" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </button>
                <button type="button">
                  <a href="https://blueberry-pie-73913.herokuapp.com/" target="_blank">
                    <i class="fa fa-link"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";
export default {
  name: "ProjectSection",
  components: {
    ScreenHeading,
  },
};
</script>
<style scoped>
.main-container {
  padding-top: 55px;
  min-height: 70vh;
}
.parent-container {
  max-width: 1100px;
  padding: 10px;
  display: flex;
  border-radius: 15px 50px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-around;
}
.turn-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border-radius: 15px 50px;
  perspective: 1000px;
}
.turn-card-back .links {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.turn-card-back .links button {
  cursor: pointer;
  border: 1px solid white;
  width: 50px;
  border-radius: 12px;
  padding: 5px 10px;
}

/* to position the front and back side */
.turn-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.turn-card-back {
  padding: 5px 10px;
  background: linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);;
  color: white;
  transform: rotateY(180deg);
}

/* turn on hover */
.turn-card:hover .turn-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.turn-card-front, .turn-card-back {
  padding: 5px;
  border-radius: 15px 50px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.turn-card-front h2 {
  padding-top: 60px;
  align-content: center;
}
.turn-card-front {
  background: linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
  color: darkorange;
}

/* Responsivness */
@media only screen and (max-width: 1110px) {
    .parent-container {
      width: 88%;
    }
  }
  @media only screen and (max-width: 466px) {
    .parent-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    
  }
</style>
