---
layout: project
type: project
image: img/wonkes/wonkes-square.png
title: "Wonkes Market"
date: 2025
published: false
labels:
  - Bootstrap 5
  - Coding Standard
  - CSS
  - ESLint
  - Framework
  - GitHub
  - HTML
  - Issue Driven Project Management
  - Learning
  - Next.js
  - pgAdmin
  - PostgreSQL
  - Prisma
  - React
  - School Project
  - Software Engineering
  - Teamwork
  - TypeScript
  - Vercel
  - Web Development
summary: "A highly-completed school project reflecting what I learned in my software engineering class."
---

<img class="img-fluid" width="100%" height="auto" src="../img/wonkes/wonkes-header.png">

## Wonkes' Birth

In the very beginning, I teamed up with four classmates and one community volunteer in my software engineering class, which my college refer as ICS 314, for final project of the course. One requirement of the final project was that it solves an existing issue in the [University of Hawaiʻi at Mānoa](https://manoa.hawaii.edu/) or the nearby community. We all had great ideas of what to do for the final project, and we have to pick one that we believe is the best: the one that best fit the skill and ability we have got, the one that solves the biggest problem, and the one that is doable within the project time limit of 4.5 weeks.

One teammate suggested online trash can map for the final project because there may be needs for disposing garbage like lunch boxes and plastic water bottles; another thought an online student market place so there is a better place for stuffs that gets thrown away during dormitory move-out period. My idea was a [landscape collection game](https://mike-yuhang-wu.github.io/essays/project-one-diamond-matrix.html), because there are so much beautiful scenes in the Mānoa campus that got ignored. We discussed and voted, and we all came to an agreement that online trash can map is too easy and the problem it solves is too *light*—there is trash can every where on the Mānoa campus and thus it is not hard to find a trash can. The landscape collection game sounded difficult (although I thought it would be easy) for us, especially the large interactive map and plots that it will have. Therefore we eventually decided to implement an online student market.

Naming stuff had always been a confusing problem to me, however, we did not have a hard time getting a name for the project as a team. We picked the first letter from the last name of each teammate, and we get letters E, K, N, O, and W. We considered many decorated combinations we can have with these five letters, such as The Woken, The Knowers, and The Monkes. We voted on these names and Wonkes won. Since then, Wonkes become the name of our online student market project.

## Overview

There are two main parts of Wonkes: <sup>1</sup>[homepage](https://wonkes-manoa.github.io/) and its [storefront](https://wonkes.vercel.app/). The Wonkes homepage is where people read about details of Wonkes project, its implementation, and the milestones we went through. The Wonkes storefront is where users make listings and sell stuffs. Each Wonkes part is in individual GitHub repository under the same [GitHub organization](https://github.com/wonkes-manoa). To see the repository for the homepage, click [here](https://github.com/wonkes-manoa/wonkes-manoa.github.io); to see the repository for the storefront, click [here](https://github.com/wonkes-manoa/manoa-student-market).

A very small amount of workload falls to the Wonkes homepage: authoring an introduction article for Wonkes, writing a manual regarding how to use Wonkes, reporting the progress of the Wonkes project, and keeping all screenshots up to date. However, the jobs here does require a huge amount of understanding of how Wonkes were built, and why it is built that way, and what disadvantage is in the way it is built. For example, the author has to know that Wonkes accept unique username during sign up because username will be used by the users to distinguish other users, and the author has to explain that while going over how to use Wonkes. Another example would be the database structure in the developer guide in the Wonkes homepage. Although we were only able to upload an image of the database structure, the author were expected to know why database is structured the way it is, including which fields has unique or case constraint and why.

On the other hand, about 90% of the workload falls to the Wonkes storefront. Although we start the project with a template that already contains implementation for harsh stuffs like authentication, there is tremendous number of pages to develop or redesign, and additionally some of the existing implementation from the template did not perfectly fit the need of Wonkes and needed changes.

## Teamwork

We used a technique called issue driven project management while working on Wonkes. Which means, we first plan the things to do, and second we make a list of these things which we will call them issues, and third everyone grab an issue that they think they can finish and start working. The list of issues will be on the GitHub repository. Once a teammate finish with an issue, he or she will close the issue on the list and grab a new one (or technically speaking, assign himself or herself a new one). In brief, the completion of the whole project is driven by completing each small issues one by one simultaneously by each teammate.

In addition to planning issues to list on GitHub, we estimate the time it take to finish each issue, so a teammate can use that to consider if he or she has enough time to finish an issue. That is called [effort estimation](https://mike-yuhang-wu.github.io/essays/effort-estimation.html).

Each member of our team has different strengths, so with the way we split tasks using issue driven project management, we each was able to pick the tasks we can do. For example, Darilyn and Josh are good at front end (e.g. user interface), so they primarily pick issues that relates to the front end; Andrew and Brian are better at back end (e.g. database), so they primarily pick issues that relates to the back end. For me, as a part-time full stack developer at International Structural Engineering and Construction Society, I knew everything a little so I picked from all kinds of issues.

<sup>1</sup>Unfortunately, Wonkes did not survive the 2025 winter due to limited budget, and the link to its storefront may no longer work.
