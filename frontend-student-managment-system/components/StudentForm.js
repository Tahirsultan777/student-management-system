"use client";

import { useState } from "react";
import { addStudent } from "../services/api";

export default function StudentForm({ refresh }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addStudent({ name, age, course });

    setName("");
    setAge("");
    setCourse("");

    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
    >
      <input
        className="border p-2 rounded text-green-600"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="border p-2 rounded text-green-600"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <input
        className="border p-2 rounded text-green-600"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <button
        className="bg-blue-500 text-white rounded hover:bg-blue-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}