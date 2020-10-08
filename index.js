const fs = require('fs');
const toml = require('toml');

const base = 32;
const characters = 20;
const base32hex = toml.parse(fs.readFileSync('./base32hex.toml', 'utf-8'));

/**
 * Check if the given string is a XID
 * @param {string} str the string to check
 * @return {bool} return true if the string is a XID
 */
function isXid(str) {
    // revert each chars and create an iterable array
    const chars = str.split('').reverse();
    let power = characters;
    let decimal = 0;
    for (let i = 0; i < chars.length; i += 1) {
        // retrieve the associated decimal value
        const value = base32hex[chars[i]];
        // calcul
        const result = value * Math.pow(base, power);
        // decrement the power value
        power -= 1;
        // add this result to the final decimal
        decimal += result;
    }
    console.log(decimal);

    // if (typeof str !== 'string') {
    //     return false;
    // }

    // if (str.length !== characters) {
    //     return false;
    // }

    // if (Buffer.byteLength(str, 'utf8') !== 12) {
    //     return false;
    // }

    // return true;
}

isXid('btkvm18kuti3cdaud46g');


module.exports = isXid;

// const xid = 'btkvm18kuti3cdaud46g';
// const decimal = '11 29 20 31 22 1 8 20 30 29 18 3 12 13 10 30 13 4 6 16';
// '6g = 6*32^1 + 16*32^0 = 192 + 16 = 208;'
// '208 = 1101 0000'
// '0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000'

// Base 32 de départ
// Conversion en décimale : Créer calcul pour chaque valeur associées
// Depuis valeur décimale, convertir en binaire
// Calculer bytes valeur binaire

// https://en.wikipedia.org/wiki/Endianness
// http://www.unitconversion.org/numbers/base-10-to-base-32-conversion.html
// https://en.wikipedia.org/wiki/Base32#base32hex
// https://tools.ietf.org/html/rfc4648#section-6
