import Button from "../components/Pri-Button.jsx";
import hero from "../assets/hero-image.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text font-body ">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-sm flex ">

        <div className="md:col-span-7 my-8" >
          <div className="text-sm font-semibold uppercase text-primary p-8">LEVEL UP YOUR CAREER</div>
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

        <img
          src={hero}
          alt="Hero illustration for interview prep"
          className="w-64 h-auto object-contain md:object-cover rounded-md p-md mt-8"
          loading="lazy"
        />
      </section>

<div className="max-w-sm"></div>
      

      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
        {/* Left column */}
        

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
      <section>
        {/* Card-1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm transform skew-y-3 hover:scale-105 transition">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
            <span role="img" aria-label="flexed bicep">💪</span>
            Confidence Booster
          </h2>
          <p className="text-gray-600">
            Practise one question at a time in a focused flashcard flow that builds comfort and interview readiness.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-xl grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {/* Second button */}
        <div className="max-w-7xl mx-auto px-margin-inline-base py-space-xl flex justify-center">
          <Button to="/roles">Get Started</Button>
        </div>
      </section>
    </main>
  );
}
