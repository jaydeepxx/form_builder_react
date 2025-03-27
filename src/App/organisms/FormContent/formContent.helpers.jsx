const saveToHistory = (setHistory, formData, history) => {
  // console.log(formData)
  setHistory((prev) => {
    // If we're not at the end of the stack, truncate the future
    const newPast =
      prev.currentIndex < prev.past.length - 1
        ? prev.past.slice(0, prev.currentIndex + 1)
        : prev.past;
    return {
      past: [...newPast, formData],
      currentIndex: newPast.length,
    };
  });
};

export { saveToHistory };
