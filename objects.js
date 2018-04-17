var playlist = {artist: "song title"}

function updatePlaylist(obj, key, value)
{
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key)
{
  obj.delete(key)
}
