const Food = ['Pizza', 'Hamburger', 'Coke'];
export default function Mat({ food }) {
  return (
    <ul>
      {Food.map((foods) => (
        <li key={foods}>{foods}</li>
      ))}
    </ul>
  );
}
