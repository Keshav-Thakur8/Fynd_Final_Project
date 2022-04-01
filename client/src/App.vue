<template>
<div>
    <NavigationBar />
    <HomeSection />
    <AboutMe />
    <SkillsSection />
    <ContactSection />
</div>
    
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutMe from './components/AboutMe.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    HomeSection,
    AboutMe,
    SkillsSection,
    ContactSection,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
</style>
