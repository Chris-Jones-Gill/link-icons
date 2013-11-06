/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'link-types\'">' + entity + '</span>' + html;
	}
	var icons = {
		'kwd-icon-font-external': '&#xf08e;',
		'kwd-icon-font-pdf': '&#xe2bb;',
		'kwd-icon-font-openoffice': '&#xe2bc;',
		'kwd-icon-font-word': '&#xe2bd;',
		'kwd-icon-font-excel': '&#xe2be;',
		'kwd-icon-font-powerpoint': '&#xe2bf;',
		'kwd-icon-font-zip': '&#xe2c0;',
		'kwd-icon-font-html': '&#xe2c1;',
		'kwd-icon-font-css': '&#xe2c2;',
		'kwd-icon-font-mail': '&#xe079;',
		'kwd-icon-font-help': '&#xe1e0;',
		'kwd-icon-font-warning': '&#xe1dc;',
		'kwd-icon-font-info': '&#xe1e3;',
		'kwd-icon-font-feed': '&#xe284;',
		'kwd-icon-font-libreoffice': '&#xe2ba;',
		'kwd-icon-font-text': '&#xe052;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/kwd-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
