// alert("call")

// restfull api
// url => backend
// method ==========
// get method => provide data
// post method => send data to backend
// delete method => delete data from database (backend);
// put / patch => update data
// =========

axios
  .get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
  .then(function (response) {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// post method
const requestData = {
  name: "Laptop",
  image: "",
};
function postCategory() {
  //   axios
  //     .post(
  //       "https://electronic-ecommerce.herokuapp.com/api/v1/category",
  //       requestData
  //     )
  //     .then((res) => {
  //       console.log("Success");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  axios({
    method: "post",
    url: "https://electronic-ecommerce.herokuapp.com/api/v1/category",
    data: requestData,
  })
    .then((res) => {
      console.log("Success");
    })
    .catch((err) => {
      console.log(err);
    });
}
const btn = document.getElementById("btn");
document.querySelector("#btn-del").addEventListener("click", deleteCategory);
btn.addEventListener("click", postCategory);

// delete method
function deleteCategory() {
  axios({
    method: "delete",
    url: "https://electronic-ecommerce.herokuapp.com/api/v1/category/61fd15037d05ae00231af60a",
  })
    .then((res) => {
      console.log("Success");
    })
    .catch((err) => {
      console.log(err);
    });
}



// put method
document.getElementById('btn-update').addEventListener('click',(id = '61fd02c2b4dfac0023075168') =>{
    axios({
        method: "put",
        url: `https://electronic-ecommerce.herokuapp.com/api/v1/category/61fd02c2b4dfac0023075168`,
        data:{
            name:"Tel 1 "
        },
        headers: {'X-Custom-Header': 'foobar'}
      })
        .then((res) => {
          console.log("Success");
        })
        .catch((err) => {
          console.log(err);
        });
})
