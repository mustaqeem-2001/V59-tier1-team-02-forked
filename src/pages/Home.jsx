import CardHomepage from "../components/CardHomepage";
import hero from "../assets/hero2.png";
import Button from "../components/Pri-Button";

export default function Home() {
  return (
    <main className="max-w-screen flex flex-col gap-[var(--space-xl)] bg-background text-text font-body ">

      <section className="flex flex-col">
        {/* Text and Image Container */}
    		<div className="flex flex-col  sec-1_imagetext_container">
          {/* Section 1 text  */}
    			<div className="w-full md:w-full sec-1_text-container ">
    				{/* Level up tag */}
    				<div className="levelup-tag">
      				<p className="levelup-tag-text">LEVEL UP YOUR CAREER</p>
    				</div>
            {/* Header Text */}
    				<h1 className="w-full headline">
      				Scrum your way to a confident interview with role-based flashcards.
    				</h1>
    				<h4 className="mt-space-md text-[var(--h4-size)] font-semibold">
      				Level up with Chingus worldwide! 
              practise anytime, anywhere!
    				</h4>
  				</div>
          {/* Hero Image Container */}
					<div className="w-full flex justify-center md:w-full hero_image-container">
            {/* Hero Image */}
						<img
    					src={hero}
    					alt="Hero illustration for interview prep"
    					className="w-full object-contain md:object-cover rounded-md p-md mt-8 hero-image"
    					loading="lazy"
  					/>
					</div>
  			</div>

  		

      </section>
      

      <section className="px-margin-inline-base py-space-xl flex flex-col md:flex-col gap-[var(--space-xl)]">

        {/* Features Card row */}
        <div className="features-cards-container flex flex-col gap-[var(--space-sm)]">
        {/* Card-1 */}
          <CardHomepage 
            emoji="💪"
            title="Confidence Booster"
            description="Practise one question at a time in a focused flashcard flow that builds comfort and interview readiness."
          />
          <CardHomepage 
            emoji="🎯"
            title="Targeted Practise Questions"
            description="Select your Scrum role and get questions tailored to your specific role."
          />
          <CardHomepage 
            emoji="⚡"
            title="Instant Feedback"
            description="Know immediately if you’re right or wrong, with clear rationale to help you improve as you go."
          />
        </div>

        {/* Second button */}
        <div className="max-w-7xl mx-auto px-margin-inline-base py-space-xl flex justify-center">
          <Button to="/roles">Get Started</Button>
        </div>
      </section>
    </main>
  );
}
