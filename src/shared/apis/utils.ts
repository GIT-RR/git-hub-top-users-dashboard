// Git Api is secured. Only allows x requests per minute. Use your own git credentials to increase the requests per minute. Update gitEmail and gitPassword.
// Error Message: "API rate limit exceeded for 85.244.138.154. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
// NOTE: DONT COMMIT YOU EMAIL OR PASSWORD !!!
const gitEmail = '';
const gitPassword = '';

export const getGitCredentials = () => {
  const useGitCredentials = gitEmail && gitPassword;

  if (useGitCredentials) {
    return `&client_id=${gitEmail}&client_secret=${gitPassword}`;
  }
  return '';
};
