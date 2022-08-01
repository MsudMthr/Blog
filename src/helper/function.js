// get date and convert - to /
const dateSplitter = (date) => {
  const arrayDate = date.split("-");
  const joinDate = arrayDate.join("/");
  return joinDate;
};

// get text and return 20 word from text
const textShorter = (text) => {
    const textSplitted = text.split(" ")
    const sliceText = textSplitted.splice(0,20)
    const joinedText = sliceText.join(" ")
    return joinedText
}

export {dateSplitter, textShorter}
