export interface Section {
    id: number;
    title: string;
    slug: string;
    content: string;
  }
  
  export const sections: Section[] = [
    { id: 1, title: "About Sbazar", slug: "introduction", content: "### Welcome to our documentation \nThis is the **introduction** section." },
    { id: 2, title: "Getting Started", slug: "getting-started", content: "To get started with our product..." },
    { id: 3, title: "Privacy Policies", slug: "privacy", content: "Our product offers the following features..." },
    { id: 4, title: "API Reference", slug: "api-reference", content: "Here's a comprehensive API reference..." },
    { id: 5, title: "Troubleshooting", slug: "troubleshooting", content: "Common issues and their solutions..." },
  ];