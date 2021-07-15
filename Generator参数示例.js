  // 生成器函数参数
  function* gen(arg) {
      console.log(arg); //生成器参数.html:24 AAAAA
      let one = yield 111;
      console.log(one); //生成器参数.html:26 BBBBB
      let two = yield 222;
      console.log(two); //生成器参数.html:28 CCCCC
      let three = yield 333;
      console.log(three); //生成器参数.html:30 DDDDD
  }

  // 执行获取迭代器对象
  let iterator = gen('AAAAA');
  console.log(iterator.next()); //{value: 111, done: false} 

  //next 方法可以传入参数
  console.log(iterator.next('BBBBB')); //{value: 222, done: false}
  console.log(iterator.next('CCCCC')); //{value: 333, done: false}
  console.log(iterator.next('DDDDD')); //{value: undefined, done: true}

  /* 
  AAAAA 
  { value: 111, done: false }
  BBBBB 
  { value: 222, done: false }
  CCCCC 
  { value: 333, done: false }
  DDDDD 
  { value: undefined, done: true } 
  */