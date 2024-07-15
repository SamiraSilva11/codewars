var filterString = function(value) {
  const nums = value.match(/\d+/g)?.join('') || '';
  return nums ? Number(nums) : [];
}

//best practice
const FilterString = value => +value.replace(/\D/g, '');