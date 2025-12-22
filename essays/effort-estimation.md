---
layout: essay
type: essay
title: "How can Doing Effort Estimate for a Task be Useful"
# All dates must be YYYY-MM-DD format!
date: 2025-12-15
published: true
labels:
  - Effort Estimation
  - Software Engineering
  - Time Tracking
---

## Why effort estimation?

<img width="300px" class="rounded float-start me-2 mt-2" src="../img/effort-estimation/puzzle.png">

During the roughly one month me and my teammates spent building our project, [Wonkes](https://wonkes-manoa.github.io/), our workflow followed a pattern: one team member opened an issue, and another picked it up and solved it. This sounds simple, but in fact it required careful planning. All of us had tight schedules like a puzzle game, where only tasks of the right *size* could fit without disrupting everything else.

This became especially annoying when an issue had to be split into multiple parts and completed across different time slots. It was easy to forget what had already been done and what details needed special attention. To reduce this friction, we estimated how much time each issue would take before starting it.

Effort estimation helped us in two important ways. First, it allowed us to decide whether someone should take on an issue at all given their availability. Second, it helped us distribute work more fairly across the team by avoiding accidental overload on a certain teammate. In short, effort estimation became a practical tool for planning our issue-solving schedule.

Sometimes, this process worked surprisingly well. For example, there was one issue that involves designing a database schema and setting up a database in the development site using Prisma. I estimated this issue would take about five hours. Coincidentally, I had roughly five spare hours available, so I assigned the issue to myself. In the end, I solved the issue in about 4.8 hours—the estimate fit my schedule almost perfectly and didn't interfere with my other responsibilities.

## How we estimated effort

In theory, a good effort estimation requires prior experience or at least a completed similar task as reference. However, we have neither: many place in this project require us to build things using Next.js that we never build before, not even in homework assignments, and we did not have enough historical data or time to perform careful analysis on the time an issue will take.

As a result, many of our estimates were based on intuition or personal feelings rather than facts, and they were often inaccurate. Roughly half of our estimates missed the mark by a large margin.

One example was the issue of adding an email feature to Wonkes. I estimated it would take around ten hours, largely because I feared it would be complex. In reality, the task took about three hours of coding and one additional hour to configure an email service provider. ChatGPT played a major role in reducing this time by helping me quickly find providers with free or cheap tiers. Despite the issue was successful solved quickly, the original effort estimate was very inaccurate.

Another example was the implementation of the homepage. We thought it would take about an hour total since it involved no user interaction, just displaying information using basic React components like `Container`, `Card`, and standard HTML elements like `h1` and `p`. It turns out that this issue took nearly three hours because we realized we have to add some buttons to make the page nice enough.

## Tracking actual time spent on solving an issue

To improve our estimates, we also tracked how much time we actually spent on each issue, including both coding and non-coding effort. These records served two purposes: evaluating how accurate our estimates were and providing references for future effort estimation.

Each teammate tracked time differently. Some take their best guesses, and some use stopwatches. I found taking a guess fast but unreliable because my luck is bad, and using a stopwatch disruptive because it broke my focus every time I had to start or stop it. Instead, I adopted a simple but reasonably accurate method, which is read the clock and estimate the time elapsed.

For example, if I started working at 10:28 a.m. and finished at 11:34 a.m., I would record two hours of effort. This method required minimal attention and worked well for tracking coding efforts.

Tracking non-coding effort like designing user interfaces, planning component structures, searching documentation, or asking ChatGPT was more difficult. These activities often occurred frequently with short duration and were hard to isolate from coding-effort. For those, I chose to rely on personal feeling and guesses, prioritizing speed and simplicity over accuracy.

Overall, my tracking method was fairly accurate, though it likely deviated from the true time spent by up to 15 minutes per issue due to rounding and guessing.

## Improvements

Just like I like to think about possible improvements of codes I wrote or things I planned, I do got some ideas on how to do my effort estimation and actual effort tracking better. With large sacrifice on attention and convenience, I can improve accuracy on non-coding effort tracking by having a stopwatch next to me, which I let run when I start inputting non-coding effort, and pause when I stop inputting non-coding effort. When I solve an issue, the time elapsed shown on the stopwatch is exactly my non-coding effort for that issue. 

Beyond that, there may be dedicated tools or techniques for tracking development effort more effectively and less disruptive. Maybe my next task is seek one on the internet.

## Conclusion

Effort estimation during the Wonkes project was far from perfect, but it helped us scheduling the time slot for solving each issues. Luckily, the inaccurate estimates did not become a drawback for Wonkes, but it will be better if we could make it more accurate for future projects. One way is through gaining experience, and another way is to record actual time spent on each issue and use them as reference for similar issues in the future. In brief, it is worthwhile to do effort estimation.

Note:
ChatGPT was used to help illustrating the image above and editing this essay.
