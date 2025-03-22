"use strict";
/** Sets cookie valid only for current session
 * @param {string} cname
 * @param {string} cvalue
 * @returns {void}
 */
function setSessionCookie(cname, cvalue) {
    document.cookie = cname + '=' + cvalue + ';path=/';
}

/** Sets cookie valid only for a year or exdays if defined
 * @param {string} cname
 * @param {string} cvalue
 * @param {number=} exdays
 * @returns {void}
 */
function setCookie(cname, cvalue, exdays = 365) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    window.document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

/** Gets cookie
 * @param {string} cname
 * @returns {string}
 */
function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i in ca) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

/** Deletes cookie
 * @param {string} cname
 * @returns {void}
 */
function delCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/** Gets cookie if exists, otherwise sets cookie valid only for a year or exdays if defined
 * @param {string} cname
 * @param {string} cdef
 * @param {number=} exdays
 * @returns {string}
 */
function getOrInitCookie(cname, cdef, exdays=365) {
    let c = getCookie(cname);
    if (c == "" || c == null) {
        c = cdef;
        setCookie(cname, c, exdays);
    }
    return c;
}
