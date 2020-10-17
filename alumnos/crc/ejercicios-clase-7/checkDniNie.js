const regexDNINIE = /(([0-9]{8})([A-Z]{1}))|(([XZY]{1})([0-9]{7})([A-Z]{1}))/

function checkDNINIE(dninie) {
  return regexDNINIE.test(dninie);
}

// DNI
checkDNINIE('1234234') // false
checkDNINIE('43423434L') // true
checkDNINIE('43423434l') // false

// NIE
checkDNINIE('1234234') // false
checkDNINIE('A4342343L') // false
checkDNINIE('Z1234328A') // true
