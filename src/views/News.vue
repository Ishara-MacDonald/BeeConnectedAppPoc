<template>
  <div id="news-overview">
    <h1>Sleet News</h1>
    <div class="most-recent-news">
      <h3>BeeConnected Services is live!</h3>
      <p>
        It's official!<br />
        BeeConnected Services is now an established company, providing expertise
        and knowhow to create, manage all network and security challenges for
        all types of companies throughout The Netherlands and abroad.
      </p>
      <img src="../assets/beeconnected-core.webp" alt="core" />
    </div>
  </div>
</template>

<style scoped>
#news-overview {
  margin: 0 auto;
  padding-bottom: 60px;
  border: 60px solid black;
  border-bottom: 0;
  border-top: 0;
  width: 90%;
  height: auto;
  min-height: 650px;
  background-color: white;
  color: black;
  text-align: center;
}
#news-overview h1 {
  font-weight: bolder;
  font-size: 50px;
  letter-spacing: 1px;
  padding: 30px 0px;
}

.most-recent-news {
  border: 1px solid rgb(177, 177, 177);
  background-color: rgb(240, 240, 240);
  height: 500px;
  width: 600px;
  margin: 0 auto;
  padding: 30px 50px;
}

h3 {
  font-size: 30px;
  padding: 20px 0px;
  letter-spacing: 1.5px;
  font-weight: normal;
}
p {
  line-height: 35px;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding-bottom: 15px;
}
img {
  width: 90%;
  height: 290px;
  border: 2px solid rgb(177, 177, 177);
}
</style>
