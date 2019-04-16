// Model answer


function reverse(x) {
  let minus = false;
  
  if (x < 0) {
      x *= -1;
      minus = true;
  }
  
  let numText = x.toString();
  let result = '';
  
  for (let i = numText.length-1; i >= 0; i--) {
      result += numText[i];
  }
  
  result = minus ? result * -1 : Number(result);
  
  return result;
}~
~
~
~
~
~
~
~
~
~
~
~
~
~
-- 끼워넣기 --                                                                                                                                                  32,30        모두
