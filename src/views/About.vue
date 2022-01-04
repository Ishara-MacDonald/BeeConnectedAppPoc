<template>
  <div id="vision-mision">
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
      <img src="" alt="">
    </div>
    <div id="mision-container" class="container">
      <img src="" alt="">
      <div id="mision-details" class="details">
        <h1>Missie</h1>
        <p class="mision">
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
#vision-mision {
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

#mision-container{
  grid-template-columns: 40% 60%;
}
.container {
  display: grid;
  width: 80%;
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
