import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/bb12991fd4345e4a9fb1d.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `انضم الى قناتنا سوف تعجبك🖤🎶 `.trim() },
            footer: { text: `©khaled Shatah : المطور🖤`.trim() },  
            header: {
                title: `اهلا بك في بوت                                      ستو🖤ــرـــ🖤ـيـات🙈🖤 @${mentionId.split('@')[0]}`,
                subtitle: `khaled`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: 'الازرار😀💙',
  						  		sections: [
  						  			{
  						  				title: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
  							  	    highlight_label: 'khaled',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'اهلا بك',
  										      title: ' تحميل التطبيقات ',
  									    	  description: 'اضغط',
  								    		  id: '.dapk2'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
                        title: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
  						  				highlight_label: 'khaled',
  						  				rows: [
  						  					{
  						  		    		header: 'صور قطط',
  										      title: 'قط🐈',
  									    	  description: 'تابع قناتنا على واتس اب `https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A`',
  								    		  id: '.cat'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  			title: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
  						  				highlight_label: 'khaled',
  						  				rows: [
  						  					{
  						  		    		header: 'صور كلاب',
  										      title: 'كلب🐕',
  									    	  description: 'تابع قناتنا على واتس اب `https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A`',
  								    		  id: '.dog'
  								    		  	}
  						  				]
  						  			},
  						  			{
  						  			title: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
  						  				highlight_label: 'khaled',
  						  				rows: [
  						  					{
  						  		    		header: 'صورة هكر',
  										      title: '👾صور هكر',
  									    	  description: 'تابع قناتنا على واتس اب `https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A`',
  								    		  id: '.hacker'
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
                                      display_text: 'ستو🖤ــرـــ🖤ـيـات🙈🖤',
                                      url: 'https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A',
                                      merchant_url: ''
                                                                   })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'المطور🎶🖤',
                                      url: 'https://wa.me/963980677944',
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
