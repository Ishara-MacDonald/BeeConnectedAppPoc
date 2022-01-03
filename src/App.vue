<template>
  <div id="nav">
    <ul id="top-nav-bar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/assignments">Assignments</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/login">Log In</router-link></li>
    </ul>
  </div>
  <router-view/>
  <footer></footer>
</template>

<style>
*, body{
  margin:0;
  padding:0px;
}
#nav{
  overflow: hidden;
  background-color: rgb(133, 200, 226);
  position: sticky;
  top:0;
  z-index: 10;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  background-color: rgb(248, 248, 248);
  /* background-color:#252427; */
}

#top-nav-bar {
  margin: 0;
  padding: 0;
  padding-right: 50px;
  height: 100px;
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
footer{
  height:100px;
  background-color: rgb(24, 24, 24);
}
/* #nav{
  margin:0;
  padding:0px;
  width:100%;
  background-color: #b94642;
  height:50px;
  position: fixed;
}
#top-nav-bar{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(0, 138, 252);
  top: 0;
  float:right;
  height: 100%;
}
#top-nav-bar li{
  display:inline;
  height:50px;
  text-align: center;
}
#top-nav-bar a{
  padding: 14px 16px;
  color: white;
}
#top-nav-bar a.router-link-exact-active {
  color: #b94642;
}*/
</style>
