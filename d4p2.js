/*
--- Part Two ---
The line is moving more quickly now, but you overhear airport security talking about how passports with invalid data are getting through. Better add some data validation, quick!

You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:

byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
Your job is to count the passports where all required fields are both present and valid according to the above rules. Here are some example values:

byr valid:   2002
byr invalid: 2003

hgt valid:   60in
hgt valid:   190cm
hgt invalid: 190in
hgt invalid: 190

hcl valid:   #123abc
hcl invalid: #123abz
hcl invalid: 123abc

ecl valid:   brn
ecl invalid: wat

pid valid:   000000001
pid invalid: 0123456789
Here are some invalid passports:

eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007
Here are some valid passports:

pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
Count the number of valid passports - those that have all required fields and valid values. Continue to treat cid as optional. In your batch file, how many passports are valid?
*/

const fs = require('fs');

const validPassports = (passports) => {

  // loop through passwords and check if keys exist
  // keep tally of valid passwords
  let num = 0;
  const validFields = ["byr:", "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"]

  passports.forEach(passport => {
    if (validFields.every(item => passport.includes(item))) {
      // split each item by space or \n
      const passport_entry = passport.split(/\s+/)
      let valid = true;
      // passport_entry.forEach(entry => { // you can't really break/return out of forEach
      for (const entry of passport_entry) {
        const field = entry.split(":");
        valid = true;
        // switch based on field[0]
        switch (field[0]) {
          case 'byr':
            // code
            if (Number.isNaN(field[1]) || field[1] < 1920 || field[1] > 2002) {
              valid = false;
              break;
            } else {
              break;
            }
          case 'iyr':
            // code
            if (Number.isNaN(field[1]) || field[1] < 2010 || field[1] > 2020) {
              valid = false;
              break;
            } else {
              break;
            }
          case 'eyr':
            // code
            if (Number.isNaN(field[1]) || field[1] < 2020 || field[1] > 2030) {
              valid = false;
              break;
            } else {
              break;
            }
          case 'hgt':
            // code
            if (field[1].substring(field[1].length - 2) === 'in' && field[1].length === 4) {
              const height = field[1].substring(0, 2);
              if (Number.isNaN(height) || height < 59 || height > 76) {
                valid = false;
                break;
              } else {
                break;
              }
            } else if (field[1].substring(field[1].length - 2) === 'cm' && field[1].length === 5) {
              const height = field[1].substring(0, 3);
              if (Number.isNaN(height) || height < 150 || height > 193) {
                valid = false;
                break;
              } else {
                break;
              }
            } else {
              valid = false;
              break;
            }
          case 'hcl':
            // code
            if (field[1].length !== 7 || !field[1].match(/(^#+([0-9]|[a-f]))/g)) {
              valid = false;
              break;
            } else {
              break;
            }
          case 'ecl':
            // code
            if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(field[1])) {
              valid = false;
              break;
            } else {
              break;
            }
          case 'pid':
            // code
            if (Number.isNaN(field[1]) || field[1].length !== 9) {
              valid = false;
              break;
            } else {
              break;
            }
          default:
            break;
        }
        if (!valid) return valid;
      }

      valid && num++;
      // console.log(`valid: ${valid}, num: ${num}`)

    }
  })

  return num;
}

fs.readFile("./data/day4_data.txt", "utf-8", (error, data) => {
  if (error) throw error;

  const passports = data.split("\n\n");
  console.log(validPassports(passports));

});