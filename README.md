# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Implementing TDD KATA!

- First failing test case

![First Failing Test Case](public/images/fftc.png) 

- First passing test case with the simplest code.

![first passing test Case](public/images/fptwmc.png)

- single number should return itself

![single number should return itself failed](public/images/single-number-should-return-itself-failing.png)
![single number should return itself passed](public/images/single-number-should-return-itself-passed.png)

- Two number scenario

![Two number failed scenario](public/images/sum-of-2-numbers-failed.png)
![Two number passed scenario](public/images/sum-of-2-numbers-passed.png)
### However the test case got passed but it broke the single number test case and developer got a notice about,hence the code can be refactored.This demonstrates the glory of test driven development.Later we will see example of passing the test case without failing the earlier ones via refactoring the code.

- Two number scenario without Failing the previous ones
  
![Two number passed scenario - version2](public/images/Sum-of-2-number-passed-without-breaking-previous-test-case.png)

- Unknown/multiple amount of numbers
  
![Unknown/multiple amount of numbers failed scenario](public/images/Unknown-amount-of-numbers-failed.png)
![Unknown/multiple amount of numbers passed scenario](public/images/Unknown-amount-of-numbers-passed.png)

- Handling new lines between numbers
  
![Handling new lines between numbers failed scenario](public/images/Supporting-new-lines-as-delimeter-failed.png)
![Handling new lines between numbers failed scenario](public/images/Supporting-new-lines-as-delimeter-passed.png)

- Handling Custom delimiter other than comma and new lines
![Handling Custom delimiter passed](public/images/Custom-delimeters-passed.png)

- Handling of Negative numbers
  
![Handling of Negative numbers failed](public/images/Negatives-are-not-allowed-failed.png)
![Handling of Negative numbers passed](public/images/Negatives-are-not-allowed-passed.png)

- Adding a Method to count number of times the add function gets called

![Getting count of add function calls failed](public/images/Called-count-failed.png)
![Getting count of add function calls passed](public/images/Called-count-passed.png)

- Numbers bigger than 1000 should be ignored

![Numbers bigger than 1000 should be ignored failed](public/images/Numbers-bigger-than-thousand-should-be-ignored-failed.png)
![Numbers bigger than 1000 should be ignored passed](public/images/Numbers-bigger-than-thousand-should-be-ignored-Passed.png)

- Allowing multiple custom delimiters

![Allowing multiple custom delimiters failed](public/images/Supporting-multiple-custom-delimiters-failed.png)
![Allowing multiple custom delimiters passed](public/images/Supporting-multiple-custom-delimiters-passed.png)
