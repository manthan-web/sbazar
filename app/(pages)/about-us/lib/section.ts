export interface Section {
  id: number;
  title: string;
  slug: string;
  content: string;
}

export const sections: Section[] = [
  { id: 1, title: "Mission & Vision", slug: "introduction", content: "### Welcome to our documentation \nThis is the **introduction** section." },
  { id: 2, title: "Vision to Virtual", slug: "vision2virtual", content: "To get started with our product..." },
  {
    id: 3,
    title: "Impressum",
    slug: "impressum",
    content: `
## Welcome to Our Legal Disclosure Page

At Snext, transparency is the foundation of trust. Here's everything you need to know about us, in compliance with German law.  

## Official Company Information
- **Name:** Snext UG (haftungsbeschränkt)  
- **Address:** Masurenstr. 9, D-50765 Köln, Germany  
- **Telephone:** +49 176 77991199  
- **E-Mail:** info@snext.app  
- **Represented by:** Saravanan Jayabalan, CEO  

## Registration Details
- **Commercial Register:** Amtsgericht Köln  
- **Register Number:** HRB 105237  

## Tax Information
- **VAT ID:** DE 139/5823 1231  

## Website Hosting
Hosted on snext.app, ensuring seamless access to our services.  

## Content Responsibility
As per § 55 Abs. 2 RStV, Saravanan Jayabalan, at our headquarters.  

      `
  },]