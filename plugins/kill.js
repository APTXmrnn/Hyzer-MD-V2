let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/kill', {}, 'apikey'), 'SUMEI KILL', wm, 'NEXT', 'kill', m)
}
handler.help = ['kill']
handler.tags = ['anime']
handler.command = /^(kill)$/i

handler.limit = true

module.exports = handler
