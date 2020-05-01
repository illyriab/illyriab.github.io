console.log('JS is loaded');

let likes = 0;

//$('.likeCount').html(likes = likes + 1);


$('#likeButton').click(
  function likingFunction () {
      $('.likeCount').html(addOne => likes = likes + 1);
      if (likes === 15) {
      $('.nextMessage').append(`<p class='Shakespeare'> Thank you so much for all of the likes, I feel better already! You are the best of friends Illy ☺ </p>`)
      }
    }
);

//$('#likeButton').css('border: 1 px solid black;');
