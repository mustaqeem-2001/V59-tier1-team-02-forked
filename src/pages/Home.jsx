import Button from "../components/Pri-Button.jsx"
import CardHomepage from "../components/CardHomepage.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-text font-body">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-sm flex items-center justify-between">
        <div className="text-sm font-semibold uppercase text-primary">LEVEL UP YOUR CAREER</div>
        <img 
        src="../assets/hero-image.png" alt="Hero illustration for interview prep"
        className="w-80 h-96 object-cover rounded-md p-md"
        loading="lazy"/>
      </section>

      
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
        {/* Left column */}
        <div className="md:col-span-7">
          <h1 className="font-heading text-h1 leading-tight text-primary">
            Scrum your way to a confident interview with role-based flashcards.
          </h1>
          <p className="mt-space-md text-lg text-text font-medium">
            Level up with Chingus worldwide! practise anytime, anywhere!
          </p>

          <div className="mt-space-lg flex gap-space-sm">

            <Button to="/roles">Get Started</Button>

          </div>
        </div>

        {/* Right column - blank card area for manual image placement */}
        <div className="md:col-span-5 flex items-center justify-center">
          <div
            className="w-80 h-96 rounded-lg border-2 border-dashed border-secondary"
            aria-hidden="true"
            title="Card image placeholder - drop your image here manually"
          />
        </div>
      </section>

      {/* Features Card row */}
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-xl grid grid-cols-1 md:grid-cols-3 gap-space-lg">

        <CardHomepage />
        
        {/* Second button */}
        <div className="max-w-7xl mx-auto px-margin-inline-base py-space-xl flex justify-center">

          <Button to="/roles">Get Started</Button>

        </div>
      </section>
    </main>
  );
}
