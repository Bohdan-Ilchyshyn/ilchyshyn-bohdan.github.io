
getAlbums()
getArtist()
function getAlbums () {
  const h = new XMLHttpRequest()
  const url = 'https://plservice.herokuapp.com/api/albums/?format=json'

  h.onloadend = () => {
    albumsContent(JSON.parse(h.responseText))
  }
  h.open('GET', url, true)
  h.setRequestHeader('Content-Type', 'application/json')
  h.send(null)
}

function getArtist () {
  const h = new XMLHttpRequest()
  const url = 'https://plservice.herokuapp.com/api/artists/?format=json'

  h.onloadend = () => {
    artistsContent(JSON.parse(h.responseText))
  }
  h.open('GET', url, true)
  h.setRequestHeader('Content-Type', 'application/json')
  h.send(null)
}

function albumsContent (arr) {
  let out = ''
  let i
  for (i = 0; i < arr.length; i++) {
    out += '<div class=" responsive" id="c">' +
            '<div class="gallery">' +
            '<a href="./pl_detail.html">' +
            '<img src=' + arr[i].cover + ' alt="s1" width="600" height="400" id="i">' +
            '</a>' +
            '<div class="desc">' + arr[i].name + '\n' + '</div>' +
            '<div class="desc2">'+
            '</div>' +
            '</div>' +
            '</div>';
  }
  document.getElementById('test').innerHTML = out
}

function artistsContent (arr) {
  let out = ''
  let i
  for (i = 0; i < arr.length; i++) {
    out += '<div class=" responsive" id="c">' +
        '<div class="gallery">' +
        '<a href="./pl_detail.html">' +
        '<img src=' + arr[i].photo + ' alt="s1" width="600" height="400" id="i">' +
        '</a>' +
        '<div class="desc">' + arr[i].nick_name + '\n' + '</div>' +
        '<div class="desc2">' +
        '</div>' +
        '</div>' +
        '</div>'
  }
  document.getElementById('test2').innerHTML = out
}
