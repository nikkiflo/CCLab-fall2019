var Weather;

loadFont()


function setup ()
{
  createCanvas(windowWidth, windowHeight);
  loadJSON("https://api.openweathermap.org/data/2.5/weather?id=5128638&APPID=79d43888fc179ffeaab8910e90566ba7", gotData);
}


function gotData (data){
  Weather = data;
  console.log(Weather.sys.sunset);
}
//
//     let UNIX_timestamp = Weather.sys.sunset;
// function timeConverter(UNIX_timestamp){
//   var a = new Date(UNIX_timestamp * 1000);
//   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes();
//   var sec = a.getSeconds();
//   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//   return time;
// console.log(timeConverter(0));

function convertTime(unixTime){
    let dt = new Date(unixTime * 1000)
    let h = dt.getHours()
    let m = "0" + dt.getMinutes()
    let t = h + ":" + m.substr(-2)
    return t
}

function draw(){

  if(Weather){

    var today = new Date();
    var currentTime = today.getHours() + ":" + today.getMinutes();
    var sunset = convertTime(Weather.sys.sunset);
    var sunrise = convertTime(Weather.sys.sunrise);

    text("sunset time" + sunset, windowWidth/2, windowHeight/2);
    text("sunrise time" + sunrise, windowWidth/2, windowHeight/3);

    if (currentTime > sunset){
      background("black");
      fill(255,255,255);
      text ("its safe", windowWidth/4, windowHeight/3);
      console.log('its safe');
    }
    if (currentTime < sunset){

      text ("its not safe", windowWidth/4, windowHeight/3);
      console.log('its not safe')
    }

  }

}




// c527023157fed77ed49ba6a484faf511
