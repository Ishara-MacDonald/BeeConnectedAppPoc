<template>
  <div id="news-overview">
    <h1>Nieuws</h1>
    <div class="most-recent-news">
      <div class="image-text"></div>
      <div class="news-text">
        <h2 class="news-text-title">BeeConnected Services is live!</h2>
        <p>
          It's official!<br/>
          BeeConnected Services is now an established company, providing expertise
          and knowhow to create, manage all network and security challenges for
          all types of companies throughout The Netherlands and abroad.
        </p>
      </div>
    </div>
    <h1 class="portfolio-title">Onze Nieuwe Portfolio</h1>
    <img src="../assets/beeconnected-core.webp" alt="core" />
    <div>
      <h2>Meer Weten?</h2>
      <h3>Duik dieper in de wereld van BeeConnected IT Services</h3>
    </div>
  </div>
</template>

<style scoped>
#news-overview {
  padding-bottom: 60px;
  width: 100%;
  height: auto;
  background-color: white;
  color: black;
  text-align: center;
}
h1 {
  font-weight: normal;
  font-size: 70px;
  letter-spacing: 1px;
  padding: 40px 0px;
  padding: 70px 0px;
}
h2{
  padding-top: 100px;
  font-size: 50px;
  font-weight: normal;
}
h3{
  font-weight: normal;
  font-size: 25px;
  padding: 30px 0px;
}

.most-recent-news {
  display:grid;
  grid-template-columns: 35% 65%;
}

.news-text{
  background-color: rgb(51, 137, 207);
  height: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0px;
  color: white;
}

.image-text{
  background-image: url("../assets/start-button-rocket.jpg");
  background-size: 100% 100%;
}
.news-text p {
  line-height: 35px;
  font-size: 20px;
  letter-spacing: 0.5px;
  padding: 40px 200px;
}
img {
  width: 800px;
  height: 100%;
  border: 2px solid rgb(177, 177, 177);
}
</style>
