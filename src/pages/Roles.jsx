import arrow from "../assets/curly-arror-img.png";

const roles = ["Scrum Master", "Product Owner", "Developer", "Product Designer"];

export default function Roles() {
  return(
      <div >
        <div className="flex flex-col items-center justify-center gap-6 p-8">
          <h3>This is the Roles Page</h3>
        </div>
        <img src={arrow} alt="Arrow" className="w-[12rem] h-auto mx-[24rem]" />
         

      </div>
  );
}

