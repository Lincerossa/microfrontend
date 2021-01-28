import faker from 'faker'



let names = ''

for (let i = 0; i < 10; i++) {
  const name = faker.name.firstName(1)

  names += `<div>${name}</div>`
  
}

console.log(names)