/*
import {DieSzimfonia} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["s"] = DieSzimfonia;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if(message.isAuthor){
        let defense = 0;
        let focus = 0;
        let success = 0;
        let szRoll = false;
        message.roll.dice.forEach(dice => {
            if(dice instanceof DieSzimfonia){
                szRoll = true;
                dice.results.forEach(res => {
                    switch(res.result){
                        case 5:
                            defense++;
                            break;
                        case 4:
                            focus+=2;
                            break;
                        case 1:
                            success++;
                            break;
                        case 2:
                            success+=2;
                            break;
                        case 3:
                            focus++;
                            break;
                        case 6:
                            defense++;
                            break;
                    }
                });
            }
        });

        if(szRoll){
            ChatMessage.create({
                content: `<b>Defense:</b> ${defense}<br><b>Success:</b> ${success}<br><b>Focus:</b> ${focus}`,
                whisper: message.data.whisper,
                blind: message.data.blind
            });
        }
    }
});
*/

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"cise",name:"Cise"},true);
    dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/cise/artwork/S1.png',
        'modules/cise/artwork/S2.png', 
        'modules/cise/artwork/F1.png',
		    'modules/cise/artwork/F2.png',
        'modules/cise/artwork/D1_bg.png',
        'modules/cise/artwork/D1_bg.png'
      ],
      bumpMaps:[
        'modules/cise/artwork/S1_bump.png',
        'modules/cise/artwork/S2_bump.png',
        'modules/cise/artwork/F1_bump.png',
        'modules/cise/artwork/F2_bump.png',
        'modules/cise/artwork/D1_bump.png',
		     'modules/cise/artwork/D1_bump.png'
      ],
      system:"cise"
    });
});
