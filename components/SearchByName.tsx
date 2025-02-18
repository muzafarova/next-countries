export default function SearchByName({
  search,
  update,
}: {
  search: string;
  update: (search: string) => void;
}) {
  return (
    <input
      type="text"
      defaultValue={search}
      placeholder="Search by name"
      onChange={(e) => update(e.target.value)}
      className="field flex-1"
    />
  );
}
