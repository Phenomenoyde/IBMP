export const compareDates = (startDate, endDate, offsetDays = 0) => {
  const d1 = new Date(startDate);
  const d2 = new Date(endDate);

  if (!parseInt(offsetDays)) return d1 < d2;
  else {
    d1.setDate(d1.getDate() + Math.round(Math.max(offsetDays, 0)));
    return d1 < d2;
  }
};
export const currentDateTime = (offsetDays = 0) => {
  const dateTime = new Date();
  dateTime.setDate(dateTime.getDate() + Math.round(offsetDays));
  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString();

  return {
    date: date.split('/').reverse().join('-'),
    time: time.slice(0, time.lastIndexOf(':')),
  };
};

export const convertToMilliseconds = time => {
  const tArr = time.split(':');
  return tArr.reduce((acc, num, index) => {
    if (index > 1) return acc + num;
    return acc + num * Math.pow(60, tArr.length - index);
  }, 0);
};

export const withinReservationHours = (startTime, endTime, value) => {
  const t1 = convertToMilliseconds(startTime);
  const t2 = convertToMilliseconds(endTime);
  const v = convertToMilliseconds(value);

  return v >= t1 && v <= t2;
};

export const roundTime = (minutes, factor) => {
  const slots = 60 / factor;
  const [hh, mm] = minutes.split(':');

  const MM = (Math.round(mm / factor) * factor) % 60;
  if (MM > 0 || mm < 60 / slots / 2) return `${hh}:${(MM + '0').slice(0, 2)}`;
  else {
    return `${Math.min(Number(hh) + 1, 24)}:${MM}0`;
  }
};

export const normalizeAvailability = availableTimes =>
  availableTimes?.map((t, i) => ({
    id: i + 1,
    label: t,
    value: t,
  }));
