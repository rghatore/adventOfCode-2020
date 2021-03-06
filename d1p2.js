/*
Find the three entries that sum to 2020 and then multiply those three numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the three entries that sum to 2020 are 979, 366, and 675.
Multiplying them together produces the answer, 241861950.
*/

const input = [
  1567,
  1223,
  1758,
  1842,
  1933,
  1898,
  1409,
  1058,
  1533,
  1417,
  1032,
  1634,
  1477,
  1394,
  1888,
  1972,
  1237,
  1390,
  1677,
  1546,
  1302,
  1070,
  1369,
  1455,
  1065,
  1924,
  1593,
  1131,
  1064,
  1346,
  1914,
  1129,
  1830,
  1450,
  1278,
  1740,
  1809,
  1176,
  1734,
  1102,
  1807,
  1982,
  1603,
  1736,
  2008,
  1980,
  1905,
  1633,
  1732,
  1350,
  1865,
  1988,
  1805,
  1998,
  1152,
  1046,
  1870,
  1557,
  1789,
  1766,
  1945,
  1359,
  1002,
  1126,
  1719,
  1497,
  1296,
  1560,
  1936,
  1929,
  1464,
  2005,
  1281,
  618,
  1257,
  1107,
  1632,
  1688,
  1964,
  1803,
  1360,
  1384,
  1889,
  1411,
  1328,
  1452,
  1868,
  1515,
  1586,
  1631,
  1618,
  1087,
  1710,
  1094,
  1774,
  1295,
  1700,
  1636,
  1230,
  1421,
  1910,
  1522,
  1366,
  1144,
  1757,
  1493,
  1316,
  1103,
  687,
  1371,
  1720,
  1155,
  1559,
  1900,
  989,
  1367,
  1999,
  1066,
  1773,
  1787,
  1402,
  1047,
  1806,
  1956,
  1219,
  1555,
  1307,
  1419,
  1706,
  1884,
  1109,
  1181,
  2010,
  1298,
  1730,
  1078,
  1848,
  1398,
  1687,
  2007,
  1550,
  1664,
  1225,
  1079,
  1698,
  350,
  1222,
  1377,
  1977,
  1510,
  1571,
  1630,
  1029,
  1379,
  1942,
  1949,
  1249,
  1829,
  1297,
  1530,
  1607,
  1324,
  1069,
  1476,
  928,
  1039,
  1855,
  1644,
  1454,
  1310,
  1172,
  547,
  1034,
  1878,
  1479,
  1457,
  1319,
  1810,
  1759,
  1439,
  1851,
  545,
  1470,
  2003,
  1908,
  1564,
  1491,
  1174,
  1301,
  1689,
  1276,
  1781,
  1392,
  1499,
  1962,
  1653,
  1823,
  1381,
  1827,
  1974
];

const sumTwentyTwenty = (numbers) => {
  const start = Date.now();
  // sort the array
  const numbersSorted = numbers.sort((a, b) => a - b);
  // loop over array
  let i = 0
  let j = 1
  let k = numbers.length - 1;

  while (true) {

    first = numbersSorted[i];
    middle = numbersSorted[j];
    last = numbersSorted[k];

    console.log("first, middle, last: ", first, middle, last);

    if (first + middle + last === 2020) {
      const end = Date.now();
      console.log("Time: ", end - start);
      return first * middle * last;
    } else if (first + middle + last > 2020) {
      k--;
    } else if (first + middle + last < 2020) {
      // move the middle one step
      // move the first one step
      if (i < j - 1) {
        i++;
      } else {
        j++;
      }
    }

    if (i === j - 1 && j === k) {
      return null;
    }

  }

}

// test run
const testInput = [
  1721,
  979,
  366,
  299,
  675,
  1456
]

// console.log(sumTwentyTwenty(testInput));

// code of advent puzzle answer
console.log(sumTwentyTwenty(input));
/*
const sorenInput = [
    1757,
    1890,
    1750,
    1440,
    1822,
    1957,
    2005,
    1979,
    1405,
    2003,
    1997,
    1741,
    1494,
    1780,
    1774,
    1813,
    447,
    1429,
    1990,
    1767,
    1969,
    1787,
    1944,
    1863,
    1778,
    2004,
    1991,
    1754,
    1748,
    1756,
    1977,
    611,
    1934,
    1818,
    1924,
    528,
    1753,
    1867,
    1865,
    1799,
    1743,
    1955,
    1993,
    1972,
    1987,
    1960,
    1817,
    1837,
    1900,
    1839,
    1946,
    1786,
    1857,
    1840,
    1985,
    1850,
    1801,
    1926,
    1523,
    1886,
    1492,
    1737,
    1909,
    1766,
    1986,
    1773,
    1749,
    1781,
    1760,
    1849,
    1833,
    1854,
    1814,
    1820,
    2000,
    1834,
    1851,
    1779,
    1825,
    1885,
    1882,
    1912,
    962,
    1988,
    302,
    1965,
    1751,
    1764,
    1844,
    1949,
    1984,
    1933,
    958,
    1746,
    1999,
    1914,
    1989,
    1879,
    1954,
    1827,
    1816,
    1918,
    633,
    1797,
    1811,
    1936,
    1961,
    1937,
    1829,
    1788,
    1772,
    1505,
    1905,
    1304,
    1404,
    1868,
    1978,
    1872,
    2006,
    1256,
    1883,
    1966,
    1931,
    1796,
    1793,
    714,
    1904,
    1841,
    1824,
    1962,
    1739,
    1897,
    1906,
    1735,
    1876,
    873,
    1959,
    1963,
    1917,
    1804,
    1789,
    1782,
    1848,
    1828,
    1826,
    1929,
    1525,
    1862,
    1952,
    1878,
    1775,
    1776,
    1430,
    1943,
    1938,
    1941,
    1594,
    1928,
    1856,
    1903,
    1871,
    1836,
    1847,
    1956,
    1915,
    1870,
    1875,
    1892,
    276,
    1896,
    1945,
    1821,
    1947,
    1898,
    1802,
    1853,
    1895,
    1790,
    1819,
    1980,
    1832,
    1673,
    1964,
    1800,
    1971,
    1842,
    2002,
    1921,
    1940,
    1845,
    1527,
    1428,
    1932,
    1893,
    1908,
    1889,
    1974,
    1981,
    1791,
    1975,
  ];

// console.log(sumTwentyTwenty(sorenInput));
*/
