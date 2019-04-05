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
};

var p01Playlist = function () {
  var p01Obj = library["playlists"]["p01"];
  var p01ID = p01Obj["id"];
  var p01Name = p01Obj["name"];
  var p01Tracks = p01Obj["tracks"];
  var numP01Tracks = p01Tracks.length + " tracks";
  var p01Str = p01ID + ": " + p01Name + " - " + numP01Tracks;
  return p01Str;
};

var p02Playlist = function () {

  var p02Obj = library["playlists"]["p02"];
  var p02ID = p02Obj["id"];
  var p02Name = p02Obj["name"];
  var p02Tracks = p02Obj["tracks"];
  var numP02Tracks = p02Tracks.length + " tracks";
  var p02Str = p02ID + ": " + p02Name + " - " + numP02Tracks;
  return p02Str;
};

var t01Track = function () {

  var t01Obj = library["tracks"]["t01"];
  var t01ID = t01Obj["id"];
  var t01Name = t01Obj["name"];
  var t01Artist = t01Obj["artist"];
  var t01Album = t01Obj["album"];
  var t01Str = t01ID + ": " + t01Name + " by " + t01Artist + " (" + t01Album + ")";
  return t01Str;
};

var t02Track = function () {

  var t02Obj = library["tracks"]["t02"];
  var t02ID = t02Obj["id"];
  var t02Name = t02Obj["name"];
  var t02Artist = t02Obj["artist"];
  var t02Album = t02Obj["album"];
  var t02Str = t02ID + ": " + t02Name + " by " + t02Artist + " (" + t02Album + ")";
  return t02Str;
};

var t03Track = function () {

  var t03Obj = library["tracks"]["t03"];
  var t03ID = t03Obj["id"];
  var t03Name = t03Obj["name"];
  var t03Artist = t03Obj["artist"];
  var t03Album = t03Obj["album"];
  var t03Str = t03ID + ": " + t03Name + " by " + t03Artist + " (" + t03Album + ")";
  return t03Str;
};


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  console.log("\n", p01Playlist(), "\n", p02Playlist());
};
console.log(printPlaylists());




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  console.log("\n", t01Track(), "\n", t02Track(), "\n", t03Track());
};
console.log(printTracks());





// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  if (playlistId === "p01") {
    console.log("\n", p01Playlist(), "\n", t01Track(), "\n", t02Track());
  } else if (playlistId === "p02") {
    console.log("\n", p02Playlist(), "\n", t03Track());
  }
};
console.log(printPlaylist("p01"));




// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var trackList = library["playlists"][playlistId]["tracks"];

  trackList.push(trackId);

  console.log(trackList);

};
addTrackToPlaylist("t02", "p01");





// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
// console.log(uid());




// adds a track to the library

var addTrack = function (name, artist, album) {

  var id = uid();

  var addTrackLibrary = library["tracks"];

  addTrackLibrary[id] = {id, name, artist, album};

  console.log(addTrackLibrary);
};

addTrack("Sahanah", "Is", "Great");




// adds a playlist to the library

var addPlaylist = function (name) {

  var id = uid();

  var addPlaylistLibrary = library["playlists"];

  addPlaylistLibrary[id] = {id, name, tracks: []};

  console.log(addPlaylistLibrary);

};

addPlaylist("name");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }
