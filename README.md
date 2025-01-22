# workshop-3

I mixed the two codes together, the screen showed a black screen. I tried this several times, and then realised that it wasn't actually a problem with my code itself, as I could vaguely see rectangles being generated. Upon closer inspection, I realised that the reason for this was that the speed of the rectangle generation was too slow. The parameter frameRate controls the speed of the rectangle generation, so I tried to change the number in it. In the process, I found that as the value of frameRate increased, the rectangle was generated faster and faster. In the end, I got an interesting collage whose colors were randomly extracted from the four images.

I changed the shape, now it's become circles.

After it gave me the answer, I declared the values of `initialFrameRate`, `frameRateDecrement`, and `minFrameRate` respectively. Finally, I used the `Math.max` formula to limit the problem of the circle generation speed getting slower and slower, ensuring that it would not stop eventually. The `Math.max(initialFrameRate - frameRateDecrement * frameCount, minFrameRate)` dynamically calculates the frame rate, where `frameCount` increases with the number of times the `draw` function is called, and `Math.max` ensures that the frame rate does not fall below `minFrameRate`, thus guaranteeing the smoothness of the animation.
