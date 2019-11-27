const showSalary = (peoples, age) => {
    return peoples.filter(person => person.age <= age)
   .map(person => `${person.name}, ${person.balance}`).join('\n');
  }
