```javascript
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2"></div>
  <div class="bg-blue-500 p-4 w-1/2"></div>
</div>
```
This code snippet uses `w-1/2` which means each div should occupy half of the available width. However, if the parent element doesn't have a defined width, the divs will not take up half the screen width as expected. 