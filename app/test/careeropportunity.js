import { useEffect } from 'react';
import Script from 'next/script';

const DancingWords = () => {
    const splitWords = () => {
        const textNode = document.querySelector(".text");
        const text = textNode.textContent;
        const newDomElements = text.split(" ").map((text) => {
            const highlighted =
                text.startsWith(`"30under30"`) ||
                text.startsWith(`CTO`) ||
                text.startsWith(`Mythrill`);
            return `<span class="word ${highlighted ? "highlighted" : ""}">${text}</span>`;
        });
        textNode.innerHTML = newDomElements.join("");
    };

    const renderCanvas = () => {
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Runner = Matter.Runner;

        const dancingContainer = document.querySelector('.dancing');
        const containerRect = dancingContainer.getBoundingClientRect();

        const params = {
            isStatic: true,
            render: {
                fillStyle: "transparent"
            }
        };

        const canvasSize = {
            width: containerRect.width,
            height: containerRect.height
        };

        const engine = Engine.create({});
        const render = Render.create({
            element: dancingContainer,
            engine: engine,
            options: {
                ...canvasSize,
                background: "transparent",
                wireframes: false
            }
        });

        const floor = Bodies.rectangle(
            canvasSize.width / 2,
            canvasSize.height,
            canvasSize.width,
            50,
            params
        );

        const wall1 = Bodies.rectangle(
            0,
            canvasSize.height / 2,
            50,
            canvasSize.height,
            params
        );

        const wall2 = Bodies.rectangle(
            canvasSize.width,
            canvasSize.height / 2,
            50,
            canvasSize.height,
            params
        );

        const top = Bodies.rectangle(
            canvasSize.width / 2,
            0,
            canvasSize.width,
            50,
            params
        );

        const wordElements = dancingContainer.querySelectorAll(".word");
        const wordBodies = [...wordElements].map((elemRef) => {
            const width = elemRef.offsetWidth;
            const height = elemRef.offsetHeight;

            return {
                body: Matter.Bodies.rectangle(canvasSize.width / 2, 0, width, height, {
                    render: {
                        fillStyle: "transparent"
                    }
                }),
                elem: elemRef,
                render() {
                    const { x, y } = this.body.position;
                    this.elem.style.top = `${y - 20}px`;
                    this.elem.style.left = `${x - width / 2}px`;
                    this.elem.style.transform = `rotate(${this.body.angle}rad)`;
                }
            };
        });

        const mouse = Matter.Mouse.create(dancingContainer);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        World.add(engine.world, [
            floor,
            ...wordBodies.map((box) => box.body),
            wall1,
            wall2,
            top,
            mouseConstraint
        ]);

        render.mouse = mouse;
        Runner.run(engine);
        Render.run(render);

        (function rerender() {
            wordBodies.forEach((element) => {
                element.render();
            });
            Matter.Engine.update(engine);
            requestAnimationFrame(rerender);
        })();
    };

    useEffect(() => {
        splitWords();
        renderCanvas();
    }, []);

    return (
        <>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js" strategy="beforeInteractive" />
            <div className="bg-[#D3575A] py-5 lg:py-24">
                <div className="container mx-5 lg:mx-28 px-1 lg:px-5">
                    <div className="text-[22px] md:text-[32px] lg:text-[32px] font-bold text-white my-1 lg:my-3">
                        <h2>Career Opportunities</h2>
                    </div>
                </div>
                <div className="dancing" style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <div className="text">
                        Animation is the process of creating the illusion of motion by displaying a sequence of images, or frames, in
                        rapid succession. Techniques like keyframing, tweening, and rigging are used to control movement. 2D animation
                        involves hand-drawn or digital art, while 3D animation uses models and motion capture. Animation enhances
                        storytelling in films, games, and virtual reality, making it a powerful visual medium.
                    </div>
                </div>
            </div>
        </>
    );
};

export default DancingWords;
