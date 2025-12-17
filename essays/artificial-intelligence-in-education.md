---
layout: essay
type: essay
title: "Learning with an Artificial Intelligence"
# All dates must be YYYY-MM-DD format!
date: 2025-12-16
published: false
labels:
  - Learning
  - Artificial Intelligence
  - Software Engineering
---

## Introduction

<img width="300px" class="rounded float-start me-2 mt-2" src="../img/effort-estimation/puzzle.png">

One usage of artificial intelligence or AI is on education. An AI can be one's personal tutor that can be consulted whenever the person want (and have internet access). Other than English grammar, writing, mathematics, and physics, AI can help one learn software engineering. Me, personally, have used an AI called ChatGPT to help me learn in my software engineering class, which my college called it ICS 314. The class even suggest the use of AI on learning.

## Personal experience with AI

There are many places in ICS 314 that I used AI, and there is many places I can but I chose not to use AI.

### The experiences

We are introduced many programming languages, techniques, and frameworks in class. We learned them by going over free online tutorials, and also by completing some assignments or what they called "experiences" with them. I did not use AIs while learning these tutorials or working on these assignments, because it is too *early* for me; I am capable of do them myself, so I don't even need to touch AI. The benefit of consulting AI here for me is very small, and the cost is waste of time.

### The in-class WODs

During class they have assignments called "workout of the day" or WODs, which is a timed quiz focusing on implementing a functionality or a webpage using the tools used within a certain amount of time. Guess what? This is the part of the class that I used AI the least, because the instruction is very long and some of them are given in the form of picture. I don't believe I can input all of them to AI at once. Remember that WODs are timed quizzes: time is precious and every second shall not be wasted. If you noticed that I always turn in my quiz or exam papers at the last moment, the reason is that I don't want to waste time that I spend on checking answers by turning things in early. For that reason, doing the WODs myself is the most common choice I made. Maybe I can benefit from having answers right a way, but at a risck of costing a lot of time and don't get anything good.

### The in-class practice WODs

Practice WODs are also timed quizzes, but they more focus on practicing instead of figuring how was our learning going along. Similarly, I commonly chose to do them myself instead of using AIs. This is because… actually I don't have a reason for this. Maybe self-challenge of the strong can be a reason? Anyway, the benefit is I can have the answer right a way, at a risk of costing a lot of time and don't get anything good.

### The essays

For example, the class occasionally assign writing assignments, which is to write an essay about what we learning and what we thought about it, and post it on our personal portfolio. Since English is not my first language, and I did not learned it well when I was young, I need AI's help on refining the grammars and tones. One prompt I once gave ChatGPT is

> Okay, we finally finished Wonkes! Alright, indeed it is the due date of Wonkes has passed and we have to submit what we have. Luckily it turns out our grades are nice: we got an A overall. Yay! The next thing is to wickedly utilize Wonkes to make us more like a professional by writing essays about the effort we spent. Can you read the following essay and improve it, give it a conclusion, and an interesting title? ## Why effort estimation? In the rougly one…

Yes, I often talk a lot to ChatGPT in prompts. It turns out that ChatGPT made my essay pretty well, although I typically still need to revise the output manually since ChatGPT's writing goes over everything too quick. Nevertheless, the cost of using AI here is none.

### The final project

The part of the course that I use AI the most often is the final project, [Wonkes](https://wonkes-manoa.github.io/), which I do it with some teammates. I didn't treat it simple as possible because it is a school project (even though ChatGPT seems tend to do so), therefore I planned a lot for Wonkes, and thus results in a lot to do. I tend to do the designings, and let ChatGPT help me do the relatively boring stuffs, such as writting a skeleton for a page, formatting input fields for a form:

> Now the Merch Detail page is finished. The next task is to redesign the Logout page. Once the user clicks logout, they will be redirected to this page, where the user is being asked whether or not the user is sure to log out. There is a button that user clicks to confirm logout, and a button to cancel. Please redesign the Logout page based on the following template: 'use client'; import { signOut } from 'next-auth/react'; import { Button, Col, Row } from 'react-bootstr

Sometimes problems occur and I don't find a solution, I asked ChatGPT to read the code and find the issue:

> There is a problem that we just found on Wonkes: on dev site images can upload normally when creating a new merch, but on production site only one image can upload successfully and more than one image will fail. The program still notify that the adding/editing merch is successful, but the image did not actually get uploaded to the database (I found no database entry created in the database). What might be the problem, please check the code. The code for add merch form is 'use client'; import { useSession } from 'next-auth/react'; import { Button, Card, Col, Container…

There are times where I asked ChatGPT for better language usage on the project:

> I am having a few ideas of what to put as placeholder in seachbars for listings. <Form> <Form.Group controlId="search" className="mb-3"> <Form.Control type="text" placeholder={wordBank[Math.floor(Math.random() * wordBank.length)]} value={search} onChange={(e) => setSearch(e.target.value)} /> </Form.Group> </Form>. Here are the placeholders that will be picked at random. const wordBank = [ '(„• ᴗ •„) Let\'s search something!', '(　-_･) ︻デ═一 ▸ What are you aiming for?', '(⸝⸝⸝O﹏ O⸝⸝⸝) What have we got today?', '(⸝⸝> ᴗ•⸝⸝) Good luck searching your favorite!', '<(￣︶￣)> Proud of what you want today?', 'ヽ(・∀・)ﾉ Aloha, what can search bar find you today?', '(///▽///) Would you embarrass when you search for certain stuff', '(×﹏×) RIP', '(⊃｡•́‿•̀｡)⊃ Hug what you like.', '౦０o ｡ (‾́。‾́ )y~~ Wonkes\' policy banned cigar from sale.', ]; Can you shorten the phrase as much as possible without losing too much of its meaning? Hard words is okay.

Using AI here has a lot of benefits, and the biggest one is that I saved a lot of time from boring stuffs, and I can have more time to focus on designing the pages and the structures. Of course, the cost is that I don't get practice on doing these boring stuffs, which can become important if I happen to do them without AI, such as during an interview.

### Learning a concept or tutorial

Typically the tutorials we read in this class explains things clearly, and I don't need to consult an AI to help on understanding. However, there is one exception, which is how to connect pgAdmin 4 installed on my computer to a local database on my computer. There is a lot of things pgAdmin 4 asks, and I don't know where to find each of them. I searched on the internet about how to do so, and an AI, I guess its name is AI Overview, answered my question and helped me built the connection successfully. There is no cost at asking this AI, but I benefit a lot from this connection as I no longer need to query these databases on the terminal.

### Answering a question in class or Discord

For ICS 314, I did not used AI to answer classmates' or project teammates' questions in class or Discord channel we used for communication. One reason is that I know the answer, and no need to consult AIs. Another reason is that the question is about a specific part of ICS 314, such as "What coding software are we supposed to use to zip files to do EUT 1 and 2," which the AI won't know the answer. The last reason is I didn't answer the question.

### Asking or answering a smart question to a classmate

I did not use AI to answer classmates' smart questions; the reason is fairly simple: I don't want to answer them and did not answer any of them, therefore I did not use AI to answer them.

### Coding examples

I did not ask AI to provide coding examples, such as asking questions like "Give an example of how to generate a random number between 10000 to 99999," because I personally prefer to ask for the code I have to write directly, if I do ask an AI. I am a busy person, so I attempt to save time, and thus won't ask coding examples.

### Explaining code

I personally prefer read codes myself, but when the task gets time-consuming or I can't understand the code, I ask ChatGPT to read the code and explain what it does:

> Please explain what are @relation and the fields and references that come after it. Also, please tell me what does idexes like @@index([AccountID]) do.

What I like the AI the most is that it helps me save time by doing stuff for me. By asking an AI to explain code, I don't need to read the code myself, and don't need to do research on what each element does. The benefit is time-saving, but how about drawbacks? My answer to this question right now is, there is no drawback.

### Writing code

As mentioned above, writing code is what I let ChatGPT helped frequently on my final project. I let ChatGPT edit existing codes as well. Letting AI write code is beneficial because it saves time. However, there is drawbacks. Sometimes ChatGPT's code does not fit the needs exactly, so manual code review and editing is still required; but it is still better than writing the code ourselves from scratch.

Just for example, one prompt I had for ChatGPT was

> Right now I am to write the code for the right side of the merchandise detail page. I will need a merch object for testing. The data model for a merchandise in prisma.schema is model Merch { MerchID Int @id @unique @default(autoincrement())...please create an object name testMerch based on these information.

### Documenting code

Honestly, if I remember correctly, the most documentation of codes I did in ICS 314 was writing comments for some of the code in my final project.

```
/**
 * A simplification of the MerchImage data model in the database. Contains basic information
 * needed to identify and display an image.
 */
export type MerchImage = {
  id: number;
  mimeType: string;
  base64: string;
  url?: string;
};
```

There is not much hardships on these that will require me to ask an AI for help, so I did not used AI on documenting code in ICS 314.

### Quality assurance

While working on my final project Wonkes, there is many problems like form not submitting, no response for user appear while it should, or wrong response shown to the user. The problem that I remember the most that I solved with ChatGPT was a problem on the modified sign in credential system in Wonkes. The original system accept email address and password as credentials, and we changed them to username and password. The problem was that the sign in fails after the system is modified. I inserted many print statements in the code to see where the execution stops, and asked ChatGPT what might be the reason for the stop.

> I added some checkpoints inside the authorize function: `async authorize(credentials) { console.log('F'); if (!credentials?.username || !credentials.password) { console.log('MISSING CREDENTIAL'); return null; }`…I read the terminal after a submission, and BEGIN QUERY is printed onto the terminal, and then followed by POST /api/auth/callback/credentials 401 in 178ms. Nothing else printed onto the terminal after that. Did the query failed or never complete, causing the sign in to fail?

> When I manually insert the password, I inserted changeme as is, not hashed. After catching the error thrown during the query, the following is printed onto the terminal: `BEGIN QUERY E QUERY FAILED: PrismaClientInitializationError: Invalid prisma.account.findUnique() invocation: Can't reach database server at ***:5432 Please make sure your database server is running at ***:5432. at $n.handleRequestError`

Eventually, the root of the problem was an extra semicolor (;) appear on an environment variable that cause the system to misread something.

> After adjusting the environment variables, the database is connected. After bypassing the hash thingie, using credentials.`password === account.Password` instead of `compare()`, I logged in successfully! Now let's work around the hash related stuff.

Without ChatGPT, this debug might take days, but ChapGPT shrinked it to two hours. The cost? The lost in days of debugging experience.

### Other uses

Remember that ChatGPT is capable of drawing stuffs. I asked ChatGPT to design an icon for Wonkes (and that icon was so nice that it eventually become our logo for Wonkes).

<img width="300px" class="rounded float-start me-2 mt-2" src="../img/effort-estimation/puzzle.png">



*Experience WODs e.g. E18*
*In-class Practice WODs*
*In-class WODs*
*Essays*
*Final project*
Learning a concept / tutorial
*Answering a question in class or in Discord*
*Asking or answering a smart-question*
*Coding example e.g. “give an example of using Underscore .pluck”*
*Explaining code*
*Writing code*
*Documenting code*
*Quality assurance e.g. “What’s wrong with this code <code here>” or “Fix the ESLint errors in <code here>”*
Other uses in ICS 314 not listed





Reflect on your personal experiences with AI technologies within ICS 314. Provide specific examples of how you have used AI or explanations as to why you have not used AI (e.g. “I tried it for xxx and found it did not give useful results” or “I thought it important for me to find an answer on my own.”) for each of the following course elements:






During the roughly one month me and my teammates spent building our project, [Wonkes](https://wonkes-manoa.github.io/), our workflow followed a pattern: one team member opened an issue, and another picked it up and solved it. This sounds simple, but in fact it required careful planning. All of us had tight schedules like a puzzle game, where only tasks of the right *size* could fit without disrupting everything else.

This became especially annoying when an issue had to be split into multiple parts and completed across different time slots. It was easy to forget what had already been done and what details needed special attention. To reduce this friction, we estimated how much time each issue would take before starting it.

Effort estimation helped us in two important ways. First, it allowed us to decide whether someone should take on an issue at all given their availability. Second, it helped us distribute work more fairly across the team by avoiding accidental overload on a certain teammate. In short, effort estimation became a practical tool for planning our issue-solving schedule.

Sometimes, this process worked surprisingly well. For example, there was one issue that involves designing a database schema and setting up a database in the development site using Prisma. I estimated this issue would take about five hours. Coincidentally, I had roughly five spare hours available, so I assigned the issue to myself. In the end, I solved the issue in about 4.8 hours—the estimate fit my schedule almost perfectly and didn't interfere with my other responsibilities.

## How we estimated effort

In theory, a good effort estimation requires prior experience or at least a completed similar task as reference. However, we have neither: many place in this project require us to build things using Next.js that we never build before, not even in homework assignments, and we did not have enough historical data or time to perform careful analysis on the time an issue will take.

As a result, many of our estimates were based on intuition or personal feelings rather than facts, and they were often inaccurate. Roughly half of our estimates missed the mark by a large margin.

One example was the issue of adding an email feature to Wonkes. I estimated it would take around ten hours, largely because I feared it would be complex. In reality, the task took about three hours of coding and one additional hour to configure an email service provider. ChatGPT played a major role in reducing this time by helping me quickly find providers with free or cheap tiers. Despite the issue was successful solved quickly, the original effort estimate was very inaccurate.

Another example was the implemention of the homepage. We thought it would take about an hour total since it involved no user interaction, just displaying information using basic React components like `Container`, `Card`, and standard HTML elements like `h1` and `p`. It turns out that this issue took nearly three hours because we realized we have to add some buttons to make the page nice enough.

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
