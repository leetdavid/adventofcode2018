document.getElementsByTagName("pre")[0].textContent.split("\n").reduce((acc, val)=>{
  return +acc + +val;
},0);
