const contactForm = document.getElementById('contact-form')
const myModal = new bootstrap.Modal(document.getElementById('myModal'))

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(contactForm)
  const entries = formData.entries()
  const data = Object.fromEntries(entries)

  fetch('https://birding-site-contact-server.onrender.com/', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(result => {
      console.log(result)
      myModal.show()
      })
    .catch(error => console.log('error', error));

  contactForm.reset()
})