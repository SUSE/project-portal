import { CATEGORIES } from '@/db/projects'
export const Filter = () => {
  return <div className="flex flex-col gap-4">
    <p>Search project</p>
    <span>Filters:</span>
    <p className="text-xs">Categories <span className="text-xs text-gray-400">(allow multipple choises)</span></p>

    <div className="flex flex-col gap-2">
      {CATEGORIES.map(category => {
        return <span key={category} className="flex alig-top">
          <input className="self-start" type='checkbox' name={category} id={category} />
          <label className="capitalize ml-2" htmlFor={category}>{category}</label>
        </span>
      })}
    </div>
  </div>
}
