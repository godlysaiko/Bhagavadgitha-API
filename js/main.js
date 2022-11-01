function getData(){
  chapter = $("#chapters").val();
  verse = $("#sloka").val();

  fetch( `https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`)

    .then(response => {
      return response.text()
    })
    .then((data) => {

      console.log(JSON.parse(data));
      let output = JSON.parse(data);
      $(" p.san").html(output['slok']).addClass("output_style");
      $(" p.eng").html(output['siva']['et']).addClass("output_style");
    })
}
function mode(){
    var add,remove;
let button=document.getElementsByName("bt1")[0];
let currMode = button.value;
if(currMode==="dark mode") {
  add= "dark";
  remove = "light";
}
else {
 add= "light";
 remove="dark";
}

  let labels=document.getElementsByClassName(remove);

  for(let i=0;i<labels.length;i++){
    labels[i].classList.remove(remove);
    labels[i].classList.add(add);

  }
  button.value=remove+ " mode";

}



