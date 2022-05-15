import Title from './Title';

export default function Wrapper({ title }) {
  return (
    <section className="flex">
      <Title title={title} />
    </section>
  );
}
