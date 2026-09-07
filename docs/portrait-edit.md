# Portrait asset

Source: `mmmm.jpeg`, supplied by Sajad Hussain Malla.
Output: `public/images/sajad-portrait.png`.
Tool: built-in imagegen, image edit mode.

The final image is an opaque composition with a grey-and-amber background. It does not contain a transparent alpha channel. The first attempted transparent output was discarded because its checkerboard was baked into the image.

## Final prompt

Edit this exact supplied photograph for a portfolio. Use case: background replacement and monochrome conversion, identity preserve. The output should be an opaque finished rectangular editorial portrait composition, NOT a transparent image. Preserve the man's exact original face and head proportions, features, expression, hairstyle, pose, crossed forearms, hands, wristwatch, embroidered kurta, and body proportions. Do NOT regenerate or reinterpret or beautify his face. Change only: (1) remove all original outdoor background and background people; (2) convert the original man to crisp grayscale photography; (3) replace the background with perfectly flat solid warm light-grey #F0EDE8, plus a flat amber yellow #F5A623 rectangle behind his lower shoulders/torso extending all the way across the image width and to the bottom, beginning at 44 percent from top, with rounded top corners radius around 35 pixels. His entire head and neck must rise ABOVE this amber panel against the light-grey background, like an editorial cutout. Crop framing from a small margin above his actual curly hair down to just below his crossed elbows, with both full shoulders and both elbows in frame, no large empty headroom, portrait aspect approximately 4:5. Subject large and centered; clean natural fine-hair edges. No checkerboard, no transparency simulation, no text, no doodles, no borders, no gradients, no shadows on the flat background. It must look like the same original photograph with just the background replaced and the subject made black and white.

## Color hover state

Output: `public/images/sajad-portrait-color.png`.
Tool: built-in imagegen, edit mode.
Inputs: `public/images/sajad-portrait.png` (edit target) and `mmmm.jpeg` (original color reference).

The shared Portrait component overlays the color image on the original with a 400ms CSS opacity transition on hover. Both hero and About portraits use it. Reduced-motion preferences and the page’s motion toggle remove the transition duration. The decorative overlay has an empty alternative text to avoid duplicate image announcements.

### Colorization prompt

Use case: identity-preserve. Asset type: color hover state of an existing portfolio portrait. Image 1 is the EDIT TARGET: the finished grayscale man on amber and light-grey composition. Image 2 is ONLY the original color reference for skin, hair, purple kurta and watch. Colorize ONLY the grayscale man in image 1 using the natural colors of image 2: natural warm skin, deep plum/burgundy purple embroidered kurta, black hair and beard, silver watch with dark blue face. Strictly preserve image 1's exact face identity, facial geometry, eyes, expression, hairstyle, pose, crossed arms, body proportions, embroidery detail, luminance, camera framing, dimensions/aspect ratio and all subject edge positions. Preserve image 1's exact existing flat light-grey and amber background, rectangle geometry and location unchanged. This asset overlays image 1 in a CSS opacity crossfade, so pixel registration of all outlines is crucial: do not shift, resize, crop, redraw or beautify the subject. Change chroma only; no new objects, no text, no border, no transparency, no new background. Output one color version of image 1.
