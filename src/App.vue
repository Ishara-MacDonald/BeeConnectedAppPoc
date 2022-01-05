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
  <div id="contact-floating" @click="modalToggle">
    <h2>✉ Contact Us!</h2>
  </div>
  <div id="modal-background" class="center" v-show="contactVisible" @click="modalToggle"></div>
  <contact-modal class="center" v-show="contactVisible"></contact-modal>
  <div class="router-view">
    <router-view/>
  </div>
  <footer>
    <img class="logo-footer" src="../src/assets/beeconnected-logo.png" alt="beeconnected-logo">
    <div class="footer-details">
      <div class="footer-text">
        <div class="logo-space"></div>
        <h3>BEECONNECTED IT SERVICES</h3>
        <div class="logo-space"></div>
        <h3>Brian Mac Donald</h3>
        <div class="logo-space">
          <img src="../src/assets/location-icon.png" alt="location-icon">
        </div>
        <h3>Doncanstraat 12<br>1447 PK Purmerend</h3>
        <div class="logo-space">✆</div>
        <h3>+31 628 639 860</h3>
        <div class="logo-space">✉</div>
        <h3>info@beeconnected.nl</h3>
      </div>
    </div>
    <div class="footer-links">
      <ul>
        <li>Home</li>
        <li>Visie</li>
        <li>Nieuws</li>
        <li>Samenwerken</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </div>
  </footer>
</template>

<script>
import ContactModal from '../src/views/ContactModal.vue'
export default {
  components: { ContactModal },
  data () {
    return {
      contactVisible: true
    }
  },
  methods: {
    modalToggle () {
      this.contactVisible = !this.contactVisible
    }
  }
}
</script>

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

#modal-background{
  background-color: rgba(255, 255, 255, 0.705);
  z-index: 11;
  height:100%;
  width:100%;
  position: fixed;
}
#contact-floating{
  right:120px;
  width:200px;
  height:50px;
  bottom:70px;
  z-index: 10;
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
  height: 300px;
  background-color: rgb(111, 184, 212);
  display: grid;
  grid-template-columns: 20% 40% 25%;
  grid-gap: 30px;
}
footer .logo-footer{
  height:250px;
  width:250px;
  margin: auto auto;
}
footer .footer-details{
  height: 80%;
  margin: auto 0;
  width:100%;
}
.footer-text{
  padding:20px 10px;
  padding-right: 50px;
  display: grid;
  grid-template-columns: 20px auto;
  border: solid 2px white;
  grid-gap: 5px;
  width:fit-content;
}
.footer-text h3{
  font-family: 'Audiowide';
  font-size: 17px;
  font-weight: normal;
  margin: 5px 0;
}
.footer-text .logo-space{
  margin:auto auto;
  font-size: 20px;
  font-weight: bold;
}

.footer-links{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:30px 0px;
  padding-left: 100px;
  line-height: 40px;
}

.footer-links li{
  list-style-type: none;
}

.logo-space img{
  height: 20px;
  width: 15px;
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
