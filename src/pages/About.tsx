const About = () => {
  return (
    <main>
      <section className="mx-auto my-4 h-screen max-w-7xl border border-black">
        <h1 className="relative left-8 z-10 text-7xl font-extrabold lg:text-9xl">
          ABOUT
        </h1>
        <div className="relative -top-10 z-0 ml-auto flex h-[75%] max-w-6xl flex-col items-end justify-center   text-pretty border border-black bg-white/70 lg:mr-14">
          <div className="relative -top-8 right-20 max-w-3xl  text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ab
            consequuntur repellendus dolorum qui sequi consectetur veritatis cum
            ipsum, aut obcaecati laborum dicta optio sit quod atque eius itaque?
            Adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Culpa, a quis sapiente corrupti quaerat quo quidem debitis
            laudantium laborum voluptatum nisi non dignissimos quibusdam quod
            suscipit neque eveniet ratione pariatur!
            <div className="relative top-10 text-xl">
              <button className="mr-2 border border-black bg-black px-8 py-2 text-white transition-all hover:bg-transparent hover:text-black">
                Button
              </button>
              <button className="border border-black px-8 py-2">Button</button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto my-4 h-screen max-w-7xl border border-black"></section>
    </main>
  );
};

export default About;
