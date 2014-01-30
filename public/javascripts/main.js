$(document).ready(function(){
    setInterval(function(){
        $('#buck-wild').css('font-size', Math.floor(Math.random()*100))
        $('#buck-wild').css('color', '#' + Math.floor(Math.random()*1000))
    },100)
})