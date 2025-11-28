$(document).ready(function() {
  let input = $('input[type="text"]');

  
  $('.gri div').not('.in').click(function() {
    let btn = $(this).text();

    if (btn === 'AC') {
      input.val('');
    } else if (btn === 'X') {
     
      let val = input.val();
      input.val(val.slice(0, -1));
    } else if (btn === '=') {
      try {
        let expression = input.val().replace(/X/g, '*');
        let result = eval(expression);
        input.val(result);
      } catch (e) {
        input.val('Error');
      }
    } else {
     
      input.val(input.val() + btn);
    }
  });

  $(document).keydown(function(e) {
    const key = e.key;
    let val = input.val();

   
    if (
      (key >= '0' && key <= '9') ||
      key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '.' 
    ) {
      input.val(val + key);
    } else if (key === 'Backspace') {
      input.val(val.slice(0, -1));
    } else if (key === 'Enter') {
      try {
        let expression = input.val().replace(/X/g, '*');
        let result = eval(expression);
        input.val(result);
      } catch (e) {
        input.val('Error');
      }
    } else if (key.toLowerCase() === 'c') {
     
      input.val('');
    }

   
    if (
      (key >= '0' && key <= '9') ||
      ['+', '-', '*', '/', '%', '.', 'Backspace', 'Enter', 'c', 'C'].includes(key)
    ) {
      e.preventDefault();
    }
  });
});
