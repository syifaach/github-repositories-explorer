import { AccordionProps } from './constants'

const Accordion = ({ id, header, body }: AccordionProps) => {
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