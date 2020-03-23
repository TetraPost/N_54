const loadBtn = document.querySelector('.load');
const dataList = document.querySelector('.dataList');
const content = document.querySelector('.content');


async function geTData() {
  try {
    const send = await axios.post('getData');
    console.log(send.data.resp);
    const res = send.data.resp;
    let temp = '';
    for (let i = 0; i < res.length; i++) {
      temp += `<option value='${res[i].articleTitle}'>${[i]} - ${res[i].articleTitle}</option>`;
      /* dataList.onchange = () => {
        showContent(res[i].articleContent);
      } */
    }
    dataList.innerHTML = temp;
  } catch (error) {
    console.log(error);
  }
}

function showContent(data) {
  content.innerText = data;
}

loadBtn.onclick = () => {
  geTData();
};

/* document.addEventListener('DOMContentLoaded', () => {
  const datasend = document.querySelector('.list');
  geTData(datasend);
}); */
