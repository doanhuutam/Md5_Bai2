function fibonaci(a: any, b: any, count: number){
  if (count>10){
    return;
  }else {
    console.log(a);
    fibonaci(b,a+b,++count);
  }
}
fibonaci(1,1,0);
