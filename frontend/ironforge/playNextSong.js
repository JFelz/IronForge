class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song in the playlist
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect the songs together
song1.next = song2;
song2.next = song3;
song3.next = song4;
// song4.next is null (end of playlist)

function playNextSong(playlist, targetSong) {
  // Find the target song and play the song that comes after it
  let currentSong = playlist;
  
  while (currentSong !== null) {
    if (currentSong.toString() === targetSong) {
      if (currentSong.next !== null) {
        console.log("🎵 Playing next:", currentSong.next.toString());
        return currentSong.next.toString();
      } else {
        console.log("🎵 End of playlist reached");
        return "End of playlist";
      }
    }
    currentSong = currentSong.next;
  }
  
  console.log("🎵 Song not found in playlist");
  return "Song not found";
}
