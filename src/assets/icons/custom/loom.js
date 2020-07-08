export const cuLoom = [
  "55 55",
  `<defs>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 79 79">
      <image width="79" height="79" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvBJREFUeNrsnIly2zYQhgGIkiXLiusjSZOmbdq+/yu16ZnWjl3HtiLrIFlgujv+vYEkECRVkSVmdij5kMiP/+4C4AJKda1rXeta17rWtXqb3vF37OL78jWvGwNPw2cbeG9qgClhOcvEsRaQugZgDImtR5bAa13xd+dgqbUVWEoQM/ibvYEngTk4fbIB2AEdk4oBIjgHa2ltbu2BjguyykHqCsAxNIY1tDaydihsRL87IHimYngZgZuR3ZN9InsAkEsBMqolJU6aoSUExAEaW3tGdkzHCf18TH9zQP9TNbwU4N2RfbR2S3ZHMKcEk1WpRWysXXkMbkBAHKAvrJ1aO7d2RnYs4KHyehXHPIQ3BXg3ZH+TXdP7W1DkKgZgEgmuR+DGBO25tZfWXtHxOcF7JhR3sIOYtxAA7wiWg3ZJ9pe1C2tXdA6zGIBJCXBOUSfWvrT2xtrX1r4ieOekOlbbgGJi3dk28ySNTwDwg7U/6aYOIXyoGIBJpKtOyEVfW/vG2nd0fA3gDoXSejX38/I1ENmVT8mcpxzBuWn4v1mRLJwUiI2a1DMmxTkXfWvte4L3htz1mDLrYIvSqlaeVCEnspTOB5PWEMBl0I1J4bOyKuEl9KVO8i/ITR24H+j1CwDXB6XtYlgm1Yxq5B5BH6wHgJaQebELo7cpMAk8MeNRnXPTb0lxL8kdRuLkdjGW3QQTXbIPoYcVt4A+4ZRez0GBlcDD7HoGSeKVcNU+uOk+TX4wRA2KXBGoKXRpPtL7BQHcqL5eAdUdEag3FOPeUoI4I6iDPQTnU6MRMXhFWXkqOtDptrhnCsa7I3JbzloTkfL3FZxUYY+SCYehc7ITyMRbhWACXbZPbskjCQbnSw5NaEZc0ynACxaEKXCXDim28Zj1EGZJdIPAaRHHD+l6Tjyi0LHwlEfiExhyjSCDNQmeLxyNYTJj4uk1RGVbnDVheBNPgtANBIcAR3B9Y8/QrZTbDuALuIe+j92SmNiXwPWNYHSUiH5hlNsmYpJTfniT4WkxAhmISYyobIuqY7dlcActUR1ep1H+5yyqjNtySh+qx6l0CU83GJwUCs7+mLIxj1WHzyVwKqctyvOpz8R2VfDBDgIcijm6NjRUnYx7GwGaALfGYNoXiUK3BCCHJxRJf1t3xQTKWsrZqPY0HIJibB+C+krBk+USukXwjIA3FElxbV9vW8KQAH0/b4PyODnKENUrM7b9v7RN2VZ18MK8y3hCVae8AIBqTZjqlFdXpulaB6+D91+03PM+qOTCdOCeAMsEvI0QTYEPztf8vC0QHTiuZ05VQLWUCfjQfM2daZP6uIKAK6uwbiUvC0/ekaxF8FhxDtaDeiwEl3XLeVF4medurFqmwFzAc+UWM3q93CQUsyUGMLy5uCuswjapbymuE4USlTAQ3Ew9FsGsWqi8VH1eq7fRw7bBQ+XNxB1JGw4v93iYb+VQHuO2CG+hnq6mSYt0JhvSTcEa5qDC7pCEkULCmHvSeBvUtwKRBHVTQkcYPnhtcFspjhmEpgWoLysT83BNF67jWrYk7smFL5gUS1WG4ofzYpA79bRut4mum6/p303V50uqSsFL1WPhs1uv5YqeeTXhQkUuetsjl+VrQ2HMQ5KGCbw7smr8hgDyMKZJ6sOeBC4l4JWRsi9bWnnstg7eFRmW3a8apr4M3NUBw9WQ98KjSk0M8BchvEs63tKdWzbEfaU33RM4FsQNhKOtyTCkWAfXL2CVKK/g5uXv8lmn3jNofETFORH8Zu2dtZ+tvSeYsxBvKlrpxIU/XC0q19DKcgy9ZzGOx64OnFs++juB+4kgfqDfBSXCUHhyYZx8ui7rd3XA59StMjmC4ORwS5D+ILU5cL+of9fh3oSqLkZ5vhP0gcnXXEjVQDc9vJHTaRzfLklxDO4dgbyivwmO371IF8A5/1TMRODsayp+louOp3w2UsQyz8xIKoaTDI1XebuY9isB+xHAsbsGrTnjlkSAW9AJyZTPfSV3om4pEq+oxmrSRFW7Oc26zWhwhTdm1Etyz/d0vIBew0PR4WbRPQb4jjBACY+7MnKDhhFk5ao2p/FtRsOTF3MYq+LmDBcA7JqgTVXkDhcxu1sgQDn2vaUTOyPlHZP6uNqSbaieLqMvOwu8BGAzmMTg7UGuARhuCzKDzFq4n1rGZbTo+3FJ6gTsCJSHfUN0ZVNSeTi4x5kfdlkes+Lw6wE6wtFPA6vYDsm3imaonm5/xIYLYcpui+Trv+GcHD57wXk6CS0vc/FVNLlzWeIxuTFXXTEPN97CaXWc3KxkKFl1p9W3DZzc4azubCu7S5mqqdqhzs0HfUCr3IRw06aD6+prarvIulvd21/ubLvLrnWta13rWtcKtX8EGAB6FT4yJTdCRgAAAABJRU5ErkJggg=="/>
    </pattern>
    <radialGradient id="radial-gradient" cx="0.079" cy="0.991" r="1.18" gradientTransform="translate(0)" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#f7e000"/>
      <stop offset="0.045" stop-color="#f7c800"/>
      <stop offset="0.1" stop-color="#f6b000"/>
      <stop offset="0.135" stop-color="#f6a700"/>
      <stop offset="0.317" stop-color="#e66149"/>
      <stop offset="0.356" stop-color="#e4544d"/>
      <stop offset="0.427" stop-color="#de3159"/>
      <stop offset="0.504" stop-color="#d70568"/>
      <stop offset="0.661" stop-color="#bc0090"/>
      <stop offset="0.756" stop-color="#a113a5"/>
      <stop offset="0.871" stop-color="#8528bc"/>
      <stop offset="1" stop-color="#5456da"/>
    </radialGradient>
    <linearGradient id="linear-gradient" x1="1.604" y1="0.097" x2="2.404" y2="0.897" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1"/>
    </linearGradient>
    <clipPath id="clip-path">
      <path id="Path_426" data-name="Path 426" d="M66.622,5.63c-17.64,0-22.042,4.4-22.042,22.042s4.4,22.042,22.042,22.042,22.042-4.4,22.042-22.042S84.262,5.63,66.622,5.63Z" transform="translate(-44.58 -5.63)" opacity="0.2"/>
    </clipPath>
    <linearGradient id="linear-gradient-2" x1="0.087" y1="0.087" x2="0.913" y2="0.913" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.903" stop-color="#fff" stop-opacity="0.729"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0.702"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="0.146" y1="0.147" x2="0.853" y2="0.854" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-4" x1="0.152" y1="0.146" x2="0.855" y2="0.849" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-5" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-opacity="0.702"/>
    </linearGradient>
  </defs>
  <g id="Group_42" data-name="Group 42">
    <g id="Group_41" data-name="Group 41" transform="translate(5.061 3.182)">
      <g id="Group_40" data-name="Group 40">
        <path id="Path_143" data-name="Path 143" d="M66.622,5.63c-17.64,0-22.042,4.4-22.042,22.042s4.4,22.042,22.042,22.042,22.042-4.4,22.042-22.042S84.262,5.63,66.622,5.63Z" transform="translate(-44.58 -5.63)" fill="url(#radial-gradient)"/>
      </g>
    </g>
  </g>
  <g id="Group_44" data-name="Group 44" transform="translate(5.061 3.182)" opacity="0.5">
    <g id="Group_43" data-name="Group 43">
      <path id="Path_144" data-name="Path 144" d="M66.622,5.63c-17.64,0-22.042,4.4-22.042,22.042s4.4,22.042,22.042,22.042,22.042-4.4,22.042-22.042S84.262,5.63,66.622,5.63Z" transform="translate(-44.58 -5.63)" fill="url(#linear-gradient)"/>
    </g>
  </g>
  <g id="Group_148" data-name="Group 148" transform="translate(5.061 3.182)" opacity="0.2">
    <g id="Group_147" data-name="Group 147" clip-path="url(#clip-path)">
      <g id="Group_45" data-name="Group 45" transform="translate(17.576 17.576)" opacity="0">
        <path id="Path_145" data-name="Path 145" d="M74.939,30.535a5.473,5.473,0,0,1-5.455,5.455H58.32a5.473,5.473,0,0,1-5.455-5.455V19.37a5.473,5.473,0,0,1,5.455-5.455H69.485a5.473,5.473,0,0,1,5.455,5.455ZM69.485,11.14H58.32a8.25,8.25,0,0,0-8.23,8.23V30.535a8.25,8.25,0,0,0,8.23,8.23H69.485a8.25,8.25,0,0,0,8.23-8.23V19.37A8.25,8.25,0,0,0,69.485,11.14Z" transform="translate(-50.09 -11.14)"/>
        <path id="Path_146" data-name="Path 146" d="M59.325,24.746a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.325,24.746Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.325,13.23Z" transform="translate(-45.513 -6.563)"/>
        <circle id="Ellipse_23" data-name="Ellipse 23" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
      <g id="Group_46" data-name="Group 46" transform="translate(17.481 17.481)" opacity="0.01">
        <path id="Path_147" data-name="Path 147" d="M74.909,30.5a5.473,5.473,0,0,1-5.455,5.455H58.29A5.473,5.473,0,0,1,52.835,30.5V19.34a5.473,5.473,0,0,1,5.455-5.455H69.455a5.473,5.473,0,0,1,5.455,5.455ZM69.455,11.11H58.29a8.25,8.25,0,0,0-8.23,8.23V30.5a8.25,8.25,0,0,0,8.23,8.23H69.455a8.25,8.25,0,0,0,8.23-8.23V19.34A8.25,8.25,0,0,0,69.455,11.11Z" transform="translate(-50.06 -11.11)"/>
        <path id="Path_148" data-name="Path 148" d="M59.3,24.716a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.3,24.716Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.3,13.2Z" transform="translate(-45.483 -6.533)"/>
        <path id="Path_149" data-name="Path 149" d="M57.813,12.68A1.723,1.723,0,1,0,59.535,14.4,1.715,1.715,0,0,0,57.813,12.68Z" transform="translate(-36.855 -7.672)"/>
      </g>
      <g id="Group_47" data-name="Group 47" transform="translate(17.385 17.385)" opacity="0.02">
        <path id="Path_150" data-name="Path 150" d="M74.879,30.475a5.473,5.473,0,0,1-5.455,5.455H58.26a5.473,5.473,0,0,1-5.455-5.455V19.31a5.473,5.473,0,0,1,5.455-5.455H69.425a5.473,5.473,0,0,1,5.455,5.455ZM69.425,11.08H58.26a8.25,8.25,0,0,0-8.23,8.23V30.475a8.25,8.25,0,0,0,8.23,8.23H69.425a8.25,8.25,0,0,0,8.23-8.23V19.31A8.25,8.25,0,0,0,69.425,11.08Z" transform="translate(-50.03 -11.08)"/>
        <path id="Path_151" data-name="Path 151" d="M59.265,24.686a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.265,24.686Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.265,13.17Z" transform="translate(-45.453 -6.503)"/>
        <path id="Path_152" data-name="Path 152" d="M57.783,12.65a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.783,12.65Z" transform="translate(-36.825 -7.642)"/>
      </g>
      <g id="Group_48" data-name="Group 48" transform="translate(17.289 17.289)" opacity="0.03">
        <path id="Path_153" data-name="Path 153" d="M74.849,30.445A5.473,5.473,0,0,1,69.395,35.9H58.23a5.473,5.473,0,0,1-5.455-5.455V19.28a5.473,5.473,0,0,1,5.455-5.455H69.395a5.473,5.473,0,0,1,5.455,5.455ZM69.395,11.05H58.23A8.25,8.25,0,0,0,50,19.28V30.445a8.25,8.25,0,0,0,8.23,8.23H69.395a8.25,8.25,0,0,0,8.23-8.23V19.28A8.25,8.25,0,0,0,69.395,11.05Z" transform="translate(-50 -11.05)"/>
        <path id="Path_154" data-name="Path 154" d="M59.235,24.656a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.235,24.656Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.235,13.14Z" transform="translate(-45.423 -6.473)"/>
        <path id="Path_155" data-name="Path 155" d="M57.763,12.62a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,57.763,12.62Z" transform="translate(-36.773 -7.612)"/>
      </g>
      <g id="Group_49" data-name="Group 49" transform="translate(17.194 17.194)" opacity="0.04">
        <path id="Path_156" data-name="Path 156" d="M74.819,30.415a5.473,5.473,0,0,1-5.455,5.455H58.2a5.473,5.473,0,0,1-5.455-5.455V19.25A5.473,5.473,0,0,1,58.2,13.8H69.365a5.473,5.473,0,0,1,5.455,5.455ZM69.365,11.02H58.2a8.25,8.25,0,0,0-8.23,8.23V30.415a8.25,8.25,0,0,0,8.23,8.23H69.365a8.25,8.25,0,0,0,8.23-8.23V19.25A8.25,8.25,0,0,0,69.365,11.02Z" transform="translate(-49.97 -11.02)"/>
        <path id="Path_157" data-name="Path 157" d="M59.205,24.626a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.205,24.626Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,59.205,13.11Z" transform="translate(-45.393 -6.443)"/>
        <path id="Path_158" data-name="Path 158" d="M57.733,12.59a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,57.733,12.59Z" transform="translate(-36.743 -7.582)"/>
      </g>
      <g id="Group_50" data-name="Group 50" transform="translate(17.098 17.098)" opacity="0.049">
        <path id="Path_159" data-name="Path 159" d="M74.789,30.385a5.473,5.473,0,0,1-5.455,5.455H58.17a5.473,5.473,0,0,1-5.455-5.455V19.22a5.473,5.473,0,0,1,5.455-5.455H69.335a5.473,5.473,0,0,1,5.455,5.455ZM69.335,10.99H58.17a8.25,8.25,0,0,0-8.23,8.23V30.385a8.25,8.25,0,0,0,8.23,8.23H69.335a8.25,8.25,0,0,0,8.23-8.23V19.22A8.229,8.229,0,0,0,69.335,10.99Z" transform="translate(-49.94 -10.99)"/>
        <path id="Path_160" data-name="Path 160" d="M59.175,24.6a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.175,24.6Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,59.175,13.08Z" transform="translate(-45.363 -6.413)"/>
        <path id="Path_161" data-name="Path 161" d="M57.7,12.56a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,57.7,12.56Z" transform="translate(-36.713 -7.552)"/>
      </g>
      <g id="Group_51" data-name="Group 51" transform="translate(17.002 17.002)" opacity="0.059">
        <path id="Path_162" data-name="Path 162" d="M74.759,30.386A5.473,5.473,0,0,1,69.3,35.841H58.14a5.473,5.473,0,0,1-5.455-5.455V19.222a5.473,5.473,0,0,1,5.455-5.455H69.3a5.473,5.473,0,0,1,5.455,5.455ZM69.3,10.96H58.14a8.25,8.25,0,0,0-8.23,8.23V30.355a8.25,8.25,0,0,0,8.23,8.23H69.3a8.25,8.25,0,0,0,8.23-8.23V19.19A8.23,8.23,0,0,0,69.3,10.96Z" transform="translate(-49.91 -10.96)"/>
        <path id="Path_163" data-name="Path 163" d="M59.145,24.544a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.145,24.544Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,59.145,13.06Z" transform="translate(-45.333 -6.361)"/>
        <path id="Path_164" data-name="Path 164" d="M57.673,12.54A1.723,1.723,0,1,0,59.4,14.263,1.757,1.757,0,0,0,57.673,12.54Z" transform="translate(-36.683 -7.5)"/>
      </g>
      <g id="Group_52" data-name="Group 52" transform="translate(16.938 16.938)" opacity="0.069">
        <path id="Path_165" data-name="Path 165" d="M74.707,30.335a5.473,5.473,0,0,1-5.455,5.455H58.088a5.473,5.473,0,0,1-5.455-5.455V19.17a5.473,5.473,0,0,1,5.455-5.455H69.253a5.473,5.473,0,0,1,5.455,5.455ZM69.285,10.94H58.12a8.25,8.25,0,0,0-8.23,8.23V30.335a8.25,8.25,0,0,0,8.23,8.23H69.285a8.25,8.25,0,0,0,8.23-8.23V19.17A8.23,8.23,0,0,0,69.285,10.94Z" transform="translate(-49.89 -10.94)"/>
        <path id="Path_166" data-name="Path 166" d="M59.115,24.546a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.115,24.546Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,59.115,13.03Z" transform="translate(-45.335 -6.363)"/>
        <path id="Path_167" data-name="Path 167" d="M57.643,12.51a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.643,12.51Z" transform="translate(-36.685 -7.502)"/>
      </g>
      <g id="Group_53" data-name="Group 53" transform="translate(16.843 16.843)" opacity="0.079">
        <path id="Path_168" data-name="Path 168" d="M74.677,30.3a5.473,5.473,0,0,1-5.455,5.455H58.058A5.473,5.473,0,0,1,52.6,30.3V19.14a5.473,5.473,0,0,1,5.455-5.455H69.223a5.473,5.473,0,0,1,5.455,5.455ZM69.255,10.91H58.09a8.25,8.25,0,0,0-8.23,8.23V30.3a8.25,8.25,0,0,0,8.23,8.23H69.255a8.25,8.25,0,0,0,8.23-8.23V19.14A8.23,8.23,0,0,0,69.255,10.91Z" transform="translate(-49.86 -10.91)"/>
        <path id="Path_169" data-name="Path 169" d="M59.1,24.516a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,59.1,24.516ZM59.1,13a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.1,13Z" transform="translate(-45.283 -6.333)"/>
        <path id="Path_170" data-name="Path 170" d="M57.613,12.48A1.723,1.723,0,1,0,59.335,14.2,1.715,1.715,0,0,0,57.613,12.48Z" transform="translate(-36.655 -7.472)"/>
      </g>
      <g id="Group_54" data-name="Group 54" transform="translate(16.747 16.747)" opacity="0.089">
        <path id="Path_171" data-name="Path 171" d="M74.679,30.275a5.473,5.473,0,0,1-5.455,5.455H58.06a5.473,5.473,0,0,1-5.455-5.455V19.11a5.473,5.473,0,0,1,5.455-5.455H69.225a5.473,5.473,0,0,1,5.455,5.455ZM69.225,10.88H58.06a8.25,8.25,0,0,0-8.23,8.23V30.275a8.25,8.25,0,0,0,8.23,8.23H69.225a8.25,8.25,0,0,0,8.23-8.23V19.11A8.25,8.25,0,0,0,69.225,10.88Z" transform="translate(-49.83 -10.88)"/>
        <path id="Path_172" data-name="Path 172" d="M59.065,24.486a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.065,24.486Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.065,12.97Z" transform="translate(-45.253 -6.303)"/>
        <path id="Path_173" data-name="Path 173" d="M57.583,12.45a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.583,12.45Z" transform="translate(-36.625 -7.442)"/>
      </g>
      <g id="Group_55" data-name="Group 55" transform="translate(16.651 16.651)" opacity="0.099">
        <path id="Path_174" data-name="Path 174" d="M74.649,30.245A5.473,5.473,0,0,1,69.195,35.7H58.03a5.473,5.473,0,0,1-5.455-5.455V19.08a5.473,5.473,0,0,1,5.455-5.455H69.195a5.473,5.473,0,0,1,5.455,5.455ZM69.195,10.85H58.03a8.25,8.25,0,0,0-8.23,8.23V30.245a8.25,8.25,0,0,0,8.23,8.23H69.195a8.25,8.25,0,0,0,8.23-8.23V19.08A8.25,8.25,0,0,0,69.195,10.85Z" transform="translate(-49.8 -10.85)"/>
        <path id="Path_175" data-name="Path 175" d="M59.035,24.456a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.035,24.456Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.035,12.94Z" transform="translate(-45.223 -6.273)"/>
        <path id="Path_176" data-name="Path 176" d="M57.553,12.42a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.553,12.42Z" transform="translate(-36.595 -7.412)"/>
      </g>
      <g id="Group_56" data-name="Group 56" transform="translate(16.556 16.556)" opacity="0.109">
        <path id="Path_177" data-name="Path 177" d="M74.619,30.215a5.473,5.473,0,0,1-5.455,5.455H58a5.473,5.473,0,0,1-5.455-5.455V19.05A5.473,5.473,0,0,1,58,13.6H69.165a5.473,5.473,0,0,1,5.455,5.455ZM69.165,10.82H58a8.25,8.25,0,0,0-8.23,8.23V30.215A8.25,8.25,0,0,0,58,38.444H69.165a8.25,8.25,0,0,0,8.23-8.23V19.05A8.25,8.25,0,0,0,69.165,10.82Z" transform="translate(-49.77 -10.82)"/>
        <path id="Path_178" data-name="Path 178" d="M59.005,24.426a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,59.005,24.426Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,59.005,12.91Z" transform="translate(-45.193 -6.243)"/>
        <path id="Path_179" data-name="Path 179" d="M57.523,12.39a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.523,12.39Z" transform="translate(-36.565 -7.382)"/>
      </g>
      <g id="Group_57" data-name="Group 57" transform="translate(16.46 16.46)" opacity="0.119">
        <path id="Path_180" data-name="Path 180" d="M74.589,30.185a5.473,5.473,0,0,1-5.455,5.455H57.97a5.473,5.473,0,0,1-5.455-5.455V19.02a5.473,5.473,0,0,1,5.455-5.455H69.135a5.473,5.473,0,0,1,5.455,5.455ZM69.135,10.79H57.97a8.25,8.25,0,0,0-8.23,8.23V30.185a8.25,8.25,0,0,0,8.23,8.23H69.135a8.25,8.25,0,0,0,8.23-8.23V19.02A8.25,8.25,0,0,0,69.135,10.79Z" transform="translate(-49.74 -10.79)"/>
        <path id="Path_181" data-name="Path 181" d="M58.975,24.4a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.975,24.4Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.975,12.88Z" transform="translate(-45.163 -6.213)"/>
        <path id="Path_182" data-name="Path 182" d="M57.493,12.36a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.493,12.36Z" transform="translate(-36.535 -7.352)"/>
      </g>
      <g id="Group_58" data-name="Group 58" transform="translate(16.364 16.364)" opacity="0.129">
        <path id="Path_183" data-name="Path 183" d="M74.559,30.155A5.473,5.473,0,0,1,69.1,35.609H57.94a5.473,5.473,0,0,1-5.455-5.455V18.99a5.473,5.473,0,0,1,5.455-5.455H69.1a5.473,5.473,0,0,1,5.455,5.455ZM69.1,10.76H57.94a8.25,8.25,0,0,0-8.23,8.23V30.155a8.25,8.25,0,0,0,8.23,8.23H69.1a8.25,8.25,0,0,0,8.23-8.23V18.99A8.25,8.25,0,0,0,69.1,10.76Z" transform="translate(-49.71 -10.76)"/>
        <path id="Path_184" data-name="Path 184" d="M58.945,24.366A4.37,4.37,0,1,1,63.316,20,4.356,4.356,0,0,1,58.945,24.366Zm0-11.516A7.145,7.145,0,1,0,66.091,20,7.134,7.134,0,0,0,58.945,12.85Z" transform="translate(-45.133 -6.183)"/>
        <circle id="Ellipse_24" data-name="Ellipse 24" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_59" data-name="Group 59" transform="translate(16.268 16.268)" opacity="0.139">
        <path id="Path_185" data-name="Path 185" d="M74.529,30.125a5.473,5.473,0,0,1-5.455,5.455H57.91a5.473,5.473,0,0,1-5.455-5.455V18.96a5.473,5.473,0,0,1,5.455-5.455H69.075a5.473,5.473,0,0,1,5.455,5.455ZM69.075,10.73H57.91a8.25,8.25,0,0,0-8.23,8.23V30.125a8.25,8.25,0,0,0,8.23,8.23H69.075a8.25,8.25,0,0,0,8.23-8.23V18.96A8.25,8.25,0,0,0,69.075,10.73Z" transform="translate(-49.68 -10.73)"/>
        <path id="Path_186" data-name="Path 186" d="M58.915,24.336a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.915,24.336Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.915,12.82Z" transform="translate(-45.103 -6.153)"/>
        <circle id="Ellipse_25" data-name="Ellipse 25" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_60" data-name="Group 60" transform="translate(16.173 16.173)" opacity="0.148">
        <path id="Path_187" data-name="Path 187" d="M74.5,30.095a5.473,5.473,0,0,1-5.455,5.455H57.88a5.473,5.473,0,0,1-5.455-5.455V18.93a5.473,5.473,0,0,1,5.455-5.455H69.045A5.473,5.473,0,0,1,74.5,18.93ZM69.045,10.7H57.88a8.25,8.25,0,0,0-8.23,8.23V30.095a8.25,8.25,0,0,0,8.23,8.23H69.045a8.25,8.25,0,0,0,8.23-8.23V18.93A8.23,8.23,0,0,0,69.045,10.7Z" transform="translate(-49.65 -10.7)"/>
        <path id="Path_188" data-name="Path 188" d="M58.885,24.306a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.885,24.306Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.885,12.79Z" transform="translate(-45.073 -6.123)"/>
        <circle id="Ellipse_26" data-name="Ellipse 26" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_61" data-name="Group 61" transform="translate(16.077 16.077)" opacity="0.158">
        <path id="Path_189" data-name="Path 189" d="M74.469,30.1a5.473,5.473,0,0,1-5.455,5.455H57.85A5.473,5.473,0,0,1,52.4,30.1V18.932a5.473,5.473,0,0,1,5.455-5.455H69.015a5.473,5.473,0,0,1,5.455,5.455ZM69.015,10.67H57.85a8.25,8.25,0,0,0-8.23,8.23V30.065a8.25,8.25,0,0,0,8.23,8.23H69.015a8.25,8.25,0,0,0,8.23-8.23V18.9A8.23,8.23,0,0,0,69.015,10.67Z" transform="translate(-49.62 -10.67)"/>
        <path id="Path_190" data-name="Path 190" d="M58.855,24.254a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.855,24.254Zm0-11.484A7.145,7.145,0,1,0,66,19.915,7.134,7.134,0,0,0,58.855,12.77Z" transform="translate(-45.043 -6.071)"/>
        <circle id="Ellipse_27" data-name="Ellipse 27" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_62" data-name="Group 62" transform="translate(16.013 16.013)" opacity="0.168">
        <path id="Path_191" data-name="Path 191" d="M74.417,30.045A5.473,5.473,0,0,1,68.963,35.5H57.8a5.473,5.473,0,0,1-5.455-5.455V18.88A5.473,5.473,0,0,1,57.8,13.425H68.963a5.473,5.473,0,0,1,5.455,5.455ZM68.995,10.65H57.83a8.25,8.25,0,0,0-8.23,8.23V30.045a8.25,8.25,0,0,0,8.23,8.23H68.995a8.25,8.25,0,0,0,8.23-8.23V18.88A8.23,8.23,0,0,0,68.995,10.65Z" transform="translate(-49.6 -10.65)"/>
        <path id="Path_192" data-name="Path 192" d="M58.825,24.256a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.825,24.256Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.825,12.74Z" transform="translate(-45.045 -6.073)"/>
        <circle id="Ellipse_28" data-name="Ellipse 28" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_63" data-name="Group 63" transform="translate(15.918 15.918)" opacity="0.178">
        <path id="Path_193" data-name="Path 193" d="M74.419,30.015a5.473,5.473,0,0,1-5.455,5.455H57.8a5.473,5.473,0,0,1-5.455-5.455V18.85A5.473,5.473,0,0,1,57.8,13.4H68.965a5.473,5.473,0,0,1,5.455,5.455ZM68.965,10.62H57.8a8.25,8.25,0,0,0-8.23,8.23V30.015a8.25,8.25,0,0,0,8.23,8.23H68.965a8.25,8.25,0,0,0,8.23-8.23V18.85A8.23,8.23,0,0,0,68.965,10.62Z" transform="translate(-49.57 -10.62)"/>
        <path id="Path_194" data-name="Path 194" d="M58.805,24.226a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,58.805,24.226Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.805,12.71Z" transform="translate(-44.993 -6.043)"/>
        <circle id="Ellipse_29" data-name="Ellipse 29" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_64" data-name="Group 64" transform="translate(15.822 15.822)" opacity="0.188">
        <path id="Path_195" data-name="Path 195" d="M74.389,29.985a5.473,5.473,0,0,1-5.455,5.455H57.77a5.473,5.473,0,0,1-5.455-5.455V18.82a5.473,5.473,0,0,1,5.455-5.455H68.935a5.473,5.473,0,0,1,5.455,5.455ZM68.935,10.59H57.77a8.25,8.25,0,0,0-8.23,8.23V29.985a8.25,8.25,0,0,0,8.23,8.23H68.935a8.25,8.25,0,0,0,8.23-8.23V18.82A8.25,8.25,0,0,0,68.935,10.59Z" transform="translate(-49.54 -10.59)"/>
        <path id="Path_196" data-name="Path 196" d="M58.775,24.2a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.775,24.2Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.775,12.68Z" transform="translate(-44.963 -6.013)"/>
        <circle id="Ellipse_30" data-name="Ellipse 30" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_65" data-name="Group 65" transform="translate(15.726 15.726)" opacity="0.198">
        <path id="Path_197" data-name="Path 197" d="M74.359,29.955A5.473,5.473,0,0,1,68.9,35.409H57.74a5.473,5.473,0,0,1-5.455-5.455V18.79a5.473,5.473,0,0,1,5.455-5.455H68.9a5.473,5.473,0,0,1,5.455,5.455ZM68.9,10.56H57.74a8.25,8.25,0,0,0-8.23,8.23V29.955a8.25,8.25,0,0,0,8.23,8.23H68.9a8.25,8.25,0,0,0,8.23-8.23V18.79A8.25,8.25,0,0,0,68.9,10.56Z" transform="translate(-49.51 -10.56)"/>
        <path id="Path_198" data-name="Path 198" d="M58.745,24.166a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.745,24.166Zm0-11.516A7.145,7.145,0,1,0,65.891,19.8,7.134,7.134,0,0,0,58.745,12.65Z" transform="translate(-44.933 -5.983)"/>
        <circle id="Ellipse_31" data-name="Ellipse 31" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
      <g id="Group_66" data-name="Group 66" transform="translate(15.63 15.63)" opacity="0.208">
        <path id="Path_199" data-name="Path 199" d="M74.329,29.925a5.473,5.473,0,0,1-5.455,5.455H57.71a5.473,5.473,0,0,1-5.455-5.455V18.76a5.473,5.473,0,0,1,5.455-5.455H68.875a5.473,5.473,0,0,1,5.455,5.455ZM68.875,10.53H57.71a8.25,8.25,0,0,0-8.23,8.23V29.925a8.25,8.25,0,0,0,8.23,8.23H68.875a8.25,8.25,0,0,0,8.23-8.23V18.76A8.25,8.25,0,0,0,68.875,10.53Z" transform="translate(-49.48 -10.53)"/>
        <path id="Path_200" data-name="Path 200" d="M58.715,24.136a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.715,24.136Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.715,12.62Z" transform="translate(-44.903 -5.953)"/>
        <path id="Path_201" data-name="Path 201" d="M57.233,12.1a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.233,12.1Z" transform="translate(-36.275 -7.092)"/>
      </g>
      <g id="Group_67" data-name="Group 67" transform="translate(15.535 15.535)" opacity="0.218">
        <path id="Path_202" data-name="Path 202" d="M74.3,29.895a5.473,5.473,0,0,1-5.455,5.455H57.68a5.473,5.473,0,0,1-5.455-5.455V18.73a5.473,5.473,0,0,1,5.455-5.455H68.845A5.473,5.473,0,0,1,74.3,18.73ZM68.845,10.5H57.68a8.25,8.25,0,0,0-8.23,8.23V29.895a8.25,8.25,0,0,0,8.23,8.23H68.845a8.25,8.25,0,0,0,8.23-8.23V18.73A8.25,8.25,0,0,0,68.845,10.5Z" transform="translate(-49.45 -10.5)"/>
        <path id="Path_203" data-name="Path 203" d="M58.685,24.106a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.685,24.106Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.685,12.59Z" transform="translate(-44.873 -5.923)"/>
        <path id="Path_204" data-name="Path 204" d="M57.2,12.07a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.2,12.07Z" transform="translate(-36.245 -7.062)"/>
      </g>
      <g id="Group_68" data-name="Group 68" transform="translate(15.439 15.439)" opacity="0.228">
        <path id="Path_205" data-name="Path 205" d="M74.269,29.865a5.473,5.473,0,0,1-5.455,5.455H57.65A5.473,5.473,0,0,1,52.2,29.865V18.7a5.473,5.473,0,0,1,5.455-5.455H68.815A5.473,5.473,0,0,1,74.269,18.7ZM68.815,10.47H57.65a8.25,8.25,0,0,0-8.23,8.23V29.865a8.25,8.25,0,0,0,8.23,8.23H68.815a8.25,8.25,0,0,0,8.23-8.23V18.7A8.25,8.25,0,0,0,68.815,10.47Z" transform="translate(-49.42 -10.47)"/>
        <path id="Path_206" data-name="Path 206" d="M58.655,24.076a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.655,24.076Zm0-11.516A7.145,7.145,0,1,0,65.8,19.705,7.134,7.134,0,0,0,58.655,12.56Z" transform="translate(-44.843 -5.893)"/>
        <path id="Path_207" data-name="Path 207" d="M57.183,12.04a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,57.183,12.04Z" transform="translate(-36.193 -7.032)"/>
      </g>
      <g id="Group_69" data-name="Group 69" transform="translate(15.343 15.343)" opacity="0.238">
        <path id="Path_208" data-name="Path 208" d="M74.239,29.835a5.473,5.473,0,0,1-5.455,5.455H57.62a5.473,5.473,0,0,1-5.455-5.455V18.67a5.473,5.473,0,0,1,5.455-5.455H68.785a5.473,5.473,0,0,1,5.455,5.455ZM68.785,10.44H57.62a8.25,8.25,0,0,0-8.23,8.23V29.835a8.25,8.25,0,0,0,8.23,8.23H68.785a8.25,8.25,0,0,0,8.23-8.23V18.67A8.25,8.25,0,0,0,68.785,10.44Z" transform="translate(-49.39 -10.44)"/>
        <path id="Path_209" data-name="Path 209" d="M58.625,24.046A4.37,4.37,0,1,1,63,19.675,4.356,4.356,0,0,1,58.625,24.046Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,58.625,12.53Z" transform="translate(-44.813 -5.863)"/>
        <path id="Path_210" data-name="Path 210" d="M57.153,12.01a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,57.153,12.01Z" transform="translate(-36.163 -7.002)"/>
      </g>
      <g id="Group_70" data-name="Group 70" transform="translate(15.248 15.248)" opacity="0.248">
        <path id="Path_211" data-name="Path 211" d="M74.209,29.8a5.473,5.473,0,0,1-5.455,5.455H57.59A5.473,5.473,0,0,1,52.135,29.8V18.64a5.473,5.473,0,0,1,5.455-5.455H68.755a5.473,5.473,0,0,1,5.455,5.455ZM68.755,10.41H57.59a8.25,8.25,0,0,0-8.23,8.23V29.8a8.25,8.25,0,0,0,8.23,8.23H68.755a8.25,8.25,0,0,0,8.23-8.23V18.64A8.23,8.23,0,0,0,68.755,10.41Z" transform="translate(-49.36 -10.41)"/>
        <path id="Path_212" data-name="Path 212" d="M58.6,24.016a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.6,24.016Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,58.6,12.5Z" transform="translate(-44.783 -5.833)"/>
        <path id="Path_213" data-name="Path 213" d="M57.123,11.98A1.723,1.723,0,1,0,58.845,13.7,1.757,1.757,0,0,0,57.123,11.98Z" transform="translate(-36.133 -6.972)"/>
      </g>
      <g id="Group_71" data-name="Group 71" transform="translate(15.152 15.152)" opacity="0.257">
        <path id="Path_214" data-name="Path 214" d="M74.179,29.806a5.473,5.473,0,0,1-5.455,5.455H57.56a5.473,5.473,0,0,1-5.455-5.455V18.642a5.473,5.473,0,0,1,5.455-5.455H68.725a5.473,5.473,0,0,1,5.455,5.455ZM68.725,10.38H57.56a8.25,8.25,0,0,0-8.23,8.23V29.775A8.25,8.25,0,0,0,57.56,38H68.725a8.25,8.25,0,0,0,8.23-8.23V18.61A8.23,8.23,0,0,0,68.725,10.38Z" transform="translate(-49.33 -10.38)"/>
        <path id="Path_215" data-name="Path 215" d="M58.565,23.964a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.565,23.964Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,58.565,12.48Z" transform="translate(-44.753 -5.781)"/>
        <path id="Path_216" data-name="Path 216" d="M57.093,11.96a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,57.093,11.96Z" transform="translate(-36.103 -6.92)"/>
      </g>
      <g id="Group_72" data-name="Group 72" transform="translate(15.088 15.088)" opacity="0.267">
        <path id="Path_217" data-name="Path 217" d="M74.127,29.755a5.473,5.473,0,0,1-5.455,5.455H57.508a5.473,5.473,0,0,1-5.455-5.455V18.59a5.473,5.473,0,0,1,5.455-5.455H68.673a5.473,5.473,0,0,1,5.455,5.455ZM68.7,10.36H57.54a8.25,8.25,0,0,0-8.23,8.23V29.755a8.25,8.25,0,0,0,8.23,8.23H68.7a8.25,8.25,0,0,0,8.23-8.23V18.59A8.229,8.229,0,0,0,68.7,10.36Z" transform="translate(-49.31 -10.36)"/>
        <path id="Path_218" data-name="Path 218" d="M58.535,23.966a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.535,23.966Zm0-11.516A7.145,7.145,0,1,0,65.681,19.6,7.154,7.154,0,0,0,58.535,12.45Z" transform="translate(-44.755 -5.783)"/>
        <path id="Path_219" data-name="Path 219" d="M57.063,11.93a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.063,11.93Z" transform="translate(-36.105 -6.922)"/>
      </g>
      <g id="Group_73" data-name="Group 73" transform="translate(14.992 14.992)" opacity="0.277">
        <path id="Path_220" data-name="Path 220" d="M74.129,29.725a5.473,5.473,0,0,1-5.455,5.455H57.51a5.473,5.473,0,0,1-5.455-5.455V18.56a5.473,5.473,0,0,1,5.455-5.455H68.675a5.473,5.473,0,0,1,5.455,5.455ZM68.675,10.33H57.51a8.25,8.25,0,0,0-8.23,8.23V29.725a8.25,8.25,0,0,0,8.23,8.23H68.675a8.25,8.25,0,0,0,8.23-8.23V18.56A8.23,8.23,0,0,0,68.675,10.33Z" transform="translate(-49.28 -10.33)"/>
        <path id="Path_221" data-name="Path 221" d="M58.515,23.936a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,58.515,23.936Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,58.515,12.42Z" transform="translate(-44.703 -5.753)"/>
        <path id="Path_222" data-name="Path 222" d="M57.033,11.9a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57.033,11.9Z" transform="translate(-36.075 -6.892)"/>
      </g>
      <g id="Group_74" data-name="Group 74" transform="translate(14.897 14.897)" opacity="0.287">
        <path id="Path_223" data-name="Path 223" d="M74.1,29.695a5.473,5.473,0,0,1-5.455,5.455H57.48a5.473,5.473,0,0,1-5.455-5.455V18.53a5.473,5.473,0,0,1,5.455-5.455H68.645A5.473,5.473,0,0,1,74.1,18.53ZM68.645,10.3H57.48a8.25,8.25,0,0,0-8.23,8.23V29.695a8.25,8.25,0,0,0,8.23,8.23H68.645a8.25,8.25,0,0,0,8.23-8.23V18.53A8.25,8.25,0,0,0,68.645,10.3Z" transform="translate(-49.25 -10.3)"/>
        <path id="Path_224" data-name="Path 224" d="M58.485,23.906a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.485,23.906Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.485,12.39Z" transform="translate(-44.673 -5.723)"/>
        <path id="Path_225" data-name="Path 225" d="M57,11.87a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,57,11.87Z" transform="translate(-36.045 -6.862)"/>
      </g>
      <g id="Group_75" data-name="Group 75" transform="translate(14.801 14.801)" opacity="0.297">
        <path id="Path_226" data-name="Path 226" d="M74.069,29.665a5.473,5.473,0,0,1-5.455,5.455H57.45A5.473,5.473,0,0,1,52,29.665V18.5a5.473,5.473,0,0,1,5.455-5.455H68.615A5.473,5.473,0,0,1,74.069,18.5ZM68.615,10.27H57.45a8.25,8.25,0,0,0-8.23,8.23V29.665a8.25,8.25,0,0,0,8.23,8.23H68.615a8.25,8.25,0,0,0,8.23-8.23V18.5A8.25,8.25,0,0,0,68.615,10.27Z" transform="translate(-49.22 -10.27)"/>
        <path id="Path_227" data-name="Path 227" d="M58.455,23.876a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.455,23.876Zm0-11.516A7.145,7.145,0,1,0,65.6,19.505,7.134,7.134,0,0,0,58.455,12.36Z" transform="translate(-44.643 -5.693)"/>
        <path id="Path_228" data-name="Path 228" d="M56.973,11.84A1.723,1.723,0,1,0,58.7,13.563,1.715,1.715,0,0,0,56.973,11.84Z" transform="translate(-36.015 -6.832)"/>
      </g>
      <g id="Group_76" data-name="Group 76" transform="translate(14.705 14.705)" opacity="0.307">
        <path id="Path_229" data-name="Path 229" d="M74.039,29.635a5.473,5.473,0,0,1-5.455,5.455H57.42a5.473,5.473,0,0,1-5.455-5.455V18.47a5.473,5.473,0,0,1,5.455-5.455H68.585a5.473,5.473,0,0,1,5.455,5.455ZM68.585,10.24H57.42a8.25,8.25,0,0,0-8.23,8.23V29.635a8.25,8.25,0,0,0,8.23,8.23H68.585a8.25,8.25,0,0,0,8.23-8.23V18.47A8.25,8.25,0,0,0,68.585,10.24Z" transform="translate(-49.19 -10.24)"/>
        <path id="Path_230" data-name="Path 230" d="M58.425,23.846a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.425,23.846Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.425,12.33Z" transform="translate(-44.613 -5.663)"/>
        <path id="Path_231" data-name="Path 231" d="M56.943,11.81a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.943,11.81Z" transform="translate(-35.985 -6.802)"/>
      </g>
      <g id="Group_77" data-name="Group 77" transform="translate(14.61 14.61)" opacity="0.317">
        <path id="Path_232" data-name="Path 232" d="M74.009,29.6a5.473,5.473,0,0,1-5.455,5.455H57.39A5.473,5.473,0,0,1,51.935,29.6V18.44a5.473,5.473,0,0,1,5.455-5.455H68.555a5.473,5.473,0,0,1,5.455,5.455ZM68.555,10.21H57.39a8.25,8.25,0,0,0-8.23,8.23V29.6a8.25,8.25,0,0,0,8.23,8.23H68.555a8.25,8.25,0,0,0,8.23-8.23V18.44A8.25,8.25,0,0,0,68.555,10.21Z" transform="translate(-49.16 -10.21)"/>
        <path id="Path_233" data-name="Path 233" d="M58.4,23.816a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.4,23.816Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.4,12.3Z" transform="translate(-44.583 -5.633)"/>
        <path id="Path_234" data-name="Path 234" d="M56.913,11.78A1.723,1.723,0,1,0,58.635,13.5,1.715,1.715,0,0,0,56.913,11.78Z" transform="translate(-35.955 -6.772)"/>
      </g>
      <g id="Group_78" data-name="Group 78" transform="translate(14.514 14.514)" opacity="0.327">
        <path id="Path_235" data-name="Path 235" d="M73.979,29.575a5.473,5.473,0,0,1-5.455,5.455H57.36a5.473,5.473,0,0,1-5.455-5.455V18.41a5.473,5.473,0,0,1,5.455-5.455H68.525a5.473,5.473,0,0,1,5.455,5.455ZM68.525,10.18H57.36a8.25,8.25,0,0,0-8.23,8.23V29.575a8.25,8.25,0,0,0,8.23,8.23H68.525a8.25,8.25,0,0,0,8.23-8.23V18.41A8.25,8.25,0,0,0,68.525,10.18Z" transform="translate(-49.13 -10.18)"/>
        <path id="Path_236" data-name="Path 236" d="M58.365,23.786a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.365,23.786Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.365,12.27Z" transform="translate(-44.553 -5.603)"/>
        <path id="Path_237" data-name="Path 237" d="M56.893,11.75a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,56.893,11.75Z" transform="translate(-35.903 -6.742)"/>
      </g>
      <g id="Group_79" data-name="Group 79" transform="translate(14.418 14.418)" opacity="0.337">
        <path id="Path_238" data-name="Path 238" d="M73.949,29.545A5.473,5.473,0,0,1,68.495,35H57.33a5.473,5.473,0,0,1-5.455-5.455V18.38a5.473,5.473,0,0,1,5.455-5.455H68.495a5.473,5.473,0,0,1,5.455,5.455ZM68.495,10.15H57.33a8.25,8.25,0,0,0-8.23,8.23V29.545a8.25,8.25,0,0,0,8.23,8.23H68.495a8.25,8.25,0,0,0,8.23-8.23V18.38A8.25,8.25,0,0,0,68.495,10.15Z" transform="translate(-49.1 -10.15)"/>
        <path id="Path_239" data-name="Path 239" d="M58.335,23.756a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.335,23.756Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.335,12.24Z" transform="translate(-44.523 -5.573)"/>
        <path id="Path_240" data-name="Path 240" d="M56.863,11.72a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,56.863,11.72Z" transform="translate(-35.873 -6.712)"/>
      </g>
      <g id="Group_80" data-name="Group 80" transform="translate(14.323 14.323)" opacity="0.347">
        <path id="Path_241" data-name="Path 241" d="M73.919,29.515a5.473,5.473,0,0,1-5.455,5.455H57.3a5.473,5.473,0,0,1-5.455-5.455V18.35A5.473,5.473,0,0,1,57.3,12.9H68.465a5.473,5.473,0,0,1,5.455,5.455ZM68.465,10.12H57.3a8.25,8.25,0,0,0-8.23,8.23V29.515a8.25,8.25,0,0,0,8.23,8.23H68.465a8.25,8.25,0,0,0,8.23-8.23V18.35A8.23,8.23,0,0,0,68.465,10.12Z" transform="translate(-49.07 -10.12)"/>
        <path id="Path_242" data-name="Path 242" d="M58.305,23.726a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.305,23.726Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.305,12.21Z" transform="translate(-44.493 -5.543)"/>
        <path id="Path_243" data-name="Path 243" d="M56.833,11.69a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,56.833,11.69Z" transform="translate(-35.843 -6.682)"/>
      </g>
      <g id="Group_81" data-name="Group 81" transform="translate(14.227 14.227)" opacity="0.356">
        <path id="Path_244" data-name="Path 244" d="M73.889,29.516a5.473,5.473,0,0,1-5.455,5.455H57.27a5.473,5.473,0,0,1-5.455-5.455V18.352A5.473,5.473,0,0,1,57.27,12.9H68.435a5.473,5.473,0,0,1,5.455,5.455ZM68.435,10.09H57.27a8.25,8.25,0,0,0-8.23,8.23V29.485a8.25,8.25,0,0,0,8.23,8.23H68.435a8.25,8.25,0,0,0,8.23-8.23V18.32A8.23,8.23,0,0,0,68.435,10.09Z" transform="translate(-49.04 -10.09)"/>
        <path id="Path_245" data-name="Path 245" d="M58.275,23.674a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.275,23.674Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.275,12.19Z" transform="translate(-44.463 -5.491)"/>
        <path id="Path_246" data-name="Path 246" d="M56.8,11.67a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,56.8,11.67Z" transform="translate(-35.813 -6.63)"/>
      </g>
      <g id="Group_82" data-name="Group 82" transform="translate(14.163 14.163)" opacity="0.366">
        <path id="Path_247" data-name="Path 247" d="M73.837,29.465a5.473,5.473,0,0,1-5.455,5.455H57.218a5.473,5.473,0,0,1-5.455-5.455V18.3a5.473,5.473,0,0,1,5.455-5.455H68.383A5.473,5.473,0,0,1,73.837,18.3ZM68.415,10.07H57.25a8.25,8.25,0,0,0-8.23,8.23V29.465a8.25,8.25,0,0,0,8.23,8.23H68.415a8.25,8.25,0,0,0,8.23-8.23V18.3A8.229,8.229,0,0,0,68.415,10.07Z" transform="translate(-49.02 -10.07)"/>
        <path id="Path_248" data-name="Path 248" d="M58.245,23.676a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.245,23.676Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.245,12.16Z" transform="translate(-44.465 -5.493)"/>
        <path id="Path_249" data-name="Path 249" d="M56.773,11.64A1.723,1.723,0,1,0,58.5,13.363,1.715,1.715,0,0,0,56.773,11.64Z" transform="translate(-35.815 -6.632)"/>
      </g>
      <g id="Group_83" data-name="Group 83" transform="translate(14.067 14.067)" opacity="0.376">
        <path id="Path_250" data-name="Path 250" d="M73.839,29.435a5.473,5.473,0,0,1-5.455,5.455H57.22a5.473,5.473,0,0,1-5.455-5.455V18.27a5.473,5.473,0,0,1,5.455-5.455H68.385a5.473,5.473,0,0,1,5.455,5.455ZM68.385,10.04H57.22a8.25,8.25,0,0,0-8.23,8.23V29.435a8.25,8.25,0,0,0,8.23,8.23H68.385a8.25,8.25,0,0,0,8.23-8.23V18.27A8.229,8.229,0,0,0,68.385,10.04Z" transform="translate(-48.99 -10.04)"/>
        <path id="Path_251" data-name="Path 251" d="M58.225,23.646a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,58.225,23.646Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.225,12.13Z" transform="translate(-44.413 -5.463)"/>
        <path id="Path_252" data-name="Path 252" d="M56.743,11.61a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.743,11.61Z" transform="translate(-35.785 -6.602)"/>
      </g>
      <g id="Group_84" data-name="Group 84" transform="translate(13.972 13.972)" opacity="0.386">
        <path id="Path_253" data-name="Path 253" d="M73.809,29.4a5.473,5.473,0,0,1-5.455,5.455H57.19A5.473,5.473,0,0,1,51.735,29.4V18.24a5.473,5.473,0,0,1,5.455-5.455H68.355a5.473,5.473,0,0,1,5.455,5.455ZM68.355,10.01H57.19a8.25,8.25,0,0,0-8.23,8.23V29.4a8.25,8.25,0,0,0,8.23,8.23H68.355a8.25,8.25,0,0,0,8.23-8.23V18.24A8.25,8.25,0,0,0,68.355,10.01Z" transform="translate(-48.96 -10.01)"/>
        <path id="Path_254" data-name="Path 254" d="M58.2,23.616a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.2,23.616Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.2,12.1Z" transform="translate(-44.383 -5.433)"/>
        <path id="Path_255" data-name="Path 255" d="M56.713,11.58A1.723,1.723,0,1,0,58.435,13.3,1.715,1.715,0,0,0,56.713,11.58Z" transform="translate(-35.755 -6.572)"/>
      </g>
      <g id="Group_85" data-name="Group 85" transform="translate(13.876 13.876)" opacity="0.396">
        <path id="Path_256" data-name="Path 256" d="M73.779,29.375a5.473,5.473,0,0,1-5.455,5.455H57.16a5.473,5.473,0,0,1-5.455-5.455V18.21a5.473,5.473,0,0,1,5.455-5.455H68.325a5.473,5.473,0,0,1,5.455,5.455ZM68.325,9.98H57.16a8.25,8.25,0,0,0-8.23,8.23V29.375a8.25,8.25,0,0,0,8.23,8.23H68.325a8.25,8.25,0,0,0,8.23-8.23V18.21A8.25,8.25,0,0,0,68.325,9.98Z" transform="translate(-48.93 -9.98)"/>
        <path id="Path_257" data-name="Path 257" d="M58.165,23.586a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.165,23.586Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.165,12.07Z" transform="translate(-44.353 -5.403)"/>
        <path id="Path_258" data-name="Path 258" d="M56.683,11.55a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.683,11.55Z" transform="translate(-35.725 -6.542)"/>
      </g>
      <g id="Group_86" data-name="Group 86" transform="translate(13.78 13.78)" opacity="0.406">
        <path id="Path_259" data-name="Path 259" d="M73.749,29.345A5.473,5.473,0,0,1,68.295,34.8H57.13a5.473,5.473,0,0,1-5.455-5.455V18.18a5.473,5.473,0,0,1,5.455-5.455H68.295a5.473,5.473,0,0,1,5.455,5.455ZM68.295,9.95H57.13a8.25,8.25,0,0,0-8.23,8.23V29.345a8.25,8.25,0,0,0,8.23,8.23H68.295a8.25,8.25,0,0,0,8.23-8.23V18.18A8.25,8.25,0,0,0,68.295,9.95Z" transform="translate(-48.9 -9.95)"/>
        <path id="Path_260" data-name="Path 260" d="M58.135,23.556a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.135,23.556Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.135,12.04Z" transform="translate(-44.323 -5.373)"/>
        <path id="Path_261" data-name="Path 261" d="M56.653,11.52a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.653,11.52Z" transform="translate(-35.695 -6.512)"/>
      </g>
      <g id="Group_87" data-name="Group 87" transform="translate(13.685 13.685)" opacity="0.416">
        <path id="Path_262" data-name="Path 262" d="M73.719,29.315a5.473,5.473,0,0,1-5.455,5.455H57.1a5.473,5.473,0,0,1-5.455-5.455V18.15A5.473,5.473,0,0,1,57.1,12.7H68.265a5.473,5.473,0,0,1,5.455,5.455ZM68.265,9.92H57.1a8.25,8.25,0,0,0-8.23,8.23V29.315a8.25,8.25,0,0,0,8.23,8.23H68.265a8.25,8.25,0,0,0,8.23-8.23V18.15A8.25,8.25,0,0,0,68.265,9.92Z" transform="translate(-48.87 -9.92)"/>
        <path id="Path_263" data-name="Path 263" d="M58.105,23.526a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.105,23.526Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.105,12.01Z" transform="translate(-44.293 -5.343)"/>
        <path id="Path_264" data-name="Path 264" d="M56.623,11.49a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.623,11.49Z" transform="translate(-35.665 -6.482)"/>
      </g>
      <g id="Group_88" data-name="Group 88" transform="translate(13.589 13.589)" opacity="0.426">
        <path id="Path_265" data-name="Path 265" d="M73.689,29.285a5.473,5.473,0,0,1-5.455,5.455H57.07a5.473,5.473,0,0,1-5.455-5.455V18.12a5.473,5.473,0,0,1,5.455-5.455H68.235a5.473,5.473,0,0,1,5.455,5.455ZM68.235,9.89H57.07a8.25,8.25,0,0,0-8.23,8.23V29.285a8.25,8.25,0,0,0,8.23,8.23H68.235a8.25,8.25,0,0,0,8.23-8.23V18.12A8.25,8.25,0,0,0,68.235,9.89Z" transform="translate(-48.84 -9.89)"/>
        <path id="Path_266" data-name="Path 266" d="M58.075,23.5a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.075,23.5Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,58.075,11.98Z" transform="translate(-44.263 -5.313)"/>
        <path id="Path_267" data-name="Path 267" d="M56.6,11.46a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,56.6,11.46Z" transform="translate(-35.613 -6.452)"/>
      </g>
      <g id="Group_89" data-name="Group 89" transform="translate(13.493 13.493)" opacity="0.436">
        <path id="Path_268" data-name="Path 268" d="M73.659,29.255A5.473,5.473,0,0,1,68.2,34.709H57.04a5.473,5.473,0,0,1-5.455-5.455V18.09a5.473,5.473,0,0,1,5.455-5.455H68.2a5.473,5.473,0,0,1,5.455,5.455ZM68.2,9.86H57.04a8.25,8.25,0,0,0-8.23,8.23V29.255a8.25,8.25,0,0,0,8.23,8.23H68.2a8.25,8.25,0,0,0,8.23-8.23V18.09A8.25,8.25,0,0,0,68.2,9.86Z" transform="translate(-48.81 -9.86)"/>
        <path id="Path_269" data-name="Path 269" d="M58.045,23.466a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.045,23.466Zm0-11.516A7.145,7.145,0,1,0,65.191,19.1,7.154,7.154,0,0,0,58.045,11.95Z" transform="translate(-44.233 -5.283)"/>
        <path id="Path_270" data-name="Path 270" d="M56.573,11.43A1.723,1.723,0,1,0,58.3,13.153,1.757,1.757,0,0,0,56.573,11.43Z" transform="translate(-35.583 -6.422)"/>
      </g>
      <g id="Group_90" data-name="Group 90" transform="translate(13.398 13.398)" opacity="0.445">
        <path id="Path_271" data-name="Path 271" d="M73.629,29.225a5.473,5.473,0,0,1-5.455,5.455H57.01a5.473,5.473,0,0,1-5.455-5.455V18.06a5.473,5.473,0,0,1,5.455-5.455H68.175a5.473,5.473,0,0,1,5.455,5.455ZM68.175,9.83H57.01a8.25,8.25,0,0,0-8.23,8.23V29.225a8.25,8.25,0,0,0,8.23,8.23H68.175a8.25,8.25,0,0,0,8.23-8.23V18.06A8.23,8.23,0,0,0,68.175,9.83Z" transform="translate(-48.78 -9.83)"/>
        <path id="Path_272" data-name="Path 272" d="M58.015,23.436a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,58.015,23.436Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,58.015,11.92Z" transform="translate(-44.203 -5.253)"/>
        <path id="Path_273" data-name="Path 273" d="M56.543,11.4a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,56.543,11.4Z" transform="translate(-35.553 -6.392)"/>
      </g>
      <g id="Group_91" data-name="Group 91" transform="translate(13.302 13.302)" opacity="0.455">
        <path id="Path_274" data-name="Path 274" d="M73.6,29.226a5.473,5.473,0,0,1-5.455,5.455H56.98a5.473,5.473,0,0,1-5.455-5.455V18.062a5.473,5.473,0,0,1,5.455-5.455H68.145A5.473,5.473,0,0,1,73.6,18.062ZM68.145,9.8H56.98a8.25,8.25,0,0,0-8.23,8.23V29.195a8.25,8.25,0,0,0,8.23,8.23H68.145a8.25,8.25,0,0,0,8.23-8.23V18.03A8.23,8.23,0,0,0,68.145,9.8Z" transform="translate(-48.75 -9.8)"/>
        <path id="Path_275" data-name="Path 275" d="M57.985,23.384a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.985,23.384Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.985,11.9Z" transform="translate(-44.173 -5.201)"/>
        <path id="Path_276" data-name="Path 276" d="M56.513,11.38A1.723,1.723,0,1,0,58.235,13.1,1.736,1.736,0,0,0,56.513,11.38Z" transform="translate(-35.523 -6.34)"/>
      </g>
      <g id="Group_92" data-name="Group 92" transform="translate(13.238 13.238)" opacity="0.465">
        <path id="Path_277" data-name="Path 277" d="M73.547,29.175a5.473,5.473,0,0,1-5.455,5.455H56.928a5.473,5.473,0,0,1-5.455-5.455V18.01a5.473,5.473,0,0,1,5.455-5.455H68.093a5.473,5.473,0,0,1,5.455,5.455ZM68.125,9.78H56.96a8.25,8.25,0,0,0-8.23,8.23V29.175a8.25,8.25,0,0,0,8.23,8.23H68.125a8.25,8.25,0,0,0,8.23-8.23V18.01A8.23,8.23,0,0,0,68.125,9.78Z" transform="translate(-48.73 -9.78)"/>
        <path id="Path_278" data-name="Path 278" d="M57.955,23.386a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.955,23.386Zm0-11.516A7.145,7.145,0,1,0,65.1,19.015,7.154,7.154,0,0,0,57.955,11.87Z" transform="translate(-44.175 -5.203)"/>
        <path id="Path_279" data-name="Path 279" d="M56.483,11.35a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.483,11.35Z" transform="translate(-35.525 -6.342)"/>
      </g>
      <g id="Group_93" data-name="Group 93" transform="translate(13.142 13.142)" opacity="0.475">
        <path id="Path_280" data-name="Path 280" d="M73.549,29.145A5.473,5.473,0,0,1,68.095,34.6H56.93a5.473,5.473,0,0,1-5.455-5.455V17.98a5.473,5.473,0,0,1,5.455-5.455H68.095a5.473,5.473,0,0,1,5.455,5.455ZM68.095,9.75H56.93a8.25,8.25,0,0,0-8.23,8.23V29.145a8.25,8.25,0,0,0,8.23,8.23H68.095a8.25,8.25,0,0,0,8.23-8.23V17.98A8.229,8.229,0,0,0,68.095,9.75Z" transform="translate(-48.7 -9.75)"/>
        <path id="Path_281" data-name="Path 281" d="M57.935,23.356a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,57.935,23.356Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,57.935,11.84Z" transform="translate(-44.123 -5.173)"/>
        <path id="Path_282" data-name="Path 282" d="M56.453,11.32a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.453,11.32Z" transform="translate(-35.495 -6.312)"/>
      </g>
      <g id="Group_94" data-name="Group 94" transform="translate(13.047 13.047)" opacity="0.485">
        <path id="Path_283" data-name="Path 283" d="M73.519,29.115a5.473,5.473,0,0,1-5.455,5.455H56.9a5.473,5.473,0,0,1-5.455-5.455V17.95A5.473,5.473,0,0,1,56.9,12.5H68.065a5.473,5.473,0,0,1,5.455,5.455ZM68.065,9.72H56.9a8.25,8.25,0,0,0-8.23,8.23V29.115a8.25,8.25,0,0,0,8.23,8.23H68.065a8.25,8.25,0,0,0,8.23-8.23V17.95A8.25,8.25,0,0,0,68.065,9.72Z" transform="translate(-48.67 -9.72)"/>
        <path id="Path_284" data-name="Path 284" d="M57.905,23.326a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.905,23.326Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.905,11.81Z" transform="translate(-44.093 -5.143)"/>
        <path id="Path_285" data-name="Path 285" d="M56.423,11.29a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.423,11.29Z" transform="translate(-35.465 -6.282)"/>
      </g>
      <g id="Group_95" data-name="Group 95" transform="translate(12.951 12.951)" opacity="0.495">
        <path id="Path_286" data-name="Path 286" d="M73.489,29.085a5.473,5.473,0,0,1-5.455,5.455H56.87a5.473,5.473,0,0,1-5.455-5.455V17.92a5.473,5.473,0,0,1,5.455-5.455H68.035a5.473,5.473,0,0,1,5.455,5.455ZM68.035,9.69H56.87a8.25,8.25,0,0,0-8.23,8.23V29.085a8.25,8.25,0,0,0,8.23,8.23H68.035a8.25,8.25,0,0,0,8.23-8.23V17.92A8.25,8.25,0,0,0,68.035,9.69Z" transform="translate(-48.64 -9.69)"/>
        <path id="Path_287" data-name="Path 287" d="M57.875,23.3a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.875,23.3Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.875,11.78Z" transform="translate(-44.063 -5.113)"/>
        <path id="Path_288" data-name="Path 288" d="M56.393,11.26a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.393,11.26Z" transform="translate(-35.435 -6.252)"/>
      </g>
      <g id="Group_96" data-name="Group 96" transform="translate(12.855 12.855)" opacity="0.505">
        <path id="Path_289" data-name="Path 289" d="M73.459,29.055A5.473,5.473,0,0,1,68,34.509H56.84a5.473,5.473,0,0,1-5.455-5.455V17.89a5.473,5.473,0,0,1,5.455-5.455H68a5.473,5.473,0,0,1,5.455,5.455ZM68,9.66H56.84a8.25,8.25,0,0,0-8.23,8.23V29.055a8.25,8.25,0,0,0,8.23,8.23H68a8.25,8.25,0,0,0,8.23-8.23V17.89A8.25,8.25,0,0,0,68,9.66Z" transform="translate(-48.61 -9.66)"/>
        <path id="Path_290" data-name="Path 290" d="M57.845,23.266a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.845,23.266Zm0-11.516A7.145,7.145,0,1,0,64.991,18.9,7.134,7.134,0,0,0,57.845,11.75Z" transform="translate(-44.033 -5.083)"/>
        <path id="Path_291" data-name="Path 291" d="M56.363,11.23a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.363,11.23Z" transform="translate(-35.405 -6.222)"/>
      </g>
      <g id="Group_97" data-name="Group 97" transform="translate(12.76 12.76)" opacity="0.515">
        <path id="Path_292" data-name="Path 292" d="M73.429,29.025a5.473,5.473,0,0,1-5.455,5.455H56.81a5.473,5.473,0,0,1-5.455-5.455V17.86a5.473,5.473,0,0,1,5.455-5.455H67.975a5.473,5.473,0,0,1,5.455,5.455ZM67.975,9.63H56.81a8.25,8.25,0,0,0-8.23,8.23V29.025a8.25,8.25,0,0,0,8.23,8.23H67.975a8.25,8.25,0,0,0,8.23-8.23V17.86A8.25,8.25,0,0,0,67.975,9.63Z" transform="translate(-48.58 -9.63)"/>
        <path id="Path_293" data-name="Path 293" d="M57.815,23.236a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.815,23.236Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.815,11.72Z" transform="translate(-44.003 -5.053)"/>
        <path id="Path_294" data-name="Path 294" d="M56.333,11.2a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.333,11.2Z" transform="translate(-35.375 -6.192)"/>
      </g>
      <g id="Group_98" data-name="Group 98" transform="translate(12.664 12.664)" opacity="0.525">
        <path id="Path_295" data-name="Path 295" d="M73.4,28.995a5.473,5.473,0,0,1-5.455,5.455H56.78a5.473,5.473,0,0,1-5.455-5.455V17.83a5.473,5.473,0,0,1,5.455-5.455H67.945A5.473,5.473,0,0,1,73.4,17.83ZM67.945,9.6H56.78a8.25,8.25,0,0,0-8.23,8.23V28.995a8.25,8.25,0,0,0,8.23,8.23H67.945a8.25,8.25,0,0,0,8.23-8.23V17.83A8.25,8.25,0,0,0,67.945,9.6Z" transform="translate(-48.55 -9.6)"/>
        <path id="Path_296" data-name="Path 296" d="M57.785,23.206a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.785,23.206Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.785,11.69Z" transform="translate(-43.973 -5.023)"/>
        <circle id="Ellipse_32" data-name="Ellipse 32" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_99" data-name="Group 99" transform="translate(12.568 12.568)" opacity="0.535">
        <path id="Path_297" data-name="Path 297" d="M73.369,28.965a5.473,5.473,0,0,1-5.455,5.455H56.75A5.473,5.473,0,0,1,51.3,28.965V17.8a5.473,5.473,0,0,1,5.455-5.455H67.915A5.473,5.473,0,0,1,73.369,17.8ZM67.915,9.57H56.75a8.25,8.25,0,0,0-8.23,8.23V28.965a8.25,8.25,0,0,0,8.23,8.23H67.915a8.25,8.25,0,0,0,8.23-8.23V17.8A8.229,8.229,0,0,0,67.915,9.57Z" transform="translate(-48.52 -9.57)"/>
        <path id="Path_298" data-name="Path 298" d="M57.755,23.176a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.755,23.176Zm0-11.516A7.145,7.145,0,1,0,64.9,18.805,7.134,7.134,0,0,0,57.755,11.66Z" transform="translate(-43.943 -4.993)"/>
        <circle id="Ellipse_33" data-name="Ellipse 33" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_100" data-name="Group 100" transform="translate(12.472 12.472)" opacity="0.545">
        <path id="Path_299" data-name="Path 299" d="M73.339,28.935a5.473,5.473,0,0,1-5.455,5.455H56.72a5.473,5.473,0,0,1-5.455-5.455V17.77a5.473,5.473,0,0,1,5.455-5.455H67.885a5.473,5.473,0,0,1,5.455,5.455ZM67.885,9.54H56.72a8.25,8.25,0,0,0-8.23,8.23V28.935a8.25,8.25,0,0,0,8.23,8.23H67.885a8.25,8.25,0,0,0,8.23-8.23V17.77A8.229,8.229,0,0,0,67.885,9.54Z" transform="translate(-48.49 -9.54)"/>
        <path id="Path_300" data-name="Path 300" d="M57.725,23.146a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.725,23.146Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.725,11.63Z" transform="translate(-43.913 -4.963)"/>
        <circle id="Ellipse_34" data-name="Ellipse 34" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_101" data-name="Group 101" transform="translate(12.377 12.377)" opacity="0.554">
        <path id="Path_301" data-name="Path 301" d="M73.309,28.936a5.473,5.473,0,0,1-5.455,5.455H56.69a5.473,5.473,0,0,1-5.455-5.455V17.772a5.473,5.473,0,0,1,5.455-5.455H67.855a5.473,5.473,0,0,1,5.455,5.455ZM67.855,9.51H56.69a8.25,8.25,0,0,0-8.23,8.23V28.9a8.25,8.25,0,0,0,8.23,8.23H67.855a8.25,8.25,0,0,0,8.23-8.23V17.74A8.229,8.229,0,0,0,67.855,9.51Z" transform="translate(-48.46 -9.51)"/>
        <path id="Path_302" data-name="Path 302" d="M57.7,23.094a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.7,23.094Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.7,11.61Z" transform="translate(-43.883 -4.911)"/>
        <circle id="Ellipse_35" data-name="Ellipse 35" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_102" data-name="Group 102" transform="translate(12.313 12.313)" opacity="0.564">
        <path id="Path_303" data-name="Path 303" d="M73.257,28.885A5.473,5.473,0,0,1,67.8,34.339H56.638a5.473,5.473,0,0,1-5.455-5.455V17.72a5.473,5.473,0,0,1,5.455-5.455H67.8a5.473,5.473,0,0,1,5.455,5.455ZM67.835,9.49H56.67a8.25,8.25,0,0,0-8.23,8.23V28.885a8.25,8.25,0,0,0,8.23,8.23H67.835a8.25,8.25,0,0,0,8.23-8.23V17.72A8.23,8.23,0,0,0,67.835,9.49Z" transform="translate(-48.44 -9.49)"/>
        <path id="Path_304" data-name="Path 304" d="M57.665,23.1a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.665,23.1Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.665,11.58Z" transform="translate(-43.885 -4.913)"/>
        <circle id="Ellipse_36" data-name="Ellipse 36" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_103" data-name="Group 103" transform="translate(12.217 12.217)" opacity="0.574">
        <path id="Path_305" data-name="Path 305" d="M73.259,28.855A5.473,5.473,0,0,1,67.8,34.309H56.64a5.473,5.473,0,0,1-5.455-5.455V17.69a5.473,5.473,0,0,1,5.455-5.455H67.8a5.473,5.473,0,0,1,5.455,5.455ZM67.8,9.46H56.64a8.25,8.25,0,0,0-8.23,8.23V28.855a8.25,8.25,0,0,0,8.23,8.23H67.8a8.25,8.25,0,0,0,8.23-8.23V17.69A8.23,8.23,0,0,0,67.8,9.46Z" transform="translate(-48.41 -9.46)"/>
        <path id="Path_306" data-name="Path 306" d="M57.645,23.066a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,57.645,23.066Zm0-11.516A7.145,7.145,0,1,0,64.791,18.7,7.134,7.134,0,0,0,57.645,11.55Z" transform="translate(-43.833 -4.883)"/>
        <circle id="Ellipse_37" data-name="Ellipse 37" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_104" data-name="Group 104" transform="translate(12.122 12.122)" opacity="0.584">
        <path id="Path_307" data-name="Path 307" d="M73.229,28.825a5.473,5.473,0,0,1-5.455,5.455H56.61a5.473,5.473,0,0,1-5.455-5.455V17.66a5.473,5.473,0,0,1,5.455-5.455H67.775a5.473,5.473,0,0,1,5.455,5.455ZM67.775,9.43H56.61a8.25,8.25,0,0,0-8.23,8.23V28.825a8.25,8.25,0,0,0,8.23,8.23H67.775A8.25,8.25,0,0,0,76,28.825V17.66A8.25,8.25,0,0,0,67.775,9.43Z" transform="translate(-48.38 -9.43)"/>
        <path id="Path_308" data-name="Path 308" d="M57.615,23.036a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.615,23.036Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.615,11.52Z" transform="translate(-43.803 -4.853)"/>
        <circle id="Ellipse_38" data-name="Ellipse 38" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
      <g id="Group_105" data-name="Group 105" transform="translate(12.026 12.026)" opacity="0.594">
        <path id="Path_309" data-name="Path 309" d="M73.2,28.795a5.473,5.473,0,0,1-5.455,5.455H56.58a5.473,5.473,0,0,1-5.455-5.455V17.63a5.473,5.473,0,0,1,5.455-5.455H67.745A5.473,5.473,0,0,1,73.2,17.63ZM67.745,9.4H56.58a8.25,8.25,0,0,0-8.23,8.23V28.795a8.25,8.25,0,0,0,8.23,8.23H67.745a8.25,8.25,0,0,0,8.23-8.23V17.63A8.25,8.25,0,0,0,67.745,9.4Z" transform="translate(-48.35 -9.4)"/>
        <path id="Path_310" data-name="Path 310" d="M57.585,23.006a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.585,23.006Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.585,11.49Z" transform="translate(-43.773 -4.823)"/>
        <circle id="Ellipse_39" data-name="Ellipse 39" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
      <g id="Group_106" data-name="Group 106" transform="translate(11.93 11.93)" opacity="0.604">
        <path id="Path_311" data-name="Path 311" d="M73.169,28.765a5.473,5.473,0,0,1-5.455,5.455H56.55A5.473,5.473,0,0,1,51.1,28.765V17.6a5.473,5.473,0,0,1,5.455-5.455H67.715A5.473,5.473,0,0,1,73.169,17.6ZM67.715,9.37H56.55a8.25,8.25,0,0,0-8.23,8.23V28.765a8.25,8.25,0,0,0,8.23,8.23H67.715a8.25,8.25,0,0,0,8.23-8.23V17.6A8.25,8.25,0,0,0,67.715,9.37Z" transform="translate(-48.32 -9.37)"/>
        <path id="Path_312" data-name="Path 312" d="M57.555,22.976a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.555,22.976Zm0-11.516A7.145,7.145,0,1,0,64.7,18.605,7.134,7.134,0,0,0,57.555,11.46Z" transform="translate(-43.743 -4.793)"/>
        <path id="Path_313" data-name="Path 313" d="M56.073,10.94A1.723,1.723,0,1,0,57.8,12.663,1.715,1.715,0,0,0,56.073,10.94Z" transform="translate(-35.115 -5.932)"/>
      </g>
      <g id="Group_107" data-name="Group 107" transform="translate(11.835 11.835)" opacity="0.614">
        <path id="Path_314" data-name="Path 314" d="M73.139,28.735a5.473,5.473,0,0,1-5.455,5.455H56.52a5.473,5.473,0,0,1-5.455-5.455V17.57a5.473,5.473,0,0,1,5.455-5.455H67.685a5.473,5.473,0,0,1,5.455,5.455ZM67.685,9.34H56.52a8.25,8.25,0,0,0-8.23,8.23V28.735a8.25,8.25,0,0,0,8.23,8.23H67.685a8.25,8.25,0,0,0,8.23-8.23V17.57A8.25,8.25,0,0,0,67.685,9.34Z" transform="translate(-48.29 -9.34)"/>
        <path id="Path_315" data-name="Path 315" d="M57.525,22.946a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.525,22.946Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.525,11.43Z" transform="translate(-43.713 -4.763)"/>
        <path id="Path_316" data-name="Path 316" d="M56.043,10.91a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,56.043,10.91Z" transform="translate(-35.085 -5.902)"/>
      </g>
      <g id="Group_108" data-name="Group 108" transform="translate(11.739 11.739)" opacity="0.624">
        <path id="Path_317" data-name="Path 317" d="M73.109,28.7a5.473,5.473,0,0,1-5.455,5.455H56.49A5.473,5.473,0,0,1,51.035,28.7V17.54a5.473,5.473,0,0,1,5.455-5.455H67.655a5.473,5.473,0,0,1,5.455,5.455ZM67.655,9.31H56.49a8.25,8.25,0,0,0-8.23,8.23V28.7a8.25,8.25,0,0,0,8.23,8.23H67.655a8.25,8.25,0,0,0,8.23-8.23V17.54A8.25,8.25,0,0,0,67.655,9.31Z" transform="translate(-48.26 -9.31)"/>
        <path id="Path_318" data-name="Path 318" d="M57.5,22.916a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.5,22.916Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.5,11.4Z" transform="translate(-43.683 -4.733)"/>
        <path id="Path_319" data-name="Path 319" d="M56.023,10.88A1.723,1.723,0,1,0,57.745,12.6,1.757,1.757,0,0,0,56.023,10.88Z" transform="translate(-35.033 -5.872)"/>
      </g>
      <g id="Group_109" data-name="Group 109" transform="translate(11.643 11.643)" opacity="0.634">
        <path id="Path_320" data-name="Path 320" d="M73.079,28.675a5.473,5.473,0,0,1-5.455,5.455H56.46a5.473,5.473,0,0,1-5.455-5.455V17.51a5.473,5.473,0,0,1,5.455-5.455H67.625a5.473,5.473,0,0,1,5.455,5.455ZM67.625,9.28H56.46a8.25,8.25,0,0,0-8.23,8.23V28.675a8.25,8.25,0,0,0,8.23,8.23H67.625a8.25,8.25,0,0,0,8.23-8.23V17.51A8.23,8.23,0,0,0,67.625,9.28Z" transform="translate(-48.23 -9.28)"/>
        <path id="Path_321" data-name="Path 321" d="M57.465,22.886a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.465,22.886Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,57.465,11.37Z" transform="translate(-43.653 -4.703)"/>
        <path id="Path_322" data-name="Path 322" d="M55.993,10.85a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.993,10.85Z" transform="translate(-35.003 -5.842)"/>
      </g>
      <g id="Group_110" data-name="Group 110" transform="translate(11.547 11.547)" opacity="0.644">
        <path id="Path_323" data-name="Path 323" d="M73.049,28.645A5.473,5.473,0,0,1,67.595,34.1H56.43a5.473,5.473,0,0,1-5.455-5.455V17.48a5.473,5.473,0,0,1,5.455-5.455H67.595a5.473,5.473,0,0,1,5.455,5.455ZM67.595,9.25H56.43a8.25,8.25,0,0,0-8.23,8.23V28.645a8.25,8.25,0,0,0,8.23,8.23H67.595a8.25,8.25,0,0,0,8.23-8.23V17.48A8.229,8.229,0,0,0,67.595,9.25Z" transform="translate(-48.2 -9.25)"/>
        <path id="Path_324" data-name="Path 324" d="M57.435,22.856a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.435,22.856Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,57.435,11.34Z" transform="translate(-43.623 -4.673)"/>
        <path id="Path_325" data-name="Path 325" d="M55.963,10.82a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.963,10.82Z" transform="translate(-34.973 -5.812)"/>
      </g>
      <g id="Group_111" data-name="Group 111" transform="translate(11.452 11.452)" opacity="0.654">
        <path id="Path_326" data-name="Path 326" d="M73.019,28.646A5.473,5.473,0,0,1,67.565,34.1H56.4a5.473,5.473,0,0,1-5.455-5.455V17.482A5.473,5.473,0,0,1,56.4,12.027H67.565a5.473,5.473,0,0,1,5.455,5.455ZM67.565,9.22H56.4a8.25,8.25,0,0,0-8.23,8.23V28.615a8.25,8.25,0,0,0,8.23,8.23H67.565a8.25,8.25,0,0,0,8.23-8.23V17.45A8.229,8.229,0,0,0,67.565,9.22Z" transform="translate(-48.17 -9.22)"/>
        <path id="Path_327" data-name="Path 327" d="M57.405,22.8a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.405,22.8Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,57.405,11.32Z" transform="translate(-43.593 -4.621)"/>
        <path id="Path_328" data-name="Path 328" d="M55.933,10.8a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,55.933,10.8Z" transform="translate(-34.943 -5.76)"/>
      </g>
      <g id="Group_112" data-name="Group 112" transform="translate(11.388 11.388)" opacity="0.663">
        <path id="Path_329" data-name="Path 329" d="M72.967,28.595a5.473,5.473,0,0,1-5.455,5.455H56.348a5.473,5.473,0,0,1-5.455-5.455V17.43a5.473,5.473,0,0,1,5.455-5.455H67.513a5.473,5.473,0,0,1,5.455,5.455ZM67.545,9.2H56.38a8.25,8.25,0,0,0-8.23,8.23V28.595a8.25,8.25,0,0,0,8.23,8.23H67.545a8.25,8.25,0,0,0,8.23-8.23V17.43A8.229,8.229,0,0,0,67.545,9.2Z" transform="translate(-48.15 -9.2)"/>
        <path id="Path_330" data-name="Path 330" d="M57.375,22.806a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.375,22.806Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.375,11.29Z" transform="translate(-43.595 -4.623)"/>
        <path id="Path_331" data-name="Path 331" d="M55.9,10.77a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.9,10.77Z" transform="translate(-34.945 -5.762)"/>
      </g>
      <g id="Group_113" data-name="Group 113" transform="translate(11.292 11.292)" opacity="0.673">
        <path id="Path_332" data-name="Path 332" d="M72.969,28.565a5.473,5.473,0,0,1-5.455,5.455H56.35A5.473,5.473,0,0,1,50.9,28.565V17.4a5.473,5.473,0,0,1,5.455-5.455H67.515A5.473,5.473,0,0,1,72.969,17.4ZM67.515,9.17H56.35a8.25,8.25,0,0,0-8.23,8.23V28.565a8.25,8.25,0,0,0,8.23,8.23H67.515a8.25,8.25,0,0,0,8.23-8.23V17.4A8.23,8.23,0,0,0,67.515,9.17Z" transform="translate(-48.12 -9.17)"/>
        <path id="Path_333" data-name="Path 333" d="M57.355,22.776a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,57.355,22.776Zm0-11.516A7.145,7.145,0,1,0,64.5,18.405,7.154,7.154,0,0,0,57.355,11.26Z" transform="translate(-43.543 -4.593)"/>
        <path id="Path_334" data-name="Path 334" d="M55.873,10.74A1.723,1.723,0,1,0,57.6,12.463,1.715,1.715,0,0,0,55.873,10.74Z" transform="translate(-34.915 -5.732)"/>
      </g>
      <g id="Group_114" data-name="Group 114" transform="translate(11.197 11.197)" opacity="0.683">
        <path id="Path_335" data-name="Path 335" d="M72.939,28.535a5.473,5.473,0,0,1-5.455,5.455H56.32a5.473,5.473,0,0,1-5.455-5.455V17.37a5.473,5.473,0,0,1,5.455-5.455H67.485a5.473,5.473,0,0,1,5.455,5.455ZM67.485,9.14H56.32a8.25,8.25,0,0,0-8.23,8.23V28.535a8.25,8.25,0,0,0,8.23,8.23H67.485a8.25,8.25,0,0,0,8.23-8.23V17.37A8.25,8.25,0,0,0,67.485,9.14Z" transform="translate(-48.09 -9.14)"/>
        <path id="Path_336" data-name="Path 336" d="M57.325,22.746a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.325,22.746Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,57.325,11.23Z" transform="translate(-43.513 -4.563)"/>
        <path id="Path_337" data-name="Path 337" d="M55.843,10.71a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.843,10.71Z" transform="translate(-34.885 -5.702)"/>
      </g>
      <g id="Group_115" data-name="Group 115" transform="translate(11.101 11.101)" opacity="0.693">
        <path id="Path_338" data-name="Path 338" d="M72.909,28.5a5.473,5.473,0,0,1-5.455,5.455H56.29A5.473,5.473,0,0,1,50.835,28.5V17.34a5.473,5.473,0,0,1,5.455-5.455H67.455a5.473,5.473,0,0,1,5.455,5.455ZM67.455,9.11H56.29a8.25,8.25,0,0,0-8.23,8.23V28.5a8.25,8.25,0,0,0,8.23,8.23H67.455a8.25,8.25,0,0,0,8.23-8.23V17.34A8.25,8.25,0,0,0,67.455,9.11Z" transform="translate(-48.06 -9.11)"/>
        <path id="Path_339" data-name="Path 339" d="M57.3,22.716a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.3,22.716Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.3,11.2Z" transform="translate(-43.483 -4.533)"/>
        <path id="Path_340" data-name="Path 340" d="M55.813,10.68A1.723,1.723,0,1,0,57.535,12.4,1.715,1.715,0,0,0,55.813,10.68Z" transform="translate(-34.855 -5.672)"/>
      </g>
      <g id="Group_116" data-name="Group 116" transform="translate(11.005 11.005)" opacity="0.703">
        <path id="Path_341" data-name="Path 341" d="M72.879,28.475a5.473,5.473,0,0,1-5.455,5.455H56.26a5.473,5.473,0,0,1-5.455-5.455V17.31a5.473,5.473,0,0,1,5.455-5.455H67.425a5.473,5.473,0,0,1,5.455,5.455ZM67.425,9.08H56.26a8.25,8.25,0,0,0-8.23,8.23V28.475a8.25,8.25,0,0,0,8.23,8.23H67.425a8.25,8.25,0,0,0,8.23-8.23V17.31A8.25,8.25,0,0,0,67.425,9.08Z" transform="translate(-48.03 -9.08)"/>
        <path id="Path_342" data-name="Path 342" d="M57.265,22.686a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.265,22.686Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.265,11.17Z" transform="translate(-43.453 -4.503)"/>
        <path id="Path_343" data-name="Path 343" d="M55.783,10.65a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.783,10.65Z" transform="translate(-34.825 -5.642)"/>
      </g>
      <g id="Group_117" data-name="Group 117" transform="translate(10.909 10.909)" opacity="0.713">
        <path id="Path_344" data-name="Path 344" d="M72.849,28.445A5.473,5.473,0,0,1,67.395,33.9H56.23a5.473,5.473,0,0,1-5.455-5.455V17.28a5.473,5.473,0,0,1,5.455-5.455H67.395a5.473,5.473,0,0,1,5.455,5.455ZM67.395,9.05H56.23A8.25,8.25,0,0,0,48,17.28V28.445a8.25,8.25,0,0,0,8.23,8.23H67.395a8.25,8.25,0,0,0,8.23-8.23V17.28A8.25,8.25,0,0,0,67.395,9.05Z" transform="translate(-48 -9.05)"/>
        <path id="Path_345" data-name="Path 345" d="M57.235,22.656a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.235,22.656Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.235,11.14Z" transform="translate(-43.423 -4.473)"/>
        <path id="Path_346" data-name="Path 346" d="M55.753,10.62a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.753,10.62Z" transform="translate(-34.795 -5.612)"/>
      </g>
      <g id="Group_118" data-name="Group 118" transform="translate(10.814 10.814)" opacity="0.723">
        <path id="Path_347" data-name="Path 347" d="M72.819,28.415a5.473,5.473,0,0,1-5.455,5.455H56.2a5.473,5.473,0,0,1-5.455-5.455V17.25A5.473,5.473,0,0,1,56.2,11.8H67.365a5.473,5.473,0,0,1,5.455,5.455ZM67.365,9.02H56.2a8.25,8.25,0,0,0-8.23,8.23V28.415a8.25,8.25,0,0,0,8.23,8.23H67.365a8.25,8.25,0,0,0,8.23-8.23V17.25A8.25,8.25,0,0,0,67.365,9.02Z" transform="translate(-47.97 -9.02)"/>
        <path id="Path_348" data-name="Path 348" d="M57.205,22.626a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.205,22.626Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.205,11.11Z" transform="translate(-43.393 -4.443)"/>
        <path id="Path_349" data-name="Path 349" d="M55.733,10.59a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.733,10.59Z" transform="translate(-34.743 -5.582)"/>
      </g>
      <g id="Group_119" data-name="Group 119" transform="translate(10.718 10.718)" opacity="0.733">
        <path id="Path_350" data-name="Path 350" d="M72.789,28.385a5.473,5.473,0,0,1-5.455,5.455H56.17a5.473,5.473,0,0,1-5.455-5.455V17.22a5.473,5.473,0,0,1,5.455-5.455H67.335a5.473,5.473,0,0,1,5.455,5.455ZM67.335,8.99H56.17a8.25,8.25,0,0,0-8.23,8.23V28.385a8.25,8.25,0,0,0,8.23,8.23H67.335a8.25,8.25,0,0,0,8.23-8.23V17.22A8.23,8.23,0,0,0,67.335,8.99Z" transform="translate(-47.94 -8.99)"/>
        <path id="Path_351" data-name="Path 351" d="M57.175,22.6a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.175,22.6Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.175,11.08Z" transform="translate(-43.363 -4.413)"/>
        <path id="Path_352" data-name="Path 352" d="M55.7,10.56a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.7,10.56Z" transform="translate(-34.713 -5.552)"/>
      </g>
      <g id="Group_120" data-name="Group 120" transform="translate(10.622 10.622)" opacity="0.743">
        <path id="Path_353" data-name="Path 353" d="M72.759,28.355A5.473,5.473,0,0,1,67.3,33.809H56.14a5.473,5.473,0,0,1-5.455-5.455V17.19a5.473,5.473,0,0,1,5.455-5.455H67.3a5.473,5.473,0,0,1,5.455,5.455ZM67.3,8.96H56.14a8.25,8.25,0,0,0-8.23,8.23V28.355a8.25,8.25,0,0,0,8.23,8.23H67.3a8.25,8.25,0,0,0,8.23-8.23V17.19A8.23,8.23,0,0,0,67.3,8.96Z" transform="translate(-47.91 -8.96)"/>
        <path id="Path_354" data-name="Path 354" d="M57.145,22.566a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.145,22.566Zm0-11.516A7.145,7.145,0,1,0,64.291,18.2,7.134,7.134,0,0,0,57.145,11.05Z" transform="translate(-43.333 -4.383)"/>
        <path id="Path_355" data-name="Path 355" d="M55.673,10.53A1.723,1.723,0,1,0,57.4,12.253,1.736,1.736,0,0,0,55.673,10.53Z" transform="translate(-34.683 -5.522)"/>
      </g>
      <g id="Group_121" data-name="Group 121" transform="translate(10.527 10.527)" opacity="0.752">
        <path id="Path_356" data-name="Path 356" d="M72.729,28.356a5.473,5.473,0,0,1-5.455,5.455H56.11a5.473,5.473,0,0,1-5.455-5.455V17.192a5.473,5.473,0,0,1,5.455-5.455H67.275a5.473,5.473,0,0,1,5.455,5.455ZM67.275,8.93H56.11a8.25,8.25,0,0,0-8.23,8.23V28.325a8.25,8.25,0,0,0,8.23,8.23H67.275a8.25,8.25,0,0,0,8.23-8.23V17.16A8.229,8.229,0,0,0,67.275,8.93Z" transform="translate(-47.88 -8.93)"/>
        <path id="Path_357" data-name="Path 357" d="M57.115,22.514a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.115,22.514Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.115,11.03Z" transform="translate(-43.303 -4.331)"/>
        <path id="Path_358" data-name="Path 358" d="M55.643,10.51a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,55.643,10.51Z" transform="translate(-34.653 -5.47)"/>
      </g>
      <g id="Group_122" data-name="Group 122" transform="translate(10.463 10.463)" opacity="0.762">
        <path id="Path_359" data-name="Path 359" d="M72.677,28.3a5.473,5.473,0,0,1-5.455,5.455H56.058A5.473,5.473,0,0,1,50.6,28.3V17.14a5.473,5.473,0,0,1,5.455-5.455H67.223a5.473,5.473,0,0,1,5.455,5.455ZM67.255,8.91H56.09a8.25,8.25,0,0,0-8.23,8.23V28.3a8.25,8.25,0,0,0,8.23,8.23H67.255a8.25,8.25,0,0,0,8.23-8.23V17.14A8.23,8.23,0,0,0,67.255,8.91Z" transform="translate(-47.86 -8.91)"/>
        <path id="Path_360" data-name="Path 360" d="M57.085,22.516a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.085,22.516Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.085,11Z" transform="translate(-43.305 -4.333)"/>
        <path id="Path_361" data-name="Path 361" d="M55.613,10.48A1.723,1.723,0,1,0,57.335,12.2,1.715,1.715,0,0,0,55.613,10.48Z" transform="translate(-34.655 -5.472)"/>
      </g>
      <g id="Group_123" data-name="Group 123" transform="translate(10.367 10.367)" opacity="0.772">
        <path id="Path_362" data-name="Path 362" d="M72.679,28.275a5.473,5.473,0,0,1-5.455,5.455H56.06a5.473,5.473,0,0,1-5.455-5.455V17.11a5.473,5.473,0,0,1,5.455-5.455H67.225a5.473,5.473,0,0,1,5.455,5.455ZM67.225,8.88H56.06a8.25,8.25,0,0,0-8.23,8.23V28.275a8.25,8.25,0,0,0,8.23,8.23H67.225a8.25,8.25,0,0,0,8.23-8.23V17.11A8.229,8.229,0,0,0,67.225,8.88Z" transform="translate(-47.83 -8.88)"/>
        <path id="Path_363" data-name="Path 363" d="M57.065,22.486a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,57.065,22.486Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.065,10.97Z" transform="translate(-43.253 -4.303)"/>
        <path id="Path_364" data-name="Path 364" d="M55.583,10.45a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.583,10.45Z" transform="translate(-34.625 -5.442)"/>
      </g>
      <g id="Group_124" data-name="Group 124" transform="translate(10.271 10.271)" opacity="0.782">
        <path id="Path_365" data-name="Path 365" d="M72.649,28.245A5.473,5.473,0,0,1,67.195,33.7H56.03a5.473,5.473,0,0,1-5.455-5.455V17.08a5.473,5.473,0,0,1,5.455-5.455H67.195a5.473,5.473,0,0,1,5.455,5.455ZM67.195,8.85H56.03a8.25,8.25,0,0,0-8.23,8.23V28.245a8.25,8.25,0,0,0,8.23,8.23H67.195a8.25,8.25,0,0,0,8.23-8.23V17.08A8.25,8.25,0,0,0,67.195,8.85Z" transform="translate(-47.8 -8.85)"/>
        <path id="Path_366" data-name="Path 366" d="M57.035,22.456a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.035,22.456Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.035,10.94Z" transform="translate(-43.223 -4.273)"/>
        <path id="Path_367" data-name="Path 367" d="M55.553,10.42a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.553,10.42Z" transform="translate(-34.595 -5.412)"/>
      </g>
      <g id="Group_125" data-name="Group 125" transform="translate(10.176 10.176)" opacity="0.792">
        <path id="Path_368" data-name="Path 368" d="M72.619,28.215a5.473,5.473,0,0,1-5.455,5.455H56a5.473,5.473,0,0,1-5.455-5.455V17.05A5.473,5.473,0,0,1,56,11.6H67.165a5.473,5.473,0,0,1,5.455,5.455ZM67.165,8.82H56a8.25,8.25,0,0,0-8.23,8.23V28.215A8.25,8.25,0,0,0,56,36.444H67.165a8.25,8.25,0,0,0,8.23-8.23V17.05A8.25,8.25,0,0,0,67.165,8.82Z" transform="translate(-47.77 -8.82)"/>
        <path id="Path_369" data-name="Path 369" d="M57.005,22.426a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,57.005,22.426Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,57.005,10.91Z" transform="translate(-43.193 -4.243)"/>
        <path id="Path_370" data-name="Path 370" d="M55.523,10.39a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.523,10.39Z" transform="translate(-34.565 -5.382)"/>
      </g>
      <g id="Group_126" data-name="Group 126" transform="translate(10.08 10.08)" opacity="0.802">
        <path id="Path_371" data-name="Path 371" d="M72.589,28.185a5.473,5.473,0,0,1-5.455,5.455H55.97a5.473,5.473,0,0,1-5.455-5.455V17.02a5.473,5.473,0,0,1,5.455-5.455H67.135a5.473,5.473,0,0,1,5.455,5.455ZM67.135,8.79H55.97a8.25,8.25,0,0,0-8.23,8.23V28.185a8.25,8.25,0,0,0,8.23,8.23H67.135a8.25,8.25,0,0,0,8.23-8.23V17.02A8.25,8.25,0,0,0,67.135,8.79Z" transform="translate(-47.74 -8.79)"/>
        <path id="Path_372" data-name="Path 372" d="M56.975,22.4a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.975,22.4Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.975,10.88Z" transform="translate(-43.163 -4.213)"/>
        <path id="Path_373" data-name="Path 373" d="M55.493,10.36a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.493,10.36Z" transform="translate(-34.535 -5.352)"/>
      </g>
      <g id="Group_127" data-name="Group 127" transform="translate(9.984 9.984)" opacity="0.812">
        <path id="Path_374" data-name="Path 374" d="M72.559,28.155A5.473,5.473,0,0,1,67.1,33.609H55.94a5.473,5.473,0,0,1-5.455-5.455V16.99a5.473,5.473,0,0,1,5.455-5.455H67.1a5.473,5.473,0,0,1,5.455,5.455ZM67.1,8.76H55.94a8.25,8.25,0,0,0-8.23,8.23V28.155a8.25,8.25,0,0,0,8.23,8.23H67.1a8.25,8.25,0,0,0,8.23-8.23V16.99A8.25,8.25,0,0,0,67.1,8.76Z" transform="translate(-47.71 -8.76)"/>
        <path id="Path_375" data-name="Path 375" d="M56.945,22.366A4.37,4.37,0,1,1,61.316,18,4.356,4.356,0,0,1,56.945,22.366Zm0-11.516A7.145,7.145,0,1,0,64.091,18,7.134,7.134,0,0,0,56.945,10.85Z" transform="translate(-43.133 -4.183)"/>
        <path id="Path_376" data-name="Path 376" d="M55.463,10.33a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.463,10.33Z" transform="translate(-34.505 -5.322)"/>
      </g>
      <g id="Group_128" data-name="Group 128" transform="translate(9.889 9.889)" opacity="0.822">
        <path id="Path_377" data-name="Path 377" d="M72.529,28.125a5.473,5.473,0,0,1-5.455,5.455H55.91a5.473,5.473,0,0,1-5.455-5.455V16.96a5.473,5.473,0,0,1,5.455-5.455H67.075a5.473,5.473,0,0,1,5.455,5.455ZM67.075,8.73H55.91a8.25,8.25,0,0,0-8.23,8.23V28.125a8.25,8.25,0,0,0,8.23,8.23H67.075a8.25,8.25,0,0,0,8.23-8.23V16.96A8.25,8.25,0,0,0,67.075,8.73Z" transform="translate(-47.68 -8.73)"/>
        <path id="Path_378" data-name="Path 378" d="M56.915,22.336a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.915,22.336Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.915,10.82Z" transform="translate(-43.103 -4.153)"/>
        <path id="Path_379" data-name="Path 379" d="M55.443,10.3a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.443,10.3Z" transform="translate(-34.453 -5.292)"/>
      </g>
      <g id="Group_129" data-name="Group 129" transform="translate(9.793 9.793)" opacity="0.832">
        <path id="Path_380" data-name="Path 380" d="M72.5,28.095a5.473,5.473,0,0,1-5.455,5.455H55.88a5.473,5.473,0,0,1-5.455-5.455V16.93a5.473,5.473,0,0,1,5.455-5.455H67.045A5.473,5.473,0,0,1,72.5,16.93ZM67.045,8.7H55.88a8.25,8.25,0,0,0-8.23,8.23V28.095a8.25,8.25,0,0,0,8.23,8.23H67.045a8.25,8.25,0,0,0,8.23-8.23V16.93A8.23,8.23,0,0,0,67.045,8.7Z" transform="translate(-47.65 -8.7)"/>
        <path id="Path_381" data-name="Path 381" d="M56.885,22.306a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.885,22.306Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,56.885,10.79Z" transform="translate(-43.073 -4.123)"/>
        <path id="Path_382" data-name="Path 382" d="M55.413,10.27a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.413,10.27Z" transform="translate(-34.423 -5.262)"/>
      </g>
      <g id="Group_130" data-name="Group 130" transform="translate(9.697 9.697)" opacity="0.842">
        <path id="Path_383" data-name="Path 383" d="M72.469,28.1a5.473,5.473,0,0,1-5.455,5.455H55.85A5.473,5.473,0,0,1,50.4,28.1V16.932a5.473,5.473,0,0,1,5.455-5.455H67.015a5.473,5.473,0,0,1,5.455,5.455ZM67.015,8.67H55.85a8.25,8.25,0,0,0-8.23,8.23V28.065a8.25,8.25,0,0,0,8.23,8.23H67.015a8.25,8.25,0,0,0,8.23-8.23V16.9A8.23,8.23,0,0,0,67.015,8.67Z" transform="translate(-47.62 -8.67)"/>
        <path id="Path_384" data-name="Path 384" d="M56.855,22.276a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.855,22.276Zm0-11.516A7.145,7.145,0,1,0,64,17.905,7.154,7.154,0,0,0,56.855,10.76Z" transform="translate(-43.043 -4.093)"/>
        <path id="Path_385" data-name="Path 385" d="M55.383,10.24a1.723,1.723,0,1,0,1.723,1.723A1.757,1.757,0,0,0,55.383,10.24Z" transform="translate(-34.393 -5.232)"/>
      </g>
      <g id="Group_131" data-name="Group 131" transform="translate(9.602 9.602)" opacity="0.851">
        <path id="Path_386" data-name="Path 386" d="M72.439,28.066a5.473,5.473,0,0,1-5.455,5.455H55.82a5.473,5.473,0,0,1-5.455-5.455V16.9a5.473,5.473,0,0,1,5.455-5.455H66.985A5.473,5.473,0,0,1,72.439,16.9ZM66.985,8.64H55.82a8.25,8.25,0,0,0-8.23,8.23V28.035a8.25,8.25,0,0,0,8.23,8.23H66.985a8.25,8.25,0,0,0,8.23-8.23V16.87A8.229,8.229,0,0,0,66.985,8.64Z" transform="translate(-47.59 -8.64)"/>
        <path id="Path_387" data-name="Path 387" d="M56.825,22.224a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.825,22.224Zm0-11.484a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,56.825,10.74Z" transform="translate(-43.013 -4.041)"/>
        <path id="Path_388" data-name="Path 388" d="M55.353,10.22a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,55.353,10.22Z" transform="translate(-34.363 -5.18)"/>
      </g>
      <g id="Group_132" data-name="Group 132" transform="translate(9.538 9.538)" opacity="0.861">
        <path id="Path_389" data-name="Path 389" d="M72.387,28.015a5.473,5.473,0,0,1-5.455,5.455H55.768a5.473,5.473,0,0,1-5.455-5.455V16.85A5.473,5.473,0,0,1,55.768,11.4H66.933a5.473,5.473,0,0,1,5.455,5.455ZM66.965,8.62H55.8a8.25,8.25,0,0,0-8.23,8.23V28.015a8.25,8.25,0,0,0,8.23,8.23H66.965a8.25,8.25,0,0,0,8.23-8.23V16.85A8.229,8.229,0,0,0,66.965,8.62Z" transform="translate(-47.57 -8.62)"/>
        <path id="Path_390" data-name="Path 390" d="M56.805,22.226a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,56.805,22.226Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,56.805,10.71Z" transform="translate(-42.993 -4.043)"/>
        <path id="Path_391" data-name="Path 391" d="M55.323,10.19a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.323,10.19Z" transform="translate(-34.365 -5.182)"/>
      </g>
      <g id="Group_133" data-name="Group 133" transform="translate(9.442 9.442)" opacity="0.871">
        <path id="Path_392" data-name="Path 392" d="M72.389,27.985a5.473,5.473,0,0,1-5.455,5.455H55.77a5.473,5.473,0,0,1-5.455-5.455V16.82a5.473,5.473,0,0,1,5.455-5.455H66.935a5.473,5.473,0,0,1,5.455,5.455ZM66.935,8.59H55.77a8.25,8.25,0,0,0-8.23,8.23V27.985a8.25,8.25,0,0,0,8.23,8.23H66.935a8.25,8.25,0,0,0,8.23-8.23V16.82A8.23,8.23,0,0,0,66.935,8.59Z" transform="translate(-47.54 -8.59)"/>
        <path id="Path_393" data-name="Path 393" d="M56.775,22.2a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,56.775,22.2Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.154,7.154,0,0,0,56.775,10.68Z" transform="translate(-42.963 -4.013)"/>
        <path id="Path_394" data-name="Path 394" d="M55.293,10.16a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.293,10.16Z" transform="translate(-34.335 -5.152)"/>
      </g>
      <g id="Group_134" data-name="Group 134" transform="translate(9.346 9.346)" opacity="0.881">
        <path id="Path_395" data-name="Path 395" d="M72.359,27.955A5.473,5.473,0,0,1,66.9,33.409H55.74a5.473,5.473,0,0,1-5.455-5.455V16.79a5.473,5.473,0,0,1,5.455-5.455H66.9a5.473,5.473,0,0,1,5.455,5.455ZM66.9,8.56H55.74a8.25,8.25,0,0,0-8.23,8.23V27.955a8.25,8.25,0,0,0,8.23,8.23H66.9a8.25,8.25,0,0,0,8.23-8.23V16.79A8.25,8.25,0,0,0,66.9,8.56Z" transform="translate(-47.51 -8.56)"/>
        <path id="Path_396" data-name="Path 396" d="M56.745,22.166a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.745,22.166Zm0-11.516A7.145,7.145,0,1,0,63.891,17.8,7.154,7.154,0,0,0,56.745,10.65Z" transform="translate(-42.933 -3.983)"/>
        <path id="Path_397" data-name="Path 397" d="M55.263,10.13a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.263,10.13Z" transform="translate(-34.305 -5.122)"/>
      </g>
      <g id="Group_135" data-name="Group 135" transform="translate(9.251 9.251)" opacity="0.891">
        <path id="Path_398" data-name="Path 398" d="M72.329,27.925a5.473,5.473,0,0,1-5.455,5.455H55.71a5.473,5.473,0,0,1-5.455-5.455V16.76a5.473,5.473,0,0,1,5.455-5.455H66.875a5.473,5.473,0,0,1,5.455,5.455ZM66.875,8.53H55.71a8.25,8.25,0,0,0-8.23,8.23V27.925a8.25,8.25,0,0,0,8.23,8.23H66.875a8.25,8.25,0,0,0,8.23-8.23V16.76A8.25,8.25,0,0,0,66.875,8.53Z" transform="translate(-47.48 -8.53)"/>
        <path id="Path_399" data-name="Path 399" d="M56.715,22.136a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.715,22.136Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.715,10.62Z" transform="translate(-42.903 -3.953)"/>
        <path id="Path_400" data-name="Path 400" d="M55.233,10.1a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.233,10.1Z" transform="translate(-34.275 -5.092)"/>
      </g>
      <g id="Group_136" data-name="Group 136" transform="translate(9.155 9.155)" opacity="0.901">
        <path id="Path_401" data-name="Path 401" d="M72.3,27.895a5.473,5.473,0,0,1-5.455,5.455H55.68a5.473,5.473,0,0,1-5.455-5.455V16.73a5.473,5.473,0,0,1,5.455-5.455H66.845A5.473,5.473,0,0,1,72.3,16.73ZM66.845,8.5H55.68a8.25,8.25,0,0,0-8.23,8.23V27.895a8.25,8.25,0,0,0,8.23,8.23H66.845a8.25,8.25,0,0,0,8.23-8.23V16.73A8.25,8.25,0,0,0,66.845,8.5Z" transform="translate(-47.45 -8.5)"/>
        <path id="Path_402" data-name="Path 402" d="M56.685,22.106a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.685,22.106Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.685,10.59Z" transform="translate(-42.873 -3.923)"/>
        <path id="Path_403" data-name="Path 403" d="M55.2,10.07a1.723,1.723,0,1,0,1.723,1.723A1.715,1.715,0,0,0,55.2,10.07Z" transform="translate(-34.245 -5.062)"/>
      </g>
      <g id="Group_137" data-name="Group 137" transform="translate(9.059 9.059)" opacity="0.911">
        <path id="Path_404" data-name="Path 404" d="M72.269,27.865a5.473,5.473,0,0,1-5.455,5.455H55.65A5.473,5.473,0,0,1,50.2,27.865V16.7a5.473,5.473,0,0,1,5.455-5.455H66.815A5.473,5.473,0,0,1,72.269,16.7ZM66.815,8.47H55.65a8.25,8.25,0,0,0-8.23,8.23V27.865a8.25,8.25,0,0,0,8.23,8.23H66.815a8.25,8.25,0,0,0,8.23-8.23V16.7A8.25,8.25,0,0,0,66.815,8.47Z" transform="translate(-47.42 -8.47)"/>
        <path id="Path_405" data-name="Path 405" d="M56.655,22.076a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.655,22.076Zm0-11.516A7.145,7.145,0,1,0,63.8,17.705,7.134,7.134,0,0,0,56.655,10.56Z" transform="translate(-42.843 -3.893)"/>
        <path id="Path_406" data-name="Path 406" d="M55.173,10.04A1.723,1.723,0,1,0,56.9,11.763,1.715,1.715,0,0,0,55.173,10.04Z" transform="translate(-34.215 -5.032)"/>
      </g>
      <g id="Group_138" data-name="Group 138" transform="translate(8.964 8.964)" opacity="0.921">
        <path id="Path_407" data-name="Path 407" d="M72.239,27.835a5.473,5.473,0,0,1-5.455,5.455H55.62a5.473,5.473,0,0,1-5.455-5.455V16.67a5.473,5.473,0,0,1,5.455-5.455H66.785a5.473,5.473,0,0,1,5.455,5.455ZM66.785,8.44H55.62a8.25,8.25,0,0,0-8.23,8.23V27.835a8.25,8.25,0,0,0,8.23,8.23H66.785a8.25,8.25,0,0,0,8.23-8.23V16.67A8.25,8.25,0,0,0,66.785,8.44Z" transform="translate(-47.39 -8.44)"/>
        <path id="Path_408" data-name="Path 408" d="M56.625,22.046A4.37,4.37,0,1,1,61,17.675,4.356,4.356,0,0,1,56.625,22.046Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.625,10.53Z" transform="translate(-42.813 -3.863)"/>
        <path id="Path_409" data-name="Path 409" d="M55.153,10.01a1.723,1.723,0,1,0,1.723,1.723A1.736,1.736,0,0,0,55.153,10.01Z" transform="translate(-34.163 -5.002)"/>
      </g>
      <g id="Group_139" data-name="Group 139" transform="translate(8.868 8.868)" opacity="0.931">
        <path id="Path_410" data-name="Path 410" d="M72.209,27.8a5.473,5.473,0,0,1-5.455,5.455H55.59A5.473,5.473,0,0,1,50.135,27.8V16.64a5.473,5.473,0,0,1,5.455-5.455H66.755a5.473,5.473,0,0,1,5.455,5.455ZM66.755,8.41H55.59a8.25,8.25,0,0,0-8.23,8.23V27.8a8.25,8.25,0,0,0,8.23,8.23H66.755a8.25,8.25,0,0,0,8.23-8.23V16.64A8.23,8.23,0,0,0,66.755,8.41Z" transform="translate(-47.36 -8.41)"/>
        <path id="Path_411" data-name="Path 411" d="M56.6,22.016a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.6,22.016Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.6,10.5Z" transform="translate(-42.783 -3.833)"/>
        <circle id="Ellipse_40" data-name="Ellipse 40" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_140" data-name="Group 140" transform="translate(8.772 8.772)" opacity="0.941">
        <path id="Path_412" data-name="Path 412" d="M72.179,27.806a5.473,5.473,0,0,1-5.455,5.455H55.56a5.473,5.473,0,0,1-5.455-5.455V16.642a5.473,5.473,0,0,1,5.455-5.455H66.725a5.473,5.473,0,0,1,5.455,5.455ZM66.725,8.38H55.56a8.25,8.25,0,0,0-8.23,8.23V27.775A8.25,8.25,0,0,0,55.56,36H66.725a8.25,8.25,0,0,0,8.23-8.23V16.61A8.23,8.23,0,0,0,66.725,8.38Z" transform="translate(-47.33 -8.38)"/>
        <path id="Path_413" data-name="Path 413" d="M56.565,21.986a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.565,21.986Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.565,10.47Z" transform="translate(-42.753 -3.803)"/>
        <circle id="Ellipse_41" data-name="Ellipse 41" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 5.008)"/>
      </g>
      <g id="Group_141" data-name="Group 141" transform="translate(8.677 8.708)" opacity="0.951">
        <path id="Path_414" data-name="Path 414" d="M72.149,27.755a5.473,5.473,0,0,1-5.455,5.455H55.53a5.473,5.473,0,0,1-5.455-5.455V16.59a5.473,5.473,0,0,1,5.455-5.455H66.695a5.473,5.473,0,0,1,5.455,5.455ZM66.695,8.36H55.53a8.25,8.25,0,0,0-8.23,8.23V27.755a8.25,8.25,0,0,0,8.23,8.23H66.695a8.25,8.25,0,0,0,8.23-8.23V16.59A8.209,8.209,0,0,0,66.695,8.36Z" transform="translate(-47.3 -8.36)"/>
        <path id="Path_415" data-name="Path 415" d="M56.535,21.934a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.535,21.934Zm0-11.484A7.145,7.145,0,1,0,63.681,17.6,7.134,7.134,0,0,0,56.535,10.45Z" transform="translate(-42.723 -3.783)"/>
        <circle id="Ellipse_42" data-name="Ellipse 42" cx="1.723" cy="1.723" r="1.723" transform="translate(19.267 4.976)"/>
      </g>
      <g id="Group_142" data-name="Group 142" transform="translate(8.613 8.613)" opacity="0.96">
        <path id="Path_416" data-name="Path 416" d="M72.1,27.725a5.473,5.473,0,0,1-5.455,5.455H55.478a5.473,5.473,0,0,1-5.455-5.455V16.56a5.473,5.473,0,0,1,5.455-5.455H66.643A5.473,5.473,0,0,1,72.1,16.56ZM66.675,8.33H55.51a8.25,8.25,0,0,0-8.23,8.23V27.725a8.25,8.25,0,0,0,8.23,8.23H66.675a8.25,8.25,0,0,0,8.23-8.23V16.56A8.23,8.23,0,0,0,66.675,8.33Z" transform="translate(-47.28 -8.33)"/>
        <path id="Path_417" data-name="Path 417" d="M56.515,21.936a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,56.515,21.936Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.515,10.42Z" transform="translate(-42.703 -3.753)"/>
        <circle id="Ellipse_43" data-name="Ellipse 43" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_143" data-name="Group 143" transform="translate(8.517 8.517)" opacity="0.97">
        <path id="Path_418" data-name="Path 418" d="M72.1,27.695a5.473,5.473,0,0,1-5.455,5.455H55.48a5.473,5.473,0,0,1-5.455-5.455V16.53a5.473,5.473,0,0,1,5.455-5.455H66.645A5.473,5.473,0,0,1,72.1,16.53ZM66.645,8.3H55.48a8.25,8.25,0,0,0-8.23,8.23V27.695a8.25,8.25,0,0,0,8.23,8.23H66.645a8.25,8.25,0,0,0,8.23-8.23V16.53A8.229,8.229,0,0,0,66.645,8.3Z" transform="translate(-47.25 -8.3)"/>
        <path id="Path_419" data-name="Path 419" d="M56.485,21.906a4.37,4.37,0,1,1,4.37-4.37A4.419,4.419,0,0,1,56.485,21.906Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.485,10.39Z" transform="translate(-42.673 -3.723)"/>
        <circle id="Ellipse_44" data-name="Ellipse 44" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 4.976)"/>
      </g>
      <g id="Group_144" data-name="Group 144" transform="translate(8.421 8.421)" opacity="0.98">
        <path id="Path_420" data-name="Path 420" d="M72.069,27.665a5.473,5.473,0,0,1-5.455,5.455H55.45A5.473,5.473,0,0,1,50,27.665V16.5a5.473,5.473,0,0,1,5.455-5.455H66.615A5.473,5.473,0,0,1,72.069,16.5ZM66.615,8.27H55.45a8.25,8.25,0,0,0-8.23,8.23V27.665a8.25,8.25,0,0,0,8.23,8.23H66.615a8.25,8.25,0,0,0,8.23-8.23V16.5A8.25,8.25,0,0,0,66.615,8.27Z" transform="translate(-47.22 -8.27)"/>
        <path id="Path_421" data-name="Path 421" d="M56.455,21.876a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.455,21.876Zm0-11.516A7.145,7.145,0,1,0,63.6,17.505,7.134,7.134,0,0,0,56.455,10.36Z" transform="translate(-42.643 -3.693)"/>
        <circle id="Ellipse_45" data-name="Ellipse 45" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
      <g id="Group_145" data-name="Group 145" transform="translate(8.326 8.326)" opacity="0.99">
        <path id="Path_422" data-name="Path 422" d="M72.039,27.635a5.473,5.473,0,0,1-5.455,5.455H55.42a5.473,5.473,0,0,1-5.455-5.455V16.47a5.473,5.473,0,0,1,5.455-5.455H66.585a5.473,5.473,0,0,1,5.455,5.455ZM66.585,8.24H55.42a8.25,8.25,0,0,0-8.23,8.23V27.635a8.25,8.25,0,0,0,8.23,8.23H66.585a8.25,8.25,0,0,0,8.23-8.23V16.47A8.25,8.25,0,0,0,66.585,8.24Z" transform="translate(-47.19 -8.24)"/>
        <path id="Path_423" data-name="Path 423" d="M56.425,21.846a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.425,21.846Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.425,10.33Z" transform="translate(-42.613 -3.663)"/>
        <circle id="Ellipse_46" data-name="Ellipse 46" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
      <g id="Group_146" data-name="Group 146" transform="translate(8.23 8.23)">
        <path id="Path_424" data-name="Path 424" d="M72.009,27.6a5.473,5.473,0,0,1-5.455,5.455H55.39A5.473,5.473,0,0,1,49.935,27.6V16.44a5.473,5.473,0,0,1,5.455-5.455H66.555a5.473,5.473,0,0,1,5.455,5.455ZM66.555,8.21H55.39a8.25,8.25,0,0,0-8.23,8.23V27.6a8.25,8.25,0,0,0,8.23,8.23H66.555a8.25,8.25,0,0,0,8.23-8.23V16.44A8.25,8.25,0,0,0,66.555,8.21Z" transform="translate(-47.16 -8.21)"/>
        <path id="Path_425" data-name="Path 425" d="M56.4,21.816a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.4,21.816Zm0-11.516a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.4,10.3Z" transform="translate(-42.583 -3.633)"/>
        <circle id="Ellipse_47" data-name="Ellipse 47" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)"/>
      </g>
    </g>
  </g>
  <g id="Group_149" data-name="Group 149" transform="translate(13.291 11.412)">
    <path id="Path_427" data-name="Path 427" d="M66.555,8.21H55.39a8.25,8.25,0,0,0-8.23,8.23V27.6a8.25,8.25,0,0,0,8.23,8.23H66.555a8.25,8.25,0,0,0,8.23-8.23V16.44A8.25,8.25,0,0,0,66.555,8.21ZM72.009,27.6a5.473,5.473,0,0,1-5.455,5.455H55.39A5.473,5.473,0,0,1,49.935,27.6V16.44a5.473,5.473,0,0,1,5.455-5.455H66.555a5.473,5.473,0,0,1,5.455,5.455Z" transform="translate(-47.16 -8.21)" fill="url(#linear-gradient-2)"/>
    <path id="Path_428" data-name="Path 428" d="M56.4,10.3a7.145,7.145,0,1,0,7.145,7.145A7.134,7.134,0,0,0,56.4,10.3Zm0,11.516a4.37,4.37,0,1,1,4.37-4.37A4.356,4.356,0,0,1,56.4,21.816Z" transform="translate(-42.583 -3.633)" fill="url(#linear-gradient-3)"/>
    <circle id="Ellipse_48" data-name="Ellipse 48" cx="1.723" cy="1.723" r="1.723" transform="translate(19.235 5.008)" fill="url(#linear-gradient-4)"/>
  </g>
  <g id="Group_150" data-name="Group 150" transform="translate(5.061 3.278)" opacity="0.3">
    <path id="Path_429" data-name="Path 429" d="M66.622,6.617c17.13,0,21.085,3.955,21.085,21.085S83.752,48.787,66.622,48.787,45.537,44.832,45.537,27.7c0-17.162,3.924-21.085,21.085-21.085m0-.957c-17.64,0-22.042,4.4-22.042,22.042s4.4,22.042,22.042,22.042,22.042-4.4,22.042-22.042S84.262,5.66,66.622,5.66Z" transform="translate(-44.58 -5.66)" fill="url(#linear-gradient-5)"/>
  </g>
  `,
]
