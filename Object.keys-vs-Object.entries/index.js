// ! Object.keys()

// * English: The Object.keys() method in JavaScript returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. It's useful when you want to loop through the keys of an object.
// * Use Case:

// * Use Object.keys() when you need to iterate over the keys of an object, for instance, to dynamically display object properties in a UI.
// Example:
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object1));

// ! Object.entries()

// * English: The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is useful when you want to loop through the keys and values of an object.

// * Use Case:

// * Use Object.entries() when you need both the keys and values of an object, for example, when generating tables or forms dynamically.
// * Example:
const object2 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.entries(object2));
// expected output: Array [["a", "somestring"], ["b", 42], ["c", false]]
// **  Bangla: Object.entries() মেথড একটি দেওয়া অবজেক্টের নিজস্ব গণনায়নযোগ্য স্ট্রিং-কীয়েড সম্পত্তির [কী, মান] জোড়ার একটি অ্যারে ফেরত দেয়। যখন আপনি একটি অবজেক্টের কী এবং মানগুলির মধ্যে লুপ চালাতে চান তখন এটি উপযুক্ত।

// ** In React.js or Next.js, these methods can be used to iterate over state objects or props, especially when you don't know the exact keys but want to perform operations on all keys/values.
