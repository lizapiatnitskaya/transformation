function accum(s) {
	s=s.split("");
  let result="";
  for(i=0;i<s.length;i++){
     result+=s[i].toUpperCase()+s[i].repeat(i).toLowerCase()+"-";
  }
  return result.slice(0,result.length-1);
}