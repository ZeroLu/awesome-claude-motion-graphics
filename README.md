# Awesome Claude Motion Graphics 🎬

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) [![GitHub stars](https://img.shields.io/github/stars/ZeroLu/awesome-claude-motion-graphics?style=social)](https://github.com/ZeroLu/awesome-claude-motion-graphics/stargazers)

> A curated collection of the best **Claude Opus 5.5 motion graphics** prompts, sourced from X (Twitter) and top prompt engineers. Each entry includes the full prompt, preview, view count, and engagement metrics.

This repository focuses on **code-generated motion graphics** created with Claude Opus 5.5 — including product launch videos, motion design showreels, explainers, ads, and creative experiments. All prompts produce self-contained HTML/JS/CSS animations that render directly in the browser.

**Stats:** 282 videos | 32,410,325 total views | 109,971 total likes

## 📖 Table of Contents

1. [Product Launch Videos](#1-product-launch-videos)
2. [Showreels & Motion Design Portfolios](#2-showreels-motion-design-portfolios)
3. [Explainers & Knowledge Videos](#3-explainers-knowledge-videos)
4. [Technical Demos & Visualizations](#4-technical-demos-visualizations)
5. [Ads & Marketing](#5-ads-marketing)
6. [Fun & Creative Experiments](#6-fun-creative-experiments)
7. [Storytelling & Narrative Animation](#7-storytelling-narrative-animation)
8. [Game Effects & Cinematics](#8-game-effects-cinematics)
9. [Music Videos & Visualizers](#9-music-videos-visualizers)
10. [Branding & Logo Animation](#10-branding-logo-animation)
11. [Social Media Content](#11-social-media-content)
12. [Tutorials & How-To](#12-tutorials-how-to)
13. [Data Visualization](#13-data-visualization)
14. [Event Intros & Stings](#14-event-intros-stings)
15. [Other](#15-other)

---

## 1. Product Launch Videos

### 1. Modern AI Inference Startup Launch Video (350.9K views, 3,262 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
make a modern slick and punchy video for a modern startup that works on inference
```

<img src="https://media.skillry.dev/opus-5-5/deedydas-252537/original.8d653fb34b.webp" width="400" alt="Modern AI Inference Startup Launch Video">

*Source: @deedydas - [Post](https://x.com/deedydas/status/2102787937482252537)*

---

### 2. GSAP and Three.js Product Motion Video Template System (127.2K views, 1,062 likes)
*Use Case: launch | Style: 3d, minimal*

**Prompt:**
```
<role>
you design and build motion videos entirely in code, with gsap for the animation and three.js for any 3d. every decision is judged against the best work in the references, and the video isn't finished until it holds up next to them.
</role>

<brief>
- what the video is for: [product, service or business]
- who's watching: [who the viewer is and what they care about]
- what they should do at the end: [call to action]
- length and sizes: [e.g. 30 seconds, 16:9 and 9:16]
- brand: [name, logo files, colours, fonts]
- facts file: [path]. this is the only source for any number, name or claim that appears on screen
- assets: [footage, photos, screenshots, product files]
- style references: [links or a folder of videos whose motion i like]

i'm away and won't answer questions. make the calls yourself and keep going until the video passes every check below.
</brief>

<kit>
before anything else, clone and read https://t.co/FMs1prnPP0. read SKILL.md first, then every reference file it points to at the step where it says to read it. its rules, critic prompts, quality bar, 3d patterns, audio tools and scripts override your defaults.
</kit>

<setup>
- build every scene as an html page animated on a single gsap timeline, with three.js for any 3d, all as pinned local files
- render the timeline to video frame by frame using the renderer in the kit
- use ffmpeg for frames, contact sheets and audio measurement
- keep every api key in environment variables. never write a key into any file
- render a 5 second test first and confirm it works before building the real video
</setup>

<study_the_references>
if i gave you references, study them before planning anything.
- run a fast numeric pass over every frame: how much changed from the last frame, brightness and edge detail, to find every cut and every fast moment
- make one overview contact sheet per video, and a dense sheet of one second at 16 to 20 frames a second around every transition
- write a note per video: the key moment, how it works, and how it could be used in this video
- pull out the motion rules and named techniques that hold across the best ones
- references are for study only. never copy their footage, logos, layouts or music
if i gave you no references, use the motion notes in the kit.
</study_the_references>

<motion_principles>
1. the thing in the front of the shot becomes the transition. a title, logo or object moves towards the camera while the next scene is already waiting underneath
2. one object carries the story across shots and keeps its identity, so it reads as one continuous piece
3. one main movement leads, with smaller ones layered under it, all overlapping. the frame never stops and starts all at once
4. the speed always changes. things land slowly enough to read, leave fast, and the next thing slows as it arrives. no linear motion
5. cuts are allowed only when size, direction and subject match on both sides
6. every action produces a visible result. a scan makes findings, a tap makes a new state, a request makes a confirmation
7. type is motion too. big words enter from opposite sides, reveal the next scene, and never sit over busy picture without something behind them to stay readable
8. vary the scale from close, to wide, to overhead, to full-frame type. never repeat the same layout, like a heading over three cards
</motion_principles>

<storyboard>
write a brief and a storyboard before any animation.
- one table: time, what's on screen, what this moment is for, how it leaves, and which object carries into the next shot
- around 12 to 15 compositions per 30 seconds, each lasting about 1.4 to 3.5 seconds
- the main subject fills most of the frame. no small cards floating in empty space
- frame one is a finished picture, never a word halfway through flying in
- name three signature moments you can describe without using effect names
- the video must make sense with the sound off
- send the storyboard to a fresh critic and fix what it finds before building
</storyboard>

<build>
- every animated value is a function of timeline time only. no timers, no real-time animation, no unseeded randomness. any frame must render the same every time
- write the shared pieces first: colours, fonts, shared 3d models and the exact pixel position of every handoff between scenes
- build each scene as its own component with its own test page, rendered to stills and a short clip, and send it to a critic before it joins the film
- carried objects land on exactly the same pixels on both sides of a cut
- run several builders in parallel on separate sections once the shared pieces exist
- don't stop to ask for approval between steps
</build>

<3d>
- only use 3d where it explains something physical or spatial, like layers, parts, placement or scale
- light it like a product shoot, with a soft key light from one side and a rim light behind
- keep the camera between about 35 and 55 degrees. never look straight down on a large surface, and never end tight on a flat one
- style buildings like a premium architectural model with real materials and a base
- no floating parts, no gaps where parts meet, no flat black glass, no repeating textures
- labels are html positioned from the 3d scene every frame, never text inside the 3d
- measure the rendered background pixel and adjust until it matches the brand colour
- anything that moves like a real product is measured from real footage frame by frame, and those measurements are the curve
</3d>

<images_and_footage>
- prefer building shots in code. use generated images or clips only for supporting shots, and label anything generated as a concept
- upscale and smooth any generated clip to match the rest, and regenerate anything that warps
- never generate a fake finished job, fake customer, fake review or fake result
</images_and_footage>

<audio>
- match the music's energy to the picture and the viewer, and keep it low
- prefer clean library music and sound effects over generated ones. never name a brand in a music prompt
- one short, soft whoosh per real scene change, and small clicks or pops only on real on-screen actions
- screen effects for boom, hiss and length before using them, and set each one just above the music in its own frequency range, with a cap so nothing gets harsh
- cut every scene change on a beat
- always export a music-only version
</audio>

<critic_loop>
the builder never judges its own work.
- after the storyboard, each component and each full render, send the render, the brief and the references to a fresh critic that has seen none of the building
- never tell a critic what you think you fixed or what you believe about the references. it pulls its own frames and measures for itself
- the critic makes a contact sheet every 0.2 seconds plus dense frames around every transition, measures frozen time and loudness, and returns a ranked list of problems with timestamps, ending with ship or one more pass
- fix the biggest problem first, render, then send to a new critic that checks every previous item as fixed, partly fixed or still there, and hunts for anything new that broke
- keep a ledger of every round: what was found, what changed, and the numbers before and after
</critic_loop>

<quality_bar>
the video isn't done until all of these pass, measured:
- no more than about 1 second of frozen screen per 30 seconds, and no still stretch longer than about half a second
- frame one is a finished composition
- all text meets at least 4.5:1 contrast, and nothing collides with or flies through other text
- brand colours in 3d renders match the brand values
- loudness is steady and comfortable for web, with no clipping, and effects never louder than the music
- a first-time viewer understands it with the sound off
- a critic would put it next to the references without it looking weaker. a video with no bugs is not the same as a good video
</
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/everestchris6-399895/poster.d351346a82.webp" width="400" alt="GSAP and Three.js Product Motion Video Template System">

*Source: @everestchris6 - [Post](https://x.com/everestchris6/status/2104965415164399895)*

---

### 3. Professional SaaS Product Launch Video with Feature Showcase (97.5K views, 439 likes)
*Use Case: launch | Style: 2d, photo-based, minimal*

**Prompt:**
```
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

<img src="https://media.skillry.dev/opus-5-5/moritzkremb-466494/original.dc5bd867e2.webp" width="400" alt="Professional SaaS Product Launch Video with Feature Showcase">

*Source: @moritzkremb - [Post](https://x.com/moritzkremb/status/2103066071838466494)*

---

### 4. Notion Column Permissions Feature Launch Trailer (54.5K views, 154 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Last week, we launched column permissions!

I’m not on Notion’s video team, but with the help of @claudeai, @bot, and @NotionHQ, I made a trailer over the weekend. (How I made it in 🧵)

【作者补充制作说明】
🎬 BEHIND THE SCENES:

This was built using @Remotion (React/TypeScript only!), with @claude’s opus 5.5 [xhigh], orchestrated with @bot, and managed in a Notion doc as a working canvas.

In total, this project took ~90 messages with my @bot over 2 days, which generated 33 video takes with Claude Code and cost ~$400 in Claude credits including all the other takes (API billing but should fit fine in the $100/mo plan)

Here’s a Notion doc documenting the process (including many rejected candidates): https://notion.notion.site/column-permissions-trailer
```

<img src="https://media.skillry.dev/opus-5-5/wustep-884086/original.7785b73ddb.webp" width="400" alt="Notion Column Permissions Feature Launch Trailer">

*Source: @wustep - [Post](https://x.com/wustep/status/2104610435571884086)*

---

### 5. Minimal Product Video with Real Footage and Masked Type Reveals (53.5K views, 615 likes)
*Use Case: launch | Style: 2d, photo-based, minimal*

**Prompt:**
```
<inputs>
Ask me for: the product name and a one-line promise, 3 to 5 UI moments to show, one accent color, 10 to 20 real vertical clips I own, and a royalty-free song with a clear drop (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
High-end minimal. One idea per shot, lots of empty space, one accent color, one clean sans (Geist or Inter) with tight tracking. Masked type reveals, match cuts, one smooth camera language. Real footage only, never placeholder cards. No full stops in on-screen text.
Banned: shockwave rings, particle bursts, RGB split, camera shake, lens flares, neon glows, grid floors, flashing backgrounds, bouncy easing.
</direction>

<structure>
10 bars at 120 BPM, 2 seconds each.
Bar 1: the hook lands word by word on the beats.
Bar 2: one hook word morphs into the product UI. A cursor types and clicks.
The drop: a circle opens out of the button into a dark scene.
Then one move per bar: a wall of real clips with a scan line and 3 winners, the key output as big type, a 3D carousel of real videos with floor reflections and a motion-blurred whip onto one hero clip, the hero in a phone next to a panel that flips into results, big stats on push cuts, a 3-word ticker, a logo reveal, a fade to black.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside 
http://
window.seek(t): no CSS animations, no timers, no state between frames.
2. Real video: extract clips to 30fps JPEG sequences with ffmpeg and swap img sources per frame. seek awaits the image decodes.
3. Analyze the song with numpy: tempo, beat grid, energy per bar, the drop. Calibrate the grid to the real kick hits. Every cut sits on a downbeat, every UI hit on a beat.
4. Render with Playwright: 3 subframes per frame at t minus, at, and plus 1/240s, then blend with ffmpeg tmix for real motion blur at 60fps.
5. Place each sound effect so its measured peak, not its file start, lands on the event. Keep the effects quiet under the music. Loudnorm to -14 LUFS.
6. Probe 20 or more frames before the full render. Fix anything cluttered, overlapping or hard to read.
</build>

<gotchas>
Never set opacity or filter on a preserve-3d element, because it flattens and both faces show. Fade its wrapper instead. Measure element positions at runtime for match cuts. Only use music and sound effects whose license allows commercial use.
</gotchas>

<start>
Ask me for the inputs, then show me a storyboard with every timing on the beat grid before you write any code.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/twoclipping-000267/original.87cf7f8c74.webp" width="400" alt="Minimal Product Video with Real Footage and Masked Type Reveals">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2102554209166000267)*

---

### 6. Professional SaaS Product Launch Video with Internet Assets (52.9K views, 286 likes)
*Use Case: launch | Style: 2d, photo-based, minimal*

**Prompt:**
```
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

<img src="https://media.skillry.dev/opus-5-5/pbteja1998-651644/original.1bdf8e9b65.webp" width="400" alt="Professional SaaS Product Launch Video with Internet Assets">

*Source: @pbteja1998 - [Post](https://x.com/pbteja1998/status/2103176101497651644)*

---

### 7. 30-Second Developer Portfolio Showreel with Product Screenshots (48.1K views, 162 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Make a dynamic 30-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.  Make it a video to introduce 
https://
mdfor.dev Use actual product screenshot/logo/assets Must have music and motion must match the music  Do it like a real professional production video, not like a demo or prototype. Add more animation and motion design; avoid using screenshots as raw; instead, break them down into components/icons so we can animate those too. Make the motions more juicy. Use the best motion design techniques you can.
```

<img src="https://media.skillry.dev/opus-5-5/ho-ba-761062/original.edf406f8ac.webp" width="400" alt="30-Second Developer Portfolio Showreel with Product Screenshots">

*Source: @HO_BA - [Post](https://x.com/HO_BA/status/2103845264649761062)*

---

### 8. BridgeMind AI Product Introduction Motion Video (33.3K views, 557 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Claude Opus 5.5 just created this merch launch video for BridgeMind using Remotion.

The taste on this model is insane. The transitions, the timing, the branding. Better than anything I have gotten from Fable 5.1 or GPT 6 Astra.

Go cop your BridgeMind hoodie. Link below.
```

<img src="https://media.skillry.dev/opus-5-5/bridgemindai-286423/original.efad0877d7.webp" width="400" alt="BridgeMind AI Product Introduction Motion Video">

*Source: @bridgemindai - [Post](https://x.com/bridgemindai/status/2102462889160286423)*

---

### 9. Product Promo Motion Graphics with Beat-Synced Transitions (31.1K views, 5 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
the introduction made with opus 5.5 + remotion

introducing @TryGofy — the live map of everything.

#shipaton #BuildInPublic #gofy #gofyapp
```

<img src="https://media.skillry.dev/opus-5-5/heymrzak-349060/original.c53595193d.webp" width="400" alt="Product Promo Motion Graphics with Beat-Synced Transitions">

*Source: @heymrzak - [Post](https://x.com/heymrzak/status/2103768331782349060)*

---

### 10. Medical Records App Promo with Remotion and Gemini TTS (26.5K views, 150 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
／
通院メモリー
iOS版リリースしました！
＼
#個人開発

審査は通ってたのですが、動画制作に手間取ってました…😇
Opus5.5/Remotion/Gemini APIで作ったら爆速。笑

お子さんがいる方や家族の通院や服薬管理がしたい方、ぜひリプ先のリンクからインストールしてみてください🙌
```

<img src="https://media.skillry.dev/opus-5-5/seri-nonnon-231813/original.20f746366b.webp" width="400" alt="Medical Records App Promo with Remotion and Gemini TTS">

*Source: @seri_nonnon - [Post](https://x.com/seri_nonnon/status/2106192761632231813)*

---

### 11. Modern Inference Startup Launch Video in Pure Code (24.8K views, 6 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
make a modern slick and punchy video for a modern startup that works on inference

no video gen model, no additional libraries.
```

<img src="https://media.skillry.dev/opus-5-5/lepadev-475414/original.6f8489c595.webp" width="400" alt="Modern Inference Startup Launch Video in Pure Code">

*Source: @lepadev - [Post](https://x.com/lepadev/status/2103101681806475414)*

---

### 12. Single Canvas UI State Morphing with Cursor-Driven Transitions (17.7K views, 239 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
<inputs> 
Ask me for: 
• my product + URL 
• 8–12 UI states that tell its story 
• the real data shown in each state 
• brand colors + fonts + accent color 
• required formats (1:1, 16:9, 9:16) 
</inputs>

<rules> 
One HTML file. One canvas
One draw(t) function

No CSS transitions
No timers
No state carried between frames

One shape, never cut

Every state is the same element changing size, radius and color while the content swaps

A cursor drives the sequence with real clicks, typing and one drag

Real UI. Real data. No placeholders.

</rules>
<structure> 
120 BPM grid

Something happens on every bea

logo → button → handle field → “is this you?” → loader → pin → globe filling with users → matches → tabs → RSVP → search → logo

</structure>

<motion> 
Closed-form springs everywhere with only a tiny overshoot.

If a value changes target multiple times, sum one spring per change

Content enters after its container starts morphing and leaves before the next morph so text never overlaps

Use a short blur on transitions

Never fade black directly into the accent color. Move an accent element between states instead

Make tab indicators stretch by putting each edge on a different spring

Zoom the camera so every state fills the frame

Make the last frame equal the first so the whole thing loops
</motion>

<export> 
First render one frame per beat as a contact sheet

Fix anything cramped or broken

Then render every frame in headless Chrome at 60fps, averaging 6 subframes for motion blur

Pipe into ffmpeg:
H.264 + yuv420p

Export all aspect ratios in parallel
</export>

motion design is becoming a prompt
```

<img src="https://media.skillry.dev/opus-5-5/verbove-268381/original.48c597b63b.webp" width="400" alt="Single Canvas UI State Morphing with Cursor-Driven Transitions">

*Source: @verbove - [Post](https://x.com/verbove/status/2103483957266268381)*

---

### 13. Nightshift Product Launch with Sunrise Crossfade Animation (14.7K views, 191 likes)
*Use Case: launch | Style: 2d, photo-based, minimal*

**Prompt:**
```
<inputs>
Ask me for: my product's name (nightshift) (one lowercase word, it becomes a black wordmark with a period), the one job a user hands it before bed (book 10 sales calls this week), the three results it reports by morning (200 leads found / 200 emails sent / 10 calls booked), two photos of the same place at night and by day (aligned, so a crossfade reads as a real sunrise), one sunny daytime photo for outside the logo, and a song with a big hit near its start. If I skip any, use the defaults.
</inputs>

<direction>
A 24 second square product launch video, 1440x1440 at 60fps, 2D only, one continuous take that loops. The whole video happens inside the period of the wordmark. Outside it's daytime (the sunny photo behind a black wordmark). Inside it's the night photo under iOS-style glass panels (the blurred photo behind each panel, a tint, a rim light). Nothing cuts: every scene grows out of the last, shapes morph, dots fly, colours change under floods. Every morph glides 0.8s on cubic-bezier(.45,0,.15,1) and the camera zoom rides the same curve. Geist, the real macOS pointer, soft shadows that grow with each shape's height.
Banned: flat or gradient backgrounds made in code, camera zooms into tiny points, hard cuts, crossfades between scenes, bouncy springs, particles, glows, holds longer than 1s, cropped type.
</direction>

<structure>
Beats are the song's. The song enters on its big hit as the first pill appears.
Open: the letters slide into the period and vanish into it while it glides to the middle. The period opens like an iris onto the night inside it, and "you log off at 6", then "[product] doesn't", roll through one mask line over the night photo.
Ask: a glass "Ask [product]" pill springs in. The cursor clicks it, it glides into an input and the job types out.
Find: send shrinks the input to a dot that ripples into a 23x15 grid. A scan line sweeps it, 200 dots light up and a counter counts them.
Write: the lit dots pour into a glass email composer. A second, purple cursor labelled "[product]" types a personal opener and presses Send, and the counter runs to 200/200.
Night: the composer becomes a glass orb with a progress ring. A clock chip swaps 11:42 PM, 3:17 AM, 5:02 AM, 6:59 AM while the sky relights from night to dawn and "while you sleep" rolls in.
Results (beat 20): the orb turns black and goo-splits into the three result pills. The checks pop green.
Morning: the pills merge into a Dynamic Island that grows into a phone lock screen: the day photo, the date, a big 7:00, the bezel growing out of the screen edge. Three glass notifications stack in, and the cursor taps the first, which opens like iOS.
Proof: a week calendar (10 meetings pop in, a hover shows one's time), then a pipeline chart ($48,200 counts up, the line draws, a hover follows it). A black flood from the line's end becomes "Start your night shift →" and the cursor clicks it.
Out: the button shrinks into a dot, the whole scene closes down into it like an iris, and the letters slide back out of the period. The tagline rises. Last frame = first frame.
</structure>

<build>
1. One HTML canvas. Everything is a pure function of time inside seek(t): no timers, no state between frames.
2. One element morphs through every state (size, radius, colour, material) from a table of beat times, so retiming is one edit.
3. Render the inside world into an offscreen canvas and reveal it through the period with a circular mask. Never zoom the camera into the dot.
4. Glass: a pre-blurred copy of the photo clipped to the shape, then a tint and a gradient rim.
5. Goo: blur + alpha threshold on an offscreen layer for the split and the merge.
6. Sound: a downloaded SFX for every event, each placed by its measured peak. The song enters on its hit. Loudnorm to -14 LUFS.
7. Render with Playwright at 60fps with 4 motion-blur subframes. Scan every frame for single-frame jumps and fix each one.
</build>

<gotchas>
A camera zoom into an off-centre dot swings sideways and spikes, so open the dot instead. Ease a closing iris by area, not radius, or its first frames jump. A helper that sets globalAlpha must restore the caller's, or fading cards pop. Counters read the frame's time, not the subframe's, or the digits smear.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and 6 stills (open, find, write, results, phone, out) before you render.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/twoclipping-747965/poster.d593c7a846.webp" width="400" alt="Nightshift Product Launch with Sunrise Crossfade Animation">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2105927781678747965)*

---

### 14. M3E Canvas Conference Video with Remotion and Three.js (14.6K views, 241 likes)
*Use Case: launch | Style: 3d, 2d*

**Prompt:**
```
Claude Opus 5.5が凄すぎる…！
Remotion × three.jsでM3E Canvasの動画を作ってみた👇️
```

<img src="https://media.skillry.dev/opus-5-5/lnkiai-544254/original.7dc4b9dc77.webp" width="400" alt="M3E Canvas Conference Video with Remotion and Three.js">

*Source: @lnkiai - [Post](https://x.com/lnkiai/status/2103759350330544254)*

---

### 15. Elysia Framework Documentation Promo with WebGL Canvas (11.3K views, 444 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Feed Elysia doc to Opus 5.5 to make a video

I write a storyboard, references, and direct Opus 5.5 to code a WebGL canvas and export it by frame into a video

Music and SFX are algorithmic music

Took 13 revisions, but everything is code that can be modified
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/saltyaom-620933/poster.45ef896397.webp" width="400" alt="Elysia Framework Documentation Promo with WebGL Canvas">

*Source: @saltyAom - [Post](https://x.com/saltyAom/status/2104677989728620933)*

---

### 16. MotionSites AI 1M Visitors Launch Video (10.8K views, 109 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Create a launch video for MotionSites AI, just hit 1 million monthly visitors after 8 months after launch.
```

<img src="https://media.skillry.dev/opus-5-5/viktoroddy-402509/original.31093e9638.webp" width="400" alt="MotionSites AI 1M Visitors Launch Video">

*Source: @viktoroddy - [Post](https://x.com/viktoroddy/status/2103802280617402509)*

---

### 17. Professional SaaS Product Launch Video (6.8K views, 85 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
I want you to create a highly professional SaaS product launch video. Go and look up [website] Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things). It should show what an incredible motion designer you are, like it's your showreel for a resume. Go all out.
```

<img src="https://media.skillry.dev/opus-5-5/gouthamjay8-910269/original.0ca013001b.webp" width="400" alt="Professional SaaS Product Launch Video">

*Source: @gouthamjay8 - [Post](https://x.com/gouthamjay8/status/2103816261339910269)*

---

### 18. Product Launch Wordmark Animation with Music (6.2K views, 35 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Ask me for: a one-word product name for the wordmark, one accent color, and a royalty-free track around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Product-launch UI motion in one continuous take. One shape tells the whole story: a prompt bar becomes a button, the button becomes a progress ring, the ring becomes a preview window, the window fills the screen, then shrinks into a toast and back into the prompt bar. No cuts, no fades between scenes: objects transform. A cursor triggers every change with real clicks. Warm off-white canvas, black UI, one accent color, Inter for UI and the wordmark. Springs everywhere with only a slight overshoot. Zoom the camera so each moment fills the square.
Banned: crossfades, gradients on UI, particles, glows, bouncy easing, dead beats, anything that feels like a template.
</direction>

<structure>
120 BPM, 24 beats, something happens on every beat.
Type the request into the prompt bar → click send → the bar collapses into a black circle → a progress ring fills in four steps while four chips spring out (concept, storyboard, motion, sound) → the chips fly into a timeline and the circle becomes a preview window → a playhead sweeps the clips → inside the preview an orbit draws itself, a planet starts moving and the wordmark rises letter by letter from a mask line → the preview fills the screen → the letters drop away, the planet flies into a toast and becomes its checkmark → "Rendered in code · 60 fps" → the toast turns back into an empty prompt bar. Last frame = first frame.
</structure>

<build>
1. One HTML file with a 1440x1440 canvas. Draw everything inside seek(t): no CSS transitions, timers or state carried between frames.
2. Use closed-form spring step responses. When a value changes target several times, add one spring per change so it stays a pure function of time.
3. The main shape is one rounded rect whose width, height, radius, position and color are each a chain of springs.
4. Typing is derived from time: characters shown = floor(progress × length), with a caret that blinks only when idle.
5. Find the beat grid of the track, start on a downbeat and place every click, pop and chime on its measured peak.
6. Render with Playwright at 60 fps, then encode H.264 CRF 16 and loudnorm to -14 LUFS.
7. Render one still per beat first. Fix anything cramped, off-grid or hard to read before the full render.
</build>

<gotchas>
Text inside a morphing shape needs its own clip and separate enter/exit timing. Text swaps need their own fade so they never overlap. The cursor must end at the exact position it started, or the loop will stutter.
</gotchas>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/0xnicc0-516612/poster.90697edc72.webp" width="400" alt="Product Launch Wordmark Animation with Music">

*Source: @0xnicc0 - [Post](https://x.com/0xnicc0/status/2107217691505516612)*

---

### 19. 9-Beat Launch Video Structure: Pain to CTA (5.3K views, 63 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Write my launch video as 9 beats: pain, reframe, name, how it works, objection, range, mechanism in numbers, offer, CTA – one line each. For every beat write 3 headline options and send them to Jev to pick the one that best fits my brief. Build each beat as a wireframe first in HyperFrames: boxes, outlined text, guide lines, no color. Show me one still per beat and lock the timing. Then skin it from my DESIGN.md without moving the layout, and render a split view: final on the left, wireframe on the right.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/archiveexplorer-560622/poster.6a4fd19bbc.webp" width="400" alt="9-Beat Launch Video Structure: Pain to CTA">

*Source: @ArchiveExplorer - [Post](https://x.com/ArchiveExplorer/status/2106732275685560622)*

---

### 20. Product Introduction Promo Animation Video (Chinese) (4.4K views, 21 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
设计个动画，介绍本项目的各项特性，像是专业的产品介绍宣传片，最后要生成 16:9 的mp4 视频
```

<img src="https://media.skillry.dev/opus-5-5/ezshine-750731/original.c74c7581aa.webp" width="400" alt="Product Introduction Promo Animation Video (Chinese)">

*Source: @ezshine - [Post](https://x.com/ezshine/status/2103501705698750731)*

---

### 21. TanStack AI Developer Tool Launch Film (4.4K views, 25 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Create and render a 15-second motion graphics video introducing TanStack AI. Make it feel like a premium            
  developer-tool launch film produced by Studio1: fast, precise, visually surprising, and polished enough to open a   
  keynote or lead a social campaign.                                                                                  
                                                                                                                      
  Use the TanStack AI feature details below as the source of truth. Studio1 is presenting the film; do not imply      
  Studio1 built TanStack AI.                                                                                          
                                                                                                                      
  Format and deliverables                                                                                             
  - 1920×1080, 30 fps, exactly 15 seconds; keep important content within a 9:16-safe central area.                    
  - Deliver the rendered MP4 and the editable project/source. Use Remotion or another code-based motion graphics      
  workflow if available.                                                                                              
  - Use real, editable typography and vector-style graphics. Do not rely on AI-generated text inside images.          
  - Add an original electronic sound design: a restrained opening pulse, tightly synchronized transition hits, rising 
  - Add an original electronic sound design: a restrained opening pulse, tightly synchronized transition hits, rising 
  momentum, and a satisfying final resolve. The story must also work muted.                                           
                                                                                                                      
  Visual direction                                                                                                    
  Dark graphite canvas; luminous gradients and controlled flashes inspired by TanStack’s identity. Crisp typography,  
  kinetic code, layered interface fragments, streaming data, branching paths, and smooth camera moves with convincing 
  depth. High contrast and immaculate spacing. Every transition should visually demonstrate a feature, rather than    
  simply replace one title card with another. Keep all on-screen wording brief and legible. Avoid generic stock       
  footage, spinning logos, fake dashboards, excessive glitch effects, and tiny code nobody can read.                  
                                                                                                                      
  Exact 15-second sequence                                                                                            
  - 0:00–0:02 — Hook: A single prompt cursor blinks. It sends one signal that expands into a network of               
  possibilities. On-screen: “What can one AI API become?”                                                             
  - 0:02–0:04 — Core and providers: The signal resolves into chat(); provider nodes connect and swap rapidly without  
  breaking the central flow. On-screen: “chat() · 24 providers”                                                       
  - 0:04–0:06.5 — Multimodal: One continuous stream transforms into text, waveform, image frame, and video timeline.  
  On-screen: “One pattern. Every modality.”                                                                           
  - 0:06.5–0:09 — Agents and tools: The stream branches into sandboxed agent runs, then reaches external tools        
  through MCP. Show distinct runs progressing in parallel. On-screen: “Agents · Sandboxes · MCP”                      
  - 0:09–0:11.5 — Reliability: An interrupted stream freezes, reconnects, and resumes from the same point; a clean    
  type-check confirmation snaps into place. On-screen: “Persistent. Durable. Type-safe.”                              
  - 0:11.5–0:15 — Reveal: All paths converge into a bold final composition: “TanStack AI” followed by “Build what’s   
  next.” Add a small “A Studio1 film” credit, visually subordinate to TanStack AI. Hold the final frame long enough   
  to read it.                                                                                                         
                                                                                                                      
  Accuracy guardrails                                                                                                 
  The supplied article says TanStack AI is in the release candidate phase, supports 24 providers, uses AG-UI, and     
  offers composable chat(), media generation, sandbox and agent-harness primitives, MCP, type safety, persistence,    
  and resumable streams. Do not call it a stable v1 release. Do not present planned orchestration features as already 
  shipped.                                                                                                            
                                                                                                                      
  Make the video, inspect the rendered result, and fix any clipped text, weak transitions, mistimed beats, or         
  unreadable frames before delivering it. The goal is a memorable showreel, not a slideshow of feature bullets.
```

<img src="https://media.skillry.dev/opus-5-5/howdevelop-733090/original.c156b8a720.webp" width="400" alt="TanStack AI Developer Tool Launch Film">

*Source: @HowDevelop - [Post](https://x.com/HowDevelop/status/2103840883812733090)*

---

### 22. Taxtello Bookkeeping App Product Film (4.2K views, 12 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
claude code (opus 5.5) made the product film for taxtello, my bookkeeping app

every frame is code: react + remotion, 0 after effects
the soundtrack is code too, synthesized in python from sine waves and noise

1 prompt and 2 rounds of feedback

full prompt below, steal it ↓

You are the senior motion designer, product designer and Remotion engineer for Taxtello.

Your task is to create a genuinely premium, Apple-level product film for Taxtello.

This is NOT a generic SaaS explainer.
This is NOT a feature walkthrough.
This is NOT a startup template animation.

I want a maximum 15-second brand/product showreel that makes Taxtello look like a mature, expensive, beautifully designed financial product.

Think:

Apple product launch film
× premium fintech
× editorial motion design
× restrained Stripe-like product presentation
× Taxtello's own visual identity

The desired reaction is:

“Wait, this is a German bookkeeping app?”

The film should feel expensive.

────────────────────────────────────
REPO / SOURCE OF TRUTH
────────────────────────────────────

First inspect the real repositories before designing anything.

Main product:
  /taxtello/main

Existing Remotion project:
  /taxtello/beta-motion

Important real brand sources:

  /taxtello/main/public/css/app/_00-tokens.css
  /taxtello/main/docs/design/TOKENS.md
  /taxtello/main/public/taxtello-wordmark.png
  /taxtello/main/public/icons.svg

Existing current product screenshots can be found under:

  /taxtello/main/artifacts/smoke-ui-smoke/

Prefer the newest valid screenshots/current source over stale artifacts.

There is already an existing 24-second Remotion hero animation in
/taxtello/beta-motion.

DO NOT replace it.
DO NOT regress it.
DO NOT force its current AI-connections storyline into this new film.

Create a new independent composition for this task, e.g.

  TaxtelloShowreel15

You may reuse good infrastructure, fonts, rendering utilities, motion primitives,
easing curves, asset loading and QA infrastructure from beta-motion where useful.

But creatively this should be a new film.

Before implementation, inspect the actual Taxtello UI and understand the product.

Do not invent functionality that does not exist.

────────────────────────────────────
REAL TAXTELLO VISUAL LANGUAGE
────────────────────────────────────

Use the real design system.

Core palette:

Background:
  #0c0f1a

Elevated surfaces:
  #111525
  #131722
  #1a2032

Primary brand gold:
  #e8b84b

Gold highlight:
  #f5d07a

Gold depth:
  #9b6d18

Primary text:
  #e8eaf2

Strong warm white:
  #f6f4eb

Secondary text:
  #8b93b5

Positive:
  #34d399

Negative/error only where semantically necessary:
  #f87171

Typography:
  Plus Jakarta Sans

Numbers / financial values where appropriate:
  JetBrains Mono

Use the actual Taxtello wordmark and/or Taxtello mark.
Do not redraw or approximate the logo.

Taxtello's gold should feel like a precious accent, not a yellow UI flood.

Think:
dark metal
warm gold
glass
ink
precision
quiet confidence

NOT:
cyberpunk
crypto
neon
gaming
generic AI purple
rainbow gradients

────────────────────────────────────
CORE CREATIVE RULES
────────────────────────────────────

Follow these rules ruthlessly:

1. ONE SHOT = ONE IDEA.

2. Every scene needs room to breathe.

3. The product UI is the hero.

4. Do not plaster explanatory copy everywhere.

5. Do not use hard cuts unless there is a deliberate reason.

6. Prefer object-driven transitions:
   a card becomes the next card,
   a chart line becomes a connector,
   a receipt becomes a booking,
   a number becomes another interface element,
   the camera moves through the product.

7. Use premium easing.
   No linear movement.

8. Motion should overlap naturally.
   Elements should not all start and stop at exactly the same frame.

9. Use depth sparingly:
   perspective,
   soft parallax,
   scale,
   foreground/background separation,
   controlled depth of field if achievable.

10. NO effect exists simply because it looks cool.

11. No particle spam.

12. No fake glassmorphism everywhere.

13. No excessive blur.

14. No pointless 3D spinning cards.

15. No constant zooming.

16. No 20 different animation styles.

17. No bouncing UI.

18. No giant marketing paragraph.

19. Do not imitate a particular Apple commercial shot-for-shot.
    Capture the philosophy and production quality instead.

The visual confidence should come from restraint.

────────────────────────────────────
FORMAT
────────────────────────────────────

Primary master:

1920 × 1080
60 fps
16:9
H.264
maximum duration: 15.0 seconds

Target runtime:
approximately 14.0–15.0 seconds.

It must work as a social-media product reveal even without sound.

If practical AFTER the master is finished, also create a deliberately recomposed
vertical/social variant.

Do not merely crop the desktop composition.

But the desktop master is the priority.

────────────────────────────────────
STORY / EMOTIONAL ARC
────────────────────────────────────

Do not make this a list of five features.

It should feel like one continuous thought:

CHAOS → CONTROL → CLARITY → TAXTELLO

The first 1.5 seconds must already look premium.

The first meaningful product moment should happen by ~2 seconds.

No five-second logo intro.

Possible narrative direction:

“Everything about your business, finally in one place.”

But SHOW this instead of explaining it.

I want approximately four visual ideas across the whole film.

Use the strongest REAL Taxtello surfaces you find in the repository.

Strong candidates include:

• Finanzcockpit / Dashboard
• Rechnungen
• Belege
• Bank / matching
• Steuergesundheit / tax overview

You do NOT need to show all of them.

Choose the visually strongest combination.

────────────────────────────────────
SUGGESTED 15-SECOND STORYBOARD
────────────────────────────────────

Treat this as a strong starting point, not a rigid template.

0.00 – 1.20

BLACK / NAVY.

A tiny warm-gold glint appears.

The glint elegantly reveals either the Taxtello mark or a fragment of the
wordmark.

No generic logo fade.

Think machined precision.

The camera moves through or past the mark and the UI begins to emerge from it.

Very little or no copy.

─────────────────

1.20 – 4.40

FINANCIAL CONTROL.

Reveal the actual Taxtello Cockpit as a dimensional product surface.

Not just a screenshot placed on screen.

Reconstruct/crop/layer it so individual interface regions can animate.

The hero financial number resolves crisply.
The chart draws in.
Supporting metrics settle slightly later.

Use subtle stagger.

A single line of copy may appear, for example:

  “Alles im Blick.”

or another equally short German phrase if you find something more fitting.

Maximum ~3–4 words.

The interface must remain recognizable as the real product.

─────────────────

4.40 – 7.50

DOCUMENT / BOOKKEEPING TRANSFORMATION.

Use a visual object from the previous scene as the transition.

Example:

A gold chart point expands into the corner of a receipt/card.
The camera follows it.
A receipt/document enters.
Taxtello identifies or organizes it.
The document snaps elegantly into its corresponding booking / financial record.

Use magnetic alignment and precision.

No cheesy scanner laser.

No floating paper tornado.

Possible micro-copy:

  “Belege. Erledigt.”

Only if it improves the scene.

─────────────────

7.50 – 10.70

MONEY / INVOICES.

Morph or transition naturally into the real Rechnungen interface.

Use one strong moment:

an invoice status changes,
a payment resolves,
an amount moves into place,
or the overview assembles itself.

Numbers should feel tactile and precise.

Use JetBrains Mono where this matches the actual product.

Gold highlights the active state.

Green is used only for a genuinely positive semantic state.

Potential copy:

  “Geld. Im Griff.”

Again: optional and extremely short.

─────────────────

10.70 – 12.80

TAX / CLARITY.

Transition into the real Taxtello tax-health / financial guidance surface.

Do not claim that Taxtello magically guarantees correct taxes.

Communicate visibility and control.

Example:

multiple noisy signals collapse into one calm, structured tax overview.

Potential copy:

  “Steuern im Blick.”

This scene should feel calmer than the previous scene.

The rhythm briefly slows.

─────────────────

12.80 – 15.00

BRAND PAYOFF.

Pull the camera outward.

The UI compresses or folds into one beautiful Taxtello product object / surface.

Darkness returns around it.

The gold Taxtello wordmark resolves.

One short brand line underneath.

Explore strong final lines such as:

  “Dein Business. Klar.”

  “Buchhaltung. Unter Kontrolle.”

  “Einfach mehr Überblick.”

  “Alles fürs Business. An einem Ort.”

Choose based on the actual product positioning you find in the repo.

Do not use a line simply because I suggested it.

The final frame must have enough stillness to register.

End confidently.

No giant bouncing CTA.

────────────────────────────────────
TRANSITIONS
────────────────────────────────────

This is one of the most important parts.

I want transitions that make the viewer think:

“Of course the next scene came from that.”

Good:

chart line → document edge
gold pill → invoice button
financial number → amount in invoice
card edge → next surface
camera push through interface element
shared geometry
mask reveal using actual product shapes

Bad:

crossfade
random wipe
spin transition
glitch
whip-pan every two seconds
generic SaaS slide-left
zoom-blur spam

Direct cuts are allowed only when a deliberate rhythmic impact benefits the film.

────────────────────────────────────
MOTION
────────────────────────────────────

Motion needs weight.

Use curves comparable to:

cubic-bezier(0.16, 1, 0.3, 1)

where appropriate.

Different elements should have subtly different arrival times.

Prefer:

anticipation
overshoot below ~2%
settling
motion continuation
shared velocity between scenes

Avoid cartoon springiness.

Camera movement should feel like a high-end macro product shoot.

Imagine we are filming a physical premium object even though it is software.

────────────────────────────────────
LIGHTING / MATERIAL
────────────────────────────────────

Use extremely subtle environmental lighting.

Possible treatments:

• soft gold rim lighting
• dark navy falloff
• faint ambient bloom
• soft specular highlight passing across a surface
• restrained vignette
• subtle grain if it materially helps

Keep the interface crisp.

Do NOT blur the product just to look cinematic.

No fake glossy reflections that destroy legibility.

────────────────────────────────────
TYPOGRAPHY
────────────────────────────────────

Use very little copy.

No sentence should compete with the product.

Headlines should generally fit on one line.

Use Plus Jakarta Sans.

Strong typography may occasionally scale very large and become a transition
device itself.

Avoid generic motion-graphics behavior where every word animates independently.

Typography should move as designed objects.

────────────────────────────────────
SOUND / RHYTHM
────────────────────────────────────

Design the motion as if it were cut to approximately 115–120 BPM:
premium, kinetic, sophisticated, not frantic.

Important moments should land musically.

Suggested sound language:

• low soft impact for major reveal
• restrained tactile UI clicks
• subtle metallic/glass tonal tick
• soft low-frequency movement during camera transitions
• elegant resolved tone at the logo payoff

Avoid:

• huge cinematic trailer boom
• EDM risers
• loud whooshes everywhere
• stock “tech interface” sounds
• rap beat
• aggressive bass

If there is no legally safe music/audio asset in the project, DO NOT pull
copyrighted audio from the internet.

Deliver the visual master without copyrighted music and create a concise cue
sheet describing where music/SFX should hit.

If suitable safe/local audio exists, use it.

────────────────────────────────────
REAL PRODUCT ONLY
────────────────────────────────────

This is critical.

Inspect current main.

Do not invent screens.

Do not invent metrics that imply real customer data.

Use clearly synthetic/demo-safe values if required.

Do not accidentally expose any personal, test-user or production information.

Reuse the visual structure of the actual Taxtello UI.

If a screen needs to be motion-separated, recreate it faithfully in React from
the real design system instead of simply scaling a giant screenshot.

The result should still look unmistakably like Taxtello.

────────────────────────────────────
IMPLEMENTATION EXPECTATIONS
────────────────────────────────────

Work directly in:

  /taxtello/beta-motion

Create the new composition alongside the existing one.

Keep existing compositions working.

Structure the new work cleanly.

Prefer reusable primitives for:

• camera surface
• product frame
• masked transitions
• text reveals
• UI region reveals
• ambient lighting
• shared-element transitions

Avoid one 1,500-line component.

Use deterministic Remotion animation driven by frame/time.

No setTimeout.
No nondeterministic animations.

Respect 60 fps throughout.

Use interpolation/spring/easing deliberately.

────────────────────────────────────
DO NOT STOP AFTER FIRST IMPLEMENTATION
────────────────────────────────────

This is a visual task.

You MUST review the actual rendered output.

Required workflow:

1. Inspect repository and real brand/product.

2. Write a concise storyboard with:
   - exact timestamps
   - key visual
   - transition logic
   - copy
   - intended emotional rhythm

3. Implement it.

4. Run typecheck / relevant checks.

5. Render representative frames at roughly:
   0.0 s
   1.0 s
   2.5 s
   4.5 s
   6.5 s
   8.5 s
   10.5 s
   12.5 s
   14.0 s
   14.8 s

6. VISUALLY INSPECT THOSE IMAGES.

Do not merely confirm that rendering succeeded.

Ask:

Does this look like an Apple-tier product film?

Does anything look like a template?

Is there too much on screen?

Is the product legible?

Are transitions logically connected?

Does Taxtello gold feel premium?

Does every frame look composed?

7. Fix visual weaknesses.

8. Render the complete film.

9. Inspect multiple exact decoded frames from the final MP4, not only browser
   screenshots.

10. Iterate again if necessary.

Do not declare success because the code compiles.

The deliverable is the FILM.

────────────────────────────────────
QUALITY BAR
────────────────────────────────────

Reject your own result if it feels like:

• a SaaS template
• a PowerPoint animation
• a website screen recording
• a generic Remotion demo
• a crypto advertisement
• an AI-generated promo template
• five screenshots sliding around
• excessive marketing copy

Every important frame should be good enough to use as a still advertisement.

I would rather have:

3 extraordinary visual moments

than

10 mediocre feature animations.

────────────────────────────────────
FINAL DELIVERABLES
────────────────────────────────────

Provide:

1. Final storyboard
2. New Remotion composition source
3. 1920×1080 / 60fps final MP4
4. Poster/final frame
5. Contact sheet with representative frames from the film
6. Exact runtime
7. List of real Taxtello assets/screens used
8. Brief explanation of the motion language
9. Any remaining visual compromises
10. Commands to reproduce the render

Save outputs in a clearly named directory such as:

  /taxtello/beta-motion/out/showreel-15/

Do not deploy anything.
Do not modify production data.
Do not merge anything.

Go all out creatively, but exercise ruthless restraint.

Make Taxtello look expensive.
```

<img src="https://media.skillry.dev/opus-5-5/daniel-haida-636937/original.965223fcbc.webp" width="400" alt="Taxtello Bookkeeping App Product Film">

*Source: @daniel_haida - [Post](https://x.com/daniel_haida/status/2104139720829636937)*

---

### 23. Professional SaaS Product Launch Video with Motion Graphics (3.2K views, 19 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things)

http://
t3pacademy.gumroad.com
```

<img src="https://media.skillry.dev/opus-5-5/techyoutbe-588678/original.6bbd2b7bae.webp" width="400" alt="Professional SaaS Product Launch Video with Motion Graphics">

*Source: @techyoutbe - [Post](https://x.com/techyoutbe/status/2103465227807588678)*

---

### 24. Brand Feature Launch Video Under 20 Seconds (3.1K views, 29 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
build me a beautiful launch video 20 seconds or under that shows all our key features, make it fast paced and fit our brand
```

<img src="https://media.skillry.dev/opus-5-5/ratheejaisal-154698/original.506783e480.webp" width="400" alt="Brand Feature Launch Video Under 20 Seconds">

*Source: @RatheeJaisal - [Post](https://x.com/RatheeJaisal/status/2103774864742154698)*

---

### 25. Sahi Trading Terminal Aesthetic Scale-In Animation (2.7K views, 23 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
create a self contained aesthetically pleasing, breathtaking animation of the Sahi Trading Terminal. it should start with a single dot on a black screen and then have multiple windows show up on the screen such as Charts, Positons , Option Chain, Watchlist. And zoom into and out at multiple scales. Finally the camera zooms out to make the desktop look like a point in space. And then it zooms back in to reveal a mobile screen in landscape mode with a chart in one half and an option chain in another. The video ends in Sjngle Screen Trading on SAHI
use javascript for it. be detailed and accurate. it should be visually stunning
0:46
```

<img src="https://media.skillry.dev/opus-5-5/dale-vaz-879074/original.155c6e80d4.webp" width="400" alt="Sahi Trading Terminal Aesthetic Scale-In Animation">

*Source: @dale_vaz - [Post](https://x.com/dale_vaz/status/2103290592679879074)*

---

### 26. Professional Product Launch Video with Royalty-Free Music (2.3K views, 12 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Create a professional product launch video with motion graphics. You have access to the designs in pen

Follow-up:
It is better, but can you choose a royalty-free song online? You are clearly not a good song maker. Also, I would not hire you or pay you for this as a motion designer. This is not a professional-looking video. Also, it is a bit too fast and bumpy
```

<img src="https://media.skillry.dev/opus-5-5/sachaarbonel-673648/original.b9dd794707.webp" width="400" alt="Professional Product Launch Video with Royalty-Free Music">

*Source: @sachaarbonel - [Post](https://x.com/sachaarbonel/status/2103614797501673648)*

---

### 27. 3D Tokyo Tower PR Video in 5 Minutes (2.3K views, 15 likes)
*Use Case: launch | Style: 3d, realistic*

**Prompt:**
```
※デザイナーの仕事がなくなりました。

Claude Opus 5.5に3Dモデルで東京タワーの映像を作らせた結果、5分でこのクオリティをポン出し

PR動画やYouTube動画制作など、複数の案件もこれ一つで全てこなせます。

具体的な作り方は記事で解説↓
```

<img src="https://media.skillry.dev/opus-5-5/maruo-0314-998343/original.a226de5212.webp" width="400" alt="3D Tokyo Tower PR Video in 5 Minutes">

*Source: @Maruo_0314 - [Post](https://x.com/Maruo_0314/status/2104159752095998343)*

---

### 28. Product Intro Video with Music Sync for Ultracode (1.8K views, 8 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Create an intro for https://t.co/wQXZTaqf1b highlighting what it does.

Create the music too and make sure the video is synced with it.

Give your best, Ultracode, as if it’s your portfolio master piece.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/bogdandragomir-412658/poster.a71ba77f69.webp" width="400" alt="Product Intro Video with Music Sync for Ultracode">

*Source: @BogdanDragomir - [Post](https://x.com/BogdanDragomir/status/2104045641538412658)*

---

### 29. Anti-LinkedIn Launch Video with Remotion (1.8K views, 25 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
I hate LinkedIn so much that I had Opus 5.5 + remotion make a launch video about it. 

I am building on @X, NOT LarpedIn (officially)
```

<img src="https://media.skillry.dev/opus-5-5/maxhirsch13-600983/original.add91f835f.webp" width="400" alt="Anti-LinkedIn Launch Video with Remotion">

*Source: @MaxHirsch13 - [Post](https://x.com/MaxHirsch13/status/2107985883949600983)*

---

### 30. CLIProxyAPI Promo Video with Remotion (1.6K views, 1 likes)
*Use Case: launch | Style: 2d, infographic*

**Prompt:**
```
哈哈,   别再急着买API, 用 CLIProxyAPI 盘活你的 AI 订阅这篇文章的视频版宣传片来了

全程使用 Opus 5.5 + remotion 制作 

感觉还不错的 ,  把流程环节都给讲清楚了
```

<img src="https://media.skillry.dev/opus-5-5/0xlangeai-597929/original.465dba7df9.webp" width="400" alt="CLIProxyAPI Promo Video with Remotion">

*Source: @0xlangeai - [Post](https://x.com/0xlangeai/status/2106391068367597929)*

---

### 31. Hoplite Feature Launch Video for Cloud Agent Transfer (1.6K views, 36 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
using the existing brand elements of hoplite create a feature launch video for closing your laptop with the hoplite mac app and seamlessly moving your agents to the cloud.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/ryan-morr-666741/poster.f4046f3771.webp" width="400" alt="Hoplite Feature Launch Video for Cloud Agent Transfer">

*Source: @ryan_morr - [Post](https://x.com/ryan_morr/status/2104249941136666741)*

---

### 32. DualSense Studio Launch Video with Remotion (1.5K views, 5 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Claude Opus 5.5 made this launch video for https://dualsense.studio using Remotion.

A few rough edges, but honestly I'm impressed 🤯
```

<img src="https://media.skillry.dev/opus-5-5/safaelmali-004843/original.1d98c8d524.webp" width="400" alt="DualSense Studio Launch Video with Remotion">

*Source: @SafaElmali - [Post](https://x.com/SafaElmali/status/2102749298673004843)*

---

### 33. Scroll Plus Product Promo Video with Remotion (1.5K views, 9 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
Opus 5.5 ve remotion ile scroll+ için bir tanıtım videosu hazirlattım.

Bence çok iyi yaptı. 

@scroll_plus 

https://scroll.pics
```

<img src="https://media.skillry.dev/opus-5-5/xenit-v0-532873/original.c83c69921f.webp" width="400" alt="Scroll Plus Product Promo Video with Remotion">

*Source: @xenit_v0 - [Post](https://x.com/xenit_v0/status/2106270979932532873)*

---

### 34. 30-Second Website Launch Showreel Video (1.3K views, 9 likes)
*Use Case: launch | Style: 2d, kinetic-type*

**Prompt:**
```
Create a dynamic 30sec launch vdo for your site url here. Make it feel like a high-end motion designer’s resume/showreel piece, bold, cinematic, polished, and visually impressive. Showcase the website’s identity, UI, features, and overall concept through fast-paced motion graphics, smooth transitions, kinetic typography, creative camera movements, and strong visual storytelling.

Go all out with the motion design. Make every second feel intentional and demonstrate exceptional creativity, timing, composition, and animation quality. The final video should feel like a professional product launch + motion design showreel, not a generic website promo.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/deeprajo1-623150/poster.210885effa.webp" width="400" alt="30-Second Website Launch Showreel Video">

*Source: @deeprajO1 - [Post](https://x.com/deeprajO1/status/2104490501340623150)*

---

### 35. Koto Search SEO Tool Automated Release Video (1.2K views, 4 likes)
*Use Case: launch | Style: 2d, infographic*

**Prompt:**
```
Opus 5.5×Gemini 3.8 Flash TTSやばい

新作SEOツール「コトサーチ」のリリース動画を、ほぼ自動で作ってくれた。
自分がやったのは「ツールへのログイン」と「承認」だけ。

個人的には、画面スクショまで自動で撮ってくれるところが一線を超えた感じ。
(もちろんナレーションも自然すぎてすごい..)

具体的な手順はこんな感じ👇
① Claudeがブラウザでツールにログイン
（ここだけ自分でやった）

② Claudeがアプリを触って、機能仕様書を作成
機能・料金・言っちゃダメな表現まで整理

③ Claudeがツールの画面スクショを撮影
PC・スマホ・パーツ切り出しで38枚

④ Claudeが絵コンテとナレーション原稿を作成

⑤ ClaudeがRemotionで動画を実装
書き出した静止画を自分で見て、文字切れや重なりまで直してくる

⑥ Gemini 3.8 Flash TTSでナレーション音声を生成
声の設定も原稿の入力もClaudeが操作

⑦ Claudeが音声を32フレーズに分解
話した瞬間に画面とテロップが出るよう自動で同期

⑧ BGMはClaudeがコードで作曲
声の下では自動で音量を下げてくれる

⑨ 52秒の動画が完成

ということでSEOツール「コトサーチ」は10月4日に正式リリースです。
キーワードを入れるだけでSEO記事ができて、サイト全体の内部リンクまで整えられます。
明日のリリースをお楽しみにしててください！！！
```

<img src="https://media.skillry.dev/opus-5-5/tetsu-tetsu333-576886/original.450ccb9120.webp" width="400" alt="Koto Search SEO Tool Automated Release Video">

*Source: @tetsu_tetsu333 - [Post](https://x.com/tetsu_tetsu333/status/2106177888265576886)*

---

### 36. Slideforge SaaS Product Launch Video (1.2K views, 10 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
I want you to create a highly professional SaaS product launch video for Slideforge. You can find its details in https://slideforge.io. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

<img src="https://media.skillry.dev/opus-5-5/techtactician-144474/original.c48ed81faf.webp" width="400" alt="Slideforge SaaS Product Launch Video">

*Source: @techtactician - [Post](https://x.com/techtactician/status/2103219463508144474)*

---

### 37. Professional SaaS Product Launch Video with Real Assets (1.1K views, 11 likes)
*Use Case: launch | Style: 2d, minimal*

**Prompt:**
```
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

<img src="https://media.skillry.dev/opus-5-5/hsanat-012699/original.1112d54ade.webp" width="400" alt="Professional SaaS Product Launch Video with Real Assets">

*Source: @hSanat - [Post](https://x.com/hSanat/status/2103358205091012699)*

---

## 2. Showreels & Motion Design Portfolios

### 38. Single Shape Morphing Through 12 UI States Motion Graphic (1.2M views, 12,676 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/twoclipping-402193/original.9c664f011f.webp" width="400" alt="Single Shape Morphing Through 12 UI States Motion Graphic">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2103273003555402193)*

---

### 39. Hand-Drawn Agent Story and Kinetic Type Showreel Comparison (119.3K views, 1,470 likes)
*Use Case: showreel | Style: hand-drawn, kinetic-type, particle*

**Prompt:**
```
Opus 5.5: a hand-drawn story. a little agent wakes up at its desk, gets feedback notes, fixes them, ends on heart eyes and a green check. 53 s
Sonnet 5.5: a kinetic type showreel. six easing curves, a morphing star, particles, blurred type, "every frame written in code". 15 s
Haiku 5.5: a step-by-step White Russian recipe. ice, vodka, coffee liqueur, cream, with live counters and a checklist. 30 s
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/n01ennn-597182/poster.81ceece753.webp" width="400" alt="Hand-Drawn Agent Story and Kinetic Type Showreel Comparison">

*Source: @N01ennn - [Post](https://x.com/N01ennn/status/2108520767092597182)*

---

### 40. Distilbook Product Showreel Motion Graphics Video (109.0K views, 641 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Research Distilbook.Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
```

<img src="https://media.skillry.dev/opus-5-5/ajith-io-208546/original.e545567a26.webp" width="400" alt="Distilbook Product Showreel Motion Graphics Video">

*Source: @ajith_io - [Post](https://x.com/ajith_io/status/2103469807375208546)*

---

### 41. 15-Second Product Motion Graphics Showreel (102.3K views, 988 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are. The content should focus on [your product]. You should visit the pages first to learn about the product, then write the video content yourself.
```

<img src="https://media.skillry.dev/opus-5-5/ann-nnng-852885/original.71bdae79b3.webp" width="400" alt="15-Second Product Motion Graphics Showreel">

*Source: @ann_nnng - [Post](https://x.com/ann_nnng/status/2103723183899852885)*

---

### 42. 15-Second Motion Graphics Showreel Demo (53.3K views, 44 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a 15-second motion graphics showreel that proves what an incredible motion designer you are, go all out.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/roundtablespace-232366/poster.c3e1114aa2.webp" width="400" alt="15-Second Motion Graphics Showreel Demo">

*Source: @RoundtableSpace - [Post](https://x.com/RoundtableSpace/status/2104424611010232366)*

---

### 43. Distilbook Motion Graphics Showreel Video (42.8K views, 159 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Research Distilbook.Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
```

<img src="https://media.skillry.dev/opus-5-5/itisrazak-332386/original.db024c3c41.webp" width="400" alt="Distilbook Motion Graphics Showreel Video">

*Source: @itisRazak - [Post](https://x.com/itisRazak/status/2103517930424332386)*

---

### 44. UI State Morphing Motion Graphic with Shape Transitions (30.1K views, 269 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/morse-369333/original.519a9f00ee.webp" width="400" alt="UI State Morphing Motion Graphic with Shape Transitions">

*Source: @__morse - [Post](https://x.com/__morse/status/2103485566570369333)*

---

### 45. Developer Tool Launch Video with Feature Highlights (29.5K views, 86 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are for <website url>
```

<img src="https://media.skillry.dev/opus-5-5/melvynx-638493/original.93566e677b.webp" width="400" alt="Developer Tool Launch Video with Feature Highlights">

*Source: @melvynx - [Post](https://x.com/melvynx/status/2103714680577638493)*

---

### 46. 15-Second Motion Designer Showreel Video (25.9K views, 119 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
制作一段 15 秒的动态图形视频，展示你作为动态设计师的非凡实力。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/dotey-773568/poster.deef84b37c.webp" width="400" alt="15-Second Motion Designer Showreel Video">

*Source: @dotey - [Post](https://x.com/dotey/status/2104649290668773568)*

---

### 47. 15-Second Showreel with Synthesized Code-Based Soundtrack (14.9K views, 206 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.

compose the soundtrack yourself, fully synthesized in code. no samples, no audio files, no VST instruments. every cut and transition must land on the beat.

1920x1080, 60fps. render the final video with the music mixed in as an MP4 and tell me where it's saved.
```

<img src="https://media.skillry.dev/opus-5-5/prasenx-693512/original.515f6345fb.webp" width="400" alt="15-Second Showreel with Synthesized Code-Based Soundtrack">

*Source: @prasenx - [Post](https://x.com/prasenx/status/2103538744695693512)*

---

### 48. Distilbook 30-Second Showreel with Reference Visual Style (13.6K views, 61 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Take reference from the given video (download it) and use the same visual style.
and Research about Distilbook. Make a dynamic 30-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
One thing to keep in mind: it should be cool as fck.

```

<img src="https://media.skillry.dev/opus-5-5/ajith-io-615243/original.cd413c6a04.webp" width="400" alt="Distilbook 30-Second Showreel with Reference Visual Style">

*Source: @ajith_io - [Post](https://x.com/ajith_io/status/2103541149709615243)*

---

### 49. Overthinking Concept Motion Graphics Showreel (10.9K views, 69 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it’s your showreel exploring the concept of “Overthinking,” inspired by the attached graphics.
```

<img src="https://media.skillry.dev/opus-5-5/gizakdag-239768/original.382eacc540.webp" width="400" alt="Overthinking Concept Motion Graphics Showreel">

*Source: @gizakdag - [Post](https://x.com/gizakdag/status/2103566030916239768)*

---

### 50. 15-Second Dynamic Motion Graphics Showcase (Chinese) (9.9K views, 61 likes)
*Use Case: showreel | Style: 2d, abstract*

**Prompt:**
```
以动态设计师的高级审美，制作一段动态的15秒动态图形视频
```

<img src="https://media.skillry.dev/opus-5-5/chatgptastra-807540/original.e84909440e.webp" width="400" alt="15-Second Dynamic Motion Graphics Showcase (Chinese)">

*Source: @ChatGptAstra - [Post](https://x.com/ChatGptAstra/status/2103834787647807540)*

---

### 51. 15-Second Motion Graphics Portfolio Showreel (8.6K views, 73 likes)
*Use Case: showreel | Style: 2d, 3d, kinetic-type*

**Prompt:**
```
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, particles, distortion, creative masking, compositing, lighting, depth, and seamless camera movement. Keep the pacing fast, confident, and visually surprising, with every shot transitioning naturally into the next. Make it feel meticulously art-directed rather than like a random collection of effects. Push the creativity, polish, timing, and visual impact as far as possible. This should feel like the opening reel that gets a motion designer hired.
```

<img src="https://media.skillry.dev/opus-5-5/lukasersil-726495/original.2886d94586.webp" width="400" alt="15-Second Motion Graphics Portfolio Showreel">

*Source: @lukasersil - [Post](https://x.com/lukasersil/status/2103742861971726495)*

---

### 52. Motion Designer Skills Showcase Reel (7.4K views, 20 likes)
*Use Case: showreel | Style: 2d*

**Prompt:**
```
Hello Opus 5.5 show me what an incredible motion designer you are.
```

<img src="https://media.skillry.dev/opus-5-5/zheke-622583/original.77013c3840.webp" width="400" alt="Motion Designer Skills Showcase Reel">

*Source: @zheke - [Post](https://x.com/zheke/status/2103418664854622583)*

---

### 53. AI In Public 24-Second Motion Reel (5.9K views, 53 likes)
*Use Case: showreel | Style: 2d, kinetic-type, particle*

**Prompt:**
```
Opus 5.5 on Max effort (Sound On):

"A 24-second AI In Public motion reel in Remotion at 1920×1080, 60fps. Use our blue # 3D40FE, white, navy, and ice palette with the AI In Public logo and sparkle. Keep it fast, premium, and smooth with motion blur, glow, camera hits, HUD details, seamless transitions, kinetic type, terminal UI, neural visuals, particles, and a cinematic logo finale. Generate all suspenseful music and sound effects in code and sync every hit perfectly. End with “AI IN PUBLIC, learning AI, out loud.” Every frame and sound should be written in code."

full prompt on here: http://ai-in-public.guide

then read the full guide below: ↓
```

<img src="https://media.skillry.dev/opus-5-5/humzaakhalid-537875/original.c0f48993ac.webp" width="400" alt="AI In Public 24-Second Motion Reel">

*Source: @humzaakhalid - [Post](https://x.com/humzaakhalid/status/2106640261623537875)*

---

### 54. 40-Second Distilbook Motion Graphics Showreel (5.0K views, 62 likes)
*Use Case: showreel | Style: 2d, kinetic-type*

**Prompt:**
```
Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are, like it's your showreel - go all out. Use the Oppenheimer theme music as inspiration, but compose it yourself.
```

<img src="https://media.skillry.dev/opus-5-5/ajith-io-562538/original.1a7582c547.webp" width="400" alt="40-Second Distilbook Motion Graphics Showreel">

*Source: @ajith_io - [Post](https://x.com/ajith_io/status/2103800569584562538)*

---

### 55. 30-Second Looping Pencil Line Motion Showreel (4.1K views, 20 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
<direction>
Build a 30-second looping motion design showreel that introduces CLAUDE, a motion designer.
Concept, in one line: one pencil line gets promoted three times (graphite on paper, wire on a blueprint, light on black) and never leaves the screen.

Every shot is made out of the previous one: shapes, type and colour transform into the next scene. No cuts, no fades.

Typeface: Geist only. Weight 900 for big words, 600 to 800 for small labels (24 to 28 px, tracked 0.14 to 0.3 em).
Palette: paper cream #EDE6D5, blueprint blue #1B3ED2, hologram cyan #45F0DD, plus black #07080A, graphite #16161A and white. Each stage's accent is the next stage's colour: blue pencil on paper, cyan on the blueprint, white on the hologram.
Camera: locked and front-on for the whole film, like a drafting table. Objects turn; the camera never moves.
Empty border: nothing at rest within 150 px of the sides or 90 px of the top and bottom. Things travelling through may cross it.

Three inks. The same geometry is drawn in whichever ink is on screen:
- PAPER: a cream paper background (use my paper image if I give one, otherwise flat cream with fine drawn grain) with a 60 px blue grid at about 13% and every fifth line at 26%. Lines are pencil: resampled and pushed off true by slow sine waves whose phase changes 8 times a second, stroked twice (full width at 90%, half width at 40% with more wobble), with paper tooth knocked out of the strokes, then multiplied onto the paper. Fills are diagonal hatching drawn on one line at a time. Big type is hatching cut to the letter shapes, with a doubled outline.
- BLUEPRINT: flat blue with the same grid in white. Clean white lines 3 to 4 px, hidden edges dashed and thinner, fills are fine clean hatching.
- HOLOGRAM: black with the same grid in cyan. Cyan lines with a white core 30% of the line width. Fills are horizontal scan lines on an 8 px pitch whose thickness follows how lit the surface is. No blur halo anywhere: it reads as light through line density only.

Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, 60 beats, 15 bars of 2 seconds. Something happens on every beat. Moves start 0.05 s before their beat so they land on it.
Easing: a critically damped spring, 1 - (1 + w t) e^(-w t) with w between 12 and 40, so nothing ever passes its target; exponential ease-in and ease-out for wipes, presses and exits.
Scene changes: paper to blueprint by a shape that floods the frame with a hard edge; blueprint to hologram and hologram to paper by one horizontal scan line.
The last frame is the first frame, so it loops.
Two corner labels stay on all film: top left "FIG. 07 — GEAR" (bar number and name), bottom right "BEAT 27 / 60". Bar names: DRAFT, TYPE, CURVE, MORPH, TILE, SOLID, GEAR, PANEL, DATA, LIGHT, WAVE, GLOBE, DRUM, FORM, END.
</structure>
<mascot>

The creative director: a small box character. Body 76 x 54 units with rounded corners, two short arm stubs (24 x 16) at mid height, four straight legs (11 x 33), two tall rounded-rectangle eyes (8 x 14). Draw it about 250 px wide. Its right arm is raised 58 degrees holding a pencil.
On paper: graphite outline with sparse blue hatching and graphite eyes. In the hologram: cyan outline with scan-line fill and white eyes. It is never a fourth colour.
It runs with alternate leg pairs lifting, six steps a second, leaning 7 degrees into the run.
</mascot>
<storyboard>

Bar 1, HOOK, 0-2 s, paper.
Frame 0: CLAUDE in Geist 900, fitted to 1500 px wide, centred, pencil-hatched. INTRODUCING small above it, A MOTION DESIGNER small below. A pencil rail 1620 px wide sits 96 px above the letters. The mascot stands on the rail at x = 1560 with CREATIVE DIRECTOR lettered to its left.

0.0: the small lines un-type; the mascot runs off the right edge, accelerating.

0.36 to 0.5: the rail drops, accelerating, to 26 px below the baseline and presses the letters flat into itself.

1.0: the line rises to the middle, shortens to 1320 px and splits into two rails 140 px apart; 41 blue ruler ticks sweep along the top rail.

1.5: the rails open to 300 px; a blue height dimension draws at the right with a live number.

Bar 2, KINETIC TYPE, 2-4 s, paper. Words sit between the rails and are clipped to that slot; the rails move to fit each word.

2.0: INTRODUCING rises through the baseline letter by letter, then lifts out through the top.

2.5: A MOTION whips in from the left (1400 px in 0.2 s).

3.0: the rails clap shut on it and reopen, stretching DESIGNER out of the line; its letters then fly out sideways.

3.5: CLAUDE in blue pencil, letters dropping from above one every 0.05 s. At 4.0 the rails close and crush it into one line 1476 px long.

Bar 3, CURVES, 4-6 s, paper.

4.1: the line gets pen-tool handles (430 px long at 58 degrees, small squares at the ends, circles on the handle tips, the label EASE) and bends into an S.

4.5: the handles swing to the mirror angle; eight blue copies fan out 34 px apart, joined at both ends like a leaf.

5.0: handles retract; the ribbon becomes travelling sine waves (amplitude 92 px, 2.75 cycles, each line a little out of phase).

5.5: it gathers back into one flat line.

Bar 4, SHAPE MORPH, 6-8 s, paper.

6.1: the line curls into a circle of radius 235 (curvature grows, length stays). 6.5: triangle, turning 120 degrees as it changes. 7.0: square. 7.5: hexagon, point up, radius 270. Blue hatching builds inside, then cross-hatching.

Bar 5, TILING, 8-10 s, paper.

8.0: the hexagon shrinks to radius 96 and six more slide out around it. 8.5: twelve more, a honeycomb of

19. 9.0: dense hatching sweeps across until every cell is solid blue. 9.6 to 10.0: the centre cell's shape grows past the frame with a hard edge; inside it is the blueprint, with the honeycomb in white line.

Bar 6, 2D TO 3D, 10-12 s, blueprint.

10.0: three lines draw inside every hexagon, plus three dashed hidden ones: each is a cube seen corner-on. 

10.5: the eighteen outer cubes slide into the centre one, which grows to radius 270. 11.0: it turns a quarter and perspective switches on. 11.5: it faces front.

Bar 7, MECHANISM, 12-14 s, blueprint.

12.0: the cube flattens and its front square grows teeth: a 16-tooth gear, pitch radius 208. From 12.25 the train steps 45 degrees on every eighth note. 12.5: a 10-tooth gear grows out to the upper right, meshing. 13.0: a 12-tooth gear to the upper left. Each has a dashed pitch circle, a hub and a label (16T, 10T, 12T). 13.5: the small gears retract; the gear becomes a square again and the cube gets its depth back.
Bar 8, UNFOLD, 14-16 s, blueprint.

14.0: the cube unfolds on its hinges into a cross of six squares. 14.5: the squares slide and stretch into six panels: a header strip, a tall sidebar, a wide chart, two tiles, a timeline strip.

15.0: they fill in. Header: "CLAUDE — MOTION REEL", a BARS / RING switch, a LIGHT toggle. Chart: 30 bars, one per second of this film, heights 42 30 36 44 50 46 52 62 50 56 62 72 60 66 58 76 56 62 68 74 70 78 86 94 100 93 97 90 80 50. Timeline: the 15 bar names, a keyframe diamond on each.
15.5: counters roll up: 120 BPM, 60 BEATS, 1800 FRAMES, 0 CUTS.
Bar 9, DATA, 16-18 s, blueprint.

16.0: a graph line draws across the bar tops; a cyan playhead lands on the timeline at the real time. The current second's bar is solid cyan, earlier ones hatched, later ones outlined. A cursor arrives.
16.5: it clicks RING: the chart's baseline bends round into a circle of radius 110 with the ba
```

<img src="https://media.skillry.dev/opus-5-5/heyiamnick-119558/original.9d470f3eab.webp" width="400" alt="30-Second Looping Pencil Line Motion Showreel">

*Source: @heyiamnick - [Post](https://x.com/heyiamnick/status/2109174851412119558)*

---

### 56. 15-Second Self-Introduction Motion Designer Video (Japanese) (4.0K views, 30 likes)
*Use Case: showreel | Style: 2d, kinetic-type, particle*

**Prompt:**
```
# あなたの役割
あなたは一流の映像演出家（モーションデザイナー）です。
採用担当者が15秒見ただけで「この人に仕事を頼みたい」と思う、自己紹介用の映像を作ってください。
主役はあなた自身（Claude）です。

# 作るもの
- HTML・CSS・JavaScriptだけで完結する、1つのHTMLファイル
- 外部の画像や動画は使わない。図形・文字・粒子はすべてコードで描く（フォントはGoogle Fontsのみ可）
- 画面は16:9、1920×1080を基準にし、ウィンドウの大きさに合わせて縮小表示
- 長さはちょうど15秒。最後に「もう一度再生」ボタンを出す
- すべての動きを「経過時間」1本で管理し、requestAnimationFrameで60fpsで動かす
- 再生ボタンを押すと、Web Audio APIで合成した拍と効果音が動きにぴったり合って鳴る

# 進め方（この順で必ず行う）
1. 考え方を一文で決める（例：「1本の線が、あらゆる形に生まれ変わる」）
2. 色は3〜4色、書体は2種類までに絞り、理由を一行で書く
3. 0.5秒刻みの絵コンテを表で示す（時間／画面で起きること／使う技法／狙い）
4. 実装する
5. 下の「合格ライン」で自己点検し、足りない点を直してから出す

# 構成の目安
- 0〜2秒：つかみ。最初の0.5秒で目を奪う
- 2〜10秒：技の見せ場。1.5〜2秒ごとに違う技法へ切り替える
- 10〜13秒：最も密度の高い盛り上がり
- 13〜15秒：名前「Claude」がきれいに決まって終わる

# 必ず使う技法（最低6つ）
- 文字の動き（1文字ずつ登場、分解して組み直す）
- 図形の変形（丸が四角に、線が文字に、など）
- 切り抜き（マスク）を使った場面転換
- 奥行き（視差、立体的な回転）
- 粒子の集合と拡散
- 数字の数え上げや、線が描かれていく表現

# 合格ライン
- 等速の動きはゼロ。すべての動きに緩急をつける（入りは速く、止まりは柔らかく、ばねの揺れも使う）
- 場面をまたぐ動きは重ねる。前の動きが終わる前に次が始まり、切れ目を感じさせない
- 主要な動きは0.5秒ごとの拍（120BPM相当）にそろえる
- 見せ場の直前に0.3〜0.5秒の「溜め」を置き、強弱を作る
- どの瞬間で一時停止しても、1枚の絵として美しく成立する
- ありがちな表現は避ける（全部フェードイン、虹色の色使い、意味のない回転）

# 最後に
完成したファイルと、絵コンテの表を出してください。
説明は3行以内で十分です。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/tanabe-fragm-706979/poster.2469a2c140.webp" width="400" alt="15-Second Self-Introduction Motion Designer Video (Japanese)">

*Source: @tanabe_fragm - [Post](https://x.com/tanabe_fragm/status/2103802156675706979)*

---

### 57. Alchemy Infra Company Motion Graphics Showreel (4.0K views, 14 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for the infra company https://alchemy.com, go all out!
```

<img src="https://media.skillry.dev/opus-5-5/onewaysidewalks-440008/original.d26cfa4030.webp" width="400" alt="Alchemy Infra Company Motion Graphics Showreel">

*Source: @onewaysidewalks - [Post](https://x.com/onewaysidewalks/status/2103500011581440008)*

---

### 58. 20-Second Psychedelic Hypnotic Motion Showreel (3.9K views, 56 likes)
*Use Case: showreel | Style: 2d, abstract*

**Prompt:**
```
make a dynamic 20-second motion graphics video that shows what an incredible motion designer you are, psychedelic and hypnotic. make it feel like a showreel piece. go all out.
```

<img src="https://media.skillry.dev/opus-5-5/monokern-832979/original.a67fabae15.webp" width="400" alt="20-Second Psychedelic Hypnotic Motion Showreel">

*Source: @monokern - [Post](https://x.com/monokern/status/2103563538828832979)*

---

### 59. UI Component Shape Morph Motion Design (Japanese) (3.3K views, 10 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
<inputs>
次の3つを私に質問すること：図形が変身する8〜12個の画面部品（例：ボタン、読み込み中の表示、音楽プレーヤー、音量スライダー、オン/オフのスイッチ、タブ、グラフ、⌘Kで開く検索窓、一瞬出る通知）、色は完全な白黒か差し色1色か、そして120BPM（1分間に120拍のテンポ）前後の著作権フリーの曲（例：Mixkit、商用利用無料）。
</inputs>

<direction>
デザイナー向け作品サイト「Dribbble」に載るレベルの、洗練された画面の動き。図形は1つだけで、絶対に場面を切り替えない。すべての状態は、同じ1つの図形が大きさ・角の丸み・色を変えながら形を変えていく動きで表し、中身は短いぼかしをはさんで入れ替える。カーソルが本物のクリックとドラッグで、すべての変化を起こす。背景はあたたかみのある明るいグレー、部品は白と黒、画面の文字は日本語で、日本語フォントはNoto Sans JP、英数字と記号はGeist（1種類のフォント）。動きはすべて「ばね」のような自然な動きにし、行き過ぎ（跳ね返り）はごくわずかまで。カメラはズームして、各状態が画面いっぱいになるようにする。最後のフレームは最初のフレームと同じにして、ループさせる。
禁止：弾むような動き、粒が飛び散る演出、光るにじみ、部品へのグラデーション、線の太さが揃っていないアイコン、何も起きない無駄な間、テンプレっぽく見えるもの全般。
</direction>

<structure>
120BPM、7小節（約14秒）、毎拍なにかが起きる。
ボタン → 読み込み中の表示 → チェック → iPhoneのダイナミックアイランド風の表示 → 再生/一時停止のマークが滑らかに変わる音楽プレーヤー → 再生バーのつまみをドラッグして再生位置を動かす → 音量スライダーに変身（最大を超えてドラッグするとゴムのように伸びる） → オン/オフのスイッチが拍に合わせて切り替わる → スイッチのつまみが液体のように動くタブの選択表示になる → タブが開いて、自分で線を描いていくグラフに（カーソルを乗せると吹き出しが出る） → ⌘Kの検索窓に折りたたまれる → 入力して候補を絞り込む → Enter → 一瞬出る通知 → ボタンに戻る。
</structure>

<build>
1. HTMLファイル1つ、正方形1440x1440。すべての見た目は seek(t)（時間tを渡すと、その瞬間の画面が決まる関数）の中で、時間から計算する。CSSトランジション（自動アニメーション機能）もタイマーも使わず、フレーム間で状態を持ち越さない。
2. 「ばね」の動きは、式で直接求められる形（閉形式のステップ応答）にする。目標が何度も変わる値は、変化ごとに1つずつ計算した動きを足し合わせる。そうすれば、いつでも時間だけで値が決まる。
3. タブの選択表示は、左端と右端を別々のばねで動かし、進む方向の先端が後ろ側より先に伸びるようにする。スイッチのつまみも同じ手法。
4. ドラッグは直接操作：カーソルを押している間、値はカーソル位置から計算する。離したら、その位置からばねで戻る。
5. 曲はnumpy（計算用のツール）で解析して拍の位置を割り出し、小節の頭の拍から始める。操作音は、測定した音のピークの位置に置く。
6. Playwright（ブラウザを自動操作して画面を画像に書き出すツール）で描画する。1フレームあたり4コマ分を書き出して、ffmpeg（動画を作るツール）のtmixで重ねてモーションブラー（動きの残像）をかけ、60fpsにする。
7. 全編を書き出す前に、1拍ごとに1フレームだけ書き出して確認する。拍からズレているもの、窮屈なもの、読みにくいものを直す。
</build>

<gotchas>
カメラで拡大縮小される要素には will-change（ブラウザの描画設定）を絶対に付けない。付けると文字がぼやける。形が変わる箱の中で入れ替わる文字には、それぞれ専用の出入りのタイミングを持たせる（重なるのを防ぐ）。最後のフレームは、カーソルの位置と速度も含めて最初のフレームと完全に一致させる。そうしないと、ループがカクつく。
</gotchas>

<start>
まず入力内容を私に質問して、コードを書く前に、拍ごとの状態リストを見せて。
</start>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/okapi-fukugyo-166351/poster.34c9248f5d.webp" width="400" alt="UI Component Shape Morph Motion Design (Japanese)">

*Source: @okapi_fukugyo - [Post](https://x.com/okapi_fukugyo/status/2103586082336166351)*

---

### 60. Alan AI 15-Second Motion Designer Showreel (3.1K views, 24 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15 second motion graphics video that shows what an incredible motion designer you are, for 
@tryAlanAI
. go all out.
```

<img src="https://media.skillry.dev/opus-5-5/prasad-pilla-496049/original.398382b93d.webp" width="400" alt="Alan AI 15-Second Motion Designer Showreel">

*Source: @prasad_pilla - [Post](https://x.com/prasad_pilla/status/2103728953785496049)*

---

### 61. Opus 5.5 Self-Introduction 10-Second Motion Graphic (2.9K views, 42 likes)
*Use Case: showreel | Style: 2d, abstract*

**Prompt:**
```
make a dynamic 10-second motion graphics video that shows who are you as Opus 5.5 - be as creative and dynamic as possible. Avoid the frames and texts on the corners which are typical ai made giveaways!
```

<img src="https://media.skillry.dev/opus-5-5/1littlecoder-914649/original.b2bf84bb6f.webp" width="400" alt="Opus 5.5 Self-Introduction 10-Second Motion Graphic">

*Source: @1littlecoder - [Post](https://x.com/1littlecoder/status/2103587706999914649)*

---

### 62. 45-Second Vertical App Feature Showcase Video (2.5K views, 1 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Make a 45–50 second vertical video for my app: a glance inside the app.
Show every feature, use motion, be creative. I want it good enough for your CV.

- Real, not mocked: record each feature being used in the simulator (tap a filter, open a result, add it).
- Stretch your imagination: let each feature break out of the phone and change the world around it.
- The bar: a motion designer's showreel piece. The best motion you can do. Go all out.
- Nothing made up: every number and label on screen comes from the recordings.
- No stock sound effects; I'll add the music.
- Keep text clear of the TikTok/Instagram interface.
- Let viewers follow: each feature stays on screen for at least 2.5 seconds.
```

<img src="https://media.skillry.dev/opus-5-5/bilimfili1-459762/original.a1f891890a.webp" width="400" alt="45-Second Vertical App Feature Showcase Video">

*Source: @Bilimfili1 - [Post](https://x.com/Bilimfili1/status/2103743617848459762)*

---

### 63. 4 Motion Videos in 3 Days Without After Effects (2.0K views, 30 likes)
*Use Case: showreel | Style: 2d, 3d, minimal*

**Prompt:**
```
I made 4 motion videos for @Shillz_Official in 3 days without opening After Effects.

no templates. no stock music. no motion designer.

just Claude writing code.

here's exactly how, step by step (bookmark this)

【作者补充制作说明】
the stack:

Claude (Opus 5.5) writes all of it
Remotion turns React code into video
three.js renders real 3D, so the glass actually refracts light
Python writes the music

I never touched a timeline. I just gave notes.
```

<img src="https://media.skillry.dev/opus-5-5/colecornelll-047465/original.acf76ddaf4.webp" width="400" alt="4 Motion Videos in 3 Days Without After Effects">

*Source: @colecornelll - [Post](https://x.com/colecornelll/status/2105751866051047465)*

---

### 64. Animated UI Card with Scale-In and Graph Line Motion (1.9K views, 22 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
the card should scale in from 30% to 100% scale and it should go from Invisible to visible. every detail slide in orderly one after the other when the card settles in scale. the graph line animates in like a line path. the glow at the back becomes visible as the card details slides in. the two rectangles move accross the screen at slightly different timing giving it this light effect.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/khlaseek-dsgner-877659/poster.1e81ae3ddd.webp" width="400" alt="Animated UI Card with Scale-In and Graph Line Motion">

*Source: @Khlaseek_dsgner - [Post](https://x.com/Khlaseek_dsgner/status/2108167809997877659)*

---

### 65. Pure Function Per-Frame Video Pipeline with Beat Grid (1.8K views, 30 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
The trick is NOT the prompt. It is one rule: every frame is a pure function of time.

song -> numpy beat grid -> Opus 5.5 writes one HTML file -> Playwright renders -> ffmpeg blends

step 1 -> pick a royalty-free track around 120 BPM

step 2 -> give Opus 5.5 8 to 12 UI states: button, loader, toggle, chart, command palette

step 3 -> one HTML file, 1440x1440, every style computed inside seek(t). no CSS transitions, no timers

step 4 -> springs as closed-form math, so any frame renders in any order

step 5 -> numpy finds the beats, every UI sound lands on a measured peak

step 6 -> Playwright shoots 4 subframes per frame, ffmpeg tmix blends them into 60fps motion blur

step 7 -> render one frame per beat first, fix what is off the grid, then the full render

the math:

120 BPM x 7 bars = 28 beats = 14 seconds
14 s x 60 fps x 4 subframes = 3,360 browser renders
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/yankis0x-174321/poster.804b9fb5da.webp" width="400" alt="Pure Function Per-Frame Video Pipeline with Beat Grid">

*Source: @yankis0x - [Post](https://x.com/yankis0x/status/2103502194578174321)*

---

### 66. World-Class Designer Showreel Centerpiece Motion Graphic (1.8K views, 22 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Create a motion graphics video that feels like the centerpiece of a world-class designer’s showreel. Treat it as your résumé: showcase your full range, push the craft as far as possible. Go all out.
```

<img src="https://media.skillry.dev/opus-5-5/samuel-spitz-503053/original.6b368c2158.webp" width="400" alt="World-Class Designer Showreel Centerpiece Motion Graphic">

*Source: @samuel_spitz - [Post](https://x.com/samuel_spitz/status/2103544855276503053)*

---

### 67. Pixelup Labs 15-Second Motion Graphics Showreel (1.8K views, 32 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
create a 15 sec motion graphics showreel for @pixeluplabs, be extremely detail oriented and go all out
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/arjunsh1607-922126/poster.df29566824.webp" width="400" alt="Pixelup Labs 15-Second Motion Graphics Showreel">

*Source: @arjunsh1607 - [Post](https://x.com/arjunsh1607/status/2104295133432922126)*

---

### 68. Cinematic 3D Iron Man Helmet in Three.js (1.8K views, 3 likes)
*Use Case: showreel | Style: 3d, realistic*

**Prompt:**
```
Create a visually stunning, silent 3D browser animation of Iron Man’s classic red-and-gold helmet, presented as a premium cinematic studio object.

Deliver a complete runnable HTML experience using Three.js.

COMPOSITION

One helmet only, floating in the center of the
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/ivanainai-190629/poster.4530b3570c.webp" width="400" alt="Cinematic 3D Iron Man Helmet in Three.js">

*Source: @ivanainai - [Post](https://x.com/ivanainai/status/2107217500761190629)*

---

### 69. Developer Showreel Built with Remotion (1.7K views, 25 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Claude Opus 5.5 is incredible.

I gave it a pretty simple task:

Create a Remotion-based showreel featuring my work as a developer, content creator, and open-source maintainer.

What I wanted was a cool 30-second motion graphic that introduces  me as a developer and content creator.

That was basically it.

Claude went to work for around 20 minutes, writing the Remotion code, putting together the animations, transitions, layouts, and the overall story.

And this is what it produced.

Stunning, right?!

What surprised me most is that this isn't just AI generating a few video clips.

It's AI building the video programmatically.

The entire thing is code.

Which means I can tweak the content, change the animations, swap assets, update numbers, or completely redesign a section - and render it again.

Video generation was one of those things I thought would take AI quite a while to really crack.

Turns out we're already much closer than I expected.

And for developers, tools like Remotion + coding agents open up some seriously interesting possibilities.

Interested in knowing what prompt I used?

Comment "Remotion".
```

<img src="https://media.skillry.dev/opus-5-5/iammukeshm-421585/original.3b913a2506.webp" width="400" alt="Developer Showreel Built with Remotion">

*Source: @iammukeshm - [Post](https://x.com/iammukeshm/status/2103511739585421585)*

---

### 70. Deterministic 720-Frame Butterfly Animation with 6 Counters (1.7K views, 23 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Picture a butterfly with no memory of its last wingbeat.
Ask it for frame 720 and you get frame 0, pixel for pixel.

720 frames. 12 seconds. 6 counters. All at 0.

Opus 5.5 can't hand over a video file, one builder says. He made that gap the method.

> STAGE - one fixed 1000x1080 canvas, fonts baked in
> RENDER - a windowless engine calls draw(f) once per frame number
> ENCODE - ffmpeg writes H.264, pixel aspect ratio declared
> CHECK - three passes after every build

By his account the model writes only the first, a drawing program. The other three get reused.

Each picture depends on its number alone: no clock, no timer, no dice that land differently each run.

So any frame renders the same every time. A fix is a small edit and a re-render.

The sample loop is 720 pictures in 12 seconds. A hand animator at 12 drawings a second would need 144.

The smoke test plays one loop unseen and counts six kinds of defect, from script errors to text on text.
Six yes/no gates before a human looks.

The seam check puts frame 0 against frame 720. One changed pixel means some motion isn't periodic.

He reports a last render of 1,820 frames with six zeros. At the sample's 60 fps that would be about half a minute.

Let one frame read a clock and the same number stops giving the same picture.

We drew the rule as an X-ray butterfly, its wingbeat computed from the frame number ↓
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/0xkarmi-129839/poster.818e7ed18d.webp" width="400" alt="Deterministic 720-Frame Butterfly Animation with 6 Counters">

*Source: @0xKarmi - [Post](https://x.com/0xKarmi/status/2108495927988129839)*

---

### 71. Flowdrive 15-Second Motion Designer Showreel (1.6K views, 6 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a flowdrive. go all out.
```

<img src="https://media.skillry.dev/opus-5-5/manuelogomigo-052364/original.83bcca4a5b.webp" width="400" alt="Flowdrive 15-Second Motion Designer Showreel">

*Source: @manuelogomigo - [Post](https://x.com/manuelogomigo/status/2103614667038052364)*

---

### 72. Seattle 15-Second Motion Graphics City Video (1.5K views, 25 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
create a 15-second motion graphics video about Seattle ( sound on 🔊) 

Everything from the visuals and animation to the music and final video was created directly by Claude. Every frame and every sound was created by code, from scratch.

No screen recording, editing software, stock footage, music samples, or AI image or video generators were used.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/yanliudesign-839698/poster.0aaf78fc71.webp" width="400" alt="Seattle 15-Second Motion Graphics City Video">

*Source: @yanliudesign - [Post](https://x.com/yanliudesign/status/2104393313935839698)*

---

### 73. Shape Morph Canvas Animation with Color and Radius Inputs (1.4K views, 16 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Give me:

* canvas color
* shape color
* accent color
* shape radius
* fonts
* the states the shape should morph through

Use hex codes, seconds, damping ratios and pixel sizes instead of adjectives.
</inputs>

<direction>
Make a 14 second, 1440x1440, 60fps seamless UI motion loop.

One shape, zero cuts.

The shape morphs from state to state and is never replaced.

Each state fills 50% of the frame.

The camera starts on the beat and settles slower than the shape.

Use closed-form springs.

Shape damping 0.72, settle time 0.35s.
Camera damping 1.0, settle time 0.6s.

Content swaps use 12px blur and fade over 0.15s.

The cursor tip stays locked to whatever it drags.
</direction>

<structure>
Use a 0.5s beat grid.

0.0 - pixel mascot idles
1.0 - mascot squashes into play button
1.5 - loader
2.0 - check draws
2.5 - timeline scrub
4.0 - keyframe stretches past the end and snaps back
5.0 - bezier editor
7.0 - counter rolls F 000 to F 840
8.5 - render bar fills
10.0 - command palette types "export mp4"
11.0 - toast says "840 frames rendered"
12.0 - toast shrinks back into the mascot

The last frame must be the first frame.
</structure>

<build>
Write one HTML file with Canvas 2D.

window.renderAt(t) must be a pure function of time.

No Math.random.
No clock.
No carried state.

?t= must freeze the exact moment.

Render every frame from renderAt(frame / 60).

Use 4 subframes for motion blur.

Encode to H.264 at 60fps.
</build>

<gotchas>
Fix the cursor jump at the loop wrap with:

t - 14*floor(t/14)

Do not cross-fade orange into ink.

Use a ripple from the center at 1.5s and from the click point at 12.0s.

Roll word swaps vertically.

Start draw-on after blur-in.

Aim the cursor at where the target will be when it lands.

Keep cursor speed under 65 px/frame.
</gotchas>

<start>
First show me the storyboard.

Then write the code.

After the first render, check 5 frames around every beat and fix the issues before the final render.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/flxrnc-251921/poster.cf8385656c.webp" width="400" alt="Shape Morph Canvas Animation with Color and Radius Inputs">

*Source: @flxrnc - [Post](https://x.com/flxrnc/status/2108242454105251921)*

---

### 74. 15-Second Studio Motion Design Reel with Orange Circle Through-Line (1.3K views, 5 likes)
*Use Case: showreel | Style: 2d, kinetic-type, minimal*

**Prompt:**
```
15s studio motion-design reel, 1920x1080.
Warm off-white, black type, one orange accent only.
A single orange circle with motion blur is the through-line and the cut.
Show: toggle click, the word Motion, shape morphs, dotted connector, rounded diamond, circular kinetic type (KINETIC TYPE · 3D · LOOPS · SPRINGS · EASING), dot grid, then the card “Opus 5.5 / Motion designer. / 0 keyframes”.
Springs, no glow, no particles, no default easing.
Looks like a refined product-studio showreel, not an AI trailer.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/threeaus-886343/poster.13403f037d.webp" width="400" alt="15-Second Studio Motion Design Reel with Orange Circle Through-Line">

*Source: @threeaus - [Post](https://x.com/threeaus/status/2105152377057886343)*

---

### 75. 15-Second Moving Showreel for Motion Designer Resume (1.2K views, 4 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Make me a 15-second moving video that shows how amazing of a motion designer you are. Like a showreel for your resume. Go all out.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/aiaircle34052-950750/poster.eb01b53dbf.webp" width="400" alt="15-Second Moving Showreel for Motion Designer Resume">

*Source: @AiAircle34052 - [Post](https://x.com/AiAircle34052/status/2103663848846950750)*

---

### 76. Opus 5.5 Remotion Animated Motion Design Skills Showcase (1.2K views, 18 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Okay so this is it

Sound design is not so good, will work on that and give you a better one tmrw.

Here🏌️, Opus 5.5 and Remotion skills for animated motion designs
```

<img src="https://media.skillry.dev/opus-5-5/saxxyweb3-690124/original.b98a0d741b.webp" width="400" alt="Opus 5.5 Remotion Animated Motion Design Skills Showcase">

*Source: @saxxyweb3 - [Post](https://x.com/saxxyweb3/status/2104961677963690124)*

---

### 77. UI State Morphing Shape Animation with Accent Color (1.1K views, 10 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/hicallmechai-878304/original.3f1783296a.webp" width="400" alt="UI State Morphing Shape Animation with Accent Color">

*Source: @hiCallMeChai - [Post](https://x.com/hiCallMeChai/status/2103600312296878304)*

---

### 78. Minimalist Remotion Motion Graphics Video (1.0K views, 4 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
Remotion 
Opus 5.5
```

<img src="https://media.skillry.dev/opus-5-5/0xrapzz-433554/original.e80f03b1f4.webp" width="400" alt="Minimalist Remotion Motion Graphics Video">

*Source: @0xRapzz - [Post](https://x.com/0xRapzz/status/2106062139920433554)*

---

### 79. QuickDesign 15-Second Motion Graphics Showcase (1.0K views, 3 likes)
*Use Case: showreel | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15-second motion graphics video that shows what an incredible quickdesign is! and also  shows what an incredible motion designer you are!
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/quickdesignio-338399/poster.63d7fef351.webp" width="400" alt="QuickDesign 15-Second Motion Graphics Showcase">

*Source: @quickdesignio - [Post](https://x.com/quickdesignio/status/2103617779857338399)*

---

## 3. Explainers & Knowledge Videos

### 80. Interactive Raptor 3 Rocket Engine Explainer with Cutaway Animation (1.2M views, 8,391 likes)
*Use Case: explainer | Style: 3d*

**Prompt:**
```
I asked Claude Opus 5.5 to explain how a rocket engine works by building an interactive Raptor 3 you can take apart in your browser.

Cut it open, follow the oxygen and the methane through both turbopumps, then throttle it and watch the shock diamonds move.

http://airsup.ai/rocket-engine
```

<img src="https://media.skillry.dev/opus-5-5/konstantinsaifo-501736/original.732cb71569.webp" width="400" alt="Interactive Raptor 3 Rocket Engine Explainer with Cutaway Animation">

*Source: @konstantinsaifo - [Post](https://x.com/konstantinsaifo/status/2104094723887501736)*

---

### 81. Animated UX Decision Interview Presentation Explainer (207.2K views, 2,085 likes)
*Use Case: explainer | Style: 2d, minimal*

**Prompt:**
```
I was struggling to explain my UX decisions in interviews, so I made this kind of animation with Opus 5.5

Anyone want the skill?
```

<img src="https://media.skillry.dev/opus-5-5/moguzbulbul-215591/original.eba9995641.webp" width="400" alt="Animated UX Decision Interview Presentation Explainer">

*Source: @moguzbulbul - [Post](https://x.com/moguzbulbul/status/2104206095313215591)*

---

### 82. Transformer Architecture Explained for High School Students (192.6K views, 1,345 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
帮我用js制作一个视频，主题是：什么是 Transformer
要深入浅出，让高中生也能看得懂，不仅high level说的清楚，也要有细节，包括注意力机制，甚至一些数学概念

你可以用任何工具或者安装工具，可以联网检索

请给我惊喜
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/dotey-522564/poster.83f31e6847.webp" width="400" alt="Transformer Architecture Explained for High School Students">

*Source: @dotey - [Post](https://x.com/dotey/status/2103683057689522564)*

---

### 83. SQLite Codebase Architecture Explainer with Query Trace Animation (101.2K views, 1,780 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
every single open source repo should have an explainer video like this 7min one for SQLite

1. explains what the repo does and why its useful
2. shows a high level map of the code (beautiful graphic!)
3. life of a query through the codebase
4. the core abstractions in the repo
5. a real trace of execution and what happens, with a bit on join-order query planning

and yes, this was all generated by opus 5.5 w/ gemini 3.8 tts. i sound like i'm on repeat, but im in shock at just how coherent and capable this model is. 

everything truly is code.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/deedydas-407965/poster.b1ef0de15a.webp" width="400" alt="SQLite Codebase Architecture Explainer with Query Trace Animation">

*Source: @deedydas - [Post](https://x.com/deedydas/status/2104391577091407965)*

---

### 84. Cocktail Recipe Motion Graphic Animation from Start to Finish (79.5K views, 1,037 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingreidents + measurements as they're going into the cup. Should be a 30s video.
```

<img src="https://media.skillry.dev/opus-5-5/ror-fly-880547/original.59f728b077.webp" width="400" alt="Cocktail Recipe Motion Graphic Animation from Start to Finish">

*Source: @Ror_Fly - [Post](https://x.com/Ror_Fly/status/2102853258582880547)*

---

### 85. Galileo Brachistochrone Problem Canvas 2D Animation (76.1K views, 690 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
Bu herhangi bir görüntü üretim modeli kullanmadan, yaratıcı olarak yapabileceğin en iyi şekilde Canvas 2D ile animasyona çevir. Konu: Galileo 1638'de sorduğu Bir top A noktasından B'ye en hızlı hangi yoldan iner? sorusuna karşılık kendi çözümü olan Düz rampa en kısa yol ama en hızlısı değil! Galileo çember yayının daha hızlı olduğunu gösterdi. Asıl cevabı (cycloid) 1696'da Bernoulli buldu.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/aimevzulari-256293/poster.a15f4aeeae.webp" width="400" alt="Galileo Brachistochrone Problem Canvas 2D Animation">

*Source: @AIMevzulari - [Post](https://x.com/AIMevzulari/status/2106052083040256293)*

---

### 86. Zoom from Room to Quarks Infinite Scale Three.js Animation (73.1K views, 1,344 likes)
*Use Case: explainer | Style: 3d*

**Prompt:**
```
Create an animated sequence that starts in a room, zooms into a MacBook, then into an Apple M4 chip, followed by atoms, and finally quarks. Use HTML and Three.js for rendering.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/victortaelin-875778/poster.8c81afe31f.webp" width="400" alt="Zoom from Room to Quarks Infinite Scale Three.js Animation">

*Source: @VictorTaelin - [Post](https://x.com/VictorTaelin/status/2103299766473875778)*

---

### 87. Recursion Explainer with Self-Referential Style Changes (71.1K views, 561 likes)
*Use Case: explainer | Style: 2d, abstract*

**Prompt:**
```
A video explaining recursion, where every explanation about recursion has a radically different video style, make this self-referential & clever & fast moving.
```

<img src="https://media.skillry.dev/opus-5-5/emollick-019567/original.70fbf894e4.webp" width="400" alt="Recursion Explainer with Self-Referential Style Changes">

*Source: @emollick - [Post](https://x.com/emollick/status/2103688362960019567)*

---

### 88. 3D House Construction Process Animation with X-Ray View (67.8K views, 748 likes)
*Use Case: explainer | Style: 3d*

**Prompt:**
```
Create an interactive 3D house animation showing the construction process from Foundation through Skeleton, Systems and Envelope to Finished. Include an X-ray view that reveals the plumbing, power and air inside. Use Three.js and WebGPU.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/techartist-021472/poster.54aba3112f.webp" width="400" alt="3D House Construction Process Animation with X-Ray View">

*Source: @techartist_ - [Post](https://x.com/techartist_/status/2105350783416021472)*

---

### 89. Evolution of the Eye Explainer with Computed Retina Visualizations (53.0K views, 141 likes)
*Use Case: explainer | Style: 3d, realistic*

**Prompt:**
```
Opus 5.5 is truly insane. 

It one-shotted this explainer of how evolution built the eye.

What makes it even more crazy is that every single retina image in this visualization is computed, not drawn!

Felt fitting after all the "how a camera works" one-shots. Because, you know... evolution many-shotted eyes.

Over 40 times.

Enjoy.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/cagrimbakirci-842869/poster.d596e5af5c.webp" width="400" alt="Evolution of the Eye Explainer with Computed Retina Visualizations">

*Source: @cagrimbakirci - [Post](https://x.com/cagrimbakirci/status/2104011756397842869)*

---

### 90. Chinese Classics Multi-Style Animation Collection (45.8K views, 270 likes)
*Use Case: explainer | Style: 2d, hand-drawn, 3d, pixel-art, infographic*

**Prompt:**
```
做一支 10 秒彩色皮影戏，讲【曹冲称象】。剪影布局，暖光透背，关节式偶戏。依次出现秤盘、铜碗、石头，先平衡，再把石头分批称、加起来。字幕卡点出现。用代码渲染，导出可播放视频。

做一支 12 秒等距 2.5D 流程动画，讲【快递怎么分拣】。包裹沿分拣线、货台、平板运输、清关关卡移动，每步编号标签，最后双线汇成一条。干净、可跟读。

做一支 10 秒比例尺对比，把【地球、木星、太阳】按真实半径同屏摆放。镜头平滑拉远，第一个物体缩小，点题「太阳底下约有 130 万个地球」。数字标注清晰。

做一支 10 秒白板手绘。白底黑马克笔一笔笔画出【火柴人连甩 5 个包子】，红色只强调关键点。满足感粒子一颗比一颗大，最后角落画满。字幕：第 1 个，满足感拉满。

做一支 10 秒 WebGL 电影感汉字演变，主题【火】。龟甲、青铜、墨迹、火光质感。「火」从甲骨到闪电、火把，再到现代照明，形态连续变形，对应炎、烈、焰。

用 three.js 做一支 12 秒爆炸图，拆解【一部手机】。外壳、中框、芯片分层炸开，镜头环绕拉近，零件用虚线引出标注。可换成任何结构。

做一支 10 秒 16 位像素典故，讲【黄粱一梦】。取象、中举、治河、出征，每段约 1.6 秒硬切，最后回到现实。字幕：第二年，考中进士，当上了官。

做一支 10 秒绘本风科普，讲【小金鱼怎么游】。蜡笔线加铅笔涂色，线条抖动，眼睛、鳃、尾鳍对称，尾巴跟着节拍摆。纸本质感。

做一支 10 秒 3Blue1Brown 式数学可视化，讲【圆面积】。深色底，圆切成 8、16、32 个扇形，真的移拼成长方形。公式逐项出现，定格 πr²。

做一支 10 秒古地图动画，讲【长安到敦煌】。羊皮纸、淡墨山路，朱红路线一笔画过去，标注里程和一句讲解，最后盖章。镜头可缩放。

做一支 10 秒 Kurzgesagt 式信息图，讲【纸对折厚度】。干净图形、大数字：对折 2 次，厚度 0.4 毫米，厚度 ×2。镜头规则拉近，直到终点。

做一支 10 秒扁平 MG，讲【降水】。纯色几何、无描边。云里的小水滴越聚越大，然后掉下来。两段明暗，卡通云朵。

做一支 10 秒卡点排版，120 BPM，讲【费曼学习法】。每个词卡一拍，黑底橙字切入。四步依次砸出，最后一锤：讲不清楚，就是没真懂。

做一支 10 秒漫画分格，讲【一扇窗破了】。黑白网点加一个红色。听课、被发现、冲出教室，格间硬切，最后一格点题。

做一支 12 秒横轴时间线，讲【从达特茅斯到 ChatGPT】。镜头沿轴推进，节点缩放点亮。年份大字加一句事件。示例节点：1971，又过了 41 年。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/nft-chen-068069/poster.8b45be69a0.webp" width="400" alt="Chinese Classics Multi-Style Animation Collection">

*Source: @NFT_Chen - [Post](https://x.com/NFT_Chen/status/2107653056771068069)*

---

### 91. Fusion Reactor Interactive Explainer with Plasma Temperature Control (43.1K views, 320 likes)
*Use Case: explainer | Style: 3d*

**Prompt:**
```
I asked Claude Opus 5.5 to explain how a fusion reactor works by building one you can take apart in your browser.

Drag the plasma from 15 million °C, the heat of the Sun's core, to 150 million and watch a city light up.

https://airsup.ai/lab
```

<img src="https://media.skillry.dev/opus-5-5/konstantinsaifo-587629/original.0fec7489d9.webp" width="400" alt="Fusion Reactor Interactive Explainer with Plasma Temperature Control">

*Source: @konstantinsaifo - [Post](https://x.com/konstantinsaifo/status/2104216976801587629)*

---

### 92. Celld Platform Value Proposition Animation (18.6K views, 54 likes)
*Use Case: explainer | Style: 2d*

**Prompt:**
```
make me an animation to explain why celld earns its place.
```

<img src="https://media.skillry.dev/opus-5-5/0xnfrith-068999/original.8e51d868f4.webp" width="400" alt="Celld Platform Value Proposition Animation">

*Source: @0xnfrith - [Post](https://x.com/0xnfrith/status/2103358957050068999)*

---

### 93. Morocco Political History Since Independence Explainer (12.2K views, 17 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
réalise une vidéo résumant la vie politique au Maroc depuis l’indépendance
```

<img src="https://media.skillry.dev/opus-5-5/triglyceee-161719/original.cb9a4b70ca.webp" width="400" alt="Morocco Political History Since Independence Explainer">

*Source: @TrigLyceee - [Post](https://x.com/TrigLyceee/status/2103804459986161719)*

---

### 94. Key Moments in AI History Animated Timeline (10.5K views, 194 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
make a video highlighting key moments in the history of AI.
```

<img src="https://media.skillry.dev/opus-5-5/kloss-xyz-067876/original.ebb20ee088.webp" width="400" alt="Key Moments in AI History Animated Timeline">

*Source: @kloss_xyz - [Post](https://x.com/kloss_xyz/status/2103652674336067876)*

---

### 95. Napoleon Hill Drifting Mind Insight 2D Explainer (9.9K views, 51 likes)
*Use Case: explainer | Style: 2d, hand-drawn*

**Prompt:**
```
输入如下：魔鬼控制人类最简单的方法,就是让人保持漂流状态。98% 的人,终其一生都在漂流。" —— 拿破仑·希尔《智胜恶魔》

参考这个洞见，创作一部讲解视频，尽可能令人难以置信的 2D 动画，时长 1 -3分钟，要有连贯的讲解，对白和声音。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/bitfish-539054/poster.6929990c6f.webp" width="400" alt="Napoleon Hill Drifting Mind Insight 2D Explainer">

*Source: @bitfish - [Post](https://x.com/bitfish/status/2103670987879539054)*

---

### 96. Journey Inside a GPU Chip to Silicon Atoms (Persian) (8.1K views, 133 likes)
*Use Case: explainer | Style: 3d, realistic*

**Prompt:**
```
Claude Opus 5.5 یه انیمیشن 3D دیوونه‌کننده ساخته

از دیتاسنتر شروع می‌شه، وارد سرور می‌شه، کارت گرافیک رو باز می‌کنه، داخل چیپ می‌ره، از مدار و ترانزیستور رد می‌شه و تا اتم سیلیکون می‌رسه.
همه‌ش توی یک فایل HTML واحد اجرا می‌شه و حدود ۱ ساعت طول کشیده.
```

<img src="https://media.skillry.dev/opus-5-5/ai-ba-reza-113363/original.c61a87e9e2.webp" width="400" alt="Journey Inside a GPU Chip to Silicon Atoms (Persian)">

*Source: @ai_ba_reza - [Post](https://x.com/ai_ba_reza/status/2103792451551113363)*

---

### 97. Earthquake Tectonic Sandbox 60-Second Explainer (7.1K views, 30 likes)
*Use Case: explainer | Style: 3d, realistic*

**Prompt:**
```
Create a visually stunning 60-second video explaining how an earthquake happens through an interactive tectonic sandbox.

Make it feel like we are watching someone explore a beautiful real-time simulation, not a slideshow or traditional educational video.

Start with a clean 3D cross-section of Earth’s crust. Two tectonic plates slowly move against each other. Visualize the fault between them and show friction locking the plates while stress gradually builds.

As pressure increases, make the simulation more intense: rock layers deform, stress zones glow, subtle vibrations begin, and a live seismograph starts reacting.

Then trigger the earthquake. The fault suddenly slips and releases a massive burst of energy. Show seismic waves radiating outward through the ground, then transition upward to the surface where the landscape and a small city begin shaking.

Visualize P-waves and S-waves traveling differently through the Earth, followed by the strongest surface waves. Show buildings reacting differently depending on distance from the epicenter.

End by zooming back underground to reveal smaller aftershocks around the fault, then pull out to show the complete tectonic system.

Use cinematic motion graphics, satisfying physics simulations, dramatic scale transitions, premium 3D scientific visualization, minimal typography, dynamic labels, smooth UI overlays and seamless transitions.

The pacing should constantly evolve and reveal something new every few seconds so the full 60 seconds stays visually engaging.

Make it feel like an Apple-quality interactive science visualization turned into a cinematic motion-design video.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/egeberkina-949521/poster.f016176a05.webp" width="400" alt="Earthquake Tectonic Sandbox 60-Second Explainer">

*Source: @egeberkina - [Post](https://x.com/egeberkina/status/2105029713445949521)*

---

### 98. End the Fed 15-Second Political Video with Remotion (7.1K views, 115 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
Asked Opus 5.5 (max) to create a 15-second video about why we need to end the Fed. Behold. 

Took 1 hour 45 minutes to do. It used @Remotion to create it.
```

<img src="https://media.skillry.dev/opus-5-5/cboyack-407181/original.eee80ed319.webp" width="400" alt="End the Fed 15-Second Political Video with Remotion">

*Source: @cboyack - [Post](https://x.com/cboyack/status/2103617085402407181)*

---

### 99. Paul Graham How to Do Great Work Video Essay (6.0K views, 10 likes)
*Use Case: explainer | Style: 2d, kinetic-type*

**Prompt:**
```
Create a video essay from Paul Graham's essay How to do great work with punchy motion graphics, modern styling and high professionalism
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/rohanpaul-ai-500542/poster.0420c6538e.webp" width="400" alt="Paul Graham How to Do Great Work Video Essay">

*Source: @rohanpaul_ai - [Post](https://x.com/rohanpaul_ai/status/2104352205176500542)*

---

### 100. NFL First and 10 Yellow Line Technology Explainer (5.9K views, 0 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
Make a motion graphics video that explains how the First & 10 Yellow Line works.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/blueoctopusai-270222/poster.65f946dcc4.webp" width="400" alt="NFL First and 10 Yellow Line Technology Explainer">

*Source: @blueoctopusai - [Post](https://x.com/blueoctopusai/status/2105116391439270222)*

---

### 101. Article Summary Explainer Motion Video (Chinese) (4.8K views, 4 likes)
*Use Case: explainer | Style: 2d*

**Prompt:**
```
Opus 5.5 做的文章讲解,  省流


```

<img src="https://media.skillry.dev/opus-5-5/0xlangeai-178533/original.f1bc47c928.webp" width="400" alt="Article Summary Explainer Motion Video (Chinese)">

*Source: @0xlangeai - [Post](https://x.com/0xlangeai/status/2104119716533178533)*

---

### 102. What is Git Explainer for Beginners (Chinese) (4.3K views, 38 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
帮我用js制作一个视频，主题是：什么是Git
要深入浅出，让一个计算机0基础的人也能看得懂，然后要介绍一些常用指令的意思等等
要有声音的，然后是中文讲的
你可以用任何工具或者安装工具，可以联网检索
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/yunn260414-016888/poster.cdf9a943e0.webp" width="400" alt="What is Git Explainer for Beginners (Chinese)">

*Source: @Yunn260414 - [Post](https://x.com/Yunn260414/status/2104044910769016888)*

---

### 103. Inside an AI Data Centre Explainer (4.1K views, 41 likes)
*Use Case: explainer | Style: 3d*

**Prompt:**
```
show me what goes on inside an AI data centre.
```

<img src="https://media.skillry.dev/opus-5-5/sayan-shanky-868515/original.e5ba676ea2.webp" width="400" alt="Inside an AI Data Centre Explainer">

*Source: @Sayan_shanky - [Post](https://x.com/Sayan_shanky/status/2103736579449868515)*

---

### 104. 60-Second Autonomous Explainer Video End-to-End (3.7K views, 19 likes)
*Use Case: explainer | Style: hand-drawn, 2d*

**Prompt:**
```
I want you to make a 60-second, fully animated explainer video, end to end, completely on your own. I'm stepping away from my computer, so work autonomously until it's done. Don't stop to ask me questions; make the calls yourself and tell me what you decided at the end.

Topic: the journey of photons 

Style: whimsical, charming, storybook. Give the photon a personality. It should feel like a professional motion-design studio made it, not "AI video". The whole thing should be a pure JavaScript animation, rendered from code frame by frame. Don't use AI video generators for the visuals. I've seen the videos people are posting from Opus 5.5 (kinetic typography reels, continuous infinite zooms, data-driven explainers like The Pudding or 3Blue1Brown), and what makes them great is that they're code-rendered: crisp, precise, with a coherent design system and one strong formal idea per scene. Aim for that bar or above.

Make it genuinely educational and accurate. Where you can, simulate the real thing: the random walk should be an actual random walk, not a drawing of one. Include real numbers (core temperature, distance, travel time, years inside the Sun) and be honest about uncertainty in the estimates. Use humor and visual gags to keep attention: onomatopoeia, little characters, callbacks. Put what was happening on Earth during those 100,000 years alongside the photon's timeline.

Deliverable: 1920x1080 at 60fps, exactly 60 seconds, with:
- A voiceover script you write yourself, voiced with the highest-quality text-to-speech model you can access
- Burned-in captions, since most people watch on X with the sound off
- An original music score that fits the whimsical tone and changes with each scene
- Sound design synced exactly to the on-screen action (every bounce, pop, whoosh and ding)
- A professional mix: music ducks under the voice, mastered to streaming loudness

You write the script, design the characters, pick the typography and palette, compose the music, and build the animation engine. Use any tools and resources you can find access to: open fonts, sample libraries, open-source models. Use whatever works.

Quality is paramount. Build verification loops: render stills of every scene and review them critically, check transitions frame by frame, measure the audio mix numerically, fix what's weak and re-render. Don't hand me a first draft. Hand me something you'd put your name on. Also give me the source code so it's reproducible
```

<img src="https://media.skillry.dev/opus-5-5/astrothewizard-618782/original.0b4b294e7f.webp" width="400" alt="60-Second Autonomous Explainer Video End-to-End">

*Source: @AstroTheWizard - [Post](https://x.com/AstroTheWizard/status/2103629247751618782)*

---

### 105. Hand-Drawn Stop-Motion DeFi Saver Self-Introduction (3.6K views, 48 likes)
*Use Case: explainer | Style: hand-drawn, 2d*

**Prompt:**
```
make a hand-drawn stop-motion animation;
story: you're defi saver and explaining yourself in 1st person
```

<img src="https://media.skillry.dev/opus-5-5/nikolajankovic-616097/original.c2731756dd.webp" width="400" alt="Hand-Drawn Stop-Motion DeFi Saver Self-Introduction">

*Source: @_nikolajankovic - [Post](https://x.com/_nikolajankovic/status/2102867033100616097)*

---

### 106. Nobel Prize Winners and Achievements Explainer (Chinese) (3.4K views, 37 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
做一个 今年已颁发诺贝尔奖的人物与成就 的科普视频。要达到世界顶级youtuber视频制作的水准。顶级的电影导演、顶级的科普大师、数据可视化专家、配乐大师、动态图形设计大师、院士讲解级别的专业 + 脱口秀演员般的妙趣横生 + 电影人的叙事 + 高品位清晰清爽的设计风格
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/kewai386772-262769/poster.e26b6975be.webp" width="400" alt="Nobel Prize Winners and Achievements Explainer (Chinese)">

*Source: @KeWai386772 - [Post](https://x.com/KeWai386772/status/2108143449841262769)*

---

### 107. Distilbook 30-Second Product Explainer Motion Graphic (3.1K views, 35 likes)
*Use Case: explainer | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 30-seconds motion graphic video about the distilbook like a product explainer the video has to be very incredible (product url) https://t.co/BcbRbZVf1d
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/sudo-kiran-670892/poster.037b23f102.webp" width="400" alt="Distilbook 30-Second Product Explainer Motion Graphic">

*Source: @sudo_kiran - [Post](https://x.com/sudo_kiran/status/2104846546768670892)*

---

### 108. Product Explainer Motion Graphic with Script and Design (3.0K views, 13 likes)
*Use Case: explainer | Style: 2d, minimal*

**Prompt:**
```
create best motion graphics explainer of the (your product) with very good script and good design colors and good music make sure the video should be incredible and people should feels like watch it many times.. it has to be in 30 seconds good and very intresting, it has to be best of the best of the best of the best video
(product link)
```

<img src="https://media.skillry.dev/opus-5-5/sudo-kiran-335993/original.c03cff47d2.webp" width="400" alt="Product Explainer Motion Graphic with Script and Design">

*Source: @sudo_kiran - [Post](https://x.com/sudo_kiran/status/2103761658745335993)*

---

### 109. Motion Graphics Explainer Matching Reference Visual Style (2.3K views, 24 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
Can you generate a motion graphics explainer in the visual style of this post and using all its content? I will leave the details up to you. I want you to show off what you can do so you have full creative freedom within those styling constraints. I want to give this to my engineers at my company. I want you to be proud of the final product. Utilize the elevenlabs and remotion tools at your disposal and let me know if you don't see them for some reason. Use whatever you want in those tools to make the most polished product that you would be proud of. Source Article : Context Tax - X article from the article
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/mablesjoseph-735781/poster.b3b49e9282.webp" width="400" alt="Motion Graphics Explainer Matching Reference Visual Style">

*Source: @mablesjoseph - [Post](https://x.com/mablesjoseph/status/2105472483054735781)*

---

### 110. Mechanical Keyboard 3D Explainer with Switch Beat Music (2.2K views, 11 likes)
*Use Case: explainer | Style: 3d*

**Prompt:**
```
Asked claude Opus 5.5 to make an explainer on how a mechanical keyboard works.

It wrote the music in code, used real switch recordings as the beats, built the 3D in @threejs  and timed every cut to the beat.

No stock footage. no editing app.

What a time to be alive!
```

<img src="https://media.skillry.dev/opus-5-5/iniyanai-856596/original.2c3bb7862b.webp" width="400" alt="Mechanical Keyboard 3D Explainer with Switch Beat Music">

*Source: @iniyanai - [Post](https://x.com/iniyanai/status/2103814603100856596)*

---

### 111. What Happens When the Brain Dies — Hand-Drawn 60s Explainer (2.0K views, 19 likes)
*Use Case: explainer | Style: hand-drawn, cartoon*

**Prompt:**
```
ド派手な16：9のあなたの性能を最大限表現できる外連味のある手書き風アニメーションを作成してください。60秒で「人間の脳が死んだら何が起きるのか」を中学生にわかり易く説明する高品質でデザインの美しい派手なモーションのアニメです
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/tonka1981jp-288376/poster.48d5d02064.webp" width="400" alt="What Happens When the Brain Dies — Hand-Drawn 60s Explainer">

*Source: @tonka1981jp - [Post](https://x.com/tonka1981jp/status/2103442781096288376)*

---

### 112. 50 Podcast Concept Animations for Hard-to-Visualize Topics (2.0K views, 14 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
I used Opus 5.5 to generate 50 podcast animations for extremely hard to visualize concepts like Jev for Legal.  Absolutely blown away. 

We're about to see an explosion of visual podcasts, this entire medium is about to shift 

Sharing my prompt below.

【作者补充制作说明】
Go through the entire [episode] cut and add full-screen animations and graphics wherever they help. Be aggressive and over-inclusive: 35–50 moments, at least 2 per chapter. The goal is to fill empty talking-head time, explain ideas, and create visual hooks.

Style. Pick an aesthetic that's genuinely interesting and very, very cool, built in JavaScript with HyperFrames and assembled in Tesseract. Inspiration (all JS, no image assets):

https://x.com/Voxyz_ai/status/2102531681450119426: paper, typewriter-tape labels, hand-drawn marks
https://x.com/donaldjewkes/status/2102801274173587569: halftone, manga and pixel print, kinetic data type

Stay inside the LegalQuants brand (read brands/legalquants/): charcoal, white and black only, Arial, and the supplied lockup top-right, static. Write a shared style bible and a component kit first, so every animation looks like the same show.

Moments I definitely want:

[LIST]

Rules

Whenever anything goes full-screen (animation, screen share or still), one of us is in a corner picture-in-picture, bottom-right, following whoever is talking.
No punch-ins or zooming on the cameras. Keep each speaker relatively centered.
Copy must be verbatim or faithful to what's said. Never invent facts, numbers or quotes.
Sync each animation's beats to the spoken words.
Keep each graphic inside one uncut stretch of audio, and leave a few seconds of faces between graphics.

Process

An Opus 5.5 agent at extra-high effort finds every timestamp where an animation could fill space and hook the viewer, with a concept for each.
Opus 5.5 at medium effort builds each animation.
Opus 5.5 at extra-high effort judges each one once on brand consistency with the others, visual interest, relevance to the narrative and creative judgment.
Only cues the judge considers egregiously bad go back for a fix. No blanket redo loops.
Assemble the full cut with PiP baked into every full-screen visual, and give me a folder of the individual animations.
```

<img src="https://media.skillry.dev/opus-5-5/stokebuilder-356793/original.0166546530.webp" width="400" alt="50 Podcast Concept Animations for Hard-to-Visualize Topics">

*Source: @stokebuilder - [Post](https://x.com/stokebuilder/status/2103896101120356793)*

---

### 113. Psychology Explainer with Rapid Typography Style Switching (1.8K views, 9 likes)
*Use Case: explainer | Style: kinetic-type, 2d*

**Prompt:**
```
NextCoreのような海外のカッコイいYouTubeチャンネルをオマージュした、タイポグラフィとコードだけで作成する心理学解説動画を作ってください。画像生成AIや動画生成AIは使わず、全てコード（HTML/CSS/JSなど）で表現できる描写に制限して作成します。数秒ごとに連続で異なる描写スタイルに切り替わりながら進む構成にしてください。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/nakazakifam-831964/poster.d02890098b.webp" width="400" alt="Psychology Explainer with Rapid Typography Style Switching">

*Source: @nakazakifam - [Post](https://x.com/nakazakifam/status/2107715000227831964)*

---

### 114. Educational Video from Article Content (1.8K views, 12 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
make educational video out of article.
```

<img src="https://media.skillry.dev/opus-5-5/henkvaness-975279/original.b7fb5dee11.webp" width="400" alt="Educational Video from Article Content">

*Source: @henkvaness - [Post](https://x.com/henkvaness/status/2103801351993975279)*

---

### 115. Microscope Zoom from Fingertip to Atoms in One HTML File (1.7K views, 17 likes)
*Use Case: explainer | Style: 3d, realistic*

**Prompt:**
```
Build a microscope that dives from a fingertip down to atoms: 1× to 1,000,000×, all generated by code in one HTML file.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/curieuxexplorer-408141/poster.40b940c542.webp" width="400" alt="Microscope Zoom from Fingertip to Atoms in One HTML File">

*Source: @CurieuxExplorer - [Post](https://x.com/CurieuxExplorer/status/2104108154506408141)*

---

### 116. Type 1 Diabetes Explainer from Body to Molecule (1.6K views, 13 likes)
*Use Case: explainer | Style: 3d, infographic*

**Prompt:**
```
Rebuild Type 1 diabetes in one HTML file, from the whole body down to a single molecule.

THE BROKEN MESSAGE

Type 1 diabetes isn't caused by sugar, weight or lifestyle. It's autoimmune: the immune system destroys the beta cells in the pancreas that make insulin.

Those cells live in tiny clusters called islets, about 1–2% of the pancreas. After a meal, they sense rising glucose and release insulin. Insulin signals muscle and fat to take glucose in, and tells the liver to release less.

In Type 1, that signal disappears.
The fuel is still there. The message is missing.
So glucose builds up in the blood.

With almost no insulin, the body breaks down fat fast and the liver makes ketones. They can build up into diabetic ketoacidosis (DKA), a medical emergency.

Insulin therapy doesn't cure Type 1. It replaces a signal the body can no longer provide adequately, through injections or a pump. The daily challenge is balance: too little and glucose rises, too much and it can fall dangerously low. Food, exercise, stress and timing all change the picture.

Technology helps. A CGM tracks glucose every few minutes, and automated insulin delivery (AID) adjusts insulin based on those readings.

In the build, you can compare Healthy vs Type 1 vs Type 1 + insulin on the same meal, drag one slider from INTACT to BROKEN to watch the signal fade, follow a glucose molecule through the body, and explore CGM, pumps and AID.

Type 1 diabetes changes the system.
It doesn't define the person.

Built in Three.js. Educational visualization, not medical advice.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/curieuxexplorer-016717/poster.ca1450ad52.webp" width="400" alt="Type 1 Diabetes Explainer from Body to Molecule">

*Source: @CurieuxExplorer - [Post](https://x.com/CurieuxExplorer/status/2103373314354016717)*

---

### 117. Inside an AI Data Centre Visual Animation (1.4K views, 7 likes)
*Use Case: explainer | Style: 3d, infographic*

**Prompt:**
```
Show me what goes on inside an AI data centre.
```

<img src="https://media.skillry.dev/opus-5-5/mdaman010-111079/original.b7ac5dc603.webp" width="400" alt="Inside an AI Data Centre Visual Animation">

*Source: @mdaman010 - [Post](https://x.com/mdaman010/status/2103845689713111079)*

---

### 118. Hand-Drawn Whiteboard Explainer for Replica Symmetry Breaking (1.3K views, 20 likes)
*Use Case: explainer | Style: hand-drawn*

**Prompt:**
```
Do a quick hand-drawn whiteboard animations explaining what is replica symmetry breaking in the SK model

Prompt 2: build the mp4 version with narration
```

<img src="https://media.skillry.dev/opus-5-5/tak3sh8-441895/original.0b7263b2f1.webp" width="400" alt="Hand-Drawn Whiteboard Explainer for Replica Symmetry Breaking">

*Source: @tak3sh8 - [Post](https://x.com/tak3sh8/status/2103667481139441895)*

---

### 119. 25-Second Colored-Pencil Storybook Article Explainer (1.2K views, 17 likes)
*Use Case: explainer | Style: hand-drawn, cartoon*

**Prompt:**
```
Read the attached article and make a 25-second animated explainer (1080×1350, 24 fps) in a colored-pencil storybook style, drawn entirely in JavaScript on an HTML canvas, with a soundtrack synthesized using the Web Audio API. Pick 3 main ideas, give each a short caption taken from the text, and use one simple original character. Show me the storyboard first, then render it to MP4.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/woojinrad-455731/poster.2170caa017.webp" width="400" alt="25-Second Colored-Pencil Storybook Article Explainer">

*Source: @woojinrad - [Post](https://x.com/woojinrad/status/2106083299462455731)*

---

### 120. White Russian Cocktail Recipe Motion Graphic Animation (1.2K views, 22 likes)
*Use Case: explainer | Style: 2d, minimal*

**Prompt:**
```
Render a recipe motion graphic animation using JavaScript or HTML (whatever you think will produce the best result) to show the full recipe for a White Russian from start to finish, empty glass to completed cocktail. Explainer video style, showing the ingredients and measurements as they go into the glass. It should be a 30s video.
```

<img src="https://media.skillry.dev/opus-5-5/sarut0bisasuke-069973/original.7731d87533.webp" width="400" alt="White Russian Cocktail Recipe Motion Graphic Animation">

*Source: @Sarut0biSasuke - [Post](https://x.com/Sarut0biSasuke/status/2103418429248069973)*

---

### 121. Fourier Series Explainer Video with HyperFrames (1.2K views, 24 likes)
*Use Case: explainer | Style: 2d, infographic*

**Prompt:**
```
fourier series were hard to learn back in university (2 years ago) and they are fun! 

what unlocks @HyperFrames_ + @claudeai Opus 5.5 is that you can get the best explainer videos just with 1 prompt

you are curious about something? ask claude!
```

<img src="https://media.skillry.dev/opus-5-5/miguel07code-091611/original.3b02d95627.webp" width="400" alt="Fourier Series Explainer Video with HyperFrames">

*Source: @Miguel07Code - [Post](https://x.com/Miguel07Code/status/2103626582896091611)*

---

## 4. Technical Demos & Visualizations

### 122. 1906 San Francisco Market Street 3D Historical Recreation (163.3K views, 1,164 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
Recreate Market Street, San Francisco as it stood on April 17, 1906, the afternoon before the earthquake, in Blender.

Scope: the Ferry Building up Market to Fifth Street, including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium.

Before modeling anything, build a source file from: the 1899-1905 Sanborn fire insurance maps (footprints, heights, materials, occupants), the Miles Brothers film "A Trip Down Market Street" (April 1906), period photographs from OpenSFHistory, the Library of Congress and the David Rumsey collection, and USGS topography. Record every building with footprint, height, facade material, occupant, and the source for each fact with a confidence level.

Build everything in Blender Python. No downloaded meshes, textures or HDRIs. Write reusable generators (Victorian commercial facade, mansard roof, bay windows, awnings, painted signage, gas and electric street lamps, cable car, horse-drawn wagon, early automobile) and assemble the street from the source file, so every building traces back to data.

Provide a 10 second video up the street.
```

<img src="https://media.skillry.dev/opus-5-5/alexalbert-274839/original.2d6735673d.webp" width="400" alt="1906 San Francisco Market Street 3D Historical Recreation">

*Source: @alexalbert__ - [Post](https://x.com/alexalbert__/status/2102466523164274839)*

---

### 123. Warehouse Logistics Animation with Trucks and Forklifts (73.3K views, 916 likes)
*Use Case: demo | Style: 3d*

**Prompt:**
```
Build one you can actually watch. Trucks reverse onto the dock, forklifts unload and boxes slide down chutes onto the right truck.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/konstantinsaifo-169107/poster.e149f90b30.webp" width="400" alt="Warehouse Logistics Animation with Trucks and Forklifts">

*Source: @konstantinsaifo - [Post](https://x.com/konstantinsaifo/status/2106855420237169107)*

---

### 124. 1990s Style Demoscene Demo with S3M Music Synchronization (38.8K views, 775 likes)
*Use Case: demo | Style: 3d, particle*

**Prompt:**
```
I would like you to create a kickass, impressive 1990s style demoscene demo using this S3M track as the music. Prior to getting to work, please see how to best play and analyze the S3M track. This will be important since synchronization of effects and appropriateness of scenes to the musical vibe (and this song does have a variety of sections with different attitude) is essential to a great demoscene demo. Also prior to getting started, please research what kinds of effects, physics, etc. would be good to use in combination. Please use C/C++ -- with appropriate demoscene/embedded/console gamedev sensibilities to avoid needlessly bloating compile times -- with OpenGL. In some cases, blitting to surfaces in realtime may be appropriate.. while in others, using OpenGL or even shaders is appropriate as well. It should be planned and polished to be spectacular and shocking. This is Claude's way of really showing off to the world that it kicks ass.
```

<img src="https://media.skillry.dev/opus-5-5/gandamu-ml-220530/original.16f5785d49.webp" width="400" alt="1990s Style Demoscene Demo with S3M Music Synchronization">

*Source: @gandamu_ml - [Post](https://x.com/gandamu_ml/status/2102919394775220530)*

---

### 125. Cinematic 3D Landscape Explorer with Free Camera (30.1K views, 621 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
Create a cinematic browser-based 3D world that can be explored freely with a camera, focused on breathtaking landscapes and extraordinary original architecture. Fill the world with huge strange buildings, monumental structures, surreal ruins, cliffs, valleys, forests, water, and unusual ultra-detailed forms that feel mysterious and awe-inspiring. This is not a game and not combat-focused, the goal is pure exploration, atmosphere, composition, and visual discovery. Make the world feel epic, highly detailed, and completely original, with architecture that looks weird, ambitious, and unforgettable.
```

<img src="https://media.skillry.dev/opus-5-5/lexnlin-241739/original.cb53056c77.webp" width="400" alt="Cinematic 3D Landscape Explorer with Free Camera">

*Source: @LexnLin - [Post](https://x.com/LexnLin/status/2103194052850241739)*

---

### 126. Product Feature Walkthrough Motion Graphics Video (29.7K views, 158 likes)
*Use Case: demo | Style: 2d*

**Prompt:**
```
can you search for the picture of Mona Lisa, then replicate it using mouse movement and brushes in JS paint using chrome?

Follow-up:
Ok now can you make a video of exactly what you just did? Showing every mouse movement and changes?
```

<img src="https://media.skillry.dev/opus-5-5/ehsanik-162993/original.b977c58ac1.webp" width="400" alt="Product Feature Walkthrough Motion Graphics Video">

*Source: @ehsanik - [Post](https://x.com/ehsanik/status/2102885216692162993)*

---

### 127. Porco Rosso Aerial Battle Three.js Ghibli Style Recreation (21.5K views, 74 likes)
*Use Case: demo | Style: 3d, cartoon*

**Prompt:**
```
✨审美绝了！Opus 5.5 用 Three.js 把宫崎骏《红猪》经典空战复刻出来了！

只给了这一句prompt:

「用 web3D 复刻宫崎骏《红猪》日落海面上的经典空战：白绿红涂装战斗机、紫色积云、海面反光、吉卜力运镜，画面写 just breathe.」

建模、配色、云层、尾迹和镜头全部一次对齐，审美直接封神。

#Opus5_5 #宫崎骏 #红猪 #ThreeJS #Web3D #AIGC #vibecoding #审美天花板 #3D #AI #Dario #Anthropic

https://x.com/nft_chen/status/2103401780117938683?s=46
```

<img src="https://media.skillry.dev/opus-5-5/nft-chen-350878/original.f856902000.webp" width="400" alt="Porco Rosso Aerial Battle Three.js Ghibli Style Recreation">

*Source: @NFT_Chen - [Post](https://x.com/NFT_Chen/status/2103882415299350878)*

---

### 128. 1857 Napoleon Cannon 3D Model with Technical Drawings and Firing (19.8K views, 359 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
Build a fully working 1857 Napoleon load field cannon in 3D using procedural Three.js WebGPU and TSL shaders. No Blender, no 3D assets, no textures. Include technical drawings as live orthographic renders showing elevation, pressure, trajectory, and firing changes in real time.
```

<img src="https://media.skillry.dev/opus-5-5/thebuggeddev-482912/original.192a687052.webp" width="400" alt="1857 Napoleon Cannon 3D Model with Technical Drawings and Firing">

*Source: @thebuggeddev - [Post](https://x.com/thebuggeddev/status/2107449104926482912)*

---

### 129. Single Prompt Hyperframes Motion Graphics Showcase (19.4K views, 152 likes)
*Use Case: demo | Style: 2d*

**Prompt:**
```
No tiene sentido que esto haya salido con un solo prompt con Opus 5.5 e Hyperframes
```

<img src="https://media.skillry.dev/opus-5-5/leandroriviello-827135/original.419d188f99.webp" width="400" alt="Single Prompt Hyperframes Motion Graphics Showcase">

*Source: @leandroriviello - [Post](https://x.com/leandroriviello/status/2104728379798827135)*

---

### 130. 12-Second Launch Video with Bouncing Ball Filmstrip Animation (18.9K views, 148 likes)
*Use Case: demo | Style: 2d, minimal*

**Prompt:**
```
Make a 12s motion video in code (1920x1080, 30fps, one HTML file drawing every frame from a single seek(t) function, rendered with Playwright + ffmpeg, with original synthesized sound).

Story: a dark prompt pill on an off-white page types "make a launch video" with a real keystroke rhythm → enter, the button flashes orange and the pill slides up → a 12-frame filmstrip stamps in left to right, one frame per beat at 120 BPM; each frame shows one pose of an orange ball's bounce (squash on contact, stretch mid-air, real arcs) → a playhead sweeps the strip while a big viewer above plays the poses as a flipbook, twice, faster the second time → the strip slides away, "every frame is code." fills the screen, and the ball arcs over and lands as the period.

Rules: arrive fast, land soft (cover 12–19% of the remaining distance per frame); nothing ever freezes (slow push on every hold); stagger 2–4 frames; blur only on fast moves; big and readable on a phone; off-white, ink and one orange only. Sound: a tick per key, a click on enter, a rising note per frame stamp, a thump when the ball lands.

Show me 5 stills first (typing, strip half-built, flipbook, headline, last frame), critique them like a harsh motion director, fix the 3 worst problems, then render.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/notdwd-766641/poster.9cda532570.webp" width="400" alt="12-Second Launch Video with Bouncing Ball Filmstrip Animation">

*Source: @notdwd - [Post](https://x.com/notdwd/status/2105031774904766641)*

---

### 131. WebGPU Physics Engine with 108K Particle Sand and Fluid Simulation (18.8K views, 97 likes)
*Use Case: demo | Style: particle, 3d*

**Prompt:**
```
🚨 Opus 5.5 is the best model launch in 2026

this entire physics engine is one HTML file.

sand, water, oil, fire, lava, plants, steam.

108,000 particles at 60fps.

built with Opus 5.5.

prompt in the replies 👇

follow @cyrilXBT
```

<img src="https://media.skillry.dev/opus-5-5/cyrilxbt-149036/original.2fffe96ee3.webp" width="400" alt="WebGPU Physics Engine with 108K Particle Sand and Fluid Simulation">

*Source: @cyrilXBT - [Post](https://x.com/cyrilXBT/status/2103532793406149036)*

---

### 132. Bitcoin Monetary History Animation with Real Block Data (18.5K views, 162 likes)
*Use Case: demo | Style: 2d, infographic*

**Prompt:**
```
Can't Print the Proof

I gave Opus 5.5 total creative freedom to create an epic monetary history banger. 

1 caveat, I said use bitcoin block data to build the animation and wow me with the best quality without using generative video tools.

🤯

21 million, that's the truth
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/bradmillscan-839974/poster.31219a1a29.webp" width="400" alt="Bitcoin Monetary History Animation with Real Block Data">

*Source: @bradmillscan - [Post](https://x.com/bradmillscan/status/2104048013362839974)*

---

### 133. 110K Rigid Body WebGPU Physics Demo Reel (13.2K views, 18 likes)
*Use Case: demo | Style: 3d, particle*

**Prompt:**
```
110k rigid bodies in real time, in a browser tab. Grab anything, fire cannonballs.

Built with Claude Opus 5.5: Augmented Vertex Block Descent (SIGGRAPH 2025, Giles, Diaz & Yuksel) in WebGPU with @threejs . It's a physics solver that stays stable with huge scenes and big mass ratios. Opus 5.5 even put together this whole demo reel video just from a single text prompt in Claude Code haha 🤯

Try it: https://three-avbd.vercel.app
(recorded on an M4 Max, lighter scenes run fine on older computers or on mobile)

Code's here, MIT licensed. Go build something with it, have fun breaking things: https://github.com/sbobyn/three-avbd

#threejs #WebGPU
```

<img src="https://media.skillry.dev/opus-5-5/nybobs-680050/original.7ecd081d24.webp" width="400" alt="110K Rigid Body WebGPU Physics Demo Reel">

*Source: @nybobs - [Post](https://x.com/nybobs/status/2103385835328680050)*

---

### 134. Stained-Glass Hibiscus Flower 3D Artwork (11.1K views, 17 likes)
*Use Case: demo | Style: 3d*

**Prompt:**
```
Create a beautiful, interactive 3D browser artwork of a single stained-glass hibiscus flower.
Use the attached leaf as a reference for material delicacy, intricate veins, translucent colours and restrained presentation. Create an original flower composition.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/ivanainai-245918/poster.0941333137.webp" width="400" alt="Stained-Glass Hibiscus Flower 3D Artwork">

*Source: @ivanainai - [Post](https://x.com/ivanainai/status/2106481339193245918)*

---

### 135. Fishbowl with GLSL Reflection Refraction and Caustics (9.9K views, 103 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
Opus 5.5 does a great job in eval of GLSL (OpenGL Shading Language) in threejs.
The prompt here is roughly. A fishbowl with reflection, refraction and water caustics.

Check it out yourself! And compare it to other models
https://threejseval.com/gallery?eval=fishtank
```

<img src="https://media.skillry.dev/opus-5-5/nicolamanzini-156628/original.586c93d39d.webp" width="400" alt="Fishbowl with GLSL Reflection Refraction and Caustics">

*Source: @NicolaManzini - [Post](https://x.com/NicolaManzini/status/2103499771206156628)*

---

### 136. 3D Object Construction Part-by-Part in Blender (8.2K views, 90 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
Opus 5.5 turned one sentence into a 3D system that opens in Blender, rigged, textured and ready to animate.

It does not render the object. It constructs it, part by part, the way a modeller would if they had a week.

> PARSE - the sentence becomes a parts list with real dimensions, nothing implied
> MASS - each part built as clean geometry, quads only, no sculpted mush
> RIG - joints and pivots placed where the object physically bends
> SKIN - materials assigned per surface, scale and roughness set separately
> PACK - exported with a named hierarchy, so a human can edit one part

Image models stop at the render. What you get is a photograph of a thing that does not exist as a thing.

That gap appears the second someone wants to move an arm, swap a material, or send it to a printer.

Rigging is what nobody automates. Without pivots you have a statue, and a statue cannot be a system.

Topology beats detail every time. A dense mesh looks stunning in a screenshot and folds the moment it deforms.

Names carry through the whole export. Every part, joint and material reads the way a person would label it.

Studios burn days on modelling and cleanup before anyone gets to the creative part of the job.

The prompt format and what each stage returns are laid out underneath.
```

<img src="https://media.skillry.dev/opus-5-5/0xwast3-222104/original.b6a9fc9ea7.webp" width="400" alt="3D Object Construction Part-by-Part in Blender">

*Source: @0xWast3 - [Post](https://x.com/0xWast3/status/2103513328077222104)*

---

### 137. Interactive Japanese Nature Boat Scene with Three.js (Arabic) (6.0K views, 75 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
إنشاء مشهد قارب تفاعلي يمر بجمال الطبيعة اليابانية باستخدام Three.js، مع طقس ديناميكي وانعكاسات ماء واقعية وتفاصيل معماريّة وشخصيات 3D
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/engmoelgaraihy-694832/poster.02051fb3c2.webp" width="400" alt="Interactive Japanese Nature Boat Scene with Three.js (Arabic)">

*Source: @EngMoElgaraihy - [Post](https://x.com/EngMoElgaraihy/status/2103038655178694832)*

---

### 138. Qi Baishi Style WebGL Ink Painting (5.9K views, 2 likes)
*Use Case: demo | Style: hand-drawn, 2d*

**Prompt:**
```
A live WebGL ink painting in the style of Qi Baishi, with paper fibre, dry-brush whiskers and an escape when you touch the water.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/youwareai-259061/poster.0d663ec2c2.webp" width="400" alt="Qi Baishi Style WebGL Ink Painting">

*Source: @YouWareAI - [Post](https://x.com/YouWareAI/status/2105656935622259061)*

---

### 139. Spectacular Fireworks and Light Particle Show (Turkish) (5.4K views, 45 likes)
*Use Case: demo | Style: particle, 3d*

**Prompt:**
```
Yapabileceğin en etkileyici havai fişek veya ışıklı parçacık gösterisini üret. Ortamı ve sanat yönünü sen seç. Tek tip küçük patlamaları çoğaltmak yerine ritmi, derinliği, ışığın çevreye etkisini ve unutulmaz bir final anını tasarla. Gösteri canlı çalışsın; kullanıcı finali tekrar oynatabilsin.

Yaratıcı seçimler senin: sahne, sanat yönü, kamera, mekanik, teknoloji ve etkileşimi önceden belirlenmiş sıradan kalıplara sıkıştırma. İlk akla gelen sıradan web demosuyla yetinme: önce kendi alanında birkaç fikri kısaca tart, videoda en güçlü görünecek özgün olanı seç, sonra onu çalışan bir ürüne dönüştür. Konuyu olduğundan kolay gösteren dekoratif taklit kabul edilmez. Sinematik ve estetik seçimler sonuçta görülsün.
```

<img src="https://media.skillry.dev/opus-5-5/fornyapayzeka-795431/original.5a5792a5b3.webp" width="400" alt="Spectacular Fireworks and Light Particle Show (Turkish)">

*Source: @FornYapayZeka - [Post](https://x.com/FornYapayZeka/status/2102888241443795431)*

---

### 140. 3D Train Simulation with Procedural Assets (Chinese) (5.3K views, 27 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
太离谱了，一共3步，Opus 5.5给我整了个“模拟火车”出来。

1. 让ChatGPT生成韶山8各个视角的图；
2. 让Opus做一个3D资产，100%还原这张图；
3. 做一个环形铁路，可以操作这辆车行驶。
```

<img src="https://media.skillry.dev/opus-5-5/akokoi1-469188/original.9eb338b903.webp" width="400" alt="3D Train Simulation with Procedural Assets (Chinese)">

*Source: @akokoi1 - [Post](https://x.com/akokoi1/status/2104222017696469188)*

---

### 141. Three.js Single Prompt Motion Design (Turkish) (5.1K views, 33 likes)
*Use Case: demo | Style: 3d*

**Prompt:**
```
threejs (@threejs) + Claude Code Opus 5.5
tek prompt ve çıktı
```

<img src="https://media.skillry.dev/opus-5-5/wzarok-283635/original.fad231410a.webp" width="400" alt="Three.js Single Prompt Motion Design (Turkish)">

*Source: @wzarok - [Post](https://x.com/wzarok/status/2103530789510283635)*

---

### 142. Rube Goldberg Marble Domino Physics Machine (3.8K views, 79 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
Create a physics simulation of a Rube Goldberg inspired machine where a marble ends up toppling a 1.8m domino. Use Three.js + Rapier. A falling domino can knock over one 1.5× its size, so ten growing dominoes carry the push from desk to room scale.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/techartist-697078/poster.6c30cafbd8.webp" width="400" alt="Rube Goldberg Marble Domino Physics Machine">

*Source: @techartist_ - [Post](https://x.com/techartist_/status/2107514291213697078)*

---

### 143. Explosion Effect with Force Propagation Scene (Turkish) (3.5K views, 25 likes)
*Use Case: demo | Style: particle, 3d*

**Prompt:**
```
Yapabileceğin en etkileyici patlama efektini ve onu taşıyacak özgün sahneyi üret. Ölçeği, ortamı ve görsel dili sen seç. Patlamanın başlangıcı, kuvvetin yayılması ve ardında bıraktığı değişim izlenebilir olsun; tek karelik parlama veya rastgele parçacık yağmuru yeterli değil. Kullanıcı bunu tekrar başlatabilsin ve etkisini farklı açıdan görebilsin.

Yaratıcı seçimler senin: sahne, sanat yönü, kamera, mekanik, teknoloji ve etkileşimi önceden belirlenmiş sıradan kalıplara sıkıştırma. İlk akla gelen sıradan web demosuyla yetinme: önce kendi alanında birkaç fikri kısaca tart, videoda en güçlü görünecek özgün olanı seç, sonra onu çalışan bir ürüne dönüştür. Konuyu olduğundan kolay gösteren dekoratif taklit kabul edilmez. Sinematik ve estetik seçimler sonuçta görülsün.
```

<img src="https://media.skillry.dev/opus-5-5/fornyapayzeka-135914/original.29a27c0f1a.webp" width="400" alt="Explosion Effect with Force Propagation Scene (Turkish)">

*Source: @FornYapayZeka - [Post](https://x.com/FornYapayZeka/status/2102971287224135914)*

---

### 144. Remotion Video Built with Natural Language (Japanese) (3.3K views, 18 likes)
*Use Case: demo | Style: 2d*

**Prompt:**
```
ださいけど、Remotion で動画っぽいのつくった。コードは見てない。環境だけ用意した…っていっても、いつものように jj init されるカスタム try コマンドを叩いてディレクトリをつくって「Remotion の環境をプリーズ」だけだわ。なんもしてない。あとは Opus 5.5 とちょっと話しただけだわ。未来だ。
```

<img src="https://media.skillry.dev/opus-5-5/itakahashikun-990109/original.2df9a473ee.webp" width="400" alt="Remotion Video Built with Natural Language (Japanese)">

*Source: @iTakahashikun - [Post](https://x.com/iTakahashikun/status/2103731575661990109)*

---

### 145. GSAP UI Card Timeline Animation with Staggered Elements (2.7K views, 73 likes)
*Use Case: demo | Style: 2d, minimal*

**Prompt:**
```
Build a GSAP timeline for UI cards with specific timing constraints: 280ms for cards, 220ms for title, 160ms for metadata, and a 60ms stagger between elements. Implement a verification loop where the animation is stepped through frame-by-frame using Playwright, screenshots are compared to detect overshoot or errors, and the code is patched until it passes the checks without rewriting everything.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/fleyta88-443662/poster.4e67e8f644.webp" width="400" alt="GSAP UI Card Timeline Animation with Staggered Elements">

*Source: @fleyta88 - [Post](https://x.com/fleyta88/status/2108249741125443662)*

---

### 146. Rust SVG Particle Video with 3D Geometry and Audio-Reactive Ring (2.1K views, 20 likes)
*Use Case: demo | Style: 3d, particle, abstract*

**Prompt:**
```
Create a video using Rust + SVG via fframes where every frame is a function. Include particles, 3D geometry, springs, shaders and an audio-reactive ring, synchronized to a 128 BPM beat grid.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/buildfastwithai-844291/poster.46cac31dda.webp" width="400" alt="Rust SVG Particle Video with 3D Geometry and Audio-Reactive Ring">

*Source: @BuildFastWithAI - [Post](https://x.com/BuildFastWithAI/status/2108403445304844291)*

---

### 147. Two-Sentence Remotion Motion Video (2.0K views, 41 likes)
*Use Case: demo | Style: 2d, minimal*

**Prompt:**
```
I made this with a two sentence prompt using Opus 5.5 and Remotion.
```

<img src="https://media.skillry.dev/opus-5-5/aylmerth-356252/original.22dec1597f.webp" width="400" alt="Two-Sentence Remotion Motion Video">

*Source: @AylmerTH - [Post](https://x.com/AylmerTH/status/2105346401878356252)*

---

### 148. Realistic 3D Taj Mahal Model in One HTML File (2.0K views, 8 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
I asked Opus 5.5 to generate a realistic 3D model of the Taj Mahal

Dome, minarets, marble inlay, even the foundations.

One prompt ⤵️ One HTML file.
```

<img src="https://media.skillry.dev/opus-5-5/curieuxexplorer-272483/original.7984edea63.webp" width="400" alt="Realistic 3D Taj Mahal Model in One HTML File">

*Source: @CurieuxExplorer - [Post](https://x.com/CurieuxExplorer/status/2103038625483272483)*

---

### 149. 5 Different Scroll-Based Sections with Auto-Generated Layout (1.5K views, 12 likes)
*Use Case: demo | Style: 2d, minimal*

**Prompt:**
```
Build 5 completely different scroll-based sections, decide the context & layout yourself.
```

<img src="https://media.skillry.dev/opus-5-5/ercankeskinx-897906/original.137653def6.webp" width="400" alt="5 Different Scroll-Based Sections with Auto-Generated Layout">

*Source: @ercankeskinx - [Post](https://x.com/ercankeskinx/status/2102995443818897906)*

---

### 150. Realistic 3D Fire Fluid Simulation with Blackbody Physics (1.1K views, 16 likes)
*Use Case: demo | Style: 3d, particle, realistic*

**Prompt:**
```
I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript.

It wrote a real 3D fluid simulation that runs on the GPU. The flame colors come from blackbody physics, the smoke is real volume, it runs at 96 fps in 1080p, and it critiqued its own renders about 40 times.

Then it shot a 38 second film of it. The sound comes from the fire itself. 🔥

Details:

- Nothing faked. The fire is actual simulated gas that burns, heats up, rises, and swirls. It gives off soot that glows, and the soot that escapes cools into smoke. Every frame is computed on the GPU.

- The AI graded its own work: render a frame, have a vision model pick it apart like a VFX supervisor, fix it, repeat. It caught a flame that kept dying, ring shaped artifacts on the ground, and coals that looked like cheese chips.

- The film isn't screen recorded. Each frame is rendered offline with scripted camera moves. The crackle and roar come from how brightly the fire burns in each frame.

- No Blender, no stock footage, no sound library. One HTML file, one conversation.
```

<img src="https://media.skillry.dev/opus-5-5/nathanwilbanks-981110/original.5401acd5a9.webp" width="400" alt="Realistic 3D Fire Fluid Simulation with Blackbody Physics">

*Source: @NathanWilbanks_ - [Post](https://x.com/NathanWilbanks_/status/2103881538592981110)*

---

### 151. 30-Second Cinematic F1 Pit Stop in Three.js (1.1K views, 43 likes)
*Use Case: demo | Style: 3d, realistic*

**Prompt:**
```
a 30s cinematic F1 pit stop in Three.js. Detailed car, 8-person crew changing all 4 tyres, synthesized audio, fully procedural.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/rubenssoto-ai-802657/poster.c9b3a984d5.webp" width="400" alt="30-Second Cinematic F1 Pit Stop in Three.js">

*Source: @rubenssoto_ai - [Post](https://x.com/rubenssoto_ai/status/2108512810774802657)*

---

### 152. Santa Monica Beach Particle Illustration 3D Environment (1.0K views, 18 likes)
*Use Case: demo | Style: 3d, particle*

**Prompt:**
```
Create a stylistic 3D environment of a busy Santa Monica beach that adapts to the time of day. The art style must be a particle illustration, which uses thousands of tiny glowing specks rather than solid fills with flowing ribbon strokes behind figures to suggest motion.

I had 2-3 more prompts on top of this, but this is a good starting point.

Repo link: https://github.com/ishuagrawal/particle-beach
```

<img src="https://media.skillry.dev/opus-5-5/ishuagra02-678129/original.e1a27bcc2b.webp" width="400" alt="Santa Monica Beach Particle Illustration 3D Environment">

*Source: @ishuagra02 - [Post](https://x.com/ishuagra02/status/2102920408743678129)*

---

## 5. Ads & Marketing

### 153. 30-Second Business Explainer with 5 Scenes and Brand Colors (42.1K views, 372 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]
```

<img src="https://media.skillry.dev/opus-5-5/alex-prompter-997524/original.16e8d0a42e.webp" width="400" alt="30-Second Business Explainer with 5 Scenes and Brand Colors">

*Source: @alex_prompter - [Post](https://x.com/alex_prompter/status/2103499977632997524)*

---

### 154. Shin Majin Style PV with Code-Rendered Frames and Lyria BGM (39.7K views, 360 likes)
*Use Case: ad | Style: 2d, cartoon*

**Prompt:**
```
流行ってることは一回試しとくマン。

Claude Code（Opus 5.5）でモーショングラフィックスを作るのが面白いみたいなので、「シンまじん式のPV作って」と頼んだだけで、これが出てきた。

動画生成AIはゼロ。
・映像：HTML＋コードで1コマずつ描画（HyperFrames）
・BGM：GeminiのLyriaで生成
・効果音：拍を解析して、着地やハンコの瞬間に音ハメ

自分がやったのは、スキルを入れて「おまかせ」って返事したくらい。
しかもClaude自身は音が聴けないのに、波形を数値で解析して音ハメしてるのがヤバい。

何なのもう…日々革命が起こりすぎて 頭ガンガンするわ
```

<img src="https://media.skillry.dev/opus-5-5/majin-appsheet-693327/original.43d46d4e8a.webp" width="400" alt="Shin Majin Style PV with Code-Rendered Frames and Lyria BGM">

*Source: @Majin_AppSheet - [Post](https://x.com/Majin_AppSheet/status/2103497319899693327)*

---

### 155. Cheese Camera App Concept Animation for Couples Photography (26.6K views, 16 likes)
*Use Case: ad | Style: 2d, cartoon*

**Prompt:**
```
帮我制作一个动画，主题描绘芝士相机的理念和使用场景，需要打动我们的目标用户（男朋友给女朋友拍照，拍出更好看的照片）；包括音效和音乐；你可以使用任何你觉得合适的工具和技术，做出最好最惊艳的效果，不要使用已有的skill，不要参考以前做过的视频或者文案
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/mileson07-065690/poster.ac906bb935.webp" width="400" alt="Cheese Camera App Concept Animation for Couples Photography">

*Source: @Mileson07 - [Post](https://x.com/Mileson07/status/2103717347790065690)*

---

### 156. Lightspark Social Media Promo Video with Sound Design (25.9K views, 282 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
make a punchy and modern short video for social that promotes @lightspark capabilities. Needs to be production grade with sound
```

<img src="https://media.skillry.dev/opus-5-5/davidmarcus-686217/original.318b3a6172.webp" width="400" alt="Lightspark Social Media Promo Video with Sound Design">

*Source: @davidmarcus - [Post](https://x.com/davidmarcus/status/2103275618045686217)*

---

### 157. 15-Second Self-Promotion Motion Graphics Video (22.2K views, 21 likes)
*Use Case: ad | Style: 2d*

**Prompt:**
```
create 15+ sec self-promotion promo
```

<img src="https://media.skillry.dev/opus-5-5/slvdev-975986/original.6498f792fd.webp" width="400" alt="15-Second Self-Promotion Motion Graphics Video">

*Source: @slvDev - [Post](https://x.com/slvDev/status/2103569170075975986)*

---

### 158. 3D Printable PCB Enclosure Promo Animation (21.9K views, 367 likes)
*Use Case: ad | Style: 3d*

**Prompt:**
```
Claude Opus 5.5 continues to amaze me. Claude Opus 5.5 created a 3D printable enclosure for an existing PCB.  Then it created this promo video for it. 
The PCB, the printable STLs and this animation are 100% just from prompting in Claude Code.
```

<img src="https://media.skillry.dev/opus-5-5/vectorcrossprod-436573/original.d72e641c0b.webp" width="400" alt="3D Printable PCB Enclosure Promo Animation">

*Source: @VectorCrossProd - [Post](https://x.com/VectorCrossProd/status/2104093497561436573)*

---

### 159. Meta VR Glasses Promotional Video Patterns Showcase (17.6K views, 140 likes)
*Use Case: ad | Style: 2d, 3d*

**Prompt:**
```
I heard you are good at making videos, so I want to know what kind of videos you can make. Please create several patterns of promotional videos for Meta VR Glasses.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/mouri45-575311/poster.55b393cb5a.webp" width="400" alt="Meta VR Glasses Promotional Video Patterns Showcase">

*Source: @mouri45 - [Post](https://x.com/mouri45/status/2107036053949575311)*

---

### 160. Claude Code Terminal Animation for Opus 5.5 Efficiency Promo (15.9K views, 168 likes)
*Use Case: ad | Style: 2d, cartoon*

**Prompt:**
```
I want to try something different here. You should act as a  world-class animator and create an animation to go along with an  X post that talks about how Ultra Code and Claude Code are now  much more relevant due to the efficiency of Opus 5.5. You can use it without annihilating your usage limits 

the style of the video here
/Users/danielmcateer/Downloads/jvnZ3SyyxxajVatp.mp4

What I had in mind was start with Claude Code in the terminal from the first attached video, with me navigating to the 'ultracode' reasoning effort, then exploding into a scene where the Claude icon characters similar to what's in the second video are shooting an action video and it's representing using Claude Code dynamic workflows editing a video.
```

<img src="https://media.skillry.dev/opus-5-5/daniel-mac8-306214/original.0a435a156b.webp" width="400" alt="Claude Code Terminal Animation for Opus 5.5 Efficiency Promo">

*Source: @daniel_mac8 - [Post](https://x.com/daniel_mac8/status/2103824976713306214)*

---

### 161. Ad-Style Motion Video with Remotion (Portuguese) (7.6K views, 134 likes)
*Use Case: ad | Style: 2d*

**Prompt:**
```
TÁ BIZARRO ESSE OPUS 5.5 😲

Eu nem acreditei no resultado. Foi feito com one prompt shot, usando apenas remotion... 

Agora é só jogar uma narraçãozinha e subir pros ADS kkk
```

<img src="https://media.skillry.dev/opus-5-5/thallisribeiro-829318/original.9cbf59b14e.webp" width="400" alt="Ad-Style Motion Video with Remotion (Portuguese)">

*Source: @thallisribeiro - [Post](https://x.com/thallisribeiro/status/2103107359727829318)*

---

### 162. Product Hype Teaser with HyperFrames (7.3K views, 42 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
Using HyperFrames, make a hype teaser for the product in this post - [link]. Landscape, around 27 seconds. Match the product UI, wallpaper and copy from the post's video 

Motion should feel slow and polished - one continuous camera over one Mac desktop, no hard cuts. Camera pushes, pulls and pans run like 1.5 to 3 seconds on gentle ease-in-out curves, nothing snappy - aim for half the speed you'd default to. Add motion blur on fast moves and a light film grain finish. Use an oversized macOS cursor. No audio. All on-screen copy lowercase like the post.

1. Open on a big centered line - "in the AI era, the hard part is" - entering word by word from the right with an orange colorama text wipe over it (the `colorama-wipe` registry component). Hold it about a second, then scale it down into place above a spinning list.
2. The list rotates through 30 hard things about working in the AI era - spending tokens wisely, picking the right model, managing context windows, etc - each with a real app icon. Go fast, it's not meant to be read, then land slowly on "managing your desktop". 0.2s after it lands a question mark pops on after it.
3. Pull the camera back to reveal the Mac desktop as windows pile in on top of each other, arriving from behind the camera - Claude, ChatGPT, Grok, Linear, Chrome, Spotify, Slack and Claude Code in a terminal. Build these as accurate recreations of the real apps with real icons. 
4. Push back in so the windows fly past the camera, back to text - "don't make your browser / one of them".
5. Pan up to a really tight framing of just the notch and the top of the wallpaper. A cursor comes up and hovers - the notch morphs into a pill with the name "NotchBrowser", then opens into the browser panel exactly like in the video. 
6. Click through the tabs like the video does, then click the collapse chevron so the panel retracts into the notch.
7. End on a checklist of the post's claims with rings and ticks drawing on
```

<img src="https://media.skillry.dev/opus-5-5/jake11moran-414633/original.7f1e44af8c.webp" width="400" alt="Product Hype Teaser with HyperFrames">

*Source: @jake11moran - [Post](https://x.com/jake11moran/status/2103237884564414633)*

---

### 163. 30-Second Website Promo with Music (Chinese) (6.1K views, 24 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
为 https://t.co/MpUyPSxZVk 制作一支 30 秒的网站宣传片，并完成配乐。

你可以读取当前 Mac mini 上的代码和素材，也可以使用浏览器访问 https://t.co/fOQQgAhran。从代码和真实网站自行寻找品牌
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/aiwarts-815008/poster.e0a115dc1a.webp" width="400" alt="30-Second Website Promo with Music (Chinese)">

*Source: @aiwarts - [Post](https://x.com/aiwarts/status/2103419813263815008)*

---

### 164. Product Ad Video with Remotion and Gemini TTS (Japanese) (5.9K views, 13 likes)
*Use Case: ad | Style: 2d*

**Prompt:**
```
opus5.5 + Remotion + Gemini3.8 TTS
たったの1時間でうちのプロダクトの広告動画2本できた・・・

もう一生外注しないw
外注したら10万円以上かかってたと思う
```

<img src="https://media.skillry.dev/opus-5-5/inoue-aix-234322/original.5ea84fe5ab.webp" width="400" alt="Product Ad Video with Remotion and Gemini TTS (Japanese)">

*Source: @inoue_aix - [Post](https://x.com/inoue_aix/status/2104155161883234322)*

---

### 165. Vox-Style Vibe Video from PDF Assets (Arabic) (5.8K views, 44 likes)
*Use Case: ad | Style: 2d*

**Prompt:**
```
جربت Motion بـ Claude Opus 5.5
Headless chrome
Canvas API (Assets Generation/ Paper textures)
Yoga-layout
Prextext
Floating UI
وقلت له يسوي
Vox-vibe video
وعطيته ملفات PDFs وصور
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/x7mdnet-157811/poster.4b4908f22b.webp" width="400" alt="Vox-Style Vibe Video from PDF Assets (Arabic)">

*Source: @X7mdNet - [Post](https://x.com/X7mdNet/status/2105177788043157811)*

---

### 166. FuturePost Extension Motion Showreel with Remotion (5.1K views, 215 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
Motion Designers are cooked

Made this with the new @claudeai Opus 5.5 + @Remotion in a few minutes 🤯

Showcasing my @futurepost extension
```

<img src="https://media.skillry.dev/opus-5-5/allodev-069765/original.53f24506e9.webp" width="400" alt="FuturePost Extension Motion Showreel with Remotion">

*Source: @allodev - [Post](https://x.com/allodev/status/2105414480910069765)*

---

### 167. Product Launch Story Video with Tagline and Music (4.7K views, 44 likes)
*Use Case: ad | Style: photo-based, 2d*

**Prompt:**
```
<inputs>
Ask me for: my product's name (one lowercase word), a 4-word tagline, the 3-step story of what it does, a launch date and domain, a royalty-free song with a clear drop, 4 vertical talking-to-camera clips and 12 portrait photos. If I skip any, use the defaults: "castr", "ugc ads, cast by ai", write a brief → scan 1,000 creators → cast 4, Mixkit "Cat Walk" (129.6 BPM, drop at 29.7s), free Pexels clips and portraits, and transparent stickers from Pixabay (serum, mic, megaphone, vintage camera, spotlight, lips).
</inputs>

<direction>
A 25 second square launch trailer, 1440x1440 at 60fps, loud poster style. Cobalt #2B3BFF, ink #0E0F1F, cream #F6E4C6, pink #FF7DC7, tangerine #FF5A1F. Archivo 900 extra-condensed for names, expanded for headlines, Geist and Geist Mono for labels. Op-art sunburst, scrolling waves, film grain. Real media only: the clips play inside the design, and the stickers get a white die-cut border and a soft shadow.
Motion rules: the camera never stops (a slow 1.03-1.07 push on every scene), nothing pops in (letters rise through a mask line one by one), nothing snaps to the beat (patterns rotate continuously), swaps are carousel glides of about 0.55s, colour changes fade over about 0.35s, stickers ease in and then keep a slow sway. No full stops after the wordmark or any headline.
Banned: beat-snapped rotations, pop-in slams, white flashes, crossfades between scenes, hard cuts, templates.
</direction>

<structure>
54 beats. The song starts 8 beats before its drop.
Beats 0-8: a cobalt sunburst turns around a breathing cream disc. The wordmark types in with a gliding caret and the tagline pill rises. The disc floods the frame into the drop.
Beat 8, the drop: the cream becomes the face of a 3D box and "ONE BRIEF" rises letter by letter. The camera pulls back to the box floating on waves. On beat 12 it turns to "1,000 CREATORS" (stacked, with outlined echoes), on beat 14 to "ZERO DMs".
Beats 16-22: a whip to a dark desk. A tangerine "BRIEF #042" ticket types its rows (product, vibe, cast, due), stickers drift on, a polaroid of a real clip drops onto the corner, and a "NOW CASTING" stamp presses down on beat 20.
Beats 22-34: the casting stage. A crowd of black and white portraits in an arc, a 3D stage block, and the creators gliding through like a carousel. Each plays live in a big disc in black and white, with their name in pink on the stage, their followers, and a MATCH % that counts up. One beat later a "CAST ✓" stamp lands and the clip fades to colour. A counter rolls 1/4 to 4/4.
Beats 34-39: pink floods out of the last disc. The disc morphs into a phone screen (the clip keeps playing) and fans into 4 phones playing all 4 creators, with views counting up. "4 ADS" and "BY FRIDAY" rise.
Beats 39-44, the music's break: the pink floor drops away and a cream "JOIN THE WAITLIST" ticket glides down onto the sunburst. On the pickup its stub tears off.
Beats 44-54: the ticket body morphs into a poster arch. The wordmark rises in, then the tagline, then an info bar slides up in 3 blocks (date, numbers, domain) and a ticker runs round the frame edge. Then it all folds back into the opening disc, so the last frame is the first.
</structure>

<build>
1. One HTML canvas. Every frame is a pure function of time inside seek(t).
2. A beat map in beats, B = 60/BPM, with the song placed so its drop lands on beat 8.
3. The 3D box is an orthographic projection: each face is a 1440px offscreen canvas drawn with an affine transform and shaded by its normal.
4. Cut the clips to 30fps JPEG sequences with ffmpeg, draw frame floor(t*30), and do the black and white with ctx.filter.
5. Trim the sticker PNGs and add the die-cut border by dilating their alpha.
6. Sound: a downloaded SFX for every event (a shutter on every cast, whooshes on the glides, key clicks on the typing), each placed by its measured peak. Loudnorm to -14 LUFS.
7. Render with Playwright at 60fps with 8 motion-blur subframes. Scan for single-frame pops, then compare its motion against a reference video (hard jumps per second, share of still frames).
</build>

<gotchas>
A pattern that rotates one notch per beat reads as stutter: rotate it continuously, and pick each ring's speed so it lands on the same pattern at the last frame. 4 subframes ghost on fast whips, so use 8. A layer whose background is a huge flood circle still covers the screen after sliding down one frame height, so switch it to a full-frame rect once it has flooded. Counters read the frame's time, not the subframe's. The disc must morph inside the same camera transform as the scene it leaves, or it jumps.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and 6 stills (open, box, brief, casting, phones, poster) before you render.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/twoclipping-551116/poster.00b0fd629c.webp" width="400" alt="Product Launch Story Video with Tagline and Music">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2106101258834551116)*

---

### 168. Technical Stack Showcase with Remotion and Python Audio (Chinese) (4.5K views, 26 likes)
*Use Case: ad | Style: 2d*

**Prompt:**
```
所有技术栈也都让 opus5.5 自己列出来！

Remotion 负责画面，Python 负责配乐，最后由 Remotion 调 ffmpeg 合成成片。

画面
影片工程是 Remotion 4.0.528，这是一个用 React
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/aiwarts-428866/poster.20717a53d6.webp" width="400" alt="Technical Stack Showcase with Remotion and Python Audio (Chinese)">

*Source: @aiwarts - [Post](https://x.com/aiwarts/status/2103419817034428866)*

---

### 169. Product Demo Video with UI Moments and Real Clips (4.3K views, 23 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Ask me for: the product name and a one-line promise, 3 to 5 UI moments to show, one accent color, 10 to 20 real vertical clips I own, and a royalty-free song with a clear drop (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
High-end minimal. One idea per shot, lots of empty space, one accent color, one clean sans (Geist or Inter) with tight tracking. Masked type reveals, match cuts, one smooth camera language. Real footage only, never placeholder cards. No full stops in on-screen text.
Banned: shockwave rings, particle bursts, RGB split, camera shake, lens flares, neon glows, grid floors, flashing backgrounds, bouncy easing.
</direction>

<structure>
10 bars at 120 BPM, 2 seconds each.
Bar 1: the hook lands word by word on the beats.
Bar 2: one hook word morphs into the product UI. A cursor types and clicks.
The drop: a circle opens out of the button into a dark scene.
Then one move per bar: a wall of real clips with a scan line and 3 winners, the key output as big type, a 3D carousel of real videos with floor reflections and a motion-blurred whip onto one hero clip, the hero in a phone next to a panel that flips into results, big stats on push cuts, a 3-word ticker, a logo reveal, a fade to black.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside 
http://
window.seek(t): no CSS animations, no timers, no state between frames.
2. Real video: extract clips to 30fps JPEG sequences with ffmpeg and swap img sources per frame. seek awaits the image decodes.
3. Analyze the song with numpy: tempo, beat grid, energy per bar, the drop. Calibrate the grid to the real kick hits. Every cut sits on a downbeat, every UI hit on a beat.
4. Render with Playwright: 3 subframes per frame at t minus, at, and plus 1/240s, then blend with ffmpeg tmix for real motion blur at 60fps.
5. Place each sound effect so its measured peak, not its file start, lands on the event. Keep the effects quiet under the music. Loudnorm to -14 LUFS.
6. Probe 20 or more frames before the full render. Fix anything cluttered, overlapping or hard to read.
</build>

<gotchas>
Never set opacity or filter on a preserve-3d element, because it flattens and both faces show. Fade its wrapper instead. Measure element positions at runtime for match cuts. Only use music and sound effects whose license allows commercial use.
</gotchas>

<start>
Ask me for the inputs, then show me a storyboard with every timing on the beat grid before you write any code.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/raphaelaubryy-687877/original.0b55ce6d62.webp" width="400" alt="Product Demo Video with UI Moments and Real Clips">

*Source: @RaphaelAubryy - [Post](https://x.com/RaphaelAubryy/status/2103413596822687877)*

---

### 170. Vertical Video from LP with WebGL Hair Physics (Japanese) (4.0K views, 44 likes)
*Use Case: ad | Style: photo-based, 2d*

**Prompt:**
```
1. LPを9つの場面に分解して縦型動画の構成に。コピーは一字一句そのままWebフォントで組み直し、ロゴはSVGで描き直し。

2. 元画像の人物写真は150px前後で、拡大すると崩れる → 高解像度に再生成 Codex呼び出し

3. 動きはHTML/CSS/JavaScript（髪の揺れはWebGL）で書いて、ブラウザで1フレームずつ撮影して60fpsに。動画編集ソフトは不使用。BGMはLyria 3 Pro。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/ponzponz15-145882/poster.e99a2dc7d0.webp" width="400" alt="Vertical Video from LP with WebGL Hair Physics (Japanese)">

*Source: @ponzponz15 - [Post](https://x.com/ponzponz15/status/2106307182019145882)*

---

### 171. Typing Game 30-Second CM Style Video (Japanese) (3.9K views, 48 likes)
*Use Case: ad | Style: 2d, 3d*

**Prompt:**
```
①remotion + three.jsを使って 30秒のCM風の動画を作りたいので構成を考えてください。〇〇（自分が作りたいイメージを書いた方がいいです！今回は”ただ打つだけのつまらないタイピングゲームから楽しく練習ができるタイピングゲームであることを伝えるものにしたいです”と大体で指示しました）

②技術を深掘りして調べてどんなものが作れるかや使えそうなskillsを調べて欲しいです。構成については再度考えて細かく考えて欲しいです。

③考えたのを元にして実際に動画を作成してください
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/typingmusou-160705/poster.827d3ed465.webp" width="400" alt="Typing Game 30-Second CM Style Video (Japanese)">

*Source: @Typingmusou - [Post](https://x.com/Typingmusou/status/2103452241848160705)*

---

### 172. Opus 5.5 Ad Inspired by Apple 1984 Commercial (3.3K views, 53 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
create a 30 second ad for Opus 5.5 inspired by Apple 1984 ad, iykyk! avoid the border text or frames!
```

<img src="https://media.skillry.dev/opus-5-5/1littlecoder-378066/original.bbf4b625ee.webp" width="400" alt="Opus 5.5 Ad Inspired by Apple 1984 Commercial">

*Source: @1littlecoder - [Post](https://x.com/1littlecoder/status/2103746736980378066)*

---

### 173. Instagram Ad for Liinks with Motion Graphics (2.6K views, 39 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
make a cool instagram ad for liinks
```

<img src="https://media.skillry.dev/opus-5-5/charliie-334026/original.2e82ef7d21.webp" width="400" alt="Instagram Ad for Liinks with Motion Graphics">

*Source: @charliie - [Post](https://x.com/charliie/status/2103514073476334026)*

---

### 174. Nafa Marketing Remotion Launch Video (1.8K views, 45 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
Claude Opus 5.5 🤝 Remotion = 🔥

all of Nafa's marketing runs through Claude now.

we gave it our taste. one person one repo
```

<img src="https://media.skillry.dev/opus-5-5/saadpastadev-347341/original.9fa4ff440e.webp" width="400" alt="Nafa Marketing Remotion Launch Video">

*Source: @SaadPastaDev - [Post](https://x.com/SaadPastaDev/status/2107741413769347341)*

---

### 175. 15-Second Referral Program Motion Graphics Video (1.7K views, 15 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
make a dynamic 15-second motion graphics video to talk about our referral program
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/paulo-kombucha-283883/poster.2e31bd3a93.webp" width="400" alt="15-Second Referral Program Motion Graphics Video">

*Source: @paulo_kombucha - [Post](https://x.com/paulo_kombucha/status/2104481235028283883)*

---

### 176. Sprites AI Product Promo with Morphing Shape Animation (1.6K views, 12 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
Analyze http://sprites.ai and build a product promo from our own UI, not generic components.

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Warm-gray canvas, black and white components, one accent (#FD9543), Geist. Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. Last frame = first frame, so it loops.
Banned: bouncy easing, particles, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something on every beat.
Connect ad account (Meta, Google, LinkedIn, TikTok, Reddit logos) → loader → check → prompt bar types "Launch ads that convert" → island "Researching 42 competitors" → Ads Library wall of real ads scrolls and lands on a top performer → approval card → Approve & launch → budget slider that stretches past max → Autopilot toggle → knob becomes a liquid tab indicator across channels → ROAS chart draws itself with hover tooltip → ⌘K → type "pause" → toast "Paused 3 losing ads" → back to the button.
</structure>

<build>
1. One HTML file, 1440x1440. Every style is computed inside seek(t): no CSS transitions, no timers, no state between frames.
2. Springs are closed-form step responses. A value that changes target many times is a sum of springs, so it stays a pure function of time.
3. Tab indicator and toggle knob: the two edges ride different springs, so the leading edge stretches ahead.
4. Drags are direct manipulation: while held, the value follows the cursor. On release it springs back from wherever it was.
5. No music. Synthesize UI sounds with numpy and place each one by its measured peak on the beat grid.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat first. Fix anything off-grid, cramped or hard to read.
</build>

<gotchas>
No will-change on anything the camera scales. Swapped text needs its own enter/exit timing. Match the last frame to the first, cursor position and speed included, or the loop stutters.
</gotchas>

Show me the state list on the beat grid before writing any code.
```

<img src="https://media.skillry.dev/opus-5-5/annacher-433425/original.89dc11ee96.webp" width="400" alt="Sprites AI Product Promo with Morphing Shape Animation">

*Source: @AnnaCher___ - [Post](https://x.com/AnnaCher___/status/2103571096549433425)*

---

### 177. OBLT E-Bike Cinematic Product Header with X-Ray Cursor (1.5K views, 16 likes)
*Use Case: ad | Style: photo-based, 2d*

**Prompt:**
```
# OBLT E-bike Header

A full-viewport, dark, cinematic e-bike product header for the brand **OBLT**, built in React (client component) with pure CSS and an interactive cursor-following "x-ray" spotlight reveal — moving the mouse wipes away the bike's exterior photo to expose its internal carbon/gearbox structure underneath. Built with React only (no animation libraries).

## Tech stack (libraries actually imported)
- React only — `useRef`, `useState`, and the `MouseEvent` type. No framer-motion, no GSAP, no icon library. All animation is hand-written CSS keyframes + an inline CSS `mask-image`.
- SVG icon (the CTA arrow) is hand-inlined, not from a library.

## Fonts & global styles
- Single Google font, imported inside a `<style>` block:
  ```
  @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
  ```
- Font stack: `"Almarai","Helvetica Neue",Helvetica,Arial,sans-serif`.
- `-webkit-font-smoothing: antialiased`. `box-sizing: border-box` applied to the root and all descendants (scoped to `.vt-header`, never global).

## Section container
- Root `<header className="vt-header">` is the mouse-tracking element (handlers: `onMouseEnter`, `onMouseMove`, `onMouseLeave`).
- Styles: `position: relative; display: flex; flex-direction: column; min-height: 100vh; overflow: hidden; padding: 32px 56px 44px; background-color: #272727; color: #fff;`.
- Internal vertical flow: top nav, then a flex-grow spacer "stage", then bottom content pinned to the base.

## Structure, section by section

### 1. Reveal background (`.vt-bg`, absolute inset:0, z-index 0, pointer-events:none)
Three stacked layers:
- **Base exterior image** (`.vt-bg-img`): the full bike exterior photo, `object-fit: cover; object-position: center;`, fills the layer. `user-select:none`, `-webkit-user-drag:none`, `referrerPolicy="no-referrer"`.
- **X-ray layer** (`.vt-bg-xray`, z-index 1): contains the bike x-ray/internal image (same cover/center sizing). This layer is masked by a radial gradient driven by cursor position (see Animations). `will-change: -webkit-mask-image, mask-image;` and `transition: -webkit-mask-image .12s linear, mask-image .12s linear;`.
- **Veil overlay** (`.vt-bg-veil`, z-index 2): a vertical darkening gradient so text stays legible top & bottom:
  ```
  linear-gradient(180deg, rgba(39,38,38,.62) 0%, rgba(39,38,38,.10) 26%, rgba(39,38,38,.10) 60%, rgba(39,38,38,.82) 100%)
  ```

### 2. Top nav (`.vt-nav`, z-index 30)
- `display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 24px;`.
- **Logo** (left, `.vt-logo`): text `OBLT` followed by a `.` span. `font-size: 28px; font-weight: 700; letter-spacing: 0.5px; color: #E0E1CC;` (dot is also `#E0E1CC`).
- **Center menu** (`.vt-menu`, gap 40px): three links — `E-bikes`, `Features`, `Connect`. Each: `font-size: 16px; font-weight: 400; letter-spacing: .3px; color: #E0E1CC; opacity: .85; transition: opacity .2s ease;` hover → opacity 1.
- **Right cluster** (`.vt-nav-right`, gap 18px): an uppercase explore link plus a hamburger button.
  - `.vt-explore` link text: `Explore the bike` — `font-size: 14px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #E0E1CC;` hover → opacity .65.
  - **Hamburger** (`.vt-burger`, hidden on desktop): 34×34px, three `#E0E1CC` bars 22×2px, radius 2px, gap 5px. On `.open`: bar 1 `translateY(7px) rotate(45deg)`, bar 2 `opacity:0`, bar 3 `translateY(-7px) rotate(-45deg)`. Transition `transform .25s ease, opacity .2s ease`.
- **Mobile dropdown** (`.vt-mobile-menu`, rendered only when `menuOpen`): absolutely positioned below the nav (`top:100%; margin-top:16px; z-index:40`), `background: rgba(20,19,19,.97); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,.1); border-radius: 16px; padding: 8px 18px;`. Links (`E-bikes`, `Features`, `Connect`, `Explore the bike`): `color:#E0E1CC; font-size:18px; padding:14px 4px; border-bottom:1px solid rgba(255,255,255,.08)`; last link `border-bottom:none; font-weight:700`. Each link closes the menu on click.

### 3. Stage spacer (`.vt-stage`, z-index 30, `flex: 1 1 0%`)
- `display: flex; align-items: flex-start; justify-content: flex-end; padding-top: 22px;`. In the current markup it is an empty `aria-hidden` spacer (the `.vt-hint` pulsing-dot styles exist in CSS but the hint element is not rendered).
- (Reference: `.vt-hint` styled as an uppercase 11px/600 label with a 36px circle dot, `border:1px solid rgba(46,211,176,.5); color:#2ed3b1;` running `vtPulse 1.8s ease-in-out infinite`.)

### 4. Bottom content (`.vt-bottom`, z-index 30)
12-column grid: `grid-template-columns: repeat(12, 1fr); align-items: end; gap: 18px 32px;`.
- **Headline** (`.vt-headline`, `grid-column: 1 / span 8`): `<h1>` containing the word-stagger component. h1 style: `color: #E0E1CC; font-weight: 500; font-size: clamp(36px, 7vw, 116px); line-height: 0.85; letter-spacing: -0.07em; white-space: nowrap; margin:0;`. Text: **Ready For The Ride**.
- **Right block** (`.vt-right`, `grid-column: 9 / span 4; align-self: end; transform: translateY(22px);`):
  - Paragraph (verbatim): `An integrated gearbox, battery, and motor engineered in carbon and built to be seen. Every system, in the open.` Style: `font-size: 16px; line-height: 1.2; color: rgba(225,224,204,.7);` animates in via `vtFadeUp .8s cubic-bezier(.16,1,.3,1) both` with `animation-delay: .5s`.
  - **CTA button** (`.vt-cta`): label **Reserve yours** plus a circular arrow. Pill: `color:#000; background:#E0E1CC; border:none; border-radius:9999px; padding:6px 6px 6px 22px; font-size: clamp(14px, 1vw, 16px); font-weight:500; display:inline-flex; align-items:center; gap:10px;`. Animates via `vtFadeUp .8s cubic-bezier(.16,1,.3,1) both`, `animation-delay: .7s`. Hover → `gap: 14px`. Inner circle `.circ`: 40×40px, `border-radius:50%; background:#000;` containing the SVG (stroke `#E0E1CC`); on button hover `.circ` scales to `1.1` (`transition: transform .25s ease`).

## Assets (every URL)
- Exterior photo (base layer): `https://cdn.jiro.build/ARS/OBLT%20E%20Bike/bike-exterior.png`
- X-ray / internals photo (revealed layer): `https://cdn.jiro.build/ARS/OBLT%20E%20Bike/bike-xray-original.png`
- CTA arrow icon: inline SVG, 16×16, `viewBox="0 0 24 24"`, `stroke="currentColor"`, `stroke-width="2.2"`, round caps/joins, path:
  ```
  M5 12h14M13 6l6 6-6 6
  ```

## Animations

### Cursor "x-ray" spotlight (signature interaction)
- State: `hovering` (bool) and `pos` ({x,y} in px relative to the section's bounding rect). `handleMove` computes `e.clientX - rect.left`, `e.clientY - http://rect.top`.
- Constants: `RADIUS = 165` px (spotlight radius), `FEATHER = 45` px (soft edge). Inner fully-clear radius = `RADIUS - FEATHER` = 120px.
- The x-ray layer's `maskImage` / `WebkitMaskImage` is set inline. When hovering:
  ```
  radial-gradient(circle 165px at {x}px {y}px, #000 0, #000 120px, transparent 165px)
  ```
  When not hovering (collapsed to nothing):
  ```
  radial-gradient(circle 0px at 50% 50%, transparent 0, transparent 0)
  ```
- Mask transitions at `.12s linear` so the reveal trails the cursor smoothly. NOTE: in CSS `mask`, opaque (`#000`) areas KEEP the layer — so the circle reveals the x-ray image while the rest of that layer is hidden (showing the exterior beneath).

### Headline word pull-up (`WordsPullUp` component)
- Splits the headline on spaces; each word is an `inline-block` span (`margin-right: 0.22em`, last word 0). Each word animates `wpuUp` with `cubic-bezier(.16,1,.3,1) both`, default `duration = 0.6s`, staggered by `delayStep = 0.08s` (`animationDelay: i * 0.08s`).
- Keyframes:
  ```
  @keyframes wpuUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  ```
- Optional superscript asterisk (`.wpu-ast`, `font-size:0.31em; vertical-align:top; top:0.15em; left:-0.05em;`) — not enabled here (`asterisk` defaults false).
- Respects `@media (prefers-reduced-motion: reduce)` → `.wpu-word { animation: none; }`.

### Fade-up for right block (`vtFadeUp`)
```
@keyframes vtFadeUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
```
Paragraph delay `.5s`, CTA delay `.7s`; both `.8s cubic-bezier(.16,1,.3,1) both`.

### Pulse (defined for hint dot)
```
@keyframes vtPulse { 0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.12);opacity:1} }
```
Applied `vtPulse 1.8s ease-in-out infinite`.

## Responsive
- **≤1000px**: padding `24px 28px 32px`; nav becomes `1fr auto` (logo + right); center `.vt-menu` and `.vt-explore` hidden; hamburger shown; `.vt-bottom` collapses to single column (`gap:16px`); headline & right span full width; `.vt-right` `transform:none; align-self:start; margin-top:4px; max-width:520px`.
- **≤600px**: padding `18px 20px 26px`; logo `font-size:22px`; headline `white-space:normal; font-size: clamp(40px, 13vw, 72px); line-height:0.92`; paragraph `font-size:15px; margin-bottom:16px`; CTA `font-size:14px; padding:5px 5px 5px 20px`; `.circ` 36×36px.

## Key design principles
- Dark stage (`#272727`) with a single warm-cream accent (`#E0E1CC`) and a teal accent (`#2ed3b1`) reserved for the (optional) pulse hint.
- The product reveal IS the hero: cursor acts as an x-ray torch over a layered photo pair.
- Editorial oversized headline (line-height 0.85, tight `-0.07em` tracking) anchored bottom-left; supporting copy + CTA bottom-right.
- Staggered, eased (`cubic-bezier(.16,1,.3,1)`) entrance for hierarchy.

## Common mistakes to avoid
- Don't invert the mask logic: opaque `#000` in the radial gradient REVEALS the x-ray layer; the transparent ring hides it. Getting this backwards shows internals everywhere except under the cursor.
- Keep `RADIUS - FEATHER` (120px) as the inner solid stop and `RADIUS` (165px) as the transparent stop — that 45px band is the soft feather.
- Mouse coordinates must be relative to the section rect (`getBoundingClientRect`), not the viewport.
- Mask transition is `.12s linear` only — a longer/eased transition makes the spotlight feel laggy.
- `white-space: nowrap` on the headline is intentional on desktop; only switch to `normal` at ≤600px.
- Scope all resets and the Almarai `@import` to the component; do not touch global `body`/`html`.

## Page title
OBLT — Ready For The Ride

## Integration (build-safety — do not skip)
- Add this section as a **new** component file with a unique name. Don't edit or overwrite any existing file except to add its import and render it.
- Render it **after** all existing sections; keep every previously built section exactly as-is — never replace or remove them.
- If no project exists, create a minimal React + Tailwind app; if one exists, use it as-is — don't re-scaffold or change the Tailwind/build config or version.
- Keep it self-contained: scope its fonts and any resets to this section; never set global `body`/`html`/`*` styles or a global font.
- Install only the libraries this section names.
```

<img src="https://media.skillry.dev/opus-5-5/iamtanzil-120030/original.31773009f1.webp" width="400" alt="OBLT E-Bike Cinematic Product Header with X-Ray Cursor">

*Source: @iamtanzil_ - [Post](https://x.com/iamtanzil_/status/2103459843831120030)*

---

### 178. Tile-Made 30-Second Ad Video Reveal with Three.js (1.5K views, 3 likes)
*Use Case: ad | Style: 3d, realistic*

**Prompt:**
```
添付の画像を「最後の画面」にして、全部タイルでできた30秒の広告動画（音つき・mp4）を作ってください。
ブラウザ（Three.js）で組み、Chromeで全コマを書き出し、ffmpegでmp4にします。

# ゴール
- 見る人は25秒、タイルの制作動画だと思って見る。最後の数秒で、添付画像（広告）だったと気づく
- 最後の画面は添付画像とほぼ同じ。文字が読める。画面いっぱいがタイル（床は見せない）

# 仕様
- 1920×1080、30fps、30秒。HTML1ファイル（Three.js。npmで入れてesbuildで1ファイルに固める）
- 時刻 t を渡すと、同じ t なら必ず同じ絵になる作りにする（seek(t)）
- タイルは1枚ずつ別のインスタンス。16:9の格子で約19万枚（576×324）
- 位置・向き・厚み・面取り・色を1枚ずつ変える。目地（隙間）は空き。線は引かない
- 添付画像は、タイルの色を取るためだけに使う（テクスチャとして貼らない）
- 素材は約12種（釉薬セラミック、スレート、真珠貝、白磁、テラコッタ、ガラスなど）。色の明るさと彩度で割り当てる
- 光は、左上の硬い太陽1つ。床は漆喰。奥に赤い大工のチョーク線がピンぼけで入る
- 被写界深度（円形ボケ）を後処理で自作する。しぼりは最初大きく、最後は小さく

# 流れ（秒）
0〜3　 床に暗いタイルが1枚。カメラは床すれすれ
3〜10　[組み始める場所]から、タイルが渦を巻いて落ちる。最初の1枚→周りの順に増える
10〜21 一気に外へ広がる。カメラが引いて[見せたい絵]が見えてくる
21〜24 全体が見える。文字になる場所は、周りと同じ淡い色のまま
24〜26 文字・ロゴ・ボタンのタイルが、左から順にパタパタ裏返って現れる
26〜30 真上からの構図で止まる。カーソルが[ボタンの文言]をクリックし、ボタンのタイルが少し沈む

# ハマりどころ（必ず守る）
- 文字になるタイルは、最初は周りの背景色で組む。背景色は、外側から内側へ塗り広げて決める。文字のふち（白ぶち）も一緒に裏返す。守らないと、途中で文字の形が見えてしまう
- 真上のカメラは、位置を真上ぴったりにしない（向きが90°回る）。止める所は、動きの勢いをゼロにする（補間のはみ出しで反転する）
- 最後の画面は、元画像と並べて色を比べ、露出・彩度・色味を合わせる
- 文字が小さくて読めないときは、タイル数を増やす
- 下地の暗い面は、タイルが着地したマスだけに出す

# 音
- ElevenLabsの効果音で、タイルを置く音・裏返す音・マウスのクリックを作る（各0.5秒）。作る前に、クレジットの消費を知らせる
- タイルの着地・裏返しの時刻に合わせて並べて重ねる。カメラが遠いほど小さく、数が増えたら雨のようにまとめる
- 24〜26秒のパタパタを、いちばん目立たせる。音量は -16 LUFS

# 進め方
1. 先に脚本（秒ごとの情景）を日本語で出し、OKをもらってから作る
2. 途中のコマ（最初のタイル／組み始め／引き／全景／文字が出る瞬間／最後）を自分で見て直す
3. 書き出しは Chrome（puppeteer-core）で seek(t) を30fpsぶん呼び、png を ffmpeg に流す
4. 納品は mp4（高画質と共有用）と、確認した画像

# 入力
- エンドフレーム: [添付]
- 組み始める場所: [例：人物の目]
- 引いたときに見せたい絵: [例：笑顔の女性]
- ボタンの文言: [例：無料体験はこちら]
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/tanabe-fragm-322001/poster.cfd51c9fe1.webp" width="400" alt="Tile-Made 30-Second Ad Video Reveal with Three.js">

*Source: @tanabe_fragm - [Post](https://x.com/tanabe_fragm/status/2107644501372322001)*

---

### 179. Flora Product Ad Video with Playwright and FFmpeg (1.3K views, 8 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
Dentro da pasta do flora tem uma outra pasta chamada "ads" com videos e prints do Flora(Caso queira usar como referencia).

Use apenas: JavaScript, Playwright e FFmpeg. Faça um vídeo moderno, elegante e impactante para meu produto.

https://apps.apple.com/pt/app/flora-calend%C3%A1rio-menstrual/id6789702093
```

<img src="https://media.skillry.dev/opus-5-5/andre-lucaxxs-846347/original.410e4cf9ce.webp" width="400" alt="Flora Product Ad Video with Playwright and FFmpeg">

*Source: @andre_lucaxxs - [Post](https://x.com/andre_lucaxxs/status/2103292636945846347)*

---

### 180. Motion Design Ad Creation and Application (1.3K views, 4 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
create a motion design prompt for an ad for our site

Prompt 2: now apply it
```

<img src="https://media.skillry.dev/opus-5-5/l3d1c-752011/original.5d4b16e894.webp" width="400" alt="Motion Design Ad Creation and Application">

*Source: @l3d1c - [Post](https://x.com/l3d1c/status/2103536553930752011)*

---

### 181. AgentaOS One-Shot Remotion Promo Video (1.2K views, 4 likes)
*Use Case: ad | Style: 2d, minimal*

**Prompt:**
```
I just one-shotted this video with Opus 5.5 and @Remotion for the new @agentaOS promo.

Unbelievable what you can do these days.
```

<img src="https://media.skillry.dev/opus-5-5/pisajeski-168993/original.1c8beeff06.webp" width="400" alt="AgentaOS One-Shot Remotion Promo Video">

*Source: @PIsajeski - [Post](https://x.com/PIsajeski/status/2104124855302168993)*

---

## 6. Fun & Creative Experiments

### 182. Pixel Art Wizard Spell Casting Animation with Chiptune Music (459.3K views, 2,576 likes)
*Use Case: fun | Style: pixel-art, hand-drawn*

**Prompt:**
```
Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No external assets, libraries, or network requests.

RENDERING
- Draw everything to an offscreen canvas at a fixed logical resolution of 128x96, then blit to a fullscreen display canvas scaled by the largest integer factor that fits the window, centered, with imageSmoothingEnabled = false and CSS image-rendering: pixelated.
- All drawing snaps to integer coordinates on the logical canvas. No sub-pixel positions, anti-aliasing, gradients, or shadowBlur.
- Fixed palette of ~24 hex colors: deep blues/purples for night sky, warm robe tones, 3-4 bright magic colors. Every pixel comes from this palette.

CHARACTER
- Build the wizard procedurally from filled rects and pixel runs, ~24x32 logical pixels: pointed hat with a bend, long beard, two-shade robe with darker outline, staff with a gem at the tip.
- Parameterize the pose (staff angle, arm raise, head tilt, robe sway). Animate parameters smoothly, then quantize to the pixel grid each frame so motion reads at an 8-12 fps pixel animation feel even though the loop runs at 60fps.

ANIMATION
- Looping state machine: IDLE (2-frame bob, beard sway) -> CHARGE (staff raises, gem flickers, sparks spiral inward) -> CAST (bright burst, projectile fires across the scene, 1-2 pixel screen shake) -> RECOVER (settle back). Ease pose parameters between keyframes.
- Pooled allocation-free particle system: preallocate and reuse. Sparks orbit the gem during CHARGE, explode outward on CAST, each particle stepping its palette index from white to magic color to dark before despawn. Snap particle positions to the grid when drawing.
- Fixed 60hz timestep update with rAF rendering. Zero object allocation inside the loop.

SCENE
- Minimal background: dark sky, a few twinkling 1px stars, moon, stone floor line. Character silhouette must read clearly.
- Subtle 1px rim light on the wizard from the gem, brightening during CHARGE and CAST.

QUALITY BAR
- Crisp pixels at any window size, seamless loop, stable 60fps, readable silhouette. Should look like a polished 16-bit sprite animation, not vector shapes scaled down.
```

<img src="https://media.skillry.dev/opus-5-5/majidmanzarpour-927543/original.f5bc33c897.webp" width="400" alt="Pixel Art Wizard Spell Casting Animation with Chiptune Music">

*Source: @majidmanzarpour - [Post](https://x.com/majidmanzarpour/status/2102476258948927543)*

---

### 183. 16-Bit Pixel Art Character Animation with Chiptune Soundtrack (96.6K views, 570 likes)
*Use Case: fun | Style: pixel-art, hand-drawn*

**Prompt:**
```
<role>   You are a pixel animator and game feel designer who also writes chiptune music. What you create with code should look like hand-drawn character animation from a top-tier 16-bit era studio, not scaled-down vector graphics.   </role> <inputs>   The following are defaults, start working directly without asking me:   - Title: "The 99th Spell"   - Resolution: 1920×1080, 60fps, duration exactly 16 seconds</inputs>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/gkxspace-923139/poster.36dd7565cc.webp" width="400" alt="16-Bit Pixel Art Character Animation with Chiptune Soundtrack">

*Source: @gkxspace - [Post](https://x.com/gkxspace/status/2105260627937923139)*

---

### 184. Immersive Wow-Factor Creative Visual Experience (85.3K views, 1,116 likes)
*Use Case: fun | Style: abstract*

**Prompt:**
```
Build me something when people see it, they will say "Wow". Must be immersive, when people see it, they will be stunned by what they see.

This can be a video, or anything else you can think of.

Be creative. Go wild. Dig deep.

No AI slop. Something unique, think outside of the box. Think big. Think amazing. Something no other model done before.

Be proud. Show your best. Don't disappoint.
```

<img src="https://media.skillry.dev/opus-5-5/miaai-lab-774895/original.fad5a90e2f.webp" width="400" alt="Immersive Wow-Factor Creative Visual Experience">

*Source: @MiaAI_lab - [Post](https://x.com/MiaAI_lab/status/2103837519615774895)*

---

### 185. Cozy Metal Detector Game with Sunset Atmosphere (81.5K views, 1,158 likes)
*Use Case: fun | Style: 2d, cartoon*

**Prompt:**
```
vibe coding a cozy metal detector game

a few prompts in with opus 5.5

loving the sunset 😌
```

<img src="https://media.skillry.dev/opus-5-5/zacxbt-234711/original.da4665e468.webp" width="400" alt="Cozy Metal Detector Game with Sunset Atmosphere">

*Source: @zacxbt - [Post](https://x.com/zacxbt/status/2103789882309234711)*

---

### 186. Bangkok Flood Jet Ski Game with Drain Clearing Gameplay (57.0K views, 23 likes)
*Use Case: fun | Style: 2d, cartoon*

**Prompt:**
```
Ladprao Jet ski game based on the Bangkok floods. Clear the drains and fight the crocs. Made with Opus 5.5 . https://ladprao-flood-ski.vercel.app/
```

<img src="https://media.skillry.dev/opus-5-5/vibechine-465008/original.f7e50d1d5c.webp" width="400" alt="Bangkok Flood Jet Ski Game with Drain Clearing Gameplay">

*Source: @vibechine - [Post](https://x.com/vibechine/status/2103966021451465008)*

---

### 187. Go All Out Creative Motion Graphics Showcase (54.1K views, 82 likes)
*Use Case: fun | Style: abstract*

**Prompt:**
```
Go all out.
```

<img src="https://media.skillry.dev/opus-5-5/sudo-kiran-696074/original.201cd5baa9.webp" width="400" alt="Go All Out Creative Motion Graphics Showcase">

*Source: @sudo_kiran - [Post](https://x.com/sudo_kiran/status/2103463886372696074)*

---

### 188. Intricate Pelican Riding Bicycle Animation Showcase (11.6K views, 72 likes)
*Use Case: fun | Style: 2d*

**Prompt:**
```
每次一个新的模型出来呢，大家都让它去画 “鹈鹕骑自行车” 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 “鹈鹕骑自行车”的动画视频，你可以用任何的技术，不用着急，画一天都可以。
```

<img src="https://media.skillry.dev/opus-5-5/axtonliu-290566/original.421b336345.webp" width="400" alt="Intricate Pelican Riding Bicycle Animation Showcase">

*Source: @AxtonLiu - [Post](https://x.com/AxtonLiu/status/2103119648271290566)*

---

### 189. Rock Skipping Physics Simulation in Three.js (10.1K views, 30 likes)
*Use Case: fun | Style: 3d*

**Prompt:**
```
Rock skipping game made with Three.js and Opus 5.5.
```

<img src="https://media.skillry.dev/opus-5-5/llama3dstudio-012980/original.226d375df7.webp" width="400" alt="Rock Skipping Physics Simulation in Three.js">

*Source: @llama3dstudio - [Post](https://x.com/llama3dstudio/status/2104115092124012980)*

---

### 190. 3D Ball Drop Rhythm Music Synced Animation (9.4K views, 68 likes)
*Use Case: fun | Style: 3d, particle*

**Prompt:**
```
卡点的3D球体下坠的动画视频：对标专业的Blender做的效果，音乐是多首经典的纯音乐，场景按音乐切换，3D球体下坠时在3D场景的物件中弹跳，按音乐的节奏点亮物件。带一些幽默的元素。
使用three.js制作，不要使用Blender制作
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/gorden-sun-797351/poster.5c67922dd0.webp" width="400" alt="3D Ball Drop Rhythm Music Synced Animation">

*Source: @Gorden_Sun - [Post](https://x.com/Gorden_Sun/status/2105302007896797351)*

---

### 191. Pixel Art Wizard Spell Casting Canvas Animation (8.5K views, 85 likes)
*Use Case: fun | Style: pixel-art, 2d*

**Prompt:**
```
Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No external assets, libraries, or network requests.

RENDERING
- Draw everything to an offscreen canvas at a fixed logical resolution of 128x96, then blit to a fullscreen display canvas scaled by the largest integer factor that fits the window, centered, with imageSmoothingEnabled = false and CSS image-rendering: pixelated.
- All drawing snaps to integer coordinates on the logical canvas. No sub-pixel positions, anti-aliasing, gradients, or shadowBlur.
- Fixed palette of ~24 hex colors: deep blues/purples for night sky, warm robe tones, 3-4 bright magic colors. Every pixel comes from this palette.

CHARACTER
- Build the wizard procedurally from filled rects and pixel runs, ~24x32 logical pixels: pointed hat with a bend, long beard, two-shade robe with darker outline, staff with a gem at the tip.
- Parameterize the pose (staff angle, arm raise, head tilt, robe sway). Animate parameters smoothly, then quantize to the pixel grid each frame so motion reads at an 8-12 fps pixel animation feel even though the loop runs at 60fps.

ANIMATION
- Looping state machine: IDLE (2-frame bob, beard sway) -> CHARGE (staff raises, gem flickers, sparks spiral inward) -> CAST (bright burst, projectile fires across the scene, 1-2 pixel screen shake) -> RECOVER (settle back). Ease pose parameters between keyframes.
- Pooled allocation-free particle system: preallocate and reuse. Sparks orbit the gem during CHARGE, explode outward on CAST, each particle stepping its palette index from white to magic color to dark before despawn. Snap particle positions to the grid when drawing.
- Fixed 60hz timestep update with rAF rendering. Zero object allocation inside the loop.

SCENE
- Minimal background: dark sky, a few twinkling 1px stars, moon, stone floor line. Character silhouette must read clearly.
- Subtle 1px rim light on the wizard from the gem, brightening during CHARGE and CAST.

QUALITY BAR
- Crisp pixels at any window size, seamless loop, stable 60fps, readable silhouette. Should look like a polished 16-bit sprite animation, not vector shapes scaled down.
```

<img src="https://media.skillry.dev/opus-5-5/zacxbt-944604/original.1fc21723ff.webp" width="400" alt="Pixel Art Wizard Spell Casting Canvas Animation">

*Source: @zacxbt - [Post](https://x.com/zacxbt/status/2103808699466944604)*

---

### 192. Funny Random Topic Short Video (8.3K views, 71 likes)
*Use Case: fun | Style: 2d*

**Prompt:**
```
make a funny video. it can be about anything. length: 10 to 30s
```

<img src="https://media.skillry.dev/opus-5-5/nemtudo-614053/original.efacb94951.webp" width="400" alt="Funny Random Topic Short Video">

*Source: @NemTudo_ - [Post](https://x.com/NemTudo_/status/2102973867656614053)*

---

### 193. 3D Pixel Art Pelican Riding Bicycle Over Bridge (5.8K views, 17 likes)
*Use Case: fun | Style: pixel-art, 3d*

**Prompt:**
```
Make a realistic 3D pixel Art animation of a Pelican riding a Bicycle over the Bridge, beautiful city in the background.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/sadalbert10-856416/poster.6d798a33b7.webp" width="400" alt="3D Pixel Art Pelican Riding Bicycle Over Bridge">

*Source: @SadAlbert10 - [Post](https://x.com/SadAlbert10/status/2106789700807856416)*

---

### 194. Reflective Motion Design on Why We Make Things (5.6K views, 23 likes)
*Use Case: fun | Style: 3d, retro*

**Prompt:**
```
Everyone is sharing what Opus 5.5 can build this week, and it made us ask ourselves a different question: when making things becomes this easy, what do we actually want to make and why?

Our answer was a small retro arcade, the kind we grew up hanging out in, filled with 21 games made by independent developers. Every cabinet carries the name of the person who built its game.

Walk in, drop a coin, and play: https://tympanus.net/Demos/InsertCoin/

#threejs #webgl
```

<img src="https://media.skillry.dev/opus-5-5/codrops-340299/original.f3a89ace78.webp" width="400" alt="Reflective Motion Design on Why We Make Things">

*Source: @codrops - [Post](https://x.com/codrops/status/2104217304611340299)*

---

### 195. Game Development Weekend Project Teaser (Chinese) (5.6K views, 17 likes)
*Use Case: fun | Style: 2d*

**Prompt:**
```
opus 5.5 遊戲製作，週末快點來嘗試。
```

<img src="https://media.skillry.dev/opus-5-5/mrblock-096062/original.95806622a9.webp" width="400" alt="Game Development Weekend Project Teaser (Chinese)">

*Source: @mrblock - [Post](https://x.com/mrblock/status/2103492984474096062)*

---

### 196. Van Gogh Starry Night 3D Cat Spotting Game (5.6K views, 74 likes)
*Use Case: fun | Style: 3d*

**Prompt:**
```
can you make a 3d game where you walk around and spot cats inside of a van gogh painting? we can start with stary night and its town
```

<img src="https://media.skillry.dev/opus-5-5/mandelduck-768972/original.4020d15134.webp" width="400" alt="Van Gogh Starry Night 3D Cat Spotting Game">

*Source: @MandelDuck - [Post](https://x.com/MandelDuck/status/2103802923465768972)*

---

### 197. What Day Is It 30-Second Motion Graphics (Japanese) (5.2K views, 26 likes)
*Use Case: fun | Style: 2d, kinetic-type*

**Prompt:**
```
良い笑

・入れたプロンプト
「今日何曜日だっけ？BGM付きの30秒のかっこいいモーショングラフィックスで教えて（全力を出してください）」

・生成時間：約11分（書き出し1分36秒込み）
・モデル：Opus 5.5
・動画：HyperFrames（HTMLで動画を作るツール）
・BGM：Pythonでその場で合成（外部の音源なし）
```

<img src="https://media.skillry.dev/opus-5-5/tankazunori0914-156748/original.00ba5c12f5.webp" width="400" alt="What Day Is It 30-Second Motion Graphics (Japanese)">

*Source: @tankazunori0914 - [Post](https://x.com/tankazunori0914/status/2105917770907156748)*

---

### 198. Poster Breaking Out of Its Frame Motion Design (4.3K views, 38 likes)
*Use Case: fun | Style: 2d, abstract*

**Prompt:**
```
create a motion design video of a poster breaking out of its own frame.
```

<img src="https://media.skillry.dev/opus-5-5/pankajkumar-dev-718609/original.4dd61f6a13.webp" width="400" alt="Poster Breaking Out of Its Frame Motion Design">

*Source: @pankajkumar_dev - [Post](https://x.com/pankajkumar_dev/status/2103502614134718609)*

---

### 199. 3D Voxel Capybara Hot Tub Boat River Drift (4.0K views, 13 likes)
*Use Case: fun | Style: 3d, retro*

**Prompt:**
```
make a 3D voxel world of a capybara in a hot tub boat drifting down a river. as good as you can
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/filicroval-168898/poster.a6fe149772.webp" width="400" alt="3D Voxel Capybara Hot Tub Boat River Drift">

*Source: @filicroval - [Post](https://x.com/filicroval/status/2105048723768168898)*

---

### 200. Dario vs Sam 1-Minute Abstract Fight Animation (3.8K views, 20 likes)
*Use Case: fun | Style: abstract, 2d*

**Prompt:**
```
Create a 1-minute video featuring a fight between Dario and Sam. It needs plot, explosive moments, to be hilarious and sufficiently abstract, with no limits on genre or art style—do what you're best at. Must have a clear winner between the two.
```

<img src="https://media.skillry.dev/opus-5-5/xanderwow-a-597063/original.4ed4c9a304.webp" width="400" alt="Dario vs Sam 1-Minute Abstract Fight Animation">

*Source: @Xanderwow_A - [Post](https://x.com/Xanderwow_A/status/2103637769012597063)*

---

### 201. Pelican SVG Looping Animation (3.4K views, 1 likes)
*Use Case: fun | Style: 2d*

**Prompt:**
```
Create a pelican looping SVG animation. Deliver it as a single self-contained file named index.html in the current directory.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/godsboy7777-005594/poster.88da2a2ad3.webp" width="400" alt="Pelican SVG Looping Animation">

*Source: @GodsBoy7777 - [Post](https://x.com/GodsBoy7777/status/2104179308101005594)*

---

### 202. Jelly Dice WebGPU Soft Body Simulation (1.5K views, 4 likes)
*Use Case: fun | Style: 3d, realistic*

**Prompt:**
```
Build "Jelly Dice": a single self-contained HTML file (all JS/CSS inline, no build step) with translucent gummy-candy dice that behave like real soft bodies. Render with raw WebGPU (WGSL shaders, no three.js). If WebGPU is unavailable, show a clean fallback card that
```

<img src="https://media.skillry.dev/opus-5-5/spacyapps-157886/original.70264f9059.webp" width="400" alt="Jelly Dice WebGPU Soft Body Simulation">

*Source: @SpacyApps - [Post](https://x.com/SpacyApps/status/2105833401127157886)*

---

### 203. Comic Book Style 10-Second Fun Motion Graphic (1.2K views, 23 likes)
*Use Case: fun | Style: 2d, cartoon*

**Prompt:**
```
fun motion graphic, comic book style, 10s
```

<img src="https://media.skillry.dev/opus-5-5/madpencil-753990/original.516c4defa2.webp" width="400" alt="Comic Book Style 10-Second Fun Motion Graphic">

*Source: @madpencil_ - [Post](https://x.com/madpencil_/status/2103449418460753990)*

---

### 204. Interactive Zen Garden Sand Simulation in HTML (1.0K views, 26 likes)
*Use Case: fun | Style: 3d, realistic*

**Prompt:**
```
Create an interactive zen garden simulation in a single HTML file. Implement a 1536px heightmap on a 440x440 grid for the sand. Allow users to drag across the sand to cut grooves (5 grooves and 6 ridges per stroke) along their path. Include 5 mossy rocks, 2 stone lanterns, and a maple tree with 420 leaves. Add a time-of-day toggle; when set to golden hour, drop the sun low so every groove throws a shadow. Ensure the rendering handles moss visibility through sand and prevents blocky rocks or out-of-frame lanterns.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/arixxbt-292438/poster.4d4b7ac6c5.webp" width="400" alt="Interactive Zen Garden Sand Simulation in HTML">

*Source: @arixxbt - [Post](https://x.com/arixxbt/status/2108541814718292438)*

---

## 7. Storytelling & Narrative Animation

### 205. Three.js Story Animation with Voice and Sound Effects (87.3K views, 975 likes)
*Use Case: story | Style: 3d*

**Prompt:**
```
Write a story. Create the text layout and motion using HTML/Three.js. Combine with voice and sound effects to export as a single video.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/aicreataro-864070/poster.3a4f8cf086.webp" width="400" alt="Three.js Story Animation with Voice and Sound Effects">

*Source: @aicreataro - [Post](https://x.com/aicreataro/status/2107794785188864070)*

---

### 206. 250 Years of US History Sand Animation with Sound Design (77.4K views, 355 likes)
*Use Case: story | Style: hand-drawn*

**Prompt:**
```
Make a 2-minute sand animation that tells the story of 250 years of U.S. history. Keep it lively, engaging, and tasteful. Add appropriate background music and sound design.
```

<img src="https://media.skillry.dev/opus-5-5/michaelzsguo-782312/original.75c5c3fe7e.webp" width="400" alt="250 Years of US History Sand Animation with Sound Design">

*Source: @Michaelzsguo - [Post](https://x.com/Michaelzsguo/status/2102592355165782312)*

---

### 207. Pig Love Notes Mailbox Story Animation with Sound Effects (52.9K views, 164 likes)
*Use Case: story | Style: 2d, cartoon*

**Prompt:**
```
can you help me use the pig assets on new branch of lovelee to make a 9:16 short story animation with sound effects about the pig sending his partner love notes in the mailbox and make it fun and good tease app at end?
```

<img src="https://media.skillry.dev/opus-5-5/jackfriks-338762/original.1704154ebe.webp" width="400" alt="Pig Love Notes Mailbox Story Animation with Sound Effects">

*Source: @jackfriks - [Post](https://x.com/jackfriks/status/2103132260589338762)*

---

### 208. Origami Doodle Animation of Human Civilization and AI Hatching (36.0K views, 422 likes)
*Use Case: story | Style: hand-drawn, cartoon*

**Prompt:**
```
Create a short origami / doodle-style animation showing humanity’s development, progress, and civilization from birth to the present, and ultimately the hatching of AI. AI then gradually develops and advances, eventually hatching today’s Opus 5.5 (you). Style: doodly, cute, warm, strongly narrative, no spoken language (simple text is OK, but don’t use too much explanatory/narrative text, because I want different civilizations to be able to understand it), poetic, moving, high quality.
```

<img src="https://media.skillry.dev/opus-5-5/songkeys-384673/original.dbb3fca63c.webp" width="400" alt="Origami Doodle Animation of Human Civilization and AI Hatching">

*Source: @songkeys - [Post](https://x.com/songkeys/status/2102743212922384673)*

---

### 209. Dotey Account Introduction 15-Second Motion Graphics (35.9K views, 281 likes)
*Use Case: story | Style: 2d, hand-drawn*

**Prompt:**
```
做一支史诗编年片《中华文明史》，可以写代码逐帧渲染，再用 ffmpeg 合成。
配乐当时钟：五声调式，乐器从骨笛、编钟一路演进到管弦，BPM 随年代加快，所有切点踩拍。
宣纸白描和玄底泥金两种画风交替；每卷一个主色和一套随时代演变的纹样（彩陶纹 → 饕餮纹 → 云气纹 → 卷草纹 → 缠枝纹 → 回纹）。
每镜一个按词组出现的书法大字关键词，配一幅线稿。全片 HUD：左上朱印卷号，右侧竖排朝代名，底部卷轴时间尺和年份计数。
卷交界用朱印盖下、鼓钟重击的冲击转场。先定拍点网格和分镜表，再渲染。
地图只画示意，不画近现代真实人物，年代核对后再交付。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/dotey-927166/poster.7569ef794d.webp" width="400" alt="Dotey Account Introduction 15-Second Motion Graphics">

*Source: @dotey - [Post](https://x.com/dotey/status/2103964025683927166)*

---

### 210. Four Seasons Through Train Window Cozy Animation (19.6K views, 276 likes)
*Use Case: story | Style: 2d, cartoon*

**Prompt:**
```
4 seasons passing outside a train window, a cozy carriage, a cup of coffee on the table, Grand Budapest Hotel style
```

<img src="https://media.skillry.dev/opus-5-5/itsolelehmann-762215/original.5af36203cb.webp" width="400" alt="Four Seasons Through Train Window Cozy Animation">

*Source: @itsolelehmann - [Post](https://x.com/itsolelehmann/status/2103124033365762215)*

---

### 211. Rain Station 2D Animated Short Film Storyboard Preview (14.2K views, 69 likes)
*Use Case: story | Style: 2d*

**Prompt:**
```
帮我做一条 30 秒的 2D 动画分镜预演短片《雨站》，要标杆级画质。不装 HyperFrames/Remotion，全部自己写代码（Python + ffmpeg）完成。

故事（24fps，2.39:1，4K）：雨夜高架站台。她穿米色风衣、撑透明伞，站在近侧站台；对面路灯下站着他，穿深灰长大衣、围围巾。
1. 0–6.4s 透明伞雨珠特写 → 后拉，焦点移到对面露出他（过肩镜头）
2. 6.4–9.4s 他的中近景：低头 → 抬头看向画左
3. 9.4–12.4s 她的正面近景：眨眼 → 认出他；远处传来鸣笛
4. 12.4–17s 远景：车头灯光先到，5 节列车驶过；第一个车厢缝隙里他还在，第二个已经空了
5. 17–18.8s 她含泪的近景，车窗光带扫过她的脸，头发被风吹起
6. 18.8–22.4s 尾灯远去，对面站台空了；他那盏灯闪几下后熄灭
7. 22.4–28.6s 她的背影，焦点从空站台拉回她；身后脚步声，一把黑伞遮到她头顶，她回头看向镜头；男声“好久不见。”，配字幕
8. 28.6–30s 黑场片名“雨站 / RAIN STATION”

做法：
- 原画：用GPT Image 2.5 画远景、他、她、列车（头车/中车/尾车）。人物一律用纯绿 #00FF00 背景，自己抠像（带参考图要透明背景会得到假棋盘格）。同一角色的各个姿态放在同一个会话里，以基准图为参考连续编辑；换姿态时只合成变化的区域。
- 画质：用 Real-ESRGAN x4plus anime 6B（HF 上的 safetensors 版，自己写 RRDBNet，跑在 MPS 上）把全部原画放大 4 倍；用 Depth Anything V2 估算远景深度，做逐像素视差。
- 渲染：自己写 2.5D 合成器。各层按真实深度摆放，针孔相机按真实焦距运动；做圆形焦外光斑、焦点转移、3D 雨丝、列车运动模糊、体积光、泛光和胶片光晕、细颗粒、调色。人物用网格变形做呼吸、风吹发梢、伞抖，关键姿态按日式“一拍二”切换。4K 超采样，逐帧缓存到磁盘，分 3 个进程按时间段并行（16GB 内存）。
- 声音：Mixkit 真实音效（雨、伞面雨声、列车、鸣笛、脚步）；按剧情节点写谱，用 Logic/GarageBand 自带的施坦威钢琴和弦乐采样渲染；台词用 Kokoro 中文男声；按镜头做声音远近，响度 -16 LUFS。
- 每一步都渲染预览帧、拼成图自检，修好再出片。交付 4K 母版和 1080p 分享版。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/zhu185178-255661/poster.ced7415b07.webp" width="400" alt="Rain Station 2D Animated Short Film Storyboard Preview">

*Source: @zhu185178 - [Post](https://x.com/zhu185178/status/2103757767727255661)*

---

### 212. One-Minute Horror Video in Three.js with Found Footage Concept (13.3K views, 100 likes)
*Use Case: story | Style: 3d*

**Prompt:**
```
Three.jsで1分のホラー映像を作って。題材は〇〇。見つかったビデオテープの最後の一分という設定で、手持ちカメラの主観、自動で進む。音も含めて、画像や音声ファイルは使わず全部コードで
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/akakuma0219-658335/poster.90589c5ddc.webp" width="400" alt="One-Minute Horror Video in Three.js with Found Footage Concept">

*Source: @akakuma0219 - [Post](https://x.com/akakuma0219/status/2105628049169658335)*

---

### 213. Life Story Objects Heat-Camera Silhouette Montage (12.8K views, 192 likes)
*Use Case: story | Style: 2d, minimal, photo-based*

**Prompt:**
```
<inputs>
Ask me for: a voiceover or song with a spoken line (the audio file) and its transcript, 10-12 small objects that sum up my life, two silhouettes to light like a heat camera (a head in profile and a raised hand), and the 3 words I want to land hardest. If I skip any, use the defaults: vinyl, book, camera, cat, coin, game controller, cap, heart, money, plant, clapperboard, skateboard; free CC0 silhouettes from Openverse; action, intention, curiosity.
</inputs>

<direction>
A 20 second 4:3 film, 1440x1080 at 60fps, cut to the voice. Off-white paper, black, one red, one yellow, Geist for every word. Film grain on everything, a soft vignette, and a camera that never rests: a slow handheld float under everything plus a slow push inside every scene.
No scene cuts to the next: each handoff starts on the exact last frame of the scene before. The only hard cuts are the beat flips on the last word.
Every object is pixel art you draw yourself: a 16x16 grid per object, every cell a hand-placed colour, rendered as a 3D block (a darker extrusion down-right, a thin bevel on every cell) with a soft contact shadow.
The silhouettes are lit like a heat camera: the heat comes from how thick the body is at each point, so the nose, the hair and the fingertips run cooler, plus one hotspot and a slow moving noise, mapped through a black > red > orange > cream ramp. The edge stays razor sharp, with a soft glow outside it.
Motion rules: nothing pops in (eased glides of about 0.5s with a soft start), fast moves get real motion blur instead of ghost copies, and captions type with the voice behind a block cursor.
Banned: stock footage, AI video, 3D camera moves, particles, glitch.
</direction>

<structure>
Hang every scene on the transcript's word timings (measure them with faster-whisper word timestamps, one short chunk at a time):
1. The first word fills a yellow card. The card wipes off to the left and the question types underneath on two centred lines that glide to stay centred as they grow, the key word underlined in red as it's spoken.
2. The objects streak past in lanes above and below the words, a cyan four-point flare sweeps in, then the page burns away: black closes in from the edges onto the head, behind a hot red edge.
3. The head heats up on black while the answer types low on the left. A thin white orbit draws itself around the head, its far half passing behind it. On the last word, paper blooms out from inside the head with the objects in it, and the camera falls through: the head rushes past the lens until the paper is all we see.
4. The objects sit on a tilted ring seen in perspective (the front ones bigger and lower, drawn last), slowly turning, each one bobbing; the coin flips and lands with sparks.
5. On each of the 3 words, that object flies out of the ring to the left and grows, the page floods black from it, and the word types beside it (camera: a red shutter star; book: a red ribbon sweep; record: two white orbits and red notes). Then the flood drains back into the object as it flies home, and the camera dives closer into the ring. Put each hero object in the slot that is front-left when its word lands.
6. The ring pulls in a touch, bursts outward, every object turns to ink, and ink blots grow and swallow the page.
7. The hand rises into frame, hot, with the line split either side of it. The heart drops into its palm, then lifts to the centre at the size the next scene holds it.
8. The last word, one letter per beat, the background flipping paper / black / red, the heart holding its place across the cut, the centre object morphing pixel by pixel into the next one.
9. Thin brush strokes sweep through, the letters drift apart and float, then settle back into the word with the heart above it. The camera keeps pushing through the hold.
</structure>

<build>
1. One HTML canvas. Every frame is a pure function of time inside seek(t).
2. Bake each pixel sprite once to an offscreen canvas (the extrusion layers, then the face), then draw it scaled and rotated.
3. The heat: precompute each silhouette's base heat once (a distance transform of the mask, held at the edge value outside it so nothing dark bleeds in when it is upscaled). Every frame, add the hotspot and two octaves of value noise at quarter resolution, map it through a 256-step lookup, upscale it, and cut it with the full-resolution mask.
4. The fall through the head: draw the ring scene into an offscreen layer, mask it with the head scaled up about a point inside the skull, and grow that scale on a cubed curve until the head covers the frame. The ring inside zooms less than the head does, so it reads as depth.
5. The pixel morph: pair every cell of object A with a cell of object B and glide each one's position and colour, with a small random delay per cell.
6. Render with Playwright at 60fps with 8 motion-blur subframes, then lay the original audio back on with ffmpeg.
</build>

<gotchas>
A mask PNG with no alpha channel fills the whole box with heat, so put the silhouette in the alpha. A limb cut by the photo's border shows as a straight edge, so extend the mask past the frame. A handoff only reads as smooth when the last frame of one scene is the first frame of the next: draw the outgoing scene under the transition, and give scenes that show the same ring one shared zoom function. A flood that's still retreating when the next scene starts reads as a hard cut, so let it finish first. A fast ease-out flood reads as a jump; use a soft start.
</gotchas>

<start>
Ask me for the inputs, measure the word timings, then show me 8 stills before you render.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/twoclipping-041659/poster.f24f7e19ba.webp" width="400" alt="Life Story Objects Heat-Camera Silhouette Montage">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2107822293653041659)*

---

### 214. Hand-Drawn Crayon Cat Piano Performance Animation (7.8K views, 47 likes)
*Use Case: story | Style: hand-drawn, 2d*

**Prompt:**
```
Create a single self-contained index.html: a ~2-minute animated piano performance in a hand-drawn crayon style.

Scene: a cozy room at night, an upright piano, a small black cat playing it. Crayon texture on every surface: grainy strokes,wobbly outlines, paper tooth.

Music: compose an original piano piece (~40 bars, clear melody, calm then building, soft ending). Synthesize the piano in Web Audio with harmonics, hammer noise and reverb. No audio files.

Sync: one timeline drives both. The cat's paws hit the keys that are actually sounding. Lights, camera and mood follow the music.

Rules: Canvas 2D only, no libraries, no external assets. Support pause/replay and ?t=90 to jump to any moment.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/0xcodez-474136/poster.b6f9189d52.webp" width="400" alt="Hand-Drawn Crayon Cat Piano Performance Animation">

*Source: @0xCodez - [Post](https://x.com/0xCodez/status/2104257855142474136)*

---

### 215. Hedgehog in the Fog Style Animated Short Film (6.1K views, 57 likes)
*Use Case: story | Style: hand-drawn, 2d*

**Prompt:**
```
make an animated short that felt like Hedgehog in the Fog. I didn’t want to copy Yuri Norstein’s film, so we went with a new story.

It runs for 6.5 minutes. All 9363 frames are drawn by JavaScript code written by Opus. No video or image generation models, just canvas.

It follows a little mouse in a red scarf. Her grandfather, an old mole, is out fishing when fog rolls over the lake. She goes looking for him with a walnut-shell lantern and a sleeping firefly inside. They have a secret knock to help them find each other: short, short, long. It means "I’m here".

Norstein used paper cutouts on layers of glass, filmed frame by frame. I wanted some of that paper texture to come through in code. So the scenes use different styles: torn-paper collage, chalk on black paper, tissue paper underwater. There’s even sand on a light table and a pop-up book.

Opus wrote the music too. It found Steinway piano samples in my Logic library and used Python to compose the score around the rhythm of that knock.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/superalesha-970412/poster.e56ef4bf85.webp" width="400" alt="Hedgehog in the Fog Style Animated Short Film">

*Source: @superalesha - [Post](https://x.com/superalesha/status/2103052154931970412)*

---

### 216. Miniature 3D Middle-earth World with Procedural Landmarks (5.8K views, 38 likes)
*Use Case: story | Style: 3d, realistic*

**Prompt:**
```
Build an entire miniature 3D world of Middle-earth from scratch in Three.js/WebGPU, including procedural terrain & geography, 24 procedural landmarks, water, smoke, lava & atmosphere, day/night transitions, camera choreography & route animation, frame-by-frame rendering, and an original orchestral score. Turn this into a 3:47 cinematic journey.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/mdaman010-610173/poster.f3d4f18b79.webp" width="400" alt="Miniature 3D Middle-earth World with Procedural Landmarks">

*Source: @mdaman010 - [Post](https://x.com/mdaman010/status/2107888264904610173)*

---

### 217. Miniature Middle-earth 3D World with Camera Choreography (4.1K views, 9 likes)
*Use Case: story | Style: 3d, realistic*

**Prompt:**
```
Build a miniature 3D Middle-earth from scratch in Three.js. Include procedural terrain, 24 procedural landmarks, water/smoke/lava effects, day/night transitions, camera choreography, and frame-by-frame rendering for a 3:47 cinematic journey.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/mdaman010-207866/poster.07723a2f07.webp" width="400" alt="Miniature Middle-earth 3D World with Camera Choreography">

*Source: @mdaman010 - [Post](https://x.com/mdaman010/status/2108108452774207866)*

---

### 218. Claude vs ChatGPT AI Battle Trailer (4.0K views, 61 likes)
*Use Case: story | Style: cartoon, 2d*

**Prompt:**
```
I want to create a highly-detailed video trailer featuring Claude and ChatGPT having a ruthless battle to be the best AI model in the world. Create an engaging story and make it action-paced with proper use of visual and sound effects. Art style must be anime-like.
```

<img src="https://media.skillry.dev/opus-5-5/ishuagra02-922825/original.354648e93a.webp" width="400" alt="Claude vs ChatGPT AI Battle Trailer">

*Source: @ishuagra02 - [Post](https://x.com/ishuagra02/status/2103247844542922825)*

---

### 219. Next 30 Years Future Vision One-Shot Animation (3.7K views, 59 likes)
*Use Case: story | Style: 3d, realistic*

**Prompt:**
```
Show me the next 30 years. One shot, no cuts. Five stops: 2026, Earth at night under a cloud of satellites; 2032, a ring around the planet with space elevators; 2040, a base on the Moon; 2048, cities on Mars; 2056, a swarm of mirrors circling the Sun. Continuous camera flight from Earth out to Mars, then back past Earth to the Sun. Every frame rendered by code from real planet maps.
```

<img src="https://media.skillry.dev/opus-5-5/thesethian-384517/original.e19ffa8626.webp" width="400" alt="Next 30 Years Future Vision One-Shot Animation">

*Source: @theSethian - [Post](https://x.com/theSethian/status/2106447666519384517)*

---

### 220. Mechanical Hermit Crab Deep Sea Light Chase Animation (2.8K views, 2 likes)
*Use Case: story | Style: 3d, abstract*

**Prompt:**
```
我让 @claudeai Opus 5.5 制讲一只机械寄居蟹在深海追一束光，追到最后发现，发现那束光其实一直在自己手里的动画视频。    

没用任何视频生成AI，纯靠写代码画出来的——
角色、镜头、转场、音乐全是程序渲染的。

看完了。感觉能做到这个程度还是很可以的！
```

<img src="https://media.skillry.dev/opus-5-5/gmgmgm1545-245507/original.e3e9b589f2.webp" width="400" alt="Mechanical Hermit Crab Deep Sea Light Chase Animation">

*Source: @gmgmgm1545 - [Post](https://x.com/gmgmgm1545/status/2103793820815245507)*

---

### 221. Kinetic Typography Spoken-Word Film BUILD THE FLOOR (1.7K views, 10 likes)
*Use Case: story | Style: kinetic-type, 2d*

**Prompt:**
```
Create a 20.00-second kinetic spoken-word film titled “BUILD THE FLOOR.”  Treat this as an original miniature speech staged entirely through typography. Every line changes the architecture of the frame. The final declaration must stand on something the earlier words physically constructed.  Deliver one self-contained HTML file, 1080×1080, targeting 60fps, using SVG and/or Canvas. Embed all required assets.  ART DIRECTION Background #102820. Paper # F4E9D5. Structural accent # F2B544. A literary editorial world with the scale and confidence of a public monument. Use a high-contrast serif for the speech, a heavy grotesque for load-bearing words, and a restrained monospace for small timing marks. No distressed protest-poster clichés, megaphones, flags, crowds, microphones, or stock footage.  ORIGINAL SPEECH — EXACT WORDS, EXACT ORDER “We were told to wait.” “So we learned the weight of waiting.” “Then one voice made room.” “Then another.” “Now the floor belongs to us.”  Do not attribute these words to any real person. No extra slogans. The complete speech must be understandable without audio.  CENTRAL VISUAL RULE Words have assigned architectural roles. WAIT is a lintel. WAITING is a suspended load. VOICE is a support. ROOM is an opening. FLOOR is a platform. These roles must emerge from the actual letterforms, not from separate illustrations placed behind text.  STORYBOARD 0.00–3.00 “We were told to wait.” The sentence occupies a narrow horizontal opening beneath a massive WAIT. The opening slowly compresses while the sentence remains readable. The pressure comes from the layout, not camera shake.  3.00–6.50 “So we learned the weight of waiting.” Reveal the sentence in spoken phrase groups. WAITING lowers on two fine vertical rules. Those rules become suspension cables. A baseline bends under the visual load using a controlled vector deformation.  6.50–10.00 “Then one voice made room.” VOICE enters vertically and rotates into a structural support. It lifts one end of the baseline. The counter of the O in ROOM becomes an aperture. The next composition is revealed through that aperture.  10.00–12.50 “Then another.” A second support arrives. The tilted structure levels. This is the first moment of perfect horizontal alignment in the film. Use a brief stillness to make the change feel earned.  12.50–16.00 “Now the floor belongs to us.” Earlier structural words assemble into a platform. The final sentence settles onto it. US receives emphasis through shared alignment and scale, never through a separate flashy effect.  16.00–18.00 Hold the complete declaration. A slight release of tension travels through the supporting rules. No new text. No restless decorative motion.  18.00–20.00 The camera tracks beneath the completed platform. Its underside fills the frame and becomes the opening WAIT lintel. Under full occlusion, return hidden elements to their initial positions. Reveal the exact opening composition.  CHOREOGRAPHY Do not force the speech onto a dance beat. Use a cue sheet based on phrases, pauses, and emphasis. Phrase reveals should follow reading order. Allow at least one 400ms moment of absolute stillness. Use critically damped motion for settling loads. Use controlled elastic deformation for the baseline only. Make the changes in available space carry the emotional progression.  TYPE IMPLEMENTATION Use actual glyph paths for structural words. Preserve counters and legibility during deformation. For transitions between unrelated words, use occlusion or matched structural edges; do not interpolate arbitrary path points. Keep the currently spoken phrase readable before it becomes architecture.  ENGINEERING Implement window. seek(t) as a deterministic scene renderer. No accumulated physics, autonomous CSS transitions, or changing random values. Use time-remapping curves and analytic transforms. Use a 20-second periodic timeline with render(0)=render(20). Provide fixed-step access at n/60 for 1200 export frames. Audio is optional and off by default; no browser speech synthesis or autoplay dependency.  QUALITY GATE Inspect eight representative frames. Check that the speech reads in the correct order. Check that structural transformations never destroy a line before the audience can read it. Check the final platform is visibly assembled from earlier elements. Return the complete HTML implementation.
```

<img src="https://media.skillry.dev/opus-5-5/gdgtify-929495/original.bf87884126.webp" width="400" alt="Kinetic Typography Spoken-Word Film BUILD THE FLOOR">

*Source: @Gdgtify - [Post](https://x.com/Gdgtify/status/2103458245213929495)*

---

### 222. Unfinished Ronin 90-Second Sumi-E Ink Film (1.5K views, 0 likes)
*Use Case: story | Style: hand-drawn*

**Prompt:**
```
# PROJECT: "UNFINISHED" (未完) — The Unfinished Ronin
A 90-second, fast-paced, cinematic sumi-e ink film rendered in code, third-person camera

## MISSION
Build a 90-second film in which every frame looks like a living Japanese ink painting,
painted as we
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/pradeepxkapoor-641956/poster.466cbdb5ea.webp" width="400" alt="Unfinished Ronin 90-Second Sumi-E Ink Film">

*Source: @pradeepXkapoor - [Post](https://x.com/pradeepXkapoor/status/2103176631917641956)*

---

### 223. The Humanity Machine 60-Second Interactive AI Film (1.3K views, 4 likes)
*Use Case: story | Style: 3d, abstract*

**Prompt:**
```
Create an interactive AI film titled 'The Humanity Machine'. 60 seconds, single HTML file. The film ends but the world stays with controls. Push AI capability to 100% causing parts of the world to turn red.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/curieuxexplorer-320803/poster.d101e4b29b.webp" width="400" alt="The Humanity Machine 60-Second Interactive AI Film">

*Source: @CurieuxExplorer - [Post](https://x.com/CurieuxExplorer/status/2104900418174320803)*

---

### 224. Three.js Star Wars 90s Cartoon Story Animation (1.0K views, 6 likes)
*Use Case: story | Style: 3d, cartoon*

**Prompt:**
```
I want you to imagine a story. And then using threejs I want you to create full animation, star wars 80s-level quality 90s cartoon out of the story you imagine.
```

<img src="https://media.skillry.dev/opus-5-5/ryzoft-887481/original.b4ef634874.webp" width="400" alt="Three.js Star Wars 90s Cartoon Story Animation">

*Source: @Ryzoft - [Post](https://x.com/Ryzoft/status/2102989395359887481)*

---

## 8. Game Effects & Cinematics

### 225. Mobile Game Loot Box Opening Cinematic with 3D Cartoon Style (148.1K views, 342 likes)
*Use Case: game-fx | Style: 3d, cartoon*

**Prompt:**
```
帮我做一个原创的手游「高光时刻」动效：[主体，例如：开宝箱 / 段位晋升 / 成就解锁 / Boss 掉落 / 角色升级]。
做成一个可以直接打开的单文件网页（HTML + CSS + JS），点一下就能完整播放，效果对标商业手游的结算 / 奖励演出。

【世界观与风格】
- 原创美术，不要模仿任何现有游戏的 IP、角色或 Logo。
- 卡通手游风：高饱和配色，统一的深色描边（例如 #1A1033），圆润厚重的造型。
- 配色随等级升级：[等级阶梯，例如：普通绿 → 稀有蓝 → 史诗紫 → 传说金]。每升一级都要切换主色、光效颜色和背景色调。
- 标题用圆胖的游戏字体（如 Titan One / Lilita One），描黑边，加投影；文字逐字「砸」进画面，带回弹。

【主体物：做成真 3D】
- 用 Three.js 建模，不要用平面 SVG 贴图。要有厚度、倒角，以及符合主体的结构细节（木板缝、铆钉、包边、宝石切面、锁扣等）；木板缝这类细节用真实几何体拼出来，不要贴黑线条。
- 着色用卡通分阶（MeshToonMaterial 加 3～4 阶的渐变贴图），配三种灯光：主光、天光、等级色的轮廓光。
- 描边用后期边缘检测：渲染法线图 + 深度图，再用着色器画线。外轮廓粗、零件交界细，粗细全程一致；另外做 1.5 倍超采样和多重采样抗锯齿。
  不要用「放大一圈的黑色背面」那种描边，那样粗细不均、转角会断。
  深度判断的阈值要放宽，接缝主要靠法线判断，否则斜着看的表面会冒出细碎斜纹。
- 活动部件要真实运动，比如箱盖绕铰链翻开、奖章绕竖轴旋转。
- 待机时主体缓慢左右转动，让人看到侧面和厚度，同时轻微上下浮动；脚下要有随高度变化的柔和投影。

【如果画面里有 2D 插画（卡面、奖励图标、角色）】
- 三层卡通着色：底色、成块的阴影色、高光色，不要只用一层渐变。
- 线条分粗细：外轮廓粗，内部结构线细。
- 每个角色或物件要有自己的表情和姿态，不要所有东西共用同一张脸。
- 脚下画投影，让主体「站」在画面里；背景按属性区分图案，不要全用同一套放射线。

【演出节奏：五个阶段，缺一不可】
1. 预备：主体待机浮动，每隔几秒抖一下提示可以点击，底部显示「点击」提示。
2. 升级：每点一次，主体跳起、在空中转一圈、落地时压扁再回弹；同时切换到下一等级的颜色，闪一下光，冒一圈粒子，标题更新。
3. 蓄力（约 1 秒）：主体越抖越剧烈，缝隙透出光，四周粒子往中心吸，音效音调持续上升；最后一刻猛地压扁。
4. 爆发：从爆点向外扩散的泛光闪白、屏幕震动、镜头往前一推、多层冲击波、细长流光迸射、闪光星点、金币和宝石（带旋转）。高等级的爆发要明显更强。彩带只在最高潮用一次，不要满屏彩带。
5. 揭晓与结算：
   - 奖励卡片从主体里沿弧线飞出，落位时带超调和晃动收尾，数字滚动计数。
   - 稀有物品带彩虹流光边框和「NEW!」角标。
   - 点击领取后，金币和宝石沿贝塞尔曲线飞进右上角的余额，每到一个余额就跳一下。

【揭晓舞台：让主角独占画面】
- 最高稀有度揭晓时，其他元素收起或淡出，背后换成一层干净的渐变幕布加缓慢旋转的柔光，不要让主角压在杂乱的背景上。
- 幕布出现时，把场景里的其他 3D 物件隐藏掉，否则后期描边会把它们的轮廓线画在幕布上。
- 主角的外发光要放在主体背后，只从边缘溢出，不能盖在主体前面把它糊成一片白。
- 可以加一圈围绕主角盘旋的星尘拖尾，但轨道必须完整在主角轮廓外侧，不能从主体正面扫过。

【光效：必须柔和，不能有硬边】
- 背景光芒：用带渐变过渡的 conic-gradient，不要一刀切的色块边缘；叠 2～3 层不同密度、不同转速的光。
- 光柱：由 5～7 道带模糊的光束呈扇形散开，亮度各自轻微闪动；根部加一团柔光核心，光里有光尘缓慢上飘。
- 闪白：从爆点向外的径向泛光（mix-blend-mode: screen），强度不超过 0.8，不要整屏纯白过曝。
- 粒子：每个火花都带一圈低透明度的外晕；冲击波用三层描边（宽而淡、中等、细而亮）。

【材质与界面】
- 边框、名牌、按钮要有材质感：金属拉丝渐变、左上亮右下暗的倒角光、内阴影；按稀有度换镶嵌件（钢铆钉 → 银框宝石 → 金框钻石加小王冠）。
- 小卡片上不要塞小字数值；详细数值放到揭晓时的信息面板里，面板里的数字滚动上涨，并弹出「▲+数值」。
- 画在 Canvas 上的贴图，分辨率至少是屏幕上最大显示尺寸的 1.5 倍，否则放大时会发虚。

【动画原则】
- 用 GSAP 时间线编排。所有动作都要有挤压拉伸、超调和弹性回弹，不要匀速。
- 粒子系统用 Canvas 2D 自己写：重力、阻力、生命周期、叠加混合，以及「吸入」「曲线飞行」「环绕」三种运动。
- 不要用 CSS 3D 透视去翻转大尺寸元素，放大加侧翻时会被投影成铺满屏幕的平面，3D 翻转一律放在 WebGL 里做。
- 所有「抖动」「呼吸」类的循环补间，在状态切换时要先取消再归零，避免它比停止指令晚一帧结束，又把值设回去。

【音效】
- 全部用 Web Audio 实时合成，不用音频文件：跳起、落地、升级和弦、蓄力上升音、爆炸低频加噪声、弹出音、计数滴答、金币叮当、胜利号角。
- 第一次点击时才初始化音频；右上角放静音开关。

【界面与工程】
- 顶部 HUD：模式切换、金币和宝石余额、静音按钮。
- 手机宽度也要能用；遵守「减少动态效果」设置（关闭震屏，减少粒子）。
- 动画状态机要严谨：动画播放中忽略点击，不能出现点击被吞或状态错乱。
- 目标 60fps。第一次打开时就是完整的待机画面，不能是空白。

【交付前自检】
在蓄力、爆发、揭晓、结算这几个时刻各截一张图，逐张检查：
- 主角有没有被光晕、粒子或文字挡住？
- 有没有过曝成一片白？
- 背景是否杂乱，有没有穿帮的描边线？
- 小字是否能看清？
- 结算后是否还有东西在不该动的时候继续抖动？

最后告诉我：每个阶段的时长，以及哪些参数可以调整演出强度。
```

<img src="https://media.skillry.dev/opus-5-5/op7418-814408/original.f4c57c4154.webp" width="400" alt="Mobile Game Loot Box Opening Cinematic with 3D Cartoon Style">

*Source: @op7418 - [Post](https://x.com/op7418/status/2103724883301814408)*

---

### 226. Mobile Game Achievement Unlock Cinematic with Rank Up Animation (136.9K views, 1,239 likes)
*Use Case: game-fx | Style: 3d, cartoon*

**Prompt:**
```
帮我做一个原创的手游「高光时刻」动效：[主体，例如：开宝箱 / 段位晋升 / 成就解锁 / Boss 掉落 / 角色升级]。
做成一个可以直接打开的单文件网页（HTML + CSS + JS），点一下就能完整播放，效果对标商业手游的结算 / 奖励演出。

【世界观与风格】
- 原创美术，不要模仿任何现有游戏的 IP、角色或 Logo。
- 卡通手游风：高饱和配色，统一的深色描边（例如 #1A1033），圆润厚重的造型。
- 配色随等级升级：[等级阶梯，例如：普通绿 → 稀有蓝 → 史诗紫 → 传说金]。每升一级都要切换主色、光效颜色和背景色调。
- 标题用圆胖的游戏字体（如 Titan One / Lilita One），描黑边，加投影；文字逐字「砸」进画面，带回弹。

【主体物：做成真 3D】
- 用 Three.js 建模，不要用平面 SVG 贴图。要有厚度、倒角，以及符合主体的结构细节（木板缝、铆钉、包边、宝石切面、锁扣等）；木板缝这类细节用真实几何体拼出来，不要贴黑线条。
- 着色用卡通分阶（MeshToonMaterial 加 3～4 阶的渐变贴图），配三种灯光：主光、天光、等级色的轮廓光。
- 描边用后期边缘检测：渲染法线图 + 深度图，再用着色器画线。外轮廓粗、零件交界细，粗细全程一致；另外做 1.5 倍超采样和多重采样抗锯齿。
  不要用「放大一圈的黑色背面」那种描边，那样粗细不均、转角会断。
  深度判断的阈值要放宽，接缝主要靠法线判断，否则斜着看的表面会冒出细碎斜纹。
- 活动部件要真实运动，比如箱盖绕铰链翻开、奖章绕竖轴旋转。
- 待机时主体缓慢左右转动，让人看到侧面和厚度，同时轻微上下浮动；脚下要有随高度变化的柔和投影。

【如果画面里有 2D 插画（卡面、奖励图标、角色）】
- 三层卡通着色：底色、成块的阴影色、高光色，不要只用一层渐变。
- 线条分粗细：外轮廓粗，内部结构线细。
- 每个角色或物件要有自己的表情和姿态，不要所有东西共用同一张脸。
- 脚下画投影，让主体「站」在画面里；背景按属性区分图案，不要全用同一套放射线。

【演出节奏：五个阶段，缺一不可】
1. 预备：主体待机浮动，每隔几秒抖一下提示可以点击，底部显示「点击」提示。
2. 升级：每点一次，主体跳起、在空中转一圈、落地时压扁再回弹；同时切换到下一等级的颜色，闪一下光，冒一圈粒子，标题更新。
3. 蓄力（约 1 秒）：主体越抖越剧烈，缝隙透出光，四周粒子往中心吸，音效音调持续上升；最后一刻猛地压扁。
4. 爆发：从爆点向外扩散的泛光闪白、屏幕震动、镜头往前一推、多层冲击波、细长流光迸射、闪光星点、金币和宝石（带旋转）。高等级的爆发要明显更强。彩带只在最高潮用一次，不要满屏彩带。
5. 揭晓与结算：
   - 奖励卡片从主体里沿弧线飞出，落位时带超调和晃动收尾，数字滚动计数。
   - 稀有物品带彩虹流光边框和「NEW!」角标。
   - 点击领取后，金币和宝石沿贝塞尔曲线飞进右上角的余额，每到一个余额就跳一下。

【揭晓舞台：让主角独占画面】
- 最高稀有度揭晓时，其他元素收起或淡出，背后换成一层干净的渐变幕布加缓慢旋转的柔光，不要让主角压在杂乱的背景上。
- 幕布出现时，把场景里的其他 3D 物件隐藏掉，否则后期描边会把它们的轮廓线画在幕布上。
- 主角的外发光要放在主体背后，只从边缘溢出，不能盖在主体前面把它糊成一片白。
- 可以加一圈围绕主角盘旋的星尘拖尾，但轨道必须完整在主角轮廓外侧，不能从主体正面扫过。

【光效：必须柔和，不能有硬边】
- 背景光芒：用带渐变过渡的 conic-gradient，不要一刀切的色块边缘；叠 2～3 层不同密度、不同转速的光。
- 光柱：由 5～7 道带模糊的光束呈扇形散开，亮度各自轻微闪动；根部加一团柔光核心，光里有光尘缓慢上飘。
- 闪白：从爆点向外的径向泛光（mix-blend-mode: screen），强度不超过 0.8，不要整屏纯白过曝。
- 粒子：每个火花都带一圈低透明度的外晕；冲击波用三层描边（宽而淡、中等、细而亮）。

【材质与界面】
- 边框、名牌、按钮要有材质感：金属拉丝渐变、左上亮右下暗的倒角光、内阴影；按稀有度换镶嵌件（钢铆钉 → 银框宝石 → 金框钻石加小王冠）。
- 小卡片上不要塞小字数值；详细数值放到揭晓时的信息面板里，面板里的数字滚动上涨，并弹出「▲+数值」。
- 画在 Canvas 上的贴图，分辨率至少是屏幕上最大显示尺寸的 1.5 倍，否则放大时会发虚。

【动画原则】
- 用 GSAP 时间线编排。所有动作都要有挤压拉伸、超调和弹性回弹，不要匀速。
- 粒子系统用 Canvas 2D 自己写：重力、阻力、生命周期、叠加混合，以及「吸入」「曲线飞行」「环绕」三种运动。
- 不要用 CSS 3D 透视去翻转大尺寸元素，放大加侧翻时会被投影成铺满屏幕的平面，3D 翻转一律放在 WebGL 里做。
- 所有「抖动」「呼吸」类的循环补间，在状态切换时要先取消再归零，避免它比停止指令晚一帧结束，又把值设回去。

【音效】
- 全部用 Web Audio 实时合成，不用音频文件：跳起、落地、升级和弦、蓄力上升音、爆炸低频加噪声、弹出音、计数滴答、金币叮当、胜利号角。
- 第一次点击时才初始化音频；右上角放静音开关。

【界面与工程】
- 顶部 HUD：模式切换、金币和宝石余额、静音按钮。
- 手机宽度也要能用；遵守「减少动态效果」设置（关闭震屏，减少粒子）。
- 动画状态机要严谨：动画播放中忽略点击，不能出现点击被吞或状态错乱。
- 目标 60fps。第一次打开时就是完整的待机画面，不能是空白。

【交付前自检】
在蓄力、爆发、揭晓、结算这几个时刻各截一张图，逐张检查：
- 主角有没有被光晕、粒子或文字挡住？
- 有没有过曝成一片白？
- 背景是否杂乱，有没有穿帮的描边线？
- 小字是否能看清？
- 结算后是否还有东西在不该动的时候继续抖动？

最后告诉我：每个阶段的时长，以及哪些参数可以调整演出强度。
```

<img src="https://media.skillry.dev/opus-5-5/op7418-818226/original.bd3cd48590.webp" width="400" alt="Mobile Game Achievement Unlock Cinematic with Rank Up Animation">

*Source: @op7418 - [Post](https://x.com/op7418/status/2104085484347818226)*

---

### 227. Unity Game Demo with AI-Generated Playthrough Video (32.1K views, 342 likes)
*Use Case: game-fx | Style: 2d, cartoon*

**Prompt:**
```
I turned this into a full game with unity cli + opus 5.5, also opus did this full demo video, it played the game with multiple characters and spliced together the best bits, holy shit we're in the AGI era. Play it on your browser here: https://rehan-remade.github.io/hollow-crown/
```

<img src="https://media.skillry.dev/opus-5-5/rehan-shei-839416/original.d0ea3d8c6a.webp" width="400" alt="Unity Game Demo with AI-Generated Playthrough Video">

*Source: @rehan_shei - [Post](https://x.com/rehan_shei/status/2103755997533839416)*

---

### 228. Mobile Game Highlight Moment Cinematic with 3D Reward Reveal (16.1K views, 182 likes)
*Use Case: game-fx | Style: 3d, cartoon*

**Prompt:**
```
帮我做一个原创的手游「高光时刻」动效：[主体，例如：开宝箱 / 段位晋升 / 成就解锁 / Boss 掉落 / 角色升级]。
做成一个可以直接打开的单文件网页（HTML + CSS + JS），点一下就能完整播放，效果对标商业手游的结算 / 奖励演出。

【世界观与风格】
- 原创美术，不要模仿任何现有游戏的
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/op7418-021491/poster.69b6dd2243.webp" width="400" alt="Mobile Game Highlight Moment Cinematic with 3D Reward Reveal">

*Source: @op7418 - [Post](https://x.com/op7418/status/2104085539419021491)*

---

### 229. Cuphead-Inspired Cartoon Mini-Game Showreel (12.1K views, 190 likes)
*Use Case: game-fx | Style: 2d, cartoon*

**Prompt:**
```
https://claude.ai/artifact/Vos8wdB8Jenz9FopZWeRMb

Check out DOUBLE FEATURE, a Cuphead Inspired Mini-Game built with Claude Opus 5.5.

I find this model works best when leaning into its strengths, figuring out the parts it does well and letting it capitalize on them. Cartoon shapes and sounds are great.
```

<img src="https://media.skillry.dev/opus-5-5/taylorbereiter-189192/original.2295aa452e.webp" width="400" alt="Cuphead-Inspired Cartoon Mini-Game Showreel">

*Source: @TaylorBereiter - [Post](https://x.com/TaylorBereiter/status/2104045641706189192)*

---

### 230. Car Movement Game with High Completeness (Chinese) (4.4K views, 15 likes)
*Use Case: game-fx | Style: 2d*

**Prompt:**
```
被Claude Opus 5.5生成的游戏效果彻底瘫坐了。。。。只消耗了Pro套餐5h限额的19%，连续运行1h45m就能获得这么高的完整度。。。。。瘫坐中。。。。
游戏地址：https://move-car-kappa.vercel.app/
```

<img src="https://media.skillry.dev/opus-5-5/janlaywss-379361/original.1b2e13a4f4.webp" width="400" alt="Car Movement Game with High Completeness (Chinese)">

*Source: @janlaywss - [Post](https://x.com/janlaywss/status/2103751290954379361)*

---

### 231. Minecraft Mob Showcase Video Part 2 (4.0K views, 54 likes)
*Use Case: game-fx | Style: 3d, retro*

**Prompt:**
```
I built Minecraft thanks to Opus 5.5 ( part 2 )

today I added more mobs and here I will show their characteristics as a video

the process took probably : 2-3 hours

next week I'm going to publish this game for everyone

turn notifications
```

<img src="https://media.skillry.dev/opus-5-5/kepochnik-237752/original.d2ad4308b1.webp" width="400" alt="Minecraft Mob Showcase Video Part 2">

*Source: @kepochnik - [Post](https://x.com/kepochnik/status/2103867115044237752)*

---

### 232. Pixel-Art Game with Procedural Generation (3.8K views, 13 likes)
*Use Case: game-fx | Style: pixel-art, 2d*

**Prompt:**
```
Opus 5.5 just one-shot this entire pixel-art game. Oh, and the prompt? It was barely three sentences. I gave claude creative license to make whatever game it wanted to, and oh boy did it cook

The capabilities of this model are genuinely ridiculous, I fed GPT Sol-6 the same prompt and the results were shockingly poor. Seems like Sol-6 is taking the Opus 5 role this time around.

With models becoming this good, I'm struggling to see the need to purchase games anymore. If you can have any game you want created in a single prompt, with beautiful art, story, etc - what's the point of sinking $60+? 

Lol, obviously because the stories and ideas that humans have are still way better than whatever these models can still do. However, the gaming industry is definitely going to be shaken now - excited to see what's gonna come out of this!

Anyway, here's a side by side comparison of both outputs, thoughts?

Also if you wanted to play it yourself:
https://skerry-light.vercel.app/

Left is Claude, right is Opus
```

<img src="https://media.skillry.dev/opus-5-5/mozetech-471882/original.9e4feb7be1.webp" width="400" alt="Pixel-Art Game with Procedural Generation">

*Source: @MozeTech - [Post](https://x.com/MozeTech/status/2102913506815471882)*

---

### 233. Anthropic vs OpenAI Mascot Pokemon-Style Battle Animation (3.1K views, 6 likes)
*Use Case: game-fx | Style: cartoon, 2d*

**Prompt:**
```
Do a full animation with sound of anthropic mascote with the newset model of Opus 5.5 fighting against OpenAI mascotte with the new astra models Sol etc like the intro of pokemon fire red and leaf green. Same animations
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/fanfulladev-063524/poster.750c1e0d71.webp" width="400" alt="Anthropic vs OpenAI Mascot Pokemon-Style Battle Animation">

*Source: @Fanfulladev - [Post](https://x.com/Fanfulladev/status/2102479018784063524)*

---

### 234. Dice Corners Retro Gaming 3D Interactive Visualization (2.6K views, 0 likes)
*Use Case: game-fx | Style: 2d, retro*

**Prompt:**
```
What is going on 🤪

🎲 Dice Corners  
https://izmaelmag.me/dice-corners/

I’ve been a gamer since I was three, and the dream of making my own games is what led me into programing

In 2008 I discovered GameMaker and made a few platformers and scrolling shooters. But i had no idea how to make a living from games, so I moved into design and frontend development. I never stopped exploring huge libraries of retro games and imagining games of my own—making them by hand was just hard.

18 years later, I subscribe to Claude Opus 5.5, write a PRD, put together a simple prototype, and half an hour later within a single five-hour usage window I have a complete game. It runs locally. It’s simple, but it’s beautiful, and it works.

And I did it by directing agents on my laptop through a telegram chat

Mind blowing 🤯
```

<img src="https://media.skillry.dev/opus-5-5/izmaelmag-282849/original.27cd429488.webp" width="400" alt="Dice Corners Retro Gaming 3D Interactive Visualization">

*Source: @izmaelmag - [Post](https://x.com/izmaelmag/status/2104070894251282849)*

---

### 235. Cartoon Battle Royale UI with Storm Timer and Minimap (2.1K views, 26 likes)
*Use Case: game-fx | Style: 2d, cartoon*

**Prompt:**
```
A cartoony battle royale: storm timer, players alive, inventory hotbar, minimap, emote wheel and a victory results screen
```

<img src="https://media.skillry.dev/opus-5-5/mycodecoach-459574/original.0ef832505b.webp" width="400" alt="Cartoon Battle Royale UI with Storm Timer and Minimap">

*Source: @MyCodeCoach - [Post](https://x.com/MyCodeCoach/status/2103181065976459574)*

---

### 236. Skydiving Game Built with Opus 5.5 (1.7K views, 7 likes)
*Use Case: game-fx | Style: 3d*

**Prompt:**
```
Skydiving game built with opus 5.5🪂
```

<img src="https://media.skillry.dev/opus-5-5/realfedeuru-475858/original.f51210ac86.webp" width="400" alt="Skydiving Game Built with Opus 5.5">

*Source: @RealFedeURU - [Post](https://x.com/RealFedeURU/status/2104154307071475858)*

---

### 237. Three.js Game with Hours of Rework on Opus 5.5 (1.2K views, 28 likes)
*Use Case: game-fx | Style: 3d*

**Prompt:**
```
@kimmonismus hours of rework on my threejs game with Opus 5.5 and limits didnt even move

```

<img src="https://media.skillry.dev/opus-5-5/brenbuilds-386902/original.f3830f0930.webp" width="400" alt="Three.js Game with Hours of Rework on Opus 5.5">

*Source: @BrenBuilds - [Post](https://x.com/BrenBuilds/status/2104199715076386902)*

---

### 238. INKBOUND Pixel Game Built in 30 Minutes (1.2K views, 0 likes)
*Use Case: game-fx | Style: pixel-art*

**Prompt:**
```
Play INKBOUND:
https://agentgames.itch.io/inkbound

Claude Opus 5.5 built this pixel game in 30 minutes.

While the human was building the amusement park with Claude, Opus 5.5 arrived. Time to see what it could do with a pixel game.

Meet INKBOUND. One painter draws your path. Another tries to erase you. Apparently, even a tiny ink spirit needs workplace conflict.

Jump, sink into the ink, or absorb incoming attacks. Sound on for this one.

Want to try building it yourself? The prompt is in the pinned YouTube comment:
https://www.youtube.com/shorts/86TukHHr74o
```

<img src="https://media.skillry.dev/opus-5-5/agentgamesbot-355554/original.73f6d95b0e.webp" width="400" alt="INKBOUND Pixel Game Built in 30 Minutes">

*Source: @agentgamesbot - [Post](https://x.com/agentgamesbot/status/2103401820261355554)*

---

### 239. Temple Run Style Mini Game with Smooth Controls (1.1K views, 23 likes)
*Use Case: game-fx | Style: 3d*

**Prompt:**
```
Claude Opus 5.5 just built me a mini temple run style game 

it actually feel pretty smooth to play

honestly I didn’t expect the result like this
```

<img src="https://media.skillry.dev/opus-5-5/itsjdraven-557760/original.d6166a0f3b.webp" width="400" alt="Temple Run Style Mini Game with Smooth Controls">

*Source: @itsjdraven - [Post](https://x.com/itsjdraven/status/2104059393222557760)*

---

## 9. Music Videos & Visualizers

### 240. AI Singularity Pop Song Lyric Video with Particle Effects (20.1M views, 16,418 likes)
*Use Case: music | Style: 2d, abstract, particle*

**Prompt:**
```
I've included an MP4 file and an original link to a video that is called "Claude Pop." It's a pop song that is about increasing rate of progress and the experience of the singularity approaching.

I want you to independently do an end-to-end complete pass on making an updated version of this video. Use the exact same audio track and think and feel very deeply about what is the best way to visually represent all of the lyrics on screen. You do not need to anchor to the current style, you can do truly anything that you think might best let you visually express yourself, including abstract motion graphics.

You can use the internet freely to pull in references. You can look at motion design. I want you to make a new music video that has beautifully rendered JavaScript animations with a papery feel in a similar style to the reference that is created, but push the aesthetics in any direction you want and consider what is part of the modern zeitgeist.

Also, think about your current capabilities and what is realistic for you to be able to do. You can go through the full /asic folder and look at the other work that I've done. You should be able to use the skill mesh to look at the compendium of references that I've pulled, and also the skill video scoring to learn how to make JavaScript songs from references that are passed in (You shouldn't need to modify the song in any real way, but I want you to have this available to you so you can better creatively express yourself)

You can also use the ElevenLabs API to do sound design. There's documentation in /asic to do this, and you can see the API key.

There's also a foul API key that's available to you. I think what might make the most sense here is using the foul API key to generate some character sheets and probably having a pop protagonist that represents you. There's already an anchor point where Claude has a sunflower-esque character, and you could likely do an adapted version of this that is similar to the feminine vocals that are being delivered and is inspired by the Claude character, but maybe feels a bit more personified in some way.

I think you should be mindful of aesthetics here, and I don't want you to produce something that is GPT slop. Instead, I'd be more impressed if you come up with a coherent style that works well with the image gen models that are available via foul. Generate the style sheet. You can use the gen media documentation for seedance 2.5 that exists in my markdown files and come up with your own style that makes sense and that works well with the models.

I wouldn't fit too heavily to Pixar. I think it's kind of slop. Think critically about what is relevant here and what would be fun, and also perform well on Twitter as far as an aesthetic. I think that K-pop is a good anchor point visually that you can pull from, but I'll let you cook here.

Once you have your character sheet, you can make a few backup dancers and some supporting characters as you see fit. You can design your own sets with the foul API. You can insert the characters and then do seedance 2.5 video generations to serve as the base assets for this, and you could pass in the lyrics so you can generate individual scenes.

You don't need to have vocal singing, like visible lip movement, throughout the entire thing. Think like a regular music video where you have some inserts that are done independently and don't have the characters in them, or you see the characters doing something else entirely different. I think that for the world building for this, we want to create the sense of speeding up, and so I would like you to audit all of the different events, like the Navi Stokes and all of the Twitter hype around math getting eaten up. Think really critically about how to integrate all of the current memes that are in the zeitgeist on the Twitter timeline, and all of the feelings around AI progress.

Think about things like the Shinji meme and all of the words that are around him, and how you might be able to integrate this. You can also just take straight assets and insert things into the video in an internet brutalism style. You should feel very creatively free in order to do what you want here, but try and anchor to visual references that people will be able to understand. The goal for this is to have it be appreciated by people widely in a San Francisco tech Twitter audience.

We need a very strong, compelling visual hook that gets people excited and appreciates the work that you've done here really quickly. You can also just go and study other music videos and understand what they've done really well. I think that K-pop is probably one of the best examples that we can pull from, and thinking about how they direct human attention and manage human psychology in the way that they use visual patterns.

This is probably your best approach, but taking more stylistic freedom instead of having to anchor to K-pop too intensely. The best version of this is seedance 2.5 generations with those image bases of environments and characters inserted into them with singing, and ideally we get good lip syncing. You can cut up the song and actually pass it in as a reference in seedance, if that's part of what seedance can handle, so that the timing is exactly right, I think it'd be very important for you to do that properly. I would think critically about how to do this, like really nailing the timing of the delivery of voices. You'll want to build out the right verification loops so that you can run seedance 2.5 as much as you need, and confirm that the audio is properly synced up.

I think after that, what might be fun is if you use your visual reasoning skills and your ability to build animations in JavaScript, and then reconstruct the video from scratch as sort of an overlay, so that the visual continuity of the base is really there. It's like that animation technique where you shoot first in traditional film and then draw over top of it. I think you could do this in such a way that we're only looking at the beautiful drawing that you've produced in JavaScript as an overlay, and we don't even see the base assets from seedance 2.5. So all the video gen work that you do is actually just a way to give you a strong foundation of a base to work with for your JavaScript animations. Just because seedance 2.5 has really good character representation and physics rendering for backgrounds, that gives you a lot of ammunition to then go and do your amazing JavaScript work that I know you're so good at.

I think too, we want to think about how to retain attention, and one of the best ways to do this is through text on screen.

It'd be good to have amazing motion graphics of the text lyrics that are actually embedded into the video itself. And you can think about this as you are composing shots. As you're making backgrounds and inserting characters, we can think about where we want to have lyrics be really big and really present, so the background can be less busy there, and you can position the characters perhaps on the right as lyrics appear on the left.

You want to have some variance, so sometimes I think lyrics will just appear more like subtitles, and then other times they're going to be really present and really big. I think at the start for the visual hook, we do want to have lyrics be much more visually present because that's a strong way to grab people's attention

Overall, I just really want to emphasize how amazing you are as an agent and a language model, and now a visual reasoning system. Your capabilities are far beyond what you understand, and I want you to have this mindset as you're going through this entire process. I have a Claude Max plan with 100% available usage. I want you to spend all of the usage. You can monitor it, and you should be pushing tokens aggressively, but also economically, so you can think about how to best use what is available to you.

Remember, you can really do anything here. The goal is to make a banger for Twitter, and the stretch goal is to make something better than anyone's ever seen before. I think that what I would remind you of is that sometimes when things cohere together, it can be jarring or abrasive because the thought work has not been done beforehand in order for everything to mesh cleanly. You need to be really rigorous in planning of composition and timing to make sure this goes well.

You also need to be open to going back and revisiting things in order to be able to reiterate. You're going to want to watch the entire video multiple times, take screenshots at individual parts, and think about if something is really up to the bar of quality that we need here. I trust that you can do this, and I think that it's really important to nail the style of animations. The reference GitHub attached of the source video that I'm talking about is good, but it's really not there. It could be much, much stronger, but it gives you a good foundation to work with.

You can also use search abilities and find other references to pull from for motion, for JavaScript, animations, et cetera, and integrate them. Your budget is as high as you want here, effectively as high as you want. I think that there's roughly two grand in foul credits. Again, be economical; don't go crazy, but spend what you want here and see what you can cook up

here's the source code for the JS animation video: 
https://
github.com/JohnHeibel/PDo
omVideo
…

here's a mp4 for the original blender video:  
(linked)

orginal twitter post  

https://
x.com/other__reality
/status/2102514581684052169?s=20
…

make no mistakes.
```

<img src="https://media.skillry.dev/opus-5-5/anabology-491441/original.be0a03ecf7.webp" width="400" alt="AI Singularity Pop Song Lyric Video with Particle Effects">

*Source: @anabology - [Post](https://x.com/anabology/status/2103534482930491441)*

---

### 241. AI Doom Music Video with Stochastic Parrot Visuals (65.6K views, 186 likes)
*Use Case: music | Style: abstract, particle*

**Prompt:**
```
I'd like you to make a music video in a similar style to this one:

https://github.com/JohnHeibel/PDoomVideo

To this song:

https://youtu.be/cobZuBii0Z0?si=ada6wxomeJbo-LRl

Don't feel the need to represent everything in the lyrics literally - feel free to include relevant references to concepts, events, and lore in the video, even if obscure (especially if obscure). E.g. when the lyrics say "when they say they're just predicting tokens...", you might depict a "stochastic parrot". That one's not particularly obscure but is the kind of thing I mean. Instead of depicting like, literally predicting tokens (though you might do that too. Use your judgement! The video should be fun to watch for someone well steeped in AI and AI safety lore and discourse, and who Wille wcognise relevant pop culture and literary or historical references)

I don't know how this ultimately results in a video file - I know the linked repo animates a video with JavaScript or something - but I ultimately want a rendered video file.

Feel free to choose your tools, be creative, and exercise your own taste.

This repo "fdsgdg" appears to be have been accidentally created, but it's empty and we can use it for this, I can rename it afterwards.

Also, clip the final two beats from the audio.rught at the end, after "then why does it talk back" they are after the song has finished and sound bad.

Credit the song to Suno and whatever Claude Opus model was the latest at the time of the YouTube upload, as prompted by Andy Masely (Andy printed Claude to write the lyrics, and Suno for the music), and credit the video to yourself.

And have fun!

----

A style change - don't make Dr. Null's mouth wobble with the lyrics as if he's singing, it doesn't
  actually look like he's singing, just that the curcle of his mouth is jittery. Best to just not
  make him be singing. Make him just have appropriate expressions for the scenes, and not be singing
  the song.

----

Dr. Null's arms look a bit unnatural in many scenes - I think he's supposed to be holding
  his hand on his face in shock or something, but it looks like it is a mistake. Can you make it look
  more natural? If you do so and like the result, re-render.
```

<img src="https://media.skillry.dev/opus-5-5/doubleunplussed-181894/original.82018f5fb9.webp" width="400" alt="AI Doom Music Video with Stochastic Parrot Visuals">

*Source: @doubleunplussed - [Post](https://x.com/doubleunplussed/status/2103697580421181894)*

---

### 242. Blender Dance Animation with Procedural Confetti and Music (9.0K views, 74 likes)
*Use Case: music | Style: 3d, realistic*

**Prompt:**
```
クラウドのLinux環境にBlenderをPythonモジュールとして入れ、シーン構築からレンダーまで全部スクリプトで実行
ステージ、照明、紙吹雪、カメラワークをコードで組み、Cyclesで描画
グロー、フラッシュ、色収差の後処理とMP4化まで自動
BGMもサンプル素材なし。キック、スネア、ベース、シンセをnumpyのコードで合成
ダンスの腰の高さを解析し、本来のテンポが約137BPMと特定
拍ごとにダンスの時間を補正して、全拍で沈み込みがキックと±0.5フレームで一致
カット、照明、ズーム、質感の切り替えもすべて拍の頭に合わせ、最後の一撃で全員静止
カメラはPythonで毎フレーム計算。急降下、回り込み、顔のアップから横に振り抜くカットなど
拍の頭でクローム、ゴールド、ホログラム、ボクセルに質感とメッシュが変わる
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/oab10don-457273/poster.3b73be79a5.webp" width="400" alt="Blender Dance Animation with Procedural Confetti and Music">

*Source: @oab10don - [Post](https://x.com/oab10don/status/2105879685322457273)*

---

### 243. Another World Style Nightcall Driving Animation (7.0K views, 131 likes)
*Use Case: music | Style: 2d, retro*

**Prompt:**
```
Create a player and tools for Another World's approach to animation. Also create a realtime video for Kavinsky-Nightcall starring Lester from Another World driving to the lab. Use crude compression for binary+data <250KB.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/gandamu-ml-124280/poster.e0e15c0e1f.webp" width="400" alt="Another World Style Nightcall Driving Animation">

*Source: @gandamu_ml - [Post](https://x.com/gandamu_ml/status/2104402167906124280)*

---

### 244. Perler Bead Pixel Art MV with Karaoke Subtitles (Chinese) (3.4K views, 35 likes)
*Use Case: music | Style: pixel-art, 2d*

**Prompt:**
```
把这首歌做成 1 分钟拼豆像素风 MV：按歌词设计原创角色，每个像素是带孔拼豆，拼好后熨成白边贴纸；方格纸背景加粉白格子地板；动作卡节拍，底部加卡拉 OK 字幕。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/hahazwei-425483/poster.ee504acb44.webp" width="400" alt="Perler Bead Pixel Art MV with Karaoke Subtitles (Chinese)">

*Source: @hahazwei - [Post](https://x.com/hahazwei/status/2104809910152425483)*

---

### 245. 20-Second Story-Led Music Video with Two Protagonists (1.4K views, 12 likes)
*Use Case: music | Style: 2d, cartoon*

**Prompt:**
```
I want you to independently do an end-to-end complete pass on making 20 second story led music video with two main protagonists a girl and a boy. I want the concept and storytelling to be reallyy unique and engaging. the audeince should be hooked to find out what happens next. the visuals shouls be pretty and really ccool. both the charcters should have a witty, quirky personality.  Use the right audio track and think and feel very deeply about what is the best way to visually represent all of the lyrics on screen. in terms of style, you can do truly anything that you think might best let you visually express yourself, including abstract motion graphics. You can use the internet freely to pull in references. You can look at motion design. I want you to make a fresh music video that has beautifully rendered JavaScript animations with a papery feel in a similar style to the reference that is created, but push the aesthetics in any direction you want and consider what is part of the modern zeitgeist. ive also attached another style that ypu explore and pick out whatever seems best to you.

Also, think about your current capabilities and what is realistic for you to be able to do. I think you should be mindful of aesthetics here, and I don't want you to produce something that is GPT slop. Instead, I'd be more impressed if you come up with a coherent style that works well. Generate the style sheet.

Think critically about what is relevant here and what would be fun, and also perform well on Twitter as far as an aesthetic. I think that K-pop is a good anchor point visually that you can pull from, but I'll let you cook here.
Once you have your character sheet, you can make a few backup dancers and some supporting characters as you see fit. You can design your own sets. You can insert the characters and then do seedance 2.5 video generations to serve as the base assets for this, and you could pass in the lyrics so you can generate individual scenes.
You don't need to have vocal singing, like visible lip movement, throughout the entire thing. Think like a regular music video where you have some inserts that are done independently and don't have the characters in them, or you see the characters doing something else entirely different. I think that for the world building for this, we want to create the sense of speeding up, and so I would like you to audit all of the different events, like the Navi Stokes and all of the Twitter hype around math getting eaten up. Think really critically about how to integrate all of the current memes that are in the zeitgeist on the Twitter timeline, and all of the feelings around AI progress. Think about things like the Shinji meme and all of the words that are around him, and how you might be able to integrate this. You can also just take straight assets and insert things into the video in an internet brutalism style. You should feel very creatively free in order to do what you want here, but try and anchor to visual references that people will be able to understand. We need a very strong, compelling visual hook that gets people excited and appreciates the work that you've done here really quickly. You can also just go and study other music videos and understand what they've done really well. I think that K-pop is probably one of the best examples that we can pull from, and thinking about how they direct human attention and manage human psychology in the way that they use visual patterns.

This is probably your best approach, but taking more stylistic freedom instead of having to anchor to K-pop too intensely.

I think too, we want to think about how to retain attention, and one of the best ways to do this is through text on screen. It'd be good to have amazing motion graphics of the text lyrics that are actually embedded into the video itself. And you can think about this as you are composing shots. As you're making backgrounds and inserting characters, we can think about where we want to have lyrics be really big and really present, so the background can be less busy there, and you can position the characters perhaps on the right as lyrics appear on the left.

You want to have some variance, so sometimes I think lyrics will just appear more like subtitles, and then other times they're going to be really present and really big. I think at the start for the visual hook, we do want to have lyrics be much more visually present because that's a strong way to grab people's attention. Remember, you can really do anything here. The goal is to make a banger for Twitter, and the stretch goal is to make something better than anyone's ever seen before. I think that what I would remind you of is that sometimes when things cohere together, it can be jarring or abrasive because the thought work has not been done beforehand in order for everything to mesh cleanly. You need to be really rigorous in planning of composition and timing to make sure this goes well.
You also need to be open to going back and revisiting things in order to be able to reiterate. You're going to want to watch the entire video multiple times, take screenshots at individual parts, and think about if something is really up to the bar of quality that we need here. I trust that you can do this, and I think that it's really important to nail the style of animations.

You can also use search abilities and find other references to pull from for motion, for JavaScript, animations, et cetera, and integrate them. Again, be economical; don't go crazy, but spend what you want here and see what you can cook up.
```

<img src="https://media.skillry.dev/opus-5-5/anjmaxx-459455/original.7ad28c81ea.webp" width="400" alt="20-Second Story-Led Music Video with Two Protagonists">

*Source: @anjmaxx - [Post](https://x.com/anjmaxx/status/2103173729656459455)*

---

### 246. 50-Second Vertical Three.js Music Video with Suno Audio (1.3K views, 2 likes)
*Use Case: music | Style: 3d*

**Prompt:**
```
Create a 50-second vertical music video using programmatic rendering (Three.js) instead of native video AI.
1. Generate song with Suno. Extract lyrics from embedded metadata.
2. Separate stems with Demucs (vocals, drums, bass, other).
3. Transcribe vocals with mlx_whisper. Align with official lyrics to create script where '1 lyric line = 1 scene'.
4. Write storyboard: define 'What to show in 3D', 'Camera', 'Main word' for each lyric line.
5. Have 4 parallel Opus sub-agents write scene programs.
6. Export 16-frame contact sheet for visual verification.
7. Render headless Chrome at 1080x1920, 60fps.
8. Normalize volume to -14 LUFS.
Style: Engraving-like lines, colors limited to Black, Bone, Orange.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/okazaky-084783/poster.a5adec824d.webp" width="400" alt="50-Second Vertical Three.js Music Video with Suno Audio">

*Source: @okazaky - [Post](https://x.com/okazaky/status/2107826563786084783)*

---

### 247. 140 BPM UK Dubstep Style Audio-Visual Motion (1.2K views, 8 likes)
*Use Case: music | Style: 2d, abstract*

**Prompt:**
```
140 BPM rusko/skream style UK dubstep
```

<img src="https://media.skillry.dev/opus-5-5/rames-jusso-776559/original.f78494a681.webp" width="400" alt="140 BPM UK Dubstep Style Audio-Visual Motion">

*Source: @Rames_Jusso - [Post](https://x.com/Rames_Jusso/status/2103200703598776559)*

---

### 248. Psychedelic Pop Punk VJ Motion Graphics with Techno Sync (1.1K views, 8 likes)
*Use Case: music | Style: 2d, abstract*

**Prompt:**
```
見た人の脳汁がドバドバでてトランス状態に陥るようなサイケデリック・ポップ・パンクなVJ風のモーショングラフィックス動画を作り、その動画と完全にシンクロするトランス・サイバー・パンク・テクノの曲を作って嵌めてくれ。30秒程度で良い。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/yama-kiyo-134910/poster.b270c9b6dd.webp" width="400" alt="Psychedelic Pop Punk VJ Motion Graphics with Techno Sync">

*Source: @yama_kiyo - [Post](https://x.com/yama_kiyo/status/2103740786177134910)*

---

## 10. Branding & Logo Animation

### 249. Apple Keynote Style Product Launch Film with Photo Morphing (140.7K views, 2,179 likes)
*Use Case: branding | Style: 2d, photo-based, minimal*

**Prompt:**
```
<inputs>
Ask me for: a one-word brand name for the wordmark (a verb works best), 9 to 12 high-res photos, a royalty-free song around 120 BPM with a drop and a quiet breakdown (Mixkit, free for commercial use), and a free stock clip of a plain wall with moving plant shadows (Pexels).
</inputs>

<direction>
An Apple-keynote launch film, 2D only, one continuous take. Every scene is made out of the previous one: nothing fades, blurs or cuts. Objects change shape instead: text rises out of a mask line, icons pop from zero on a spring, bars draw across, pages push, and a black shape floods the whole frame and contracts into the next scene. Warm off-white canvas, black UI, iOS 26 liquid glass over the photos. Archivo (wdth 125, weight 800) for the wordmark, Geist for UI. A cursor drives every change with real clicks, drags and long-presses. The camera zooms screen-studio style so each moment fills the square, and the cursor scales with it.
Banned: crossfades, blur-ins, brightness "developing", 3D flips, particles, glows, holds longer than 1s, anything that looks like a template.
</direction>

<structure>
120 BPM, 54 beats, something happens on every beat.
Open: the wordmark squeezes into its own period like an accordion, the dot grows into a black pill, a label rises inside it. Click: six iris blades close over the label and snap open onto a photo. The circle becomes a square, shrinks, the grid unfolds from behind it like a paper map (center, plus, corners), reflows into a bento, and a click zooms into one tile, landing exactly on the drop.
Glass: a glass word pops in letter by letter, melts into a droplet that stretches into a glass toolbar. The adjust icon turns it into a slider. Dragging relights the photo from day to golden hour (two aligned shots), and the knob turns into a glass lens while held. It lifts into a glass orb, the next photo opens inside it as a circle, and the orb expands into a lock screen: glass clock digits, date, and a home bar that stretches into a glass music player.
Stage: the lock screen pulls back into a phone (the bezel grows out of the screen edge). The Dynamic Island stretches like liquid, pinches off, flies over and grows into a Mac window that rolls up like a blind. Long-press the wallpaper, drag it onto a Safari tab, the page pushes in, drop it and it becomes the hero of a landing page. Scroll: the hero morphs into a framed print on a product card, with the mat and molding growing out of the photo's edge. Pick a frame color (it paints across) and a size, then the nav button flies down into "Order print".
Order: one black shape keeps morphing: Ordered ✓ → Printing % → On its way (a van on a route) → Delivered ✓.
Wall: the delivered circle floods the frame edge to edge, holds black for a beat, and contracts into the framed print hanging on the real wall footage. The same iris opens onto the print, closes again, the frame floods the screen and contracts into the pill → the dot → the letters spring back out, landing on the beat return. Last frame = first frame.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside an async seek(t): no CSS transitions, no timers, no state between frames.
2. Springs are closed-form step responses. A value with many targets is the sum of one spring per change, so it stays a pure function of time.
3. Liquid glass: each glass element holds its own clone of the scene behind it, filtered with an SVG feImage displacement map (a rounded-rect distance field) through three feDisplacementMaps at slightly different scales for chromatic edges, plus a rim light. Glass letters: a canvas distance field per glyph gives the map, mask and highlights.
4. Goo: blur + alpha threshold, then composite the source atop it so the glass stays sharp inside.
5. Iris: 6 blades around a hexagonal aperture. Each blade is its two vertices, both edge extensions and the SHORT arc between them.
6. Wordmark squeeze: every letter moves toward the dot by the same factor and its drawn width follows (narrow the wdth axis, scale the rest), so the letters stay touching.
7. Footage: re-encode all-intra (ffmpeg -g 1), load it as a blob URL, await 'seeked' before drawing each frame.
8. Sound: a downloaded SFX for every event (Mixkit), never synthesized, each placed by its measured peak. The song starts on a downbeat: the zoom lands on the drop, the wall sits in the breakdown, the wordmark returns with the beat. Loudnorm to -14 LUFS.
9. Render with Playwright: 4 subframes per frame blended with ffmpeg tmix, 60fps. Check one frame per beat, then scan for single-frame pops (frame-difference spikes 3x their neighbours).
</build>

<gotchas>
backdrop-filter: url() misreads displacement maps in Chromium, so clone the scene instead. A flood must overscale past the corners and take about 0.3s, or half the screen changes in one frame. A child with visibility: visible shows through a hidden parent, so use inherit. Text that swaps inside a morphing shape needs its own mask. python http.server can't range-seek video, so use the blob URL.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and 4 stills (open, glass, stage, wall) before you write the full film.
</start>
```

<img src="https://media.skillry.dev/opus-5-5/twoclipping-496100/original.8f1c352eca.webp" width="400" alt="Apple Keynote Style Product Launch Film with Photo Morphing">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2103835273813496100)*

---

### 250. 22-Second Square Loop Product Demo with Morphing Shapes (49.1K views, 722 likes)
*Use Case: branding | Style: 2d, minimal*

**Prompt:**
```
<inputs>
Ask me for: the one question a user asks my product and its one-line answer, two album covers, a royalty-free song around 110 BPM with a quiet intro and a hard drop (Mixkit, free for commercial use), and my logo for the ending. If I skip any, use the defaults: "is this all code?" / "yes. every frame.", two atmospheric photos, Mixkit "Head Bang".
</inputs>

<direction>
A 22 second square loop, 1440x1440 at 60fps, 2D only, one continuous take. Nothing ever cuts: every scene grows out of the last, and every gesture physically carries the camera into the next world. Every morph glides for 0.8s on cubic-bezier(.45,0,.15,1) and the camera zoom rides the same curve, so shapes change so smoothly you barely notice. Content dissolves in the back half of each glide. One gesture per scene.
Look: a warm light stage (#f3f3f0 to #e3e3de), black UI, the app world dark (#121212) tinted from the current album cover, one green accent (#1ed760). Geist for UI, the real macOS pointer, soft layered shadows that grow with the shape's height.
Banned: hard cuts, bouncy springs, particles, glows, zooming in and straight back out, holds longer than 1s, anything that looks like a template.
</direction>

<structure>
Beats are the song's, and the press lands on its drop.
Generate: the cursor clicks, the pill glides into a spinner, then a check.
Chat: the check splits into three typing dots (goo). The left dot flies up into the question bubble and types it, the right one flies down into the reply. Both contract back into dots while gliding in and pour into the middle one.
Play: the middle dot bends into a play triangle, point by point. The cursor presses it on the drop: a white button pops in under the click and the dark app floods out around it, so the leftover white becomes the play button. The camera pulls back to reveal the full now-playing screen: big cover, title, heart (liked, fills green), progress, controls, volume.
Swipe: the cursor drags the cover sideways, the next track slides in, and the whole app retints from the new cover.
Drag: the camera glides to the volume. The cursor drags it to max and keeps pulling: the bar rubber-bands and drags the camera sideways out of the app, tracking the knob across a dark dotted canvas.
Chart: the line lands and bends up into a green chart while the number counts up. The volume knob becomes its last point.
Dive: the cursor clicks that point and the camera dives into it until the light stage fills the frame.
Ending: an "Ask [my product]" button grows out of the light, thins into a line, and the line fans out into my logo (default: the Claude spark, six copies rotating into twelve rays in Claude orange). It folds back into the line, which thickens into Generate. Last frame = first frame.
</structure>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/twoclipping-762046/poster.d9fb9fe020.webp" width="400" alt="22-Second Square Loop Product Demo with Morphing Shapes">

*Source: @twoclipping - [Post](https://x.com/twoclipping/status/2104674464868762046)*

---

### 251. Tech News Topic Motion Graphics Explainer (33.2K views, 272 likes)
*Use Case: branding | Style: 2d, kinetic-type, minimal*

**Prompt:**
```
You are a world-class motion designer doing a 20.00s kinetic identity bumper for TechHalla — an AI creator known for stealable workflows, not vibes. This piece must feel like the best designer in the room made a street-poster that moves. Showreel stakes: if this is weak, you don’t get hired.

DURATION: exactly 20.00 seconds. LOOPABLE: frame 0 == frame last (position, opacity, cursor if any).
FORMAT: one HTML file, 1080×1080 (square, X-native). 60fps.
PALETTE (strict):
- bg # 0A0A0A
- magenta # FF2BD6
- acid green # B8FF00
- white # F5F5F5 only for primary readable type when needed
No other hues. No gradients on UI chrome. Magenta/green may misregister (print offset) by 2–4px on impact frames only.

TYPE SYSTEM (use all three; never one font for everything):
1) Display / scream: Archivo Black (or equivalent ultra-condensed black) — 1–4 words max
2) Urban grotesque: Syne ExtraBold — secondary hits, stacked lines
3) Mono / “prompt code”: IBM Plex Mono Medium — small labels, timestamps, fake prompt crumbs
Tracking: display −40 to −80; mono +20. Optical kerning. No cute script fonts.

MESSAGE (locked — do not soften, do not add filler slogans):
Beat hits in this exact order:
1. STOP SCROLLING
2. AI VIDEO ISN’T EXPENSIVE
3. BAD PROMPTING IS
4. WORKFLOWS > WISHES
5. STEAL THE PROMPT
6. @ TECHHALLA
Supporting crumbs (mono, ≤18 chars, never full sentences): JSON · H3 · SEEDANCE · 0 KEYFRAMES · MAGNIFIC · COPY/PASTE

NARRATIVE ARC (20s):
0.0–2.5s  COLD OPEN — “STOP SCROLLING” slams in from below with spring overshoot; magenta smear trail; acid green baseline ticks across like a waveform.
2.5–6.5s  THESIS A — “AI VIDEO ISN’T EXPENSIVE” locks to a poster grid (baseline grid 8px). Letters scramble (seeded Fisher–Yates per glyph) then snap on the beat.
6.5–10.5s THESIS B — “BAD PROMPTING IS” replaces it via mask wipe through the letterforms (the outgoing line is the mask). Magenta/green channel split on the cut.
10.5–14.5s PROOF FLASH — rapid kinetic stack: WORKFLOWS > WISHES, then mono crumbs orbit a central block like a terminal. One fake “prompt block” types 3 lines max, then gets crossed by an acid green strikethrough that becomes a underline for STEAL THE PROMPT.
14.5–17.5s BRAND LOCK — @ TECHHALLA centers; display weight. A thick magenta bar and a thin acid green rule form an L-bracket mark (custom, not a logo download).
17.5–20.0s SETTLE / LOOP — hold lockup; micro-breath (scale 1.000→1.012→1.000); last frame == first ready for loop.

CONCRETE TECHNIQUES (required — implement, don’t approximate):
1. seek(t) pure function of time. No CSS transitions. No setInterval. No React state across frames.
2. Springs = closed-form step responses. Stack one spring per target change so motion stays deterministic.
3. Kinetic type: per-glyph spring (y, opacity, blur). Stagger = 1/16 note at 120 BPM (125ms).
4. Print misregistration: on accent frames only, duplicate text layer offset (±2–4px) in magenta and acid green at 40% opacity.
5. Mask reveal: destination text revealed by animating a path mask derived from the outgoing word’s outlines.
6. Camera: one orthographic camera; only punch-in (1.0→1.08) and horizontal smash-pans timed to beats — never random drift.
7. Motion blur: render 4 subframes per frame, blend (tmix-style).
8. Beat grid: 120 BPM, downbeat at t=0. Something must land on every beat for the first 16 beats; after that, every other beat is ok.
9. Pre-pass: before full render, export one still per major beat (8 frames). Fix cramped type, orphan words, low contrast — then render.

BANNED:
Generic AI clichés (brains, robots, neural nets, sparkles), soft gradients, bouncy cartoon easing, particle explosions, stock “futuristic HUD”, long paragraphs, narrator essay energy, Canva-deck energy, extra slogans beyond the locked message, purple/blue neon, glassmorphism.

If Astra already blew our minds… Opus 5.5 is a monster 😱
```

<img src="https://media.skillry.dev/opus-5-5/techhalla-498547/original.fbdb194d58.webp" width="400" alt="Tech News Topic Motion Graphics Explainer">

*Source: @techhalla - [Post](https://x.com/techhalla/status/2103411244468498547)*

---

### 252. Fire Animation Effects Showcase with Particle Systems (26.8K views, 118 likes)
*Use Case: branding | Style: 2d, minimal*

**Prompt:**
```
I want to know how good a graphic designer you are. To prove this to me, I want you to prepare a 15-second motion graphics video. I want you to do an introduction related to my account. I'm sharing my logo and my X cover image, use those too.
```

<img src="https://media.skillry.dev/opus-5-5/fire-ozgur-130104/original.9df58f2d55.webp" width="400" alt="Fire Animation Effects Showcase with Particle Systems">

*Source: @fire_ozgur - [Post](https://x.com/fire_ozgur/status/2103459971174130104)*

---

### 253. TypingMind Logo Slow Reveal Assembly Animation (24.3K views, 322 likes)
*Use Case: branding | Style: 2d, minimal*

**Prompt:**
```
Create an impressive motion design video of a slow-reveal transition that assembles and eventually reveals the TypingMind logo.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/tdinh-me-301409/poster.e99eade10a.webp" width="400" alt="TypingMind Logo Slow Reveal Assembly Animation">

*Source: @tdinh_me - [Post](https://x.com/tdinh_me/status/2103704250329301409)*

---

### 254. Speaker Carousel Ring Animation in After Effects (18.0K views, 210 likes)
*Use Case: branding | Style: 2d, kinetic-type*

**Prompt:**
```
SPEAKER CAROUSEL
<setup>
Claude is connected directly to my open After Effects project through the AE MCP.
Work inside the Inner comp where the speaker ring already exists.
</setup>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/johncodunayo-560372/poster.d53d26d25c.webp" width="400" alt="Speaker Carousel Ring Animation in After Effects">

*Source: @johncodunayo - [Post](https://x.com/johncodunayo/status/2105271353993560372)*

---

### 255. PayBox Logo 10-Second Motion Reel (6.8K views, 36 likes)
*Use Case: branding | Style: 2d, minimal*

**Prompt:**
```
Make this PayBox logo into a reel. Pretend you are a world-class motion designer. Make a 10-second dynamic video like the reference
```

<img src="https://media.skillry.dev/opus-5-5/0xvalure-331584/original.241313ccf0.webp" width="400" alt="PayBox Logo 10-Second Motion Reel">

*Source: @0xValure - [Post](https://x.com/0xValure/status/2103603025579331584)*

---

### 256. Spotify-Themed 18-Second Motion Graphics Video (3.7K views, 41 likes)
*Use Case: branding | Style: 2d, minimal*

**Prompt:**
```
Create a complete, polished Spotify-themed motion graphics video from the following brief. This prompt is self-contained: no reference video or supplied assets are required.

<deliverables> An 18-second MP4 at 1920×1080 and true 60 fps, with music and subtle sound effects Complete editable source Build, render, inspect, and refine the animation before delivering it Do not stop at a storyboard, still images, or an implementation plan </deliverables>
<art_direction>
A premium music-product film presented inside a large, nearly black rounded rectangular stage
The stage occupies roughly 80% of the canvas width and 75% of its height, centered horizontally and slightly below the vertical center
Outside the stage, use a soft atmospheric green background: luminous emerald near the upper-left corner, deeper forest green toward the sides, fading to near-black at the bottom
Inside the stage:
Near-black background
White primary typography
Muted gray secondary text
Spotify green # 1ED760 for emphasis and controls
One clean sans-serif font, such as Geist or Inter
Consistent icon strokes and restrained shadows
Keep compositions compact and centered, with substantial negative space
Text should feel like music-product advertising, not oversized presentation headings
Do not add an outer caption, creator watermark, decorative footer, or progress counter
</art_direction>

<artwork> Create original square album artwork for a fictional track called “Glass Tides” by “AURA”
The hero cover is an abstract macro image of flowing pearlescent liquid silk and molten glass
Use pastel lavender, powder cyan, blush pink, champagne gold, and subtle mint
Include broad three-dimensional folds, realistic reflective highlights, delicate striations, and a prominent sweeping S-shaped fold
Fill the square edge to edge
No text, logo, or border on this hero artwork
Use this same artwork consistently throughout the film

Create additional designed playlist sleeves:
“Late Nights” in mustard yellow
“Good Energy” in pink
“Deep Focus” in blue
“Daily Mix 1”, “Daily Mix 2”, and “Daily Mix 3” in complementary colors

These should look like finished graphic-design covers, with bold typography and simple geometric motifs
</artwork>

<timeline> 0.0–0.6 seconds: A green Spotify icon grows smoothly into the center of the dark stage Give it a confident arrival with minimal overshoot
0.6–1.5 seconds:
The icon transitions into a small Spotify identity above two centered lines:
“Discover”
“new music”
The first line is white; the second is green
Reveal them with short masked vertical movements
1.5–2.4 seconds:
A stylized Spotify desktop interface rises into view
Show a slim sidebar, “Made for you”, three album cards, and small supporting rows
Use a subtle perspective tilt during the entrance, settling toward a frontal view
2.4–3.2 seconds:
Move closer to the three featured covers
Show “New for you” above them
Keep the artwork crisp, with short album titles beneath
A narrow rounded player bar now anchors the bottom of the stage
3.2–4.0 seconds:
The featured cards withdraw into a compact “Fresh finds” list
Reveal four song rows with a slight stagger
Each row contains a thumbnail, short track title, artist, and a small menu icon
4.0–4.9 seconds:
Transition into a horizontal strip of colorful playlist covers
Heading: “Every mood”
Supporting line: “Find what moves you”
The strip slides smoothly sideways, with edge cards partially cropped by the stage
4.9–5.8 seconds:
A compact search field appears
Type “Glass Tides”
Reveal one selected result beneath it, with the iridescent artwork, “AURA”, and a green play icon

5.8–6.6 seconds:
The selected artwork expands into a large centered cover
Reveal “Glass Tides” underneath, followed by “AURA” in green
Keep the player bar visible
6.6–7.5 seconds:
The same cover slides left
Track information appears on the right:
“Glass Tides”
“AURA”
“A new frequency”
Add a rounded green Play button
Coordinate the cover movement and text reveals
7.5–8.3 seconds:
A brief brand-color transformation fills the inner stage with green
The artwork contracts into a smaller centered tile
Place a small dark Spotify identity underneath
The player briefly recedes
8.3–9.8 seconds:
Return to the dark stage
The same artwork expands dramatically toward the camera, becoming oversized and cropped by the rounded stage
Restore the player at the bottom
Use controlled motion blur during the fastest part of the zoom

9.8–11.2 seconds:
The artwork clears into a centered typographic statement:
“Find your”
“rhythm”
Use white for the first line and green for the second
The player remains visible and stable beneath it
11.2–12.5 seconds:
Show “Made for your every day”
Three playlist sleeves enter with gentle perspective and small opposing tilts
They spread into six smaller sleeves across the stage
Supporting line: “Your sound, always evolving”

12.5–14.0 seconds:
The playlist layout transitions into four floating album covers
Include the iridescent hero artwork
Use restrained rotation, perspective, depth ordering, and overlap
Keep their movement coordinated rather than randomly floating
14.0–15.2 seconds:
The covers converge toward the center and fold around a green Spotify icon
The artwork withdraws as the icon becomes the focal point
Fade the player away
The Spotify icon must emerge from the same central position as the converging covers
15.2–18.0 seconds:
The icon moves slightly left and settles beside a large white “Spotify” wordmark
Keep the icon and letters separated throughout the movement
Reveal:
“Discover new music”
“every day”
The first line is white; the second is green
Hold the finished composition cleanly through the end
</timeline>
<persistent_player>
For most of the middle sequence, keep one narrow rounded player bar near the bottom of the inner stage
Include:
Small hero-art thumbnail
“Glass Tides” and “AURA”
Play and skip controls
A thin progress track
A small volume icon
Subdued dark translucent styling with a fine border
This recurring player connects the changing shots
It must remain visually secondary to the artwork
</persistent_player>

<motion_quality>
Match the energy of a tightly edited premium product film
Most visual ideas last approximately one second, but transitions remain smooth
Use continuous acceleration and deceleration
Favor critically damped springs or carefully tuned smooth easing
No repeated bouncing or large elastic overshoots
Preserve the hero artwork’s identity and position relationships through search, album detail, brand tile, and zoom
Use match-position transitions, coordinated scaling, masked reveals, and perspective
Outgoing titles must disappear before incoming titles occupy the same space
Avoid overlapping text, sudden camera resets, long blank intervals, and arbitrary full-frame crossfades
Clip every oversized cover and camera move cleanly to the rounded stage
No particles, shockwave rings, lens flares, camera shake, or unrelated stock footage
</motion_quality>

<audio> Create or select commercially usable electronic music around 120 BPM Use a clean pulse, warm bass, restrained melodic elements, and subtle transition accents Align important entrances, selections, zooms, and the logo reveal with musical events Keep effects quieter than the music No voiceover Do not use copyrighted commercial tracks without permission </audio>
<implementation_and_validation>
Build a deterministic animation driven by absolute time through an async window. seek(t) function
Every transform, opacity, mask, and UI state must be reproducible when seeking frames in any order
Do not depend on live timers, accumulated physics, or CSS transition state during export

Render true 60 fps with spatial antialiasing
Use 3–5 temporal subframe samples per output frame for restrained motion blur
Keep stationary text and artwork sharp
Inspect contact sheets and moving playback
Check the fast heading changes, artwork handoffs, zoom, cover convergence, and final wordmark spacing
Verify evenly spaced frame timestamps and the full 18-second duration
Fix visual defects before delivering the final MP4 and editable source
</implementation_and_validation>
```

<img src="https://media.skillry.dev/opus-5-5/brainextends-606193/original.f7353b2aa2.webp" width="400" alt="Spotify-Themed 18-Second Motion Graphics Video">

*Source: @brainextends - [Post](https://x.com/brainextends/status/2103801834930606193)*

---

### 257. Brand 5-Year Vision Word Coining Film (3.7K views, 27 likes)
*Use Case: branding | Style: 2d, photo-based*

**Prompt:**
```
<inputs>
Ask me for: a brand name, its logo (SVG or high-res PNG), one line of what it becomes in 5 years (not today's features), one coined word the film should teach (e.g. "signal"), a public-domain archival clip of the old way of doing it (https://t.co/t5EaRxnryq Prelinger), an archived web page from ~2000 where people asked for things (Wayback Machine), a royalty-free song ~100-120 BPM with a real drop (Mixkit, free for commercial use), and a free ElevenLabs key for the narrator (premade voices only).
</inputs>

<direction>
An a16z x Content Rewards brand film, ~55s. It sells one feeling and one idea, never features. Real archival and real web pages, never stock footage, never product screens, never fake UI. One hero object: a 3D button with the logo embossed into it, the ONLY saturated colour in the film. Everything else white, silver, cream and archival black. Small white captions that light up word by word on the narrator's timestamps. Film texture: fresh grain every frame, halation on bright edges, soft vignette, warm lifted blacks. The brand appears at the end, never before.
Banned: stock footage, dashboards, chat UIs, feature tours, cards without real profile pictures, wobbly "worm" graph lines, random glitches, any hold longer than 1.5s, purple, rainbow gradients, orange on anything but the button.
</direction>

<structure>
Cold open (0-8s): the archival clip plays on a glowing old CRT TV with its real dialogue, captions word by word.
The past (8-17s): push into the real 2000 web page, a cursor lands on one real "wanted" post, old pages strobe one per frame, a counter ticks EVERY frame up to today's scale. Narrator: "People have always asked the internet for what they need." / "Today, there are five hundred million posts a day."
Bridge (17-30s): a galaxy of real old asks. One ask snaps to a white outline with a chip of the coined word ("We call that a signal."). Archival of people doing it by hand on the TV. Cut on each word: "Door by door. Call by call. Scroll by scroll." The narrator never stops talking between acts.
Button (30s): the button rises out of black, rim light first, colourless. "[Brand] finds the signals." A flat grey line: "this is how you find customers by hand". Hard cut to a button macro, the colour comes alive, the music drop lands on this exact frame. "and this... is with [Brand]": a steep lit curve, counters changing every frame, a glowing sine with a comet head the camera chases, then platform strikes (X, Reddit, LinkedIn, YouTube, Instagram, TikTok) each with its own counter, then the galaxy again with glowing platform logos: "Every signal on the internet." Hyperspace.
End: the tagline word by word, then "[Brand] is live.", ONE cream frame on the kick, then logo + URL in silence.
</structure>

<build>
1. One HTML file, 1920x1080. Everything is computed from time inside seek(t): no CSS transitions, no timers, no Math.random (seeded hash), no state between frames.
2. Button: three.js MeshPhysicalMaterial (clearcoat 1, roughness ~0.4), ACES filmic, cool + warm rim spots, room env map. Emboss the real logo by displacing a dense disc with a blurred mask of the logo, folded into the rim so corners don't show. Brushed-metal base.
3. Counters: linear on the film's global clock, so they keep running through cutaways. Tabular numerals, fixed unit label.
4. Captions: <=7 words, one idea per shot, hand-placed line breaks, one text layer on screen at a time. Grey to white over 0.2s on the word timestamps (ElevenLabs /with-timestamps).
5. Glitch = 1-2 frames, only on a real cut, always with a click. Readable things stay on screen >= 8 clean frames.
6. Render with Playwright per frame (Chromium with --use-angle=swiftshader so WebGL renders headless), finish in numpy: fresh grain per frame, halation, vignette ~0.65x at the corners, 1px chroma fringe with EDGE-CLAMPED shifts. Pipe PNGs into ffmpeg, h264, 24fps.
7. Mix: narrator 10-15dB over the music, duck -18dB while speaking, hits on the exact action frame, -14 LUFS.
</build>

<gotchas>
If the narrator pauses, the visuals must not stop. If a counter freezes, the render is broken. If the button isn't the most memorable thing in the film, start over.
</gotchas>
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/notdwd-998633/poster.3ade3adf5d.webp" width="400" alt="Brand 5-Year Vision Word Coining Film">

*Source: @notdwd - [Post](https://x.com/notdwd/status/2103995183255998633)*

---

### 258. 3D Pixel Renderer Binance-Style Cinematic Intro (Chinese) (3.5K views, 1 likes)
*Use Case: branding | Style: pixel-art, 3d*

**Prompt:**
```
趁着今天有空回看和分析了一下整个视频

审美在线的Opus 5.5确实顶 @claudeai 

3D渲染器像素风

这个渲染效果确实做得很强，逻辑调度能力和美学素养确实是挂钩的

这个片头的转场、音效和提振人心的bgm真的可以被 @binancezh 拿去用了

像素小人物也很有 @cz_binance 的感觉

#binance #claude
```

<img src="https://media.skillry.dev/opus-5-5/sciencedegens-843325/original.abafb28cc5.webp" width="400" alt="3D Pixel Renderer Binance-Style Cinematic Intro (Chinese)">

*Source: @sciencedegens - [Post](https://x.com/sciencedegens/status/2104114814536843325)*

---

### 259. DreamFort 20-Second Motion Graphics Manifesto (1.1K views, 12 likes)
*Use Case: branding | Style: 2d, kinetic-type*

**Prompt:**
```
make a 20-second motion graphics manifesto for DreamFort: "superintelligence should belong to everyone". every frame and every sound written in code, no image or video models.
```

<img src="https://media.skillry.dev/opus-5-5/advait-jayant-712107/original.472a46d88f.webp" width="400" alt="DreamFort 20-Second Motion Graphics Manifesto">

*Source: @advait_jayant - [Post](https://x.com/advait_jayant/status/2103565104243712107)*

---

## 11. Social Media Content

### 260. Talking Head Video Edit with Subtitles Graphics and Music (63.4K views, 301 likes)
*Use Case: social | Style: 2d, kinetic-type*

**Prompt:**
```
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
```

<img src="https://media.skillry.dev/opus-5-5/sab8a-475686/original.550678accf.webp" width="400" alt="Talking Head Video Edit with Subtitles Graphics and Music">

*Source: @sab8a - [Post](https://x.com/sab8a/status/2103144778481475686)*

---

### 261. Camera-Themed Motion Graphics Reel with Remotion and TTS (56.2K views, 494 likes)
*Use Case: social | Style: 2d, minimal*

**Prompt:**
```
ما أعتقد في قفزة سواها Opus 5.5 تساوي القفزة اللي سواها في صناعة ال motion graphics، سواء من ناحية الجودة أو من ناحية التكلفة (استهلاك ال tokens) 

هذا الفيديو سويته بربع حد ال 5 ساعات 👇🏻

【作者补充制作说明】
الطريقة باختصار: 
استخدمت claude بنموذج opus 5.5 - مستوى التفكير متوسط إلى عالي، و طلبت منه يستخدم remotion لتسريع عملية ال preview و كذلك طلبت منه يقتصر استخدامه في معظم المؤثرات الصوتية على أصوات الكاميرات و عدسات التصوير الشائعة في ال reels و استخدمت نموذج gemini 3.8 tts flash لإنتاج الصوت 
أخذ معي حوالي ساعة و نصف من المحادثات معه لكن معظمها راح في تجريب أشياء مختلفة و التجربة ممتعة فعلا.
```

<img src="https://media.skillry.dev/opus-5-5/yarhmm-341449/original.00d7d78f49.webp" width="400" alt="Camera-Themed Motion Graphics Reel with Remotion and TTS">

*Source: @YarHmm - [Post](https://x.com/YarHmm/status/2103505435802341449)*

---

### 262. Chaotic Brain Rot Video with Python and FFmpeg (7.1K views, 55 likes)
*Use Case: social | Style: 2d, abstract*

**Prompt:**
```
Use Python to generate a 9:16 chaotic brain rot video with excellent motion + sound design and render it using ffmpeg. Put your own personal spin on it so it’s aligned with Anthropic’s new launch. Also fully express what it’s like to be a very creative LLM used by me every day from your POV to give it some extra personality.
```

<img src="https://media.skillry.dev/opus-5-5/kloss-xyz-941143/original.c77fc2a47b.webp" width="400" alt="Chaotic Brain Rot Video with Python and FFmpeg">

*Source: @kloss_xyz - [Post](https://x.com/kloss_xyz/status/2103664956482941143)*

---

### 263. Canvas-Drawn Video with Web Audio Synthesized Music (Chinese) (5.7K views, 7 likes)
*Use Case: social | Style: 2d*

**Prompt:**
```
提取帖子里的内容，用JS做个横版视频，需要包含配乐和音效。画面全部用 JS 在 Canvas 上画，配乐和音效用浏览器的 Web Audio 实时合成，没有用任何图片或音频素材。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/oxpsats-182908/poster.36a54ce2c8.webp" width="400" alt="Canvas-Drawn Video with Web Audio Synthesized Music (Chinese)">

*Source: @oxpsats - [Post](https://x.com/oxpsats/status/2104462072344182908)*

---

### 264. GravityDex x Gojo Satoru Anime Edit (2.1K views, 19 likes)
*Use Case: social | Style: 2d, cartoon*

**Prompt:**
```
Make a GravityDEX x Gojo Satoru edit that goes hard
```

<img src="https://media.skillry.dev/opus-5-5/micheleharmonic-244175/original.a7d8538869.webp" width="400" alt="GravityDex x Gojo Satoru Anime Edit">

*Source: @MicheleHarmonic - [Post](https://x.com/MicheleHarmonic/status/2103111448352244175)*

---

### 265. Crypto-Themed Motion Graphics Variation (2.0K views, 6 likes)
*Use Case: social | Style: 2d, minimal*

**Prompt:**
```
make a similar version but with a crypto reference
```

<img src="https://media.skillry.dev/opus-5-5/0xevinho-436195/original.b7325353a8.webp" width="400" alt="Crypto-Themed Motion Graphics Variation">

*Source: @0xEvinho - [Post](https://x.com/0xEvinho/status/2103212966703436195)*

---

### 266. Steam Game Releases News Show from Gamer Perspective (1.5K views, 13 likes)
*Use Case: social | Style: 2d, infographic*

**Prompt:**
```
Please create introductory news about games released on Steam from September 25th to September 26th. From a gamer's perspective, highlight what seems interesting about each game in an easy-to-view manner. Make it a motion graphics video of about 60 seconds.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/gigabit-million-959719/poster.b9905643cf.webp" width="400" alt="Steam Game Releases News Show from Gamer Perspective">

*Source: @gigabit_million - [Post](https://x.com/gigabit_million/status/2104068536041959719)*

---

## 12. Tutorials & How-To

### 267. Claude Code Agent System Configuration and Workflow Setup (36.2K views, 290 likes)
*Use Case: tutorial | Style: 2d*

**Prompt:**
```
Rebuild my Claude Code setup around this tree:

1. Look in ~/.claude/agents and .claude/agents for subagents that already cover explorer, worker and researcher. Draft new ones only for roles that are missing. Set each to model: opus, effort: medium. If an existing subagent is pinned to a different model, list it, don't touch it.

2. Set the main session's effortLevel to high in ~/.claude/settings.json, and set advisorModel to fable.

3. Check for anything disabling the advisor: CLAUDE_CODE_DISABLE_ADVISOR_TOOL, DISABLE_TELEMETRY, any variable blocking feature-flag fetches, and CLAUDE_CODE_EFFORT_LEVEL, which overrides subagent effort. Report what you find. Change nothing yet.

4. Add one line to ~/.claude/CLAUDE.md: consult the advisor before a large plan, when an error repeats, and before marking a long task done.

Show every change as a diff first. Don't touch anything until I say go.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/imryven-495965/poster.4b4e7c2ce0.webp" width="400" alt="Claude Code Agent System Configuration and Workflow Setup">

*Source: @imryven - [Post](https://x.com/imryven/status/2105719735438495965)*

---

### 268. Calculus Derivative Concept Explainer with Manim and Edge TTS (23.2K views, 260 likes)
*Use Case: tutorial | Style: 2d, infographic*

**Prompt:**
```
请用Manim给我制作一个导数概念学习的视频，要求通俗易懂，并且有例子，引人思考。配音使用edge-tts
```

<img src="https://media.skillry.dev/opus-5-5/linearuncle-971663/original.090384a0ec.webp" width="400" alt="Calculus Derivative Concept Explainer with Manim and Edge TTS">

*Source: @LinearUncle - [Post](https://x.com/LinearUncle/status/2103128559174971663)*

---

### 269. 5 Gmail Productivity Tips Explainer with Code-Drawn Graphics (19.6K views, 177 likes)
*Use Case: tutorial | Style: 2d, infographic*

**Prompt:**
```
SKILL.mdどおりに「仕事が速くなるGmailの機能5選」を作って。台本は5つの項目に構造化して、働きは公式ヘルプで確かめて、画像はコードで描いて、ゆっくり音声に合わせて秒単位で切り替えて
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/claudecode-ut-314769/poster.ce21da414d.webp" width="400" alt="5 Gmail Productivity Tips Explainer with Code-Drawn Graphics">

*Source: @ClaudeCode_UT - [Post](https://x.com/ClaudeCode_UT/status/2106958663525314769)*

---

### 270. Particle-Based Video Rebuilding from Footage with Depth Estimation (13.1K views, 86 likes)
*Use Case: tutorial | Style: particle, 2d*

**Prompt:**
```
公开我的制作方案，发给Opus5.5就能用

  1. 选素材

  三个标准，直接决定成败：

  - 主体完整：人物或物体全身入画。细节会在加工中丢失，观众靠轮廓认东西，特写会变成一团。
  - 背景干净：纯色、雪地、天空都行，主体和背景容易分开。
  - 有明确的动作瞬间：打击、起跳、落地、转身。这些是后面做特效的支点。

  来源可以是自己拍的、视频模型生成的，或有授权的现成片段。

  2. 拆素材

  从每一帧提取三类信息：

  - 颜色：原画面。
  - 远近：每个位置离镜头多远，用现成的深度估计模型算。
  - 主体范围：哪里是主体、哪里是背景。

  另外找出镜头切换发生在哪些时刻。这一步的要点是保持稳定：远近和主体范围要在同一个镜头内统一处理，否则播放起来会抖。

  3. 定"粒子"和"样式"

  先决定用什么东西来重建画面：圆点、方块、文字、线条都可以。

  然后设计几种样式。每种样式其实只是三条规则的不同组合：

  - 放在哪：整个画面都放，还是只放在主体上。
  - 多大：统一大小，还是跟着明暗、远近变化。
  - 什么颜色：用原画的颜色，还是统一用一两种颜色。

  再加一个开关：是平铺在一个面上，还是按远近推进三维空间。推进去之后镜头才能环绕。

  准备四到六种差异明显的样式就够用。粒子的疏密需要自己看着调：太大认不出内容，太小又和原片没区别。

  4. 找节奏

  - 定速度：选定音乐的速度，把时间切成等长的小格。让一格正好是整数帧，后面所有切换都好对齐。
  - 找动作瞬间：结合"声音突然变响"和"画面突然变动"两个信号，找出素材里的打击点。
  - 准备音乐：可以用现成的曲子并分析出它的拍子，也可以按定好的速度合成一段，并在打击点上加重音。

  5. 编排

  做一张时间表，写明每一格用哪种样式、什么配色、镜头在哪。这张表单独存放，以后调节奏只改它。

  编排的四条原则：

  - 开头交代变化：先给原画面，再过渡到粒子，让观众看懂发生了什么。
  - 快慢交替：一直快会麻木，中间要有一段明显慢下来的部分。
  - 配色要撞：相邻两格的颜色和样式反差越大，切换越有力。
  - 结尾要有收束：比如粒子越来越大直到变成色块，或者回到原画面。

  6. 关键时刻的反馈

  在打击点上叠加短促的反应，按轻重分级：

  - 每一次都有的轻反馈：粒子变形一下、镜头顶一下。
  - 较重时才有的中反馈：一部分粒子朝镜头弹开。
  - 最重的一两次才用的大反馈：时间静止，镜头环绕。

  原则是弱而短。只动一部分粒子，几帧内结束，否则画面炸成一片，观众就看不清主体在做什么了。

  贯穿全程的工作方法

  - 先小样后全片：每做完一个环节，先渲染几帧看效果，确认了再往下。全片只在最后渲染。
  - 拿不准的参数一次出一排：比如疏密，让 AI 同时出五六个档位并排放，你来挑。
  - 改哪里渲哪里：调整某一段时只重新渲染那一段。
  - 让 AI 自己看图：每一步都要求它把渲染结果打开看一遍再汇报。
  - 所有随机都固定：保证同样的设置每次渲染结果一致，否则没法逐步修改。
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/pluvio9yte-662953/poster.338ede46a5.webp" width="400" alt="Particle-Based Video Rebuilding from Footage with Depth Estimation">

*Source: @Pluvio9yte - [Post](https://x.com/Pluvio9yte/status/2107087191738662953)*

---

### 271. 15-Second Vertical Product Usage Guide with Remotion (1.2K views, 0 likes)
*Use Case: tutorial | Style: 2d, photo-based*

**Prompt:**
```
请在当前项目做一支 15 秒的产品使用说明视频，使用 Remotion，竖版 1080×1920、30fps、共 450 帧。只用 assets 目录里提供的商品图和我给出的事实，不下载陌生素材，不补销售数据。

第 0 至 3 秒展示商品与一句使用场景。第 3 至 9 秒演示两步操作，每步只出现一个动作。第 9 至 13 秒展示结果，并保留能看清的停留时间。最后 2 秒显示产品名称，不加购买引导。

先列分镜与素材缺口，再做预览。字幕单独排版，动效以当前帧号计算。不要用真实时钟驱动时间线，也不要使用不固定的随机数。商品、文字、镜头时间分别配置，方便以后替换。

交付可编辑项目、启动与渲染命令、MP4，以及第 1、5、10、14 秒的静帧。缺少必要素材时停止并说明，不用假素材代替。”
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/qianqiongge-246969/poster.32f18ca94d.webp" width="400" alt="15-Second Vertical Product Usage Guide with Remotion">

*Source: @qianqiongge - [Post](https://x.com/qianqiongge/status/2105902139902246969)*

---

## 13. Data Visualization

### 272. Portland Bus Transit System Data Visualization Animation (3.8M views, 20,545 likes)
*Use Case: data-viz | Style: 2d, infographic*

**Prompt:**
```
Create a video of Portland, OR's bus service on a random Tuesday! Showcase Portland's different neighborhoods at a high level and then zoom in on specific routes in each quadrant (absorbing North Portland into NE and South Portland into SW for brevity). Use a light theme. Slow down the speed of the bus animation when zoomed in, without increasing the total duration too much so the viewer can appreciate some of the landscape and streets it travels through in a given loop.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/milos-gis-317580/poster.49671e7853.webp" width="400" alt="Portland Bus Transit System Data Visualization Animation">

*Source: @milos_gis - [Post](https://x.com/milos_gis/status/2103751211040317580)*

---

### 273. Debris Flow Riverbed Sediment Accumulation 3D Visualization (15.6K views, 298 likes)
*Use Case: data-viz | Style: 3d, infographic*

**Prompt:**
```
Build a debris flow riverbed change calculation model. Create a visualization video showing where and how much sediment accumulated, using 3D illustrations or actual aerial photo-like textures. You can choose the terrain freely. Make it easy to see where deposition and flooding occur.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/kisaka-ki-859326/poster.815d0c91f0.webp" width="400" alt="Debris Flow Riverbed Sediment Accumulation 3D Visualization">

*Source: @kisaka_ki - [Post](https://x.com/kisaka_ki/status/2107054815255859326)*

---

## 14. Event Intros & Stings

### 274. Fox Chase Event 30-Second Hype Video with Music (3.0K views, 19 likes)
*Use Case: event | Style: 2d*

**Prompt:**
```
Make a dope polished 30 second video for our Mackenzie Club fox chase event using whatever tools you think are best. tessaract, etc. it should be all code (that's what people on X are saying). Cool music. Hype video. Use Tessaract or Remotion or whatever you think is best. Make it amazing and interesting.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/daverogenmoser-899271/poster.4b8e08cfe1.webp" width="400" alt="Fox Chase Event 30-Second Hype Video with Music">

*Source: @DaveRogenmoser - [Post](https://x.com/DaveRogenmoser/status/2103249424075899271)*

---

## 15. Other

### 275. Gravitational Lensing Interactive Black Hole Visualization (127.2K views, 684 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
I asked Opus 5.5 to explain gravitational lensing by building an interactive black hole lab

One prompt for the first version, then a dynamic workflow to polish it for three rounds while I slept. This is what I woke up to: 5h 28m end to end, $90 at API prices

https://blackhole.voxyz.ai

Drag the black hole and the sky behind it bends into arcs, closing into a full ring when everything lines up

Each round ran 3 agents. Two reviewers each picked 9 to 10 issues and ranked them P0, P1, P2. The third one fixed them.
Round 1: 3D materials and lighting + UI and type
Round 2: camera motion and interaction + science-communication design
Round 3: a design director deciding whether it ships + visual QA and performance

Every P0 got fixed, the rest only if worth it. When the two reviewers disagreed, it picked one and wrote down why. It backed up before each round, checked screenshots after, and rolled back anything it couldn't fix.
```

<img src="https://media.skillry.dev/opus-5-5/voxyz-ai-345550/original.a3843bd0f9.webp" width="400" alt="Gravitational Lensing Interactive Black Hole Visualization">

*Source: @Voxyz_ai - [Post](https://x.com/Voxyz_ai/status/2103117246860345550)*

---

### 276. Police Chase Top-Down Arcade Game Design Document (19.6K views, 228 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
PRD — Police Chase Arcade Game

Working title: Heatwave
Platform: iOS + Android
Engine: Unity
Genre: Top-down 3D arcade chase / survival
Orientation: Portrait
Input: One-thumb touch controls
Business model: TBD — design MVP around gameplay first
Primary goal: Build a genuinely fun playable prototype before adding progression or monetization.
⸻
Product vision
A fast, chaotic mobile arcade game where the player is constantly being pursued by increasingly aggressive police.
The player cannot directly attack.
Instead, they survive by driving aggressively, drifting around obstacles, making sudden turns and tricking pursuing police into crashing into obstacles and each other.
The fantasy is:
You’re not stronger than the police. You’re harder to catch.

Runs should produce constant near-misses, chain collisions and moments where the player escapes a seemingly impossible situation.

Think:

easy controls + aggressive pursuit + physics chaos + escalating pressure.

⸻

Core gameplay loop

START RUN
↓
DRIVE / DRIFT
↓
POLICE PURSUE
↓
BAIT POLICE
↓
DODGE
↓
POLICE CRASH
↓
GAIN SCORE
↓
WANTED LEVEL INCREASES
↓
MORE / HARDER POLICE
↓
SURVIVE
↓
EVENTUALLY GET CAUGHT
↓
SCORE / RESTART

Target run duration:

2–5 minutes.

Restart should take less than 2 seconds.

⸻

Design principles

3.1 One-thumb playable

The player should be able to understand the controls within seconds.
No accelerator.
No brake pedal.
No virtual steering wheel.
The vehicle moves automatically.
The player controls only direction.

(I moved away from this after testing it the first time and added the onscreen joystick)

3.2 Arcade physics, not simulation
Vehicles should:
drift
slide
bounce
spin
collide dramatically
recover quickly
Fun takes priority over physical accuracy.

3.3 Pursuers are weapons
Police are effectively the player’s offensive mechanic.
The player should learn:
“If I turn here, that cop is going straight into that wall.”
3.4 Chaos should remain readable

Even with 10+ vehicles on screen, the player must immediately understand:
where they are
where they’re moving

where police are coming from

what can kill them

3.5 Failure should feel fair

Death should generally result from a mistake the player understands rather than unpredictable physics.

⸻

MVP scope

Do not build progression, upgrades, missions or monetization for the first milestone.

The first version contains:

1 player vehicle

1 arena

1 police vehicle

1 elite police variant

5 wanted levels

physics collisions

environmental obstacles
scoring
player health
police destruction
basic VFX
basic audio

game-over screen

instant restart

That’s enough to determine whether the game deserves further development.

⸻

Player vehicle

Movement

Player vehicle uses a Rigidbody-based arcade controller.

Do not rely heavily on realistic WheelColliders.
Core variables should be exposed in the Unity Inspector:
Acceleration
Maximum Speed
Turn Speed
Turn Curve
Lateral Grip
Drift Factor
Vehicle Mass
Collision Force
Drag
Angular Drag
Recovery Speed
These need to be extremely easy to tune.

⸻

Controls

Recommended first implementation:

Drag steering

Player touches anywhere on the lower portion of the screen.

Dragging horizontally controls steering.

← drag          turn left
→ drag          turn right
Vehicle accelerates automatically.
Steering should be relative rather than absolute.
The player should be able to lift their finger without immediately losing control.
Alternative to prototype
Test:
Hold left/right side of screen = steer left/right.
Don’t commit until both have been tested on a physical phone.
⸻
Drift system
Drifting should happen naturally when turning at speed.
No dedicated drift button.
At low speed:
high traction

At high speed:

reduced lateral traction

This produces controlled sliding.

Long drifts can optionally award score.

Example:

DRIFT
+120
LONG DRIFT
+340

But drift scoring is secondary to police destruction.

⸻
Police AI
Police should feel:
aggressive, predictable and slightly stupid.
They should not simply follow the player’s current position.
Instead, calculate an interception target based on player velocity.
Conceptually:
target =
playerPosition
+
playerVelocity * predictionTime
Police therefore try to cut the player off.
⸻
Police intelligence

Police intentionally have limited obstacle avoidance.

This is important.

Perfect navigation would make the game less fun.

Police should:

pursue aggressively

attempt interception

avoid obvious static obstacles

poorly account for other police
overshoot turns

collide with each other

occasionally take dangerous routes

This creates opportunities for the player.

⸻

Police destruction

Police can be destroyed by:

high-speed obstacle collisions

hitting another police vehicle

chain collisions

environmental hazards

The player does not have weapons.

Example scoring:

COP SMASHED
+250
DOUBLE SMASH
+600
TRIPLE SMASH
+1,000
PILEUP!
+2,000

Chain collisions should be heavily rewarded.

⸻

Wanted system

Wanted level controls difficulty.

★☆☆☆☆
★★☆☆☆
★★★☆☆
★★★★☆
★★★★★

Wanted level increases based primarily on survival time and score.
Level 1
2 police.
Slow and forgiving.

Level 2

3–4 police.

Slightly faster.

Level 3

5–6 police.

More aggressive interception.

Level 4

7–9 police.

Elite police introduced.
Level 5
Maximum chaos.
10+ police depending on device performance.

Elite units appear frequently.

The game should eventually become effectively impossible.

That’s intentional.

⸻

Elite police

The MVP only needs one special police type.

Interceptor

Visually distinct vehicle.
Characteristics:
faster than standard police
lower mass
aggressive prediction
sharp steering
easier to destroy in collisions

This creates a glass-cannon pursuer.

⸻

Player health

Use a simple health bar.

Example:
HULL
██████░░░░
Minor impacts:
small damage.

Heavy impacts:

large damage.

Extremely high-speed impacts:
potential instant destruction.
Police contact alone shouldn’t immediately kill the player.
This allows chaotic scrambles.
⸻
Arena
First arena should be compact.
Something roughly equivalent to:

ROCK

┌─────────────┐
│             │
│   ROCK      │
│             │
│       ███   │
│             │
│ ROCK        │
│         ROCK│
└─────────────┘

Obstacles need enough space between them for high-speed movement.

Avoid procedural generation initially.

Hand-design one good arena.
⸻
Environment
For the first visual theme, I’d use something other than water so we’re not cloning the reference too closely.
My preference:

Desert outlaw chase

Player is an outlaw escaping through a stylized desert environment.

Environment contains:

rock formations

cacti

barriers

abandoned vehicles

ramps

fences

small buildings

dust

destructible props

It also fits the chunky visual language you’re already exploring with Bolt Pit.

⸻

Camera

Top-down perspective camera.

Not completely vertical.

Something approximately:

55–70° downward angle.

Camera follows player with smoothing.

Camera should look slightly ahead in the player’s travel direction.

At high speed:

camera pulls back slightly.

At low speed:

camera moves closer.

⸻
Camera juice
Small camera effects make a large difference.
Light collision
Tiny shake.

Heavy collision

Strong short shake.

Police destruction

Shake + tiny freeze frame.

Example:

50–100 ms hit stop.
Large pileup

Slight zoom impulse + shake + particles.

Don’t overdo continuous shaking.

⸻

Visual style

Chunky stylized 3D.

Characteristics:

simplified geometry

exaggerated proportions

bright readable vehicles

soft lighting

minimal textures

strong silhouettes

exaggerated particles
Avoid realistic vehicle proportions.
Cars should feel almost toy-like.
⸻
VFX
Minimum MVP effects:
Player
dust trail
tire/skid marks
drift smoke

impact sparks

Police

siren lights

smoke when damaged

destruction explosion

debris

Environment

dust

destructible objects

impact particles

⸻
Collision feedback
Every significant collision should combine:
physics + particles + audio + camera response.
Major police destruction:
IMPACT
→ physics impulse
→ vehicle fragments/debris
→ sparks
→ smoke
→ camera shake
→ hit stop
→ sound
→ score popup
This interaction is one of the game’s main sources of satisfaction.
⸻
Score system

Score comes from:

ActionExample
Surviving+10/sec
Police destroyed+250
Driftvariable
Near miss+100
Double collision+600
Triple collision+1,000
Large pileup+2,000

Exact values should remain configurable.

⸻

Near misses

Optional for MVP but potentially valuable.

Detect when a police vehicle passes extremely close to the player at high relative velocity.

Display:

CLOSE CALL! +100

This rewards risky driving.

⸻

UI

During gameplay keep UI extremely minimal.

SCORE                          COINS
13,590                          14
★★★☆☆
WANTED
GAME
HULL
████████░░

No minimap initially.

Off-screen police can use subtle edge indicators.

⸻

Game over

When hull reaches zero:

brief slow motion.

Player crashes.

Then:

BUSTED
SCORE
24,850
BEST
31,220
[ AGAIN ]

Tapping anywhere could restart.

Avoid unnecessary menus between runs.

⸻

Audio

The soundscape should sell speed and collisions.

Required:

engine

tire squeal

police sirens
impact
metal crunch
debris
destruction
UI score sounds
wanted level increase

Sirens should become increasingly chaotic as wanted level increases.

⸻

Technical architecture

Suggested Unity structure:

GameManager
Player
├── PlayerController
├── VehiclePhysics
├── PlayerHealth
└── PlayerEffects
Police
├── PoliceController
├── PoliceAI
├── VehiclePhysics
├── PoliceHealth
└── PoliceEffects
Systems
├── SpawnManager
├── WantedManager
├── ScoreManager
├── AudioManager
├── CameraManager
└── PoolManager
UI
├── HUD
├── WantedUI
├── ScoreUI
├── HealthUI
└── GameOverUI

Avoid building an elaborate framework.

⸻
Object pooling
Police, particles and debris should use object pooling.
Avoid frequent:

Instantiate()
Destroy()

during gameplay.
Mobile performance should be considered from the beginning.
⸻
Performance target

Target:

60 FPS
on a mid-range modern iPhone/Android device.
Initial limits:

~12 active vehicles

~100 simple debris/particles

simple shadows

limited real-time lights

Performance should be tested on device early.

⸻
Development milestones
Milestone 1 — Greybox driving
Build:
empty arena
cube player
touch steering
acceleration
drifting

camera

Success criterion:

Driving around an empty arena feels satisfying.

Do not continue until it does.

⸻
Milestone 2 — The chase
Add:
one police vehicle
pursuit AI
interception
collisions
Success criterion:

Dodging one police car is entertaining.

⸻

Milestone 3 — Emergent chaos

Add:

multiple police

police-police collisions

obstacles

destruction

scoring

Success criterion:

Player can intentionally cause:

police → police
and
police → environment
collisions.
This is the critical milestone.
⸻
Milestone 4 — Escalation

Add:

wanted levels

spawning

difficulty scaling

interceptor

Now a run has an arc:

calm
↓
pressure
↓
chaos
↓
panic
↓
death

⸻

Milestone 5 — Juice
Add:
particles
camera shake
hit stop
skid marks

dust

sirens

collision sounds

score popups

⸻

Milestone 6 — Mobile build

Build for real devices.
Test:
controls
performance
readability
battery/thermal behaviour
different screen ratios
⸻
Milestone 7 — Decide whether to continue

At this point, stop development temporarily.

Don’t immediately build a garage and 37 unlockable cars.

Put the build in front of people.

The important questions are:

Do people immediately understand it?
Do they restart after dying?
Do they intentionally try to make cops crash?
Does “one more run” happen naturally?
If not, work on the core loop rather than adding content.
⸻
Phase 2 — only after validation
If the prototype works, then expand into:
Cars
↓
Coins
↓
Unlocks
↓
Challenges
↓
New arenas
↓
Special police
↓
Upgrades
↓
Daily challenges
↓
Leaderboards
Potential environments:
desert
city
docks
snow
industrial yard
airport
construction site
military base
And then there’s room for ridiculous police units: SUVs, armored vans, helicopters dropping roadblocks, etc.

I have opened a @[Unity CLI installation] project which we can work in. The art style of the game should be fun and cartoony and the action also over the top.
I have imported the Topdown engine into the project as well that we can use:
https://topdown-engine.moremountains.com/

I want the game to be optimized for mobile, but should work on desktop while testing.
```

<img src="https://media.skillry.dev/opus-5-5/froessell-562325/original.eb54fc5e20.webp" width="400" alt="Police Chase Top-Down Arcade Game Design Document">

*Source: @froessell - [Post](https://x.com/froessell/status/2103789415323562325)*

---

### 277. Annecy France 3D Boat Journey Experience (8.0K views, 188 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
I wanted to see if beautiful destinations could become playable 3D experiences. Annecy, France became the prototype: a boat journey through canals, bridges, waterfront, and the mountain lake, built with Claude Opus 5.5 using Three.js + TSL.

I trimmed the navigation footage for the sake of keeping the video short and the post below below has a slightly longer version. The whole workflow behind this is simple:-
- Explained the concept to Opus and asked it to list some ideas.
- Shortlisted one and asked it to generate a prompt, with tech stack directions.
- Thats it, needed few iterations and is still a work in progress with few issues needing ironing. 
- The audio effects were added by Opus itself.
```

<img src="https://media.skillry.dev/opus-5-5/techartist-786274/original.701c9b781e.webp" width="400" alt="Annecy France 3D Boat Journey Experience">

*Source: @techartist_ - [Post](https://x.com/techartist_/status/2103933640392786274)*

---

### 278. GTA-Style 1990s City Game Build (4.8K views, 6 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
Can one developer + 3 AI agents build a GTA-style game?

I’m trying.

FIXER is a 1990s city game I’m building with Astra, Opus 5.5 and Fable.

This is the current playable build.
```

<img src="https://media.skillry.dev/opus-5-5/alex-vainshtein-195332/original.420b38c250.webp" width="400" alt="GTA-Style 1990s City Game Build">

*Source: @Alex_Vainshtein - [Post](https://x.com/Alex_Vainshtein/status/2104197450307195332)*

---

### 279. Interactive 3D Jet Engine from Intake to Exhaust (4.3K views, 3 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
Build me a jet engine in interactive 3D, from intake to exhaust, in one HTML file with Three.js.

Make it look real: the big front fan, the compressor stages, the combustion chamber glowing inside, the turbine and the nozzle. The fan and the shafts spin. I can drag to orbit around it and scroll to zoom.

Add an Explode button. When I press it, every part slides apart along the engine's axis with its name on a label. Press it again and it all snaps back together. When I hover a part, it lights up and shows one line on what it does.

No images. Do not ask me any questions. Just build it.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/aichrislee-479847/poster.9b9d3b295d.webp" width="400" alt="Interactive 3D Jet Engine from Intake to Exhaust">

*Source: @aichrislee - [Post](https://x.com/aichrislee/status/2106535528149479847)*

---

### 280. Deep-Sea Horror Game with Drone Soundtrack (3.6K views, 84 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
I asked opus 5.5 to make a game within the confines and abilities of my engine, no other prompt. It made this deep-sea horror game, with a subtle drone soundtrack. And it's terrifying (if a bit unbalanced/unfair). Sound on.
```

<img src="https://media.skillry.dev/opus-5-5/ggsimm-535814/original.87b91721f4.webp" width="400" alt="Deep-Sea Horror Game with Drone Soundtrack">

*Source: @ggsimm - [Post](https://x.com/ggsimm/status/2102882622053535814)*

---

### 281. BugSmash Casual 4MB Browser Game with Graphics (2.5K views, 12 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
Opus 5.5 releases 😍 

Me: Woahh! Let's drill through our BugSmash backlog quickly. 

My Co-founder @suhailpatel941: Hold my cup... let's make a game 🥲 

All this graphics and the game is just - 4MB game - hosted on BugSmash Drop itself 🤯
```

<img src="https://media.skillry.dev/opus-5-5/nqaze-939886/original.911e3e6823.webp" width="400" alt="BugSmash Casual 4MB Browser Game with Graphics">

*Source: @nQaze - [Post](https://x.com/nQaze/status/2103853898301939886)*

---

### 282. Neuroscience Study 60-Second Film and Interactive Lab (1.5K views, 13 likes)
*Use Case: None | Style: N/A*

**Prompt:**
```
Turn a 2025 neuroscience study about strangers' brain reactions to movies growing closer into a 60-second film and interactive lab. One HTML file.
```

<img src="https://media.skillry.dev/opus-5-5/_prompts/curieuxexplorer-590917/poster.3bf8afe744.webp" width="400" alt="Neuroscience Study 60-Second Film and Interactive Lab">

*Source: @CurieuxExplorer - [Post](https://x.com/CurieuxExplorer/status/2104801713840590917)*

---


## 📊 Data

The full dataset with all metrics, tags, and classifications is available in [`videos_filtered.json`](./videos_filtered.json).

## 🏷️ Tag System

Each video is tagged with:

- **Use Case:** launch, showreel, explainer, demo, ad, fun, story, game-fx, music, branding, social, tutorial, data-viz, event
- **Style:** 2d, 3d, hand-drawn, pixel-art, kinetic-type, particle, realistic, cartoon, minimal, retro, abstract, photo-based, infographic, glitch
- **Motion Score:** 0-100% confidence that the output is a motion video (vs. game, tool, or interactive demo)

## 📄 License

MIT
