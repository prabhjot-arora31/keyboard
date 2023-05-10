var str = "";
var btn = document.getElementsByClassName("btn");
var TA = document.getElementById("TA");
for (const ele of btn) {
  ele.addEventListener("click", () => {
    if (ele.innerText === "CANCEL") {
      str = "";
      TA.innerHTML = "";
    } else if (ele.innerText == "SPACE") {
      str = str + " ";
      TA.innerHTML = TA.innerText + "<h4> </h4>";
    }
    //  else if (ele.innerText == "BACKSPACE") {
    //   str = str - str[-1];
    //   TA.innerHTML = TA.innerHTML - TA.innerHTML[-1];
    // }
    else {
      TA.innerText == "";
      //   str = "";
      str = str + ele.innerText;
      TA.innerHTML = "<h4>" + str + "</h4>";
      TA.style.color = "black";
    }
  });
}
