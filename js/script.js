// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

// Add Event Listener
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

// Clear the input box
const clearInput = function () {
  guestInput.value = "";
};

// Create a list item & add it to list
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

// Update guest count
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

// Function that randomly assigns dishes to guests
const assignItems = function () {
  const potluckItems = [
    "Zucchini Noodles",
    "Sandwiches",
    "Couscous Salad",
    "Pasta Salad",
    "Bruschetta",
    "Veggie Rolls",
    "Hummus",
    "Caprese Salad",
    "Nutella Cookies",
    "Peach Tarts",
    "Mango Coconut Cake",
    "Fruit Salad"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  console.log(allGuests);

  for (let guest of allGuests) {
    // generate a number between 0 and the length of allGuests
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    // remove randomly selected element from array to prevent duplicate selection
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  // disable assignButton after it's clicked
  assignButton.disabled = true;
});
