document.getElementsByTagName("pre")[0].textContent.split(/\r?\n/).reduce((acc, val)=>{
  return +acc + +val;
},0);
