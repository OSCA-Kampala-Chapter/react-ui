function LandingPage() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center w-full h-full  overflow-hidden [--geist-foreground:#fff] dark:[--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
        <h1 className="mt-12 lg:!mt-20 mx-6 w-[300px] md:!w-full font-extrabold text-5xl lg:text-6xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
          React-UI
        </h1>
        <p className="mx-6 text-xl max-h-[112px] md:max-h-[96px] w-[315px] md:w-[660px] md:text-2xl font-space-grotesk text-center text-[#666666] dark:text-[#888888]">
          The React Components Library
        </p>
      </main>
    </>
  );
}

export default LandingPage;
