# Anagram

An obvious approach is to create a character map that tallies the number of characters for each input string. Then, we can compare the maps to see if they are identical. The logic that creates the character maps can be extracted as a helper function for easier reuse. To be thorough, we should first remove all non-alphabetic characters from the input strings and then make the remainder all lowercase.


As we’ve seen, character maps have a linear time complexity and a constant space complexity. To be more precise, this approach has O(n + m) for time because two different strings are checked.
A more elegant approach is to realize that we can simply sort the input strings and then check for equality! However, the downside is that sorting usually requires linearithmic time.