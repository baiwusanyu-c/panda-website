import './style.css'

export function Wave() {
  return <div className='w-full h-[150px] overflow-hidden pr left-0 top-0'>
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="-48 -5.51154 30 5.512" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path
          d="m-18 0C-20.3-1-22.3-4.7-23.5-4.6c-1.1-.1-2.1 1.7-2.7.2q-.8-1.7-1.8-.8c-1 .8-1.6 3.2-3 1.2q-1-1.6-2.2-.1c-1.8 1.8-1.5-.7-2.7.3q-.7.7-1.6-.2c-1.6-1.1-1.3 1.2-2.7-.2-1.8-1.8-1.5.4-2.7.9-1.6 1.1-2.6.1-5.1-1.8v5.1z"
          id="gentle-wave"/>
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="2" y="0" fill="#EAF1F9"></use>
        <use xlinkHref="#gentle-wave" x="1" y="0.5" fill="#CCDDEE"></use>
        <use xlinkHref="#gentle-wave" x="0" y="1" fill="#0A4CDE"></use>
      </g>
    </svg>
  </div>
}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-48 -5.51154 30 5.512">
  <path
    d="m-18 0C-20.3-1-22.3-4.7-23.5-4.6c-1.1-.1-2.1 1.7-2.7.2q-.8-1.7-1.8-.8c-1 .8-1.6 3.2-3 1.2q-1-1.6-2.2-.1c-1.8 1.8-1.5-.7-2.7.3q-.7.7-1.6-.2c-1.6-1.1-1.3 1.2-2.7-.2-1.8-1.8-1.5.4-2.7.9-1.6 1.1-2.6.1-5.1-1.8v5.1z"
    fill="#000000"/>
</svg>
