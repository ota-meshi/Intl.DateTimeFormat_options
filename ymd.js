/*eslint-disable prefer-arrow-callback,no-unused-vars,object-shorthand,prefer-rest-params*/

'use strict';
const date = new Date(Date.UTC(1999, 0, 2, 3, 4, 5));
const weekdays = ['narrow', 'short', 'long'];
const eras = ['narrow', 'short', 'long'];
const years = ['numeric', '2-digit'];
const months = ['numeric', '2-digit', 'narrow', 'short', 'long'];
const days = ['numeric', '2-digit'];
const hours = ['numeric', '2-digit'];
const minutes = ['numeric', '2-digit'];
const seconds = ['numeric', '2-digit'];
const timeZoneNames = ['short', 'long'];
const locales = [{lang: 'Afrikaans (Suid-Afrika)', code: 'af-ZA'},
	{lang: 'Bahasa Indonesia (Indonesia)', code: 'id-ID'},
	{lang: 'Bahasa Melayu (Malaysia)', code: 'ms-MY'},
	{lang: 'Català (Espanya)', code: 'ca-ES'},
	{lang: 'Čeština (Česká republika)', code: 'cs-CZ'},
	{lang: 'Dansk (Danmark)', code: 'da-DK'},
	{lang: 'Deutsch (Deutschland)', code: 'de-DE'},
	{lang: 'English (Australia)', code: 'en-AU'},
	{lang: 'English (Canada)', code: 'en-CA'},
	{lang: 'English (Great Britain)', code: 'en-GB'},
	{lang: 'English (India)', code: 'en-IN'},
	{lang: 'English (Ireland)', code: 'en-IE'},
	{lang: 'English (New Zealand)', code: 'en-NZ'},
	{lang: 'English (Philippines)', code: 'en-PH'},
	{lang: 'English (South Africa)', code: 'en-ZA'},
	{lang: 'English (United States)', code: 'en-US'},
	{lang: 'Español (Argentina)', code: 'es-AR'},
	{lang: 'Español (Bolivia)', code: 'es-BO'},
	{lang: 'Español (Chile)', code: 'es-CL'},
	{lang: 'Español (Colombia)', code: 'es-CO'},
	{lang: 'Español (Costa Rica)', code: 'es-CR'},
	{lang: 'Español (Ecuador)', code: 'es-EC'},
	{lang: 'Español (El Salvador)', code: 'es-SV'},
	{lang: 'Español (España)', code: 'es-ES'},
	{lang: 'Español (Estados Unidos)', code: 'es-US'},
	{lang: 'Español (Guatemala)', code: 'es-GT'},
	{lang: 'Español (Honduras)', code: 'es-HN'},
	{lang: 'Español (México)', code: 'es-MX'},
	{lang: 'Español (Nicaragua)', code: 'es-NI'},
	{lang: 'Español (Panamá)', code: 'es-PA'},
	{lang: 'Español (Paraguay)', code: 'es-PY'},
	{lang: 'Español (Perú)', code: 'es-PE'},
	{lang: 'Español (Puerto Rico)', code: 'es-PR'},
	{lang: 'Español (República Dominicana)', code: 'es-DO'},
	{lang: 'Español (Uruguay)', code: 'es-UY'},
	{lang: 'Español (Venezuela)', code: 'es-VE'},
	{lang: 'Euskara (Espainia)', code: 'eu-ES'},
	{lang: 'Filipino (Pilipinas)', code: 'fil-PH'},
	{lang: 'Français (Canada)', code: 'fr-CA'},
	{lang: 'Français (France)', code: 'fr-FR'},
	{lang: 'Galego (España)', code: 'gl-ES'},
	{lang: 'Hrvatski (Hrvatska)', code: 'hr-HR'},
	{lang: 'IsiZulu (Ningizimu Afrika)', code: 'zu-ZA'},
	{lang: 'Íslenska (Ísland)', code: 'is-IS'},
	{lang: 'Italiano (Italia)', code: 'it-IT'},
	{lang: 'Lietuvių (Lietuva)', code: 'lt-LT'},
	{lang: 'Magyar (Magyarország)', code: 'hu-HU'},
	{lang: 'Nederlands (Nederland)', code: 'nl-NL'},
	{lang: 'Norsk bokmål (Norge)', code: 'nb-NO'},
	{lang: 'Polski (Polska)', code: 'pl-PL'},
	{lang: 'Português (Brasil)', code: 'pt-BR'},
	{lang: 'Português (Portugal)', code: 'pt-PT'},
	{lang: 'Română (România)', code: 'ro-RO'},
	{lang: 'Slovenčina (Slovensko)', code: 'sk-SK'},
	{lang: 'Slovenščina (Slovenija)', code: 'sl-SI'},
	{lang: 'Suomi (Suomi)', code: 'fi-FI'},
	{lang: 'Svenska (Sverige)', code: 'sv-SE'},
	{lang: 'Tiếng Việt (Việt Nam)', code: 'vi-VN'},
	{lang: 'Türkçe (Türkiye)', code: 'tr-TR'},
	{lang: 'Ελληνικά (Ελλάδα)', code: 'el-GR'},
	{lang: 'Български (България)', code: 'bg-BG'},
	{lang: 'Русский (Россия)', code: 'ru-RU'},
	{lang: 'Српски (Србија)', code: 'sr-RS'},
	{lang: 'Українська (Україна)', code: 'uk-UA'},
	{lang: 'עברית (ישראל)', code: 'he-IL'},
	{lang: 'العربية (إسرائيل)', code: 'ar-IL'},
	{lang: 'العربية (الأردن)', code: 'ar-JO'},
	{lang: 'العربية (الإمارات)', code: 'ar-AE'},
	{lang: 'العربية (البحرين)', code: 'ar-BH'},
	{lang: 'العربية (الجزائر)', code: 'ar-DZ'},
	{lang: 'العربية (السعودية)', code: 'ar-SA'},
	{lang: 'العربية (العراق)', code: 'ar-IQ'},
	{lang: 'العربية (الكويت)', code: 'ar-KW'},
	{lang: 'العربية (المغرب)', code: 'ar-MA'},
	{lang: 'العربية (تونس)', code: 'ar-TN'},
	{lang: 'العربية (عُمان)', code: 'ar-OM'},
	{lang: 'العربية (فلسطين)', code: 'ar-PS'},
	{lang: 'العربية (قطر)', code: 'ar-QA'},
	{lang: 'العربية (لبنان)', code: 'ar-LB'},
	{lang: 'العربية (مصر)', code: 'ar-EG'},
	{lang: 'فارسی (ایران)', code: 'fa-IR'},
	{lang: 'हिन्दी (भारत)', code: 'hi-IN'},
	{lang: 'ไทย (ประเทศไทย)', code: 'th-TH'},
	{lang: '한국어 (대한민국)', code: 'ko-KR'},
	{lang: '國語 (台灣)', code: 'cmn-Hant-TW'},
	{lang: '廣東話 (香港)', code: 'yue-Hant-HK'},
	{lang: '日本語（日本）', code: 'ja-JP'},
	{lang: '普通話 (香港)', code: 'cmn-Hans-HK'},
	{lang: '普通话 (中国大陆)', code: 'cmn-Hans-CN'},
];

const reverseYmdHms = {};

(function() {
	const tbody = document.getElementById('ymd');

	function addRow() {
		const args = Array.prototype.slice.call(arguments);
		const tr = document.createElement('tr');
		tbody.appendChild(tr);
		args.forEach(function(a) {
			const td = document.createElement('td');
			tr.appendChild(td);
			td.textContent = a;
		});
	}

	addRow('locale言語', 'locale', 'year', 'month', 'day', 'format');

	locales.forEach(function(locale) {
		years.forEach(function(year) {
			months.forEach(function(month) {
				days.forEach(function(day) {
					const opt = {year: year, month: month, day: day, timeZone: 'UTC', locale: locale.code};
					const fmt = new Intl.DateTimeFormat(locale.code, opt).format(date);
					addRow(locale.lang, locale.code, year, month, day, fmt);

					const list = reverseYmdHms[fmt] || (reverseYmdHms[fmt] = []);
					delete opt.timeZone;
					list.push(opt);
				});
			});
		});
	});


})();