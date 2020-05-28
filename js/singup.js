function registration () {
  const username = document.getElementById('inputUsername')
  const email = document.getElementById('inputEmail')
  const password1 = document.getElementById('inputPassword1')
  const password2 = document.getElementById('inputPassword2')

  const newUser = JSON.stringify({
    username: username.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value
  })

  const xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 201) {
        alert('Success\n' + 'Response Status is: ' + xmlHttp.response)
      } else {
        alert('Error \n' + 'Response: ' + xmlHttp.response)
      }
    }
  }
  xmlHttp.open('POST', 'https://plservice.herokuapp.com/auth/registration/', false)
  xmlHttp.setRequestHeader('Content-Type', 'application/json')
  xmlHttp.send(newUser)
}
