# workshop-3

I mixed the two codes together, the screen showed a black screen. I tried this several times, and then realised that it wasn't actually a problem with my code itself, as I could vaguely see rectangles being generated. Upon closer inspection, I realised that the reason for this was that the speed of the rectangle generation was too slow. The parameter frameRate controls the speed of the rectangle generation, so I tried to change the number in it. In the process, I found that as the value of frameRate increased, the rectangle was generated faster and faster. In the end, I got an interesting collage whose colors were randomly extracted from the four images.

I changed the shape, now it's become circles.

I tried to use setTimeout to change the speed of the change, but I didn't create my own function. So I went to ask chatgpt and this is the answer he gave me:
<img width="725" alt="82b8cd89a4e4908449b1c4a1d515e3e" src="https://github.com/user-attachments/assets/477d9476-5fc4-4751-b9c0-14be152cd477" />
<img width="629" alt="5c29f0492beaa652d30610c954e478e" src="https://github.com/user-attachments/assets/f0b67ae1-761e-40b7-9bf0-8592b99a1147" />
<img width="865" alt="ece1bb6900c166b96399229ac995c24" src="https://github.com/user-attachments/assets/e6b6a913-42b6-4f09-b701-6b45c72053f3" />
This is reference of p5js.

After it gave me the answer, I declared the values of `initialFrameRate`, `frameRateDecrement`, and `minFrameRate` respectively. Finally, I used the `Math.max` formula to limit the problem of the circle generation speed getting slower and slower, ensuring that it would not stop eventually. The `Math.max(initialFrameRate - frameRateDecrement * frameCount, minFrameRate)` dynamically calculates the frame rate, where `frameCount` increases with the number of times the `draw` function is called, and `Math.max` ensures that the frame rate does not fall below `minFrameRate`, thus guaranteeing the smoothness of the animation.

