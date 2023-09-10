import React from 'react';

export const CircularImage = () => {
  return (
    <>
      <svg
        width='1200'
        height='93'
        viewBox='0 0 1440 93'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M201.516 9.70664C217.021 3.29808 233.634 0 250.411 0H1186.9C1203.48 0 1219.89 3.21974 1235.24 9.48037L1440 93H0L201.516 9.70664Z'
          fill='#F8F7F7'
        />
        <g filter='url(#filter0_d_1982_855)'>
          <ellipse
            cx='734'
            cy='44.5'
            rx='478'
            ry='24.5'
            fill='url(#paint0_linear_1982_855)'
            fill-opacity='0.7'
            shape-rendering='crispEdges'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_1982_855'
            x='252'
            y='20'
            width='964'
            height='57'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0705882 0 0 0 0 0.141176 0 0 0 0 0.34902 0 0 0 0.35 0'
            />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1982_855' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_1982_855'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_1982_855'
            x1='734'
            y1='20'
            x2='734'
            y2='69'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.106755' stop-color='#E2E9F0' />
            <stop offset='0.440102' stop-color='#DCE4EB' />
            <stop offset='1' stop-color='#E2E9F0' stop-opacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
