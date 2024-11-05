import React from 'react'

const Console = () => {
  const svgToBase64 = (svgElement: Node) => {
    const svgString = new XMLSerializer().serializeToString(svgElement)
    const base64String = btoa(
      encodeURIComponent(svgString).replace(/%([0-9A-F]{2})/g, (_, p1) =>
        String.fromCharCode(parseInt(p1, 16))
      )
    )
    return `data:image/svg+xml;base64,${base64String}`
  }
  React.useEffect(() => {
    console.info(
      '%c actify',
      `
        font-size: 64px;
        color: #0000;
        background-size: contain;
        background-position: left center;
        background-repeat: no-repeat;
        background-image: url(${svgToBase64(document.querySelector('svg.animated')!)});
      `
    )
  }, [])
  return (
    <div className="fixed">
      <svg
        fill="none"
        viewBox="0 0 132 31"
        xmlns="http://www.w3.org/2000/svg"
        className="animated w-[50vmin] opacity-0 transition-opacity duration-500"
      >
        <defs>
          <style>
            {`
          @keyframes slide {
            25%,
            to {
              translate: 0-29px;
            }
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            35%,
            to {
              opacity: 1;
            }
          }
          @keyframes fade-out {
            0% {
              opacity: 1;
            }
            15%,
            to {
              filter: blur(1px);
              opacity: 0;
            }
          }
          .letter path {
            fill: #000;
          }
          @media (prefers-color-scheme: dark) {
            .letter path {
              fill: #fff;
            }
          }
          .letter {
            --duration: 2.2s;
            --delay: calc(
              (
                sin((var(--index) / var(--total)) * 90deg) *
                  (var(--duration) * 0.25)
              )
            );
            transform-origin: 50% 50%;
            transform-box: fill-box;
            animation: slide var(--duration) var(--delay) infinite ease;
          }
          .letter path:last-of-type {
            transform-origin: 50% 50%;
            translate: 0 29px;
            transform-box: fill-box;
            animation: fade-in var(--duration) var(--delay) both infinite ease;
          }
          .letter path:first-of-type {
            transform-origin: 50% 100%;
            transform-box: fill-box;
            animation: fade-out var(--duration) var(--delay) both infinite ease;
          }`}
          </style>
        </defs>
        <g style={{ '--total': 6 } as React.CSSProperties}>
          <g className="letter" style={{ '--index': 0 } as React.CSSProperties}>
            <path
              d="M21.172,0H17.094L15.078-5.7H6.266L4.328,0H.266L8.656-22.406h4.188ZM14.094-8.734l-3.109-8.937a10.586,10.586,0,0,1-.3-1.406h-.062a9.146,9.146,0,0,1-.312,1.406L7.234-8.734Z"
              transform="translate(-0.266 22.406)"
            />
            <path
              d="M21.172,0H17.094L15.078-5.7H6.266L4.328,0H.266L8.656-22.406h4.188ZM14.094-8.734l-3.109-8.937a10.586,10.586,0,0,1-.3-1.406h-.062a9.146,9.146,0,0,1-.312,1.406L7.234-8.734Z"
              transform="translate(-0.266 22.406)"
            />
          </g>
          <g className="letter" style={{ '--index': 1 } as React.CSSProperties}>
            <path
              d="M13.813-.734A8.94,8.94,0,0,1,9.266.375a7.7,7.7,0,0,1-5.75-2.227A7.887,7.887,0,0,1,1.328-7.625,8.681,8.681,0,0,1,3.68-13.977a8.407,8.407,0,0,1,6.289-2.4,9.18,9.18,0,0,1,3.859.766v3.375a5.845,5.845,0,0,0-3.562-1.25A4.951,4.951,0,0,0,6.5-11.93a5.685,5.685,0,0,0-1.469,4.07A5.42,5.42,0,0,0,6.414-3.937,4.91,4.91,0,0,0,10.125-2.5a5.8,5.8,0,0,0,3.688-1.391Z"
              transform="translate(23.328 20.375)"
            />
            <path
              d="M13.813-.734A8.94,8.94,0,0,1,9.266.375a7.7,7.7,0,0,1-5.75-2.227A7.887,7.887,0,0,1,1.328-7.625,8.681,8.681,0,0,1,3.68-13.977a8.407,8.407,0,0,1,6.289-2.4,9.18,9.18,0,0,1,3.859.766v3.375a5.845,5.845,0,0,0-3.562-1.25A4.951,4.951,0,0,0,6.5-11.93a5.685,5.685,0,0,0-1.469,4.07A5.42,5.42,0,0,0,6.414-3.937,4.91,4.91,0,0,0,10.125-2.5a5.8,5.8,0,0,0,3.688-1.391Z"
              transform="translate(23.328 20.375)"
            />
          </g>
          <g className="letter" style={{ '--index': 2 } as React.CSSProperties}>
            <path
              d="M10.8-.172A6.282,6.282,0,0,1,8,.359q-4.656,0-4.656-4.469v-9.047H.672V-16H3.344v-3.7l3.625-1.031V-16H10.8v2.844H6.969v8a3.152,3.152,0,0,0,.516,2.031A2.141,2.141,0,0,0,9.2-2.516,2.492,2.492,0,0,0,10.8-3.047Z"
              transform="translate(45.672 20.734)"
            />
            <path
              d="M10.8-.172A6.282,6.282,0,0,1,8,.359q-4.656,0-4.656-4.469v-9.047H.672V-16H3.344v-3.7l3.625-1.031V-16H10.8v2.844H6.969v8a3.152,3.152,0,0,0,.516,2.031A2.141,2.141,0,0,0,9.2-2.516,2.492,2.492,0,0,0,10.8-3.047Z"
              transform="translate(45.672 20.734)"
            />
          </g>
          <g className="letter" style={{ '--index': 3 } as React.CSSProperties}>
            <path
              d="M4.188-19.359a2.179,2.179,0,0,1-1.523-.578,1.9,1.9,0,0,1-.633-1.469,1.951,1.951,0,0,1,.633-1.484,2.147,2.147,0,0,1,1.523-.594,2.214,2.214,0,0,1,1.563.594,1.94,1.94,0,0,1,.641,1.484,1.913,1.913,0,0,1-.641,1.445A2.2,2.2,0,0,1,4.188-19.359ZM5.984,0H2.359V-16H5.984Z"
              transform="translate(67.031 23.484)"
            />
            <path
              d="M4.188-19.359a2.179,2.179,0,0,1-1.523-.578,1.9,1.9,0,0,1-.633-1.469,1.951,1.951,0,0,1,.633-1.484,2.147,2.147,0,0,1,1.523-.594,2.214,2.214,0,0,1,1.563.594,1.94,1.94,0,0,1,.641,1.484,1.913,1.913,0,0,1-.641,1.445A2.2,2.2,0,0,1,4.188-19.359ZM5.984,0H2.359V-16H5.984Z"
              transform="translate(67.031 23.484)"
            />
          </g>
          <g className="letter" style={{ '--index': 4 } as React.CSSProperties}>
            <path
              d="M11.406-20.734a3.3,3.3,0,0,0-1.672-.422q-2.641,0-2.641,2.984V-16h3.719v2.844h-3.7V0H3.484V-13.156H.75V-16H3.484v-2.594a5.05,5.05,0,0,1,1.656-3.992,6.031,6.031,0,0,1,4.141-1.461,6.149,6.149,0,0,1,2.125.3Z"
              transform="translate(80.75 24.047)"
            />
            <path
              d="M11.406-20.734a3.3,3.3,0,0,0-1.672-.422q-2.641,0-2.641,2.984V-16h3.719v2.844h-3.7V0H3.484V-13.156H.75V-16H3.484v-2.594a5.05,5.05,0,0,1,1.656-3.992,6.031,6.031,0,0,1,4.141-1.461,6.149,6.149,0,0,1,2.125.3Z"
              transform="translate(80.75 24.047)"
            />
          </g>
          <g className="letter" style={{ '--index': 5 } as React.CSSProperties}>
            <path
              d="M16.219-16,9,2.563Q6.75,7.531,2.688,7.531a7.569,7.569,0,0,1-1.906-.2V4.313a5.069,5.069,0,0,0,1.563.281,3.224,3.224,0,0,0,3.031-2L6.453-.031.094-16H4.109L7.922-4.375q.062.219.281,1.156h.078q.078-.359.281-1.125l4-11.656Z"
              transform="translate(101.094 20)"
            />
            <path
              d="M16.219-16,9,2.563Q6.75,7.531,2.688,7.531a7.569,7.569,0,0,1-1.906-.2V4.313a5.069,5.069,0,0,0,1.563.281,3.224,3.224,0,0,0,3.031-2L6.453-.031.094-16H4.109L7.922-4.375q.062.219.281,1.156h.078q.078-.359.281-1.125l4-11.656Z"
              transform="translate(101.094 20)"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Console
