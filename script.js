function generateText() {
  var lists = [
    document.getElementById("action"),
    document.getElementById("acting"),
    document.getElementById("public"),
    document.getElementById("fields")
  ];
  
  var textarea = document.getElementById("generatedPrompt");
  var generatedText = "";
  
  for (var i = 0; i < lists.length; i++) {
    var selectedOption = lists[i].options[lists[i].selectedIndex].value;
    generatedText += selectedOption + " ";
  }
  
  textarea.value = generatedText.trim();
}

function copyToClipboard() {
  var textarea = document.getElementById("generatedPrompt");
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Pour les navigateurs mobiles
  document.execCommand("copy");
}
