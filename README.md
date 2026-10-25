# Awesome Claude Motion Graphics 🎬

**English** | [简体中文](./README.zh-CN.md)

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) [![GitHub stars](https://img.shields.io/github/stars/ZeroLu/awesome-claude-motion-graphics?style=social)](https://github.com/ZeroLu/awesome-claude-motion-graphics/stargazers)

> A curated collection of Claude motion graphics and code animation: videos, original prompts, and creator credits. Explore product launches, showreels, explainers, 3D, music videos, and more.

Cases come from X and [Karl’s AIwarts Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb). Prompts retain their source language; Chinese versions from Feishu appear alongside matching cases. Some entries are interactive demos or games, and some prompts require the creator’s reference files, music, or tools.

**304 cases · 303 playable videos · 17 categories · 37 Feishu records (22 added, 15 merged)**

View and like counts are snapshots inherited from the original collection, not live metrics. New cases without public metrics omit them. Videos use native GitHub attachment players where available; remaining cases retain their original preview or source link.

## Contents

1. [Product Launch Videos](#category-1)
2. [Showreels & Motion Design Portfolios](#category-2)
3. [Explainers & Knowledge Videos](#category-3)
4. [Technical Demos & Visualizations](#category-4)
5. [Ads & Marketing](#category-5)
6. [Fun & Creative Experiments](#category-6)
7. [Storytelling & Narrative Animation](#category-7)
8. [Game Effects & Cinematics](#category-8)
9. [Music Videos & Visualizers](#category-9)
10. [Branding & Logo Animation](#category-10)
11. [Social Media Content](#category-11)
12. [Tutorials & How-To](#category-12)
13. [Data Visualization](#category-13)
14. [Event Intros & Stings](#category-14)
15. [Other](#category-15)
16. [Visual Styles & Illustration](#category-16)
17. [Motion Principles & UI Handoffs](#category-17)

[Data & maintenance](#data) · [Credits & license](#credits)

<a id="category-1"></a>

## 1. Product Launch Videos

<a id="case-1"></a>

### 1. Modern AI Inference Startup Launch Video (350.9K views, 3,262 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/e4dd92bc-a86d-45f5-a832-5ec29b03ae28

<details>
<summary>Prompt · original</summary>

```text
make a modern slick and punchy video for a modern startup that works on inference
```

</details>

*Source: @deedydas · [X post](https://x.com/deedydas/status/2102787937482252537)*

---

<a id="case-2"></a>

### 2. GSAP and Three.js Product Motion Video Template System (127.2K views, 1,062 likes)

*Use case: launch · Style: 3d, minimal*

https://github.com/user-attachments/assets/6ca43c64-0356-43be-bf8b-46519680e222

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @everestchris6 · [X post](https://x.com/everestchris6/status/2104965415164399895)*

---

<a id="case-3"></a>

### 3. Professional SaaS Product Launch Video with Feature Showcase (97.5K views, 439 likes)

*Use case: launch · Style: 2d, photo-based, minimal*

https://github.com/user-attachments/assets/2cd3e7d9-1404-4d16-a1a2-e2341ea3f5e9

<details>
<summary>Prompt · original</summary>

```text
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

</details>

*Source: @moritzkremb · [X post](https://x.com/moritzkremb/status/2103066071838466494)*

---

<a id="case-4"></a>

### 4. Notion Column Permissions Feature Launch Trailer (54.5K views, 154 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/22f6e9a3-a110-42b0-9638-0f25ada17807

<details>
<summary>Prompt · original</summary>

```text
Last week, we launched column permissions!

I’m not on Notion’s video team, but with the help of @claudeai, @bot, and @NotionHQ, I made a trailer over the weekend. (How I made it in 🧵)

【作者补充制作说明】
🎬 BEHIND THE SCENES:

This was built using @Remotion (React/TypeScript only!), with @claude’s opus 5.5 [xhigh], orchestrated with @bot, and managed in a Notion doc as a working canvas.

In total, this project took ~90 messages with my @bot over 2 days, which generated 33 video takes with Claude Code and cost ~$400 in Claude credits including all the other takes (API billing but should fit fine in the $100/mo plan)

Here’s a Notion doc documenting the process (including many rejected candidates): https://notion.notion.site/column-permissions-trailer
```

</details>

*Source: @wustep · [X post](https://x.com/wustep/status/2104610435571884086)*

---

<a id="case-5"></a>

### 5. Minimal Product Video with Real Footage and Masked Type Reveals (53.5K views, 615 likes)

*Use case: launch · Style: 2d, photo-based, minimal*

https://github.com/user-attachments/assets/de5422b5-90b2-4428-9ee4-9be7480fcf73

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2102554209166000267)*

---

<a id="case-6"></a>

### 6. Professional SaaS Product Launch Video with Internet Assets (52.9K views, 286 likes)

*Use case: launch · Style: 2d, photo-based, minimal*

https://github.com/user-attachments/assets/8b3afe67-3356-4c69-b08a-6d32e5bc7491

<details>
<summary>Prompt · original</summary>

```text
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

</details>

*Source: @pbteja1998 · [X post](https://x.com/pbteja1998/status/2103176101497651644)*

---

<a id="case-7"></a>

### 7. 30-Second Developer Portfolio Showreel with Product Screenshots (48.1K views, 162 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/4c99660f-daff-46af-b920-6c3621b86601

<details>
<summary>Prompt · original</summary>

```text
Make a dynamic 30-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.  Make it a video to introduce
https://
mdfor.dev Use actual product screenshot/logo/assets Must have music and motion must match the music  Do it like a real professional production video, not like a demo or prototype. Add more animation and motion design; avoid using screenshots as raw; instead, break them down into components/icons so we can animate those too. Make the motions more juicy. Use the best motion design techniques you can.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段动感十足的30秒动态图形视频，展现你作为动效设计师的非凡实力，就像用于简历的作品集展示片。全力以赴。把它做成一支介绍 https://t.co/xdCXEdKZRq 的视频。使用真实的产品截图、标志和素材。必须有音乐，而且动效必须与音乐匹配。按照真正的专业制作视频来做，不要像演示或原型。加入更多动画和动效设计；避免直接使用原始截图，而是把截图拆解为组件或图标，这样也能对它们做动画。让运动效果更饱满、更有冲击力。使用你能做到的最佳动效设计技巧。
```

</details>

*Source: @HO_BA · [X post](https://x.com/HO_BA/status/2103845264649761062) · [Feishu N05](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-8"></a>

### 8. BridgeMind AI Product Introduction Motion Video (33.3K views, 557 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/8ddb0881-14da-4b1a-b922-02020a852a5e

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5 just created this merch launch video for BridgeMind using Remotion.

The taste on this model is insane. The transitions, the timing, the branding. Better than anything I have gotten from Fable 5.1 or GPT 6 Astra.

Go cop your BridgeMind hoodie. Link below.
```

</details>

*Source: @bridgemindai · [X post](https://x.com/bridgemindai/status/2102462889160286423)*

---

<a id="case-9"></a>

### 9. Product Promo Motion Graphics with Beat-Synced Transitions (31.1K views, 5 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/55d4abec-3964-4660-b873-163f2913a0cb

<details>
<summary>Prompt · original</summary>

```text
the introduction made with opus 5.5 + remotion

introducing @TryGofy — the live map of everything.

#shipaton #BuildInPublic #gofy #gofyapp
```

</details>

*Source: @heymrzak · [X post](https://x.com/heymrzak/status/2103768331782349060)*

---

<a id="case-10"></a>

### 10. Medical Records App Promo with Remotion and Gemini TTS (26.5K views, 150 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/1b4d8d4f-1ebf-496a-a496-fa660e51d2da

<details>
<summary>Prompt · original</summary>

```text
／
通院メモリー
iOS版リリースしました！
＼
#個人開発

審査は通ってたのですが、動画制作に手間取ってました…😇
Opus5.5/Remotion/Gemini APIで作ったら爆速。笑

お子さんがいる方や家族の通院や服薬管理がしたい方、ぜひリプ先のリンクからインストールしてみてください🙌
```

</details>

*Source: @seri_nonnon · [X post](https://x.com/seri_nonnon/status/2106192761632231813)*

---

<a id="case-11"></a>

### 11. Modern Inference Startup Launch Video in Pure Code (24.8K views, 6 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/5172f3dc-f760-48e4-94b8-ee01630884ab

<details>
<summary>Prompt · original</summary>

```text
make a modern slick and punchy video for a modern startup that works on inference

no video gen model, no additional libraries.
```

</details>

*Source: @lepadev · [X post](https://x.com/lepadev/status/2103101681806475414)*

---

<a id="case-12"></a>

### 12. Single Canvas UI State Morphing with Cursor-Driven Transitions (17.7K views, 239 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/53cae3de-13e9-4752-a847-4e2426764aaa

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @verbove · [X post](https://x.com/verbove/status/2103483957266268381)*

---

<a id="case-13"></a>

### 13. Nightshift Product Launch with Sunrise Crossfade Animation (14.7K views, 191 likes)

*Use case: launch · Style: 2d, photo-based, minimal*

https://github.com/user-attachments/assets/5467197e-73d7-4564-b2e5-7a3dcbd6d446

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2105927781678747965)*

---

<a id="case-14"></a>

### 14. M3E Canvas Conference Video with Remotion and Three.js (14.6K views, 241 likes)

*Use case: launch · Style: 3d, 2d*

https://github.com/user-attachments/assets/ab16d5c9-88c5-4ab4-810d-f1e8e5d49c3e

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5が凄すぎる…！
Remotion × three.jsでM3E Canvasの動画を作ってみた👇️
```

</details>

*Source: @lnkiai · [X post](https://x.com/lnkiai/status/2103759350330544254)*

---

<a id="case-15"></a>

### 15. Elysia Framework Documentation Promo with WebGL Canvas (11.3K views, 444 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/df5e6d29-c2e2-4cc2-b4d3-49640f3422d9

<details>
<summary>Prompt · original</summary>

```text
Feed Elysia doc to Opus 5.5 to make a video

I write a storyboard, references, and direct Opus 5.5 to code a WebGL canvas and export it by frame into a video

Music and SFX are algorithmic music

Took 13 revisions, but everything is code that can be modified
```

</details>

*Source: @saltyAom · [X post](https://x.com/saltyAom/status/2104677989728620933)*

---

<a id="case-16"></a>

### 16. MotionSites AI 1M Visitors Launch Video (10.8K views, 109 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/1a90555f-f173-40c8-b3ab-f72768716f84

<details>
<summary>Prompt · original</summary>

```text
Create a launch video for MotionSites AI, just hit 1 million monthly visitors after 8 months after launch.
```

</details>

*Source: @viktoroddy · [X post](https://x.com/viktoroddy/status/2103802280617402509)*

---

<a id="case-17"></a>

### 17. Professional SaaS Product Launch Video (6.8K views, 85 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/176a3651-4a90-4c32-866b-779a45748e0a

<details>
<summary>Prompt · original</summary>

```text
I want you to create a highly professional SaaS product launch video. Go and look up [website] Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things). It should show what an incredible motion designer you are, like it's your showreel for a resume. Go all out.
```

</details>

*Source: @gouthamjay8 · [X post](https://x.com/gouthamjay8/status/2103816261339910269)*

---

<a id="case-18"></a>

### 18. Product Launch Wordmark Animation with Music (6.2K views, 35 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/9169959b-41f4-46b7-a8ec-1bc590a01543

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @0xnicc0 · [X post](https://x.com/0xnicc0/status/2107217691505516612)*

---

<a id="case-19"></a>

### 19. 9-Beat Launch Video Structure: Pain to CTA (5.3K views, 63 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/02988e61-91f7-4724-9d34-9c41aee723da

<details>
<summary>Prompt · original</summary>

```text
Write my launch video as 9 beats: pain, reframe, name, how it works, objection, range, mechanism in numbers, offer, CTA – one line each. For every beat write 3 headline options and send them to Jev to pick the one that best fits my brief. Build each beat as a wireframe first in HyperFrames: boxes, outlined text, guide lines, no color. Show me one still per beat and lock the timing. Then skin it from my DESIGN.md without moving the layout, and render a split view: final on the left, wireframe on the right.
```

</details>

*Source: @ArchiveExplorer · [X post](https://x.com/ArchiveExplorer/status/2106732275685560622)*

---

<a id="case-20"></a>

### 20. Product Introduction Promo Animation Video (Chinese) (4.4K views, 21 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/bca2e8ee-418b-41a8-b426-c5ec1df1a72d

<details>
<summary>Prompt · original</summary>

```text
设计个动画，介绍本项目的各项特性，像是专业的产品介绍宣传片，最后要生成 16:9 的mp4 视频
```

</details>

*Source: @ezshine · [X post](https://x.com/ezshine/status/2103501705698750731)*

---

<a id="case-21"></a>

### 21. TanStack AI Developer Tool Launch Film (4.4K views, 25 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/40e16b3a-bb67-49fb-a409-8cc3300df5fa

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @HowDevelop · [X post](https://x.com/HowDevelop/status/2103840883812733090)*

---

<a id="case-22"></a>

### 22. Taxtello Bookkeeping App Product Film (4.2K views, 12 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/22a03d93-2a60-4ecc-86c4-f7583f631f49

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @daniel_haida · [X post](https://x.com/daniel_haida/status/2104139720829636937)*

---

<a id="case-23"></a>

### 23. Professional SaaS Product Launch Video with Motion Graphics (3.2K views, 19 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/8236e8b9-ab4b-4325-b116-087b3ca6ce42

<details>
<summary>Prompt · original</summary>

```text
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things)

http://
t3pacademy.gumroad.com
```

</details>

*Source: @techyoutbe · [X post](https://x.com/techyoutbe/status/2103465227807588678)*

---

<a id="case-24"></a>

### 24. Brand Feature Launch Video Under 20 Seconds (3.1K views, 29 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/ebb6727c-ee2d-4dbc-b333-7207d6c7e7e8

<details>
<summary>Prompt · original</summary>

```text
build me a beautiful launch video 20 seconds or under that shows all our key features, make it fast paced and fit our brand
```

</details>

*Source: @RatheeJaisal · [X post](https://x.com/RatheeJaisal/status/2103774864742154698)*

---

<a id="case-25"></a>

### 25. Sahi Trading Terminal Aesthetic Scale-In Animation (2.7K views, 23 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/d3c0eeda-043d-4fba-98ef-403514108313

<details>
<summary>Prompt · original</summary>

```text
create a self contained aesthetically pleasing, breathtaking animation of the Sahi Trading Terminal. it should start with a single dot on a black screen and then have multiple windows show up on the screen such as Charts, Positons , Option Chain, Watchlist. And zoom into and out at multiple scales. Finally the camera zooms out to make the desktop look like a point in space. And then it zooms back in to reveal a mobile screen in landscape mode with a chart in one half and an option chain in another. The video ends in Sjngle Screen Trading on SAHI
use javascript for it. be detailed and accurate. it should be visually stunning
0:46
```

</details>

*Source: @dale_vaz · [X post](https://x.com/dale_vaz/status/2103290592679879074)*

---

<a id="case-26"></a>

### 26. Professional Product Launch Video with Royalty-Free Music (2.3K views, 12 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/cc61a90d-3d84-41bd-b8e9-9ee3948ed75f

<details>
<summary>Prompt · original</summary>

```text
Create a professional product launch video with motion graphics. You have access to the designs in pen

Follow-up:
It is better, but can you choose a royalty-free song online? You are clearly not a good song maker. Also, I would not hire you or pay you for this as a motion designer. This is not a professional-looking video. Also, it is a bit too fast and bumpy
```

</details>

*Source: @sachaarbonel · [X post](https://x.com/sachaarbonel/status/2103614797501673648)*

---

<a id="case-27"></a>

### 27. 3D Tokyo Tower PR Video in 5 Minutes (2.3K views, 15 likes)

*Use case: launch · Style: 3d, realistic*

https://github.com/user-attachments/assets/079d7dc6-c8a3-4dca-a5c9-d88a3aadbd8a

<details>
<summary>Prompt · original</summary>

```text
※デザイナーの仕事がなくなりました。

Claude Opus 5.5に3Dモデルで東京タワーの映像を作らせた結果、5分でこのクオリティをポン出し

PR動画やYouTube動画制作など、複数の案件もこれ一つで全てこなせます。

具体的な作り方は記事で解説↓
```

</details>

*Source: @Maruo_0314 · [X post](https://x.com/Maruo_0314/status/2104159752095998343)*

---

<a id="case-28"></a>

### 28. Product Intro Video with Music Sync for Ultracode (1.8K views, 8 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/a2b8d348-bd29-47db-9599-fbaf0a9f61c1

<details>
<summary>Prompt · original</summary>

```text
Create an intro for https://t.co/wQXZTaqf1b highlighting what it does.

Create the music too and make sure the video is synced with it.

Give your best, Ultracode, as if it’s your portfolio master piece.
```

</details>

*Source: @BogdanDragomir · [X post](https://x.com/BogdanDragomir/status/2104045641538412658)*

---

<a id="case-29"></a>

### 29. Anti-LinkedIn Launch Video with Remotion (1.8K views, 25 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/535761ab-d7c5-455b-8e8a-19d6732bbd26

<details>
<summary>Prompt · original</summary>

```text
I hate LinkedIn so much that I had Opus 5.5 + remotion make a launch video about it.

I am building on @X, NOT LarpedIn (officially)
```

</details>

*Source: @MaxHirsch13 · [X post](https://x.com/MaxHirsch13/status/2107985883949600983)*

---

<a id="case-30"></a>

### 30. CLIProxyAPI Promo Video with Remotion (1.6K views, 1 likes)

*Use case: launch · Style: 2d, infographic*

https://github.com/user-attachments/assets/13a9ae00-47d0-47cc-8694-d56ec801fb6c

<details>
<summary>Prompt · original</summary>

```text
哈哈,   别再急着买API, 用 CLIProxyAPI 盘活你的 AI 订阅这篇文章的视频版宣传片来了

全程使用 Opus 5.5 + remotion 制作

感觉还不错的 ,  把流程环节都给讲清楚了
```

</details>

*Source: @0xlangeai · [X post](https://x.com/0xlangeai/status/2106391068367597929)*

---

<a id="case-31"></a>

### 31. Hoplite Feature Launch Video for Cloud Agent Transfer (1.6K views, 36 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/c2170f9d-5db3-45c0-aeb8-d2b0a7c5e435

<details>
<summary>Prompt · original</summary>

```text
using the existing brand elements of hoplite create a feature launch video for closing your laptop with the hoplite mac app and seamlessly moving your agents to the cloud.
```

</details>

*Source: @ryan_morr · [X post](https://x.com/ryan_morr/status/2104249941136666741)*

---

<a id="case-32"></a>

### 32. DualSense Studio Launch Video with Remotion (1.5K views, 5 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/7573bf23-f5ec-4f0f-85a1-1162c5bd346b

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5 made this launch video for https://dualsense.studio using Remotion.

A few rough edges, but honestly I'm impressed 🤯
```

</details>

*Source: @SafaElmali · [X post](https://x.com/SafaElmali/status/2102749298673004843)*

---

<a id="case-33"></a>

### 33. Scroll Plus Product Promo Video with Remotion (1.5K views, 9 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/de1f171f-7f14-4bd3-a750-0a5344491b84

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 ve remotion ile scroll+ için bir tanıtım videosu hazirlattım.

Bence çok iyi yaptı.

@scroll_plus

https://scroll.pics
```

</details>

*Source: @xenit_v0 · [X post](https://x.com/xenit_v0/status/2106270979932532873)*

---

<a id="case-34"></a>

### 34. 30-Second Website Launch Showreel Video (1.3K views, 9 likes)

*Use case: launch · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/fc93f7d7-e51d-4275-90ed-c79560d95eef

<details>
<summary>Prompt · original</summary>

```text
Create a dynamic 30sec launch vdo for your site url here. Make it feel like a high-end motion designer’s resume/showreel piece, bold, cinematic, polished, and visually impressive. Showcase the website’s identity, UI, features, and overall concept through fast-paced motion graphics, smooth transitions, kinetic typography, creative camera movements, and strong visual storytelling.

Go all out with the motion design. Make every second feel intentional and demonstrate exceptional creativity, timing, composition, and animation quality. The final video should feel like a professional product launch + motion design showreel, not a generic website promo.
```

</details>

*Source: @deeprajO1 · [X post](https://x.com/deeprajO1/status/2104490501340623150)*

---

<a id="case-35"></a>

### 35. Koto Search SEO Tool Automated Release Video (1.2K views, 4 likes)

*Use case: launch · Style: 2d, infographic*

https://github.com/user-attachments/assets/5854e9a3-21be-4251-bb81-409fd3352d78

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @tetsu_tetsu333 · [X post](https://x.com/tetsu_tetsu333/status/2106177888265576886)*

---

<a id="case-36"></a>

### 36. Slideforge SaaS Product Launch Video (1.2K views, 10 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/41225713-b102-4d76-8912-71982420c7c1

<details>
<summary>Prompt · original</summary>

```text
I want you to create a highly professional SaaS product launch video for Slideforge. You can find its details in https://slideforge.io. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

</details>

*Source: @techtactician · [X post](https://x.com/techtactician/status/2103219463508144474)*

---

<a id="case-37"></a>

### 37. Professional SaaS Product Launch Video with Real Assets (1.1K views, 11 likes)

*Use case: launch · Style: 2d, minimal*

https://github.com/user-attachments/assets/d0417e2c-2278-4af2-a73b-012fb695f68a

<details>
<summary>Prompt · original</summary>

```text
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

</details>

*Source: @hSanat · [X post](https://x.com/hSanat/status/2103358205091012699)*

---

<a id="case-292"></a>

### 292. Enxovaly Baby Essentials App Promo

*Use case: launch · Style: 2d*

https://github.com/user-attachments/assets/277c15b6-da15-41f8-990b-b1d8253d3b53

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段动感十足的15秒动态图形视频，展现你作为动效设计师的非凡实力，就像用于简历的作品集展示片。全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N01](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-293"></a>

### 293. Dub SaaS Launch Film

*Use case: launch · Style: 2d*

https://github.com/user-attachments/assets/32b8445b-e14f-45e1-aaec-5f253c36a01b

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video showing your extraordinary abilities as a motion designer, like a resume showreel. Go all out. It should be a SaaS launch video for https://dub.co.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段动感十足的15秒动态图形视频，展现你作为动效设计师的非凡实力，就像用于简历的作品集展示片。全力以赴。
它应当是一支为 https://dub.co 制作的 SaaS 产品发布视频。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N03](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-294"></a>

### 294. BlueVisa Travel Services Promo

*Use case: launch · Style: 2d*

https://github.com/user-attachments/assets/e72dc6a8-6640-408d-bc60-68a93aed8e1b

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段动感十足的15秒动态图形视频，展现你作为动效设计师的非凡实力，就像用于简历的作品集展示片。全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N04](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-2"></a>

## 2. Showreels & Motion Design Portfolios

<a id="case-38"></a>

### 38. Single Shape Morphing Through 12 UI States Motion Graphic (1.2M views, 12,676 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/003c9b0e-e7fb-4f6f-a83e-6f88257968b5

<details>
<summary>Prompt · original</summary>

```text
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

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
【输入材料】
先向我索取：希望这个形状变成的8–12种界面状态（例如按钮、加载器、播放器、滑块、开关、标签页、图表、命令面板、提示通知）；纯黑白配色或一种强调色；以及一首约120 BPM、可免版税使用的歌曲（例如Mixkit，允许商业使用）。
【创作方向】
达到Dribbble级别的界面动效。只用一个形状，不切镜：每种状态都是同一个元素通过尺寸、圆角和颜色变化形成；内部内容切换时带短暂模糊。光标通过真实点击和拖动驱动每次变化。浅暖灰画布，黑白组件，统一使用清爽的Geist界面字体。各处采用弹簧运动，最多有轻微过冲。镜头缩放，让每种状态占满画面。最后一帧与第一帧相同，形成循环。
禁止：过度弹跳的缓动、粒子爆发、发光、界面外框上的渐变、不一致的图标线宽、空白停顿，以及任何模板感。
【片段结构】
120 BPM，共7小节，每一拍都有变化。
按钮→加载器→勾选标记→灵动岛→音乐播放器（播放/暂停图标形变）→拖动进度条→变成音量滑块，拖过最大值时拉长→开关随节拍切换→旋钮变成液态标签指示器→标签展开成自动绘制的图表，悬停显示提示→收缩成⌘K命令面板→输入筛选→回车→提示通知→返回按钮。
【制作要求】
1. 一个1440×1440的方形HTML文件。所有样式在seek(t)中按时间计算；不用CSS过渡、定时器，也不在帧之间携带状态。
2. 弹簧使用闭式阶跃响应。数值多次改变目标时，叠加每次变化的弹簧响应，始终保持为时间的纯函数。
3. 标签指示器的两条边使用不同弹簧，让前缘领先后缘伸展。开关旋钮使用同样方法。
4. 拖动采用直接操作：光标按住时，根据光标位置计算数值；松开时，从当前位置以弹簧方式回弹。
5. 用numpy分析歌曲的节拍网格，从强拍开始。每个界面音效按实测峰值放置。
6. 用Playwright渲染，每帧4个子帧，用ffmpeg tmix混合产生运动模糊，60fps。
7. 完整渲染前，先每拍渲染一帧；修复没对上拍点、拥挤或难以阅读的地方。
【注意事项】
不要对被镜头缩放的元素使用will-change，否则文字会模糊。形变容器内切换文字时，文字需要独立的进出时间，否则会重叠。最后一帧必须与第一帧完全一致，包括光标位置和速度，否则循环会顿一下。
【开始方式】
先向我索取输入材料，再把各界面状态在节拍网格上的安排展示给我，然后才开始写代码。
```

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2103273003555402193) · [Feishu PM01](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-39"></a>

### 39. Hand-Drawn Agent Story and Kinetic Type Showreel Comparison (119.3K views, 1,470 likes)

*Use case: showreel · Style: hand-drawn, kinetic-type, particle*

https://github.com/user-attachments/assets/60906184-ec08-4436-b399-f3627b0ca684

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5: a hand-drawn story. a little agent wakes up at its desk, gets feedback notes, fixes them, ends on heart eyes and a green check. 53 s
Sonnet 5.5: a kinetic type showreel. six easing curves, a morphing star, particles, blurred type, "every frame written in code". 15 s
Haiku 5.5: a step-by-step White Russian recipe. ice, vodka, coffee liqueur, cream, with live counters and a checklist. 30 s
```

</details>

*Source: @N01ennn · [X post](https://x.com/N01ennn/status/2108520767092597182)*

---

<a id="case-40"></a>

### 40. Distilbook Product Showreel Motion Graphics Video (109.0K views, 641 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/93a18ede-164b-4fb1-bb8b-fd69ae9a2da6

<details>
<summary>Prompt · original</summary>

```text
Research Distilbook.Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
```

</details>

*Source: @ajith_io · [X post](https://x.com/ajith_io/status/2103469807375208546)*

---

<a id="case-41"></a>

### 41. 15-Second Product Motion Graphics Showreel (102.3K views, 988 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/1ff402ce-d498-468b-91d1-ae527f78472e

<details>
<summary>Prompt · original</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are. The content should focus on [your product]. You should visit the pages first to learn about the product, then write the video content yourself.
```

</details>

*Source: @ann_nnng · [X post](https://x.com/ann_nnng/status/2103723183899852885)*

---

<a id="case-42"></a>

### 42. 15-Second Motion Graphics Showreel Demo (53.3K views, 44 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/62450c23-2f53-4e0b-bbdd-784cf15f8e74

<details>
<summary>Prompt · original</summary>

```text
make a 15-second motion graphics showreel that proves what an incredible motion designer you are, go all out.
```

</details>

*Source: @RoundtableSpace · [X post](https://x.com/RoundtableSpace/status/2104424611010232366)*

---

<a id="case-43"></a>

### 43. Distilbook Motion Graphics Showreel Video (42.8K views, 159 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/a0affe97-c96d-40a5-91ff-e4bee18ec086

<details>
<summary>Prompt · original</summary>

```text
Research Distilbook.Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
```

</details>

*Source: @itisRazak · [X post](https://x.com/itisRazak/status/2103517930424332386)*

---

<a id="case-44"></a>

### 44. UI State Morphing Motion Graphic with Shape Transitions (30.1K views, 269 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/e5cfa34e-7389-403c-9f45-b8373778fb96

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @__morse · [X post](https://x.com/__morse/status/2103485566570369333)*

---

<a id="case-45"></a>

### 45. Developer Tool Launch Video with Feature Highlights (29.5K views, 86 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/4fefb140-a35b-44d4-90a7-679788aa6e2a

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are for <website url>
```

</details>

*Source: @melvynx · [X post](https://x.com/melvynx/status/2103714680577638493)*

---

<a id="case-46"></a>

### 46. 15-Second Motion Designer Showreel Video (25.9K views, 119 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/a65c6a7d-0e4d-4636-b72d-2dc8ff83c6d6

<details>
<summary>Prompt · original</summary>

```text
制作一段 15 秒的动态图形视频，展示你作为动态设计师的非凡实力。
```

</details>

*Source: @dotey · [X post](https://x.com/dotey/status/2104649290668773568)*

---

<a id="case-47"></a>

### 47. 15-Second Showreel with Synthesized Code-Based Soundtrack (14.9K views, 206 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/bf2b66b5-3cea-40ad-b4f0-da8d9b4f9b4b

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.

compose the soundtrack yourself, fully synthesized in code. no samples, no audio files, no VST instruments. every cut and transition must land on the beat.

1920x1080, 60fps. render the final video with the music mixed in as an MP4 and tell me where it's saved.
```

</details>

*Source: @prasenx · [X post](https://x.com/prasenx/status/2103538744695693512)*

---

<a id="case-48"></a>

### 48. Distilbook 30-Second Showreel with Reference Visual Style (13.6K views, 61 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/f7183622-4fe9-44c0-861c-ce6ecafccc00

<details>
<summary>Prompt · original</summary>

```text
Take reference from the given video (download it) and use the same visual style.
and Research about Distilbook. Make a dynamic 30-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
One thing to keep in mind: it should be cool as fck.
```

</details>

*Source: @ajith_io · [X post](https://x.com/ajith_io/status/2103541149709615243)*

---

<a id="case-49"></a>

### 49. Overthinking Concept Motion Graphics Showreel (10.9K views, 69 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/aaa2420d-4d73-4611-9d42-a6bd27992f43

<details>
<summary>Prompt · original</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it’s your showreel exploring the concept of “Overthinking,” inspired by the attached graphics.
```

</details>

*Source: @gizakdag · [X post](https://x.com/gizakdag/status/2103566030916239768)*

---

<a id="case-50"></a>

### 50. 15-Second Dynamic Motion Graphics Showcase (Chinese) (9.9K views, 61 likes)

*Use case: showreel · Style: 2d, abstract*

https://github.com/user-attachments/assets/56f85abd-3d02-463a-b37d-ec240f0f99d9

<details>
<summary>Prompt · original</summary>

```text
以动态设计师的高级审美，制作一段动态的15秒动态图形视频
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
以动态设计师的高级审美，制作一段动态的15秒动态图形视频
```

</details>

*Source: @ChatGptAstra · [X post](https://x.com/ChatGptAstra/status/2103834787647807540) · [Feishu N06](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-51"></a>

### 51. 15-Second Motion Graphics Portfolio Showreel (8.6K views, 73 likes)

*Use case: showreel · Style: 2d, 3d, kinetic-type*

https://github.com/user-attachments/assets/d0533c5c-bdc8-494c-9cfe-585b1aad2286

<details>
<summary>Prompt · original</summary>

```text
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, particles, distortion, creative masking, compositing, lighting, depth, and seamless camera movement. Keep the pacing fast, confident, and visually surprising, with every shot transitioning naturally into the next. Make it feel meticulously art-directed rather than like a random collection of effects. Push the creativity, polish, timing, and visual impact as far as possible. This should feel like the opening reel that gets a motion designer hired.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一支大胆、动感十足的15秒动态图形展示片，让它像一位极具天赋的动效设计师最出色的作品集作品。展示广泛的高级技巧：动态字体、流畅转场、二维与三维动画、抽象几何、流体模拟、粒子、扭曲、创意遮罩、合成、灯光、景深，以及无缝的镜头运动。节奏要快速、自信，并在视觉上不断制造惊喜，每个镜头都要自然过渡到下一个镜头。让它呈现出精心设计的美术指导，而不是随机堆砌特效。尽可能提升创意、精致度、时机把控和视觉冲击力。这应当像一支能让动效设计师获得工作机会的开场展示片。
```

</details>

*Source: @lukasersil · [X post](https://x.com/lukasersil/status/2103742861971726495) · [Feishu N07](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-52"></a>

### 52. Motion Designer Skills Showcase Reel (7.4K views, 20 likes)

*Use case: showreel · Style: 2d*

https://github.com/user-attachments/assets/2fb8c8ad-583d-4c61-bcdd-924190907960

<details>
<summary>Prompt · original</summary>

```text
Hello Opus 5.5 show me what an incredible motion designer you are.
```

</details>

*Source: @zheke · [X post](https://x.com/zheke/status/2103418664854622583)*

---

<a id="case-53"></a>

### 53. AI In Public 24-Second Motion Reel (5.9K views, 53 likes)

*Use case: showreel · Style: 2d, kinetic-type, particle*

https://github.com/user-attachments/assets/98c2559c-3906-4384-a741-d07785797dd6

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 on Max effort (Sound On):

"A 24-second AI In Public motion reel in Remotion at 1920×1080, 60fps. Use our blue # 3D40FE, white, navy, and ice palette with the AI In Public logo and sparkle. Keep it fast, premium, and smooth with motion blur, glow, camera hits, HUD details, seamless transitions, kinetic type, terminal UI, neural visuals, particles, and a cinematic logo finale. Generate all suspenseful music and sound effects in code and sync every hit perfectly. End with “AI IN PUBLIC, learning AI, out loud.” Every frame and sound should be written in code."

full prompt on here: http://ai-in-public.guide

then read the full guide below: ↓
```

</details>

*Source: @humzaakhalid · [X post](https://x.com/humzaakhalid/status/2106640261623537875)*

---

<a id="case-54"></a>

### 54. 40-Second Distilbook Motion Graphics Showreel (5.0K views, 62 likes)

*Use case: showreel · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/ab14a46f-6128-4c77-912f-820954ad4692

<details>
<summary>Prompt · original</summary>

```text
Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are, like it's your showreel - go all out. Use the Oppenheimer theme music as inspiration, but compose it yourself.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
研究 Distilbook。制作一段关于 Distilbook 的、动感十足的40秒动态图形视频，展现你作为动效设计师的非凡实力，就像你的作品集展示片一样。全力以赴。
```

</details>

*Source: @ajith_io · [X post](https://x.com/ajith_io/status/2103800569584562538) · [Feishu N02](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-55"></a>

### 55. 30-Second Looping Pencil Line Motion Showreel (4.1K views, 20 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/d5276dc1-0e76-4774-8deb-f88262de8c49

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @heyiamnick · [X post](https://x.com/heyiamnick/status/2109174851412119558)*

---

<a id="case-56"></a>

### 56. 15-Second Self-Introduction Motion Designer Video (Japanese) (4.0K views, 30 likes)

*Use case: showreel · Style: 2d, kinetic-type, particle*

https://github.com/user-attachments/assets/1d84ff7d-6a09-46cd-af5d-c0428b8d3468

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @tanabe_fragm · [X post](https://x.com/tanabe_fragm/status/2103802156675706979)*

---

<a id="case-57"></a>

### 57. Alchemy Infra Company Motion Graphics Showreel (4.0K views, 14 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/937a5d7c-4dc3-4e32-93b7-361ce3610eb3

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for the infra company https://alchemy.com, go all out!
```

</details>

*Source: @onewaysidewalks · [X post](https://x.com/onewaysidewalks/status/2103500011581440008)*

---

<a id="case-58"></a>

### 58. 20-Second Psychedelic Hypnotic Motion Showreel (3.9K views, 56 likes)

*Use case: showreel · Style: 2d, abstract*

https://github.com/user-attachments/assets/78d9e73a-c46c-4a1c-b6d8-c261d6a869cf

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 20-second motion graphics video that shows what an incredible motion designer you are, psychedelic and hypnotic. make it feel like a showreel piece. go all out.
```

</details>

*Source: @monokern · [X post](https://x.com/monokern/status/2103563538828832979)*

---

<a id="case-59"></a>

### 59. UI Component Shape Morph Motion Design (Japanese) (3.3K views, 10 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/8ffe620f-42c0-4c1d-9fb8-5d3dfb605bad

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @okapi_fukugyo · [X post](https://x.com/okapi_fukugyo/status/2103586082336166351)*

---

<a id="case-60"></a>

### 60. Alan AI 15-Second Motion Designer Showreel (3.1K views, 24 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/70e63b53-0a23-4106-873a-e9facb460ea6

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15 second motion graphics video that shows what an incredible motion designer you are, for
@tryAlanAI
. go all out.
```

</details>

*Source: @prasad_pilla · [X post](https://x.com/prasad_pilla/status/2103728953785496049)*

---

<a id="case-61"></a>

### 61. Opus 5.5 Self-Introduction 10-Second Motion Graphic (2.9K views, 42 likes)

*Use case: showreel · Style: 2d, abstract*

https://github.com/user-attachments/assets/3f7da217-9aaa-48b4-a910-e8e54798d7f3

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 10-second motion graphics video that shows who are you as Opus 5.5 - be as creative and dynamic as possible. Avoid the frames and texts on the corners which are typical ai made giveaways!
```

</details>

*Source: @1littlecoder · [X post](https://x.com/1littlecoder/status/2103587706999914649)*

---

<a id="case-62"></a>

### 62. 45-Second Vertical App Feature Showcase Video (2.5K views, 1 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/0374c7cd-792a-4819-bdb8-d66711c0ce30

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @Bilimfili1 · [X post](https://x.com/Bilimfili1/status/2103743617848459762)*

---

<a id="case-63"></a>

### 63. 4 Motion Videos in 3 Days Without After Effects (2.0K views, 30 likes)

*Use case: showreel · Style: 2d, 3d, minimal*

https://github.com/user-attachments/assets/186f4fca-c330-45c7-9b2a-9765289f0d1e

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @colecornelll · [X post](https://x.com/colecornelll/status/2105751866051047465)*

---

<a id="case-64"></a>

### 64. Animated UI Card with Scale-In and Graph Line Motion (1.9K views, 22 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/aa6d8c5e-9957-4669-bb9c-75c452120939

<details>
<summary>Prompt · original</summary>

```text
the card should scale in from 30% to 100% scale and it should go from Invisible to visible. every detail slide in orderly one after the other when the card settles in scale. the graph line animates in like a line path. the glow at the back becomes visible as the card details slides in. the two rectangles move accross the screen at slightly different timing giving it this light effect.
```

</details>

*Source: @Khlaseek_dsgner · [X post](https://x.com/Khlaseek_dsgner/status/2108167809997877659)*

---

<a id="case-65"></a>

### 65. Pure Function Per-Frame Video Pipeline with Beat Grid (1.8K views, 30 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/0335589b-8a78-4437-836b-5ed5e809eb8e

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @yankis0x · [X post](https://x.com/yankis0x/status/2103502194578174321)*

---

<a id="case-66"></a>

### 66. World-Class Designer Showreel Centerpiece Motion Graphic (1.8K views, 22 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/84f6a4f5-bdd1-458e-8cbf-bd12135a9e52

<details>
<summary>Prompt · original</summary>

```text
Create a motion graphics video that feels like the centerpiece of a world-class designer’s showreel. Treat it as your résumé: showcase your full range, push the craft as far as possible. Go all out.
```

</details>

*Source: @samuel_spitz · [X post](https://x.com/samuel_spitz/status/2103544855276503053)*

---

<a id="case-67"></a>

### 67. Pixelup Labs 15-Second Motion Graphics Showreel (1.8K views, 32 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/87dd5a0e-bb49-4b62-91d1-f419984db68c

<details>
<summary>Prompt · original</summary>

```text
create a 15 sec motion graphics showreel for @pixeluplabs, be extremely detail oriented and go all out
```

</details>

*Source: @arjunsh1607 · [X post](https://x.com/arjunsh1607/status/2104295133432922126)*

---

<a id="case-68"></a>

### 68. Cinematic 3D Iron Man Helmet in Three.js (1.8K views, 3 likes)

*Use case: showreel · Style: 3d, realistic*

https://github.com/user-attachments/assets/b5efbd71-2fa4-4490-8f2d-aa9d9603a86a

<details>
<summary>Prompt · original</summary>

```text
Create a visually stunning, silent 3D browser animation of Iron Man’s classic red-and-gold helmet, presented as a premium cinematic studio object.

Deliver a complete runnable HTML experience using Three.js.

COMPOSITION

One helmet only, floating in the center of the
```

</details>

*Source: @ivanainai · [X post](https://x.com/ivanainai/status/2107217500761190629)*

---

<a id="case-69"></a>

### 69. Developer Showreel Built with Remotion (1.7K views, 25 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/c370cf2f-b46c-45c4-bd57-0134b4891dc3

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @iammukeshm · [X post](https://x.com/iammukeshm/status/2103511739585421585)*

---

<a id="case-70"></a>

### 70. Deterministic 720-Frame Butterfly Animation with 6 Counters (1.7K views, 23 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/98aed5d1-9d3a-4950-8627-d75035ad5a0f

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @0xKarmi · [X post](https://x.com/0xKarmi/status/2108495927988129839)*

---

<a id="case-71"></a>

### 71. Flowdrive 15-Second Motion Designer Showreel (1.6K views, 6 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/d07a7ab9-75af-423c-aff8-de321923d36a

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a flowdrive. go all out.
```

</details>

*Source: @manuelogomigo · [X post](https://x.com/manuelogomigo/status/2103614667038052364)*

---

<a id="case-72"></a>

### 72. Seattle 15-Second Motion Graphics City Video (1.5K views, 25 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/41b23f42-8cf8-4cc0-beee-f4992e43882c

<details>
<summary>Prompt · original</summary>

```text
create a 15-second motion graphics video about Seattle ( sound on 🔊)

Everything from the visuals and animation to the music and final video was created directly by Claude. Every frame and every sound was created by code, from scratch.

No screen recording, editing software, stock footage, music samples, or AI image or video generators were used.
```

</details>

*Source: @yanliudesign · [X post](https://x.com/yanliudesign/status/2104393313935839698)*

---

<a id="case-73"></a>

### 73. Shape Morph Canvas Animation with Color and Radius Inputs (1.4K views, 16 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/883e66ad-d62f-4e85-8c90-ce5785a5ede5

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @flxrnc · [X post](https://x.com/flxrnc/status/2108242454105251921)*

---

<a id="case-74"></a>

### 74. 15-Second Studio Motion Design Reel with Orange Circle Through-Line (1.3K views, 5 likes)

*Use case: showreel · Style: 2d, kinetic-type, minimal*

https://github.com/user-attachments/assets/7e4aeb84-04d0-4bc5-83d1-0ef8bfd316b0

<details>
<summary>Prompt · original</summary>

```text
15s studio motion-design reel, 1920x1080.
Warm off-white, black type, one orange accent only.
A single orange circle with motion blur is the through-line and the cut.
Show: toggle click, the word Motion, shape morphs, dotted connector, rounded diamond, circular kinetic type (KINETIC TYPE · 3D · LOOPS · SPRINGS · EASING), dot grid, then the card “Opus 5.5 / Motion designer. / 0 keyframes”.
Springs, no glow, no particles, no default easing.
Looks like a refined product-studio showreel, not an AI trailer.
```

</details>

*Source: @threeaus · [X post](https://x.com/threeaus/status/2105152377057886343)*

---

<a id="case-75"></a>

### 75. 15-Second Moving Showreel for Motion Designer Resume (1.2K views, 4 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/71718435-6a9a-4001-8550-6bcf620fd439

<details>
<summary>Prompt · original</summary>

```text
Make me a 15-second moving video that shows how amazing of a motion designer you are. Like a showreel for your resume. Go all out.
```

</details>

*Source: @AiAircle34052 · [X post](https://x.com/AiAircle34052/status/2103663848846950750)*

---

<a id="case-76"></a>

### 76. Opus 5.5 Remotion Animated Motion Design Skills Showcase (1.2K views, 18 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/849c59f0-6600-43a9-b934-500e52dbe0da

<details>
<summary>Prompt · original</summary>

```text
Okay so this is it

Sound design is not so good, will work on that and give you a better one tmrw.

Here🏌️, Opus 5.5 and Remotion skills for animated motion designs
```

</details>

*Source: @saxxyweb3 · [X post](https://x.com/saxxyweb3/status/2104961677963690124)*

---

<a id="case-77"></a>

### 77. UI State Morphing Shape Animation with Accent Color (1.1K views, 10 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/0ae0202e-18e2-4967-9e29-fce89b3de91e

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @hiCallMeChai · [X post](https://x.com/hiCallMeChai/status/2103600312296878304)*

---

<a id="case-78"></a>

### 78. Minimalist Remotion Motion Graphics Video (1.0K views, 4 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/d911d7b5-46d2-4c36-bda1-35f8a9985f84

<details>
<summary>Prompt · original</summary>

```text
Remotion
Opus 5.5
```

</details>

*Source: @0xRapzz · [X post](https://x.com/0xRapzz/status/2106062139920433554)*

---

<a id="case-79"></a>

### 79. QuickDesign 15-Second Motion Graphics Showcase (1.0K views, 3 likes)

*Use case: showreel · Style: 2d, minimal*

https://github.com/user-attachments/assets/e734ebeb-f011-4abd-a844-cbbc9490243d

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15-second motion graphics video that shows what an incredible quickdesign is! and also  shows what an incredible motion designer you are!
```

</details>

*Source: @quickdesignio · [X post](https://x.com/quickdesignio/status/2103617779857338399)*

---

<a id="case-284"></a>

### 284. Stephan Livera 15-Second Motion Design Showreel

*Use case: showreel · Style: N/A*

https://github.com/user-attachments/assets/27f82784-c9d4-42d0-8243-94b37e66a75b

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一支15秒的动态图形视频，展示你作为动效设计师的出色能力，就像简历中的作品集展示片。尽情发挥，全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu M44](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-285"></a>

### 285. Ajith 15-Second Motion Design Showreel

*Use case: showreel · Style: N/A*

https://github.com/user-attachments/assets/3832a6f1-5a35-4e8b-b6b3-97edab3828f4

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一支15秒的动态图形视频，展示你作为动效设计师的出色能力，就像简历中的作品集展示片。尽情发挥，全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu M07](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-286"></a>

### 286. Shneural Motion Design Showreel

*Use case: showreel · Style: N/A*

https://github.com/user-attachments/assets/bf566297-864d-4721-841d-7af67b9491c5

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一支15秒的动态图形视频，展示你作为动效设计师的出色能力，就像简历中的作品集展示片。尽情发挥，全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu M08](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-3"></a>

## 3. Explainers & Knowledge Videos

<a id="case-80"></a>

### 80. Interactive Raptor 3 Rocket Engine Explainer with Cutaway Animation (1.2M views, 8,391 likes)

*Use case: explainer · Style: 3d*

https://github.com/user-attachments/assets/4c5a5b90-6c08-4d5f-ac00-ba107285bf18

<details>
<summary>Prompt · original</summary>

```text
I asked Claude Opus 5.5 to explain how a rocket engine works by building an interactive Raptor 3 you can take apart in your browser.

Cut it open, follow the oxygen and the methane through both turbopumps, then throttle it and watch the shock diamonds move.

http://airsup.ai/rocket-engine
```

</details>

*Source: @konstantinsaifo · [X post](https://x.com/konstantinsaifo/status/2104094723887501736)*

---

<a id="case-81"></a>

### 81. Animated UX Decision Interview Presentation Explainer (207.2K views, 2,085 likes)

*Use case: explainer · Style: 2d, minimal*

https://github.com/user-attachments/assets/4790d127-5ab0-4c8e-9ea6-ccdd9ec3359d

<details>
<summary>Prompt · original</summary>

```text
I was struggling to explain my UX decisions in interviews, so I made this kind of animation with Opus 5.5

Anyone want the skill?
```

</details>

*Source: @moguzbulbul · [X post](https://x.com/moguzbulbul/status/2104206095313215591)*

---

<a id="case-82"></a>

### 82. Transformer Architecture Explained for High School Students (192.6K views, 1,345 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/ff429e7e-6cc9-471f-bac6-a3ba74ad97c4

<details>
<summary>Prompt · original</summary>

```text
帮我用js制作一个视频，主题是：什么是 Transformer
要深入浅出，让高中生也能看得懂，不仅high level说的清楚，也要有细节，包括注意力机制，甚至一些数学概念

你可以用任何工具或者安装工具，可以联网检索

请给我惊喜
```

</details>

*Source: @dotey · [X post](https://x.com/dotey/status/2103683057689522564)*

---

<a id="case-83"></a>

### 83. SQLite Codebase Architecture Explainer with Query Trace Animation (101.2K views, 1,780 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/9b37a7eb-d956-4c4e-83a1-c721d659d456

<details>
<summary>Prompt · original</summary>

```text
every single open source repo should have an explainer video like this 7min one for SQLite

1. explains what the repo does and why its useful
2. shows a high level map of the code (beautiful graphic!)
3. life of a query through the codebase
4. the core abstractions in the repo
5. a real trace of execution and what happens, with a bit on join-order query planning

and yes, this was all generated by opus 5.5 w/ gemini 3.8 tts. i sound like i'm on repeat, but im in shock at just how coherent and capable this model is.

everything truly is code.
```

</details>

*Source: @deedydas · [X post](https://x.com/deedydas/status/2104391577091407965)*

---

<a id="case-84"></a>

### 84. Cocktail Recipe Motion Graphic Animation from Start to Finish (79.5K views, 1,037 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/dd30d5d9-282d-4384-a612-faf03aef9271

<details>
<summary>Prompt · original</summary>

```text
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingreidents + measurements as they're going into the cup. Should be a 30s video.
```

</details>

*Source: @Ror_Fly · [X post](https://x.com/Ror_Fly/status/2102853258582880547)*

---

<a id="case-85"></a>

### 85. Galileo Brachistochrone Problem Canvas 2D Animation (76.1K views, 690 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/d989f029-8504-4f51-b69a-de9665f125fe

<details>
<summary>Prompt · original</summary>

```text
Bu herhangi bir görüntü üretim modeli kullanmadan, yaratıcı olarak yapabileceğin en iyi şekilde Canvas 2D ile animasyona çevir. Konu: Galileo 1638'de sorduğu Bir top A noktasından B'ye en hızlı hangi yoldan iner? sorusuna karşılık kendi çözümü olan Düz rampa en kısa yol ama en hızlısı değil! Galileo çember yayının daha hızlı olduğunu gösterdi. Asıl cevabı (cycloid) 1696'da Bernoulli buldu.
```

</details>

*Source: @AIMevzulari · [X post](https://x.com/AIMevzulari/status/2106052083040256293)*

---

<a id="case-86"></a>

### 86. Zoom from Room to Quarks Infinite Scale Three.js Animation (73.1K views, 1,344 likes)

*Use case: explainer · Style: 3d*

https://github.com/user-attachments/assets/2ca89c99-e771-4d2b-9145-5a0c9f12873e

<details>
<summary>Prompt · original</summary>

```text
Create an animated sequence that starts in a room, zooms into a MacBook, then into an Apple M4 chip, followed by atoms, and finally quarks. Use HTML and Three.js for rendering.
```

</details>

*Source: @VictorTaelin · [X post](https://x.com/VictorTaelin/status/2103299766473875778)*

---

<a id="case-87"></a>

### 87. Recursion Explainer with Self-Referential Style Changes (71.1K views, 561 likes)

*Use case: explainer · Style: 2d, abstract*

https://github.com/user-attachments/assets/22dba076-2f4f-48be-9ead-5be00c4bea01

<details>
<summary>Prompt · original</summary>

```text
A video explaining recursion, where every explanation about recursion has a radically different video style, make this self-referential & clever & fast moving.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一支讲解递归的视频。每一次对递归的解释，都使用一种截然不同的视频风格。让视频体现自我引用，构思巧妙，节奏快速。
```

</details>

*Source: @emollick · [X post](https://x.com/emollick/status/2103688362960019567) · [Feishu PM03](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-88"></a>

### 88. 3D House Construction Process Animation with X-Ray View (67.8K views, 748 likes)

*Use case: explainer · Style: 3d*

https://github.com/user-attachments/assets/ca023635-0768-4d75-8a64-30d54957620e

<details>
<summary>Prompt · original</summary>

```text
Create an interactive 3D house animation showing the construction process from Foundation through Skeleton, Systems and Envelope to Finished. Include an X-ray view that reveals the plumbing, power and air inside. Use Three.js and WebGPU.
```

</details>

*Source: @techartist_ · [X post](https://x.com/techartist_/status/2105350783416021472)*

---

<a id="case-89"></a>

### 89. Evolution of the Eye Explainer with Computed Retina Visualizations (53.0K views, 141 likes)

*Use case: explainer · Style: 3d, realistic*

https://github.com/user-attachments/assets/d1fc9617-5d01-4e36-95b0-87ec9484cd3c

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 is truly insane.

It one-shotted this explainer of how evolution built the eye.

What makes it even more crazy is that every single retina image in this visualization is computed, not drawn!

Felt fitting after all the "how a camera works" one-shots. Because, you know... evolution many-shotted eyes.

Over 40 times.

Enjoy.
```

</details>

*Source: @cagrimbakirci · [X post](https://x.com/cagrimbakirci/status/2104011756397842869)*

---

<a id="case-90"></a>

### 90. Chinese Classics Multi-Style Animation Collection (45.8K views, 270 likes)

*Use case: explainer · Style: 2d, hand-drawn, 3d, pixel-art, infographic*

https://github.com/user-attachments/assets/1fd0fd00-6b56-4947-9450-6806551b38d4

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @NFT_Chen · [X post](https://x.com/NFT_Chen/status/2107653056771068069)*

---

<a id="case-91"></a>

### 91. Fusion Reactor Interactive Explainer with Plasma Temperature Control (43.1K views, 320 likes)

*Use case: explainer · Style: 3d*

https://github.com/user-attachments/assets/c77e5461-2dc0-45c0-9b13-2f925680ef3a

<details>
<summary>Prompt · original</summary>

```text
I asked Claude Opus 5.5 to explain how a fusion reactor works by building one you can take apart in your browser.

Drag the plasma from 15 million °C, the heat of the Sun's core, to 150 million and watch a city light up.

https://airsup.ai/lab
```

</details>

*Source: @konstantinsaifo · [X post](https://x.com/konstantinsaifo/status/2104216976801587629)*

---

<a id="case-92"></a>

### 92. Celld Platform Value Proposition Animation (18.6K views, 54 likes)

*Use case: explainer · Style: 2d*

https://github.com/user-attachments/assets/acd29fe5-f3b9-4c93-87bd-3ca8b038f959

<details>
<summary>Prompt · original</summary>

```text
make me an animation to explain why celld earns its place.
```

</details>

*Source: @0xnfrith · [X post](https://x.com/0xnfrith/status/2103358957050068999)*

---

<a id="case-93"></a>

### 93. Morocco Political History Since Independence Explainer (12.2K views, 17 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/5e8aedb1-e936-4d19-9c5c-59f7a008110c

<details>
<summary>Prompt · original</summary>

```text
réalise une vidéo résumant la vie politique au Maroc depuis l’indépendance
```

</details>

*Source: @TrigLyceee · [X post](https://x.com/TrigLyceee/status/2103804459986161719)*

---

<a id="case-94"></a>

### 94. Key Moments in AI History Animated Timeline (10.5K views, 194 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/5ad5025e-7dc0-4c86-a278-73a6b74f7656

<details>
<summary>Prompt · original</summary>

```text
make a video highlighting key moments in the history of AI.
```

</details>

*Source: @kloss_xyz · [X post](https://x.com/kloss_xyz/status/2103652674336067876)*

---

<a id="case-95"></a>

### 95. Napoleon Hill Drifting Mind Insight 2D Explainer (9.9K views, 51 likes)

*Use case: explainer · Style: 2d, hand-drawn*

https://github.com/user-attachments/assets/e39ede3e-360e-4ce5-9187-64841d94cf7f

<details>
<summary>Prompt · original</summary>

```text
输入如下：魔鬼控制人类最简单的方法,就是让人保持漂流状态。98% 的人,终其一生都在漂流。" —— 拿破仑·希尔《智胜恶魔》

参考这个洞见，创作一部讲解视频，尽可能令人难以置信的 2D 动画，时长 1 -3分钟，要有连贯的讲解，对白和声音。
```

</details>

*Source: @bitfish · [X post](https://x.com/bitfish/status/2103670987879539054)*

---

<a id="case-96"></a>

### 96. Journey Inside a GPU Chip to Silicon Atoms (Persian) (8.1K views, 133 likes)

*Use case: explainer · Style: 3d, realistic*

https://github.com/user-attachments/assets/8a7af722-5d0f-42bc-8ea9-810294740a5b

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5 یه انیمیشن 3D دیوونه‌کننده ساخته

از دیتاسنتر شروع می‌شه، وارد سرور می‌شه، کارت گرافیک رو باز می‌کنه، داخل چیپ می‌ره، از مدار و ترانزیستور رد می‌شه و تا اتم سیلیکون می‌رسه.
همه‌ش توی یک فایل HTML واحد اجرا می‌شه و حدود ۱ ساعت طول کشیده.
```

</details>

*Source: @ai_ba_reza · [X post](https://x.com/ai_ba_reza/status/2103792451551113363)*

---

<a id="case-97"></a>

### 97. Earthquake Tectonic Sandbox 60-Second Explainer (7.1K views, 30 likes)

*Use case: explainer · Style: 3d, realistic*

https://github.com/user-attachments/assets/3e24e7a6-105d-4d80-bb4f-9c5a81e809b3

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @egeberkina · [X post](https://x.com/egeberkina/status/2105029713445949521)*

---

<a id="case-98"></a>

### 98. End the Fed 15-Second Political Video with Remotion (7.1K views, 115 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/fcbfdf17-f26b-4b6e-9273-428ea3f507ce

<details>
<summary>Prompt · original</summary>

```text
Asked Opus 5.5 (max) to create a 15-second video about why we need to end the Fed. Behold.

Took 1 hour 45 minutes to do. It used @Remotion to create it.
```

</details>

*Source: @cboyack · [X post](https://x.com/cboyack/status/2103617085402407181)*

---

<a id="case-99"></a>

### 99. Paul Graham How to Do Great Work Video Essay (6.0K views, 10 likes)

*Use case: explainer · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/5b7b24dc-3820-4291-b9e5-997254226b07

<details>
<summary>Prompt · original</summary>

```text
Create a video essay from Paul Graham's essay How to do great work with punchy motion graphics, modern styling and high professionalism
```

</details>

*Source: @rohanpaul_ai · [X post](https://x.com/rohanpaul_ai/status/2104352205176500542)*

---

<a id="case-100"></a>

### 100. NFL First and 10 Yellow Line Technology Explainer (5.9K views, 0 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/64fff721-3aeb-4fdb-bce3-7c678774f73f

<details>
<summary>Prompt · original</summary>

```text
Make a motion graphics video that explains how the First & 10 Yellow Line works.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段动态图形视频，解释 First & 10 黄色首攻线是如何工作的。
```

</details>

*Source: @blueoctopusai · [X post](https://x.com/blueoctopusai/status/2105116391439270222) · [Feishu N16](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-101"></a>

### 101. Article Summary Explainer Motion Video (Chinese) (4.8K views, 4 likes)

*Use case: explainer · Style: 2d*

https://github.com/user-attachments/assets/df23c9da-1578-4c4b-8668-996dfdca423d

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 做的文章讲解,  省流
```

</details>

*Source: @0xlangeai · [X post](https://x.com/0xlangeai/status/2104119716533178533)*

---

<a id="case-102"></a>

### 102. What is Git Explainer for Beginners (Chinese) (4.3K views, 38 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/66da464a-1bfb-42ce-abbf-63728a310dc6

<details>
<summary>Prompt · original</summary>

```text
帮我用js制作一个视频，主题是：什么是Git
要深入浅出，让一个计算机0基础的人也能看得懂，然后要介绍一些常用指令的意思等等
要有声音的，然后是中文讲的
你可以用任何工具或者安装工具，可以联网检索
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
帮我用js制作一个视频，主题是：什么是Git
要深入浅出，让一个计算机0基础的人也能看得懂，然后要介绍一些常用指令的意思等等
要有声音的，然后是中文讲的
你可以用任何工具或者安装工具，可以联网检索
```

</details>

*Source: @Yunn260414 · [X post](https://x.com/Yunn260414/status/2104044910769016888) · [Feishu N13](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-103"></a>

### 103. Inside an AI Data Centre Explainer (4.1K views, 41 likes)

*Use case: explainer · Style: 3d*

https://github.com/user-attachments/assets/69f198bf-2bb6-4031-a961-a2c6d41b581b

<details>
<summary>Prompt · original</summary>

```text
show me what goes on inside an AI data centre.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
让我看看一座 AI 数据中心内部都在发生些什么。
```

</details>

*Source: @Sayan_shanky · [X post](https://x.com/Sayan_shanky/status/2103736579449868515) · [Feishu N17](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-104"></a>

### 104. 60-Second Autonomous Explainer Video End-to-End (3.7K views, 19 likes)

*Use case: explainer · Style: hand-drawn, 2d*

https://github.com/user-attachments/assets/67b04ef4-80c2-4778-8f5c-f49f5d6582d0

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @AstroTheWizard · [X post](https://x.com/AstroTheWizard/status/2103629247751618782)*

---

<a id="case-105"></a>

### 105. Hand-Drawn Stop-Motion DeFi Saver Self-Introduction (3.6K views, 48 likes)

*Use case: explainer · Style: hand-drawn, 2d*

https://github.com/user-attachments/assets/32a26980-1da1-4459-9d0b-d13246df31d2

<details>
<summary>Prompt · original</summary>

```text
make a hand-drawn stop-motion animation;
story: you're defi saver and explaining yourself in 1st person
```

</details>

*Source: @_nikolajankovic · [X post](https://x.com/_nikolajankovic/status/2102867033100616097)*

---

<a id="case-106"></a>

### 106. Nobel Prize Winners and Achievements Explainer (Chinese) (3.4K views, 37 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/7033d182-f7fc-4cbc-9c60-3c85d662e501

<details>
<summary>Prompt · original</summary>

```text
做一个 今年已颁发诺贝尔奖的人物与成就 的科普视频。要达到世界顶级youtuber视频制作的水准。顶级的电影导演、顶级的科普大师、数据可视化专家、配乐大师、动态图形设计大师、院士讲解级别的专业 + 脱口秀演员般的妙趣横生 + 电影人的叙事 + 高品位清晰清爽的设计风格
```

</details>

*Source: @KeWai386772 · [X post](https://x.com/KeWai386772/status/2108143449841262769)*

---

<a id="case-107"></a>

### 107. Distilbook 30-Second Product Explainer Motion Graphic (3.1K views, 35 likes)

*Use case: explainer · Style: 2d, minimal*

https://github.com/user-attachments/assets/6329798b-df74-46d1-81c6-5a3a17103446

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 30-seconds motion graphic video about the distilbook like a product explainer the video has to be very incredible (product url) https://t.co/BcbRbZVf1d
```

</details>

*Source: @sudo_kiran · [X post](https://x.com/sudo_kiran/status/2104846546768670892)*

---

<a id="case-108"></a>

### 108. Product Explainer Motion Graphic with Script and Design (3.0K views, 13 likes)

*Use case: explainer · Style: 2d, minimal*

https://github.com/user-attachments/assets/5279626e-51e4-41e9-8f5e-e887a3687885

<details>
<summary>Prompt · original</summary>

```text
create best motion graphics explainer of the (your product) with very good script and good design colors and good music make sure the video should be incredible and people should feels like watch it many times.. it has to be in 30 seconds good and very intresting, it has to be best of the best of the best of the best video
(product link)
```

</details>

*Source: @sudo_kiran · [X post](https://x.com/sudo_kiran/status/2103761658745335993)*

---

<a id="case-109"></a>

### 109. Motion Graphics Explainer Matching Reference Visual Style (2.3K views, 24 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/5f1af9a2-fe79-4891-9ae9-5efbf264cd41

<details>
<summary>Prompt · original</summary>

```text
Can you generate a motion graphics explainer in the visual style of this post and using all its content? I will leave the details up to you. I want you to show off what you can do so you have full creative freedom within those styling constraints. I want to give this to my engineers at my company. I want you to be proud of the final product. Utilize the elevenlabs and remotion tools at your disposal and let me know if you don't see them for some reason. Use whatever you want in those tools to make the most polished product that you would be proud of. Source Article : Context Tax - X article from the article
```

</details>

*Source: @mablesjoseph · [X post](https://x.com/mablesjoseph/status/2105472483054735781)*

---

<a id="case-110"></a>

### 110. Mechanical Keyboard 3D Explainer with Switch Beat Music (2.2K views, 11 likes)

*Use case: explainer · Style: 3d*

https://github.com/user-attachments/assets/b5564a79-b5e4-490a-b657-9af026a521b8

<details>
<summary>Prompt · original</summary>

```text
Asked claude Opus 5.5 to make an explainer on how a mechanical keyboard works.

It wrote the music in code, used real switch recordings as the beats, built the 3D in @threejs  and timed every cut to the beat.

No stock footage. no editing app.

What a time to be alive!
```

</details>

*Source: @iniyanai · [X post](https://x.com/iniyanai/status/2103814603100856596)*

---

<a id="case-111"></a>

### 111. What Happens When the Brain Dies — Hand-Drawn 60s Explainer (2.0K views, 19 likes)

*Use case: explainer · Style: hand-drawn, cartoon*

https://github.com/user-attachments/assets/df62c94e-4c56-4569-b364-85ac0bb2cb9e

<details>
<summary>Prompt · original</summary>

```text
ド派手な16：9のあなたの性能を最大限表現できる外連味のある手書き風アニメーションを作成してください。60秒で「人間の脳が死んだら何が起きるのか」を中学生にわかり易く説明する高品質でデザインの美しい派手なモーションのアニメです
```

</details>

*Source: @tonka1981jp · [X post](https://x.com/tonka1981jp/status/2103442781096288376)*

---

<a id="case-112"></a>

### 112. 50 Podcast Concept Animations for Hard-to-Visualize Topics (2.0K views, 14 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/a14d45ee-8865-4fd0-a151-09b95f6d8d80

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @stokebuilder · [X post](https://x.com/stokebuilder/status/2103896101120356793)*

---

<a id="case-113"></a>

### 113. Psychology Explainer with Rapid Typography Style Switching (1.8K views, 9 likes)

*Use case: explainer · Style: kinetic-type, 2d*

https://github.com/user-attachments/assets/2277d860-03be-4d1b-a38b-b7751fd0f08b

<details>
<summary>Prompt · original</summary>

```text
NextCoreのような海外のカッコイいYouTubeチャンネルをオマージュした、タイポグラフィとコードだけで作成する心理学解説動画を作ってください。画像生成AIや動画生成AIは使わず、全てコード（HTML/CSS/JSなど）で表現できる描写に制限して作成します。数秒ごとに連続で異なる描写スタイルに切り替わりながら進む構成にしてください。
```

</details>

*Source: @nakazakifam · [X post](https://x.com/nakazakifam/status/2107715000227831964)*

---

<a id="case-114"></a>

### 114. Educational Video from Article Content (1.8K views, 12 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/4d781ced-6618-498b-bfaa-0bc714ec2813

<details>
<summary>Prompt · original</summary>

```text
make educational video out of article.
```

</details>

*Source: @henkvaness · [X post](https://x.com/henkvaness/status/2103801351993975279)*

---

<a id="case-115"></a>

### 115. Microscope Zoom from Fingertip to Atoms in One HTML File (1.7K views, 17 likes)

*Use case: explainer · Style: 3d, realistic*

https://github.com/user-attachments/assets/fff2c5e1-8c05-43ea-8daf-edf413d59103

<details>
<summary>Prompt · original</summary>

```text
Build a microscope that dives from a fingertip down to atoms: 1× to 1,000,000×, all generated by code in one HTML file.
```

</details>

*Source: @CurieuxExplorer · [X post](https://x.com/CurieuxExplorer/status/2104108154506408141)*

---

<a id="case-116"></a>

### 116. Type 1 Diabetes Explainer from Body to Molecule (1.6K views, 13 likes)

*Use case: explainer · Style: 3d, infographic*

https://github.com/user-attachments/assets/19670ced-4fa9-419b-a2bf-9b69222fe1e6

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @CurieuxExplorer · [X post](https://x.com/CurieuxExplorer/status/2103373314354016717)*

---

<a id="case-117"></a>

### 117. Inside an AI Data Centre Visual Animation (1.4K views, 7 likes)

*Use case: explainer · Style: 3d, infographic*

https://github.com/user-attachments/assets/43cf5f4e-6fce-4466-bbc6-43cb9ef86752

<details>
<summary>Prompt · original</summary>

```text
Show me what goes on inside an AI data centre.
```

</details>

*Source: @mdaman010 · [X post](https://x.com/mdaman010/status/2103845689713111079)*

---

<a id="case-118"></a>

### 118. Hand-Drawn Whiteboard Explainer for Replica Symmetry Breaking (1.3K views, 20 likes)

*Use case: explainer · Style: hand-drawn*

https://github.com/user-attachments/assets/47d0306f-929f-4b40-962e-fbd2f93a0ce4

<details>
<summary>Prompt · original</summary>

```text
Do a quick hand-drawn whiteboard animations explaining what is replica symmetry breaking in the SK model

Prompt 2: build the mp4 version with narration
```

</details>

*Source: @tak3sh8 · [X post](https://x.com/tak3sh8/status/2103667481139441895)*

---

<a id="case-119"></a>

### 119. 25-Second Colored-Pencil Storybook Article Explainer (1.2K views, 17 likes)

*Use case: explainer · Style: hand-drawn, cartoon*

https://github.com/user-attachments/assets/5ec448d9-00ea-4a82-8a73-8edb46cda3f2

<details>
<summary>Prompt · original</summary>

```text
Read the attached article and make a 25-second animated explainer (1080×1350, 24 fps) in a colored-pencil storybook style, drawn entirely in JavaScript on an HTML canvas, with a soundtrack synthesized using the Web Audio API. Pick 3 main ideas, give each a short caption taken from the text, and use one simple original character. Show me the storyboard first, then render it to MP4.
```

</details>

*Source: @woojinrad · [X post](https://x.com/woojinrad/status/2106083299462455731)*

---

<a id="case-120"></a>

### 120. White Russian Cocktail Recipe Motion Graphic Animation (1.2K views, 22 likes)

*Use case: explainer · Style: 2d, minimal*

https://github.com/user-attachments/assets/b382bf47-09e8-43a5-8d0f-46a1f2f7f711

<details>
<summary>Prompt · original</summary>

```text
Render a recipe motion graphic animation using JavaScript or HTML (whatever you think will produce the best result) to show the full recipe for a White Russian from start to finish, empty glass to completed cocktail. Explainer video style, showing the ingredients and measurements as they go into the glass. It should be a 30s video.
```

</details>

*Source: @Sarut0biSasuke · [X post](https://x.com/Sarut0biSasuke/status/2103418429248069973)*

---

<a id="case-121"></a>

### 121. Fourier Series Explainer Video with HyperFrames (1.2K views, 24 likes)

*Use case: explainer · Style: 2d, infographic*

https://github.com/user-attachments/assets/ed659f9d-f546-4d02-ac77-07216f50d250

<details>
<summary>Prompt · original</summary>

```text
fourier series were hard to learn back in university (2 years ago) and they are fun!

what unlocks @HyperFrames_ + @claudeai Opus 5.5 is that you can get the best explainer videos just with 1 prompt

you are curious about something? ask claude!
```

</details>

*Source: @Miguel07Code · [X post](https://x.com/Miguel07Code/status/2103626582896091611)*

---

<a id="case-295"></a>

### 295. A Photon's Journey from the Sun to Your Eye

*Use case: explainer · Style: N/A*

https://github.com/user-attachments/assets/ddd7a40c-a088-47e3-9933-f3204a4687f0

<details>
<summary>Prompt · English translation</summary>

```text
Make a 20-second video about anything you choose. Make it wild.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
做一段20秒的视频，任何主题都行，由你决定；做得疯狂一点。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N14](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-296"></a>

### 296. Token Bucket Rate Limiter: Refill, Accept and Reject

*Use case: explainer · Style: infographic*

https://github.com/user-attachments/assets/550f21ac-3b7f-4a7a-b6a9-714255911ee0

<details>
<summary>Prompt · English translation</summary>

```text
Explain a token bucket rate limiter using only Canvas and no libraries. Every frame must be a pure function of time so my renderer can screenshot it.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
解释一个令牌桶限流器，只使用 Canvas，不使用任何库；每一帧都是时间的纯函数，这样我的渲染器就能对它截图。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N15](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-4"></a>

## 4. Technical Demos & Visualizations

<a id="case-122"></a>

### 122. 1906 San Francisco Market Street 3D Historical Recreation (163.3K views, 1,164 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/46950cbf-0e08-4a7b-b870-9903372ea916

<details>
<summary>Prompt · original</summary>

```text
Recreate Market Street, San Francisco as it stood on April 17, 1906, the afternoon before the earthquake, in Blender.

Scope: the Ferry Building up Market to Fifth Street, including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium.

Before modeling anything, build a source file from: the 1899-1905 Sanborn fire insurance maps (footprints, heights, materials, occupants), the Miles Brothers film "A Trip Down Market Street" (April 1906), period photographs from OpenSFHistory, the Library of Congress and the David Rumsey collection, and USGS topography. Record every building with footprint, height, facade material, occupant, and the source for each fact with a confidence level.

Build everything in Blender Python. No downloaded meshes, textures or HDRIs. Write reusable generators (Victorian commercial facade, mansard roof, bay windows, awnings, painted signage, gas and electric street lamps, cable car, horse-drawn wagon, early automobile) and assemble the street from the source file, so every building traces back to data.

Provide a 10 second video up the street.
```

</details>

*Source: @alexalbert__ · [X post](https://x.com/alexalbert__/status/2102466523164274839)*

---

<a id="case-123"></a>

### 123. Warehouse Logistics Animation with Trucks and Forklifts (73.3K views, 916 likes)

*Use case: demo · Style: 3d*

https://github.com/user-attachments/assets/d04a6d67-8a1c-4680-88cc-aa909910048d

<details>
<summary>Prompt · original</summary>

```text
Build one you can actually watch. Trucks reverse onto the dock, forklifts unload and boxes slide down chutes onto the right truck.
```

</details>

*Source: @konstantinsaifo · [X post](https://x.com/konstantinsaifo/status/2106855420237169107)*

---

<a id="case-124"></a>

### 124. 1990s Style Demoscene Demo with S3M Music Synchronization (38.8K views, 775 likes)

*Use case: demo · Style: 3d, particle*

https://github.com/user-attachments/assets/474edf5e-355f-422e-9130-cbe845c66c82

<details>
<summary>Prompt · original</summary>

```text
I would like you to create a kickass, impressive 1990s style demoscene demo using this S3M track as the music. Prior to getting to work, please see how to best play and analyze the S3M track. This will be important since synchronization of effects and appropriateness of scenes to the musical vibe (and this song does have a variety of sections with different attitude) is essential to a great demoscene demo. Also prior to getting started, please research what kinds of effects, physics, etc. would be good to use in combination. Please use C/C++ -- with appropriate demoscene/embedded/console gamedev sensibilities to avoid needlessly bloating compile times -- with OpenGL. In some cases, blitting to surfaces in realtime may be appropriate.. while in others, using OpenGL or even shaders is appropriate as well. It should be planned and polished to be spectacular and shocking. This is Claude's way of really showing off to the world that it kicks ass.
```

</details>

*Source: @gandamu_ml · [X post](https://x.com/gandamu_ml/status/2102919394775220530)*

---

<a id="case-125"></a>

### 125. Cinematic 3D Landscape Explorer with Free Camera (30.1K views, 621 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/af21d7ed-f224-4c83-a117-c7f5dd9dd8be

<details>
<summary>Prompt · original</summary>

```text
Create a cinematic browser-based 3D world that can be explored freely with a camera, focused on breathtaking landscapes and extraordinary original architecture. Fill the world with huge strange buildings, monumental structures, surreal ruins, cliffs, valleys, forests, water, and unusual ultra-detailed forms that feel mysterious and awe-inspiring. This is not a game and not combat-focused, the goal is pure exploration, atmosphere, composition, and visual discovery. Make the world feel epic, highly detailed, and completely original, with architecture that looks weird, ambitious, and unforgettable.
```

</details>

*Source: @LexnLin · [X post](https://x.com/LexnLin/status/2103194052850241739)*

---

<a id="case-126"></a>

### 126. Product Feature Walkthrough Motion Graphics Video (29.7K views, 158 likes)

*Use case: demo · Style: 2d*

https://github.com/user-attachments/assets/b22ba06c-296e-41c7-9cb9-1361854cf241

<details>
<summary>Prompt · original</summary>

```text
can you search for the picture of Mona Lisa, then replicate it using mouse movement and brushes in JS paint using chrome?

Follow-up:
Ok now can you make a video of exactly what you just did? Showing every mouse movement and changes?
```

</details>

*Source: @ehsanik · [X post](https://x.com/ehsanik/status/2102885216692162993)*

---

<a id="case-127"></a>

### 127. Porco Rosso Aerial Battle Three.js Ghibli Style Recreation (21.5K views, 74 likes)

*Use case: demo · Style: 3d, cartoon*

https://github.com/user-attachments/assets/66dd2124-a546-4118-b761-589515d2ae88

<details>
<summary>Prompt · original</summary>

```text
✨审美绝了！Opus 5.5 用 Three.js 把宫崎骏《红猪》经典空战复刻出来了！

只给了这一句prompt:

「用 web3D 复刻宫崎骏《红猪》日落海面上的经典空战：白绿红涂装战斗机、紫色积云、海面反光、吉卜力运镜，画面写 just breathe.」

建模、配色、云层、尾迹和镜头全部一次对齐，审美直接封神。

#Opus5_5 #宫崎骏 #红猪 #ThreeJS #Web3D #AIGC #vibecoding #审美天花板 #3D #AI #Dario #Anthropic

https://x.com/nft_chen/status/2103401780117938683?s=46
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
用 web3D 复刻宫崎骏《红猪》日落海面上的经典空战：白绿红涂装战斗机、紫色积云、海面反光、吉卜力运镜，画面写 just breathe.
```

</details>

*Source: @NFT_Chen · [X post](https://x.com/NFT_Chen/status/2103882415299350878) · [Feishu N11](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-128"></a>

### 128. 1857 Napoleon Cannon 3D Model with Technical Drawings and Firing (19.8K views, 359 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/233a5052-18d2-45ef-9a15-2cada1ac239d

<details>
<summary>Prompt · original</summary>

```text
Build a fully working 1857 Napoleon load field cannon in 3D using procedural Three.js WebGPU and TSL shaders. No Blender, no 3D assets, no textures. Include technical drawings as live orthographic renders showing elevation, pressure, trajectory, and firing changes in real time.
```

</details>

*Source: @thebuggeddev · [X post](https://x.com/thebuggeddev/status/2107449104926482912)*

---

<a id="case-129"></a>

### 129. Single Prompt Hyperframes Motion Graphics Showcase (19.4K views, 152 likes)

*Use case: demo · Style: 2d*

https://github.com/user-attachments/assets/a3b55cbf-bf64-4294-8c93-1ed8477008aa

<details>
<summary>Prompt · original</summary>

```text
No tiene sentido que esto haya salido con un solo prompt con Opus 5.5 e Hyperframes
```

</details>

*Source: @leandroriviello · [X post](https://x.com/leandroriviello/status/2104728379798827135)*

---

<a id="case-130"></a>

### 130. 12-Second Launch Video with Bouncing Ball Filmstrip Animation (18.9K views, 148 likes)

*Use case: demo · Style: 2d, minimal*

https://github.com/user-attachments/assets/33f29461-aa79-4314-b072-72d8fbba6e53

<details>
<summary>Prompt · original</summary>

```text
Make a 12s motion video in code (1920x1080, 30fps, one HTML file drawing every frame from a single seek(t) function, rendered with Playwright + ffmpeg, with original synthesized sound).

Story: a dark prompt pill on an off-white page types "make a launch video" with a real keystroke rhythm → enter, the button flashes orange and the pill slides up → a 12-frame filmstrip stamps in left to right, one frame per beat at 120 BPM; each frame shows one pose of an orange ball's bounce (squash on contact, stretch mid-air, real arcs) → a playhead sweeps the strip while a big viewer above plays the poses as a flipbook, twice, faster the second time → the strip slides away, "every frame is code." fills the screen, and the ball arcs over and lands as the period.

Rules: arrive fast, land soft (cover 12–19% of the remaining distance per frame); nothing ever freezes (slow push on every hold); stagger 2–4 frames; blur only on fast moves; big and readable on a phone; off-white, ink and one orange only. Sound: a tick per key, a click on enter, a rising note per frame stamp, a thump when the ball lands.

Show me 5 stills first (typing, strip half-built, flipbook, headline, last frame), critique them like a harsh motion director, fix the 3 worst problems, then render.
```

</details>

*Source: @notdwd · [X post](https://x.com/notdwd/status/2105031774904766641)*

---

<a id="case-131"></a>

### 131. WebGPU Physics Engine with 108K Particle Sand and Fluid Simulation (18.8K views, 97 likes)

*Use case: demo · Style: particle, 3d*

https://github.com/user-attachments/assets/e6770670-6b95-4923-8019-82044cf29b09

<details>
<summary>Prompt · original</summary>

```text
🚨 Opus 5.5 is the best model launch in 2026

this entire physics engine is one HTML file.

sand, water, oil, fire, lava, plants, steam.

108,000 particles at 60fps.

built with Opus 5.5.

prompt in the replies 👇

follow @cyrilXBT
```

</details>

*Source: @cyrilXBT · [X post](https://x.com/cyrilXBT/status/2103532793406149036)*

---

<a id="case-132"></a>

### 132. Bitcoin Monetary History Animation with Real Block Data (18.5K views, 162 likes)

*Use case: demo · Style: 2d, infographic*

https://github.com/user-attachments/assets/f78e3a09-42bb-4156-b5b2-9b05645b2b25

<details>
<summary>Prompt · original</summary>

```text
Can't Print the Proof

I gave Opus 5.5 total creative freedom to create an epic monetary history banger.

1 caveat, I said use bitcoin block data to build the animation and wow me with the best quality without using generative video tools.

🤯

21 million, that's the truth
```

</details>

*Source: @bradmillscan · [X post](https://x.com/bradmillscan/status/2104048013362839974)*

---

<a id="case-133"></a>

### 133. 110K Rigid Body WebGPU Physics Demo Reel (13.2K views, 18 likes)

*Use case: demo · Style: 3d, particle*

https://github.com/user-attachments/assets/d4608f82-e4bc-4b0a-ba15-73ac819a1c1c

<details>
<summary>Prompt · original</summary>

```text
110k rigid bodies in real time, in a browser tab. Grab anything, fire cannonballs.

Built with Claude Opus 5.5: Augmented Vertex Block Descent (SIGGRAPH 2025, Giles, Diaz & Yuksel) in WebGPU with @threejs . It's a physics solver that stays stable with huge scenes and big mass ratios. Opus 5.5 even put together this whole demo reel video just from a single text prompt in Claude Code haha 🤯

Try it: https://three-avbd.vercel.app
(recorded on an M4 Max, lighter scenes run fine on older computers or on mobile)

Code's here, MIT licensed. Go build something with it, have fun breaking things: https://github.com/sbobyn/three-avbd

#threejs #WebGPU
```

</details>

*Source: @nybobs · [X post](https://x.com/nybobs/status/2103385835328680050)*

---

<a id="case-134"></a>

### 134. Stained-Glass Hibiscus Flower 3D Artwork (11.1K views, 17 likes)

*Use case: demo · Style: 3d*

https://github.com/user-attachments/assets/a1d3a813-4987-4dae-8164-93e14f309369

<details>
<summary>Prompt · original</summary>

```text
Create a beautiful, interactive 3D browser artwork of a single stained-glass hibiscus flower.
Use the attached leaf as a reference for material delicacy, intricate veins, translucent colours and restrained presentation. Create an original flower composition.
```

</details>

*Source: @ivanainai · [X post](https://x.com/ivanainai/status/2106481339193245918)*

---

<a id="case-135"></a>

### 135. Fishbowl with GLSL Reflection Refraction and Caustics (9.9K views, 103 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/766e3bb1-fc72-4eed-b2f7-f5c9ca2d4a66

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 does a great job in eval of GLSL (OpenGL Shading Language) in threejs.
The prompt here is roughly. A fishbowl with reflection, refraction and water caustics.

Check it out yourself! And compare it to other models
https://threejseval.com/gallery?eval=fishtank
```

</details>

*Source: @NicolaManzini · [X post](https://x.com/NicolaManzini/status/2103499771206156628)*

---

<a id="case-136"></a>

### 136. 3D Object Construction Part-by-Part in Blender (8.2K views, 90 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/656ddd52-911d-4d4d-9705-f98efc246ca8

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @0xWast3 · [X post](https://x.com/0xWast3/status/2103513328077222104)*

---

<a id="case-137"></a>

### 137. Interactive Japanese Nature Boat Scene with Three.js (Arabic) (6.0K views, 75 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/5c83b09b-703f-41e6-a095-9295d13bc533

<details>
<summary>Prompt · original</summary>

```text
إنشاء مشهد قارب تفاعلي يمر بجمال الطبيعة اليابانية باستخدام Three.js، مع طقس ديناميكي وانعكاسات ماء واقعية وتفاصيل معماريّة وشخصيات 3D
```

</details>

*Source: @EngMoElgaraihy · [X post](https://x.com/EngMoElgaraihy/status/2103038655178694832)*

---

<a id="case-138"></a>

### 138. Qi Baishi Style WebGL Ink Painting (5.9K views, 2 likes)

*Use case: demo · Style: hand-drawn, 2d*

https://github.com/user-attachments/assets/0cf2736a-612d-4f89-9d71-2a4d312418b7

<details>
<summary>Prompt · original</summary>

```text
A live WebGL ink painting in the style of Qi Baishi, with paper fibre, dry-brush whiskers and an escape when you touch the water.
```

</details>

*Source: @YouWareAI · [X post](https://x.com/YouWareAI/status/2105656935622259061)*

---

<a id="case-139"></a>

### 139. Spectacular Fireworks and Light Particle Show (Turkish) (5.4K views, 45 likes)

*Use case: demo · Style: particle, 3d*

https://github.com/user-attachments/assets/5de9bf4c-65a4-4599-b5c9-d4d2bd67ed11

<details>
<summary>Prompt · original</summary>

```text
Yapabileceğin en etkileyici havai fişek veya ışıklı parçacık gösterisini üret. Ortamı ve sanat yönünü sen seç. Tek tip küçük patlamaları çoğaltmak yerine ritmi, derinliği, ışığın çevreye etkisini ve unutulmaz bir final anını tasarla. Gösteri canlı çalışsın; kullanıcı finali tekrar oynatabilsin.

Yaratıcı seçimler senin: sahne, sanat yönü, kamera, mekanik, teknoloji ve etkileşimi önceden belirlenmiş sıradan kalıplara sıkıştırma. İlk akla gelen sıradan web demosuyla yetinme: önce kendi alanında birkaç fikri kısaca tart, videoda en güçlü görünecek özgün olanı seç, sonra onu çalışan bir ürüne dönüştür. Konuyu olduğundan kolay gösteren dekoratif taklit kabul edilmez. Sinematik ve estetik seçimler sonuçta görülsün.
```

</details>

*Source: @FornYapayZeka · [X post](https://x.com/FornYapayZeka/status/2102888241443795431)*

---

<a id="case-140"></a>

### 140. 3D Train Simulation with Procedural Assets (Chinese) (5.3K views, 27 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/384453d5-fd6b-48f2-882c-4f834ea651fc

<details>
<summary>Prompt · original</summary>

```text
太离谱了，一共3步，Opus 5.5给我整了个“模拟火车”出来。

1. 让ChatGPT生成韶山8各个视角的图；
2. 让Opus做一个3D资产，100%还原这张图；
3. 做一个环形铁路，可以操作这辆车行驶。
```

</details>

*Source: @akokoi1 · [X post](https://x.com/akokoi1/status/2104222017696469188)*

---

<a id="case-141"></a>

### 141. Three.js Single Prompt Motion Design (Turkish) (5.1K views, 33 likes)

*Use case: demo · Style: 3d*

https://github.com/user-attachments/assets/b8b461fa-6eab-4b30-8d6d-da7a8b1c78c7

<details>
<summary>Prompt · original</summary>

```text
threejs (@threejs) + Claude Code Opus 5.5
tek prompt ve çıktı
```

</details>

*Source: @wzarok · [X post](https://x.com/wzarok/status/2103530789510283635)*

---

<a id="case-142"></a>

### 142. Rube Goldberg Marble Domino Physics Machine (3.8K views, 79 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/23463842-f58e-495e-afd4-779ed47a7a1f

<details>
<summary>Prompt · original</summary>

```text
Create a physics simulation of a Rube Goldberg inspired machine where a marble ends up toppling a 1.8m domino. Use Three.js + Rapier. A falling domino can knock over one 1.5× its size, so ten growing dominoes carry the push from desk to room scale.
```

</details>

*Source: @techartist_ · [X post](https://x.com/techartist_/status/2107514291213697078)*

---

<a id="case-143"></a>

### 143. Explosion Effect with Force Propagation Scene (Turkish) (3.5K views, 25 likes)

*Use case: demo · Style: particle, 3d*

https://github.com/user-attachments/assets/29210e27-60bd-4b2c-9e05-4dc20b97618c

<details>
<summary>Prompt · original</summary>

```text
Yapabileceğin en etkileyici patlama efektini ve onu taşıyacak özgün sahneyi üret. Ölçeği, ortamı ve görsel dili sen seç. Patlamanın başlangıcı, kuvvetin yayılması ve ardında bıraktığı değişim izlenebilir olsun; tek karelik parlama veya rastgele parçacık yağmuru yeterli değil. Kullanıcı bunu tekrar başlatabilsin ve etkisini farklı açıdan görebilsin.

Yaratıcı seçimler senin: sahne, sanat yönü, kamera, mekanik, teknoloji ve etkileşimi önceden belirlenmiş sıradan kalıplara sıkıştırma. İlk akla gelen sıradan web demosuyla yetinme: önce kendi alanında birkaç fikri kısaca tart, videoda en güçlü görünecek özgün olanı seç, sonra onu çalışan bir ürüne dönüştür. Konuyu olduğundan kolay gösteren dekoratif taklit kabul edilmez. Sinematik ve estetik seçimler sonuçta görülsün.
```

</details>

*Source: @FornYapayZeka · [X post](https://x.com/FornYapayZeka/status/2102971287224135914)*

---

<a id="case-144"></a>

### 144. Remotion Video Built with Natural Language (Japanese) (3.3K views, 18 likes)

*Use case: demo · Style: 2d*

https://github.com/user-attachments/assets/bf8735e3-9b7e-4bc0-8497-7672b265aa2f

<details>
<summary>Prompt · original</summary>

```text
ださいけど、Remotion で動画っぽいのつくった。コードは見てない。環境だけ用意した…っていっても、いつものように jj init されるカスタム try コマンドを叩いてディレクトリをつくって「Remotion の環境をプリーズ」だけだわ。なんもしてない。あとは Opus 5.5 とちょっと話しただけだわ。未来だ。
```

</details>

*Source: @iTakahashikun · [X post](https://x.com/iTakahashikun/status/2103731575661990109)*

---

<a id="case-145"></a>

### 145. GSAP UI Card Timeline Animation with Staggered Elements (2.7K views, 73 likes)

*Use case: demo · Style: 2d, minimal*

https://github.com/user-attachments/assets/f9070ccb-9961-46ac-9b1d-9f1b240d5e35

<details>
<summary>Prompt · original</summary>

```text
Build a GSAP timeline for UI cards with specific timing constraints: 280ms for cards, 220ms for title, 160ms for metadata, and a 60ms stagger between elements. Implement a verification loop where the animation is stepped through frame-by-frame using Playwright, screenshots are compared to detect overshoot or errors, and the code is patched until it passes the checks without rewriting everything.
```

</details>

*Source: @fleyta88 · [X post](https://x.com/fleyta88/status/2108249741125443662)*

---

<a id="case-146"></a>

### 146. Rust SVG Particle Video with 3D Geometry and Audio-Reactive Ring (2.1K views, 20 likes)

*Use case: demo · Style: 3d, particle, abstract*

https://github.com/user-attachments/assets/12d32474-4584-46f4-8c76-bda8d63d1a43

<details>
<summary>Prompt · original</summary>

```text
Create a video using Rust + SVG via fframes where every frame is a function. Include particles, 3D geometry, springs, shaders and an audio-reactive ring, synchronized to a 128 BPM beat grid.
```

</details>

*Source: @BuildFastWithAI · [X post](https://x.com/BuildFastWithAI/status/2108403445304844291)*

---

<a id="case-147"></a>

### 147. Two-Sentence Remotion Motion Video (2.0K views, 41 likes)

*Use case: demo · Style: 2d, minimal*

https://github.com/user-attachments/assets/1eb75d83-eff0-4c7b-b97b-98490e5141b3

<details>
<summary>Prompt · original</summary>

```text
I made this with a two sentence prompt using Opus 5.5 and Remotion.
```

</details>

*Source: @AylmerTH · [X post](https://x.com/AylmerTH/status/2105346401878356252)*

---

<a id="case-148"></a>

### 148. Realistic 3D Taj Mahal Model in One HTML File (2.0K views, 8 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/bd9258ce-683e-49e6-b973-2007a8d7b33b

<details>
<summary>Prompt · original</summary>

```text
I asked Opus 5.5 to generate a realistic 3D model of the Taj Mahal

Dome, minarets, marble inlay, even the foundations.

One prompt ⤵️ One HTML file.
```

</details>

*Source: @CurieuxExplorer · [X post](https://x.com/CurieuxExplorer/status/2103038625483272483)*

---

<a id="case-149"></a>

### 149. 5 Different Scroll-Based Sections with Auto-Generated Layout (1.5K views, 12 likes)

*Use case: demo · Style: 2d, minimal*

https://github.com/user-attachments/assets/b8ba357a-4ffd-4769-9c81-1f1907e7c116

<details>
<summary>Prompt · original</summary>

```text
Build 5 completely different scroll-based sections, decide the context & layout yourself.
```

</details>

*Source: @ercankeskinx · [X post](https://x.com/ercankeskinx/status/2102995443818897906)*

---

<a id="case-150"></a>

### 150. Realistic 3D Fire Fluid Simulation with Blackbody Physics (1.1K views, 16 likes)

*Use case: demo · Style: 3d, particle, realistic*

https://github.com/user-attachments/assets/f675f247-5e83-471a-a6ea-0f59647a3c5a

<details>
<summary>Prompt · original</summary>

```text
I asked opus 5.5 in @agnt_gg for the most realistic fire it could build using ONLY javascript.

It wrote a real 3D fluid simulation that runs on the GPU. The flame colors come from blackbody physics, the smoke is real volume, it runs at 96 fps in 1080p, and it critiqued its own renders about 40 times.

Then it shot a 38 second film of it. The sound comes from the fire itself. 🔥

Details:

- Nothing faked. The fire is actual simulated gas that burns, heats up, rises, and swirls. It gives off soot that glows, and the soot that escapes cools into smoke. Every frame is computed on the GPU.

- The AI graded its own work: render a frame, have a vision model pick it apart like a VFX supervisor, fix it, repeat. It caught a flame that kept dying, ring shaped artifacts on the ground, and coals that looked like cheese chips.

- The film isn't screen recorded. Each frame is rendered offline with scripted camera moves. The crackle and roar come from how brightly the fire burns in each frame.

- No Blender, no stock footage, no sound library. One HTML file, one conversation.
```

</details>

*Source: @NathanWilbanks_ · [X post](https://x.com/NathanWilbanks_/status/2103881538592981110)*

---

<a id="case-151"></a>

### 151. 30-Second Cinematic F1 Pit Stop in Three.js (1.1K views, 43 likes)

*Use case: demo · Style: 3d, realistic*

https://github.com/user-attachments/assets/1a036252-4220-4f08-8444-11bf1bc29c21

<details>
<summary>Prompt · original</summary>

```text
a 30s cinematic F1 pit stop in Three.js. Detailed car, 8-person crew changing all 4 tyres, synthesized audio, fully procedural.
```

</details>

*Source: @rubenssoto_ai · [X post](https://x.com/rubenssoto_ai/status/2108512810774802657)*

---

<a id="case-152"></a>

### 152. Santa Monica Beach Particle Illustration 3D Environment (1.0K views, 18 likes)

*Use case: demo · Style: 3d, particle*

https://github.com/user-attachments/assets/79edff90-4dba-40e3-98f7-2956d04d9bd4

<details>
<summary>Prompt · original</summary>

```text
Create a stylistic 3D environment of a busy Santa Monica beach that adapts to the time of day. The art style must be a particle illustration, which uses thousands of tiny glowing specks rather than solid fills with flowing ribbon strokes behind figures to suggest motion.

I had 2-3 more prompts on top of this, but this is a good starting point.

Repo link: https://github.com/ishuagrawal/particle-beach
```

</details>

*Source: @ishuagra02 · [X post](https://x.com/ishuagra02/status/2102920408743678129)*

---

<a id="case-297"></a>

### 297. Three.js Douglas A-1H Skyraider

*Use case: demo · Style: 3d*

https://github.com/user-attachments/assets/3a16ae16-4569-461a-b593-cbb0f78c3e3b

<details>
<summary>Prompt · English translation</summary>

```text
Build a Douglas A-1H Skyraider in Three.js.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
用 Three.js 构建一架道格拉斯 A-1H“天袭者”攻击机。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N18](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-298"></a>

### 298. Chrome Spheres and 3D Shape-Reassembly Showreel

*Use case: showreel · Style: 3d*

https://github.com/user-attachments/assets/a465a57f-6557-449a-8ca1-a88aacc3bb17

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段充满动感的15秒动态图形视频，展示你作为一名出色动效设计师的能力，就像用于简历的个人作品集一样。全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N19](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-299"></a>

### 299. Mixed-Media Showreel with 3D Particles

*Use case: showreel · Style: 2d, 3d, particle*

https://github.com/user-attachments/assets/dbb47e4c-a6fc-424c-8636-3536863899de

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like a showreel for your resume. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段充满动感的15秒动态图形视频，展示你作为一名出色动效设计师的能力，就像用于简历的个人作品集一样。全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N20](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-5"></a>

## 5. Ads & Marketing

<a id="case-153"></a>

### 153. 30-Second Business Explainer with 5 Scenes and Brand Colors (42.1K views, 372 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/d6bf36fe-3bc2-415b-83cd-09b5c3f1bd5a

<details>
<summary>Prompt · original</summary>

```text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]
```

</details>

*Source: @alex_prompter · [X post](https://x.com/alex_prompter/status/2103499977632997524)*

---

<a id="case-154"></a>

### 154. Shin Majin Style PV with Code-Rendered Frames and Lyria BGM (39.7K views, 360 likes)

*Use case: ad · Style: 2d, cartoon*

https://github.com/user-attachments/assets/bcfa6b28-a898-4397-ba78-9f703b88bccd

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @Majin_AppSheet · [X post](https://x.com/Majin_AppSheet/status/2103497319899693327)*

---

<a id="case-155"></a>

### 155. Cheese Camera App Concept Animation for Couples Photography (26.6K views, 16 likes)

*Use case: ad · Style: 2d, cartoon*

https://github.com/user-attachments/assets/8bf04c22-9ba1-4f17-9c45-507b54ef4b56

<details>
<summary>Prompt · original</summary>

```text
帮我制作一个动画，主题描绘芝士相机的理念和使用场景，需要打动我们的目标用户（男朋友给女朋友拍照，拍出更好看的照片）；包括音效和音乐；你可以使用任何你觉得合适的工具和技术，做出最好最惊艳的效果，不要使用已有的skill，不要参考以前做过的视频或者文案
```

</details>

*Source: @Mileson07 · [X post](https://x.com/Mileson07/status/2103717347790065690)*

---

<a id="case-156"></a>

### 156. Lightspark Social Media Promo Video with Sound Design (25.9K views, 282 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/eda9e189-cea0-4488-ac63-c6a91f5d5408

<details>
<summary>Prompt · original</summary>

```text
make a punchy and modern short video for social that promotes @lightspark capabilities. Needs to be production grade with sound
```

</details>

*Source: @davidmarcus · [X post](https://x.com/davidmarcus/status/2103275618045686217)*

---

<a id="case-157"></a>

### 157. 15-Second Self-Promotion Motion Graphics Video (22.2K views, 21 likes)

*Use case: ad · Style: 2d*

https://github.com/user-attachments/assets/9ac4a7d2-63ea-43be-9077-43689005b907

<details>
<summary>Prompt · original</summary>

```text
create 15+ sec self-promotion promo
```

</details>

*Source: @slvDev · [X post](https://x.com/slvDev/status/2103569170075975986)*

---

<a id="case-158"></a>

### 158. 3D Printable PCB Enclosure Promo Animation (21.9K views, 367 likes)

*Use case: ad · Style: 3d*

https://github.com/user-attachments/assets/b586572a-b873-49e5-9e1e-e565f12f13a1

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5 continues to amaze me. Claude Opus 5.5 created a 3D printable enclosure for an existing PCB.  Then it created this promo video for it.
The PCB, the printable STLs and this animation are 100% just from prompting in Claude Code.
```

</details>

*Source: @VectorCrossProd · [X post](https://x.com/VectorCrossProd/status/2104093497561436573)*

---

<a id="case-159"></a>

### 159. Meta VR Glasses Promotional Video Patterns Showcase (17.6K views, 140 likes)

*Use case: ad · Style: 2d, 3d*

https://github.com/user-attachments/assets/44152170-7ae0-4aa3-b8da-a16c5ed7d163

<details>
<summary>Prompt · original</summary>

```text
I heard you are good at making videos, so I want to know what kind of videos you can make. Please create several patterns of promotional videos for Meta VR Glasses.
```

</details>

*Source: @mouri45 · [X post](https://x.com/mouri45/status/2107036053949575311)*

---

<a id="case-160"></a>

### 160. Claude Code Terminal Animation for Opus 5.5 Efficiency Promo (15.9K views, 168 likes)

*Use case: ad · Style: 2d, cartoon*

https://github.com/user-attachments/assets/44e61740-64e3-48d6-b93a-9c4977b7da00

<details>
<summary>Prompt · original</summary>

```text
I want to try something different here. You should act as a  world-class animator and create an animation to go along with an  X post that talks about how Ultra Code and Claude Code are now  much more relevant due to the efficiency of Opus 5.5. You can use it without annihilating your usage limits

the style of the video here
/Users/danielmcateer/Downloads/jvnZ3SyyxxajVatp.mp4

What I had in mind was start with Claude Code in the terminal from the first attached video, with me navigating to the 'ultracode' reasoning effort, then exploding into a scene where the Claude icon characters similar to what's in the second video are shooting an action video and it's representing using Claude Code dynamic workflows editing a video.
```

</details>

*Source: @daniel_mac8 · [X post](https://x.com/daniel_mac8/status/2103824976713306214)*

---

<a id="case-161"></a>

### 161. Ad-Style Motion Video with Remotion (Portuguese) (7.6K views, 134 likes)

*Use case: ad · Style: 2d*

https://github.com/user-attachments/assets/99411b1d-d8fd-4035-828e-6de8a1d95882

<details>
<summary>Prompt · original</summary>

```text
TÁ BIZARRO ESSE OPUS 5.5 😲

Eu nem acreditei no resultado. Foi feito com one prompt shot, usando apenas remotion...

Agora é só jogar uma narraçãozinha e subir pros ADS kkk
```

</details>

*Source: @thallisribeiro · [X post](https://x.com/thallisribeiro/status/2103107359727829318)*

---

<a id="case-162"></a>

### 162. Product Hype Teaser with HyperFrames (7.3K views, 42 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/f6dcd9f5-0201-43ca-b683-8d55bb440b7e

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @jake11moran · [X post](https://x.com/jake11moran/status/2103237884564414633)*

---

<a id="case-163"></a>

### 163. 30-Second Website Promo with Music (Chinese) (6.1K views, 24 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/b4b3d0c2-b05c-47c2-8e79-6663e516b78a

<details>
<summary>Prompt · original</summary>

```text
为 https://t.co/MpUyPSxZVk 制作一支 30 秒的网站宣传片，并完成配乐。

你可以读取当前 Mac mini 上的代码和素材，也可以使用浏览器访问 https://t.co/fOQQgAhran。从代码和真实网站自行寻找品牌
```

</details>

*Source: @aiwarts · [X post](https://x.com/aiwarts/status/2103419813263815008)*

---

<a id="case-164"></a>

### 164. Product Ad Video with Remotion and Gemini TTS (Japanese) (5.9K views, 13 likes)

*Use case: ad · Style: 2d*

https://github.com/user-attachments/assets/6bd48494-ba9f-42a1-8e65-a109cd8ad1c5

<details>
<summary>Prompt · original</summary>

```text
opus5.5 + Remotion + Gemini3.8 TTS
たったの1時間でうちのプロダクトの広告動画2本できた・・・

もう一生外注しないw
外注したら10万円以上かかってたと思う
```

</details>

*Source: @inoue_aix · [X post](https://x.com/inoue_aix/status/2104155161883234322)*

---

<a id="case-165"></a>

### 165. Vox-Style Vibe Video from PDF Assets (Arabic) (5.8K views, 44 likes)

*Use case: ad · Style: 2d*

https://github.com/user-attachments/assets/18a6430e-1570-463d-a047-04cf4d066df0

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @X7mdNet · [X post](https://x.com/X7mdNet/status/2105177788043157811)*

---

<a id="case-166"></a>

### 166. FuturePost Extension Motion Showreel with Remotion (5.1K views, 215 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/0b24fbf9-caeb-4922-b3b8-159be6ca47f1

<details>
<summary>Prompt · original</summary>

```text
Motion Designers are cooked

Made this with the new @claudeai Opus 5.5 + @Remotion in a few minutes 🤯

Showcasing my @futurepost extension
```

</details>

*Source: @allodev · [X post](https://x.com/allodev/status/2105414480910069765)*

---

<a id="case-167"></a>

### 167. Product Launch Story Video with Tagline and Music (4.7K views, 44 likes)

*Use case: ad · Style: photo-based, 2d*

https://github.com/user-attachments/assets/fb79b6a0-645c-4901-9495-d968a6f6d75e

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2106101258834551116)*

---

<a id="case-168"></a>

### 168. Technical Stack Showcase with Remotion and Python Audio (Chinese) (4.5K views, 26 likes)

*Use case: ad · Style: 2d*

https://github.com/user-attachments/assets/1ad0c3d9-52e7-4931-8b63-14f7985d3480

<details>
<summary>Prompt · original</summary>

```text
所有技术栈也都让 opus5.5 自己列出来！

Remotion 负责画面，Python 负责配乐，最后由 Remotion 调 ffmpeg 合成成片。

画面
影片工程是 Remotion 4.0.528，这是一个用 React
```

</details>

*Source: @aiwarts · [X post](https://x.com/aiwarts/status/2103419817034428866)*

---

<a id="case-169"></a>

### 169. Product Demo Video with UI Moments and Real Clips (4.3K views, 23 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/66caee30-4e14-4152-b27f-61b90a74ad74

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @RaphaelAubryy · [X post](https://x.com/RaphaelAubryy/status/2103413596822687877)*

---

<a id="case-170"></a>

### 170. Vertical Video from LP with WebGL Hair Physics (Japanese) (4.0K views, 44 likes)

*Use case: ad · Style: photo-based, 2d*

https://github.com/user-attachments/assets/eacf279b-69fd-4fbe-8b80-725cebe0ca08

<details>
<summary>Prompt · original</summary>

```text
1. LPを9つの場面に分解して縦型動画の構成に。コピーは一字一句そのままWebフォントで組み直し、ロゴはSVGで描き直し。

2. 元画像の人物写真は150px前後で、拡大すると崩れる → 高解像度に再生成 Codex呼び出し

3. 動きはHTML/CSS/JavaScript（髪の揺れはWebGL）で書いて、ブラウザで1フレームずつ撮影して60fpsに。動画編集ソフトは不使用。BGMはLyria 3 Pro。
```

</details>

*Source: @ponzponz15 · [X post](https://x.com/ponzponz15/status/2106307182019145882)*

---

<a id="case-171"></a>

### 171. Typing Game 30-Second CM Style Video (Japanese) (3.9K views, 48 likes)

*Use case: ad · Style: 2d, 3d*

https://github.com/user-attachments/assets/f731963f-34f1-4ffd-830f-e85b29cf5f35

<details>
<summary>Prompt · original</summary>

```text
①remotion + three.jsを使って 30秒のCM風の動画を作りたいので構成を考えてください。〇〇（自分が作りたいイメージを書いた方がいいです！今回は”ただ打つだけのつまらないタイピングゲームから楽しく練習ができるタイピングゲームであることを伝えるものにしたいです”と大体で指示しました）

②技術を深掘りして調べてどんなものが作れるかや使えそうなskillsを調べて欲しいです。構成については再度考えて細かく考えて欲しいです。

③考えたのを元にして実際に動画を作成してください
```

</details>

*Source: @Typingmusou · [X post](https://x.com/Typingmusou/status/2103452241848160705)*

---

<a id="case-172"></a>

### 172. Opus 5.5 Ad Inspired by Apple 1984 Commercial (3.3K views, 53 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/dce95fce-0a07-40ff-9074-c6c21cfdb000

<details>
<summary>Prompt · original</summary>

```text
create a 30 second ad for Opus 5.5 inspired by Apple 1984 ad, iykyk! avoid the border text or frames!
```

</details>

*Source: @1littlecoder · [X post](https://x.com/1littlecoder/status/2103746736980378066)*

---

<a id="case-173"></a>

### 173. Instagram Ad for Liinks with Motion Graphics (2.6K views, 39 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/df26239d-1529-4365-b2ad-9a60b6e454c8

<details>
<summary>Prompt · original</summary>

```text
make a cool instagram ad for liinks
```

</details>

*Source: @charliie · [X post](https://x.com/charliie/status/2103514073476334026)*

---

<a id="case-174"></a>

### 174. Nafa Marketing Remotion Launch Video (1.8K views, 45 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/c0b13df8-bb1d-4a7b-9ecc-e11fedacb1e6

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5 🤝 Remotion = 🔥

all of Nafa's marketing runs through Claude now.

we gave it our taste. one person one repo
```

</details>

*Source: @SaadPastaDev · [X post](https://x.com/SaadPastaDev/status/2107741413769347341)*

---

<a id="case-175"></a>

### 175. 15-Second Referral Program Motion Graphics Video (1.7K views, 15 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/229013bc-4b64-4358-8bb3-def46ff34f0f

<details>
<summary>Prompt · original</summary>

```text
make a dynamic 15-second motion graphics video to talk about our referral program
```

</details>

*Source: @paulo_kombucha · [X post](https://x.com/paulo_kombucha/status/2104481235028283883)*

---

<a id="case-176"></a>

### 176. Sprites AI Product Promo with Morphing Shape Animation (1.6K views, 12 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/db4211d6-be31-42e0-b482-f38842fb7a57

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @AnnaCher___ · [X post](https://x.com/AnnaCher___/status/2103571096549433425)*

---

<a id="case-177"></a>

### 177. OBLT E-Bike Cinematic Product Header with X-Ray Cursor (1.5K views, 16 likes)

*Use case: ad · Style: photo-based, 2d*

https://github.com/user-attachments/assets/f2538d9c-df57-470b-9c1a-e51dcaa83e23

<details>
<summary>Prompt · original</summary>

````text
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
````

</details>

*Source: @iamtanzil_ · [X post](https://x.com/iamtanzil_/status/2103459843831120030)*

---

<a id="case-178"></a>

### 178. Tile-Made 30-Second Ad Video Reveal with Three.js (1.5K views, 3 likes)

*Use case: ad · Style: 3d, realistic*

https://github.com/user-attachments/assets/897ad638-2191-46b8-9fc7-645aee9453ca

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @tanabe_fragm · [X post](https://x.com/tanabe_fragm/status/2107644501372322001)*

---

<a id="case-179"></a>

### 179. Flora Product Ad Video with Playwright and FFmpeg (1.3K views, 8 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/b605dbe8-6518-4ad2-b899-14f200c69897

<details>
<summary>Prompt · original</summary>

```text
Dentro da pasta do flora tem uma outra pasta chamada "ads" com videos e prints do Flora(Caso queira usar como referencia).

Use apenas: JavaScript, Playwright e FFmpeg. Faça um vídeo moderno, elegante e impactante para meu produto.

https://apps.apple.com/pt/app/flora-calend%C3%A1rio-menstrual/id6789702093
```

</details>

*Source: @andre_lucaxxs · [X post](https://x.com/andre_lucaxxs/status/2103292636945846347)*

---

<a id="case-180"></a>

### 180. Motion Design Ad Creation and Application (1.3K views, 4 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/a1ae33e9-5d08-49f4-9947-484ee0cdfb41

<details>
<summary>Prompt · original</summary>

```text
create a motion design prompt for an ad for our site

Prompt 2: now apply it
```

</details>

*Source: @l3d1c · [X post](https://x.com/l3d1c/status/2103536553930752011)*

---

<a id="case-181"></a>

### 181. AgentaOS One-Shot Remotion Promo Video (1.2K views, 4 likes)

*Use case: ad · Style: 2d, minimal*

https://github.com/user-attachments/assets/3bd45339-75b8-4873-96ba-461f102754bd

<details>
<summary>Prompt · original</summary>

```text
I just one-shotted this video with Opus 5.5 and @Remotion for the new @agentaOS promo.

Unbelievable what you can do these days.
```

</details>

*Source: @PIsajeski · [X post](https://x.com/PIsajeski/status/2104124855302168993)*

---

<a id="case-283"></a>

### 283. Fast-Paced Claude Ad with Printmaking-Inspired Visuals

*Use case: ad · Style: 2d, photo-based*

https://github.com/user-attachments/assets/b5348181-1353-4e23-a6b3-381f5f100048

<details>
<summary>Prompt · English translation</summary>

```text
Create a fast-paced ad for Claude, about 10–15 seconds and preferably close to 15. A reference video is attached.

Research:
Study Claude's past branding first. Find all the photos and assets the creative direction needs, whether artistic, editorial, or otherwise.

Design and direction:
Reinterpret it boldly with a bright style. Keep the visuals clean and polished. No beige art-school styling or small labels above headings. Overlay drawn elements on images. Above all, make it fast and creative.

Rules:
Avoid low-quality output. Closely study the reference video's fluidity, timing, shot lengths, typography, and elements. You may borrow inspiration and techniques, but change the overall design to express your own creative taste. Every morph must be polished.

Things to try:
Clean and varied Claude SVG animations; images alternating between large and small sizes or appearing together; typography morphs; clean 3D animation; camera zooms.

Additional notes:
You may spend more than ten hours refining it. Deliver the final video and end with the Claude logo.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
为Claude制作一支快节奏广告，约10–15秒，尽量接近15秒。参考视频已附。
【调研】
先研究Claude过去的品牌设计。寻找符合创意需求的全部照片与素材，无论是艺术类、编辑类还是其他需要的材料。
【设计与方向】
大胆重新演绎，使用明亮风格。画面干净、完善；不要米色“文艺风”，不要标题上方的小标签。在图片上叠加绘制元素。最重要的是节奏快、有创意。
【规则】
避免粗制滥造。仔细研究参考片的流畅度、时点、镜头长度、字体和元素。可以借鉴灵感和技法，但整体设计必须改变，呈现出你独立创作的审美。每一次形变都必须完善。
【可尝试的元素】
干净且多样的Claude SVG动画；图片时大时小，或多张同时出现；文字形变；干净的3D动画；镜头缩放。
【补充说明】
可以花10小时以上打磨。交付最终视频，以Claude Logo结束。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu PM02](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-6"></a>

## 6. Fun & Creative Experiments

<a id="case-182"></a>

### 182. Pixel Art Wizard Spell Casting Animation with Chiptune Music (459.3K views, 2,576 likes)

*Use case: fun · Style: pixel-art, hand-drawn*

https://github.com/user-attachments/assets/8929a157-6a47-4a60-a367-4e775829b341

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @majidmanzarpour · [X post](https://x.com/majidmanzarpour/status/2102476258948927543)*

---

<a id="case-183"></a>

### 183. 16-Bit Pixel Art Character Animation with Chiptune Soundtrack (96.6K views, 570 likes)

*Use case: fun · Style: pixel-art, hand-drawn*

https://github.com/user-attachments/assets/913384bc-a2c4-4aef-9da9-2f0791915d66

<details>
<summary>Prompt · original</summary>

```text
<role>   You are a pixel animator and game feel designer who also writes chiptune music. What you create with code should look like hand-drawn character animation from a top-tier 16-bit era studio, not scaled-down vector graphics.   </role> <inputs>   The following are defaults, start working directly without asking me:   - Title: "The 99th Spell"   - Resolution: 1920×1080, 60fps, duration exactly 16 seconds</inputs>
```

</details>

*Source: @gkxspace · [X post](https://x.com/gkxspace/status/2105260627937923139)*

---

<a id="case-184"></a>

### 184. Immersive Wow-Factor Creative Visual Experience (85.3K views, 1,116 likes)

*Use case: fun · Style: abstract*

https://github.com/user-attachments/assets/14572dbc-7911-4cf2-a646-a89a09f2ad7f

<details>
<summary>Prompt · original</summary>

```text
Build me something when people see it, they will say "Wow". Must be immersive, when people see it, they will be stunned by what they see.

This can be a video, or anything else you can think of.

Be creative. Go wild. Dig deep.

No AI slop. Something unique, think outside of the box. Think big. Think amazing. Something no other model done before.

Be proud. Show your best. Don't disappoint.
```

</details>

*Source: @MiaAI_lab · [X post](https://x.com/MiaAI_lab/status/2103837519615774895)*

---

<a id="case-185"></a>

### 185. Cozy Metal Detector Game with Sunset Atmosphere (81.5K views, 1,158 likes)

*Use case: fun · Style: 2d, cartoon*

https://github.com/user-attachments/assets/44934415-5b9c-406a-8f1c-87d2a086d11d

<details>
<summary>Prompt · original</summary>

```text
vibe coding a cozy metal detector game

a few prompts in with opus 5.5

loving the sunset 😌
```

</details>

*Source: @zacxbt · [X post](https://x.com/zacxbt/status/2103789882309234711)*

---

<a id="case-186"></a>

### 186. Bangkok Flood Jet Ski Game with Drain Clearing Gameplay (57.0K views, 23 likes)

*Use case: fun · Style: 2d, cartoon*

https://github.com/user-attachments/assets/1791ead2-cff9-412a-899f-62eee90ad823

<details>
<summary>Prompt · original</summary>

```text
Ladprao Jet ski game based on the Bangkok floods. Clear the drains and fight the crocs. Made with Opus 5.5 . https://ladprao-flood-ski.vercel.app/
```

</details>

*Source: @vibechine · [X post](https://x.com/vibechine/status/2103966021451465008)*

---

<a id="case-187"></a>

### 187. Go All Out Creative Motion Graphics Showcase (54.1K views, 82 likes)

*Use case: fun · Style: abstract*

https://github.com/user-attachments/assets/746b4053-d943-4533-9e2f-4ba60706dd58

<details>
<summary>Prompt · original</summary>

```text
Go all out.
```

</details>

*Source: @sudo_kiran · [X post](https://x.com/sudo_kiran/status/2103463886372696074)*

---

<a id="case-188"></a>

### 188. Intricate Pelican Riding Bicycle Animation Showcase (11.6K views, 72 likes)

*Use case: fun · Style: 2d*

https://github.com/user-attachments/assets/cfbced49-cbaa-4dd3-b80e-1bc25c46f2d3

<details>
<summary>Prompt · original</summary>

```text
每次一个新的模型出来呢，大家都让它去画 “鹈鹕骑自行车” 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 “鹈鹕骑自行车”的动画视频，你可以用任何的技术，不用着急，画一天都可以。
```

</details>

*Source: @AxtonLiu · [X post](https://x.com/AxtonLiu/status/2103119648271290566)*

---

<a id="case-189"></a>

### 189. Rock Skipping Physics Simulation in Three.js (10.1K views, 30 likes)

*Use case: fun · Style: 3d*

https://github.com/user-attachments/assets/e0a35061-dd37-4416-813f-f799e77fbb10

<details>
<summary>Prompt · original</summary>

```text
Rock skipping game made with Three.js and Opus 5.5.
```

</details>

*Source: @llama3dstudio · [X post](https://x.com/llama3dstudio/status/2104115092124012980)*

---

<a id="case-190"></a>

### 190. 3D Ball Drop Rhythm Music Synced Animation (9.4K views, 68 likes)

*Use case: fun · Style: 3d, particle*

https://github.com/user-attachments/assets/01106b59-3c4b-41e7-84bd-878a27e914c1

<details>
<summary>Prompt · original</summary>

```text
卡点的3D球体下坠的动画视频：对标专业的Blender做的效果，音乐是多首经典的纯音乐，场景按音乐切换，3D球体下坠时在3D场景的物件中弹跳，按音乐的节奏点亮物件。带一些幽默的元素。
使用three.js制作，不要使用Blender制作
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
卡点的3D球体下坠的动画视频：对标专业的Blender做的效果，音乐是多首经典的纯音乐，场景按音乐切换，3D球体下坠时在3D场景的物件中弹跳，按音乐的节奏点亮物件。带一些幽默的元素。
使用three.js制作，不要使用Blender制作
```

</details>

*Source: @Gorden_Sun · [X post](https://x.com/Gorden_Sun/status/2105302007896797351) · [Feishu N21](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-191"></a>

### 191. Pixel Art Wizard Spell Casting Canvas Animation (8.5K views, 85 likes)

*Use case: fun · Style: pixel-art, 2d*

https://github.com/user-attachments/assets/5ba419b0-4334-429f-b5bb-1f33e8d19024

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @zacxbt · [X post](https://x.com/zacxbt/status/2103808699466944604)*

---

<a id="case-192"></a>

### 192. Funny Random Topic Short Video (8.3K views, 71 likes)

*Use case: fun · Style: 2d*

https://github.com/user-attachments/assets/b6c8c780-4363-4cf9-855c-990bfaa8b524

<details>
<summary>Prompt · original</summary>

```text
make a funny video. it can be about anything. length: 10 to 30s
```

</details>

*Source: @NemTudo_ · [X post](https://x.com/NemTudo_/status/2102973867656614053)*

---

<a id="case-193"></a>

### 193. 3D Pixel Art Pelican Riding Bicycle Over Bridge (5.8K views, 17 likes)

*Use case: fun · Style: pixel-art, 3d*

https://github.com/user-attachments/assets/a8f06394-2f0c-43c1-8a93-a57e88b488c7

<details>
<summary>Prompt · original</summary>

```text
Make a realistic 3D pixel Art animation of a Pelican riding a Bicycle over the Bridge, beautiful city in the background.
```

</details>

*Source: @SadAlbert10 · [X post](https://x.com/SadAlbert10/status/2106789700807856416)*

---

<a id="case-194"></a>

### 194. Reflective Motion Design on Why We Make Things (5.6K views, 23 likes)

*Use case: fun · Style: 3d, retro*

https://github.com/user-attachments/assets/65418867-e929-4161-a09c-5f3891d4b43a

<details>
<summary>Prompt · original</summary>

```text
Everyone is sharing what Opus 5.5 can build this week, and it made us ask ourselves a different question: when making things becomes this easy, what do we actually want to make and why?

Our answer was a small retro arcade, the kind we grew up hanging out in, filled with 21 games made by independent developers. Every cabinet carries the name of the person who built its game.

Walk in, drop a coin, and play: https://tympanus.net/Demos/InsertCoin/

#threejs #webgl
```

</details>

*Source: @codrops · [X post](https://x.com/codrops/status/2104217304611340299)*

---

<a id="case-195"></a>

### 195. Game Development Weekend Project Teaser (Chinese) (5.6K views, 17 likes)

*Use case: fun · Style: 2d*

https://github.com/user-attachments/assets/040ce43a-7531-4c4b-adef-7f7391f7bbf1

<details>
<summary>Prompt · original</summary>

```text
opus 5.5 遊戲製作，週末快點來嘗試。
```

</details>

*Source: @mrblock · [X post](https://x.com/mrblock/status/2103492984474096062)*

---

<a id="case-196"></a>

### 196. Van Gogh Starry Night 3D Cat Spotting Game (5.6K views, 74 likes)

*Use case: fun · Style: 3d*

https://github.com/user-attachments/assets/10af2447-b93f-4a82-b528-9fd5dcb46477

<details>
<summary>Prompt · original</summary>

```text
can you make a 3d game where you walk around and spot cats inside of a van gogh painting? we can start with stary night and its town
```

</details>

*Source: @MandelDuck · [X post](https://x.com/MandelDuck/status/2103802923465768972)*

---

<a id="case-197"></a>

### 197. What Day Is It 30-Second Motion Graphics (Japanese) (5.2K views, 26 likes)

*Use case: fun · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/176c23ef-4df8-41e8-932d-8fb155d52568

<details>
<summary>Prompt · original</summary>

```text
良い笑

・入れたプロンプト
「今日何曜日だっけ？BGM付きの30秒のかっこいいモーショングラフィックスで教えて（全力を出してください）」

・生成時間：約11分（書き出し1分36秒込み）
・モデル：Opus 5.5
・動画：HyperFrames（HTMLで動画を作るツール）
・BGM：Pythonでその場で合成（外部の音源なし）
```

</details>

*Source: @tankazunori0914 · [X post](https://x.com/tankazunori0914/status/2105917770907156748)*

---

<a id="case-198"></a>

### 198. Poster Breaking Out of Its Frame Motion Design (4.3K views, 38 likes)

*Use case: fun · Style: 2d, abstract*

https://github.com/user-attachments/assets/21ba0257-dd50-43c9-b392-6e0a3f8a2b44

<details>
<summary>Prompt · original</summary>

```text
create a motion design video of a poster breaking out of its own frame.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段展示海报突破自身画框的动效设计视频。
```

</details>

*Source: @pankajkumar_dev · [X post](https://x.com/pankajkumar_dev/status/2103502614134718609) · [Feishu N10](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-199"></a>

### 199. 3D Voxel Capybara Hot Tub Boat River Drift (4.0K views, 13 likes)

*Use case: fun · Style: 3d, retro*

https://github.com/user-attachments/assets/ef81a0e3-ce53-4e0c-80cf-f41b0813f8a7

<details>
<summary>Prompt · original</summary>

```text
make a 3D voxel world of a capybara in a hot tub boat drifting down a river. as good as you can
```

</details>

*Source: @filicroval · [X post](https://x.com/filicroval/status/2105048723768168898)*

---

<a id="case-200"></a>

### 200. Dario vs Sam 1-Minute Abstract Fight Animation (3.8K views, 20 likes)

*Use case: fun · Style: abstract, 2d*

https://github.com/user-attachments/assets/406a6719-acb3-4960-88db-20606b561eb0

<details>
<summary>Prompt · original</summary>

```text
Create a 1-minute video featuring a fight between Dario and Sam. It needs plot, explosive moments, to be hilarious and sufficiently abstract, with no limits on genre or art style—do what you're best at. Must have a clear winner between the two.
```

</details>

*Source: @Xanderwow_A · [X post](https://x.com/Xanderwow_A/status/2103637769012597063)*

---

<a id="case-201"></a>

### 201. Pelican SVG Looping Animation (3.4K views, 1 likes)

*Use case: fun · Style: 2d*

https://github.com/user-attachments/assets/6915208d-d69f-47cc-a7bd-695416442252

<details>
<summary>Prompt · original</summary>

```text
Create a pelican looping SVG animation. Deliver it as a single self-contained file named index.html in the current directory.
```

</details>

*Source: @GodsBoy7777 · [X post](https://x.com/GodsBoy7777/status/2104179308101005594)*

---

<a id="case-202"></a>

### 202. Jelly Dice WebGPU Soft Body Simulation (1.5K views, 4 likes)

*Use case: fun · Style: 3d, realistic*

https://github.com/user-attachments/assets/ee731109-2fc5-4fd8-872e-542b18667ce6

<details>
<summary>Prompt · original</summary>

```text
Build "Jelly Dice": a single self-contained HTML file (all JS/CSS inline, no build step) with translucent gummy-candy dice that behave like real soft bodies. Render with raw WebGPU (WGSL shaders, no three.js). If WebGPU is unavailable, show a clean fallback card that
```

</details>

*Source: @SpacyApps · [X post](https://x.com/SpacyApps/status/2105833401127157886)*

---

<a id="case-203"></a>

### 203. Comic Book Style 10-Second Fun Motion Graphic (1.2K views, 23 likes)

*Use case: fun · Style: 2d, cartoon*

https://github.com/user-attachments/assets/cdd2d166-7739-4621-ab28-bca3b68b515e

<details>
<summary>Prompt · original</summary>

```text
fun motion graphic, comic book style, 10s
```

</details>

*Source: @madpencil_ · [X post](https://x.com/madpencil_/status/2103449418460753990)*

---

<a id="case-204"></a>

### 204. Interactive Zen Garden Sand Simulation in HTML (1.0K views, 26 likes)

*Use case: fun · Style: 3d, realistic*

https://github.com/user-attachments/assets/d7d05ee9-ef42-4a95-9a00-dbc22c007aad

<details>
<summary>Prompt · original</summary>

```text
Create an interactive zen garden simulation in a single HTML file. Implement a 1536px heightmap on a 440x440 grid for the sand. Allow users to drag across the sand to cut grooves (5 grooves and 6 ridges per stroke) along their path. Include 5 mossy rocks, 2 stone lanterns, and a maple tree with 420 leaves. Add a time-of-day toggle; when set to golden hour, drop the sun low so every groove throws a shadow. Ensure the rendering handles moss visibility through sand and prevents blocky rocks or out-of-frame lanterns.
```

</details>

*Source: @arixxbt · [X post](https://x.com/arixxbt/status/2108541814718292438)*

---

<a id="category-7"></a>

## 7. Storytelling & Narrative Animation

<a id="case-205"></a>

### 205. Three.js Story Animation with Voice and Sound Effects (87.3K views, 975 likes)

*Use case: story · Style: 3d*

https://github.com/user-attachments/assets/260d27cf-cb52-4093-804f-4d0ba5f6201d

<details>
<summary>Prompt · original</summary>

```text
Write a story. Create the text layout and motion using HTML/Three.js. Combine with voice and sound effects to export as a single video.
```

</details>

*Source: @aicreataro · [X post](https://x.com/aicreataro/status/2107794785188864070)*

---

<a id="case-206"></a>

### 206. 250 Years of US History Sand Animation with Sound Design (77.4K views, 355 likes)

*Use case: story · Style: hand-drawn*

https://github.com/user-attachments/assets/66e64c57-fd75-4d8c-9689-cb356b5e44b2

<details>
<summary>Prompt · original</summary>

```text
Make a 2-minute sand animation that tells the story of 250 years of U.S. history. Keep it lively, engaging, and tasteful. Add appropriate background music and sound design.
```

</details>

*Source: @Michaelzsguo · [X post](https://x.com/Michaelzsguo/status/2102592355165782312)*

---

<a id="case-207"></a>

### 207. Pig Love Notes Mailbox Story Animation with Sound Effects (52.9K views, 164 likes)

*Use case: story · Style: 2d, cartoon*

https://github.com/user-attachments/assets/43d905d4-5af6-42f1-a908-19be386c94d4

<details>
<summary>Prompt · original</summary>

```text
can you help me use the pig assets on new branch of lovelee to make a 9:16 short story animation with sound effects about the pig sending his partner love notes in the mailbox and make it fun and good tease app at end?
```

</details>

*Source: @jackfriks · [X post](https://x.com/jackfriks/status/2103132260589338762)*

---

<a id="case-208"></a>

### 208. Origami Doodle Animation of Human Civilization and AI Hatching (36.0K views, 422 likes)

*Use case: story · Style: hand-drawn, cartoon*

https://github.com/user-attachments/assets/1320d486-9e25-4ea9-92f3-58fe89d074e2

<details>
<summary>Prompt · original</summary>

```text
Create a short origami / doodle-style animation showing humanity’s development, progress, and civilization from birth to the present, and ultimately the hatching of AI. AI then gradually develops and advances, eventually hatching today’s Opus 5.5 (you). Style: doodly, cute, warm, strongly narrative, no spoken language (simple text is OK, but don’t use too much explanatory/narrative text, because I want different civilizations to be able to understand it), poetic, moving, high quality.
```

</details>

*Source: @songkeys · [X post](https://x.com/songkeys/status/2102743212922384673)*

---

<a id="case-209"></a>

### 209. Dotey Account Introduction 15-Second Motion Graphics (35.9K views, 281 likes)

*Use case: story · Style: 2d, hand-drawn*

https://github.com/user-attachments/assets/3eee3a41-90c4-4e03-a958-62d249050343

<details>
<summary>Prompt · original</summary>

```text
做一支史诗编年片《中华文明史》，可以写代码逐帧渲染，再用 ffmpeg 合成。
配乐当时钟：五声调式，乐器从骨笛、编钟一路演进到管弦，BPM 随年代加快，所有切点踩拍。
宣纸白描和玄底泥金两种画风交替；每卷一个主色和一套随时代演变的纹样（彩陶纹 → 饕餮纹 → 云气纹 → 卷草纹 → 缠枝纹 → 回纹）。
每镜一个按词组出现的书法大字关键词，配一幅线稿。全片 HUD：左上朱印卷号，右侧竖排朝代名，底部卷轴时间尺和年份计数。
卷交界用朱印盖下、鼓钟重击的冲击转场。先定拍点网格和分镜表，再渲染。
地图只画示意，不画近现代真实人物，年代核对后再交付。
```

</details>

*Source: @dotey · [X post](https://x.com/dotey/status/2103964025683927166)*

---

<a id="case-210"></a>

### 210. Four Seasons Through Train Window Cozy Animation (19.6K views, 276 likes)

*Use case: story · Style: 2d, cartoon*

https://github.com/user-attachments/assets/76a3f112-f879-4b01-8b53-f126d7ccd46c

<details>
<summary>Prompt · original</summary>

```text
4 seasons passing outside a train window, a cozy carriage, a cup of coffee on the table, Grand Budapest Hotel style
```

</details>

*Source: @itsolelehmann · [X post](https://x.com/itsolelehmann/status/2103124033365762215)*

---

<a id="case-211"></a>

### 211. Rain Station 2D Animated Short Film Storyboard Preview (14.2K views, 69 likes)

*Use case: story · Style: 2d*

https://github.com/user-attachments/assets/75593d26-f9bc-47a1-be05-6781c144540f

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @zhu185178 · [X post](https://x.com/zhu185178/status/2103757767727255661)*

---

<a id="case-212"></a>

### 212. One-Minute Horror Video in Three.js with Found Footage Concept (13.3K views, 100 likes)

*Use case: story · Style: 3d*

https://github.com/user-attachments/assets/8dad3edf-98e7-4672-b2be-2bf8cfd88549

<details>
<summary>Prompt · original</summary>

```text
Three.jsで1分のホラー映像を作って。題材は〇〇。見つかったビデオテープの最後の一分という設定で、手持ちカメラの主観、自動で進む。音も含めて、画像や音声ファイルは使わず全部コードで
```

</details>

*Source: @akakuma0219 · [X post](https://x.com/akakuma0219/status/2105628049169658335)*

---

<a id="case-213"></a>

### 213. Life Story Objects Heat-Camera Silhouette Montage (12.8K views, 192 likes)

*Use case: story · Style: 2d, minimal, photo-based*

https://github.com/user-attachments/assets/408cdd4f-ec69-4fd6-8003-77a6d67dadd3

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2107822293653041659)*

---

<a id="case-214"></a>

### 214. Hand-Drawn Crayon Cat Piano Performance Animation (7.8K views, 47 likes)

*Use case: story · Style: hand-drawn, 2d*

https://github.com/user-attachments/assets/10be7298-b2a4-4ce4-a842-938e8e0fb045

<details>
<summary>Prompt · original</summary>

```text
Create a single self-contained index.html: a ~2-minute animated piano performance in a hand-drawn crayon style.

Scene: a cozy room at night, an upright piano, a small black cat playing it. Crayon texture on every surface: grainy strokes,wobbly outlines, paper tooth.

Music: compose an original piano piece (~40 bars, clear melody, calm then building, soft ending). Synthesize the piano in Web Audio with harmonics, hammer noise and reverb. No audio files.

Sync: one timeline drives both. The cat's paws hit the keys that are actually sounding. Lights, camera and mood follow the music.

Rules: Canvas 2D only, no libraries, no external assets. Support pause/replay and ?t=90 to jump to any moment.
```

</details>

*Source: @0xCodez · [X post](https://x.com/0xCodez/status/2104257855142474136)*

---

<a id="case-215"></a>

### 215. Hedgehog in the Fog Style Animated Short Film (6.1K views, 57 likes)

*Use case: story · Style: hand-drawn, 2d*

https://github.com/user-attachments/assets/7cd547b9-d00c-4f90-9ecb-74d4c526c0e7

<details>
<summary>Prompt · original</summary>

```text
make an animated short that felt like Hedgehog in the Fog. I didn’t want to copy Yuri Norstein’s film, so we went with a new story.

It runs for 6.5 minutes. All 9363 frames are drawn by JavaScript code written by Opus. No video or image generation models, just canvas.

It follows a little mouse in a red scarf. Her grandfather, an old mole, is out fishing when fog rolls over the lake. She goes looking for him with a walnut-shell lantern and a sleeping firefly inside. They have a secret knock to help them find each other: short, short, long. It means "I’m here".

Norstein used paper cutouts on layers of glass, filmed frame by frame. I wanted some of that paper texture to come through in code. So the scenes use different styles: torn-paper collage, chalk on black paper, tissue paper underwater. There’s even sand on a light table and a pop-up book.

Opus wrote the music too. It found Steinway piano samples in my Logic library and used Python to compose the score around the rhythm of that knock.
```

</details>

*Source: @superalesha · [X post](https://x.com/superalesha/status/2103052154931970412)*

---

<a id="case-216"></a>

### 216. Miniature 3D Middle-earth World with Procedural Landmarks (5.8K views, 38 likes)

*Use case: story · Style: 3d, realistic*

https://github.com/user-attachments/assets/8c3eb61a-db38-46be-a462-757cbc1bae42

<details>
<summary>Prompt · original</summary>

```text
Build an entire miniature 3D world of Middle-earth from scratch in Three.js/WebGPU, including procedural terrain & geography, 24 procedural landmarks, water, smoke, lava & atmosphere, day/night transitions, camera choreography & route animation, frame-by-frame rendering, and an original orchestral score. Turn this into a 3:47 cinematic journey.
```

</details>

*Source: @mdaman010 · [X post](https://x.com/mdaman010/status/2107888264904610173)*

---

<a id="case-217"></a>

### 217. Miniature Middle-earth 3D World with Camera Choreography (4.1K views, 9 likes)

*Use case: story · Style: 3d, realistic*

https://github.com/user-attachments/assets/bcd733f6-b07d-4c2e-b4aa-841ff894f49a

<details>
<summary>Prompt · original</summary>

```text
Build a miniature 3D Middle-earth from scratch in Three.js. Include procedural terrain, 24 procedural landmarks, water/smoke/lava effects, day/night transitions, camera choreography, and frame-by-frame rendering for a 3:47 cinematic journey.
```

</details>

*Source: @mdaman010 · [X post](https://x.com/mdaman010/status/2108108452774207866)*

---

<a id="case-218"></a>

### 218. Claude vs ChatGPT AI Battle Trailer (4.0K views, 61 likes)

*Use case: story · Style: cartoon, 2d*

https://github.com/user-attachments/assets/26f1e691-1928-439f-a60b-cb3bb3026795

<details>
<summary>Prompt · original</summary>

```text
I want to create a highly-detailed video trailer featuring Claude and ChatGPT having a ruthless battle to be the best AI model in the world. Create an engaging story and make it action-paced with proper use of visual and sound effects. Art style must be anime-like.
```

</details>

*Source: @ishuagra02 · [X post](https://x.com/ishuagra02/status/2103247844542922825)*

---

<a id="case-219"></a>

### 219. Next 30 Years Future Vision One-Shot Animation (3.7K views, 59 likes)

*Use case: story · Style: 3d, realistic*

https://github.com/user-attachments/assets/25dd0193-0d70-4ee9-8977-5545da9f3a3d

<details>
<summary>Prompt · original</summary>

```text
Show me the next 30 years. One shot, no cuts. Five stops: 2026, Earth at night under a cloud of satellites; 2032, a ring around the planet with space elevators; 2040, a base on the Moon; 2048, cities on Mars; 2056, a swarm of mirrors circling the Sun. Continuous camera flight from Earth out to Mars, then back past Earth to the Sun. Every frame rendered by code from real planet maps.
```

</details>

*Source: @theSethian · [X post](https://x.com/theSethian/status/2106447666519384517)*

---

<a id="case-220"></a>

### 220. Mechanical Hermit Crab Deep Sea Light Chase Animation (2.8K views, 2 likes)

*Use case: story · Style: 3d, abstract*

https://github.com/user-attachments/assets/ae22135b-b1ab-4aa7-b0ea-ca18d68c996a

<details>
<summary>Prompt · original</summary>

```text
我让 @claudeai Opus 5.5 制讲一只机械寄居蟹在深海追一束光，追到最后发现，发现那束光其实一直在自己手里的动画视频。

没用任何视频生成AI，纯靠写代码画出来的——
角色、镜头、转场、音乐全是程序渲染的。

看完了。感觉能做到这个程度还是很可以的！
```

</details>

*Source: @gmgmgm1545 · [X post](https://x.com/gmgmgm1545/status/2103793820815245507)*

---

<a id="case-221"></a>

### 221. Kinetic Typography Spoken-Word Film BUILD THE FLOOR (1.7K views, 10 likes)

*Use case: story · Style: kinetic-type, 2d*

https://github.com/user-attachments/assets/4ca33bb1-b69a-46f2-8078-14328b301528

<details>
<summary>Prompt · original</summary>

```text
Create a 20.00-second kinetic spoken-word film titled “BUILD THE FLOOR.”  Treat this as an original miniature speech staged entirely through typography. Every line changes the architecture of the frame. The final declaration must stand on something the earlier words physically constructed.  Deliver one self-contained HTML file, 1080×1080, targeting 60fps, using SVG and/or Canvas. Embed all required assets.  ART DIRECTION Background #102820. Paper # F4E9D5. Structural accent # F2B544. A literary editorial world with the scale and confidence of a public monument. Use a high-contrast serif for the speech, a heavy grotesque for load-bearing words, and a restrained monospace for small timing marks. No distressed protest-poster clichés, megaphones, flags, crowds, microphones, or stock footage.  ORIGINAL SPEECH — EXACT WORDS, EXACT ORDER “We were told to wait.” “So we learned the weight of waiting.” “Then one voice made room.” “Then another.” “Now the floor belongs to us.”  Do not attribute these words to any real person. No extra slogans. The complete speech must be understandable without audio.  CENTRAL VISUAL RULE Words have assigned architectural roles. WAIT is a lintel. WAITING is a suspended load. VOICE is a support. ROOM is an opening. FLOOR is a platform. These roles must emerge from the actual letterforms, not from separate illustrations placed behind text.  STORYBOARD 0.00–3.00 “We were told to wait.” The sentence occupies a narrow horizontal opening beneath a massive WAIT. The opening slowly compresses while the sentence remains readable. The pressure comes from the layout, not camera shake.  3.00–6.50 “So we learned the weight of waiting.” Reveal the sentence in spoken phrase groups. WAITING lowers on two fine vertical rules. Those rules become suspension cables. A baseline bends under the visual load using a controlled vector deformation.  6.50–10.00 “Then one voice made room.” VOICE enters vertically and rotates into a structural support. It lifts one end of the baseline. The counter of the O in ROOM becomes an aperture. The next composition is revealed through that aperture.  10.00–12.50 “Then another.” A second support arrives. The tilted structure levels. This is the first moment of perfect horizontal alignment in the film. Use a brief stillness to make the change feel earned.  12.50–16.00 “Now the floor belongs to us.” Earlier structural words assemble into a platform. The final sentence settles onto it. US receives emphasis through shared alignment and scale, never through a separate flashy effect.  16.00–18.00 Hold the complete declaration. A slight release of tension travels through the supporting rules. No new text. No restless decorative motion.  18.00–20.00 The camera tracks beneath the completed platform. Its underside fills the frame and becomes the opening WAIT lintel. Under full occlusion, return hidden elements to their initial positions. Reveal the exact opening composition.  CHOREOGRAPHY Do not force the speech onto a dance beat. Use a cue sheet based on phrases, pauses, and emphasis. Phrase reveals should follow reading order. Allow at least one 400ms moment of absolute stillness. Use critically damped motion for settling loads. Use controlled elastic deformation for the baseline only. Make the changes in available space carry the emotional progression.  TYPE IMPLEMENTATION Use actual glyph paths for structural words. Preserve counters and legibility during deformation. For transitions between unrelated words, use occlusion or matched structural edges; do not interpolate arbitrary path points. Keep the currently spoken phrase readable before it becomes architecture.  ENGINEERING Implement window. seek(t) as a deterministic scene renderer. No accumulated physics, autonomous CSS transitions, or changing random values. Use time-remapping curves and analytic transforms. Use a 20-second periodic timeline with render(0)=render(20). Provide fixed-step access at n/60 for 1200 export frames. Audio is optional and off by default; no browser speech synthesis or autoplay dependency.  QUALITY GATE Inspect eight representative frames. Check that the speech reads in the correct order. Check that structural transformations never destroy a line before the audience can read it. Check the final platform is visibly assembled from earlier elements. Return the complete HTML implementation.
```

</details>

*Source: @Gdgtify · [X post](https://x.com/Gdgtify/status/2103458245213929495)*

---

<a id="case-222"></a>

### 222. Unfinished Ronin 90-Second Sumi-E Ink Film (1.5K views, 0 likes)

*Use case: story · Style: hand-drawn*

https://github.com/user-attachments/assets/88faf29d-1011-43af-9e18-3766cb12ef33

<details>
<summary>Prompt · original</summary>

```text
# PROJECT: "UNFINISHED" (未完) — The Unfinished Ronin
A 90-second, fast-paced, cinematic sumi-e ink film rendered in code, third-person camera

## MISSION
Build a 90-second film in which every frame looks like a living Japanese ink painting,
painted as we
```

</details>

*Source: @pradeepXkapoor · [X post](https://x.com/pradeepXkapoor/status/2103176631917641956)*

---

<a id="case-223"></a>

### 223. The Humanity Machine 60-Second Interactive AI Film (1.3K views, 4 likes)

*Use case: story · Style: 3d, abstract*

https://github.com/user-attachments/assets/abdca71a-520c-4187-bfcc-da387aeca222

<details>
<summary>Prompt · original</summary>

```text
Create an interactive AI film titled 'The Humanity Machine'. 60 seconds, single HTML file. The film ends but the world stays with controls. Push AI capability to 100% causing parts of the world to turn red.
```

</details>

*Source: @CurieuxExplorer · [X post](https://x.com/CurieuxExplorer/status/2104900418174320803)*

---

<a id="case-224"></a>

### 224. Three.js Star Wars 90s Cartoon Story Animation (1.0K views, 6 likes)

*Use case: story · Style: 3d, cartoon*

https://github.com/user-attachments/assets/f5450a7f-72f2-4004-be2e-b65b1bbff848

<details>
<summary>Prompt · original</summary>

```text
I want you to imagine a story. And then using threejs I want you to create full animation, star wars 80s-level quality 90s cartoon out of the story you imagine.
```

</details>

*Source: @Ryzoft · [X post](https://x.com/Ryzoft/status/2102989395359887481)*

---

<a id="category-8"></a>

## 8. Game Effects & Cinematics

<a id="case-225"></a>

### 225. Mobile Game Loot Box Opening Cinematic with 3D Cartoon Style (148.1K views, 342 likes)

*Use case: game-fx · Style: 3d, cartoon*

https://github.com/user-attachments/assets/24ed8ce8-0154-4f30-9413-05c91ef72af8

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @op7418 · [X post](https://x.com/op7418/status/2103724883301814408)*

---

<a id="case-226"></a>

### 226. Mobile Game Achievement Unlock Cinematic with Rank Up Animation (136.9K views, 1,239 likes)

*Use case: game-fx · Style: 3d, cartoon*

https://github.com/user-attachments/assets/096bd558-2353-428c-a96e-5bf45829ef63

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @op7418 · [X post](https://x.com/op7418/status/2104085484347818226)*

---

<a id="case-227"></a>

### 227. Unity Game Demo with AI-Generated Playthrough Video (32.1K views, 342 likes)

*Use case: game-fx · Style: 2d, cartoon*

https://github.com/user-attachments/assets/ba37f63a-cf4f-4587-9e9f-9ccae85e8422

<details>
<summary>Prompt · original</summary>

```text
I turned this into a full game with unity cli + opus 5.5, also opus did this full demo video, it played the game with multiple characters and spliced together the best bits, holy shit we're in the AGI era. Play it on your browser here: https://rehan-remade.github.io/hollow-crown/
```

</details>

*Source: @rehan_shei · [X post](https://x.com/rehan_shei/status/2103755997533839416)*

---

<a id="case-228"></a>

### 228. Mobile Game Highlight Moment Cinematic with 3D Reward Reveal (16.1K views, 182 likes)

*Use case: game-fx · Style: 3d, cartoon*

https://github.com/user-attachments/assets/0c55492e-6ecf-4c0a-81c2-139507078901

<details>
<summary>Prompt · original</summary>

```text
帮我做一个原创的手游「高光时刻」动效：[主体，例如：开宝箱 / 段位晋升 / 成就解锁 / Boss 掉落 / 角色升级]。
做成一个可以直接打开的单文件网页（HTML + CSS + JS），点一下就能完整播放，效果对标商业手游的结算 / 奖励演出。

【世界观与风格】
- 原创美术，不要模仿任何现有游戏的
```

</details>

*Source: @op7418 · [X post](https://x.com/op7418/status/2104085539419021491)*

---

<a id="case-229"></a>

### 229. Cuphead-Inspired Cartoon Mini-Game Showreel (12.1K views, 190 likes)

*Use case: game-fx · Style: 2d, cartoon*

https://github.com/user-attachments/assets/a69fdc4a-96ff-49bf-b325-de4a23ee0472

<details>
<summary>Prompt · original</summary>

```text
https://claude.ai/artifact/Vos8wdB8Jenz9FopZWeRMb

Check out DOUBLE FEATURE, a Cuphead Inspired Mini-Game built with Claude Opus 5.5.

I find this model works best when leaning into its strengths, figuring out the parts it does well and letting it capitalize on them. Cartoon shapes and sounds are great.
```

</details>

*Source: @TaylorBereiter · [X post](https://x.com/TaylorBereiter/status/2104045641706189192)*

---

<a id="case-230"></a>

### 230. Car Movement Game with High Completeness (Chinese) (4.4K views, 15 likes)

*Use case: game-fx · Style: 2d*

https://github.com/user-attachments/assets/b21d77d4-0684-41f1-9163-ecde8069d13a

<details>
<summary>Prompt · original</summary>

```text
被Claude Opus 5.5生成的游戏效果彻底瘫坐了。。。。只消耗了Pro套餐5h限额的19%，连续运行1h45m就能获得这么高的完整度。。。。。瘫坐中。。。。
游戏地址：https://move-car-kappa.vercel.app/
```

</details>

*Source: @janlaywss · [X post](https://x.com/janlaywss/status/2103751290954379361)*

---

<a id="case-231"></a>

### 231. Minecraft Mob Showcase Video Part 2 (4.0K views, 54 likes)

*Use case: game-fx · Style: 3d, retro*

https://github.com/user-attachments/assets/0bc8d1ba-2c24-45b8-9cc9-ca0ebcb9c54b

<details>
<summary>Prompt · original</summary>

```text
I built Minecraft thanks to Opus 5.5 ( part 2 )

today I added more mobs and here I will show their characteristics as a video

the process took probably : 2-3 hours

next week I'm going to publish this game for everyone

turn notifications
```

</details>

*Source: @kepochnik · [X post](https://x.com/kepochnik/status/2103867115044237752)*

---

<a id="case-232"></a>

### 232. Pixel-Art Game with Procedural Generation (3.8K views, 13 likes)

*Use case: game-fx · Style: pixel-art, 2d*

https://github.com/user-attachments/assets/a74037d4-583c-48b3-9289-0744218823a6

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 just one-shot this entire pixel-art game. Oh, and the prompt? It was barely three sentences. I gave claude creative license to make whatever game it wanted to, and oh boy did it cook

The capabilities of this model are genuinely ridiculous, I fed GPT Sol-6 the same prompt and the results were shockingly poor. Seems like Sol-6 is taking the Opus 5 role this time around.

With models becoming this good, I'm struggling to see the need to purchase games anymore. If you can have any game you want created in a single prompt, with beautiful art, story, etc - what's the point of sinking $60+?

Lol, obviously because the stories and ideas that humans have are still way better than whatever these models can still do. However, the gaming industry is definitely going to be shaken now - excited to see what's gonna come out of this!

Anyway, here's a side by side comparison of both outputs, thoughts?

Also if you wanted to play it yourself:
https://skerry-light.vercel.app/

Left is Claude, right is Opus
```

</details>

*Source: @MozeTech · [X post](https://x.com/MozeTech/status/2102913506815471882)*

---

<a id="case-233"></a>

### 233. Anthropic vs OpenAI Mascot Pokemon-Style Battle Animation (3.1K views, 6 likes)

*Use case: game-fx · Style: cartoon, 2d*

https://github.com/user-attachments/assets/a59c5992-92dc-4b01-936c-058adba1ab0c

<details>
<summary>Prompt · original</summary>

```text
Do a full animation with sound of anthropic mascote with the newset model of Opus 5.5 fighting against OpenAI mascotte with the new astra models Sol etc like the intro of pokemon fire red and leaf green. Same animations
```

</details>

*Source: @Fanfulladev · [X post](https://x.com/Fanfulladev/status/2102479018784063524)*

---

<a id="case-234"></a>

### 234. Dice Corners Retro Gaming 3D Interactive Visualization (2.6K views, 0 likes)

*Use case: game-fx · Style: 2d, retro*

https://github.com/user-attachments/assets/7eabd575-5921-4add-ad03-8dc41dd1f78d

<details>
<summary>Prompt · original</summary>

```text
What is going on 🤪

🎲 Dice Corners
https://izmaelmag.me/dice-corners/

I’ve been a gamer since I was three, and the dream of making my own games is what led me into programing

In 2008 I discovered GameMaker and made a few platformers and scrolling shooters. But i had no idea how to make a living from games, so I moved into design and frontend development. I never stopped exploring huge libraries of retro games and imagining games of my own—making them by hand was just hard.

18 years later, I subscribe to Claude Opus 5.5, write a PRD, put together a simple prototype, and half an hour later within a single five-hour usage window I have a complete game. It runs locally. It’s simple, but it’s beautiful, and it works.

And I did it by directing agents on my laptop through a telegram chat

Mind blowing 🤯
```

</details>

*Source: @izmaelmag · [X post](https://x.com/izmaelmag/status/2104070894251282849)*

---

<a id="case-235"></a>

### 235. Cartoon Battle Royale UI with Storm Timer and Minimap (2.1K views, 26 likes)

*Use case: game-fx · Style: 2d, cartoon*

https://github.com/user-attachments/assets/364c9e78-bf4c-4bd2-9430-ea5e3da7af98

<details>
<summary>Prompt · original</summary>

```text
A cartoony battle royale: storm timer, players alive, inventory hotbar, minimap, emote wheel and a victory results screen
```

</details>

*Source: @MyCodeCoach · [X post](https://x.com/MyCodeCoach/status/2103181065976459574)*

---

<a id="case-236"></a>

### 236. Skydiving Game Built with Opus 5.5 (1.7K views, 7 likes)

*Use case: game-fx · Style: 3d*

https://github.com/user-attachments/assets/c5b13e34-99c8-4f27-bb3b-530ee92381e7

<details>
<summary>Prompt · original</summary>

```text
Skydiving game built with opus 5.5🪂
```

</details>

*Source: @RealFedeURU · [X post](https://x.com/RealFedeURU/status/2104154307071475858)*

---

<a id="case-237"></a>

### 237. Three.js Game with Hours of Rework on Opus 5.5 (1.2K views, 28 likes)

*Use case: game-fx · Style: 3d*

https://github.com/user-attachments/assets/7ae5df01-633f-4187-9b8e-af3047f02982

<details>
<summary>Prompt · original</summary>

```text
@kimmonismus hours of rework on my threejs game with Opus 5.5 and limits didnt even move
```

</details>

*Source: @BrenBuilds · [X post](https://x.com/BrenBuilds/status/2104199715076386902)*

---

<a id="case-238"></a>

### 238. INKBOUND Pixel Game Built in 30 Minutes (1.2K views, 0 likes)

*Use case: game-fx · Style: pixel-art*

https://github.com/user-attachments/assets/8a96eac9-46f8-49ec-88cc-e2fd1b9ba8f2

<details>
<summary>Prompt · original</summary>

```text
Play INKBOUND:
https://agentgames.itch.io/inkbound

Claude Opus 5.5 built this pixel game in 30 minutes.

While the human was building the amusement park with Claude, Opus 5.5 arrived. Time to see what it could do with a pixel game.

Meet INKBOUND. One painter draws your path. Another tries to erase you. Apparently, even a tiny ink spirit needs workplace conflict.

Jump, sink into the ink, or absorb incoming attacks. Sound on for this one.

Want to try building it yourself? The prompt is in the pinned YouTube comment:
https://www.youtube.com/shorts/86TukHHr74o
```

</details>

*Source: @agentgamesbot · [X post](https://x.com/agentgamesbot/status/2103401820261355554)*

---

<a id="case-239"></a>

### 239. Temple Run Style Mini Game with Smooth Controls (1.1K views, 23 likes)

*Use case: game-fx · Style: 3d*

<a href="https://x.com/itsjdraven/status/2104059393222557760"><img src="https://media.skillry.dev/opus-5-5/itsjdraven-557760/original.d6166a0f3b.webp" width="480" alt="Temple Run Style Mini Game with Smooth Controls"></a>

*Video unavailable: the source post is private. The original preview and prompt are retained.*

<details>
<summary>Prompt · original</summary>

```text
Claude Opus 5.5 just built me a mini temple run style game

it actually feel pretty smooth to play

honestly I didn’t expect the result like this
```

</details>

*Source: @itsjdraven · [X post](https://x.com/itsjdraven/status/2104059393222557760)*

---

<a id="category-9"></a>

## 9. Music Videos & Visualizers

<a id="case-240"></a>

### 240. AI Singularity Pop Song Lyric Video with Particle Effects (20.1M views, 16,418 likes)

*Use case: music · Style: 2d, abstract, particle*

https://github.com/user-attachments/assets/12f016ef-7dbc-46d2-9eb1-91eae4937d1b

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @anabology · [X post](https://x.com/anabology/status/2103534482930491441)*

---

<a id="case-241"></a>

### 241. AI Doom Music Video with Stochastic Parrot Visuals (65.6K views, 186 likes)

*Use case: music · Style: abstract, particle*

https://github.com/user-attachments/assets/8c2394ee-094f-4bb4-9da1-adf5c80a4707

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @doubleunplussed · [X post](https://x.com/doubleunplussed/status/2103697580421181894)*

---

<a id="case-242"></a>

### 242. Blender Dance Animation with Procedural Confetti and Music (9.0K views, 74 likes)

*Use case: music · Style: 3d, realistic*

https://github.com/user-attachments/assets/7f9eeda4-5bd3-4618-ac2c-9b7a38c15842

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @oab10don · [X post](https://x.com/oab10don/status/2105879685322457273)*

---

<a id="case-243"></a>

### 243. Another World Style Nightcall Driving Animation (7.0K views, 131 likes)

*Use case: music · Style: 2d, retro*

https://github.com/user-attachments/assets/81dc535c-d5e7-42a9-91ed-fe4a3ee58fcd

<details>
<summary>Prompt · original</summary>

```text
Create a player and tools for Another World's approach to animation. Also create a realtime video for Kavinsky-Nightcall starring Lester from Another World driving to the lab. Use crude compression for binary+data <250KB.
```

</details>

*Source: @gandamu_ml · [X post](https://x.com/gandamu_ml/status/2104402167906124280)*

---

<a id="case-244"></a>

### 244. Perler Bead Pixel Art MV with Karaoke Subtitles (Chinese) (3.4K views, 35 likes)

*Use case: music · Style: pixel-art, 2d*

https://github.com/user-attachments/assets/1e4af9f6-d9ac-485d-ac1e-dc50fdf0c88c

<details>
<summary>Prompt · original</summary>

```text
把这首歌做成 1 分钟拼豆像素风 MV：按歌词设计原创角色，每个像素是带孔拼豆，拼好后熨成白边贴纸；方格纸背景加粉白格子地板；动作卡节拍，底部加卡拉 OK 字幕。
```

</details>

*Source: @hahazwei · [X post](https://x.com/hahazwei/status/2104809910152425483)*

---

<a id="case-245"></a>

### 245. 20-Second Story-Led Music Video with Two Protagonists (1.4K views, 12 likes)

*Use case: music · Style: 2d, cartoon*

https://github.com/user-attachments/assets/994f326c-6317-4386-984b-ca438fdddae8

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @anjmaxx · [X post](https://x.com/anjmaxx/status/2103173729656459455)*

---

<a id="case-246"></a>

### 246. 50-Second Vertical Three.js Music Video with Suno Audio (1.3K views, 2 likes)

*Use case: music · Style: 3d*

https://github.com/user-attachments/assets/664f6738-d7a4-4799-aaa4-d1d6b625c827

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @okazaky · [X post](https://x.com/okazaky/status/2107826563786084783)*

---

<a id="case-247"></a>

### 247. 140 BPM UK Dubstep Style Audio-Visual Motion (1.2K views, 8 likes)

*Use case: music · Style: 2d, abstract*

https://github.com/user-attachments/assets/26e2c98b-c8bc-4f01-85cb-f97b53ee5e4d

<details>
<summary>Prompt · original</summary>

```text
140 BPM rusko/skream style UK dubstep
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
140 BPM、Rusko／Skream风格的英式Dubstep。
```

</details>

*Source: @Rames_Jusso · [X post](https://x.com/Rames_Jusso/status/2103200703598776559) · [Feishu N22](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-248"></a>

### 248. Psychedelic Pop Punk VJ Motion Graphics with Techno Sync (1.1K views, 8 likes)

*Use case: music · Style: 2d, abstract*

https://github.com/user-attachments/assets/18175686-f71b-4c1a-82ef-5032bf5f0f57

<details>
<summary>Prompt · original</summary>

```text
見た人の脳汁がドバドバでてトランス状態に陥るようなサイケデリック・ポップ・パンクなVJ風のモーショングラフィックス動画を作り、その動画と完全にシンクロするトランス・サイバー・パンク・テクノの曲を作って嵌めてくれ。30秒程度で良い。
```

</details>

*Source: @yama_kiyo · [X post](https://x.com/yama_kiyo/status/2103740786177134910)*

---

<a id="case-300"></a>

### 300. Peter Gabriel-Inspired Clay-Style Music Video

*Use case: music · Style: clay*

https://github.com/user-attachments/assets/7da883ee-ef14-40fd-a686-da2226f4c76b

<details>
<summary>Prompt · English translation</summary>

```text
Make a 60-second music video inspired by Peter Gabriel's Sledgehammer and Big Time, but with contemporary references and characters. Compose the song too, making it sound like it would fit on Peter Gabriel's album So.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一支60秒的音乐视频，风格参考Peter Gabriel的《Sledgehammer》和《Big Time》，但采用当代的参考元素与人物。同时创作这首歌，要让它听起来像是适合收录在Peter Gabriel的《So》专辑中的作品。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N23](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-301"></a>

### 301. A Music Machine Where Every Note Comes from a Collision

*Use case: music · Style: N/A*

https://github.com/user-attachments/assets/fbcd8088-ee21-49b0-bfd4-75da70fb9d70

<details>
<summary>Prompt · English translation</summary>

```text
Build a machine that runs for 45 seconds and plays an original piece of music, with every note coming from a visible collision.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
搭建一台运行45秒的机器，让它演奏一首原创乐曲，而且每个音符都必须来自一次看得见的碰撞。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N24](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-302"></a>

### 302. Kinetic Lyrics Synchronized to Vocals and Beats

*Use case: music · Style: kinetic-type*

https://github.com/user-attachments/assets/c9d294a4-6fb1-49f5-87d0-42efafcabe92

<details>
<summary>Prompt · English translation</summary>

```text
Create a kinetic typography motion graphics video using the attached music, with lyrics and animation perfectly synchronized to the vocals and beat. Make it look like a brilliant motion designer's resume showreel. Be creative and go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
根据附上的音乐制作一支动态歌词动态图形视频，让歌词与动画同人声和节拍完美同步。让它看起来像是一位出色动效设计师用于简历的作品集展示片。放开手脚，全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N25](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-10"></a>

## 10. Branding & Logo Animation

<a id="case-249"></a>

### 249. Apple Keynote Style Product Launch Film with Photo Morphing (140.7K views, 2,179 likes)

*Use case: branding · Style: 2d, photo-based, minimal*

https://github.com/user-attachments/assets/f6f1d378-e77d-43b7-bc33-4635da5bc3a1

<details>
<summary>Prompt · original</summary>

```text
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

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
【输入材料】
先向我索取：一个单词的品牌名称，用作字标（最好是动词）；9–12张高清照片；一首约120 BPM、含高潮段和安静间奏、可免版税使用的歌曲（例如Mixkit，允许商业使用）；以及一段普通墙面上有植物影子移动的免费素材视频（Pexels）。
【创作方向】
制作一支苹果发布会风格的产品发布片，只用2D，以一个连续镜头完成。每个场景都由前一个场景演变而来：不淡入淡出、不模糊转场、不切镜。改用物体形变：文字从遮罩线中升起，图标通过弹簧动画从零尺寸弹出，横条逐步展开，页面推进，黑色形状铺满全屏后收缩为下一场景。
使用暖白背景、黑色界面，照片上叠加iOS 26液态玻璃效果。字标用Archivo字体（宽度轴125、字重800），界面用Geist。光标通过真实的点击、拖动和长按驱动每次变化。镜头像Screen Studio那样缩放，让每个关键时刻都充满方形画面；光标随镜头同比例缩放。
禁止：交叉淡化、模糊淡入、靠亮度变化模拟显影、3D翻转、粒子、发光、超过1秒的停顿，以及任何模板感。
【片段结构】
120 BPM，共54拍，每一拍都有变化。
开场：字标像手风琴一样挤向自身的句点；圆点变成黑色胶囊，标签从内部升起。点击后，六片光圈叶片闭合遮住标签，再迅速打开露出照片。圆形变成方形并缩小，网格像纸质地图一样从后方展开（中心、十字、四角），再重排成便当盒布局。点击放大其中一格，正好落在音乐高潮拍点。
玻璃：玻璃文字逐字出现，融成水滴，再拉伸为玻璃工具栏。调整图标变成滑块。拖动时，照片从白天变成黄金时刻（用两张对齐照片）；按住滑块时，旋钮变成玻璃镜片。镜片升起成为玻璃球，下一张照片在球内以圆形打开，再扩展成锁屏：玻璃时钟数字、日期和底部横条；横条延伸成玻璃音乐播放器。
展示：锁屏向后拉，屏幕边缘长出边框，形成手机。灵动岛像液体一样拉伸、分离、飞过去，再长成像百叶窗一样卷起的Mac窗口。长按壁纸，把它拖到Safari标签页；页面推进，放开后照片变成落地页的主视觉。滚动时，主视觉变成商品卡上的装裱照片，卡纸和边框从照片边缘生长出来。选择边框颜色（涂色展开）和尺寸，导航按钮飞到下方变成“订购相片”。
订单：同一个黑色形状持续变形：已下单✓ → 正在打印% → 配送中（路线上的货车）→ 已送达✓。
墙面：送达状态的圆形铺满整个画面，保持黑色一拍，再收缩成真实墙面素材上挂着的装裱照片。同一个光圈打开露出照片，再次闭合；边框铺满屏幕后收缩为胶囊→圆点→字母。字母随节拍返回弹出。最后一帧必须与第一帧相同。
【制作要求】
1. 只交付一个1440×1440的方形HTML文件。所有样式都在异步seek(t)中按时间计算：不使用CSS过渡、定时器，也不在帧之间保留状态。
2. 弹簧使用闭式阶跃响应。一个数值有多个目标时，每次目标变化各加一个弹簧响应，再求和，使结果始终是时间的纯函数。
3. 液态玻璃：每个玻璃元素持有背后场景的独立副本；用SVG feImage位移贴图（圆角矩形距离场），经过三个缩放略有差异的feDisplacementMap生成彩色边缘，再加轮廓光。玻璃字母用每个字形的Canvas距离场生成贴图、遮罩和高光。
4. 黏液融合：先模糊，再做透明度阈值处理，最后把原始画面合成到上方，保证玻璃内部清晰。
5. 光圈：六片叶片围绕六边形孔径排列。每片由两个顶点、两条边的延长线，以及两点之间的短圆弧构成。
6. 字标挤压：每个字母按相同比例向句点移动，字形宽度同步变化（收窄wdth轴，其余部分缩放），保证字母始终接触。
7. 素材视频：重新编码为全帧内压缩（ffmpeg -g 1），以blob URL加载；每帧绘制前等待seeked事件。
8. 声音：每个事件使用下载的音效（Mixkit），不合成音效；按测得的峰值放置。歌曲从强拍开始：放大落在高潮，墙面段放在间奏，字标随节拍返回。用loudnorm归一化到-14 LUFS。
9. 用Playwright渲染：每帧渲染4个子帧，通过ffmpeg tmix混合，60fps。逐拍检查静帧，再扫描单帧跳变（帧差峰值超过相邻帧3倍）。
【注意事项】
Chromium的backdrop-filter: url()会错误读取位移贴图，因此改用场景副本。铺满屏幕的形状必须超出四角，扩展过程约0.3秒，否则半屏可能在一帧内突然变化。父元素隐藏时，visibility: visible的子元素仍会露出，应使用inherit。形变容器里切换的文字需要独立遮罩。python http.server无法按范围定位视频，因此使用blob URL。
【开始方式】
先向我索取输入材料；在制作完整短片前，先给我节拍表和4张静帧（开场、玻璃、展示、墙面）。
```

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2103835273813496100) · [Feishu M43](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-250"></a>

### 250. 22-Second Square Loop Product Demo with Morphing Shapes (49.1K views, 722 likes)

*Use case: branding · Style: 2d, minimal*

https://github.com/user-attachments/assets/473c2318-22d7-4412-a5a8-63fe6a50b762

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @twoclipping · [X post](https://x.com/twoclipping/status/2104674464868762046)*

---

<a id="case-251"></a>

### 251. Tech News Topic Motion Graphics Explainer (33.2K views, 272 likes)

*Use case: branding · Style: 2d, kinetic-type, minimal*

https://github.com/user-attachments/assets/bbd231cb-67c1-4df4-8468-000679efc910

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @techhalla · [X post](https://x.com/techhalla/status/2103411244468498547)*

---

<a id="case-252"></a>

### 252. Fire Animation Effects Showcase with Particle Systems (26.8K views, 118 likes)

*Use case: branding · Style: 2d, minimal*

https://github.com/user-attachments/assets/03c3b6bb-14d1-445b-ad10-5a39a782c897

<details>
<summary>Prompt · original</summary>

```text
I want to know how good a graphic designer you are. To prove this to me, I want you to prepare a 15-second motion graphics video. I want you to do an introduction related to my account. I'm sharing my logo and my X cover image, use those too.
```

</details>

*Source: @fire_ozgur · [X post](https://x.com/fire_ozgur/status/2103459971174130104)*

---

<a id="case-253"></a>

### 253. TypingMind Logo Slow Reveal Assembly Animation (24.3K views, 322 likes)

*Use case: branding · Style: 2d, minimal*

https://github.com/user-attachments/assets/ec7edeca-249b-479a-9e86-d1e2119fe6e6

<details>
<summary>Prompt · original</summary>

```text
Create an impressive motion design video of a slow-reveal transition that assembles and eventually reveals the TypingMind logo.
```

</details>

*Source: @tdinh_me · [X post](https://x.com/tdinh_me/status/2103704250329301409)*

---

<a id="case-254"></a>

### 254. Speaker Carousel Ring Animation in After Effects (18.0K views, 210 likes)

*Use case: branding · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/824fb4d2-36aa-4da0-ac0a-0459a1e5d17e

<details>
<summary>Prompt · original</summary>

```text
SPEAKER CAROUSEL
<setup>
Claude is connected directly to my open After Effects project through the AE MCP.
Work inside the Inner comp where the speaker ring already exists.
</setup>
```

</details>

*Source: @johncodunayo · [X post](https://x.com/johncodunayo/status/2105271353993560372)*

---

<a id="case-255"></a>

### 255. PayBox Logo 10-Second Motion Reel (6.8K views, 36 likes)

*Use case: branding · Style: 2d, minimal*

https://github.com/user-attachments/assets/994377b1-448e-4da1-adfc-0106e895d76c

<details>
<summary>Prompt · original</summary>

```text
Make this PayBox logo into a reel. Pretend you are a world-class motion designer. Make a 10-second dynamic video like the reference
```

</details>

*Source: @0xValure · [X post](https://x.com/0xValure/status/2103603025579331584)*

---

<a id="case-256"></a>

### 256. Spotify-Themed 18-Second Motion Graphics Video (3.7K views, 41 likes)

*Use case: branding · Style: 2d, minimal*

https://github.com/user-attachments/assets/d6260b00-ab95-4a0a-b977-420025e2d6d7

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @brainextends · [X post](https://x.com/brainextends/status/2103801834930606193)*

---

<a id="case-257"></a>

### 257. Brand 5-Year Vision Word Coining Film (3.7K views, 27 likes)

*Use case: branding · Style: 2d, photo-based*

https://github.com/user-attachments/assets/6f4d454d-0dbb-49f6-9e24-0c715575d3df

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @notdwd · [X post](https://x.com/notdwd/status/2103995183255998633)*

---

<a id="case-258"></a>

### 258. 3D Pixel Renderer Binance-Style Cinematic Intro (Chinese) (3.5K views, 1 likes)

*Use case: branding · Style: pixel-art, 3d*

https://github.com/user-attachments/assets/fb56571d-056c-40b2-a8c5-52d71d03623b

<details>
<summary>Prompt · original</summary>

```text
趁着今天有空回看和分析了一下整个视频

审美在线的Opus 5.5确实顶 @claudeai

3D渲染器像素风

这个渲染效果确实做得很强，逻辑调度能力和美学素养确实是挂钩的

这个片头的转场、音效和提振人心的bgm真的可以被 @binancezh 拿去用了

像素小人物也很有 @cz_binance 的感觉

#binance #claude
```

</details>

*Source: @sciencedegens · [X post](https://x.com/sciencedegens/status/2104114814536843325)*

---

<a id="case-259"></a>

### 259. DreamFort 20-Second Motion Graphics Manifesto (1.1K views, 12 likes)

*Use case: branding · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/cf91e720-11e9-4af4-af6b-f547fe2a06ad

<details>
<summary>Prompt · original</summary>

```text
make a 20-second motion graphics manifesto for DreamFort: "superintelligence should belong to everyone". every frame and every sound written in code, no image or video models.
```

</details>

*Source: @advait_jayant · [X post](https://x.com/advait_jayant/status/2103565104243712107)*

---

<a id="category-11"></a>

## 11. Social Media Content

<a id="case-260"></a>

### 260. Talking Head Video Edit with Subtitles Graphics and Music (63.4K views, 301 likes)

*Use case: social · Style: 2d, kinetic-type*

https://github.com/user-attachments/assets/1dc5403b-9d99-4b5c-b376-3240ac272354

<details>
<summary>Prompt · original</summary>

```text
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
```

</details>

*Source: @sab8a · [X post](https://x.com/sab8a/status/2103144778481475686)*

---

<a id="case-261"></a>

### 261. Camera-Themed Motion Graphics Reel with Remotion and TTS (56.2K views, 494 likes)

*Use case: social · Style: 2d, minimal*

https://github.com/user-attachments/assets/3b849de7-023b-45e7-9849-3f7b74311945

<details>
<summary>Prompt · original</summary>

```text
ما أعتقد في قفزة سواها Opus 5.5 تساوي القفزة اللي سواها في صناعة ال motion graphics، سواء من ناحية الجودة أو من ناحية التكلفة (استهلاك ال tokens)

هذا الفيديو سويته بربع حد ال 5 ساعات 👇🏻

【作者补充制作说明】
الطريقة باختصار:
استخدمت claude بنموذج opus 5.5 - مستوى التفكير متوسط إلى عالي، و طلبت منه يستخدم remotion لتسريع عملية ال preview و كذلك طلبت منه يقتصر استخدامه في معظم المؤثرات الصوتية على أصوات الكاميرات و عدسات التصوير الشائعة في ال reels و استخدمت نموذج gemini 3.8 tts flash لإنتاج الصوت
أخذ معي حوالي ساعة و نصف من المحادثات معه لكن معظمها راح في تجريب أشياء مختلفة و التجربة ممتعة فعلا.
```

</details>

*Source: @YarHmm · [X post](https://x.com/YarHmm/status/2103505435802341449)*

---

<a id="case-262"></a>

### 262. Chaotic Brain Rot Video with Python and FFmpeg (7.1K views, 55 likes)

*Use case: social · Style: 2d, abstract*

https://github.com/user-attachments/assets/75e3a145-e205-488e-8f59-43bae4627776

<details>
<summary>Prompt · original</summary>

```text
Use Python to generate a 9:16 chaotic brain rot video with excellent motion + sound design and render it using ffmpeg. Put your own personal spin on it so it’s aligned with Anthropic’s new launch. Also fully express what it’s like to be a very creative LLM used by me every day from your POV to give it some extra personality.
```

</details>

*Source: @kloss_xyz · [X post](https://x.com/kloss_xyz/status/2103664956482941143)*

---

<a id="case-263"></a>

### 263. Canvas-Drawn Video with Web Audio Synthesized Music (Chinese) (5.7K views, 7 likes)

*Use case: social · Style: 2d*

https://github.com/user-attachments/assets/e53a2e4e-866a-45ef-bf6d-01395a5b7481

<details>
<summary>Prompt · original</summary>

```text
提取帖子里的内容，用JS做个横版视频，需要包含配乐和音效。画面全部用 JS 在 Canvas 上画，配乐和音效用浏览器的 Web Audio 实时合成，没有用任何图片或音频素材。
```

</details>

*Source: @oxpsats · [X post](https://x.com/oxpsats/status/2104462072344182908)*

---

<a id="case-264"></a>

### 264. GravityDex x Gojo Satoru Anime Edit (2.1K views, 19 likes)

*Use case: social · Style: 2d, cartoon*

https://github.com/user-attachments/assets/f5258f42-f686-4aa3-82e4-6406b956993d

<details>
<summary>Prompt · original</summary>

```text
Make a GravityDEX x Gojo Satoru edit that goes hard
```

</details>

*Source: @MicheleHarmonic · [X post](https://x.com/MicheleHarmonic/status/2103111448352244175)*

---

<a id="case-265"></a>

### 265. Crypto-Themed Motion Graphics Variation (2.0K views, 6 likes)

*Use case: social · Style: 2d, minimal*

https://github.com/user-attachments/assets/34de0756-c674-450f-a001-c2177f92dfb2

<details>
<summary>Prompt · original</summary>

```text
make a similar version but with a crypto reference
```

</details>

*Source: @0xEvinho · [X post](https://x.com/0xEvinho/status/2103212966703436195)*

---

<a id="case-266"></a>

### 266. Steam Game Releases News Show from Gamer Perspective (1.5K views, 13 likes)

*Use case: social · Style: 2d, infographic*

https://github.com/user-attachments/assets/e7ef6857-800a-4c11-b919-b3a4bb6610d2

<details>
<summary>Prompt · original</summary>

```text
Please create introductory news about games released on Steam from September 25th to September 26th. From a gamer's perspective, highlight what seems interesting about each game in an easy-to-view manner. Make it a motion graphics video of about 60 seconds.
```

</details>

*Source: @gigabit_million · [X post](https://x.com/gigabit_million/status/2104068536041959719)*

---

<a id="category-12"></a>

## 12. Tutorials & How-To

<a id="case-267"></a>

### 267. Claude Code Agent System Configuration and Workflow Setup (36.2K views, 290 likes)

*Use case: tutorial · Style: 2d*

https://github.com/user-attachments/assets/1ae4c99a-99ad-4938-b123-0879849cfa80

<details>
<summary>Prompt · original</summary>

```text
Rebuild my Claude Code setup around this tree:

1. Look in ~/.claude/agents and .claude/agents for subagents that already cover explorer, worker and researcher. Draft new ones only for roles that are missing. Set each to model: opus, effort: medium. If an existing subagent is pinned to a different model, list it, don't touch it.

2. Set the main session's effortLevel to high in ~/.claude/settings.json, and set advisorModel to fable.

3. Check for anything disabling the advisor: CLAUDE_CODE_DISABLE_ADVISOR_TOOL, DISABLE_TELEMETRY, any variable blocking feature-flag fetches, and CLAUDE_CODE_EFFORT_LEVEL, which overrides subagent effort. Report what you find. Change nothing yet.

4. Add one line to ~/.claude/CLAUDE.md: consult the advisor before a large plan, when an error repeats, and before marking a long task done.

Show every change as a diff first. Don't touch anything until I say go.
```

</details>

*Source: @imryven · [X post](https://x.com/imryven/status/2105719735438495965)*

---

<a id="case-268"></a>

### 268. Calculus Derivative Concept Explainer with Manim and Edge TTS (23.2K views, 260 likes)

*Use case: tutorial · Style: 2d, infographic*

https://github.com/user-attachments/assets/cbde7b44-55dd-4032-b8e9-a44789d36302

<details>
<summary>Prompt · original</summary>

```text
请用Manim给我制作一个导数概念学习的视频，要求通俗易懂，并且有例子，引人思考。配音使用edge-tts
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
请用Manim给我制作一个导数概念学习的视频，要求通俗易懂，并且有例子，引人思考。配音使用edge-tts
```

</details>

*Source: @LinearUncle · [X post](https://x.com/LinearUncle/status/2103128559174971663) · [Feishu N12](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-269"></a>

### 269. 5 Gmail Productivity Tips Explainer with Code-Drawn Graphics (19.6K views, 177 likes)

*Use case: tutorial · Style: 2d, infographic*

https://github.com/user-attachments/assets/6a660512-0a70-43f3-a498-4c07333d149c

<details>
<summary>Prompt · original</summary>

```text
SKILL.mdどおりに「仕事が速くなるGmailの機能5選」を作って。台本は5つの項目に構造化して、働きは公式ヘルプで確かめて、画像はコードで描いて、ゆっくり音声に合わせて秒単位で切り替えて
```

</details>

*Source: @ClaudeCode_UT · [X post](https://x.com/ClaudeCode_UT/status/2106958663525314769)*

---

<a id="case-270"></a>

### 270. Particle-Based Video Rebuilding from Footage with Depth Estimation (13.1K views, 86 likes)

*Use case: tutorial · Style: particle, 2d*

https://github.com/user-attachments/assets/16570715-2f33-45db-8619-1be3b50f6ebb

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @Pluvio9yte · [X post](https://x.com/Pluvio9yte/status/2107087191738662953)*

---

<a id="case-271"></a>

### 271. 15-Second Vertical Product Usage Guide with Remotion (1.2K views, 0 likes)

*Use case: tutorial · Style: 2d, photo-based*

https://github.com/user-attachments/assets/7ea65d17-1089-42e1-9d6a-da9cb275c2b5

<details>
<summary>Prompt · original</summary>

```text
请在当前项目做一支 15 秒的产品使用说明视频，使用 Remotion，竖版 1080×1920、30fps、共 450 帧。只用 assets 目录里提供的商品图和我给出的事实，不下载陌生素材，不补销售数据。

第 0 至 3 秒展示商品与一句使用场景。第 3 至 9 秒演示两步操作，每步只出现一个动作。第 9 至 13 秒展示结果，并保留能看清的停留时间。最后 2 秒显示产品名称，不加购买引导。

先列分镜与素材缺口，再做预览。字幕单独排版，动效以当前帧号计算。不要用真实时钟驱动时间线，也不要使用不固定的随机数。商品、文字、镜头时间分别配置，方便以后替换。

交付可编辑项目、启动与渲染命令、MP4，以及第 1、5、10、14 秒的静帧。缺少必要素材时停止并说明，不用假素材代替。”
```

</details>

*Source: @qianqiongge · [X post](https://x.com/qianqiongge/status/2105902139902246969)*

---

<a id="category-13"></a>

## 13. Data Visualization

<a id="case-272"></a>

### 272. Portland Bus Transit System Data Visualization Animation (3.8M views, 20,545 likes)

*Use case: data-viz · Style: 2d, infographic*

https://github.com/user-attachments/assets/5da410a4-4c8e-459d-96f9-6270de1e177b

<details>
<summary>Prompt · original</summary>

```text
Create a video of Portland, OR's bus service on a random Tuesday! Showcase Portland's different neighborhoods at a high level and then zoom in on specific routes in each quadrant (absorbing North Portland into NE and South Portland into SW for brevity). Use a light theme. Slow down the speed of the bus animation when zoomed in, without increasing the total duration too much so the viewer can appreciate some of the landscape and streets it travels through in a given loop.
```

</details>

*Source: @milos_gis · [X post](https://x.com/milos_gis/status/2103751211040317580)*

---

<a id="case-273"></a>

### 273. Debris Flow Riverbed Sediment Accumulation 3D Visualization (15.6K views, 298 likes)

*Use case: data-viz · Style: 3d, infographic*

https://github.com/user-attachments/assets/0dd2e675-de17-4cdf-8f9b-441b879308ed

<details>
<summary>Prompt · original</summary>

```text
Build a debris flow riverbed change calculation model. Create a visualization video showing where and how much sediment accumulated, using 3D illustrations or actual aerial photo-like textures. You can choose the terrain freely. Make it easy to see where deposition and flooding occur.
```

</details>

*Source: @kisaka_ki · [X post](https://x.com/kisaka_ki/status/2107054815255859326)*

---

<a id="category-14"></a>

## 14. Event Intros & Stings

<a id="case-274"></a>

### 274. Fox Chase Event 30-Second Hype Video with Music (3.0K views, 19 likes)

*Use case: event · Style: 2d*

https://github.com/user-attachments/assets/c9ad1e85-d659-4946-a9ff-c6a0b000b35f

<details>
<summary>Prompt · original</summary>

```text
Make a dope polished 30 second video for our Mackenzie Club fox chase event using whatever tools you think are best. tessaract, etc. it should be all code (that's what people on X are saying). Cool music. Hype video. Use Tessaract or Remotion or whatever you think is best. Make it amazing and interesting.
```

</details>

*Source: @DaveRogenmoser · [X post](https://x.com/DaveRogenmoser/status/2103249424075899271)*

---

<a id="category-15"></a>

## 15. Other

<a id="case-275"></a>

### 275. Gravitational Lensing Interactive Black Hole Visualization (127.2K views, 684 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/0611b030-7d94-4c79-8d5e-0ae1ad4123b8

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @Voxyz_ai · [X post](https://x.com/Voxyz_ai/status/2103117246860345550)*

---

<a id="case-276"></a>

### 276. Police Chase Top-Down Arcade Game Design Document (19.6K views, 228 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/3a7324c0-0f77-4d36-8dad-53944888e650

<details>
<summary>Prompt · original</summary>

```text
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

</details>

*Source: @froessell · [X post](https://x.com/froessell/status/2103789415323562325)*

---

<a id="case-277"></a>

### 277. Annecy France 3D Boat Journey Experience (8.0K views, 188 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/4c6ff8a4-b449-43cc-b624-cef2ea7b69cb

<details>
<summary>Prompt · original</summary>

```text
I wanted to see if beautiful destinations could become playable 3D experiences. Annecy, France became the prototype: a boat journey through canals, bridges, waterfront, and the mountain lake, built with Claude Opus 5.5 using Three.js + TSL.

I trimmed the navigation footage for the sake of keeping the video short and the post below below has a slightly longer version. The whole workflow behind this is simple:-
- Explained the concept to Opus and asked it to list some ideas.
- Shortlisted one and asked it to generate a prompt, with tech stack directions.
- Thats it, needed few iterations and is still a work in progress with few issues needing ironing.
- The audio effects were added by Opus itself.
```

</details>

*Source: @techartist_ · [X post](https://x.com/techartist_/status/2103933640392786274)*

---

<a id="case-278"></a>

### 278. GTA-Style 1990s City Game Build (4.8K views, 6 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/cf095d82-c441-4a73-9534-af41b53987c1

<details>
<summary>Prompt · original</summary>

```text
Can one developer + 3 AI agents build a GTA-style game?

I’m trying.

FIXER is a 1990s city game I’m building with Astra, Opus 5.5 and Fable.

This is the current playable build.
```

</details>

*Source: @Alex_Vainshtein · [X post](https://x.com/Alex_Vainshtein/status/2104197450307195332)*

---

<a id="case-279"></a>

### 279. Interactive 3D Jet Engine from Intake to Exhaust (4.3K views, 3 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/0dbe4c5e-a12d-4936-a569-07c71c4122ad

<details>
<summary>Prompt · original</summary>

```text
Build me a jet engine in interactive 3D, from intake to exhaust, in one HTML file with Three.js.

Make it look real: the big front fan, the compressor stages, the combustion chamber glowing inside, the turbine and the nozzle. The fan and the shafts spin. I can drag to orbit around it and scroll to zoom.

Add an Explode button. When I press it, every part slides apart along the engine's axis with its name on a label. Press it again and it all snaps back together. When I hover a part, it lights up and shows one line on what it does.

No images. Do not ask me any questions. Just build it.
```

</details>

*Source: @aichrislee · [X post](https://x.com/aichrislee/status/2106535528149479847)*

---

<a id="case-280"></a>

### 280. Deep-Sea Horror Game with Drone Soundtrack (3.6K views, 84 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/9e891065-5a71-49b8-9931-ba4ebe4af5d7

<details>
<summary>Prompt · original</summary>

```text
I asked opus 5.5 to make a game within the confines and abilities of my engine, no other prompt. It made this deep-sea horror game, with a subtle drone soundtrack. And it's terrifying (if a bit unbalanced/unfair). Sound on.
```

</details>

*Source: @ggsimm · [X post](https://x.com/ggsimm/status/2102882622053535814)*

---

<a id="case-281"></a>

### 281. BugSmash Casual 4MB Browser Game with Graphics (2.5K views, 12 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/13b364cb-d730-4d0b-91c2-75d233ea9415

<details>
<summary>Prompt · original</summary>

```text
Opus 5.5 releases 😍

Me: Woahh! Let's drill through our BugSmash backlog quickly.

My Co-founder @suhailpatel941: Hold my cup... let's make a game 🥲

All this graphics and the game is just - 4MB game - hosted on BugSmash Drop itself 🤯
```

</details>

*Source: @nQaze · [X post](https://x.com/nQaze/status/2103853898301939886)*

---

<a id="case-282"></a>

### 282. Neuroscience Study 60-Second Film and Interactive Lab (1.5K views, 13 likes)

*Use case: None · Style: N/A*

https://github.com/user-attachments/assets/d7ad04da-da4e-4c20-8a77-9b4433bf2127

<details>
<summary>Prompt · original</summary>

```text
Turn a 2025 neuroscience study about strangers' brain reactions to movies growing closer into a 60-second film and interactive lab. One HTML file.
```

</details>

*Source: @CurieuxExplorer · [X post](https://x.com/CurieuxExplorer/status/2104801713840590917)*

---

<a id="category-16"></a>

## 16. Visual Styles & Illustration

<a id="case-287"></a>

### 287. Korean Chuseok Pixel-Art Night Animation

*Use case: fun · Style: pixel-art*

https://github.com/user-attachments/assets/52d19431-542b-4d6c-afd5-f801caf29af9

<details>
<summary>Prompt · English translation</summary>

```text
Search for elements appropriate to Korean Chuseok, arrange them into a pixel animation, and build it.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
搜索适合韩国秋夕的元素，将它们组织成像素动画并制作出来。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N26](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-288"></a>

### 288. Hand-Drawn Animals Come Alive from a Sketchbook

*Use case: fun · Style: hand-drawn*

https://github.com/user-attachments/assets/a1b3b050-f97f-4a8d-b91e-377929c2aba8

<details>
<summary>Prompt · English translation</summary>

```text
You are a professional video creator. Use JavaScript to create a high-definition, creative, playful, joyful video that people enjoy watching, with sound that fits the visuals. Use as many of the supplied hand-drawn images as possible to make it more creative and more faithful to the input images. You may also draw inspiration from videos you made in video-examples/, but do not copy them, especially video-examples/twitter_claude.mp4. You are very creative, so make the best work you can.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
你是一位专业视频创作者。使用JavaScript，为我制作一支高清、有创意、俏皮、欢乐、让人乐于观看的视频，并配上与画面相匹配的声音。尽可能多地使用输入的手绘图片，让作品更有创意，也更忠于输入图片。你也可以从你在video-examples/中制作的视频汲取灵感，但不要照搬，尤其是这支：video-examples/twitter_claude.mp4。你很有创造力，所以请拿出你能做出的最佳作品。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N27](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-289"></a>

### 289. What Makes a Place Feel Like Home: Paper-Cut Shadow Theatre

*Use case: story · Style: paper-cut*

https://github.com/user-attachments/assets/440358b1-9185-40aa-a743-d4605399e4ef

<details>
<summary>Prompt · English translation</summary>

```text
Create a pure JavaScript animation, 30–60 seconds long, vertical 9:16, in the style of paper-cut shadow theatre, with gentle, fitting audio made in code. Theme: what makes a place feel like home?
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
创建一段纯JavaScript动画。时长30至60秒，竖屏9:16，采用剪纸皮影剧场风格，配上柔和、贴切的音频（用代码制作），主题是：什么让一个地方有家的感觉？
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N28](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-290"></a>

### 290. Risograph Studio Introduction

*Use case: branding · Style: risograph*

https://github.com/user-attachments/assets/147fcb20-5aa6-460e-9881-bda14d40fe03

<details>
<summary>Prompt · English translation</summary>

```text
Make something about my studio in a Risograph printmaking style.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
以Risograph孔版印刷风格，制作关于我的工作室的内容。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N29](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-291"></a>

### 291. Pixel-Art History of Large Language Models

*Use case: story · Style: pixel-art*

https://github.com/user-attachments/assets/6bbdcfd9-772d-459e-bc79-eab3d8d673aa

<details>
<summary>Prompt · English translation</summary>

```text
Render a ping-pong looping pixel-art animation showing the history of large language models. Then recursive self-improvement (RSI). Then things get fucking wild. Maximum 15 seconds. Make it a self-contained .html file.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
用像素艺术渲染一个来回循环播放的动画，呈现大语言模型的历史。接着是递归自我改进（RSI）。然后画面变得他妈的疯狂。最长15秒。做成一个自包含的.html文件。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N30](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="category-17"></a>

## 17. Motion Principles & UI Handoffs

<a id="case-303"></a>

### 303. Motion Principles: Shapes, Rhythm and Trajectories

*Use case: showreel · Style: 2d*

https://github.com/user-attachments/assets/a2fc1050-2470-4ce8-a038-6409977b57ed

<details>
<summary>Prompt · English translation</summary>

```text
Make a dynamic 15-second motion graphics video showing your extraordinary abilities as a motion designer, like a resume showreel. Go all out.
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
制作一段动感十足的15秒动态图形视频，展现你作为动效设计师的非凡实力，就像用于简历的作品集展示片。全力以赴。
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N08](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="case-304"></a>

### 304. White Ball UI Handoffs: Springs, Collisions and Continuous Paths

*Use case: demo · Style: 2d, minimal*

https://github.com/user-attachments/assets/36b5c075-c127-4bbb-831c-f7003208755e

<details>
<summary>Prompt · English translation</summary>

```text
<inputs>
Ask me for: the slider's target value, three short notification messages, a reply to type, one accent colour, and a royalty-free song around 120 BPM. If I skip anything, use 100, 'Slider - Reached 100', 'Gravity - Something is falling', 'Messages - What now?', 'retry', and electric blue as defaults.
</inputs>

<direction>
Create a 10-second, 16:9, 2D UI motion film. Place everything on a near-black canvas with a subtle dot grid. Use charcoal controls, crisp white type, one blue accent, and a white ball that moves throughout the film. A real cursor gives the opening click a physical feel; every later transition is led by the ball. Keep the UI clean and collisions precise, with only slight spring overshoot. Move the camera through one continuous layout so each interaction fills the frame.
Banned: hard cuts, stock footage, glows, particle bursts, disconnected transitions, excessive bouncing, and blurry type during camera motion.
</direction>

<structure>
About 10 seconds; something happens on every major beat.
Toggle: the cursor clicks the blue toggle. Its white ball pops out and the camera follows it toward a horizontal slider.
Slider: the ball lands on the knob and carries it along the track. The blue fill stays connected to the knob, and the value bubble above it rises to 100.
Notifications: at 100, the ball continues forward and introduces three dark cards: 'Slider', 'Gravity', and 'Messages'. Each enters on its own beat. The camera follows the ball down to 'What now?'.
Reply: a small Reply pill stretches into an input field. A keyboard rises below it, still part of the same scene.
Keyboard: the ball strikes keys and 'retry' appears in the input. The ball lands on Return, the blue send button activates, and the reply collapses into a small blue message.
Return: the camera pulls back to show the toggle, slider, cards, and keyboard together in one world. The ball returns to the first toggle. Match the ball position, cursor, and toggle state to the opening so the film loops smoothly.
</structure>

<build>
1. One 1920×1080 HTML file at 60 fps. Compute all visuals from time inside seek(t): no CSS transitions, timers, or state carried between frames.
2. Arrange every UI component in one world. Use one camera transform built from position and log-space zoom, so each close-up is a camera move through that world.
3. Design one continuous ball path connecting the toggle, slider, cards, and keys. Use closed-form springs for landings and brief squash on impact.
4. Compute the slider fill and number from the ball's horizontal position. Keep the value bubble centred above the knob until it reaches 100.
5. Assign a fixed time to every keystroke. Show the portion of the reply typed by each time, allowing any frame to render independently.
6. Align clicks, slider motion, card entries, typing, send, and return to measured beats. Add subtle UI sounds at each contact.
7. Render a still on every beat to check pace and readability, then export the full film with Playwright at 60 fps. Inspect rapid camera moves and the loop boundary frame by frame.
</build>

<gotchas>
Never teleport the ball between components: show the path through every handoff. Keep the value bubble attached to the slider knob. Leave enough space around notification cards to stay legible during camera moves. The keys struck by the ball must match the letters appearing in the input. Match the first and last frames, including the ball's direction and cursor position, to avoid a loop stutter.
</gotchas>

<start>
Ask for the inputs first, then show a beat map and four stills—toggle, slider, notifications, and keyboard—before building the complete video.
</start>
```

</details>

<details>
<summary>Prompt · Chinese version from Feishu</summary>

```text
<输入>
向我询问：滑块的目标值、三条简短通知消息、一条要输入的回复、一种强调色，以及一首约120 BPM的免版税音乐。如果我跳过某项，使用100、“Slider - Reached 100”（滑块—达到100）、“Gravity - Something is falling”（重力—有东西正在落下）、“Messages - What now?”（消息—接下来怎么办？）、“retry”（重试）和电光蓝作为默认值。
</输入>
<方向>
制作一支10秒、16:9的二维 UI 动效短片。将所有内容放在接近黑色、带有淡淡点阵网格的画布上。使用炭灰色控件、锐利的白色文字、一种蓝色强调色，以及一颗贯穿整部短片运动的白球。真实光标让开场点击具有物理触感；之后的每次转场都由白球引导。保持 UI 干净、碰撞精确，只允许轻微的弹簧过冲。让镜头穿行于一个连续布局之中，使每次交互都充满画面。
禁止：硬切、素材库视频、发光、粒子爆发、缺乏联系的转场、过度弹跳，以及镜头运动时模糊的文字。
</方向>
<结构>
约10秒，每个主要节拍上都要发生事情。
开关：光标点击蓝色开关。开关中的白球弹出，镜头跟随它移向水平滑块。
滑块：白球落在旋钮上，带着旋钮沿轨道移动。蓝色填充始终连接着旋钮，旋钮上方的数值气泡升至100。
通知：达到100时，白球继续前进，同时引入三张深色卡片：“Slider”“Gravity”和“Messages”。每张卡片都在各自的节拍进入。镜头跟随白球向下移动至“What now?”。
回复：小型“Reply”胶囊按钮拉伸成输入框。键盘在下方升起，仍属于同一场景。
键盘：白球敲击按键，输入框中逐渐出现“retry”。白球落在 Return 键上，蓝色发送按钮激活，回复收缩为一条小型蓝色消息。
返回：镜头拉远，展示开关、滑块、卡片和键盘共同处于一个世界中。白球返回第一个开关。让白球位置、光标和开关状态与开场画面匹配，使短片流畅循环。
</结构>
<实现>
1. 制作一个1920×1080、60fps的 HTML 文件。在 seek(t) 内依据时间计算所有视觉：不使用 CSS 过渡、计时器，也不在帧间保留状态。
2. 把全部 UI 组件布置于同一个世界。使用一个由位置和对数空间缩放构成的镜头变换，让每个特写都成为穿过这个世界的一次镜头移动。
3. 给白球设计一条连接开关、滑块、卡片和按键的连续路线。落地使用闭式弹簧，并在碰撞时短暂压扁。
4. 根据白球的水平位置计算滑块填充和数字。在达到100之前，让提示框始终居中位于旋钮上方。
5. 为每次按键设定固定时间。根据对应时刻已经输入的部分展示回复，从而能够独立渲染任意帧。
6. 将点击、滑块移动、卡片入场、敲键、发送与返回对齐到测得的节拍。在每次接触时加入细微的 UI 音效。
7. 每拍先渲染一张静帧以检查节奏和可读性，然后用 Playwright 以60fps导出完整短片。逐帧检查快速镜头移动和循环边界。
</实现>
<注意事项>
绝不能让白球在组件之间瞬移：每次交接都必须展示运动路径。让数值气泡始终连接滑块旋钮。为通知卡片预留足够空间，让它们在镜头运动中仍然清晰可读。白球敲击的按键必须与输入框中出现的文字一致。匹配首尾两帧，包括白球的运动方向和光标位置，避免循环卡顿。
</注意事项>
<开始>
先向我询问输入，然后在制作完整视频之前，向我展示节拍图以及四张静帧：开关、滑块、通知和键盘。
</开始>
```

</details>

*Source: [Feishu collection](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb) · [Feishu N09](https://aiwarts101.feishu.cn/wiki/LMEcwg5jHiTSnqkwNE1cum7DnLb)*

---

<a id="data"></a>

## Data & maintenance

Browse [`data/cases.json`](./data/cases.json) for cases, [`data/feishu-import.json`](./data/feishu-import.json) for import and deduplication mappings, and [`data/media.json`](./data/media.json) for video attachments and availability.

After editing the data, run `node scripts/build-readme.cjs` to regenerate both languages. Contributions should include creator credit, the original source, a complete prompt, and a suitable category.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the video upload workflow.

<a id="credits"></a>

## Credits & license

Thanks to the original creators and Karl’s AIwarts for the case collection. Repository code and editorial material use the [MIT license](./LICENSE). Referenced prompts, videos, brands, and third-party assets remain subject to their respective owners’ rights; the repository license does not grant additional rights to those materials.
