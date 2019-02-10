<<<<<<< HEAD
var playlist = {"joey bada$$":"Christ conscious" }


function updatePlaylist (playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]; 
  return playlist
=======
var playlist = {joey: "christ conscious"}

/*
function updatePlaylist (obj, key, value){
  return Object.assign({}, obj, {[key]:value}); 
}

*/

function updatePlaylist (obj, key, value){
  obj.key = value;
>>>>>>> 6e348536b920f805870a12c8dbb20af680d4ca05
}