export const filterByRole = (people, role) => {
  return people.filter((person) => person.role === role);
};

export const filterBySkill = (people, skill) => {
  return people.filter((person) => person.skills.includes(skill));
};
