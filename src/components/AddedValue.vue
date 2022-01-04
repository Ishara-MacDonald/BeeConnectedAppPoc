<template>
  <div id="added-value">
    <div id="value-container">
      <div id="value-picture"></div>
      <div id="value-info">
        <h1>IT Services:</h1>
        <ul>
          <li>
            <h2>Routing & Switching</h2>
          </li>
          <li>
            <h2>Security</h2>
          </li>
          <li>
            <h2>Network Operations</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#added-value {
  height: 600px;
  width: 100%;
}
#value-container {
  display: grid;
  width: 80%;
  height: 100%;
  grid-template-columns: 55% 45%;
  margin: 0 auto;
}
#value-picture {
  background-image: url("../assets/services-honeycomb-man-in-suit.png");
  background-size: 100% 100%;
}
#value-info {
  background-color: rgb(31, 31, 31);
  padding: 58px 100px;
}
#value-info li {
  padding: 5px;
}

#value-info h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  letter-spacing: 3px;
}
#value-info h1 {
  font-size: 35pt;
}
#value-info h2 {
  font-size: 25pt;
  margin: 30px 0px;
}
</style>
