let chicago = {
  photo: 'images/chicago.jpg',
  title: 'Illy and Rowan',
  description: 'Photo of Illy and her toddler sister Rowan taken by Jana in 2018 at Navy Pier in Chicago.',
};
$('#chicago').attr('src', chicago.photo);

let ceska_kanada = {
  photo: 'images/ceska_kanada.jpg',
  title: 'Lejla in Czech Canada',
  description: 'Photo of Lejla taken during Easter 2019 by Illy on a family trip to Czech Canada, she is holding on to a large rock that looks like a face.',
};
$('#ceska_kanada').attr('src', ceska_kanada.photo);

let positive_creativity = {
  photo: 'images/positive_creativity.jpg',
  title: 'Positive Creativity',
  description: 'Photo of Illy standing in front of colorful graffiti which sais "positive creativity". Photo taken by Jana in Chicago in 2018.',
};
$('#positive_creativity').attr('src', positive_creativity.photo);

let slovensko = {
  photo: 'images/slovensko.jpg',
  title: 'Hiking in Slovakia',
  description: 'Photo of hikers standing on a hill in the fog. Photo from October 2017 taken on a hiking trip to Cerová vrchovina in Slovakia.',
};
$('#slovensko').attr('src', slovensko.photo);

let slovinsko = {
  photo: 'images/slovinsko.jpg',
  title: 'Family in Slovenian Alps',
  description: 'Mom, Illy and Naomi taking a selfie in Kranjska Gora, Slovenia, July 2018.',
};
$('#slovinsko').attr('src', slovinsko.photo);

let gallery = [chicago, ceska_kanada, positive_creativity, slovensko, slovinsko];

let currentPhoto = 0;
//$('#photo').attr('src', gallery[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', gallery[photoNumber].photo);
  $('#title').html(gallery[photoNumber].title);
  $('#description').html(gallery[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#rightArrow').click(() => {
  if (currentPhoto < (gallery.length - 1)) {
  currentPhoto++;
  loadPhoto(currentPhoto);
} else {
  currentPhoto = 0;
  loadPhoto(currentPhoto);
}
})

$('#leftArrow').click(() => {
  if (currentPhoto > 0) {
  currentPhoto--;
  loadPhoto(currentPhoto);
  } else {
    currentPhoto = gallery.length - 1;
    loadPhoto(currentPhoto);
  }
})
