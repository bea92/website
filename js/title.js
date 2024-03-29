
body {
  background: indianred;
}
.text {
  font-family: "Alfa Slab One", cursive;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  width: 100%;
  text-align: center;
  perspective: 1000px;
}
.text p {
  color: palegoldenrod;
}
.text h1 {
  position: relative;
  font-size: 5em;
  color: palegoldenrod;
  letter-spacing: 0.0625em;
  animation: drop-shadows;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes drop-shadows {
  0% {
    text-shadow: -1px 0 0 cadetblue, 0px 0 0 #5b989a, 0px 0 0 #5d9b9d, 0px 0 0 cadetblue;
  }
  25% {
    text-shadow: -1px 0 0 cadetblue, -2px 0 0 #5b989a, -3px 0 0 #599596, -4px 0 0 #579193, -5px 0 0 #568e90, -6px 0 0 #548b8d, -7px 0 0 #52888a, -8px 0 0 #508586, -9px 0 0 #4e8283, -10px 0 0 #4c7e80, -11px 0 0 #4a7b7d, -12px 0 0 #48787a, -13px 0 0 #467576, -14px 0 0 #447273, -15px 0 0 #436f70, -16px 0 0 #416b6d, -17px 0 0 #3f686a, -18px 0 0 #3d6566, -19px 0 0 #3b6263, -20px 0 0 #395f60, -21px 0 0 #375c5d, -22px 0 0 #35585a, -23px 0 0 #335556, -24px 0 0 #315253, -25px 0 0 #304f50, -26px 0 0 #2e4c4d, -27px 0 0 #2c494a, -28px 0 0 #2a4646, -29px 0 0 #284243, -30px 0 0 #263f40;
    transform: rotateY(25deg);
  }
  75% {
    text-shadow: -1px 0 0 cadetblue, 2px 0 0 #5b989a, 3px 0 0 #599596, 4px 0 0 #579193, 5px 0 0 #568e90, 6px 0 0 #548b8d, 7px 0 0 #52888a, 8px 0 0 #508586, 9px 0 0 #4e8283, 10px 0 0 #4c7e80, 11px 0 0 #4a7b7d, 12px 0 0 #48787a, 13px 0 0 #467576, 14px 0 0 #447273, 15px 0 0 #436f70, 16px 0 0 #416b6d, 17px 0 0 #3f686a, 18px 0 0 #3d6566, 19px 0 0 #3b6263, 20px 0 0 #395f60, 21px 0 0 #375c5d, 22px 0 0 #35585a, 23px 0 0 #335556, 24px 0 0 #315253, 25px 0 0 #304f50, 26px 0 0 #2e4c4d, 27px 0 0 #2c494a, 28px 0 0 #2a4646, 29px 0 0 #284243, 30px 0 0 #263f40;
    transform: rotateY(-25deg);
  }
  100% {
    text-shadow: -1px 0 0 cadetblue, 0px 0 0 #5b989a, 0px 0 0 #5d9b9d, 0px 0 0 cadetblue;
    transform: rotateY(0deg);
  }
}body {
  background: indianred;
}