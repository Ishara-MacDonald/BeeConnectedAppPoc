<template>
  <div id="contact-modal">
    <div id="modal-text">
      <h1>Neem contact met ons op!</h1>
      <p>Benieuwd naar wat BeeConnected IT Services nog meer voor uw business kan betekenen?<br>
      Neem gerust contact met ons op.<br>
      Wij staan altijd open voor een goed gesprek of een kennismaking!</p>
    </div>
    <form id="modal-form">
      <div id="input-place">
        <div class="form-component">
          <label for="first-name">Voornaam</label>
          <input type="text" name="first-name" id="">
        </div>
        <div class="form-component">
          <label for="last-name">Achternaam</label>
          <input type="text" name="last-name" id="">
        </div>
        <div class="form-component">
          <label for="email-address">Email</label>
          <input type="text" name="email-address" id="">
        </div>
        <div class="form-component">
          <label for="mail-subject">Onderwerp</label>
          <input type="text" name="mail-subject" id="">
        </div>
        <div class="form-component" id="mail-contact-container">
          <label for="mail-content">Uw Bericht</label>
          <textarea name="mail-content" id="" cols="30" rows="5"></textarea>
        </div>
      </div>
      <button id="submit-button" >Verstuur</button> <!-- type="submit"-->
    </form>
  </div>
</template>

<style scoped>
#contact-modal{
  z-index: 12;
  width: 45%;
  height: 70%;
  min-width: 500px;
  min-height: 500px;
  background-color: rgb(51, 137, 207);
  padding: 50px 50px;
  position:fixed;
}
#modal-text{
  text-align: center;
}
#modal-text h1{
  padding-bottom: 30px;
  font-size: 25pt;
  font-weight: normal;
}
#modal-text p{
  font-size: 13pt;
  padding: 0px 120px;
  line-height: 30px;
}
#modal-form{
  position:relative;
}

#input-place{
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template: "a b" auto
  "c d" auto
  "e e" auto
  "f f" auto / 1fr 1fr;
  grid-gap: 10px 20px;
  padding: 30px 40px;
}
#mail-contact-container{
  grid-area: e;
}
#mail-contact-container textarea{
  padding: 5px;
  width:97%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#submit-button{
  margin-top:20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgb(33, 104, 163);
  cursor: pointer;
}

#submit-button:hover{
  background-color: rgb(62, 142, 207);
}

.form-component{
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 0;
}

.form-component label{
  padding-bottom: 15px;
}

.form-component input{
  width:90%;
  height:40px;
  padding: 0 5px;
}
</style>
