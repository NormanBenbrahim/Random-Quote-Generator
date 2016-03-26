$(document).ready(function(){
  
  
  
  // when the button is clicked change quote
  $('#change-quote').on('click', function(){

    // pick a random color for the background
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // change the background color    
    $('body').css("background", randomColor);

    
    // get the quote data, store 36 this is the max they let you pull
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=36", function(a) {
      
      var n = a.length;      
      // get random index from the n available
      idx = Math.floor(Math.random() * (n-1));
      // insert the quote and author
      $('#quote-content').html(a[idx].content);
      $('#quote-title').html('-'+a[idx].title);
      
      //store the text and author in variables
      var text = a[idx].content;
      text = text.replace('/', '').split('<p>');
      text = text[1];
      var author = a[idx].title;
      var full_tweet = text + '-'+ author;
      
      //click on the twitter button
      $("#twitter").click(function(e) {
          
        var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(full_tweet);
          window.open(twtLink, '_blank');
      })
      
      //click on the tumblr button
      $('#tumblr').click(function(e) {
        
        
      });
    });     
  })
   
});

