---
layout: essay
type: essay
title: "Learning with an Artificial Intelligence"
# All dates must be YYYY-MM-DD format!
date: 2025-12-16
published: true
labels:
  - Learning
  - Artificial Intelligence
  - Software Engineering
---

## Introduction

One useful role of artificial intelligence or AI is in education. AI can act like a personal tutor that is available whenever you want (as long as you have internet). AI can help with English grammar, writing, math, physics, and even other subjects like software engineering.

In my software engineering class, which my college refer as ICS 314, I personally used an AI called ChatGPT to support my learning and project work. In fact, the class encouraged the use of AI as part of the learning process.

## Personal experience with AI

There were many places in ICS 314 where I used AI, and many places where I could have used it but chose not to.

### The experiences

We were introduced to many programming languages, techniques, and frameworks. We learned them through free online tutorials and by completing assignments which the class called "experiences."

I did not use AI while reading tutorials or working on these early assignments, mainly because it was too *early* for me. I could do them myself, so AI would add very little benefit, and thus using AI here would mostly be a waste of time.

### The in-class WODs

In class, we had timed quizzes called "workout of the day" or WODs. WODs focused on implementing a function or webpage using the tools we learned within a strict time limit.

This is the part of the class where I used AI the least. The instructions were often long, and sometimes in the form of images. I didn’t think I could quickly paste everything into an AI tool in a way that would help.

Since WODs are timed, every second matters. In timed quizzes and exams I tend to turn in my work at the very last moment, because I don't want to waste time I could spend checking my work. For that reason, doing WODs myself was usually the best option. AI might give faster answers, but it also risks costing time and producing something not reliable at all.

### The in-class practice WODs

Practice WODs were similar: still timed quizzes, but more focused on training rather than evaluating our learning status. I still usually did them myself rather than using AI.

Honestly, I don't have a strong logical reason for that. Maybe a habit or self-challenge the strong one? But the trade-off was the same: AI could maybe provide quick answers, but it could also waste time.

### The essays

The class also assigned writing tasks—essays about what we learned and what we thought about it—posted on our personal portfolio.

English is not my first language, and I didn't learn it well when I was young, so AI was extremely helpful for improving grammar and tone. One prompt I gave ChatGPT was:

```
Okay, we finally finished Wonkes! Alright, indeed it is the due date of Wonkes has passed and we have to submit what we have. Luckily it turns out our grades are nice: we got an A overall. Yay! The next thing is to wickedly utilize Wonkes to make us more like a professional by writing essays about the effort we spent. Can you read the following essay and improve it, give it a conclusion, and an interesting title? ## Why effort estimation? In the rougly one…
```

Yes, I often write long prompts, although large portion of them are confides. ChatGPT usually improved my essay a lot, although I still needed to revise the output manually because ChatGPT sometimes moves too quickly through ideas, making text more like a summary rather than explanation. The cost of using AI here felt like nothing, and the benefit was high.

### The final project

The part of the course where I used AI the most was the final project, [Wonkes](https://wonkes-manoa.github.io/), which I built with teammates and ChatGPT.

Even though it was a school project, I didn't treat it as something to do in the simplest possible way (even if ChatGPT sometimes pushes that style). I planned a lot for Wonkes, which created a lot of work. My usual workflow was: I do the design and decisions, and I let ChatGPT help with the boring but necessary parts like generating a page skeleton or formatting a form. For example, I used prompts like this to speed up page development:

```
Now the Merch Detail page is finished. The next task is to redesign the Logout page. Once the user clicks logout, they will be redirected to this page, where the user is being asked whether or not the user is sure to log out. There is a button that user clicks to confirm logout, and a button to cancel. Please redesign the Logout page based on the following template: 'use client'; import { signOut } from 'next-auth/react'; import { Button, Col, Row } from 'react-bootstr…
```

When problems happened and I couldn't find a solution, I asked ChatGPT to inspect code and suggest causes:

```
There is a problem that we just found on Wonkes: on dev site images can upload normally when creating a new merch, but on production site only one image can upload successfully and more than one image will fail. The program still notify that the adding/editing merch is successful, but the image did not actually get uploaded to the database (I found no database entry created in the database). What might be the problem, please check the code. The code for add merch form is 'use client'; import { useSession } from 'next-auth/react'; import { Button, Card, Col, Container…
```

I also used ChatGPT for language and UI text improvement, like making search bar placeholders shorter:

```
I am having a few ideas of what to put as placeholder in seachbars for listings. <Form> <Form.Group controlId="search" className="mb-3"> <Form.Control type="text" placeholder={wordBank[Math.floor(Math.random() * wordBank.length)]} value={search} onChange={(e) => setSearch(e.target.value)} /> </Form.Group> </Form>. Here are the placeholders that will be picked at random. const wordBank = [ '(„• ᴗ •„) Let\'s search something!', '(　-_･) ︻デ═一 ▸ What are you aiming for?', '(⸝⸝⸝O﹏ O⸝⸝⸝) What have we got today?', '(⸝⸝> ᴗ•⸝⸝) Good luck searching your favorite!', '<(￣︶￣)> Proud of what you want today?', 'ヽ(・∀・)ﾉ Aloha, what can search bar find you today?', '(///▽///) Would you embarrass when you search for certain stuff', '(×﹏×) RIP', '(⊃｡•́‿•̀｡)⊃ Hug what you like.', '౦０o ｡ (‾́。‾́ )y~~ Wonkes\' policy banned cigar from sale.', ]; Can you shorten the phrase as much as possible without losing too much of its meaning? Hard words is okay.
```

In the final project, AI gave me a lot of value. The biggest benefit was time: I saved time on repetitive work and spent more time on design choices, structure, and debugging.

But there is also a cost: if I let AI do the boring parts, I get less practice doing them myself. That can matter if I need to do those tasks without AI, such as during an interview.

### Learning a concept or tutorial

Most tutorials in the class were clear enough that I didn't need AI. However, one exception was connecting pgAdmin 4 on my computer to a local database. pgAdmin asked for many configuration values, and I didn't know where to find them. I searched online, and an AI tool (I think it was called "AI Overview") gave a clear step-by-step guide that helped me build the connection successfully.

There wasn't much cost, and the benefit was huge: I no longer needed to query databases through the terminal with command lines.

### Answering a question in class or on Discord

In ICS 314, I did not use AI to answer classmates' or project teammates' questions in class or in Discord.

One reason: sometimes I already knew the answer, so AI wasn't needed. Another reason: many questions were highly course-specific, for example, "What coding software are we supposed to use to zip files to do EUT 1 and 2?" AI wouldn't know the answer. The last reason is simple: I didn't answer the question because someone else already did.

### Asking or answering a smart question to a classmate

I didn't use AI to answer classmates' smart questions. The reason is also simple: I didn't want to answer them, and I didn't answer any of them, so I didn't use AI.

### Coding examples

I did not ask AI for small coding examples like "Give an example of how to generate a random number between 10000 to 99999." If I'm going to ask an AI, I usually prefer asking directly for the code I need in my situation. I'm busy and I try to save time, so example-only prompts aren't my style.

### Explaining code

I generally prefer reading code myself, but if the task becomes time-consuming or confusing, I ask ChatGPT to explain it. For example:

```
Please explain what are @relation and the fields and references that come after it. Also, please tell me what does idexes like @@index([AccountID]) do.
```

What I like most is time saved: instead of researching each keyword or reading long documentation, I can get an explanation quickly.

As for drawbacks, my honest answer right now is that I don't feel one strongly. Nevertheless, the risk is reduce of ability to read unfamiliar code confidently without help.

### Writing code

As mentioned earlier, I frequently let ChatGPT help with writing code for Wonkes, including editing existing code. The benefit is clear: speed. The drawback is also realistic: sometimes ChatGPT's output doesn't match the needs exactly, so I still need manual review and edits. But it is faster than writing all code from scratch anyway.

One prompt I used was:

```
Right now I am to write the code for the right side of the merchandise detail page. I will need a merch object for testing. The data model for a merchandise in prisma.schema is model Merch { MerchID Int @id @unique @default(autoincrement())...please create an object name testMerch based on these information.
```

### Documenting code

Honestly, the most documentation I did in ICS 314 was writing comments for parts of the final project. For example:

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

Since this wasn't very hard, I didn't use AI much for documentation.

### Quality assurance

While working on my final project Wonkes, there is many problems like form not submitting, no response for user appear while it should, or wrong response shown to the user. The problem that I remember the most that I solved with ChatGPT was a problem on the modified sign in credential system in Wonkes. The original system accept email address and password as credentials, and we changed them to username and password. The problem was that the sign in fails after the system is modified. I inserted many print statements in the code to see where the execution stops, and asked ChatGPT what might be the reason for the stop.

```
I added some checkpoints inside the authorize function: async authorize(credentials) { console.log('F'); if (!credentials?.username || !credentials.password) { console.log('MISSING CREDENTIAL'); return null; }…I read the terminal after a submission, and BEGIN QUERY is printed onto the terminal, and then followed by POST /api/auth/callback/credentials 401 in 178ms. Nothing else printed onto the terminal after that. Did the query failed or never complete, causing the sign in to fail?
```
```
When I manually insert the password, I inserted changeme as is, not hashed. After catching the error thrown during the query, the following is printed onto the terminal: BEGIN QUERY E QUERY FAILED: PrismaClientInitializationError: Invalid prisma.account.findUnique() invocation: Can't reach database server at ***:5432 Please make sure your database server is running at ***:5432. at $n.handleRequestError
```

Eventually, the root of the problem was an extra semicolon (;) appear on an environment variable that cause the system to misread something.

```
After adjusting the environment variables, the database is connected. After bypassing the hash thingie, using credentials.password === account.Password instead of compare(), I logged in successfully! Now let's work around the hash related stuff.
```

Without ChatGPT, this debug might take days, but ChapGPT shrank it to two hours. The cost? The lost in days of debugging experience.

### Other uses

Remember that ChatGPT is capable of drawing stuffs. I asked ChatGPT to design an icon for Wonkes (and that icon was so nice that it eventually become our logo for Wonkes).

<img width="300px" class="rounded float-start me-2 mt-2" src="../img/artificial-intelligence-in-education/sunset-wonkes.png">

I asked ChatGPT to draw other pictures as well, such as the background image for the 404 not found page, as well as the background image for the coming-soon page. ChatGPT saved me a lot of time that I would have used on designing, drawing, or seeking these images.

## AI's impact on learning and understanding

Overall, AIs has great influences on my learning experiences. Since I was able to ask AIs like ChatGPT for explanations on things I don't understand, and they give clear responses, AIs enhanced my learning and understanding of the course materials, as well as the concepts of software engineering. I gained positive impact on my comprehension of codes, and approaches for solving problems in code.

## Practical applications of AIs

I have saw how AIs are used to solve real-world problems. For example, in the organization that I worked for, my colleague who are working on adding manuscripts to be published on our website, used AI to help parsing hundreds of manuscripts and its information into XML codes, which saved him a lot of time. This further proves that AI is very effective at saving us time.

## Challenges and opportunities of using AI

One limitation of using AIs that was argued frequently was if AI made people lose the ability to figure solutions or solve problems themselves. For people who don't wish to think, AI will be a convenient tool for getting correct answers. AIs can be a tutor that can teach or help one learn all day long, but it can also be a digital slave for giving free answers. I can ask ChatGPT to explain a piece of code to me, and I can ask ChatGPT to write the whole Wonkes for me. Whether or not AI can help one learn is based on the willingness of that person to learn. Proudly saying, I am interesting in learning stuffs, so AI is more of a tutor for me.

There is potential opportunity for AIs in software engineering education, but the student learning with AIs should be aware that they should learn.

## Comparative analysis

The advantage of an AI compared to a teacher in school in tutoring a student is time: an AI can be consulted at nearly anytime, while a student can only consult a teacher during class, office hours. Sometime remote communications like email and Discord channel are available, but still require waiting for response. AI typically answer immediately, which makes learning more engaged. Another reason is that AI can make learning more engaged is that AI is not a human, thus a student may ask questions that they may chose to not ask a teacher because they are shy. I is an example; I ask minimal number of questions in class but talk a lot to ChatGPT.

Regarding knowledge retention or how well a student may remember knowledge, the traditional teaching method may win. If you ask an AI to explain something, it typically give response but without a way to remember it. However, a teacher can gain experience with teaching and develop ways that help students remember things. For example, my physics teacher create interesting words like PIV to help us remember equations (PIV is for equation P = IV, meaning power is equal to current times voltage).

Regarding practical skill development, teachers still play one important role that AI cannot fully replace, which is telling student what to learn. For example, in ICS 314 we are told to learn JavaScript, then TypeScript, then HTML and CSS, and lastly frameworks like Bootstrap and React. This is a nice plan for gradually learning stuff required for developing a web-based final project at the end of the semester. AIs can provide plans, too, but requires one to ask for one. Therefore the traditional teaching method serves as an important initiative for students to start develop practical skills that they need. Both teachers and AIs can help on further educations of the practical skill development.

## Future considerations

AIs can be used in software engineering education, as it can serve as source that a student can consult at any time. There will be challenges, such as a student rely on AI for getting answers and not learning anything.

## Conclusion

In conclusion, AI is a very nice tool that helps us save time, and is a very nice tutor that helps one learn. This applies to software engineering courses as well. I recommend AI as a tool for helping student learn software engineering in future courses, but be caution and avoid it being abused.

Note:
ChatGPT was used to help illustrating the image above and editing this essay.
