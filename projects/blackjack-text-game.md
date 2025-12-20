---
layout: project
type: project
image: img/blackjack-text-game/blackjack-text-game-square.png
title: "Blackjack"
date: 2024
published: true
labels:
  - Game Development
  - Object Oriented Programming
  - Poker Game
  - Python
  - Remaster
  - Text-Based Game
summary: "A poker game you play on console, with simplified game rules."
---

<img class="img-fluid" width="100%" height="auto" src="/img/blackjack-text-game/blackjack-text-game-header.png">

## Background

As an end-of-semester project of my introduction to computer science class in high school, we all gets to design and write a text-based game, simulating the popular casino poker card game Blackjack, which is also known as Twenty-One. I implemented this game with game rules simplified.

About a year later, in 2024, I recreated this game myself with a major improvements on graphics. The game draws a gambling table and poker cards on console or terminal with text.

## Gameplay and game rule

The game's rule is simple:
1. You and House (your opponent) each get 3 cards at the beginning.
2. The sum of face value of a person's cards is number of their hands.
4. The House only shows you at most two of their cards.
5. Who ever gets exactly 21 hands immediately wins, and those exceed immediately loses.
6. You may choose to Hit, which gives you a card and House a card.
7. You may choose to Stand, which compares your hands with House's hands. The person with greater hands wins. Same hands means a tie.

<!--

Below is a table of cards and their corresponding face value.

<table>
  <tr>
    <td>
      <b>Card</b>
    </td>
    <td>
      A
    </td>
    <td>
      2
    </td>
    <td>
      3
    </td>
    <td>
      4
    </td>
    <td>
      5
    </td>
    <td>
      6
    </td>
    <td>
      7
    </td>
    <td>
      8
    </td>
    <td>
      9
    </td>
    <td>
      T, J, Q, K
    </td>
    <td>
      e<sup>*</sup>
    </td>
    <td>
      E
    </td>
  </tr>
  <tr>
    <td>
      <b>Face Value</b>
    </td>
    <td>
      1
    </td>
    <td>
      2
    </td>
    <td>
      3
    </td>
    <td>
      4
    </td>
    <td>
      5
    </td>
    <td>
      6
    </td>
    <td>
      7
    </td>
    <td>
      8
    </td>
    <td>
      9
    </td>
    <td>
      10
    </td>
    <td>
      0
    </td>
    <td>
      999
    </td>
  </tr>
</table>

<sup>*</sup> Card e and E corresponds to jokers. They exist as an Easter egg, but a player has to read and modify the code themself to enable them.

-->

Here is a copy of the console during a game play:

```

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

```

## Implementation involve object oriented programming

The implementation of this game includes a large amount of object oriented programming. For example, a poker card is exist as an instance of class `PokerCard`, with attribute `name` and `value`. Another example would be the `PokerDeck` class, whose instance has an attribute that is a list of `PokerCard` objects.

After an initialization with a constructor, an instance of `PokerDeck` contains a sorted list of 52 `PokerCard` objects, which consist of four poker cards from each face value. If a player modified the code to include card e and E, more cards will appear in the `PokerDeck` instance. The list is shuffled before the game starts with the following method:

```

# Shuffles a deck with a specified time of repeat.
def shuffle(self, repeat):
    for r in range(repeat):
        split1 = random.randrange(0, int(self.quantity >> 1))       # Choose two random points in the deck. One from the first
        split2 = random.randrange(split1, self.quantity)            # half of the deck and the other from the range after it.

        portion1 = self.content[:split1]                            # With these two points, split the entire deck into 3
        portion2 = self.content[split1:split2]                      # parts.
        portion3 = self.content[split2:]

        self.content = portion1 + portion3 + portion2               # Switch the order of these parts and combine them.
```

The `shuffle` method literally simulates how I would shuffle a deck of poker card!

## Thoughts

While writing code for this game, I found that object oriented programming simplifies the task, because I can think in the way that I think about stuffs I see in real life. For example, the attribute of a poker card can be any information related to it, such as its name, face value, color, shape, just to name a few. The methods are like things one can do to a stuff, such as shuffling a deck of poker card. It was nice that an object groups all related information and method together, making reference or use of any of them often be as simple as a variable name plus a period plus the attribute or method needed. I am free of finding variables and functions that may have defined all around the project files for one operation regarding one thing. This is why I like object oriented programming. By doing this project, I learned and experienced tremendously about object oriented programming.

Source: <a href="https://github.com/mike-yuhang-wu/blackjack-text-game"><i class="large github icon "></i>mike-yuhang-wu/blackjack-text-game</a>
