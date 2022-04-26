   // JS EXERCISES

        // 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        let x = "John";
        let y = "Doe";
        console.log(x + " <> " + y);

     // 22) Create an object with properties such name, surname, email
           const person = {
           name: "Osalumhese",
           surname: "Imanze",
           email: "imanze@strive.com",
         }; 

     // 23) Delete the email property from the previously created object
         delete person.email;

     // 24) Create an array with 10 strings in it
         let array = [];
         for (let i = 0; i < 10; i++) {
           array.push(i);
         }

     // 25) Print in the console every string from the previous array
           for (let i = 0; i < array.length; i++) {
           console.log(array[i]);
         }

     // 26) Create an array with 100 random numbers in it
       let numberArray = [];
     for (let i = 0; i < 100; i++) {
       numberArray.push(Math.floor(Math.random() * 100));
     }

     // 27) Write a function to get the maximum and minimum values from the previously created array
     const getMaxMin = function (numbers) {
     let max = numbers[0];
     let min = numbers[0];
     for (let i = 0; i < numbers.length - 1; i++) {
       if (numbers[i] > max) {
         max = numbers[i];
       }

       if (numbers[i] < min) {
         min = numbers[i];
       }
     }
     //  for (let i = 0; i < numbers.length - 1; i++) {
     //   max = numbers[i] > max ? numbers[i] : max;
     //   min = numbers[i] < min ? numbers[i] : min;
     // }
     return { max, min };
    };

     // 28) Create an array of arrays, in which every array has 10 random numbers
       let bigArrays = [];
       for (let i = 0; i < 10; i++) {
       let insideArray = [];
       for (let index = 0; index < 10; index++) {
         insideArray.push(Math.round(Math.random() * 10));
       }
       bigArrays.push(insideArray);
     }
     // 29) Create a function that gets 2 arrays as parameters and returns the longest one
     const returnLongest = function (array1, array2) {
     if (array1.length > array2.length) {
       return array1;
     } else {
           return array2;
     }
     // return array1.length >= array2.length ? array1 : array2;
     };

     // 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
     const returnHighestSum = function (array1, array2) {
     let sum1 = 0;

     for (let i = 0; i < array1.length; i++) {
       sum1 = sum1 + array1[i];
       //   sum1 += array1[i];
     }

     let sum2 = 0;

     for (let index = 0; index < array2.length; index++) {
       sum2 = sum2 + array2[index];
       //   sum2 += array2[index];
     }

     if (sum1 >= sum2) {
       return sum1;
     } else {
       return sum2;
     }
     // return sum1 >= sum2 ? sum1 : sum2;
   };
     // DOM EXERCISES

     // 31) Get the element with an id of "container" from the page
     const container = document.getElementById("container");

     // 32) Get every <td> element from the page
       const tds = document.querySelectorAll("td");

     // 33) Use a loop for printing the text inside of every <td> element in the page
     for (let index = 0; index < tds.length; index++) {
     tds[index].innerText = "text";
     }

     // 34) Write a function to change the heading of the page
     const changeHeader = function (content) {
     const h1 = document.querySelector("h1");
     h1.innerText = content;
     };
     changeHeader("new header");

     // 35) Write a function to add an extra row to the table
     const addExtraRow = function () {
     const tbody = document.querySelector("tbody");
     const tr = document.createElement("tr");
     for (let i = 0; i < 5; i++) {
       const td = document.createElement("td");
       td.innerText = i + 1;
       tr.appendChild(td);
     }
     tbody.appendChild(tr);
    };
    addExtraRow();

     // 36) Write a function to add a class of "test" to each row in the table
     const addClassToEachRow = function () {
     const trs = document.querySelectorAll("tr");
     for (let index = 0; index < trs.length; index++) {
       trs[index].classList.add("test");
     }
   };

     // 37) Write a function to add a red background to every link in the page
     const addRedBackground = function () {
     const linksTag = document.querySelectorAll("a");
     for (let i = 0; i < linksTag.length; i++) {
       linksTag[i].classList.add("bg-red");
     }
   };
   addRedBackground();

     // 38) Console log "Page loaded" when the page is correctly loaded
     window.onload = function () {
     console.log("Page loaded");
    };

     // 39) Write a function to add new items to a unordered list
     const addListItem = function () {
     const ul = document.querySelector("ul");
     const li = document.createElement("li");
     li.innerText = "new list item";
     ul.appendChild(li);
   };
    addListItem();

     // 40) Write a function to empty a list
     const emptyList = function () {
     const ul = document.querySelector("ul");
     ul.innerHTML = "";
    };
    emptyList();

     // EXTRA EXERCISES

     // 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
     const alertUrl = function () {
     const links = document.querySelectorAll("a");
     for (let m = 0; m < links.length; m++) {
       links[m].onmouseenter = function (e) {
         alert(e.target.href);
       };
     }
   };
   alertUrl();

     // 42) Create a button that will hide every image on the page when clicked
     const hideAllImages = function () {
        const btn = document.createElement("button");
        btn.innerText = "Hide All images";
        btn.onclick = function () {
          const imgs = document.querySelectorAll("img");
          imgs.forEach((img) => {
            img.classList.add("d-none");
          });
        };
        const body = document.querySelector("body");
        body.appendChild(btn);
      };
      hideAllImages();

     // 43) Create a button that will hide or show the table on the page when clicked
     const toggleTable = function () {
        const btn = document.createElement("button");
        btn.innerText = "Toggle table";
        btn.onclick = function () {
          const table = document.querySelector("table");
          table.classList.toggle("d-none");
        };

        const body = document.querySelector("body");
        body.appendChild(btn);
      };
      toggleTable();

     // 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
     const sumNumbers = function () {
        const tds = document.querySelectorAll("td");
        let sum = 0;
        tds.forEach((td) => {
          const toNumber = parseInt(td.innerText);
          const isNotNumber = isNaN(toNumber);
          if (!isNotNumber) {
            sum += toNumber;
          }
        });
        console.log(sum);
      };
      sumNumbers();

     // 45) Delete the last letter from the heading each time the user clicks on it
     const deleteLastCharacter = function () {
        const h1 = document.querySelector("h1");
        h1.onclick = function (e) {
          h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1);
        };
      };
      deleteLastCharacter();

     // 46) Change the background color of a <td> if the user clicks on it
     const changeTdBg = function () {
        const tds = document.querySelectorAll("td");
        tds.forEach((td) => {
          td.onclick = function (e) {
            e.target.classList.toggle("bg-red");
          };
        });
      };
      changeTdBg();

     // 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
     // 48) Add automatically a pink border to a cell when the mouse hovers it
     // 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
     // 50) Write a function to remove the last table from the page

     /* WHEN YOU ARE FINISHED
       Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
     */
   