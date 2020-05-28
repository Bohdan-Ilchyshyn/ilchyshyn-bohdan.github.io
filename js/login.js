function login () {
  const username = document.getElementById('inputUsername')
  const password = document.getElementById('inputPassword')

  const User = JSON.stringify({
    username: username.value,
    password: password.value
  })

  alert(User)

  const xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 200) {
        alert('Success\n' + 'Response Status is: ' + xmlHttp.response)
      } else {
        alert('Error \n' + 'Response: ' + xmlHttp.response)
      }
    }
  }
  xmlHttp.open('POST', 'https://plservice.herokuapp.com/auth/login/', false)
  xmlHttp.setRequestHeader('Content-Type', 'application/json')
  xmlHttp.send(User)
}
