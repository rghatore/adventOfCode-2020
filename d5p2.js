/*
Instead of zones or groups, this airline uses binary space partitioning to seat people. A seat might be specified like FBFBBFFRLR, where F means "front", B means "back", L means "left", and R means "right".

The first 7 characters will either be F or B; these specify exactly one of the 128 rows on the plane (numbered 0 through 127). Each letter tells you which half of a region the given seat is in. Start with the whole list of rows; the first letter indicates whether the seat is in the front (0 through 63) or the back (64 through 127). The next letter indicates which half of that region the seat is in, and so on until you're left with exactly one row.

For example, consider just the first seven characters of FBFBBFFRLR:

Start by considering the whole range, rows 0 through 127.
F means to take the lower half, keeping rows 0 through 63.
B means to take the upper half, keeping rows 32 through 63.
F means to take the lower half, keeping rows 32 through 47.
B means to take the upper half, keeping rows 40 through 47.
B keeps rows 44 through 47.
F keeps rows 44 through 45.
The final F keeps the lower of the two, row 44.
The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7). The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.

For example, consider just the last 3 characters of FBFBBFFRLR:

Start by considering the whole range, columns 0 through 7.
R means to take the upper half, keeping columns 4 through 7.
L means to take the lower half, keeping columns 4 through 5.
The final R keeps the upper of the two, column 5.
So, decoding FBFBBFFRLR reveals that it is the seat at row 44, column 5.

Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this example, the seat has ID 44 * 8 + 5 = 357.

Here are some other boarding passes:

BFFFBBFRRR: row 70, column 7, seat ID 567.
FFFBBBFRRR: row 14, column 7, seat ID 119.
BBFFBBFRLL: row 102, column 4, seat ID 820.

Ding! The "fasten seat belt" signs have turned on. Time to find your seat.

It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.

Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.

What is the ID of your seat?
*/
const fs = require('fs');

// function to store ids in an array
const seatIds = (seat) => {

  let row = '';
  let column = '';
  let seats = [];
  
  seat.forEach(code => {
    // get row and column
    // replace F, L with 0, B. R with 1
    row = code.substring(0,7).replace(/F/g, '0').replace(/B/g, '1');
    column = code.substring(7).replace(/L/g, '0').replace(/R/g, '1');
    const seatId = parseInt(row, 2) * 8 + parseInt(column, 2);
    // console.log(`row: ${row} = ${parseInt(row, 2)}, column: ${column}`);
    seats.push(seatId);
  });

  return seats;
};

// function to check seat ids array and find a gap
const myId = (seats) => {

  const ids = seats.sort((a, b) => a - b);

  const mySeatId = ids.find((item, index, array) => {
    // return (item - 1 !== array[index - 1]) && (item + 1 !== array[index + 1]);
    return (item + 1 !== array[index + 1])
  })

  return (mySeatId + 1);
}


fs.readFile('./data/day5_data.txt', 'utf-8', (error, data) => {

  if (error) throw error;

  const seat = data.split('\n');

  const seats = seatIds(seat);
  console.log(myId(seats));

});
