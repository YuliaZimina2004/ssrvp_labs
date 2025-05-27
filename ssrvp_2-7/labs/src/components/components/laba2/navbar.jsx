// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">1 стр. (лаб. 2 / лаб. 9)</Link>
      <Link to="/about">2 стр. (лаб. 2 / лаб. 9)</Link>
      <Link to="/labs">Лабораторные (лаб. 3 / лаб. 7)</Link>
      <Link to="/hooks">useState и useEffect (лаб. 4)</Link>
      <Link to="/counter">Счётчик (лаб. 4)</Link>
      <Link to="/feedback">Обратная связь (лаб. 5 / лаб. 8)</Link>
      <Link to="/feedbacks">Отзывы (лаб. 9 (RTK Query))</Link>
    </nav>
  );
}

export default Navbar;
