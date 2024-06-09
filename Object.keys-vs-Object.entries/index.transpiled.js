export const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 28,
};

function UserDetails() {
  return (
    <ul>
      {Object.keys(user).map((key) => (
        <li key={key}>
          {key}: {user[key]}
        </li>
      ))}
    </ul>
  );
}
