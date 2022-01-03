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
  background-image: url("../assets/city-view-spedup.png");
  /* margin: 0 10%; */
  height:700px;
  width:100%;
  min-width: 450px;
  background-color: aquamarine;
  background-size: 120% 120%;
}

#profile-container{
  background-color: rgba(0, 0, 0, 0.822);
  height:550px;
  width:400px;
  position: relative;
  border-radius: 25px;
  padding:0px;
  margin:0px;
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
