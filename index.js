function logDetails() {
  const message = "Hey there! I'm Mridul, Web and App Developer.";
  const twitterLink = "https://twitter.com/i_mridul";
  const githubLink = "https://github.com/Mridul2820";
  const linkedinLink = "https://www.linkedin.com/in/mridul2820";
  const wesbiteLink = "https://www.mridul.tech";

  const colorfulBox = `  
  \x1b[38;5;51m+---------------------------------------------------------+
  | \x1b[38;5;105m${message}\x1b[38;5;51m           |
  +---------------------------------------------------------+
  | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                     \x1b[38;5;51m|
  | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                   \x1b[38;5;51m|
  | \x1b[38;5;93mGitHub:\x1b[0m \x1b[38;5;39m${githubLink}                   \x1b[38;5;51m|
  | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}        \x1b[38;5;51m|
  +---------------------------------------------------------+\x1b[0m`;

  console.log(colorfulBox);
}
logDetails();
