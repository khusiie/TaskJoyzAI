// render.js
import { tasks, saveTasks } from './storage.js'

export function render() {
  document.querySelectorAll(".dropzone").forEach(zone => zone.innerHTML = "")

  const priorityOrder = { High: 1, Medium: 2, Low: 3 }

  tasks.forEach(task => {
    const div = document.createElement("div")
    div.className = "task"
    div.textContent = `${task.title} (${task.priority})`
    div.draggable = true
    div.dataset.id = task.id
    div.dataset.status = task.status

    // Delete button
    const btn = document.createElement("button")
    btn.textContent = "x"
    btn.onclick = () => {
      const idx = tasks.findIndex(t => t.id === task.id)
      if (idx !== -1) {
        tasks.splice(idx, 1)
        saveTasks()
        render()
      }
    }
    div.appendChild(btn)

    document.getElementById(task.status).appendChild(div)
  })

  // ✅ Reorder inside each column by priority
  document.querySelectorAll(".dropzone").forEach(zone => {
    const children = Array.from(zone.children)
    children.sort((a, b) => {
      const taskA = tasks.find(t => t.id === a.dataset.id)
      const taskB = tasks.find(t => t.id === b.dataset.id)
      return priorityOrder[taskA.priority] - priorityOrder[taskB.priority]
    })
    children.forEach(c => zone.appendChild(c))
  })
}
