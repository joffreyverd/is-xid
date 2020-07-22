/**
 * Check if the given string is a XID
 * @param {string} str the string to check
 * @return {bool} return true if the string is a XID
 */
function isXid(str) {
    if (str.length !== 20) {
        return false;
    }

    if (Buffer.byteLength(str, 'utf8') !== 20) {
        return false;
    }

    return true;
}

module.exports = isXid;
