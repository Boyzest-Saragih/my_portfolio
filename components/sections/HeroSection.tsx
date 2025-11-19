import TextType from '../TextType';
import Threads from '../Threads';
import TrueFocus from '../TrueFocus';
import { Button } from '../ui/button';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center">
            {/* Background Threads */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center text-center px-4">
                <TrueFocus
                    sentence="Hi, I'm Enjel Boyzest Saragih"
                    blurAmount={2}
                    animationDuration={0.3}
                />

                <div className="mt-5 max-w-2xl text-lg md:text-xl font-bold text-gray-300 leading-relaxed">
                    <TextType
                        loop={false}
                        text="I love building real-world applications, exploring AI/ML,
            and turning ideas into working products. Currently studying
            at Mikroskil University, actively developing projects using Flutter, Python, and JavaScript."
                    />
                </div>

                <div className="flex gap-6 mt-10">
                    <Button variant="outline" className="px-6 py-3 text-lg">
                        Download CV
                    </Button>
                    <Button variant="default" className="px-6 py-3 text-lg">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
