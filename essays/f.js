function a(b) {
  let d = 0;
  for (let i = 0; i < b.length; i++) {
    d += b[i];
  }
  return d;
}

function a1(c) {
  if (c < 0) {
    return -c;
  }
  return c;
}