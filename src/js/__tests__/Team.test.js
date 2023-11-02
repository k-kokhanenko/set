import Team from '../Team';

test('Team 1', () => {
  const team = new Team();
  team.add('superman');
  expect(() => team.add('superman')).toThrow('Персонаж уже добавлен в команду.');
});

test('Team 2', () => {
  const team = new Team();
  team.addAll('1', '2');
  const result = team.toArray();

  const correct = ['1', '2'];

  expect(result).toEqual(correct);
});

test('Team 3', () => {
  const team = new Team();
  team.add('1');
  team.add('2');
  const result = team.toArray();

  const correct = ['1', '2'];
  expect(result).toEqual(correct);
});
