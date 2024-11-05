addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".mobile-header-search-field");
  const Desktopinput = document.querySelector(".textSearch_1");
  const desktopSearchPopup = document.querySelector(
    ".search-bar .search-input"
  );
  const placeholders = ["Search for Club, Country, Player or Product"];
  let currentPlaceholderIndex = 0;
  let currentCharIndex = 0;
  let typingDelay = 50;
  let erasingDelay = 100;
  let newPlaceholderDelay = 2000;
  let cursorVisible = true;

  function toggleCursor() {
    input.placeholder = input.placeholder.endsWith("|")
      ? input.placeholder.slice(0, -1)
      : input.placeholder + "|";
    Desktopinput.placeholder = Desktopinput.placeholder.endsWith("|")
      ? Desktopinput.placeholder.slice(0, -1)
      : Desktopinput.placeholder + "|";
    desktopSearchPopup.placeholder = desktopSearchPopup.placeholder.endsWith(
      "|"
    )
      ? desktopSearchPopup.placeholder.slice(0, -1)
      : desktopSearchPopup.placeholder + "|";
  }

  function typePlaceholder() {
    if (currentCharIndex < placeholders[currentPlaceholderIndex].length) {
      input.placeholder =
        placeholders[currentPlaceholderIndex].substring(
          0,
          currentCharIndex + 1
        ) + "|";
      Desktopinput.placeholder =
        placeholders[currentPlaceholderIndex].substring(
          0,
          currentCharIndex + 1
        ) + "|";
      desktopSearchPopup.placeholder =
        placeholders[currentPlaceholderIndex].substring(
          0,
          currentCharIndex + 1
        ) + "|";
      currentCharIndex++;
      setTimeout(typePlaceholder, typingDelay);
    } else {
      cursorVisible = false;
      setTimeout(() => {
        cursorVisible = true;
        setInterval(toggleCursor, 500); // Start blinking cursor after typing
      }, newPlaceholderDelay);
      setTimeout(erasePlaceholder, newPlaceholderDelay);
    }
  }

  function erasePlaceholder() {
    if (currentCharIndex > 0) {
      input.placeholder =
        placeholders[currentPlaceholderIndex].substring(
          0,
          currentCharIndex - 1
        ) + "|";
      Desktopinput.placeholder =
        placeholders[currentPlaceholderIndex].substring(
          0,
          currentCharIndex - 1
        ) + "|";
      desktopSearchPopup.placeholder =
        placeholders[currentPlaceholderIndex].substring(
          0,
          currentCharIndex - 1
        ) + "|";
      currentCharIndex--;
      setTimeout(erasePlaceholder, erasingDelay);
    } else {
      currentPlaceholderIndex =
        (currentPlaceholderIndex + 1) % placeholders.length;
      setTimeout(typePlaceholder, typingDelay);
    }
  }

  setInterval(toggleCursor, 500); // Initial cursor blink
  setTimeout(typePlaceholder, newPlaceholderDelay);
});
