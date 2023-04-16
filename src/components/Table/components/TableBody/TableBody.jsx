export const TableBody = ({ className, id, children }) => {
  return (
    <tbody id={id} className={`RestTableBody ${className || ''}`}>
      {children}
    </tbody>
  );
};
