
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

export function generateSocialShareLink(type: 'twitter' | 'linkedin' | 'facebook', url: string, title?: string): string {
  switch (type) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    default:
      return '';
  }
}

// GitHub username constant for consistency across the application
export const GITHUB_USERNAME = 'Zunair890';

// Generate GitHub stats URLs with green theme for consistency
export function getGitHubUrls() {
  return {
    profile: `https://github.com/${GITHUB_USERNAME}`,
    // Using green color for contribution chart
    contributionChart: `https://ghchart.rshah.org/2ecc71/${GITHUB_USERNAME}`,
    statsCard: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&theme=vue&bg_color=0D1117&icon_color=2ecc71&title_color=2ecc71&text_color=FFFFFF`,
    topLangsCard: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&theme=vue&bg_color=0D1117&icon_color=2ecc71&title_color=2ecc71&text_color=FFFFFF`,
    streakStatsCard: `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=vue&background=0D1117&ring=2ecc71&fire=2ecc71&currStreakLabel=2ecc71&hide_border=true`
  };
}
