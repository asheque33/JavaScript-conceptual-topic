var numbers1 = [5, 10, 20, 40, 80, 160, 320, 640, 1280];
//todo console.log(numbers1[numbers1.length - 1]); last index element
//todo console.log(numbers1.indexOf(800)); find a specific element index.If it doesn't exist, then the index is -1
// ----------------------------------------------------------------
//
//* slice method(param1, param2)->(starting index element (included),(optional)ending index element(excluded))
//todo console.log(numbers1.slice(2, 5));
//todo console.log(numbers1.slice(2));//without ending param it returns from the starting index to the end of the array

// ----------------------------------------------------------------
//
//* splice method(start,(optional but recommended)deleteCount,_optional_add(num1,num2,num3... before deleted element)) returns deleted elements within an array
const splice3 = numbers1.splice(2); //todo-> specific index theke last porjonto element delete kore variable e store kora
const splice1 = numbers1.splice(0, 1, 1, 2, 4, 8); //todo-> element delete [kore] specific element er aage new elements add kora
const splice2 = numbers1.splice(0, 0, 1, 2, 4, 8); //todo-> element delete [naa] kore specific element er aage new elements add kora
console.log("splice1-->", splice1);
console.log("splice2-->", splice2);
console.log("splice3-->", splice3);
console.log("numbers-->", numbers1);
