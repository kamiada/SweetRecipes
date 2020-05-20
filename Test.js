const array = [
  {index: 0, value: "something"},
  {index: 1, value: "something else"},
  {index: 3, value: "something else once more"},
];
const result = [];

//LOAD NEXT OBJECT

for (i = 0; i < array.length; i++) {
  const currentIndex = array.index[i];
  if (ButtonNEXTWasClicked) {
    for (n = 1; n < array.length; n++) {
      next = array.index[i];
      if (currentIndex + 1 === next) {
        // loadNewObject;
        //current object becomes 'next' object
        currentIndex = next;
      } else {
        ("what will happen when there is not next?");
        //current object stays same
        currentIndex = currentIndex;
      }
    }
  } else "button was not clicked, so still current page";
}
//what will happen if there
