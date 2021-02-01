import faker from 'faker'



let names = '<div> Other things</div>'

for (let i = 0; i < 10; i++) {
  const name = faker.name.firstName(1)

  names += `<div>${name}</div>`
  
}

document.querySelector("#dev-other").innerHTML = names
