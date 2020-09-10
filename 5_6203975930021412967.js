'use strict';

const Composer = require('telegraf/composer');


const badWordsBanned = [
	/@onlypremiumsign/,
	/@PRO_TRADE_/,
	/@premium_call/,
	/@dropatz/,
	/@cloudrop/,
	/♻️ @/,
	/👉 TUTORIAL/
].map(regex => text => regex.exec(text));


module.exports = Composer.match(badWordsBanned, ctx =>
	Promise.all([
		ctx.ban({
			admin: ctx.botInfo,
			reason: 'Scam Link',
			userToBan: ctx.from
		}),
		ctx.deleteMessage()
	]));
