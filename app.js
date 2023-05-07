const calculateBtn = document.getElementById('calculateBtn')
const weightInput = document.getElementById('weightInput')
const heightInput = document.getElementById('heightInput')
const result = document.getElementById('result')

calculateBtn.addEventListener('click', () => {
  const weight = Number(weightInput.value)
  const height = Number(heightInput.value) / 100
  const bmi = weight / (height * height)
  result.innerText = bmi.toFixed(2)
})
