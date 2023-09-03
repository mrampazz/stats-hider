const saveSteamId = function (e) {
  const input = document.getElementById("steam-id-input");
  const steamId = input.value.trim();
  // if the steamId is empty then re-focus the input
  // and prevent future code from running
  if (steamId === "") {
    input.focus();
    e.preventDefault();
    return;
  }

  // at this point the steamId exists!
  // TODO: steam ID validation (LOL)

  // save steamId
  chrome.storage.local.set({ TF_STUFF_STEAM_ID: steamId }, function () {
    console.log("Saved id: ", steamId);
  });
};

const button = document.getElementById("steam-id-button");
button.addEventListener("click", saveSteamId);
