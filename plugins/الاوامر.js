import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/bb12991fd4345e4a9fb1d.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `©khaled for test`.trim() },  
            header: {
                title: `test hi @${mentionId.split('@')[0]}`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: 'Click Me',
  						  		sections: [
  						  			{
  						  				title: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
  							  	    highlight_label: 'khaled',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'اهلا بك',
  										      title: ' تحميل التطبيقات ',
  									    	  description: 'اضغط',
  								    		  id: '.apk'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
                        title: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: 'Click Me',
  								    		  id: 'tes'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: 'Test',
  										      title: 'Click Me',
  									    	  description: 'Click Me',
  								    		  id: 'te'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'الاوامر🖤🖤',
                                      id: `.all`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'url',
                                      url: 'https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A',
                                      merchant_url: ''
                             
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(khaled|menu|الاوامر)$/i;
export default handler;
