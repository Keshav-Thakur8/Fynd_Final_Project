<template> 
    <div class="about-me-container" id="about">
      <div class="about-me-parent">
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div class="border"></div>
        <div class="about-me-card">
          <div class="about-me-profile"></div>
          <div class="about-me-details">
            <span class="about-me-description">
              {{ description }}
            </span>
            <div class="about-me-highlights">
              <div class="highlight-heading">
                <p>Here are few Highlights:</p>
              </div>
              <div class="highlight">
                <span>
                  <li>Full Stack web development</li>
                  <li>Strong in Data Structures and Algorithm</li>
                  <li>Problem Solving Skills</li>
                  <li>Managing database</li>
                </span>
              </div>
            </div>
            <div class="about-me-options">
              <a href="fynd-resume.pdf" download="Keshav Thakur.pdf">
                <button class="highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ScreenHeading from '../utilities/ScreenHeading/ScreenHeading.js'
export default {
  name: "AboutMe",
  components: {
    ScreenHeading
  },
  data() {
    return {
      description:
        "Full stack web developer with background knowledge of MEVN stack, along with a knack of building applications with utmost efficiency.",
    };
  },
};
</script>

<style scoped>
.about-me-container {
  margin-top: 55px;
}
.about-me-parent {
  max-width: 1000px;
  width: 70%;
}
.about-me-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
}

.about-me-card {
  display: flex;
  width: 100%;
  box-shadow: 0 0px 20px -2px #1f2235;
}
.about-me-profile {
  width: 50%;
  background-image: url("../assets/me.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.about-me-details {
  width: 48%;
  text-align: justify;
  padding: 30px;
}
.about-me-description {
  font-size: 15px;
}
.about-me-highlights {
  margin: 80px 0;
}
.highlight-heading p {
  font-family: "Poppins Bold";
  font-size: 20px;
  font-weight: 1000;
  margin: 0 0 5px 0;
}
.highlight {
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 18px;
} 
.about-me-options .highlighted-btn {
  font-size: 15px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 0 0 150px;
  background-color: #ff5823;
  border: 2px solid darkorange;
  border-radius: 20px;
}
.about-me-options .highlighted-btn:hover {
    background-color: #1f2235;
    transition: all ease 1s;
    border: 2px solid #1f2235;
}
@media only screen and (max-width: 1110px) {
    .about-me-parent {
      width: 88%;
    }
  }
  @media only screen and (max-width: 898px) {
    .about-me-profile {
      display: none;
    }
    .about-me-details {
      width: 100%;
    }
  }
  @media only screen and (max-width: 466px) {
    .about-me-options {
      display: flex;
      flex-direction: column;
    }
    .about-me-options .highlighted-btn {
      margin: 24px 0 0 0 !important;
    }
    .about-me-options button {
      width: 100%;
    }
  }
</style>
