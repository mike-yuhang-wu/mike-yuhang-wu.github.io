---
layout: project
type: project
image: img/blackjack-text-game/blackjack-text-game-square.png
title: "Blackjack"
date: 2024
published: true
labels:
  - Poker Game
  - Python
  - Remaster
summary: "A poker game you play on console, with simplified game rules."
---

<img class="img-fluid" width="100%" height="auto" src="/img/blackjack-text-game/blackjack-text-game-header.png">

## Background

As an end-of-semester project of my introduction to computer science class in high school, we all gets to design and write a text-based game, simulating the popular casino poker card game Blackjack, which is also known as Twenty-One. I implemented this game with game rules simplified.

About a year later, in 2024, I recreated this game myself with a major improvements on graphics. The game draws a gambling table and poker cards on console or terminal with text.

## Gameplay and Game Rule

The game's rule is simple:
1. You and House (your opponent) each get 3 cards at the beginning.
2. The sum of face value of a person's cards is number of their hands.
4. The House only shows you at most two of their cards.
5. Who ever gets exactly 21 hands immediately wins, and those exceed immediately loses.
6. You may choose to Hit, which gives you a card and House a card.
7. You may choose to Stand, which compares your hands with House's hands. The person with greater hands wins. Same hands means a tie.

Here is a copy of the console during a game play:

<hr>

<pre>
 _____________________________
| .-------------------------. |
| |                         | |
| |   [A] [6] [#]           | |
| |                         | |
| |_________________________| |
| |                         | |
| |                         | |
| |   [2] [Q] [A]           | |
| |                         | |
| |_________________________| |
|_____________________________|
 \ \\                     // /

HOUSE HAS 7 + ?
YOU HAVE 13

Hit or stand? Enter Y to hit and any other keys to stand.

</pre>

<hr>

Source: <a href="https://github.com/mike-yuhang-wu/blackjack-text-game"><i class="large github icon "></i>mike-yuhang-wu/blackjack-text-game</a>
