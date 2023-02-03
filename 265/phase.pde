// Distances. video phase by Amelia Marzec and lee2sman
//cc0
  2 int totalClips = 7;
  3 import processing.video.*;
  4 
  5 Movie[] movies;
  6 
  7 void setup() {
  8   size(640, 480); 
  9 
 10   movies = new Movie[totalClips];
 11 
 12   for (int i=0; i<totalClips; i++) {
 13     movies[i] = new Movie(this, "testvideo.mp4");
 14     movies[i].loop();
 15     movies[i].speed(1.0 + 0.25*i);
 16   }
 17 }
 18 
 19 void draw() {
 20   tint(255, 40);
 21 
 22   for (int i = 0; i < totalClips; i++) {
 23     if (movies[i].available()) {
 24       movies[i].read();
 25       image(movies[i], 0, 0, width, height);
 26     }
 27   }
 28 
 29 }
