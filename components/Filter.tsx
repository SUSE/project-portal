import { useEffect, useState } from 'react'
import { PROJECTS, CATEGORIES } from '@/db/projects'
import useStore from '@/store/main.store'

export const Filter = () => {
  const { setProjects, setNavPages } = useStore(state => state)
  const [categoryFilter, setCategoryFilter] = useState<string[]>([])

  useEffect(() => {
    if (PROJECTS && categoryFilter.length) {
      const filtered = PROJECTS.map(ele => {
        return categoryFilter.includes(ele.tag) ? ele : undefined
      })

      setProjects(filtered.filter(ele => ele !== undefined))
    } else {
      setProjects(PROJECTS)
    }
  }, [categoryFilter, setProjects])

  const handleFilterCategories = (e: { target: { name: string; checked: boolean } }) => {
    // Check if the element it's already part of the array
    const isIncluded = categoryFilter?.includes(e.target.name)


    // Remove item if already present
    if (isIncluded) {
      setCategoryFilter([...categoryFilter.filter(ele => ele !== e.target.name)])
    } else {
      if (e.target.checked) setCategoryFilter([...categoryFilter, e.target.name])
    }

    // setNavPages()
  }

  const handleSearchFunction = (e: { target: { value: string } }) => {
    const result = PROJECTS.filter(ele => ele.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setProjects(result)
  }

  return <div className="flex flex-col gap-4">
    <input onChange={handleSearchFunction} className="border-b-2" type='text' name='search' id='' placeholder='Search' />

    <span className="text-xl text-secondary-light font-bold">Filters</span>
    <p className="text-xs">Categories <span className="text-xs text-gray-400">(allows multiple choice)</span></p>

    <div className="flex flex-col gap-2">
      {CATEGORIES
        .map((category, i) => {
          return <span key={i} className="flex content-start items-start gap-2">
            <input onChange={handleFilterCategories} className="self-center" type='checkbox' name={category} id={category} />
            <label className="capitalize font-medium" htmlFor={category}>{category}</label>
          </span>
        })}
    </div>
  </div>
}
