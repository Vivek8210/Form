let Alldata = JSON.parse(localStorage.getItem("alldata")) || [];
console.log(Alldata);

function display(Alldata) {
  document.querySelector("#tbody").innerText = null;

  Alldata.map(function (ele, index) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = ele.name;
    col1.setAttribute("id", "name");
    let col2 = document.createElement("td");
    col2.innerText = ele.email;
    let col3 = document.createElement("td");
    col3.innerText = ele.number;
    let colAge = document.createElement("td");
    colAge.innerText = ele.age;
    let col4 = document.createElement("td");
    col4.innerText = ele.date;

    let col6 = document.createElement("td");
    col6.innerText = ele.category;

    let col7 = document.createElement("td");
    col7.innerText = ele.gender;
    let col8 = document.createElement("td");
    col8.innerText = ele.status;
    let col9 = document.createElement("td");

    col9.innerText = "delete";
    col9.setAttribute("id", "delete");
    col9.addEventListener("click",()=>{
        Alldata.splice(index,1)
        localStorage.setItem("alldata",JSON.stringify(Alldata))
        display(Alldata)
    })
    let col10 = document.createElement("td");
    col10.innerText = "Update";
    col10.setAttribute("id", "edit");
    col10.addEventListener("click", () => {
      window.location.href = "./edit.html";

      let p = (document.getElementById("name").value = console.log("ppp"));
    });

    row.append(col1, col2, col3, colAge, col4, col6, col7, col8, col9, col10);

    document.querySelector("#tbody").append(row);
  });
}

display(Alldata);


// filter by age.......
document.getElementById("filter").addEventListener("change",function(){
  let value=document.getElementById("filter").value
  
  if(value==="all"){
      display(Alldata)
  }else if(value == "lowTOHigh"){
   console.log(Alldata)
      Alldata.sort((a,b)=> a.age- b.age)
      display(Alldata)
  }
  else{
      Alldata.sort((a,b)=> b.age- a.age) 
      console.log(Alldata)
      display(Alldata)
  }
})
