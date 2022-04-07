const table = document.querySelector('.table')
const allCheckboxes = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
)
let lastChecked

allCheckboxes.forEach(function (checkbox, index) {
  addEventListener('click', function (evt, index) {
    console.log(index)
  })
})
