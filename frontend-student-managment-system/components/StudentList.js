"use client";

import { deleteStudent } from "../services/api";

export default function StudentList({ students, refresh }) {

  const removeStudent = async (id) => {
    await deleteStudent(id);
    refresh();
  };

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4 text-blue-400">
        Students
      </h2>

      <div className="space-y-3">

        {students.map((s) => (
          <div
            key={s.id}
            className="flex justify-between items-center border p-3 rounded-lg bg-black-50 "
          >

            <div>
              <p className="font-semibold text-green-600">{s.name}</p>
              <p className="text-sm text-gray-600">
                Age: {s.age} | Course: {s.course}
              </p>
            </div>

            <button
              onClick={() => removeStudent(s.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}