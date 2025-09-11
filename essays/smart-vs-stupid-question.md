---
layout: essay
type: essay
title: "Ask Smart Questions may Lead to Better Help"
# All dates must be YYYY-MM-DD format!
date: 2025-09-10
published: true
labels:
  - Smart Questions
  - Answers
  - StackOverflow
---

<img width="300px" class="rounded float-start pe-4" src="../img/smart-vs-stupid-question/three-questionmarks.png">

## Ask a smart question

On the pathway of learning we all have been through, we have asked numerous questions. Have you noticed that some questions tend to be appealing for people to answer?

Let's look at the following question from Stack Overflow, a website for asking and answering questions, as an example.

```
Q: Dump a NumPy array into a csv file

How do I dump a 2D NumPy array into a csv file in a human-readable format?
```

This question is very straight forward and to the point, making people seeing this question able to understand the problem quickly. Consequently, this question receives many useful solutions, and here is one of them:

```
A: numpy.savetxt saves an array to a text file.

import numpy
a = numpy.asarray([ [1,2,3], [4,5,6], [7,8,9] ])
numpy.savetxt("foo.csv", a, delimiter=",")
```

The link to this question in Stack Overflow is <a href="https://stackoverflow.com/questions/6081008/dump-a-numpy-array-into-a-csv-file">https://stackoverflow.com/questions/6081008/dump-a-numpy-array-into-a-csv-file</a>.

## Ask a bad question

In contrast, the question below is not as appealing:

```
Q: How adjust width of cell of csv file in python?

I am using this code to write csv file

import csv

data = [[1,'more width cell',3],[4,5,6],[7,8,9]]
item_length = len(data[0])

with open('test.csv', 'wb') as test_file:
  file_writer = csv.writer(test_file)
  for i in range(item_length):
    file_writer.writerow([x[i] for x in data])

now output is

1   ,4,7
more,5,8
3   ,6,9

i want

 1,              ,4,7
 more width cell ,5,8
 3               ,6,9

Now all cell have same width. how can increase the width of more width cell cell?
```

There were many places in this question showing that it was written carelessly. For example, the output provided does not match the code provided, as mentioned by one of the answers to this question.

```
A: now output is

1,more,7
2,5,8
3,6,9

No, it's not. When I run your code, I get

1,4,7
more width cell,5,8
3,6,9

... which is exactly as it should be. A proper CSV file is just that -- comma separated values, no padding. It does not have a concept of "length" except that each value has a particular length, which is simply the length of that particular value. If you want to pad the first column to a particular length then change the values to padded (i.e. replace a value like "1" with "1          " -- quotes added for disambiguation).
```

The asker could have edit their question to avoid mistakes. Also, and the asker could have explained his problem more thoroughly, so people reading his question does not have to guess what the asker wants.

The link to this question in Stack Overflow is <a href="https://stackoverflow.com/questions/16098649/how-adjust-width-of-cell-of-csv-file-in-python">https://stackoverflow.com/questions/16098649/how-adjust-width-of-cell-of-csv-file-in-python</a>.

## Conclusion

As a result, it is important to ask a smart question, that way it is more likely to get useful answers.
