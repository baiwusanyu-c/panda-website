import './style.css'

export function Wave() {
  return <div className='w-full h-[150px] overflow-hidden pr left-0 top-0'>
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 -3.73517 24.47 3.735" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path
          d="M 0 -3 C 1 -4 1 -2 3.099 -2.804 Q 3.671 -3.046 4.384 -3.555 T 6.444 -3.135 T 8.76 -2.639 C 12.398 -4.865 12.016 -0.832 14.738 -2.944 C 16.01 -4.051 16.824 -1.443 19.559 -3.147 C 20.233 -3.644 22.052 -1.532 24.469 -3.109 V 0 H 0 Z"
          id="gentle-wave"/>
      </defs>
      <g className="parallax3">
        <use xlinkHref="#gentle-wave" x="0" y="0" fill="#EAF1F9" opacity='0.8'></use>
      </g>
      <g className="parallax2">
        <use xlinkHref="#gentle-wave" x="0" y="0.5" fill="#CCDDEE" opacity='0.8'></use>
      </g>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="0" y="1" fill="#0A4CDE"></use>
      </g>
    </svg>
  </div>
}
