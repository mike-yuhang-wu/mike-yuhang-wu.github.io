---
layout: project
type: project
image: img/tag-text-game/tag-text-game-square.png
title: "Tag"
date: 2025
published: true
labels:
  - Game Development
  - Text-based Game
  - Python
summary: "A text game where you are to chase after a target on a map that is also moving around."
---

<img class="img-fluid" width="100%" height="auto" src="/img/tag-text-game/tag-text-game-header.png">

Tag was a game that I developed in 5 hours with help from AI. Which AI? Honestly, I do not know the name of. It was the AI that often pop up after a Google search, with the title "AI Overview." Hopefully that was enough for a citation to my sole partner.

The idea of this game came from tag game that I played with my classmates on elementary school campus. Imagine the feeling that you were not running on a grassfield but in a complete darkness, and you were not having visualized location of your target but just its coordinate and distance, would that be fun? It might … not. I have to admit, after testing this game, I felt playing tag with friends on a grassfield would be funnier than this game. One lesson learned: it is possible that you do not realize something is a trash until you developed it and tested it.

## Gameplay

Anyway, this game was developed successfully after all, let us see how this game work by reading the console from one of the gameplay:

```
--------------------------------------------------

You are about to play tag with your computer in an 25 by 25 meters map. You get to move toward one direction out of left, right, forward, backward you wish. Your goal is to "tag" your target, which also moves around each round, by ending at the same location on the map as them.

W - GO UPWARD
S - GO DOWNWARD
A - GO LEFTWARD
D - GO RIGHTWARD

Enter Y to play, any other key to quit: Y
--------------------------------------------------

YOUR NAME: PLAYER 1
YOUR LOC: (3, 23)

CPU 1:  6.0828m AWAY
LOC: (9, 24)
CPU 2:  15.5242m AWAY
LOC: (18, 19)

NEXT DIRECTION: D
NEXT DISTANCE: 6

--------------------------------------------------

YOUR NAME: PLAYER 1
YOUR LOC: (9, 23)

CPU 1:  9.0554m AWAY
LOC: (0, 24)
CPU 2:  9.0554m AWAY
LOC: (18, 24)

NEXT DIRECTION: A
NEXT DISTANCE: 9

--------------------------------------------------

YOUR NAME: PLAYER 1
YOUR LOC: (0, 23)

CPU 1:  8.0623m AWAY
LOC: (8, 24)
CPU 2:  24.0208m AWAY
LOC: (24, 24)

NEXT DIRECTION: D
NEXT DISTANCE: 8

--------------------------------------------------

YOUR NAME: PLAYER 1
YOUR LOC: (8, 23)

CPU 1:  4.1231m AWAY
LOC: (4, 24)
CPU 2:  19.4165m AWAY
LOC: (24, 12)

NEXT DIRECTION: A
NEXT DISTANCE: 4

--------------------------------------------------

YOUR NAME: PLAYER 1
YOUR LOC: (4, 23)

CPU 1:  1.0000m AWAY
LOC: (4, 24)
CPU 2:  11.4018m AWAY
LOC: (1, 12)

NEXT DIRECTION: W
NEXT DISTANCE: 1

--------------------------------------------------

YOUR NAME: PLAYER 1
YOUR LOC: (4, 24)

CPU 2:  3.0000m AWAY
LOC: (1, 24)

NEXT DIRECTION: A
NEXT DISTANCE: 3

--------------------------------------------------

PLAYER WON

Wanna play another round?
```

If you take a look at the <a href="https://github.com/mike-yuhang-wu/tag-text-game">source code</a>, you will find some game settings you can modify at the top of the file `tag.py`. The above gameplay was done under the following setting:

```
class Configuration:
    
    MAP_LENGTH : int = 25
    MAP_WIDTH : int = MAP_LENGTH
    
    CHARACTER_QUANTITY : dict[str, int] = {
        "PLAYER" : 1,
        "CPU" : 2
    }
    
    MAXIMUM_DISPLACEMENT_DISTANCE_BY_CPU = 25
```

## Conclusion

For me, writing code for this game was more a practice of writing Python in an object oriented way, and using AI tools to accelerate development process. This was the first game I developed that had a large portion of help from an AI. It was true that AI was very helpful, mainly on saving me from spending large amount of time searching the web for minor syntax issues. Again, AI was really helpful.

Source: <a href="https://github.com/mike-yuhang-wu/tag-text-game"><i class="large github icon "></i>mike-yuhang-wu/tag-text-game</a>

Note: AI (whose title was "AI Overview") was used to help developing this project.
