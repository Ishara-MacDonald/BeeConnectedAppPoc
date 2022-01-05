<template>
  <div id="vision-mission">
    <div id="main-vision-mission">
      <h1>Onze Visie en Missie</h1>
    </div>
    <div id="vision-container" class="container">
      <div id="vision-details" class="details">
        <h1>Visie</h1>
        <h3>Expertise As A Service</h3>
        <p class="vision">
          'Met onze kennis, ervaring en creativiteit in combinatie met
          digitale technologie, zijn we in staat om klanten te helpen bij
          hun digitale reis.'
        </p>
      </div>
      <div id="vision-img" class="container-img"></div>
    </div>
    <div id="mission-container" class="container">
      <div id="mission-img" class="container-img"></div>
      <div id="mission-details" class="details">
        <h1>Missie</h1>
        <p class="mission">
          'Aangezien IT stevig in het hart van onze samenleving staat,
          moeten we rekening houden met het multi-dimensionale gebruik en
          de enorme toename in de vraag naar cloud, data, verschillende
          platforms en AI. <br>
          Met ons brede portfolio dekken we genoemde klantbehoeften helemaal
          af en sluiten we hier naadloos op aan om tot de beste oplossingen
          en adequate support voor onze klanten te komen.'
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-vision-mission{
  /* background: linear-gradient(to top, transparent, rgba(236, 245, 247, 0.548)),
  linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.534)),
  url("../assets/city-view-spedup.png"); */
  background-image: linear-gradient(to top, transparent 65%, rgb(236, 245, 247) 80%),
  url("../assets/view-city-tech-man.png");
  height:700px;
  margin-top:-175px;
  background-size: 100% 110%;
  border-bottom: 5px solid black;
}

#main-vision-mission h1{
  padding: 200px;
  /* -webkit-text-fill-color: white; Will override color (regardless of order) */
  font-family: 'AudioWide';
  font-weight: bolder;
  font-size: 70px;
  text-align: center;
  /* -webkit-text-stroke: 1px black; */
  color:white;
  text-shadow:
       4px 4px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}

#vision-mission {
  height: auto;
  width: 100%;
  border-bottom: 0;
  border-top: 0;
}
#vision-container{
  grid-template-columns: 60% 40%;
}

#vision-container .details{
  height: 400px;
  padding: 10% 20%;
}
#vision-img{
  background-image: url("../assets/visie-lamp.png");
  background-size: 100% 100%;
}

#mission-img{
  background-image: url("../assets/eye-tech-mission.png");
}

.container-img{
  background-size: 100% 100%;
}

#mission-container{
  grid-template-columns: 50% 50%;
}
.container {
  display: grid;
  width: 70%;
  margin: 100px auto;
  /* margin-top: 100px; */
  height: 500px;
}

.details {
  background-color: rgb(31, 31, 31);
  padding: 10% 15%;
  text-align: center;
}
.details h1 {
    padding: 20px 0px;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 45pt;
}
.details h3 {
    padding: 10px 0px;
    letter-spacing: 1.5px;
    font-weight: bold;
}
.details h4 {
    letter-spacing: 1.5px;
    font-weight: normal;
    color: rgb(172, 172, 172);
}
.details p {
    line-height: 35px;
    font-size: 15px;
    letter-spacing: 0.5px;
    padding: 30px 0px;
}
</style>
