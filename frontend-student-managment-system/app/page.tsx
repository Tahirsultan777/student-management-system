"use client";

import { useEffect, useState } from "react";
import { getStudents } from "../services/api";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

export default function Home() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Student Management System
        </h1>

        <StudentForm refresh={loadStudents} />

        <StudentList students={students} refresh={loadStudents} />

      </div>
    </div>
  );
}