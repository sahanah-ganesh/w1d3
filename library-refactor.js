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
             },
  printPlaylists: function () {
    var playlists = this.playlists;
    for (var key in playlists) {
      var pKey = playlists[key];
      console.log(pKey.id + ": " + pKey.name + " - " + pKey.tracks.length + " tracks");
    }
  },
  printTracks: function () {
    var i = this.tracks;
    for (var tracks in i) {
      var iTr = i[tracks];
      allTracks = iTr.id + ": " + iTr.name + " by " + iTr.artist + " (" + iTr.album + ")";
      console.log(allTracks);
    }
  }
};

// library.printPlaylists();
// library.printTracks();

// return false;

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlists = library.playlists;
  for (var key in playlists) {
    var pKey = playlists[key];
    console.log(pKey.id + ": " + pKey.name + " - " + pKey.tracks.length + " tracks");
  }
};
  printPlaylists();




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var i = library.tracks;
  for (var tracks in i) {
    var iTr = i[tracks];
    allTracks = iTr.id + ": " + iTr.name + " by " + iTr.artist + " (" + iTr.album + ")";
    console.log(allTracks);
  }
};
printTracks();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  var pL = library.playlists[playlistId];
  console.log(pL.id + ": " + pL.name + " - " + pL.tracks.length + " tracks");
  var tracks = library.tracks;
  // var trID = tracks[trackId];
  for (trackId of pL.tracks) {
    var trTR = tracks[trackId];
    let output = `${trackId}: ${trTR.name} by ${trTR.artist} (${trTR.album})`;
    console.log(output);
  }
};
printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var trackList = library.playlists[playlistId].tracks;

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

  var addTrackLibrary = library.tracks;

  addTrackLibrary.id = {id, name, artist, album};

  console.log(addTrackLibrary);
};

addTrack("Sahanah", "Is", "Great");




// adds a playlist to the library

var addPlaylist = function (name) {

  var id = uid();

  var addPlaylistLibrary = library.playlists;

  addPlaylistLibrary.id = {id, name, tracks: []};

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
