document.getElementsByTagName("pre")[0].textContent.split("\n").reduce((acc, val)=>{ if(val[0]=="+") return +acc+ +val.substring(1); else return +acc- +val.substring(1); },0);
