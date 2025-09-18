// dragdrop.js
import { tasks, saveTasks } from './storage.js'
import { render } from './render.js'

export function initDragDrop() {
  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault())

    zone.addEventListener("drop", e => {
      e.preventDefault()
      const id = e.dataTransfer.getData("text/plain")
      const task = tasks.find(t => t.id === id)

      if (!task) return // ✅ Fix missing task bug
      task.status = zone.id
      saveTasks()
      render()
    })
  })

  document.addEventListener("dragstart", e => {
    if (e.target.classList.contains("task")) {
      e.target.classList.add("dragging")
      e.dataTransfer.setData("text/plain", e.target.dataset.id)
    }
  })

  document.addEventListener("dragend", e => {
    if (e.target.classList.contains("task")) {
      e.target.classList.remove("dragging")
    }
  })
}
