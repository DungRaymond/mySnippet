// 114
// 115
// 116
// 117
// 118
// 119

// gia tri cac bong = span[114] -> span[119]


let chonkyquay = document.getElementsByTagName('select')[1];
let doso = document.getElementsByClassName('choi_ngay')[13];
let ngayquay = document.getElementsByTagName('td')[0];
let kyquay = document.getElementsByTagName('a')[97];
let bongtron = document.getElementsByTagName('span');
let arr = [];
let lottloop = () => {
  for(let i = 969; i > 0; i--) {
    chonkyquay.options[i].selected = true;
    doso.click();
    let result = {
      date : ngayquay.innerHTML,
      term: kyquay.innerHTML,
      ketqua: [
        bongtron[114].innerHTML,
        bongtron[115].innerHTML,
        bongtron[116].innerHTML,
        bongtron[117].innerHTML,
        bongtron[118].innerHTML,
        bongtron[119].innerHTML
      ]
    };
  arr.push(result)
  setTimeout(() => {
    
  }, 500);

  }
}
