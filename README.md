# Mr Roboger's Neighborhood

By James Fox

A website that displays a list of numbers based on the user's input, with some twists.

## Technologies Used

- HTML
- CSS
- JavaScript
- GIT

## Info

Takes an inputed number and lists all the numbers to that number. Then replaces certain numbers with Beep, Boop, and Can I be your Neighbor.

## Setup

1. Clone this repository to your desktop using git clone
2. Click on the index.html file to view the website.
3. Input a number and watch the magic happen!

## GitHub Link

[Link to Code on GitHub](https://github.com/jfox25/MrRobogersNeighborhood)

## Bugs

No known bugs at this time.

## Future Improvements

- Plan to add some new style animations to the page.

## License

MIT
Copyright (c) 2022 James Fox

```javascript
# Specs

Describe beepBoop()

Test: "It should be able to return an array of numbers"
Code: beepBoop(7)
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7]

Test: "It should be able to able to replace the numbers containg one with Beep!"
Code: beepBoop(5)
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should be able to able to replace the numbers containg two with Boop!"
Code: beepBoop(5)
Expected Output: [0, "Beep", "Boop!", 3, 4, 5]

Test: "It should be able to able to replace the numbers containg three with Won't you be my neighbor?"
Code: beepBoop(5)
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should be able to able to use Hierarchy on numbers with both a 1, 2, or 3"
Code: beepBoop(23)
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep", "Beep", "Beep", "Beep", "Beep", "Beep", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]

Describe generateRandomNumber()

Test: "Should be able to generate a random number from 1-9"
Code: generateRandomNumber()
Expected Output Possiblities: 1, 2, 3, 4, 5, 6, 7, 8 , 9

Test: "Should be able to generate a random number from 1-40"
Code: generateRandomNumber()
Expected Output Possiblities: 1, 2, 3, 4, 5, 6, 7, 8 , 9 .... ,39,40
```
