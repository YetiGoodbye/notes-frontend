const notesTree = [
  { // 0
    childrenIds: [1, 11],
  }, { // 1
    title: 'Компьютер',
    childrenIds: [2, 3],
  }, { // 2
    title: 'Программирование',
    childrenIds: [4, 5, 6],
  }, { // 3
    title: 'Администрирование',
    childrenIds: [7],
  }, { // 4
    title: 'JavaScript',
    childrenIds: [8, 9, 10],
    noteId: 1,
  }, { // 5
    title: 'VBA',
    noteId: 2,
  }, { // 6
    title: 'C/C++',
    noteId: 3,
  }, { // 7
    title: 'Windows',
    noteId: 4,
  }, { // 8
    title: 'Node JS',
    noteId: 5,
  }, { // 9
    title: 'Webpack',
    noteId: 6,
  }, { // 10
    title: 'React',
    noteId: 7,
  }, { // 11
    title: 'Рецепты',
    childrenIds: [12, 13, 14],
  }, { // 12
    title: 'Борщ',
    noteId: 8,
  }, { // 13
    title: 'Котлеты',
    childrenIds: [15, 16],
    noteId: 9,
  }, { // 14
    title: 'Плов',
    noteId: 10,
  }, { // 15
    title: 'По Киевски',
    noteId: 11,
  }, { // 16
    title: 'По Сибирски',
    noteId: 12,
  },
];

export default notesTree;
