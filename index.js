function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  
  // Start with the first string as the initial prefix
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    let string = strs[i];
    // Update the prefix by comparing characters
    while (string.indexOf(prefix) !== 0 && prefix.length > 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
    
    // If at any point the prefix becomes empty, return immediately
    if (prefix === "") {
      return "";
    }
  }
  
  return prefix;
}

// Example 1
let strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));  // Output: "fl"

// Example 2
let strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));  // Output: ""
