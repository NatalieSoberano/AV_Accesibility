var dialogueTimings = [35,49,73,83,116,127,140,165,176,197,210],
        dialogues = document.querySelectorAll('#transcript>li'),
        transcriptWrapper = document.querySelector('#transcriptWrapper'),
        audio = document.querySelector('#audio'),
        previousDialogueTime = -1;   

function playTranscript() {

    var currentDialogueTime = Math.max.apply(Math, dialogueTimings.filter(function(v){return v <= audio.currentTime}));

        if(previousDialogueTime !== currentDialogueTime) {
            previousDialogueTime = currentDialogueTime;
            var currentDialogue = dialogues[dialogueTimings.indexOf(currentDialogueTime)];
            transcriptWrapper.scrollTop  = currentDialogue.offsetTop - 50;  
            var previousDialogue = document.getElementsByClassName('speaking')[0];
            if(previousDialogue !== undefined)
                previousDialogue.className = previousDialogue.className.replace('speaking','');
            currentDialogue.className +=' speaking';
        }
    };
