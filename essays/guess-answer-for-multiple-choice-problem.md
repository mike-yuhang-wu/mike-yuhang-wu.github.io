---
layout: essay
type: essay
title: "Two Ways of Randomly Making Answer Choice Analyzed"
# All dates must be YYYY-MM-DD format!
date: 2025-08-31
published: true
labels:
  - Guessing
  - Probability
---

<img width="300px" class="rounded float-start pe-4" src="../img/guess-answer-for-multiple-choice-problem/bubble-sheet.png">

## Is there advantageous strategy for guessing the answer of a multiple choice problem?

Once upon a time, everyone in my English class were talking about preparing for exam, and they came up with this topic: when you got stuck on a series of multiple choice problems, and you decide to pick answers at random, is there any strategy that increase your chance of getting each problem right? The class discussed eagerly.&nbsp;&nbsp;Some says they simply choose an answer randomly for each problem, and some argues they have a higher chance compared to formal getting each problem correct by consistently selecting the same answer choice.&nbsp;&nbsp;As a person who interest in math, and since probability has something to do with math, I wondered if one of the two is an advantageous strategy.&nbsp;&nbsp;It turns out that the two ways gives an examinee same chance of getting a problem right, assuming each answer choice is equally likely being picked by the examinee, and is equally likely being the correct answer.

## The probability of being correct by picking an answer at random

Typically a multiple choice problem has 4 answer choices, and one of them is the correct answer.&nbsp;&nbsp;Some multiple choice problems has other number of answer choices, but the probability of getting them correct by picking an answer at random are calculated using the same way.&nbsp;&nbsp;We can make a generalized proof that apply to all of them.&nbsp;&nbsp;Let integer _n_ be the number of answers in one problem, where _n_ ≥ 2.&nbsp;&nbsp;We consider _n_ ≥ 2 because a multiple choice problem with less than 2 answer choices is illogical.&nbsp;&nbsp;Let _a_<sub>1</sub>, _a_<sub>2</sub>, ..., _a_<sub>_n_</sub> represent each answer choice.&nbsp;&nbsp;Let _s_ represent the answer chosen by an examinee, and _c_ represent the correct answer.

Notice that all possible outcome of _s_ and _c_ are equally likely to appear, because each answer choice is equally likely being picked by the examinee, and each answers choice is equally likely being the correct answer.&nbsp;&nbsp;Let _A_ be the event that _a_<sub>_i_</sub> is picked by the examinee, where integer _i_ take one value from range \[1, _n_\].&nbsp;&nbsp;Since each answer choice is equally likely being picked by the examinee, the probability that _A_ happen, represented by _P_(_A_), is 1 / _n_.&nbsp;&nbsp;Similarly, let _B_ be the event that _a_<sub>_j_</sub> is the correct answer, where integer _j_ take one value from range \[1, _n_\].&nbsp;&nbsp;Since each answer choice is equally likely being the correct answer, the probability that _B_ happen, represented by _P_(_B_), is also 1 / _n_.&nbsp;&nbsp;The probability that both _A_ and _B_ happen is _P_(_A_) × _P_(_B_) = 1 / _n_ × 1 / _n_ = 1 / _n_<sup>2</sup>.&nbsp;&nbsp;This is important, because it means the probability that the examinee getting a problem right can be calculated by dividing the number of possible outcome of _s_ and _c_ that makes the examinee get the problem right by the number of possible outcome of _s_ and _c_.

Since the examinee can pick any one of the _n_ answer choices, and the correct answer can be one of the _n_ answer choices, the number of possible outcomes of _s_ and _c_ is _n_ × _n_ = _n_<sup>2</sup>.&nbsp;&nbsp;Moreover, the examinee gets the problem correct when _s_ = _c_.&nbsp;&nbsp;Since there are _n_ possible answers, there are _n_ outcomes of _s_ and _c_ that satisfies _s_ = _c_.&nbsp;&nbsp;Therefore the probability that the examinee get a problem right with this method is _n_ / _n_<sup>2</sup> = 1 / _n_.

## The probability of being correct by consistently picking the same answer choice

When using the second method, which choice should be consistently pick is arbitrary: an examinee can pick any of the answer choice they wish.&nbsp;&nbsp;Suppose the examinee picked _a_<sub>_i_</sub>, which means _s_ = _a_<sub>_i_</sub>.&nbsp;&nbsp;The examinee gets the problem right when _s_ = _a_<sub>_i_</sub> = _c_.&nbsp;&nbsp;Since any one of the _n_ answer choices is equally likely be the correct answer, the probability that _c_ = _a_<sub>_i_</sub> is 1 / _n_.&nbsp;&nbsp;Therefore the probability that the examinee get a problem right with this method is also _n_ / _n_<sup>2</sup> = 1 / _n_.&nbsp;&nbsp;Comparing the result of the two methods, we know that none of the two methods is advantageous compared to the other: they give an examinee the same probability of getting the problem right.

## The flaw in the feeling that first method is a disadvantage compared to the second method

One may suspect that the probability of getting a problem right using the first method is actually 1 / _n_<sup>2</sup>.&nbsp;&nbsp;Consider answer choice _a_<sub>_i_</sub>.&nbsp;&nbsp;Since each of the _n_ answer choice is equally likely being picked by the examinee, the probability that the examinee picked _a_<sub>_i_</sub> is 1 / _n_.&nbsp;&nbsp;Since each of the _n_ answer choice is equally likely being the correct answer, the probability that _a_<sub>_i_</sub> is the correct answer is 1 / _n_.&nbsp;&nbsp;The probability that _a_<sub>_i_</sub> is being picked by the examinee and is the correct answer at the same time is 1 / _n_ × 1 / _n_ = 1 / _n_<sup>2</sup>.&nbsp;&nbsp;Therefore the examinee get the problem right at a probability of 1 / _n_<sup>2</sup>.

This idea is flawed because it considers only one outcome of _s_ and _c_ that satisfy _s_ = _c_, while there is a total of _n_ outcomes satisfying _s_ = _c_.&nbsp;&nbsp;It is true that the probability of one specific answer choice being chosen by the examinee and being the correct answer is 1 / _n_<sup>2</sup>, but remember that examinee gets the problem right as long as _s_ = _c_.&nbsp;&nbsp;Since there are _n_ answer choices that _s_ can take value of and _c_ can take value of, there are _n_ outcomes of _s_ and _c_ that satisfy _s_ = _c_, where each outcome associate with different answer choice being _s_, and each outcome occur with probability of 1 / _n_<sup>2</sup>.&nbsp;&nbsp;The probability that one of these _n_ outcomes occur is _n_ × 1 / _n_<sup>2</sup> = _n_ / _n_<sup>2</sup> = 1 / _n_.&nbsp;&nbsp;Which means the examinee can get the problem right with a probability of 1 / _n_.

## Conclusion

As a result, both methods gives an examinee probability of 1 / _n_ of getting a multiple choice problem of _n_ ≥ 2 answer choices right.&nbsp;&nbsp;There is no advantage of using one over another.&nbsp;&nbsp;Nevertheless, as the probability of hitting correctness with a randomly picked answer is not that high that one may rely on to pass a class, so study hard and eliminate answer choice that sound wrong may be a better way.
