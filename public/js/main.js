const form = document.forms.formTest;
const btn = document.querySelector('.specialBtn');
const respTxt = document.querySelector('.resttext');
const articleAddedTxt = document.querySelector('.articleAddedTxt');
const articleTitleError = document.querySelector('.articleTitleError');
const articleContentError = document.querySelector('.articleContentError');

async function loadData(data) {
  try {
    const response = await axios.post('postData', data);
    const dataRes = response.data;
    if (dataRes.response) {
      // значения инпутов
      form.articleTitle.value = '';
      form.articleContent.value = '';
      // значения ошибок
      articleTitleError.innerText = '';
      articleContentError.innerText = '';
      articleAddedTxt.innerText = dataRes.returnTitle;
    } else {
      articleAddedTxt.innerText = '';
      if (dataRes.statusValidate.errmess.fields.articleTitle) {
        articleTitleError.innerText = dataRes.statusValidate.errmess.fields.articleTitle;
      } else {
        articleTitleError.innerText = '';
      }
      if (dataRes.statusValidate.errmess.fields.articleContent) {
        articleContentError.innerText = dataRes.statusValidate.errmess.fields.articleContent;
      } else {
        articleContentError.innerText = '';
      }
    }
    respTxt.innerText = dataRes.response;
    btn.classList.remove('disabled');
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btn.classList.add('disabled');
  const data = new FormData(form);
  loadData(data);
});
