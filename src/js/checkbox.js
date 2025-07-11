const form = async () => {
  const checkbox_form = document.querySelector('#accept');
  const form_lable_flex_checkbox = document.querySelector(
    '.form_lable_flex_checkbox'
  );
  if (!checkbox_form) return;
  checkbox_form.addEventListener('change', evt => {
    const target = evt.target;
    if (target.checked) {
      form_lable_flex_checkbox.classList.add('active');
    } else {
      form_lable_flex_checkbox.classList.remove('active');
    }
  });
  const file = document.querySelector('#file');
  const lable = document.querySelector('.file_inner_text');
  const form_basket = document.querySelector('.form_basket');
  const file_add = document.querySelector('.file_add');
  file.addEventListener('change', evt => {
    const target = evt.target.files[0];
    const sizeInKB = (target.size / 1024).toFixed(2);
    const type = target.name.split('.').pop().toLowerCase();
    let extension = target.name.split('.').shift().toLowerCase();
    if (extension.length > 13) {
      extension = `${extension.slice(0, 13)}...`;
    }
    lable.innerHTML = `${extension} (${type}, ${sizeInKB} KB)`;
    form_basket.classList.add('active');
    file_add.classList.add('active');
  });
  form_basket.addEventListener('click', () => {
    file.value = '';
    lable.innerHTML = '+ Wybierz dokument do dołączenia';
    form_basket.classList.remove('active');
    file_add.classList.remove('active');
  });
};
export default form;
