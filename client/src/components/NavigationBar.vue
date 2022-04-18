<template>
  <header>
    <div class="container">
      <div class="row">
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
            <li><a href="#project">Projects</a></li>
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
.container {
  max-width: 1140px;
  margin: auto;
}
p {
    color: darkorange;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
header {
  position: absolute;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid white;
  padding: 0px 15px;
}
header .fixed {
  background-color: black;
  position: fixed;
}

header .row {
  justify-content: space-between;
  align-items: center;
}
header .brand-name a {
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
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
nav.navbar ul li a:hover {
  color: cyan;
}
</style>
