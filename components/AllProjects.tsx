import useStore from '@/store/main.store'
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react'
import { ProjectCard } from './Cards'
import { Filter } from './Filter'
import { MAX_ITEMS } from '@/utils/constants';

export const AllProjects = () => {
  const { projects, navPage } = useStore(state => state)

  // Pagination
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + MAX_ITEMS;

    setCurrentItems(projects.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(projects.length / MAX_ITEMS));

  }, [itemOffset, projects, navPage]);

  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * MAX_ITEMS) % projects.length;
    setItemOffset(newOffset);
  };

  return <div className="relative mx-auto w-full flex-grow bg-gray-100">
    <div className="relative mx-auto max-w-[1400px] w-full pt-10 ">
      <div className="flex flex-col bg-white mt-28 gap-4 p-8">
        <div className=' py-4'>
          <span className='text-3xl text-black font-medium'>All projects</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-6 pb-10">
          {/* Sidebar */}
          <Filter />

          {/* Project listeing  */}
          <div className="flex flex-col gap-10 md:w-10/12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {currentItems && currentItems
                .map(project => <ProjectCard key={String(project.name).toLocaleLowerCase()} {...project} />)
              }
            </div>

            <div className="flex self-center mt-10">
              {projects.length > MAX_ITEMS && <ReactPaginate
                breakLabel="..."
                className='flex gap-4 font-regular'
                activeClassName='bg-secondary-dark text-white px-2 rounded-sm'
                nextLabel="Next"
                onPageChange={handlePageClick}
                // pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Prev"
                marginPagesDisplayed={2}
                renderOnZeroPageCount={null}
                initialPage={navPage && 0}
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
}
