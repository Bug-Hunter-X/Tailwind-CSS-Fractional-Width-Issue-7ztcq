# Tailwind CSS Fractional Width Issue
This repository demonstrates an unexpected behavior of Tailwind CSS's fractional width classes when the parent element doesn't have an explicit width defined. The issue occurs when using classes like `w-1/2`, `w-1/3`, etc., and can lead to unexpected layout results.

## Problem Description
When applying fractional width classes to child elements within a flex container (or other layout context), the intended fractional width only works correctly if the parent container has a defined width.  If the parent lacks a defined width, these classes may not produce the expected layout.

## Solution
To resolve this issue, you need to explicitly define the width of the parent container.  This can be done using various Tailwind CSS classes such as `w-full`, `w-screen`, or a specific pixel or percentage width, depending on the desired layout.

## How to reproduce the bug
1. Clone this repo.
2. Open `bug.html` in your browser. Observe that the red and blue divs do not occupy exactly half the width each.  
3. Open `bugSolution.html` in your browser. Observe the divs are now correctly sized.
