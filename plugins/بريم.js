//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ قم بعمل منشن للشخص الذي تريد وضعه بريم\n\n📌 مثل : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ هذا الشخص بريم بالفعل'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ اصبح الان بريم

@${who.split`@`[0]} now you become a premium user
┌───────────
▢ *Number:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium','بريم'] 

handler.group = true
handler.rowner = true

export default handler
