async function fetchRepoInfo(username, repoName) {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}`
      );
      // console.log(await response.json());
      if (!response.ok) {
        throw new Error(
          `Failed to fetch the repository information ${username} and ${response.statusText}`
        );
      }
      const info = await response.json();
      return info;
    } catch (error) {
      console.error("Error fetching repository information:", error);
      throw error; // Re-throwing the error for the caller to handle
    }
  }
  async function processRepoInfo(username, repoName) {
    try {
      const info = await fetchRepoInfo(username, repoName);
      // extracting the required details
      const { name, description, stargazers_count, forks_count, owner } = info;
      // Displaying the processed repository information
      console.log(`Repository: ${name}`);
      console.log(`Owner: ${owner.login}`);
      console.log(`Description: ${description || "No description"}`);
      console.log(`Stars: ${stargazers_count}`);
      console.log(`Forks: ${forks_count}`);
    } catch (error) {
      console.error("Error fetching repository information:", error);
      throw error; // Re-throwing the error for the caller to handle
    }
  }
  processRepoInfo("thecuriousteam", "PyLibLog");