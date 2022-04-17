let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('amel', '/loli', {}, 'apikey'), 'Nih dasar pedofil', wm, 'NEXT', 'loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.limit = true

module.exports = handler
