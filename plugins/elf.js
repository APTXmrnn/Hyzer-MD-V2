let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elf', {}, 'apikey'), 'Nih', wm, 'NEXT', '.elf', m)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

handler.limit = true

module.exports = handler
