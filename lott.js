let arr = [];
function waitUI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 500);
  });
}
async function lottloop() {
  for(let i = 1; i < 969; i++) {
    let chonkyquay = document.getElementsByTagName('select')[1];
    let doso = document.getElementsByClassName('choi_ngay')[13];
    chonkyquay.options[i].selected = true;
    doso.click();
    const waitres = await waitUI();
    let ngayquay = document.getElementsByTagName('td')[0];
    let kyquay = document.getElementsByTagName('a')[97];
    let bongtron = document.getElementsByTagName('span');
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
    console.log(kyquay.innerHTML)
    arr.push(result)

  }
}
