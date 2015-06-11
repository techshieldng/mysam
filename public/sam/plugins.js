import $ from 'jquery';
import stache from 'can/view/stache/';

$.fn.type = function(txt, speed = 100) {
  txt = txt || this.text();

  let txtLen = txt.length;
  let char = 0;

  this.text('');

  const type = () => {
    var humanize = Math.round(Math.random() * (speed - 20)) + 30;
    var timeOut = setTimeout(() => {
      this.text(txt.substring(0, ++char));
      type();

      if (char === txtLen) {
        clearTimeout(timeOut);
        this.trigger('type-end')
      }
    }, humanize);
  };

  type();
};

stache.registerHelper('type', function() {
  return function(el) {
    $(el).type();
  };
});

export default $;
