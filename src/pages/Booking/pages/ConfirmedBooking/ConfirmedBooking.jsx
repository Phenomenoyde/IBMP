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

  return stage === 'Thank You So Much' ? (
    <Main>
      <section className="LL-BookingConfirmation">
        
        <Heading size="xl">CONFIRMED!</Heading>
        <p>
          BOOKING HAS BEEN CONFIRMED.
        </p>
      </section>

      <section id="LL-BookingDetails">
        <Table rows={[data]} columns={columns} />
      </section>
    </Main>
  ) : (
    <Navigate to="/bookings" />
  );
};
