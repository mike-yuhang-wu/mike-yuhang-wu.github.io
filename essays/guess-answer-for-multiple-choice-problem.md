---
layout: essay
type: essay
title: "In Terms of Probability, can You Increase the Chance of Guessing the Correct Answer for a Multiple Choice Problem?"
# All dates must be YYYY-MM-DD format!
date: 2025-08-31
published: true
labels:
  - Probability
---

<img width="300px" class="rounded float-start pe-4" src="../img/smart-questions/rtfm.png">

## Is there any advantageous way of guessing answers for multiple choice problems?

Once upon a time, everyone in my English class were talking about reparing for exam, and they came up with this topic: when you got stuck on a series of multiple choice problems, and you decide to pick answers at random, is there any strategy that you can increase your chance of getting correct? The class discussed eagerly. Some says they simply choose an answer randomly for each problem, and some argues they have a higher chance getting each problem correct by pick one choice randomly and then consistingly select the same answer for all problems. It turns out that the two ways gives a examinee same chance of getting a problem right, assuming each answer is equally likely being picked, and equally likely being the correct answer.

## The Probability of Getting Correct by Picking an Answer at Random

Typically a multiple choice problem has 4 possible answers, and one of them is the correct answer. There are multiple choice problems with other number of answers, but the probability of getting them correct by picking an answer at random are calculated using the same way. Let integer _n_ be the number of answers in one problem, where _n_ ≥ 2. Why _n_ ≥ 2? Because a multiple choice problem with once choice, or zero choices, or a negative number of choices definitely sounds funny. Let _a_ <sub>1</sub>, _a_ <sub>1</sub>, ..., _a_ <sub> _n_ </sub>, represent each answer choice. Let _s_ represent the answer chosen by an examinee, and _c_ represent the correct answer. 

First of all, we have find out how many possible combination of _s_ and _c_ there are. The examinee can pick any one of the _n_ possible answers, which means _s_ will be one of the _n_ possible answer choices. In each case which _s_ represent an answer choice, _c_ will be one of the _n_ possible answer choices. Therefore the number of possible combination of _s_ and _c_ is _n_ × _n_ = _n_ <sup>2</sup>.

Notice that all combination of _s_ and _c_ are equally likely to appear, because each possible answers are equally likely being picked by the examinee, and each possible answers are equally likely being the correct answer. This is important, because it means the probability that the examinee is correct can be calculated simply by dividing the number of combination of _s_ and _c_ that makes the examinee get the problem correct, by the number of possible combination of _s_ and _c_.

The examinee gets the problem correct when _s_ = _a_ <sub> _i_ </sub> = _c_. Since there are _n_ possible answers, there are _n_ combinations of _s_ and _c_ that makes the examinee get the problem correct. The probability that the examinee is correct is _n_ / _n_ <sup>2</sup> = 1 / _n_.

## The Probability of Getting Correct by Picking an Answer at Random

```

import random

problem_quantity = 1000000                      # Test for 1000000 multiple choice problems.
choice_quantity = 4                             # Each problem has 4 choices.
correct_answer_count = 0                        # Count the number of problems got correct.

for count in range(0, problem_quantity):

    chosen_answer = random.randint(1, choice_quantity)  # Randomly choose an answer.
    correct_answer = random.randint(1, choice_quantity) # Let a random answer be the correct answer.

    if chosen_answer == correct_answer:                 # See if chosen answer match the correct answer.
        correct_answer_count += 1

result = float(correct_answer_count) / float(problem_quantity)  # Compute probability of guessing the correct answer.

print(f"The experimental probability is {result : .4f}.")
print(f"The theoretical probability is {1.0 / choice_quantity : .4f}.")

```

While the heading of his question could be better, it does convey what he’s trying to figure out. Usually something as brief as “python date of previous month” is what other users would enter in as search terms on Google, making it easily found. Another good thing about the question is that it’s not just a question. The asker shows what he or she has done and that he or she has put in some effort to answer the question. And while it may not be as important as the question itself, the asker shows courtesy, which does increase the chance of getting an answer.

```
A: datetime and the datetime.timedelta classes are your friend.

1. find today
2. use that to find the first day of this month.
3. use timedelta to backup a single day, to the last day of the previous month.
4. print the YYYYMM string you're looking for.

Like this:

 >>> import datetime
 >>> today = datetime.date.today()
 >>> first = datetime.date(day=1, month=today.month, year=today.year)
 >>> lastMonth = first - datetime.timedelta(days=1)
 >>> print lastMonth.strftime("%Y%m")
 201202
 >>>

```
 
The asker received six possible answers, and he or she was successful in inciting discussion from multiple users. The answers themselves were clear and were devoid of the rumored sarcasm and hostility of “hackers.” Since I myself have referenced this page and found it useful, I can confidently say that it is a good question.

## The foolproof way to get ignored.

While there are decent questions that benefit everyone, there are those one can ask to create an entirely different effect. In the following example, a user asks how he would, in short, create a desktop application with Facebook.

```
Q: Facebook Desktop Notifier

I am a beginner programmer that have never used anything other than what's included in a language.

I am trying to create a desktop application that notifies me anytime I get an update onfacebook. 
How should go about doing this? Thanks in advance.

edit Sorry I was not clear. Is there any way to make a DESKTOP application with facebook?
```

A simple “yes” would have answered the question, but we know that’s not the sort of answer he or she is looking for. Fortunately, someone kindly responded with a link to Facebook’s developer website. The asker should have done more research on his or her potential project. Then further down the road, he or she could have asked more specific and detailed questions that wouldn’t require a thousand-paged response for a sufficient answer.

## Conclusion

When we rely on others’ generosity and expertise to provide answers to our questions, it should hold that the question we ask should be one that leads to efficient and effective help that not only benefits us, but also the people we ask and others who might ask the same question in the future. Thus, if you have a question… make it a smart one! Asking questions may not always get you the best answer, but asking them in a way that will make others want to answer them will increase the success of finding a good solution and make it a positive experience on all sides.
