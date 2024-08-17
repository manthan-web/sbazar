
export default function Values() {
    return (
      <section className="w-full bg-zinc-200 md:bg-transparent py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-12 px-4 text-center md:px-6 lg:gap-20">
          <div className="space-y-3 text-left md:text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Core Values</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These principles guide our teams work and shape the way we interact with our customers.
            </p>
          </div>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted p-6 text-center transition-all duration-300 hover:scale-105">
              <LightbulbIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly seek new and better ways to solve problems, always pushing the boundaries of whats
                possible.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted p-6 text-center transition-all duration-300 hover:scale-105">
              <HeartIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Empathy</h3>
              <p className="text-muted-foreground">
                We strive to deeply understand our customers needs and challenges, and to provide solutions that truly
                make their lives better.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted p-6 text-center transition-all duration-300 hover:scale-105">
              <BoltIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Agility</h3>
              <p className="text-muted-foreground">
                We move quickly, adapting to changing market conditions and customer demands to stay ahead of the curve.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted p-6 text-center transition-all duration-300 hover:scale-105">
              <LeafIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to building a business that is environmentally responsible and socially conscious,
                creating a better future for all.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted p-6 text-center transition-all duration-300 hover:scale-105">
              <BriefcaseIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality products and services, always striving to exceed our
                customers expectations.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-muted p-6 text-center transition-all duration-300 hover:scale-105">
              <SmileIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Joy</h3>
              <p className="text-muted-foreground">
                We believe in the power of positivity and strive to bring a sense of joy and delight to everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function BoltIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }
  
  
  function BriefcaseIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }
  
  
  function HeartIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
  
  
  function LeafIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  }
  
  
  function LightbulbIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  }
  
  
  function SmileIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    )
  }