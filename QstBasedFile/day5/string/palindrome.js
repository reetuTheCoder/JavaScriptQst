let str = "level";

let left = 0;
let right = str.length - 1;
let isPalindrome = true;
while (left < right) {
  if (str[left] !== str[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}
console.log(isPalindrome);

let freq = {};

for (const key of str) {
  // console.log(key);
  freq[key] = (freq[key] || 0) + 1;
}
let firstNonrepe = "";
for (const key in freq) {
  if (freq[key] === 1) {
    // console.log(freq[key] === 1);
    firstNonrepe = key;
    break;
  }
}
console.log(firstNonrepe);

let str1 = "care";
let str2 = "dear";
let str3 = "race";

let countchar = {};
let anagrams = true;

if (str1.length !== str3.length) {
  anagrams = false;
}
for (const key of str1) {
  countchar[key] = (countchar[key] || 0) + 1;
}
console.log(countchar);

for (const key of str3) {
  if (!countchar[key]) {
    anagrams = false;
    // countchar[key]--;
    break;
  }
  countchar[key]--;
}
console.log(anagrams);





let makeOnlytext = "He@llo W#or!ld 123";

let regix = ["/^a-zA-Z0-9/g, ''"]