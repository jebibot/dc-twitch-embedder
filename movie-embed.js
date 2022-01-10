upload_ing = true;
process_xhr();

window.addEventListener('message', e => {
  result_data = e.data;
  for (let i = 0; i < 6; i++) {
    if (e.data.thum_url_arr[i]) {
      $('.vdo_thumlist > ul').children().eq(i).children('a').html(`<img src="${e.data.thum_url_arr[i]}">`);
    }
  }
  $('.vdo_thumlist ul').children().first().click();
});
