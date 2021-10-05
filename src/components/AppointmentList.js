import AppointmentInfo from "./AppointmentInfo";

const AppointmentList = ({ appointments }) => {
  return (
    <ul>
      {
        appointments.map(appointment => (
          <AppointmentInfo
            key={appointment.id}
            appointment={appointment}
          />
        ))
      }
    </ul>
  )
}

export default AppointmentList;