import { v4 as uuidv4 } from 'uuid';

const itemsMock1 = [
  {
    cardId: uuidv4(),
    description: 'Nam aliquam sollicitudin lorem, et tempor magna dapibus.',
    tags: ['Frontend', 'Backend', 'Devops'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris ligula leo, cursus vitae enim non.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Quisque neque ligula, ullamcorper.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-06-19T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'Pellentesque fermentum, tortor sed lacinia.',
    tags: ['Backend'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Praesent vel leo risus. Integer erat tellus, elementum ut velit non.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'consectetur vehicula lorem.',
      },
    ],
    createdAt: '2021-05-11T19:39:33.863Z',
    lastUpdate: '2021-06-11T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'isDonec vel pulvinar ex, sit amet vehicula nisl.',
    tags: ['Frontend', 'Bug'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Quisque congue lacus nibh, quis sagittis ante blandit eu. Praesent rhoncus fermentum est.',
      },
    ],
    createdAt: '2021-05-11T19:39:33.863Z',
    lastUpdate: '2021-06-11T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'Vivamus venenatis leo vitae sapien tempus, eleifend.',
    tags: ['Backend', 'Bug'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Phasellus bibendum maximus nulla, faucibus',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-06-17T19:39:33.863Z',
  },
];

const itemsMock2 = [
  {
    cardId: uuidv4(),
    description: 'Duis elementum dictum nibh non hendrerit.',
    tags: ['Frontend', 'Backend'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Donec facilisis consectetur odio vitae porta.',
      },
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Donec non pulvinar tellus, id tincidunt mi.',
      },
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris consequat lectus quis.',
      },
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'In hac habitasse.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Nunc elementum dui eu nibh posuere, et mollis nulla tincidunt.',
      },
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Quisque congue lacus.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Mauris consequat lectus quis.',
      },
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Ut euismod felis eget quam vestibulum.',
      },
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris consequat lectus quis.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-06-19T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'Vivamus id nunc ut est condimentum molestie.',
    tags: ['Frontend', 'Devops'],
    tasks: [],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-06-19T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'Nunc blandit maximus accumsan.',
    tags: ['Frontend', 'Backend'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Morbi ut aliquet ante, in fermentum quam. Proin varius sodales magna a posuere.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-06-04T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'In posuere bibendum nulla iaculis gravida.',
    tags: ['QA'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris ligula leo, cursus vitae enim non.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Quisque neque ligula, ullamcorper.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-06-03T19:39:33.863Z',
  },
];

const itemsMock3 = [
  {
    cardId: uuidv4(),
    description: 'Etiam bibendum, nisi at vestibulum aliquam.',
    tags: ['QA', 'Backend'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris ligula leo, cursus vitae enim non.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Quisque neque ligula, ullamcorper.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-05-27T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'isDonec posuere interdum posuere.',
    tags: ['Backend'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris ligula leo, cursus vitae enim non.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Quisque neque ligula, ullamcorper.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-05-28T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'Nullam nunc magna, tristique ut varius eget.',
    tags: ['Frontend', 'Backend'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: false,
        task: 'Mauris ligula leo, cursus vitae enim non.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Quisque neque ligula, ullamcorper.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut.',
      },
    ],
    createdAt: '2021-05-19T19:39:33.863Z',
    lastUpdate: '2021-05-26T19:39:33.863Z',
  },
];

const itemsMock4 = [
  {
    cardId: uuidv4(),
    description: 'Cras magna eros, finibus suscipit.',
    tags: ['UX/UI', 'Business'],
    tasks: [
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Quisque neque ligula, ullamcorper.',
      },
      {
        taskId: uuidv4(),
        isDone: true,
        task: 'Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut.',
      },
    ],
    createdAt: '2021-05-09T19:39:33.863Z',
    lastUpdate: '2021-05-13T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'Duis dignissim eros at eleifend.',
    tags: ['UX/UI'],
    tasks: [],
    createdAt: '2021-05-15T19:39:33.863Z',
    lastUpdate: '2021-05-16T19:39:33.863Z',
  },
  {
    cardId: uuidv4(),
    description: 'pretium et elit.',
    tags: ['Frontend', 'Backend'],
    tasks: [],
    createdAt: '2021-05-14T19:39:33.863Z',
    lastUpdate: '2021-05-17T19:39:33.863Z',
  },
];

export const columnsMock = {
  backlog: {
    columnId: uuidv4(),
    name: 'Backlog',
    items: itemsMock1,
  },
  todo: {
    columnId: uuidv4(),
    name: 'To-do',
    items: itemsMock2,
  },
  doing: {
    columnId: uuidv4(),
    name: 'Doing',
    items: itemsMock3,
  },
  done: {
    columnId: uuidv4(),
    name: 'Done',
    items: itemsMock4,
  },
};
