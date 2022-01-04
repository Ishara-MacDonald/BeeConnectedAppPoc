<template>
    <div id="added-value">
        <div id="value-container">
            <div id="value-picture"></div>
            <div id="value-info">
                <h1>Added Value</h1>
                <h2>Network Engineer</h2>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#added-value{
    height:700px;
    width:100%;
}
#value-container{
    display: grid;
    width:80%;
    height:100%;
    grid-template-columns: 60% 40%;
    margin: 0 auto;
}
#value-picture{
    background-image: url("../assets/added-value-hand-shaking.png");
    background-size: 100% 100%;
}
#value-info{
    background-color: rgb(31, 31, 31);
    padding:58px 120px;
}

#value-info h1, h2, h3, h4, h5, h6{
    font-weight: normal;
    letter-spacing: 3px;
}
#value-info h1{
    font-size: 35pt;
}
#value-info h2{
    font-size: 22pt;
    margin:30px 0px;
}
</style>
