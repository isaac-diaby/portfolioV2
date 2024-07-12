export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  createdAt: string;
  liveSite?: string;
  codeBase?: string;
}
