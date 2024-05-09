function cockroachSpeed(s) {
    return Math.floor(s * (1000 * 100 / 3600));
  }


//best practice
const cockroachSpeed = s => Math.floor(s / 0.036);