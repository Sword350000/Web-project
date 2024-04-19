// let buttonStart = document.querySelector(".btn");
// let SearchArea = document.querySelector('.MessageArea');
// buttonStart.addEventListener("click", function(){
//     let MessageDisplay = document.getElementById("search").value;
//     document.querySelector(".waitsearch").innerHTML = "loading...";
//     SearchArea.innerHTML = MessageDisplay;

//     if(SearchArea.value == ''){
//     document.querySelector(".waitsearch").innerHTML = "loading...";
//     SearchArea.innerHTML = MessageDisplay;
//     }

// });



var app = new Vue({
    el:'#app',
    data:{
        title: 'Title',
        SubmitValue: 'Submit',
        message:'',
        Searchstatus:'',
    },
    methods:{
        SearchStart: function(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
          this.Searchstatus = '',
        data.forEach(data => {
            let userList = document.querySelector('ul');
            let listItem = document.createElement('li');
            listItem.innerText = 'Name: ' + data.name;
            userList.appendChild(listItem);
          })
        })
        .then(
          this.Searchstatus = 'loading....',
        )
  .catch((error) => {
    console.log(error);
  });
},
    
}
})