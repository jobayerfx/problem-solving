// 6. Zigzag Conversion | https://leetcode.com/problems/zigzag-conversion/

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
      return s;
    }
  
    const rows = new Array(numRows).fill("");
    let currentRow = 0;
    let direction = -1;
  
    for (const char of s) {
      rows[currentRow] += char;
  
      if (currentRow === 0 || currentRow === numRows - 1) {
        direction *= -1;
      }
      // console.log(char + ' ||  ' + currentRow + ' || ' + direction);
      currentRow += direction;
    }
  
    // Join rows together to obtain the converted string
    const convertedString = rows.join("");
    return convertedString;
  };