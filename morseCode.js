/*
    This is the JavaScript code for 
    "Morse Code Translator V1"
*/

function init(){
    var button = document.getElementById("runTranslate");
        button.onclick = morseCode;
}

function morseCode() {
	var stringTrans;
	var output;
	var form;
	var letterTrans = {
		'A': ['.-'],
		'B': ['-...'],
		'C': ['-.-.'],
		'D': ['-..'],
		'E': ['.'],
		'F': ['..-.'],
		'G': ['--.'],
		'H': ['....'],
		'I': ['..'],
		'J': ['.---'],
		'K': ['-.-'],
		'L': ['.-..'],
		'M': ['--'],
		'N': ['-.'],
		'O': ['---'],
		'P': ['.--.'],
		'Q': ['--.-'],
		'R': ['.-.'],
		'S': ['...'],
		'T': ['-'],
		'U': ['..-'],
		'V': ['...-'],
		'W': ['.--'],
		'X': ['-..-'],
		'Y': ['-.--'],
		'Z': ['--..'],
		'1': ['.----'],
		'2': ['..---'],
		'3': ['...--'],
		'4': ['....-'],
		'5': ['.....'],
		'6': ['-....'],
		'7': ['--...'],
		'8': ['---..'],
		'9': ['----.'],
		'0': ['-----'],
		' ': ['/'],
		',': ['--..--'],
		'.': ['.-.-.-'],
		'?': ['..--..'],
		'\'': ['.----.'],
		'!': ['-.-.--'],
		'/': ['-..-.'],
		'(': ['-.--.'],
		')': ['-.--.-'],
		'&': ['.-...'],
		':': ['---...'],
		';': ['-.-.-.'],
		'=': ['-...-'],
		'+': ['.-.-.'],
		'-': ['-....-'],
		'_': ['..--.-'],
		'\"': ['.-..-.'],
		'$': ['...-..-'],
		'@': ['.--.-.']
	};
	
	//Prompt User for String
	output = document.getElementById("outputDiv");
	form = document.getElementById("morseInputForm");
	
	stringTrans = form.inputString.value;
	stringTrans = stringTrans.toUpperCase();
	output.innerHTML = stringTrans + "<br />";
        for ( var index = 0; index < stringTrans.length; index++ ){
            output.innerHTML += (letterTrans[stringTrans.charAt(index)] + " " );
        }
    return false;
}



