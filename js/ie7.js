/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'link-types\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-link-external-kwd': '&#xf08e;',
		'icon-link-pdf-kwd': '&#xe2bb;',
		'icon-link-openoffice-kwd': '&#xe2bc;',
		'icon-link-word-kwd': '&#xe2bd;',
		'icon-link-excel-kwd': '&#xe2be;',
		'icon-link-powerpoint-kwd': '&#xe2bf;',
		'icon-link-zip-kwd': '&#xe2c0;',
		'icon-link-html-kwd': '&#xe2c1;',
		'icon-link-css-kwd': '&#xe2c2;',
		'icon-link-mail-kwd': '&#xe079;',
		'icon-link-help-kwd': '&#xe1e0;',
		'icon-link-warning-kwd': '&#xe1dc;',
		'icon-link-info-kwd': '&#xe1e3;',
		'icon-feed-kwd': '&#xe284;',
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
