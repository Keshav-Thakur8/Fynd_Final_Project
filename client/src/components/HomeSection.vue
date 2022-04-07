<template>
  <div class="home-container" id="home">
    <div class="profile-container">
      <div class="profile-parent">
        <div class="profile-details">
          <div class="colz">
            <div class="colz-icon">
              <a href="https://www.linkedin.com/in/keshav-kumar-thakur-1751011b6" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/keshav8_thakur/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/Keshav-Thakur8" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div class="profile-details-name">
            <span class="primary-text">
              Hello, I'M
              <span class="highlighted-text">Keshav Kumar Thakur</span>
            </span>
          </div>
          <div class="profile-details-role">
            <span class="primary-text">
              <v-typical
                class="blink"
                :steps="[
                  'Coding Enthusiast 😎',
                  1000,
                  'Loves Problem Solving 💻',
                  1000,
                  'Full Stack Developer 🌐',
                  1000,
                ]"
                :loop="Infinity"
                :wrapper="'h1'"
              ></v-typical>

              <span class="profile-role-tagline">
                Knack of building applications with front and back end
                Operations.
              </span>
            </span>
          </div>
          <div class="profile-options">
            <a href="fynd-resume.pdf" download="Keshav Thakur.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTypical from "vue-typical";
export default {
  name: "HomeSection",
  components: {
    VTypical,
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/bg-cover-1.jpg");
}
.profile-container {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 10%;
  min-height: fit-content;
}

.profile-parent {
  padding: 250px;
  display: flex;
  align-items: center;
  color: aliceblue;
}

.profile-details-name {
  font-size: 24px;
  font-family: "Poppins SemiBold";
}
.profile-details-role {
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;
}

.profile-details-role h1 {
  font-size: 40px;
  font-family: cursive;
}

.primary-text {
  color: #ffffff;
}

.highlighted-text {
  color: darkorange;
}

.profile-role-tagline {
  font-size: 19px;
  margin: 5px 0 0 0;
  font-family: "Poppins Light";
}

.profile-options .highlighted-btn {
  padding: 10px 20px;
  font-weight: 500;
  margin-top: 15px;
  padding: 10px 20px;
  width: 160px;
  border: 2px solid darkorange;
  font-size: 18px;
  border-radius: 20px;
  background-color: darkorange;
  color: white;
  align-items: center;
  justify-content: center;
}

.profile-options .highlighted-btn:hover {
  color: #1f2235;
  background-color: white;
  transition: all ease 1s;
  border: 2px solid #1f2235;
}

.colz .colz-icon i {
  align-content: center;
  color: white;
  padding: 8px;
  padding-left: 10px;
}

.colz .colz-icon i:hover {
  transform: scale(1.5);
}
.blink::after {
  content: "|";
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media screen and (max-width: 1110px) {
  .profile-picture {
    margin: 0 0px 80px;
  }
  .profile-details-name {
    font-size: 20px;
  }
  .profile-details-role .primary-text {
    font-size: 12px;
  }
  .profile-options .btn {
    width: 120px;
    padding: 11px 0;
    z-index: 700;
  }
}

@media screen and (max-width: 910px) {
  .profile-picture {
    height: 320px;
    width: 320px;
    width: 0 0 0 4px;
  }
}

@media screen and (max-width: 810px) {
  .profile-picture {
    margin: 0 !important;
  }
  .profile-parent {
    flex-direction: column-reverse;
    margin: 40px 0 0 0;
  }
  .profile-options {
    display: flex;
    justify-content: space-between;
  }
  .profile details {
    margin: 25px 0 0;
  }
  .profile-options .highlighted-btn {
    margin: 0 !important;
  }
  .profile-options,
  .profile-details-role {
    text-align: center;
  }
}

@media screen and (max-width: 375px) {
  .profile-picture {
    height: 275px;
    width: 275px;
    margin-top: -90px;
  }
  .profile-details {
    width: 90%;
  }
}
</style>
