const API_URL = "http://127.0.0.1:5000";

export const getStudents = async () => {
  const res = await fetch(`${API_URL}/students`);
  return res.json();
};

export const addStudent = async (student) => {
  await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });
};

export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/students/${id}`, {
    method: "DELETE"
  });
};