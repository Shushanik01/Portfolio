export const sortSkills = (skills: string[]): string[] =>
  [...skills].sort((a, b) => a.localeCompare(b))
