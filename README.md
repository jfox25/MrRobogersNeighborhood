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
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Boop!", "Won't you be my neighbor?", "Beep", "Beep", "Beep", "Beep", "Beep", "Beep", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]
```
