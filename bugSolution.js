```javascript
<div class="flex w-full">
  <div class="bg-red-500 p-4 w-1/2"></div>
  <div class="bg-blue-500 p-4 w-1/2"></div>
</div>
```
By adding `w-full` to the parent div, we ensure that it occupies the full available width. Consequently, the `w-1/2` classes on the child divs will now correctly divide that full width, resulting in the expected 50% width for each.