module.exports = function toReadable (number) {

    const NUMERALS = new Map([
    ["0" , "zero"],
    ["1" , "one"],
    ["2" , "two"],
    ["3" , "three"],
    ["4" , "four"],
    ["5" , "five"],
    ["6" , "six"],
    ["7" , "seven"],
    ["8" , "eight"],
    ["9" , "nine"],
    ["10" , "ten"],
    ["11" , "eleven"],
    ["12" , "twelve"],
    ["13" , "thirteen"],
    ["14" , "fourteen"],
    ["15" , "fifteen"],
    ["16" , "sixteen"],
    ["17" , "seventeen"],
    ["18" , "eighteen"],
    ["19" , "nineteen"],
    ["20" , "twenty"],
    ["30" , "thirty"],
    ["40" , "forty"],
    ["50" , "fifty"],
    ["60" , "sixty"],
    ["70" , "seventy"],
    ["80" , "eighty"],
    ["90" , "ninety"],
    ["100" , "hundred"],
    ["1000" , "thousand"],
    ["1000000" , "million"],
    ]);
    
    const N = NUMERALS; //pseudonym
    
    if (number == undefined) return '';
        if (isNaN(number)) return '';
        
    let strNum = String(number);
    let numArr = [];
    
    let result = '';
    let resArr =[];
    
    
    
    
    if (strNum.length>1) {
    numArr = strNum.split('').reverse();
    }
    
    console.log(strNum);
     
     switch (strNum.length) {
       case 0: 
         result = '';
         break;
       case 1: 
         result = N.get(strNum);
         break;
       case 2: 
         //00    
         if (+(numArr[1]+numArr[0]) <=20) {       
            resArr.push(N.get(String(+(numArr[1]+numArr[0]))));
         } else {
             if (numArr[0] == '0') {
             resArr.push(N.get(String(numArr[1]*10))); 
             } else {
             resArr.push(N.get(numArr[0])); 
             resArr.push(N.get(String(numArr[1]*10)));          
             }     
         }
         
         result = resArr.reverse().join(' ');
        
         break;
       case 3:
         //00    
         if (+(numArr[1]+numArr[0]) <=20) {       
            resArr.push(N.get(String(+(numArr[1]+numArr[0]))));
         } else {
             if (numArr[0] == '0') {
             resArr.push(N.get(String(numArr[1]*10))); 
             } else {
             resArr.push(N.get(numArr[0])); 
             resArr.push(N.get(String(numArr[1]*10)));          
             }     
         }
         //000
         if (numArr[2] != '0') {
           if ((numArr[0] == '0')&&(numArr[1]=='0')) resArr = []; 
         resArr.push(N.get('100'));
         resArr.push(N.get(numArr[2]));
         }
         
         result = resArr.reverse().join(' ');   
       
        
         break;
       case 4: 
         //00    
         if (+(numArr[1]+numArr[0]) <=20) {       
            resArr.push(N.get(String(+(numArr[1]+numArr[0]))));
         } else {
             if (numArr[0] == '0') {
             resArr.push(N.get(String(numArr[1]*10))); 
             } else {
             resArr.push(N.get(numArr[0])); 
             resArr.push(N.get(String(numArr[1]*10)));          
             }     
         }
         //000
         if (numArr[2] != '0') {
           if ((numArr[0] == '0')&&(numArr[1]=='0')) resArr = []; 
         resArr.push(N.get('100'));
         resArr.push(N.get(numArr[2]));
         }
         //0000
         if (numArr[3] != '0') {
           if ((numArr[0] == '0')&&(numArr[1]=='0')&&(numArr[2]=='0')) resArr = []; 
         resArr.push(N.get('1000'));
         resArr.push(N.get(numArr[3]));
         }     
         result = resArr.reverse().join(' ');       
       
    
         break;
       case 5: 
              //00    
         if (+(numArr[1]+numArr[0]) <=20) {       
            resArr.push(N.get(String(+(numArr[1]+numArr[0]))));
         } else {
             if (numArr[0] == '0') {
             resArr.push(N.get(String(numArr[1]*10))); 
             } else {
             resArr.push(N.get(numArr[0])); 
             resArr.push(N.get(String(numArr[1]*10)));          
             }     
         }
         //000
         if (numArr[2] != '0') {
           if ((numArr[0] == '0')&&(numArr[1]=='0')) resArr = []; 
         resArr.push(N.get('100'));
         resArr.push(N.get(numArr[2]));
         }
         //0000
         if (numArr[3] != '0') {
           if ((numArr[0] == '0')&&(numArr[1]=='0')&&(numArr[2]=='0')) resArr = []; 
         resArr.push(N.get('1000'));
         resArr.push(N.get(numArr[3]));
         } 
         //00000
         if ((numArr[0] == '0')&&(numArr[1]=='0')&&(numArr[2]=='0')&&(numArr[3]=='0')) resArr = [];  
         if (+(numArr[4]+numArr[3]) <=20) { 
            resArr.push(N.get('1000'));
            resArr.push(N.get(String(+(numArr[4]+numArr[3]))));
         } else {
             if (numArr[3] == '0') {
             resArr.push(N.get('1000'));
             resArr.push(N.get(String(numArr[4]*10))); 
             } else {
             resArr.push(N.get('1000'));
             resArr.push(N.get(numArr[3])); 
             resArr.push(N.get(String(numArr[4]*10)));          
             }     
         }   
         
         result = resArr.reverse().join(' ');      
         
        break;   
       case 6: 
       
        break;  
        
       case 7: 
       
        break;     
       
     }   
    
    return result;
    
    
    }