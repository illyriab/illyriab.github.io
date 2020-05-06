let chicago = {
  photo: 'images/chicago.jpg',
  title: 'Illy and Rowan',
  description: 'Photo of Illy and her toddler sister Rowan taken by Jana in 2018 at Navy Pier in Chicago.',
};
$('#chicago').attr('src', chicago.photo);

let ceska_kanada = {
  photo: 'images/ceska_kanada.jpg',
  title: 'Lejla in Czech Kanada',
  description: 'Photo of Lejla taken during Easter 2019 by Illy on a family trip to Czech Kanada, she is holding onto a large rock that looks like a face.',
};
$('#ceska_kanada').attr('src', ceska_kanada.photo);

let positive_creativity = {
  photo: 'images/positive_creativity.jpg',
  title: 'Positive Creativity',
  description: 'Photo of Illy in standing in front of colorful graffiti which sais Positive creativity. Photo taken by Jana in Chicago 2018.',
};
$('#positive_creativity').attr('src', positive_creativity.photo);

let slovensko = {
  photo: 'images/slovensko.jpg',
  title: 'Hiking in Slovakia',
  description: 'Photo of hikers standing on a hill in the fog. Photo from October 2017 from a hiking trip to the Cerova Vrchovina in Slovakia.',
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
}

loadPhoto(currentPhoto);

$('#rightArrow').click(() => {
  if (currentPhoto < (gallery.length - 1)) {
  currentPhoto++;
  loadPhoto(currentPhoto);
  }
})

$('#leftArrow').click(() => {
  if (currentPhoto > 0) {
  currentPhoto--;
  loadPhoto(currentPhoto);
  }
})
