// function greet(name , callback){
//     console.log(`Hello , ${name}`);

//     callback()
// }

// function sayBye(){
//     console.log("GoodBye!")
// }

// greet("Suraj" , sayBye)

// console.log("Start");

// setTimeout(() => {
//   console.log("Callback after 2 seconds");
// }, 2000);

// console.log("End");


loginUser("alice", function (user) {
  getUserProfile(user.id, function (profile) {
    getUserPosts(profile.id, function (posts) {
      displayPosts(posts);
    });
  });
});


function handlePosts(posts) {
  displayPosts(posts);
}

function handleProfile(profile) {
  getUserPosts(profile.id, handlePosts);
}

function handleUser(user) {
  getUserProfile(user.id, handleProfile);
}

loginUser("alice", handleUser);