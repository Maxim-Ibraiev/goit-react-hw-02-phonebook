export default function ContactForm({ contacts, onChange, onSubmit }) {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}
