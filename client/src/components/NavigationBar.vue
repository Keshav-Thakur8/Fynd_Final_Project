<template>
  <header>
    <div class="parent-container">
      <div class="container">
        <div class="brand-name">
          <a href="" class="logo">
            <p>PORTFOLIO</p>
          </a>
        </div>
        <nav class="navbar">
          <ul>
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name:'NavigationBar'
}
</script>

<style scoped>
.parent-container {
  max-width: 1140px;
  margin: auto;
}
p {
    color: darkorange;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
header {
  position: absolute;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid #423940;
  padding: 0px 15px;
  z-index: 11;
}
header .fixed {
  background-color: black;
  position: fixed;
}

header .container {
  justify-content: space-between;
  align-items: center;
}
header .brand-name a {
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  position: relative;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: darkorange;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 10px;
}
nav.navbar ul li a {
  position: relative;
}
nav.navbar ul li a {
  transition: all 1s;
}

nav.navbar ul li a:after {
  text-align: left;
  margin: 0;
  opacity: 0;
}
nav.navbar ul li a:hover {
  color: cyan;
  z-index: 1;
}
nav.navbar ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
</style>
