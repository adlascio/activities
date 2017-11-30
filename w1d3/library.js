var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {

  for (var prop in library['playlists']){
    console.log(library['playlists'][prop]['id'] + ":",
                library['playlists'][prop]['name'], "-",
                library['playlists'][prop]['tracks'].length, "tracks");
  }

}

//printPlaylists(library); WORKING!

//*****************************************************************************

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {

  for (var prop in library['tracks']) {
    console.log(library['tracks'][prop]['id'] + ":",
                library['tracks'][prop]['name'],
                "by",
                library['tracks'][prop]['artist'],
                "(" + library['tracks'][prop]['album'] + ")");
  }
}

//printTracks(library); WORKING!

//********************************************************************

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  console.log(library['playlists'][playlistId]['id'] + ":",
                library['playlists'][playlistId]['name'], "-",
                library['playlists'][playlistId]['tracks'].length, "tracks");

  for (var i = 0; i < library['playlists'][playlistId]['tracks'].length; i++) {
    var trackId = library['playlists'][playlistId]['tracks'][i];
    console.log(trackId + ":",
                library['tracks'][trackId]['name'],
                "by", library['tracks'][trackId]['artist'],
                "(" + library['tracks'][trackId]['album'] + ")");
  }


}

//printPlaylist('p01'); WORKING!
//printPlaylist('p02'); WORKING!

//************************************************************************

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}

//addTrackToPlaylist('t03', 'p01'); WORKING!
//printPlaylist('p01');

//**************************************************************************

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


//*****************************************************************************

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrackId = "t" + uid();
  library.tracks[newTrackId] = {
    id: newTrackId,
    'name': name,
    'artist': artist,
    'album': album
  }
}

//addTrack("blablabla", "123 band", "album1"); WORKING!
//printTracks(library);

//******************************************************************************************************

// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylistId = "p" + uid();
  library.playlists[newPlaylistId] = {
    id: newPlaylistId,
    'name': name,
    'tracks': []
  }
}

//addPlaylist('New Playlist'); WORKING!
//printPlaylists(library);


//********************************************************************************************************

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
