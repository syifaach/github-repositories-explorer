import { useEffect, useRef } from 'react'
import { AccordionProps } from './constants'

const Accordion = ({ id, header, body, onClick }: AccordionProps) => {
  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const collapseEl = collapseRef.current
    if (!collapseEl) return

    const handleShown = () => {
      console.log(`Accordion ${id} is now EXPANDED`)
      onClick?.(header)
    }

    collapseEl.addEventListener('shown.bs.collapse', handleShown)

    return () => {
      collapseEl.removeEventListener('shown.bs.collapse', handleShown)
    }
  }, [id])

  return (
    <>
      <div className='mb-2'>
        <div className='accordion-item'>
          <h2 id={`${id}`} className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#collapse${id}`}
              aria-expanded='true'
              aria-controls={`collapse${id}`}
            >
              {header}
            </button>
          </h2>

          <div
            ref={collapseRef}
            id={`collapse${id}`}
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>{body}</div>
          </div >
        </div >
      </div >
    </>
  )
}

export default Accordion