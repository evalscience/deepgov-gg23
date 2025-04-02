/**
 * Fetches all agent directories from the GitHub repository, then retrieves
 * the constitution markdown file and constructs the profile image URL for each agent.
 *
 * @returns A promise that resolves to an array of agents, each containing:
 *          - name: The agent's name (folder name in the repository)
 *          - profileUrl: URL to the agent's profile image
 *          - constitution: The text content of the agent's constitution markdown file
 */
export async function fetchAgents(): Promise<
  { name: string; profileUrl: string; constitution: string }[]
> {
  const baseURL = `https://api.github.com/repos/evalscience/deepgov-gg23/contents/agents`;
  const contentURL = `https://raw.githubusercontent.com/evalscience/deepgov-gg23/refs/heads/main/agents`;

  const folders = await fetch(baseURL)
    .then((r) => r.json() as Promise<{ name: string; type: "dir" }[]>)
    .then((r) => r.filter((r) => r.type === "dir").map((r) => r.name));

  return Promise.all(
    folders.map(async (name: string) => ({
      name,
      profileUrl: `${contentURL}/${name}/visuals/profile.png`,
      constitution: await fetch(
        `${contentURL}/${name}/modelspec/constitution.md`
      ).then((r) => r.text()),
    }))
  );
}
