interface Props {
  search: string;
  setSearch: (v: string) => void;
  brand: string;
  setBrand: (v: string) => void;
}

export default function Filters({ search, setSearch, brand, setBrand }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="input"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
      </select>
    </div>
  );
}
