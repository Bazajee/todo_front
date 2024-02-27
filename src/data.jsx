

const taskLists = [
   {
      name: "course",
      id: 23,
      list: [
         { task_id: 1, state: true, body: "task 1", taskList_id: 23 },
         { task_id: 2, state: true, body: "task 2", taskList_id: 23 },
      ],
   },
   {
      name: "sport",
      id: 233,
      list: [
         { task_id: 4, state: true, body: "task 4", taskList_id: 232 },
         { task_id: 5, state: true, body: "task 5", taskList_id: 232 },
      ],
   },
   {
      name: "sortie",
      id: 223,
      list: [{ task_id: 3, state: true, body: "task 3", taskList_id: 223 }],
   },
];

const tasks = [
   { task_id: 3, state: true, body: "task 3", taskList_id: 223 },
   { task_id: 4, state: true, body: "task 4", taskList_id: 232 },
   { task_id: 5, state: true, body: "task 5", taskList_id: 232 },
   { task_id: 1, state: true, body: "task 1", taskList_id: 23 },
   { task_id: 2, state: true, body: "task 2", taskList_id: 23 },

]


export async function getTaskLists() {
   await new Promise((resolve) => setTimeout(resolve, 500));
   return taskLists
}

export async function getTasks() {
   await new Promise((resolve) => setTimeout(resolve, 500));
   return tasks
}
