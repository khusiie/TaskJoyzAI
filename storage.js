
export let tasks = JSON.parse(localStorage.getItem("tasks") || "[]")

export function createTask(title, priority = "Medium") {
  return {
    id: crypto.randomUUID(), // ✅ Fix: unique ID
    title,
    status: "todo",
    priority
  }
}

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
}
