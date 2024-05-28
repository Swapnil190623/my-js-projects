/// Declaring Variables For Elements

let isStatus = document.querySelector("h5");

const add = document.querySelector("#add");

let next = document.querySelector("#next");

let check = 0;

let img = document.querySelector("img");

let Name = document.querySelector("h1");

////////////////////////////////////////////////

// Code For Follow-Unfollow

add.addEventListener("click", function () {
  if (check === 0) {
    isStatus.innerText = "Friends";
    isStatus.style.color = "green";
    add.innerText = "UnFollow";
    

    check = 1;
    
  } else {
    isStatus.innerText = "Strangers";
    isStatus.style.color = "red";

    add.innerText = "Follow";

    check = 0;
    
  }
});

/// all from here is for shuffeling The Accounts ...

next.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * account.length);
  img.src = account[randomIndex].image;
  Name.innerText = account[randomIndex].Username;

  
});

let account = [
  {
    image:
      "https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_1280.jpg",

    Username: "Allie Madson",

    
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/03/06/03/18/friends-7050708_1280.jpg",
    Username: "Flora Madson",
   
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/08/05/32/rice-1807547_1280.jpg",
    Username: "Eden Wood",
    
  },
];
