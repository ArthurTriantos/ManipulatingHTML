$('document').ready(() => {
    
    let btn = $('<button>Click Me!</button>');
    $('body').append(btn);
    btn.click(function () {
      alert('Hecky eah');
    });
    
    let textBtn = $('#textBtn');
    let textBox = $('#textBox');
    textBtn.click(function () {
      alert(textBox.val());
    });
    
    let hoverDiv = $('#hoverDiv');
    hoverDiv.css({
      height: '100px',
      width: '100px',
      border: '1px solid black',
    });
    hoverDiv.hover(
      function () {
        hoverDiv.css({
          backgroundColor: 'red',
        });
      },
      function () {
        hoverDiv.css({
          backgroundColor: 'white',
        });
      }
    );