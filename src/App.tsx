import React, { useState } from "react";

interface Appointment {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  manicure: boolean;
  pedicure: boolean;
  cejas: boolean;
  pestanas: boolean;
  manicuraSemipermanente: boolean;
  manicuraAcrilico: boolean;
  manicuraFrances: boolean;
  tinte: boolean;
}

const App = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [manicure, setManicure] = useState(false);
  const [pedicure, setPedicure] = useState(false);
  const [cejas, setCejas] = useState(false);
  const [pestanas, setPestanas] = useState(false);
  const [manicuraGel, setManicuraSemipermanente] = useState(false);
  const [manicuraAcrilico, setManicuraAcrilico] = useState(false);
  const [manicuraFrances, setManicuraFrances] = useState(false);
  const [tinte, setTinte] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      name,
      phone,
      date,
      time,
      service,
      manicure,
      pedicure,
      cejas,
      pestanas,
      manicuraSemipermanente,
      manicuraAcrilico,
      manicuraFrances,
      tinte,
    };
    setAppointments([...appointments, newAppointment]);
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setService("");
    setManicure(false);
    setPedicure(false);
    setCejas(false);
    setPestanas(false);
    setManicuraSemipermanente(false);
    setManicuraAcrilico(false);
    setManicuraFrances(false);
    setTinte(false);
  };

  const handleDelete = (id: number) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AGENDA CITAS ORIGEN</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre del cliente
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Fecha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Hora
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="service"
          >
            Servicio
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Seleccione un servicio</option>
            <option value="Cejas">Cejas</option>
            <option value="Pestañas">Pestañas</option>
            <option value="Manicura Semipermanente">
              Manicura semipermanente
            </option>
            <option value="Manicura en Acrilico">Manicura en Acrilico</option>
            <option value="Manicura Frances">Manicura Frances</option>
            <option value="Tinte">Tinte</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Servicios adicionales
          </label>
          <div className="flex justify-between">
            <div>
              <input
                className="mr-2"
                type="checkbox"
                checked={manicure}
                onChange={(e) => setManicure(e.target.checked)}
              />
              <label className="text-gray-700">Manicure</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="checkbox"
                checked={pedicure}
                onChange={(e) => setPedicure(e.target.checked)}
              />
              <label className="text-gray-700">Pedicure</label>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Agendar cita
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Citas agendadas</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="mb-4">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-bold">{appointment.name}</p>
                <p className="text-gray-700">{appointment.phone}</p>
                <p className="text-gray-700">
                  {appointment.date} {appointment.time}
                </p>
                <p className="text-gray-700">{appointment.service}</p>
                {appointment.manicure && (
                  <p className="text-gray-700">Manicure</p>
                )}
                {appointment.pedicure && (
                  <p className="text-gray-700">Pedicure</p>
                )}
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDelete(appointment.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
