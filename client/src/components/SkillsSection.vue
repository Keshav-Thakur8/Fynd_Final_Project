<template>
  <div class="skills" id="skills">
    <div class="section-title">
      <ScreenHeading title="Skills" />
    </div>
    <div class="container">
      <div class="row aling-items-center">
        <div class="skills-content">
          <div class="row"></div>
          <div class="row">
            <div class="skill-box">
              <h6>VueJS</h6>
              <div class="skill-bar">
                <div class="skill-bar-in" style="width: 45%"></div>
              </div>
            </div>

            <div class="skill-box">
              <h6>C++</h6>
              <div class="skill-bar">
                <div class="skill-bar-in" style="width: 80%"></div>
              </div>
            </div>
            <div class="skill-box">
              <h6>HTML and CSS</h6>
              <div class="skill-bar">
                <div class="skill-bar-in" style="width: 60%"></div>
              </div>
            </div>

            <div class="skill-box">
              <h6>DS and Algorithms</h6>
              <div class="skill-bar">
                <div class="skill-bar-in" style="width: 70%"></div>
              </div>
            </div>
            <div class="skill-box">
              <h6>JavaScript</h6>
              <div class="skill-bar">
                <div class="skill-bar-in" style="width: 50%"></div>
              </div>
            </div>
            <div class="skill-box">
              <h6>NodeJs</h6>
              <div class="skill-bar">
                <div class="skill-bar-in" style="width: 50%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="../assets/skills.jpg" alt="skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";
export default {
  name: "SkillsSection",
  components: {
    ScreenHeading,
  },
};
</script>

<style scoped>
.skills {
  margin-top: 55px;
  padding: 15px 30px;
}

.skills .skills-content {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 40px;
}

.skills .img {
  background-color: blue;
  flex: 0 0 50%;
  max-width: 50%;
}

.aling-items-center {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 100px;
}

.skills .img img {
  width: 100%;
  display: block;
}

.skills .skills-content .skill-box {
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 30px;
}

.skills .skills-content .skill-box h6 {
  font-size: 16px;
  font-weight: 500;
  color: darkorange;
  margin: 0 0 8px;
}

.skills .skills-content .skill-box .skill-bar {
  height: 5px;
  background-color: #eeeeee;
  position: relative;
}

.skills .skills-content .skill-box .skill-bar .skill-bar-in {
  background-color: #1f2235;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}

.skills .skills-content .skill-box .skill-bar .skill-bar-in span {
  color: #838383;
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  right: 0;
  top: -30px;
}
</style>
