import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm Shreya Shree, an enthusiastic student at IIT Kanpur with a passion coding.I am driven by a passion for creating innovative solutions that can make a significant impact.
              My academic journey is marked by curiosity and a relentless pursuit of knowledge, not just within the confines of my coursework but also through exploring emerging technologies and trends. 
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
            In my free time, you’ll often find me diving into random searches, 
            exploring the depths of the web and uncovering new, 
            intriguing facts about the world. I also have a keen interest in philosophy, 
            which often inspires me to think deeply and approach problems from unique perspectives. 
            You might also find me to sprinkle littlest amount humor into my day, always trying to find the lighter side of 
            things and sharing a good joke.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
            As I continue to grow and develop my skills, I am excited about the journey ahead and the opportunities to collaborate, innovate, and leave a lasting mark in the tech industry. Let’s create something extraordinary together!"
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo-me.jpg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo-me.jpg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
