// Distances. video phase by Amelia Marzec and lee2sman
//cc0
int totalClips = 7;
import processing.video.*;

Movie[] movies;

void setup() {
  size(640, 480); 

  movies = new Movie[totalClips];

  for (int i=0; i<totalClips; i++) {
    movies[i] = new Movie(this, "testvideo.mp4");
    movies[i].loop();
    movies[i].speed(1.0 + 0.25*i);
  }
}

void draw() {
  tint(255, 40);

  for (int i = 0; i < totalClips; i++) {
    if (movies[i].available()) {
      movies[i].read();
      image(movies[i], 0, 0, width, height);
    }
  }

}
