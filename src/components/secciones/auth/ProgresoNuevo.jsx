import { useEffect, useState } from "react";
import { getProgreso } from "../../../data/api";


export default function ProgresoNuevo() {
  const [progreso, setProgreso] = useState(null);

  useEffect(() => {
    getProgreso().then((data) => setProgreso(data));
  }, []);

  if (!progreso) return <p>Cargando...</p>;

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h1>Mi Progreso Personal</h1>
      <p>Entrenamientos: {progreso.entrenamientosMes}/{progreso.objetivoMes}</p>
      <p>Tiempo total: {progreso.tiempoTotal}</p>
      <p>Mejor semana: {progreso.mejorSemana}</p>
      <p>Logros: {progreso.logros.join(", ")}</p>
    </div>
  );
}
