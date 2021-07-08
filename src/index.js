document.addEventListener('DOMContentLoaded', () => {
    fetchDogs(), editDog()
})

function fetchDogs(){
    fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(json => renderDogs(json))
}

function renderDogs(data){
    data.forEach(renderDog)
}

function renderDog(data){
    table = document.querySelector('#table-body')
    let tr = document.createElement('tr')
    let name = document.createElement('td')
    let breed = document.createElement('td')
    let sex = document.createElement('td')
    let editBtn = document.createElement('button')  

    name.textContent = data.name
    breed.textContent = data.breed
    sex.textContent = data.sex
    editBtn.textContent = 'Edit Dog'

    tr.append(name, breed, sex, editBtn)
    table.append(tr)

    editBtn.addEventListener('click', () => {
        let dogForm = document.querySelector('#dog-form')
        dogForm['name'].value = data.name
        dogForm['breed'].value = data.breed
        dogForm['sex'].value = data.sex
    })
}

function editDog(){
    let dogForm = document.querySelector('#dog-form')
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.breed.value)
        console.log(e.target.sex.value)
    })
}