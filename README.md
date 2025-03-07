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


