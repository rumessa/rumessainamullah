import { useState } from 'react';
import './Enter.css';
import Home from './Home';

function Enter() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            {!clicked && 
                <div className="main-div">
                    <div className='clickable' onClick={() => {setClicked(true)}}>
                        <svg  className="file" version="1.0" xmlns="http://www.w3.org/2000/svg"  width="471.000000pt" height="399.000000pt" viewBox="0 0 471.000000 399.000000"  preserveAspectRatio="xMidYMid meet">  
                            <g transform="translate(0.000000,399.000000) scale(0.100000,-0.100000)" fill="#b53f4b" stroke="none"> 
                            <path d="M1997 3536 c-20 -8 -52 -25 -71 -39 -43 -34 -443 -433 -621 -622 
                            -77 -81 -191 -200 -254 -264 -148 -151 -177 -189 -191 -254 -21 -94 22 -173 
                            120 -220 44 -22 55 -22 518 -24 297 -2 480 -6 492 -13 18 -10 19 -30 19 -599 
                            0 -567 0 -590 19 -628 28 -53 70 -89 120 -103 65 -17 1935 -16 2003 1 38 10 
                            58 23 83 54 64 79 61 39 60 645 0 627 2 606 -76 673 -42 35 -52 39 -141 50 
                            -53 7 -102 18 -108 24 -19 19 -28 272 -28 749 0 404 0 424 -20 461 -26 51 
                            -80 99 -128 112 -61 17 -1747 14 -1796 -3z m1851 -100 l23 -33 -1 -644 -2 
                            -644 144 4 144 3 32 -27 32 -27 0 -587 0 -587 -31 -32 -31 -32 -1003 0 c-934 
                            0 -1005 1 -1034 17 -16 10 -32 27 -35 38 -8 28 -7 1155 0 1183 15 53 2 53 
                            825 52 l760 -1 0 583 c0 471 -3 582 -13 578 -7 -3 -350 -6 -761 -7 l-749 
                            -2 2 -500 c1 -454 -1 -503 -16 -526 -36 -55 -44 -56 -605 -56 -338 0 -525 
                            4 -543 11 -56 21 -84 81 -68 147 7 31 117 146 847 891 110 112 204 210 208 
                            218 7 12 140 14 930 14 l922 0 23 -34z m-283 -271 l25 -24 0 -440 c0 -301 -4 
                            -448 -11 -464 -6 -14 -22 -30 -34 -35 -16 -7 -239 -11 -668 -12 -711 -1 -674 
                            -4 -662 62 4 18 7 227 8 464 2 465 1 459 55 467 15 2 305 5 645 6 l618 1 24 -25z"/> 
                            <path d="M1880 3143 c-35 -16 -497 -472 -601 -593 -31 -36 -67 -85 -80 -108 
                            l-24 -44 30 -21 c57 -42 95 -47 395 -47 164 0 301 4 322 10 20 6 48 25 63 42 
                            l26 31 -3 341 c-2 187 -7 347 -12 354 -6 10 -12 8 -25 -10 -14 -20 -16 -65 
                            -19 -340 -2 -223 0 -324 8 -339 7 -11 10 -23 7 -25 -2 -2 -173 -5 -381 -7 
                            -345 -2 -376 -1 -376 15 0 9 15 26 33 37 47 29 645 636 657 666 5 14 14 25 
                            20 25 5 0 10 7 10 15 0 19 -6 19 -50 -2z"/> 
                            <path d="M2339 1980 c-45 -6 -63 -14 -87 -38 -41 -42 -44 -79 
                            -40 -517 3 -392 4 -397 61 -439 28 -21 35 -21 820 -24 804 -3
                            901 -1 933 22 16 13 15 15 -14 30 -28 14 -115 16 -862 16 -577 
                            0 -838 -3 -852 -11 -11 -6 -22 -9 -24 -6 -6 6 -6 918 0 924 2 
                            3 13 0 24 -6 15 -8 276 -11 854 -11 800 0 834 1 862 19 l28 19 
                            -23 13 c-19 10 -196 13 -824 14 -440 1 -825 -1 -856 -5z"/> 
                            <path d="M4043 1913 c-10 -37 -10 -816 1 -867 7 -36 9 -38 24 -22 
                            15 15 17 57 17 439 0 405 -4 477 -25 477 -5 0 -13 -12 -17 -27z"/> 
                            <path d="M2406 1707 c-17 -12 -18 -33 -17 -247 1 -245 2 -250 46 
                            -250 44 0 48 13 46 119 l-2 101 76 0 76 0 -2 -101 c-2 -109 2 -119 
                            53 -119 15 0 30 5 34 12 4 6 6 115 5 242 -2 201 -4 233 -18 244 -20 
                            14 -42 15 -63 2 -12 -7 -14 -28 -12 -100 l4 -90 -77 0 -77 0 4 90 c2 
                            72 0 93 -12 100 -21 13 -43 12 -64 -3z"/> 
                            <path d="M2791 1712 c-12 -4 -15 -51 -5 -76 5 -12 20 -16 60 -16 36 
                            0 54 -4 54 -12 1 -7 0 -97 0 -199 -1 -186 -1 -186 22 -193 81 -21 88 
                            -2 78 219 -4 99 -4 183 -1 187 3 3 26 3 51 -2 39 -8 47 -6 63 12 9 11
                            17 28 17 38 0 37 -25 43 -180 44 -82 1 -154 0 -159 -2z"/> 
                            <path d="M3191 1694 c-20 -25 -21 -39 -21 -246 l0 -218 26 
                            -10 c37 -14 52 -12 74 10 18 18 20 29 15 88 -3 37 -13 102 -22 
                            145 -14 67 -15 80 -3 87 18 11 41 -7 33 -26 -3 -8 4 -24 16 -35 
                            11 -11 21 -29 21 -40 0 -33 29 -81 47 -77 19 3 51 54 52 81 1 9 
                            10 25 21 34 11 10 20 28 20 40 0 26 25 32 33 8 4 -8 0 -38 -7 -67 
                            -8 -29 -17 -92 -20 -140 -7 -85 -6 -87 18 -104 31 -20 74 -12 84 
                            16 4 10 5 119 2 242 l-5 223 -47 3 -47 3 -31 -53 c-17 -29 -33 -65 
                            -37 -80 -4 -23 -11 -28 -34 -28 -23 0 -30 6 -35 28 -13 51 -63 120
                                -96 131 -17 6 -32 11 -34 11 -1 0 -12 -12 -23 -26z"/> 
                            <path d="M3681 1707 l-23 -12 1 -230 c1 -126 5 -233 9 -237 12 -11 262 
                                -12 273 -1 6 6 9 26 7 44 l-3 34 -94 3 -94 3 6 189 c5 186 5 190 -16 205 
                                -26 18 -35 18 -66 2z"/> 
                            <path d="M990 1933 c-32 -6 -96 -67 -123 -118 -22 -40 -22 -42 -25 -818 
                                -3 -870 -4 -851 66 -929 67 -74 -59 -68 1482 -68 1544 0 1419 -6 1483 67 
                                70 78 72 85 73 238 3 213 -9 254 -89 318 -27 23 -47 30 -79 31 -69 1 -91
                                -10 -131 -63 -31 -41 -40 -63 -49 -121 -6 -39 -19 -81 -28 -93 l-18 -22
                                -1139 0 c-626 0 -1150 3 -1164 7 -14 4 -30 18 -37 30 -8 16 -12 220 -14
                                708 -3 776 4 714 -88 791 -47 39 -77 50 -120 42z m74 -70 c63 -30 62
                                    -9 55 -823 -3 -404 -7 -744 -10 -755 -3 -17 0 -19 26 -15 17 3 595 5 
                                    1286 5 l1256 0 -5 130 c-5 129 -4 131 21 160 22 26 32 30 76 30 39 0 
                                    56 -5 73 -23 22 -22 23 -30 26 -225 3 -191 2 -204 -17 -226 -11 -12 
                                    -21 -27 -23 -32 -2 -5 -597 -9 -1426 -9 l-1422 -1 -30 23 -30 22 0 
                                    843 0 844 38 34 c42 39 57 42 106 18z"/> 
                            </g> 
                        </svg>  
                        <p className='file-name'>rumessa_inamullah.html</p>
                    </div>
                </div>
            }
            {clicked && <Home /> }
        </>
        
        
        
    );
}
export default Enter;