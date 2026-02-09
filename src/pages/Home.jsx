import Button from "../components/Pri-Button.jsx";
import CardHomepage from "../components/CardHomepage.jsx";
import hero from "../assets/hero-image.png";

export default function Home() {
  return (
    <main className="max-w-screen flex flex-col gap-[var(--space-xl)] bg-background text-text font-body ">

      <section className="flex flex-col">
    		<div className="flex flex-row md:flex-col sm:flex-col gap-8 sec-1_imagetext_container">
    			<div className="w-[60%] md:w-full sec-1_text-container ">
    				{/* Level up tag */}
    				<div className="levelup-tag">
      				<p className="levelup-tag-text">LEVEL UP YOUR CAREER</p>
    				</div>
    				<h1>
      				Scrum your way to a confident interview with role-based flashcards.
    				</h1>
    				<p className="mt-space-md text-lg text-text font-medium">
      				Level up with Chingus worldwide! practise anytime, anywhere!
    				</p>
  				</div>
					<div className="w-[50%] md:w-full">
						<img
    					src={hero}
    					alt="Hero illustration for interview prep"
    					className="w-full object-contain md:object-cover rounded-md p-md mt-8"
    					loading="lazy"
  					/>
					</div>
  			</div>

  		  <div className="mt-space-lg flex gap-space-sm">
      	  <Button to="/roles">Get Started</Button>
    	  </div>

      </section>
      

      <section className="px-margin-inline-base py-space-xl flex flex-col md:flex-col gap-[var(--space-xl)]">

        {/* Features Card row */}
        <div className="flex flex-row md:flex-col lg:flex-col gap-[var(--space-md)]">
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
