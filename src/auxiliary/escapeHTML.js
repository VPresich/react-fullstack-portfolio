const escapeHTML = (str) => {
  return str.replace(/[&<>"']/g, (match) => {
    const escapeChars = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return escapeChars[match];
  });
};

export default escapeHTML;
