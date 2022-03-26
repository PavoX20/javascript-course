// Copyright 2022 Juanjo Jaramillo <contact@juanjodev02.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function add (a, b) {
  const result = a + b;
  return result;
}

console.log(add(5, 1));

// arrow functions
const multiply = (a, b) => {
  return a * b;
}

console.log(multiply(1, 2));

// Say hello
const sayHello = () => {
  console.log('Hello world!');
}

sayHello();

// Callbacks
const sayHelloAfter5Seconds = () => {
  console.log('Hello world! x2');
}

const triggerHello = (callback) => {
  // SQL connection
  setTimeout(callback, 3000)
}

triggerHello(sayHelloAfter5Seconds)