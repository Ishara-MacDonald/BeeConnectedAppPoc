<template>
  <div id="home-profile">
    <div id="profile-container" class="center">
        <div id="profile-bit" class="center">
        <img src="../assets/bee-profile-pic.png" />
        <div id="profile-details">
            <h2>Bee Connected</h2>
            <h3>Network & Firewall Specialist</h3>
            <h4>' Design. Implement. Manage. Migrate. '</h4>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#home-profile{
  /* background-image: url("../assets/city-view-spedup.png"); */
  background: linear-gradient(to top, transparent, rgba(236, 245, 247, 0.548)),
  linear-gradient(to bottom, transparent, rgba(10, 10, 10, 0.534)),
  url("../assets/city-view-spedup.png");
  /* margin: 0 10%; */
  height:600px;
  width:100%;
  min-width: 450px;
  background-color: rgb(151, 201, 184);
  background-size: 100% 100%;
}

#profile-container{
  background-color: rgba(0, 0, 0, 0.822);
  height:550px;
  width:400px;
  position: relative;
  border-radius: 25px;
}
#profile-bit{
  background-color: black;
  padding:20px;
  border-radius: 25px;
  height: 90%;
}
#profile-details{
  text-align: center;
}
#profile-details h2{
  margin:10px;
}
#profile-details h4, h3{
  font-weight: normal;
}
</style>
