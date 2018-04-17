var playlist = {artist: "song title"}

function updatePlaylist(obj, artist, song)
{
  return Object.assign({}, obj, {[artist]:song})
}
