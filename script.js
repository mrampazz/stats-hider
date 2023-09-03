chrome.storage.local.get("TF_STUFF_STEAM_ID", function (result) {
  // TODO: fix how we get this steam id shit
  // TODO: show error on popup if something happens
  const steamId = result["TF_STUFF_STEAM_ID"];

  if (!steamId) {
    console.error("No steam id found in chrome storage");
  }

  // get the row of the logs
  const playerRow = document.getElementById(`player_${steamId}`);

  if (!playerRow) {
    console.log("Player row was not found");
  }

  // iterate through table row's children
  for (let i = 2; i < playerRow.children.length; i++) {
    if (i === 2) {
      const classesTd = playerRow.children[i];
      // clones each "class" icon so they are not evented
      for (let c = 0; c < classesTd.children.length; c++) {
        const el = classesTd.children[c];
        const newElement = el.cloneNode(el);
        classesTd.replaceChild(newElement, el);
      }
    } else {
      // replaces stat with "?"
      const td = playerRow.children[i];
      td.innerHTML = "?";
    }
  }
});
