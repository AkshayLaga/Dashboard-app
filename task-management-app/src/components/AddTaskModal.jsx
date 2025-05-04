import React, { useState } from "react";

const AddTaskModal = ({ onClose, onSubmit }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleSubmit = () => {
    if (!task.title) {
      alert("Title is required");
      return;
    }
    onSubmit(task);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "35%",
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <h3>Add New Task</h3>
      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        style={{ display: "block", width: "100%", marginBottom: "0.5rem" }}
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        rows={3}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <div style={{ textAlign: "right" }}>
        <button onClick={handleSubmit} style={{ marginRight: "0.5rem" }}>
          Add
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
