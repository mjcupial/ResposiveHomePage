function getQuote() {
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
  $.getJSON(url, function(data) {
    if (data.quoteAuthor === '') {
      data.quoteAuthor = 'Unknown';
    }
    var txt = data.quoteText;
    var author = data.quoteAuthor;
    $("#quote").html(txt).hide().fadeIn(1000).delay(7800).fadeOut(1000);
    $("#author").html(author).hide().fadeIn(1000).delay(7800).fadeOut(1000);
  });
};
