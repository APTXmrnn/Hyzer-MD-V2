let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/shota', {}, 'apikey'), 'Nih shota nya bestih', wm, 'NEXT', 'shota', m)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i

handler.limit = true

module.exports = handler
