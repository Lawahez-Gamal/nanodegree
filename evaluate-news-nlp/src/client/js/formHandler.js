function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.urlValidator(formText)){

      const text = formText;

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })

    fetch('http://localhost:8081/sentiment',{
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({text})
          
  })
  .then(res => res.json())
  .then(function(data) {
      console.log(data)
      document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
      document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity ${data.subjectivity}`;
      
  })
 }else{
     alert('could not fetch data ');
 }

}

export { handleSubmit }