/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'link-types\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-font-external': '&#xf08e;',
		'icon-font-pdf': '&#xe2bb;',
		'icon-font-openoffice': '&#xe2bc;',
		'icon-font-word': '&#xe2bd;',
		'icon-font-excel': '&#xe2be;',
		'icon-font-powerpoint': '&#xe2bf;',
		'icon-font-zip': '&#xe2c0;',
		'icon-font-html': '&#xe2c1;',
		'icon-font-css': '&#xe2c2;',
		'icon-font-mail': '&#xe079;',
		'icon-font-help': '&#xe1e0;',
		'icon-font-warning': '&#xe1dc;',
		'icon-font-info': '&#xe1e3;',
		'icon-font-feed': '&#xe284;',
		'icon-font-libreoffice': '&#xe2ba;',
		'icon-font-text': '&#xe052;',
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
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
