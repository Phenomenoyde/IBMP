import { memo } from 'react';
import { TableCell } from '../TableCell';

export const TableHeader = memo(({ data }) => {
  return (
    <tr className="RestTableSectionHead">
      {data.map(({ id, label, name, colSpan }) => (
        <TableCell tag="th" key={id ?? name} colSpan={colSpan}>
          {label}
        </TableCell>
      ))}
    </tr>
  );
});
