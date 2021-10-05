import { useState } from 'react';
import { BiArchive } from 'react-icons/bi'
import AddAppointment from './components/AddAppointment';
import AppointmentList from './components/AppointmentList';
import Search from './components/Search';


function App() {
  const [appointments, setAppointments] = useState([]);
  const [appointmentId, setAppointmentId] = useState(0);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-5"><BiArchive className="inline-block text-red-400 align-top" /> Your Appointments</h1>
      <AddAppointment
        appointments={appointments}
        setAppointments={setAppointments}
        appointmentId={appointmentId}
        setAppointmentId={setAppointmentId}
      />
      <Search />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
