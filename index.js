const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(contactForm)
  const entries = formData.entries()
  const data = Object.fromEntries(entries)
  console.log(data)

  contactForm.reset()
})