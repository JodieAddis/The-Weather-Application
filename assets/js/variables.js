
export let btn = document.querySelector('.navBar_inputAdd'); 
export let currentDate = document.querySelector('.city_weather_date'); 



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get number of elements per subarray
const numsPerGroup = Math.ceil(nums.length / 3);
// Create array based on number of groups
const result = new Array(3)
  // Make sure each element isn't empty
  .fill('')
  // For each group, grab the right `slice` of the input array
  .map((_, i) => nums.slice(i * numsPerGroup, (i + 1) * numsPerGroup));