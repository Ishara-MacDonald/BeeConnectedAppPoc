<template>
  <div id="recommendations">
    <div id="recommendations-container">
      <div id="recommendation-details">
        <h1>Aanbevelingen</h1>
        <p class="recommendation">
          'I’ve come to know Brian as an enthusiastic person, who has broad
          experience in networking and its related disciplines and is a fine
          colleague. I enjoyed our co-operation at Rijkswaterstaat and hope to
          work with him again in the future.'
        </p>
        <h3>- Pieter Luteijn</h3>
        <h4>Networking Specialist</h4>
      </div>
      <div id="recommendation-image"></div>
    </div>
  </div>
</template>

<style scoped>
#recommendations {
  height: 500px;
  width: 100%;
}
#recommendations-container {
  display: grid;
  width: 80%;
  height: 100%;
  grid-template-columns: 55% 45%;
  margin: 0 auto;
}

#recommendation-details {
  background-color: rgb(31, 31, 31);
  padding: 30px 200px;
  text-align: center;
}
#recommendation-details h1 {
    padding: 40px 0px;
    letter-spacing: 1.5px;
    font-weight: normal;
}
#recommendation-details h3 {
    padding: 10px 0px;
    letter-spacing: 1.5px;
    font-weight: normal;
}
#recommendation-details h4 {
    letter-spacing: 1.5px;
    font-weight: normal;
    color: rgb(172, 172, 172);
}
#recommendation-details p {
    line-height: 35px;
    font-size: 15px;
    letter-spacing: 0.5px;
    padding-bottom: 30px;
}
#recommendation-image{
  background-image: url("../assets/teamwork-recommendations.png");
  background-size: 120% 100%;
}
</style>
