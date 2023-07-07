module.exports = async (url, data) => {
  try {
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);

    const result = await response.json();

    if (!result) throw new Error(`Failed to fetch`);

    console.log(
      "🚀 ~ file: createNewUser.js:9 ~ module.exports= ~ result:",
      result
    );
  } catch (error) {
    console.log(
      "🚀 ~ file: createNewUser.js:5 ~ module.exports= ~ error:",
      error
    );
  }
};
