import { useOutletContext, Navigate } from 'react-router-dom';
import { Heading, Main, Table } from '../../../../components';
import './ConfirmedBooking.css';

export const ConfirmedBooking = () => {
  const { data, stage } = useOutletContext() ?? { data: {}, stage: '' };

  const columns = Object.entries(data).map(([key, val], i) => ({
    id: i + 1,
    name: key,
    label: key.toUpperCase(),
  }));

  return stage === 'Gracias' ? (
    <Main>
      <section className="RestBookingConfirmation">
        
        <Heading size="xl">CONFIRMADA!</Heading>
        <p>
          SU MESA HA SIDO RESERVADA.
        </p>
      </section>

      <section id="RestBookingDetails">
        <Table rows={[data]} columns={columns} />
      </section>
    </Main>
  ) : (
    <Navigate to="/bookings" />
  );
};
