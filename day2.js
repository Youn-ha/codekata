// my answer


function reverse(x) {
  x= x.toString();

  let re=[];
  for (let i=0; i<x.length; i++){
    re[i] = x.slice(i,i+1);
  }

  console.log(re);

  let re1 = [];
  let x1 = 0;

  if (re[0] === '-') {
    for(let i=1; i<re.length; i++) {
      re1[0] = '-';
      re1[i] = re[re.length-i];
      x1 = x1 + re1[i];
    }return -Number(x1);
  } else {
    for(let i=0; i<re.length; i++) {
      re1[i] = re[re.length-i-1];
      x1 = x1 + re1[i];
    } return Number(x1);
  }

}


console.log(reverse(-87210));
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
~
-- 끼워넣기 --                                                                                                                                                  32,30        모두
