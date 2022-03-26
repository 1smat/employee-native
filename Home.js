let add = document.getElementById('add')
let edit = document.getElementById('edit')
let all = document.getElementById('all')
let app = document.getElementById('app')
let datas = []
let data = {}
add.addEventListener('click', Add)
all.addEventListener('click', allEmpolees)

function allEmpolees() {
  app.innerHTML = `

  `

  let table = document.createElement('table')
  let allData = JSON.parse(localStorage.getItem('data'))
  let tr = document.createElement('tr')
  // console.log(allData)

  for (index in allData) {
    console.log(allData)
    if (index == '0') {
      console.log(0)
      for (key in allData[index]) {
        let td = document.createElement('td')

        // td.innerText = allData[index][key]
        td.innerText = key

        tr.append(td)
        table.append(td)
        app.append(table)

        let td2 = document.createElement('td')

        td2.innerText = allData[index][key]
        // td.innerText = key

        tr.append(td2)
        table.append(tr)
        app.append(table)
      }
    } else {
      for (key in allData[index]) {
        let td = document.createElement('td')

        td.innerText = allData[index][key]
        // td.innerText = key

        tr.append(td)
        table.append(td)
        app.append(table)
      }
    }
  }
}

function All(old) {
  app.innerHTML = `

  `
  let employees = localStorage.getItem('data')
  let table = document.createElement('table')
  let tr = document.createElement('tr')
  console.log(old)

  for (key in employees) {
    let td = document.createElement('td')
    td.innerText = key
    table.append(td)
  }
  app.append(table)

  app.append(tr)

  // for (key in old) {
  //   let td = document.createElement('td')
  //   td.innerText = old[key]
  //   tr.append(td)
  // }
  // table.append(tr)

  for (key in employees) {
    let td = document.createElement('td')
    td.innerText = employees[key]
    tr.append(td)
  }
  table.append(tr)
}
function Add() {
  app.innerHTML = `
  <form>
  <div>
    <h1>Add new employee</h1>
    <br />
    <label for="fname">Firstname: </label>
    <br />
    <input type="text" name="fname  " id="fname" />
    <br />
    <label for="lname">Lastname: </label>
    <br />
    <input type="text" name="lname  " id="lname" />
    <br />
    <label for="department">Department: </label>
    <br />
    <select name="department" id="department">
      <option value="accounting">Accounting</option>
      <option value="it">I&T</option>
      <option value="marketing">Marketing</option></select
    ><br />
    <label for="position">Position: </label><br />
    <input type="text" id="position" name="position" />
    <br />
    <br />
  </div>
  <div>
    <br />
    <br />
    <br />
    <label for="gender">Gender</label>
    <br />
    <br />
    <input type="radio" name="gender" value="male" /> Male
    <input type="radio" name="gender" value="female" /> Female
    <br />
    <br />
    <label for="bdate">Choose your birth day</label>
    <br />
    <br />
    <input type="date" name="bdate" id="bdate" />
    <br />
    <br />
    <button id="submit" type="button">Submit</button>
  </div>
</form>
  `
  document.getElementById('submit').addEventListener('click', Submit)

  function Submit() {
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let department = document.getElementById('department').value
    let position = document.getElementById('position').value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let birthDate = document.getElementById('bdate').value
    data = {
      firstName,
      lastName,
      department,
      position,
      gender,
      birthDate,
    }

    console.log(data)
    if (localStorage.getItem('data')) {
      datas = JSON.parse(localStorage.getItem('data'))
    }
    datas.push(data)

    localStorage.setItem('data', JSON.stringify(datas))
    console.log(datas)
    let newData = localStorage.getItem('data')
    console.log(newData)

    All(newData)
  }
}

function Edit() {}
