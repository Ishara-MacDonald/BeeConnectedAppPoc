<template>
  <div id="nav">
    <div id="nav-title">
      <h2>BeeConnected IT Services</h2>
    </div>
    <ul id="top-nav-bar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Visie | Missie</router-link></li>
      <li><router-link to="/news">Nieuws</router-link></li>
      <li><router-link to="/assignments">Partners</router-link></li>
      <li><router-link to="/login">Log In</router-link></li>
    </ul>
  </div>
  <router-link id="contact-floating" to="/contact">
    <h2>✉ Contact Us!</h2>
  </router-link>
  <div class="router-view">
    <router-view/>
  </div>
  <footer> hi</footer>
</template>

<style>
*, body{
  margin:0;
  padding:0px;
}
#app {
  color: white;
  background-color: rgb(248, 248, 248);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height:auto;
}

#nav{
  top:0;
  z-index: 10;
  position: sticky;
  overflow: hidden;
  display:grid;
  grid-template-columns: 2fr 1fr;
  background-color: rgb(133, 200, 226);
}
#nav-title{
  text-align: center;
  margin: auto auto;
  margin-right: 0px;
  padding: 10px 40px;
  font-family: 'Audiowide';
  width:fit-content;
  border: 2px solid white;
}
#nav-title h2{
  font-weight: 100;
  font-size: 30px;
}

#top-nav-bar {
  float:right;
  list-style-type: none;
}
#top-nav-bar li{
  float: left;
  height:100%;
}
#top-nav-bar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 41px 18px;
  text-decoration: none;
}
#top-nav-bar li a:hover{
  background-color: rgb(51, 137, 207);
}
#top-nav-bar li a.router-link-exact-active{
  font-weight: 600;
  color: rgb(11, 50, 82);
}

#contact-floating{
  right:20px;
  width:200px;
  height:50px;
  bottom:20px;
  display: flex;
  position:fixed;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background-color: rgb(51, 137, 207);
}
#contact-floating:hover{
  background-color: rgb(33, 104, 163);
  cursor: pointer;
}
#contact-floating h2{
  font-size: 17px;
  font-weight: normal;
  letter-spacing: 1px;
  color: white;
}

footer {
  position: relative;
  height: 100px;
  background-color: rgb(24, 24, 24);
}
button{
  background-color: transparent;
  width: 140px;
  height:45px;
  border:1px solid black;
  color: black;
  font-size: 15px;
}
button a{
  text-decoration: none;
  padding:20px;
  height:100%;
  width:100%;
}
button:hover{
  background-color: black;
  transition: 0.4s ease;
  color: white;
}

</style>
