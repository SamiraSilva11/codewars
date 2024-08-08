function countSquares(cuts) {
    if(!cuts){
      return 1;
    }
    const totalCubes = Math.pow(cuts + 1, 3);
    const innerCubes = Math.pow(cuts - 1, 3);
  
    return totalCubes - innerCubes;
}