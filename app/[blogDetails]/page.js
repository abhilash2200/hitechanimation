'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

const blogData = [
    {
      slug: "an-inside-look-at-media-and-animation-studios",
      title: "Behind the Screens: An Inside Look at Media and Animation Studios",
      date: "January 29, 2024",
      image: "/assets/img/blogs/media-production-studios-25-01-2024.jpg",
      tableOfContents: [
        { id: "1", label: "The Role of a Media Production Studio" },
        { id: "2", label: "Services Provided by a Media Production Studio" },
        { id: "3", label: "Types of Productions Created at Media Studios" },
        { id: "4", label: "The Role of an Animation Studio" },
        { id: "5", label: "Services Provided by an Animation Studio" },
        { id: "6", label: "Types of Animated Productions" },
        { id: "7", label: "Creativity within Constraints" },
      ],
      content: `
        <p>Media production studios and animation companies are integral parts of creating movies, TV shows, commercials, and other video content that we enjoy watching. While they work behind the scenes, their creative and technical contributions help bring stories and visuals to life.</p>
        <p>These studios provide the facilities, equipment, services, and talent needed for any type of film, video, or animated project - from major studio features to commercials, corporate videos, or web content.</p>
  
        <h2 id="1">The Role of a Media Production Studio</h2>
        <p>A media production studio is a facility where various types of video content are produced. This may include films, television shows, commercials, corporate videos, online videos, and more. The studio provides the physical infrastructure for staging and shooting productions and facilitates the overall production workflow.</p>
        <p>Media production studios offer sound stages, production offices, equipment rentals, post-production facilities, and a wide range of production services. A full-service studio has everything needed under one roof to take a project from concept to final delivery.</p>
  
        <h2 id="2">Services Provided by a Media Production Studio</h2>
        <p>While each studio has unique capabilities, most offer core services that support the production process at every stage.</p>
        <ul>
          <li><strong>Pre-production:</strong> Studios offer office and meeting spaces for scripts and concepts to be developed. They also have equipment rentals so productions can test and plan technical approaches.</li>
          <li><strong>Production:</strong> The studio provides sound stages, production equipment, dressing rooms, and more for principal photography and scene work. Support areas like mills, shops, and warehouses help with fabrication and construction.</li>
          <li><strong>Post-production:</strong> Studios have editing suites, mixing stages, and visual effects services for finishing video projects. They can also coordinate delivery and distribution when projects wrap.</li>
          <li><strong>Talent services:</strong> Many studios have contacts for sourcing crew, extras, and specialty talent. They can additionally help with union relations and casting.</li>
          <li><strong>Support services:</strong> Studios offer catering, security, janitorial services, IT, and other support to meet a production's everyday needs.</li>
        </ul>
  
        <h2 id="3">Types of Productions Created at Media Studios</h2>
        <p>All types and sizes of video productions can benefit from renting space and services at media production studios:</p>
        <ul>
          <li><strong>Feature films:</strong> Major studio films use sound stages and backlots for big-budget productions. Indie films can also find flexible rental space.</li>
          <li><strong>Episodic television:</strong> TV shows use studios to film multiple episodes efficiently. Long-running shows may occupy dedicated stages.</li>
          <li><strong>Commercials:</strong> Ads are often filmed on studio lots that allow quick turnarounds. Stages can be dressed for diverse settings.</li>
          <li><strong>Live television:</strong> News, sports, talk shows, and events are produced using studio galleries, control rooms, and broadcast equipment.</li>
          <li><strong>Corporate media:</strong> Studios rent facilities for corporate videos, training content, presentations, and internal messaging.</li>
        </ul>
  
        <h2 id="4">The Role of an Animation Studio</h2>
        <p>While live-action projects use media studios, animated content is created at specialized animation studios. These companies develop, produce, and deliver animated films, series, shorts, and other content.</p>
        <p><strong>Animation production companies</strong> bring illustrations to life through movement and visual effects. This requires a pipeline centered around skilled animators using computer software and technology. The studio environment unites storytellers, artists, and tech talent to build animated worlds.</p>
  
        <h2 id="5">Services Provided by an Animation Studio</h2>
        <ul>
          <li><strong>Development:</strong> Creating concepts and scripts, character/world design, storyboarding, layouts, and pre-visualization.</li>
          <li><strong>Asset creation:</strong> Modeling, texturing, rigging, and lighting of characters, props, and environments. Building animation libraries.</li>
          <li><strong>Animation:</strong> Bringing assets to life through blocking, movement, expressions, VFX animation, and final polish.</li>
          <li><strong>Rendering:</strong> Computer processing of animation scenes using advanced software engines.</li>
          <li><strong>Compositing:</strong> Layering rendered elements with special effects, camera moves, lighting, and cinematography.</li>
          <li><strong>Post-production:</strong> Editing, sound design, music scoring, and final delivery of the animated film.</li>
        </ul>
  
        <h2 id="6">Types of Animated Productions</h2>
        <ul>
          <li><strong>3D animation:</strong> Using CGI software to craft 3D worlds and characters that mimic reality. Heavily used in feature films.</li>
          <li><strong>2D animation:</strong> Traditional hand-drawn or digital 2D animation used for TV shows and short films.</li>
          <li><strong>Stop motion:</strong> Physical figures meticulously positioned and photographed one frame at a time.</li>
          <li><strong>Motion graphics:</strong> Animating logos, text, and simple illustrations, used in advertising and branding.</li>
          <li><strong>Explainer videos:</strong> Animating illustrations, charts, and graphics to communicate complex ideas and products.</li>
        </ul>
  
        <h2 id="7">Creativity within Constraints</h2>
        <p>Whether working on big-budget blockbusters or viral web shorts, production studios operate within the constraints of schedule, budget, and resources. Their role is to optimize efficiency without sacrificing creative vision. It takes experience to problem-solve and innovate solutions. At the end of the day, production studios share the satisfaction of contributing to meaningful projects that entertain audiences.</p>
      `,
    },
  ];

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogData.find((post) => post.slug === slug);

  if (router.isFallback || !blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium text-gray-600">Loading blog details...</p>
      </div>
    );
  }

  return (
    <section className="blog1 bg-[#F4F4F4] py-32 lg:py-28">
      <div className="container mx-5 lg:mx-28 px-1 lg:px-5">
        <div className="bg-white px-5 py-10 rounded-xl">
          <h1
            className="text-[25px] md:text-[32px] lg:text-[32px] my-1 lg:my-3"
            style={{ fontFamily: "Russo One, sans-serif", fontWeight: 400 }}
          >
            {blog.title}
          </h1>
          <p
            className="mt-2 text-[13px] md:text-[16px] lg:text-[16px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
          >
            {blog.date}
          </p>
          <Image
            className="mt-10 rounded-xl"
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
          />
          <div
            className="mt-8 text-[13px] md:text-[16px] lg:text-[16px] space-y-5"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
