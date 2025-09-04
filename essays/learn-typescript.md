---
layout: essay
type: essay
title: "I Never thought of Learning a Programming Language in One Day, and I did it Today!"
# All dates must be YYYY-MM-DD format!
date: 2025-09-03
published: true
labels:
  - Learning
  - TypeScript
  - Compare
---

<img width="150px" class="rounded float-start pe-4" src="/img/learn-typescript/timing.jpg">

It took me two semesters to get familiar with Java, and it took me one semester to get familiar with C and Python. As I thought getting to know the basics of a programming language will always take a long time, I learned typescript in one day, and I was able to write simple programs with it. Below is a copy of code I wrote in typescript for solving Project Euler problem 1: finding the sum of all natural numbers less than 1000 that is divisible by 3 or 5.

```

function projectEulerOne(cap : number) : number {

    let result : number = 0;

    for (let count = 1; count < cap; ++count) {
        if (count % 3 === 0 || count % 5 === 0) {
            result += count;
        }
    }

    return result;
}

console.log(projectEulerOne(1000));
console.log(projectEulerOne(10));

```

## Similarities that I found between TypeScript and other programming languages

The most obvious similarity is the syntax. As the code above reveals, the syntax of for loop and if clause in TypeScript are highly similar to the one in Java and C. They all starts with the keyword, then a parenthesis, then condition, then a closing parenthesis, and finally a pair of curly brace that enclose the codes to execute.

Like Python, TypeScript has the ability to infer datatype of variables you define based on the value you assign. For example, variable `count` in the code above is not specified with a datatype when defined, but TypeScript knows it is a number as it is assigned with value `1` immediately after it is declared. However, there are cases where Typescript can not infer the datatype, such as when a variable is declared but no value is assigned to it yet.

## Differences that I found between TypeScript and other programming languages

One major difference between TypeScript and Java I found at first glance into TypeScript is on the syntax for defining variables. In Java, the datatype of a variable is written before the name of the variable, for example, `int myInt = 0;`, while in TypeScript it is the reversed: `let myInt : number = 0;`. This makes me wonder what might be the reason of putting datatype after name of variable.

## Conclusion

It was fun learning a new programming languages. The similarities and differences between languages does surprises me.
