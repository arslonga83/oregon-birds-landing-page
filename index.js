const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('click')
  const formData = new FormData(contactForm)
  const entries = formData.entries()
  const data = Object.fromEntries(entries)
  console.log(JSON.stringify(data))

  fetch('http://127.0.0.1:3000', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})