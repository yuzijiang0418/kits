

var kits = {};

// 1.求n-m的和
kits.dispatchZero = function (n,m) {
  var num = 0;
  for(let i = n;i <= m;i++){
     num = num + i;
  }
  return num;
}

// 2.获取当前的北京时间 

// 把方法都放到对象的身上
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

// 3.获取随机整数
kits.randomInt = function(n,m){
  return Math.floor(Math.random() * (m-n+1) + n);
}



// 4.常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function(){
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();// 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000,999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}

// 5. 获取随机颜色
kits.randomColor = function(){
  //获取n-m之间的随机整数
function random(n,m){
return Math.floor(Math.random() * (m - n + 1) + n);
}
var a = random(0,255);
var b = random(0,255);
var c = random(0,255);
return 'rgb('+ a + ',' + b + ',' + c + ')';
}

// 6. 关于本地存储:获取数据/存储数据/修改数据
//存储数据
kits.saveLocalDataArray = function(key,arr){
  //1.把arr转成json格式的字符串
  let jsonStr = JSON.stringify(arr);
  //2.存储本地
  localStorage.setItem(key,jsonStr);
}


//获取数据
kits.getLocalDataArray = function(key){
  let jsonStr = localStorage.getItem(key);
  let arr = JSON.parse(jsonStr);
  arr = arr || [];
  return arr;
}


//根据id修改数据
kits.modifyLocalDataById = function(key ,id,data){
  //1.先把本地的数据取出来
  let arr = this.getLocalDataArray(key);
  //6.假设一个返回值是false，表明没有修改成功
  let flag = false;
  //2.遍历数组arr
  arr.forEach((e,i) => {
    //3.判断每一项的id是否和我们传入的id一致
    if (e.id == id){
      //4.找到这项数据进行修改
      arr[i] = data;
      flag = true;
    }
  });
  //5.存储修改后的数据
  this.saveLocalDataArray(key,arr);
  return flag;
}