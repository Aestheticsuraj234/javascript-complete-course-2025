// //* ASYNC / AWAIT

// fetch("https://api.github.com/users/aestheticsuraj234", {
//   method: "GET",
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

async function FetchGithubData(username) {
  try {
    const res = await fetch(`https://api.github.com/user/${username}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("This is my finally");
  }
}

console.log("Hello");
FetchGithubData("aestheticsuraj234");
console.log("World");
